import PredictionForm from "./components/PredictionForm";
import TrafficChart from "./components/TrafficChart";
import TrafficDistribution from "./components/TrafficDistribution";
import AnomalyAlerts from "./components/AnomalyAlerts";
import ScenarioSimulation from "./components/ScenarioSimulation";

import "./App.css";

import toast from "react-hot-toast";

function App() {

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (

    <div>

      {/* Sidebar */}
      <div className="sidebar">

        <h2>🚦 AI Dashboard</h2>

        <ul>

          <li onClick={() => window.scrollTo(0, 0)}>
            Dashboard
          </li>

          <li onClick={() => scrollToSection("prediction-section")}>
            Predictions
          </li>

          <li onClick={() => scrollToSection("analytics-section")}>
            Analytics
          </li>

          <li onClick={() => scrollToSection("reports-section")}>
            Reports
          </li>

          <li onClick={() => alert("Settings Coming Soon!")}>
            Settings
          </li>

        </ul>

      </div>

      {/* Main Dashboard */}
      <div className="app">

        <h1>AI Traffic Mobility Dashboard</h1>

        {/* Cards */}
        <div className="cards">

          <div className="card">
            <h3>Total Traffic</h3>
            <p>4520</p>
          </div>

          <div className="card">
            <h3>Peak Hour</h3>
            <p>6 PM</p>
          </div>

          <div className="card">
            <h3>Congestion</h3>
            <p>High</p>
          </div>

          <div className="card">
            <h3>AI Accuracy</h3>
            <p>96%</p>
          </div>

        </div>

        {/* Prediction */}
        <div
          className="top-section"
          id="prediction-section"
        >

          <PredictionForm />

        </div>

        {/* Analytics */}
        <div
          className="chart-section"
          id="analytics-section"
        >

          <TrafficChart />

        </div>

        {/* Pie Chart */}
        <TrafficDistribution />

        {/* Alerts */}
        <AnomalyAlerts />

        {/* Simulation */}
        <ScenarioSimulation />

        {/* Reports */}
        <div
          className="table-section"
          id="reports-section"
        >

          <h2>Recent Traffic Predictions</h2>

          <table>

            <thead>

              <tr>
                <th>Area</th>
                <th>Time</th>
                <th>Traffic Volume</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>Downtown</td>
                <td>10 AM</td>
                <td>4520</td>
                <td className="heavy">
                  Heavy
                </td>
              </tr>

              <tr>
                <td>Highway</td>
                <td>1 PM</td>
                <td>3100</td>
                <td className="medium">
                  Medium
                </td>
              </tr>

              <tr>
                <td>City Center</td>
                <td>6 PM</td>
                <td>5100</td>
                <td className="heavy">
                  Heavy
                </td>
              </tr>

            </tbody>

          </table>

          <div style={{ marginTop: "20px" }}>

            <button
              onClick={() =>
                toast.success("PDF Downloaded!")
              }
            >
              Download PDF
            </button>

            <button
              style={{ marginLeft: "10px" }}
              onClick={() =>
                toast.success("CSV Exported!")
              }
            >
              Export CSV
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;