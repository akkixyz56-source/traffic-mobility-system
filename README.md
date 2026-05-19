# AI-Based Traffic & Mobility Forecasting System 🚦

## Overview
The AI-Based Traffic & Mobility Forecasting System is a full-stack AI-powered platform that predicts traffic conditions, detects anomalies, analyzes congestion patterns, and provides intelligent mobility recommendations using machine learning and data analytics.

The system processes historical traffic datasets and visualizes predictions through an advanced analytics dashboard.

---

# Key Features

## 1. Traffic Volume Forecasting
- Hourly traffic prediction
- Daily congestion forecasting
- Route-wise traffic estimation
- Peak-hour traffic analysis
- Next 24-hour and 7-day predictions

### Forecasting Techniques
- Regression-based prediction
- Time-series analysis
- Feature engineering

---

## 2. Congestion Prediction & Risk Alerts
The system predicts:
- High congestion zones
- Peak traffic periods
- Sudden traffic spikes
- Abnormal route patterns

### Example Alerts
- Heavy congestion expected at 6 PM
- Downtown traffic increased by 35%
- Sudden traffic spike detected on Highway

---

## 3. Mobility Optimization Engine
Provides AI-based recommendations:
- Suggested alternate routes
- Best travel times
- Route balancing suggestions
- Congestion reduction recommendations

---

## 4. Traffic Anomaly Detection
Detects unusual traffic behavior using:
- Statistical thresholding
- Z-score detection
- Peak deviation analysis

### Detects
- Sudden traffic spikes
- Unexpected low traffic
- Event-based traffic surges
- Sensor/data anomalies

---

## 5. Scenario Simulation System
Allows simulation of:
- Rain impact
- Festival traffic surge
- Road closures
- Increased vehicle load

### Simulation Output
- Delay prediction
- Congestion impact
- Travel time changes

---

## 6. Advanced Analytics Dashboard
Dashboard visualizes:
- Historical vs predicted traffic
- Traffic distribution charts
- Congestion analytics
- Peak-hour metrics
- AI prediction accuracy
- Traffic anomaly alerts

---

# Tech Stack

## Frontend
- React.js
- CSS3
- Recharts

## Backend
- Python
- FastAPI

## Machine Learning
- Scikit-learn
- Pandas
- NumPy

## Database
- SQLite

---

# Project Structure

```bash
traffic-mobility-system/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── model.py
│   │   ├── preprocess.py
│   │   └── traffic_dataset.csv
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│
├── README.md
└── requirements.txt
```

---

# Dataset Information

The dataset includes:
- Timestamp
- Route/Location ID
- Vehicle count
- Congestion metrics
- Traffic speed
- Traffic volume

### Feature Engineering
Generated features:
- Hour
- Day
- Month
- Weekday
- Peak-hour indicator

---

# Data Preprocessing

Steps performed:
- Removed duplicate rows
- Filled missing values
- Converted timestamps
- Created temporal features
- Normalized traffic metrics

Example:

```python
df["timestamp"] = pd.to_datetime(df["date_time"])

df["hour"] = df["timestamp"].dt.hour
df["day"] = df["timestamp"].dt.day
df["month"] = df["timestamp"].dt.month
df["weekday"] = df["timestamp"].dt.weekday
```

---

# Forecasting Workflow

1. Data collection
2. Data preprocessing
3. Feature engineering
4. Model training
5. Prediction generation
6. Dashboard visualization

---

# Backend API Endpoints

## Get Predictions

```http
GET /predict
```

Returns traffic forecast results.

---

## Get Alerts

```http
GET /alerts
```

Returns congestion and anomaly alerts.

---

## Get Analytics

```http
GET /analytics
```

Returns dashboard analytics data.

---

# Installation & Setup

## Clone Repository

```bash
git clone https://github.com/your-username/traffic-mobility-system.git
```

---

# Backend Setup

```bash
cd backend

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Backend runs at:

```bash
http://127.0.0.1:8000
```

---

# Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at:

```bash
http://localhost:5173
```

---

# Dashboard Features

The dashboard contains:
- AI analytics cards
- Interactive charts
- Traffic prediction graphs
- Congestion alerts
- Scenario simulation cards
- Traffic prediction tables

---

# System Architecture

The project follows modular ML architecture:

- Data preprocessing layer
- Forecasting layer
- Analytics layer
- Optimization engine
- Visualization layer

---

# Edge Cases Handled

- Missing timestamps
- Sparse traffic data
- Sudden traffic spikes
- Invalid uploads
- Incomplete route data

---

# Future Improvements

- Real-time traffic APIs
- Live map integration
- Docker deployment
- Automated model retraining
- Notification system
- Deep learning forecasting models

---

# Evaluation Criteria Covered

✅ Traffic forecasting  
✅ Congestion prediction  
✅ Mobility optimization  
✅ Traffic anomaly detection  
✅ Backend API integration  
✅ Advanced analytics dashboard  
✅ Scenario simulation  
✅ ML pipeline organization  
✅ Edge case handling  

---

# Author

Developed as part of the AI-Based Traffic & Mobility Forecasting System assignment.

---

# License

This project is developed for educational and evaluation purposes.


------
Akshaya Gudla
------
