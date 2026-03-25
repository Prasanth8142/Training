import React from "react";

const Alert = ({ type = "info", message, onClose }) => {
  return (
    <div style={{ ...styles.alert, ...styles[type] }}>
      <span>{message}</span>
      {onClose && (
        <button onClick={onClose} style={styles.closeBtn}>
          ✖
        </button>
      )}
    </div>
  );
};

const styles = {
  alert: {
    padding: "12px 16px",
    borderRadius: "8px",
    margin: "10px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "500",
  },
  success: {
    backgroundColor: "#d4edda",
    color: "#155724",
  },
  error: {
    backgroundColor: "#f8d7da",
    color: "#721c24",
  },
  warning: {
    backgroundColor: "#fff3cd",
    color: "#856404",
  },
  info: {
    backgroundColor: "#d1ecf1",
    color: "#0c5460",
  },
  closeBtn: {
    background: "transparent",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Alert;