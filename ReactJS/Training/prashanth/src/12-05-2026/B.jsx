import React from "react";

// Reusable Button Component
const Button = ({ label, type = "primary", onClick }) => {
  const buttonStyles = {
    primary: {
      backgroundColor: "#007bff",
      color: "#fff",
    },
    success: {
      backgroundColor: "green",
      color: "#fff",
    },
    danger: {
      backgroundColor: "red",
      color: "#fff",
    },
    warning: {
      backgroundColor: "orange",
      color: "#fff",
    },
  };

  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        margin: "5px",
        fontSize: "16px",
        ...buttonStyles[type],
      }}
    >
      {label}
    </button>
  );
};

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Reusable Button Component</h2>

      <Button
        label="Primary Button"
        type="primary"
        onClick={() => alert("Primary Clicked")}
      />

      <Button
        label="Success Button"
        type="success"
        onClick={() => alert("Success Clicked")}
      />

      <Button
        label="Danger Button"
        type="danger"
        onClick={() => alert("Danger Clicked")}
      />

      <Button
        label="Warning Button"
        type="warning"
        onClick={() => alert("Warning Clicked")}
      />
    </div>
  );
}