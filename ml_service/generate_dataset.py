import pandas as pd
import numpy as np

np.random.seed(42)

rows = 10000

data = pd.DataFrame({
    "credit_score": np.random.randint(300, 850, rows),
    "annual_revenue": np.random.randint(200000, 5000000, rows),
    "monthly_expenses": np.random.randint(20000, 300000, rows),
    "existing_loans": np.random.randint(0, 5, rows),
    "monthly_emi": np.random.randint(0, 100000, rows),
    "gst_months": np.random.randint(0, 60, rows),
    "collateral_value": np.random.randint(0, 3000000, rows),
    "loan_amount": np.random.randint(100000, 2000000, rows),
    "years_in_business": np.random.randint(0, 20, rows),
})

# Derived features
data["debt_to_income"] = (data["monthly_emi"] * 12) / data["annual_revenue"]
data["loan_to_income"] = data["loan_amount"] / data["annual_revenue"]
data["profit_estimate"] = data["annual_revenue"] - (data["monthly_expenses"] * 12)

# Approval logic (Weighted scoring simulation)

score = (
    (data["credit_score"] / 850) * 0.3 +
    (1 - data["debt_to_income"].clip(0,1)) * 0.2 +
    (data["years_in_business"] / 20) * 0.15 +
    (data["gst_months"] / 60) * 0.1 +
    (data["collateral_value"] / 3000000) * 0.15 +
    (1 - data["loan_to_income"].clip(0,1)) * 0.1
)

data["loan_approved"] = (score > 0.5).astype(int)

data.to_csv("dataset.csv", index=False)

print("MSME Synthetic Dataset Generated Successfully!")