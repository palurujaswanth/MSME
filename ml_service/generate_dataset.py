import pandas as pd
import numpy as np

np.random.seed(42)
rows = 10000

# ---------------- CORE ENTERPRISE FEATURES ----------------

data = pd.DataFrame({
    "investment_amount": np.random.randint(
        int(1e5), int(5e8), rows, dtype=np.int64
    ),

    "annual_turnover": np.random.randint(
        int(2e5), int(2.5e9), rows, dtype=np.int64
    ),

    "years_in_business": np.random.randint(0, 25, rows),

    "number_of_employees": np.random.randint(1, 300, rows),

    "udyam_registered": np.random.choice([0, 1], rows, p=[0.3, 0.7]),
    "gst_registered": np.random.choice([0, 1], rows, p=[0.2, 0.8]),

    "gender": np.random.choice([0, 1], rows, p=[0.65, 0.35]),
    "social_category": np.random.choice([0, 1, 2, 3], rows),

    "minority_status": np.random.choice([0, 1], rows, p=[0.85, 0.15]),
    "disability_status": np.random.choice([0, 1], rows, p=[0.95, 0.05]),
    "age": np.random.randint(21, 65, rows),

    "rural_urban": np.random.choice([0, 1], rows, p=[0.6, 0.4]),
    "state": np.random.randint(0, 28, rows),
    "north_east_region": np.random.choice([0, 1], rows, p=[0.9, 0.1]),
    "aspirational_district": np.random.choice([0, 1], rows, p=[0.85, 0.15]),

    "exporter": np.random.choice([0, 1], rows, p=[0.8, 0.2]),
    "startup_dpiit": np.random.choice([0, 1], rows, p=[0.9, 0.1]),
    "green_business": np.random.choice([0, 1], rows, p=[0.85, 0.15]),
    "women_owned": np.random.choice([0, 1], rows, p=[0.7, 0.3])
})

# ---------------- FEATURE ENGINEERING ----------------

data["investment_turnover_ratio"] = data["investment_amount"] / (data["annual_turnover"] + 1)
data["turnover_per_employee"] = data["annual_turnover"] / (data["number_of_employees"] + 1)
data["compliance_score"] = data["udyam_registered"] + data["gst_registered"]

# ---------------- MSME CLASSIFICATION ----------------

def classify_msme(row):
    if row["investment_amount"] <= 1e7 and row["annual_turnover"] <= 5e7:
        return 0  # Micro
    elif row["investment_amount"] <= 1e8 and row["annual_turnover"] <= 5e8:
        return 1  # Small
    elif row["investment_amount"] <= 5e8 and row["annual_turnover"] <= 2.5e9:
        return 2  # Medium
    return 3

data["msme_category"] = data.apply(classify_msme, axis=1)

# ---------------- SCHEME ELIGIBILITY LOGIC ----------------

data["mudra"] = (data["msme_category"] == 0).astype(int)

data["standup_india"] = (
    ((data["social_category"] > 0) | (data["women_owned"] == 1)) &
    (data["years_in_business"] >= 1)
).astype(int)

data["cgtmse"] = (
    (data["udyam_registered"] == 1)
).astype(int)

data["startup_seed"] = (
    (data["startup_dpiit"] == 1) &
    (data["years_in_business"] <= 5)
).astype(int)

data["clcss"] = (
    (data["green_business"] == 1) &
    (data["msme_category"] <= 1)
).astype(int)

data["export_scheme"] = (
    (data["exporter"] == 1)
).astype(int)

data["neids"] = (
    (data["north_east_region"] == 1)
).astype(int)

data["aspirational_scheme"] = (
    (data["aspirational_district"] == 1)
).astype(int)

# ---------------- SAVE ----------------

data.to_csv("msme_dataset.csv", index=False)

print("High-quality MSME Multi-Label Synthetic Dataset Generated Successfully!")