function AnomalyAlerts() {

  const alerts = [
    "Sudden traffic spike detected on Highway",
    "Heavy congestion expected at 6 PM",
    "Route B showing abnormal traffic pattern",
    "Downtown traffic increased by 35%",
  ];

  return (

    <div className="table-section">

      <h2>Traffic Anomaly Alerts</h2>

      {alerts.map((alert, index) => (

        <div
          key={index}
          className="alert-box"
        >
          ⚠️ {alert}
        </div>

      ))}

    </div>
  );
}

export default AnomalyAlerts;