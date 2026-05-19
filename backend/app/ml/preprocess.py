import pandas as pd

def load_and_preprocess_data(file_path):

    # Load dataset
    df = pd.read_csv(file_path)

    # Convert timestamp column
    df["timestamp"] = pd.to_datetime(df["date_time"])

    # Remove duplicate rows
    df = df.drop_duplicates()

    # Fill missing values
    df = df.ffill()

    # Create features
    df["hour"] = df["timestamp"].dt.hour
    df["day"] = df["timestamp"].dt.day
    df["month"] = df["timestamp"].dt.month
    df["weekday"] = df["timestamp"].dt.weekday

    # Peak hour detection
    df["is_peak_hour"] = df["hour"].apply(
        lambda x: 1 if 7 <= x <= 10 or 17 <= x <= 20 else 0
    )

    return df