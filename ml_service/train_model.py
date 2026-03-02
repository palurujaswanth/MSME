import pandas as pd
import joblib
import numpy as np
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.multioutput import MultiOutputClassifier
from sklearn.metrics import classification_report

# ---------------- LOAD DATA ----------------
data = pd.read_csv("msme_dataset.csv")

# ---------------- FEATURE ENGINEERING ----------------

# Safety divisions
data["investment_turnover_ratio"] = data["investment_amount"] / (data["annual_turnover"] + 1)

data["turnover_per_employee"] = data["annual_turnover"] / (data["number_of_employees"] + 1)

data["business_maturity_score"] = np.where(
    data["years_in_business"] > 10, 3,
    np.where(data["years_in_business"] > 5, 2, 1)
)

data["compliance_score"] = (
    data["udyam_registered"] +
    data["gst_registered"]
)

data["demographic_advantage_score"] = (
    (data["gender"] == 1).astype(int) +   # women
    (data["social_category"] > 0).astype(int) +  # SC/ST/OBC
    data["minority_status"]
)

data["regional_priority_score"] = (
    data["north_east_region"] +
    data["aspirational_district"] +
    data["rural_urban"]
)

data["capital_intensity_score"] = (
    data["investment_amount"] / (data["number_of_employees"] + 1)
)

data["enterprise_scale_index"] = (
    data["annual_turnover"] * 0.6 +
    data["investment_amount"] * 0.4
)

# ---------------- FEATURE LIST ----------------

features = [
    "investment_amount",
    "annual_turnover",
    "years_in_business",
    "number_of_employees",
    "udyam_registered",
    "gst_registered",
    "gender",
    "social_category",
    "minority_status",
    "disability_status",
    "age",
    "rural_urban",
    "state",
    "aspirational_district",
    "north_east_region",
    "exporter",
    "startup_dpiit",
    "green_business",
    "women_owned",
    "investment_turnover_ratio",
    "turnover_per_employee",
    "business_maturity_score",
    "compliance_score",
    "demographic_advantage_score",
    "regional_priority_score",
    "capital_intensity_score",
    "enterprise_scale_index"
]

X = data[features]

# ---------------- MULTI-LABEL TARGET ----------------
# Each scheme is separate binary column
y = data[[
    "mudra",
    "standup_india",
    "cgtmse",
    "startup_seed",
    "clcss",
    "export_scheme",
    "neids",
    "aspirational_scheme"
]]

# ---------------- TRAIN TEST SPLIT ----------------
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# ---------------- SCALING ----------------
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# ---------------- MODEL ----------------
base_model = RandomForestClassifier(
    n_estimators=500,
    max_depth=15,
    min_samples_split=4,
    min_samples_leaf=2,
    random_state=42,
    n_jobs=-1
)

model = MultiOutputClassifier(base_model)

model.fit(X_train_scaled, y_train)

# ---------------- EVALUATION ----------------
y_pred = model.predict(X_test_scaled)

print("Classification Report:")
print(classification_report(y_test, y_pred))

# ---------------- SAVE MODEL ----------------
joblib.dump(model, "scheme_model.pkl")
joblib.dump(scaler, "scheme_scaler.pkl")

print("Improved MSME Scheme Model Saved Successfully!")