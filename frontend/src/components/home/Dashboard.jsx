import React from "react";
import { useDashboard } from "../../store/hooks/useDashboard";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const { kpi, userRanking = [], productRanking = [] } = useDashboard();

  const userChartData = {
    labels: userRanking.map((item) => item.name),
    datasets: [
      {
        label: "구매 건수",
        data: userRanking.map((item) => item.count),
        backgroundColor: "#4e73df",
        borderRadius: 8,
      },
    ],
  };

  const productChartData = {
    labels: productRanking.map((item) => item.name),
    datasets: [
      {
        label: "판매 수량",
        data: productRanking.map((item) => item.quantity),
        backgroundColor: "#1cc88a",
        borderRadius: 8,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const styles = {
    container: {
      padding: "30px",
      backgroundColor: "#f8f9fc",
      minHeight: "100vh",
    },
    title: {
      marginBottom: "30px",
      color: "#2c3e50",
      fontWeight: "700",
    },
    kpiGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "20px",
      marginBottom: "40px",
    },
    kpiCard: {
      background: "#fff",
      borderRadius: "15px",
      padding: "20px",
      textAlign: "center",
      boxShadow: "0 3px 12px rgba(0,0,0,0.08)",
    },
    chartGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "25px",
    },
    chartCard: {
      background: "#fff",
      borderRadius: "15px",
      padding: "20px",
      boxShadow: "0 3px 12px rgba(0,0,0,0.08)",
    },
    chartBox: {
      height: "450px",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📊 판매 대시보드</h2>

      {/* KPI */}
      <div style={styles.kpiGrid}>
        <div style={styles.kpiCard}>
          <h6 style={{ color: "#666" }}>총 매출액</h6>
          <h3 style={{ color: "#4e73df" }}>
            {kpi?.totalSalesAmount?.toLocaleString() || 0}원
          </h3>
        </div>

        <div style={styles.kpiCard}>
          <h6 style={{ color: "#666" }}>총 판매수량</h6>
          <h3 style={{ color: "#1cc88a" }}>
            {kpi?.totalQuantity?.toLocaleString() || 0}개
          </h3>
        </div>

        <div style={styles.kpiCard}>
          <h6 style={{ color: "#666" }}>총 주문건수</h6>
          <h3 style={{ color: "#f6c23e" }}>
            {kpi?.totalOderCount?.toLocaleString() || 0}건
          </h3>
        </div>

        <div style={styles.kpiCard}>
          <h6 style={{ color: "#666" }}>고객 수</h6>
          <h3 style={{ color: "#e74a3b" }}>
            {kpi?.customerCount?.toLocaleString() || 0}명
          </h3>
        </div>

        <div style={styles.kpiCard}>
          <h6 style={{ color: "#666" }}>상품 수</h6>
          <h3 style={{ color: "#36b9cc" }}>
            {kpi?.productCount?.toLocaleString() || 0}개
          </h3>
        </div>
      </div>

      {/* Charts */}
      <div style={styles.chartGrid}>
        <div style={styles.chartCard}>
          <h4>🏆 고객 구매 랭킹 TOP 10</h4>
          <div style={styles.chartBox}>
            <Bar data={userChartData} options={chartOptions} />
          </div>
        </div>

        <div style={styles.chartCard}>
          <h4>📦 상품 판매 랭킹 TOP 10</h4>
          <div style={styles.chartBox}>
            <Bar data={productChartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;