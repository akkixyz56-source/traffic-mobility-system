from backend.app.ml.preprocess import load_and_preprocess_data

df = load_and_preprocess_data("backend/dataset/traffic_data.csv")

print(df.head())
print(df.columns)