import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error
import joblib

from preprocess import load_and_preprocess_data

# Load dataset
df = load_and_preprocess_data("dataset/traffic_data.csv")

# Features
X = df[[
    "temp",
    "rain_1h",
    "snow_1h",
    "clouds_all",
    "hour",
    "day",
    "month",
    "weekday",
    "is_peak_hour"
]]

# Target
y = df["traffic_volume"]

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

# Train model
model = RandomForestRegressor()

model.fit(X_train, y_train)

# Predictions
predictions = model.predict(X_test)

# Accuracy
mae = mean_absolute_error(y_test, predictions)

print("Model trained successfully!")
print("Mean Absolute Error:", mae)

# Save model
joblib.dump(model, "app/ml/traffic_model.pkl")

print("Model saved as traffic_model.pkl")