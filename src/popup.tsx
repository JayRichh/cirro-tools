import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { ThreeBackground } from "./components/ThreeBackground";

const Popup = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Load initial state
    chrome.storage.local.get(["darkMode"], (result) => {
      setDarkMode(result.darkMode || false);
    });
  }, []);

  const toggleDarkMode = () => {
    const newState = !darkMode;
    setDarkMode(newState);
    
    // Save state
    chrome.storage.local.set({ darkMode: newState });

    // Send message to background script to update icon
    chrome.runtime.sendMessage({ type: "UPDATE_ICON", darkMode: newState });

    // Send message to active tab to toggle dark mode
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0];
      if (tab.id) {
        chrome.tabs.sendMessage(
          tab.id,
          {
            type: "TOGGLE_DARK_MODE",
            darkMode: newState,
          }
        );
      }
    });
  };

  const popupStyles = {
    container: {
      margin: "0",
      minWidth: "320px",
      padding: "20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "transparent",
      color: darkMode ? "#d4d4d4" : "#333333",
      transition: "color 0.3s",
      position: "relative" as const,
      zIndex: 1
    },
    header: {
      marginTop: 0,
      marginBottom: "20px",
      fontSize: "20px",
      fontWeight: "600",
      color: darkMode ? "#ffffff" : "#1a1a1a"
    },
    card: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px",
      backgroundColor: darkMode ? "#252526" : "#f5f5f5",
      borderRadius: "8px",
      transition: "all 0.3s",
      cursor: "pointer",
      userSelect: "none" as const
    },
    cardHover: {
      backgroundColor: darkMode ? "#2a2a2a" : "#eeeeee"
    },
    labelText: {
      fontSize: "15px",
      fontWeight: "500",
      color: darkMode ? "#ffffff" : "#333333"
    },
    status: {
      marginTop: "16px",
      padding: "12px",
      fontSize: "13px",
      color: darkMode ? "#909090" : "#666666",
      backgroundColor: darkMode ? "#252526" : "#fafafa",
      borderRadius: "6px",
      textAlign: "center" as const
    },
    statusIndicator: {
      display: "inline-block",
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      backgroundColor: darkMode ? "#00bedf" : "#4caf50",
      marginRight: "8px",
      animation: darkMode ? "pulse 2s infinite" : "none"
    },
    footer: {
      marginTop: "16px",
      padding: "12px 0 0",
      fontSize: "11px",
      color: darkMode ? "#707070" : "#999999",
      textAlign: "center" as const,
      borderTop: `1px solid ${darkMode ? "#3a3a3a" : "#e0e0e0"}`
    }
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "400px" }}>
      <ThreeBackground darkMode={darkMode} />
      <div style={popupStyles.container}>
        <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}
      </style>
      
      <h2 style={popupStyles.header}>
        CIRRO Tools
      </h2>
      
      <div 
        style={{
          ...popupStyles.card,
          ...(isHovered ? popupStyles.cardHover : {})
        }}
        onClick={toggleDarkMode}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span style={popupStyles.labelText}>Dark Mode</span>
        
        <div style={{ position: "relative", display: "inline-block", width: "50px", height: "26px" }}>
          <input 
            type="checkbox" 
            checked={darkMode}
            onChange={() => {}}
            style={{ opacity: 0, width: 0, height: 0, position: "absolute" }}
            tabIndex={-1}
          />
          <span style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: darkMode ? "#00bedf" : "#ccc",
            transition: "0.3s",
            borderRadius: "34px",
            boxShadow: darkMode ? "0 0 8px rgba(0, 190, 223, 0.3)" : "none",
            pointerEvents: "none" as const
          }}></span>
          <span style={{
            position: "absolute",
            height: "18px",
            width: "18px",
            left: darkMode ? "28px" : "4px",
            bottom: "4px",
            backgroundColor: "white",
            transition: "0.3s",
            borderRadius: "50%",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            pointerEvents: "none" as const
          }}></span>
        </div>
      </div>
      
      <div style={popupStyles.status}>
        <span style={popupStyles.statusIndicator}></span>
        {darkMode ? "Dark mode active" : "Light mode active"}
      </div>

      <div style={popupStyles.footer}>
        v1.0.0 • For app.cirro.live
      </div>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
