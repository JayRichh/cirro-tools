// Function to update the icon badge based on dark mode state
const updateIcon = (isDarkMode: boolean) => {
  if (isDarkMode) {
    chrome.action.setBadgeText({ text: "✓" });
    chrome.action.setBadgeBackgroundColor({ color: "#4CAF50" }); // Green
  } else {
    chrome.action.setBadgeText({ text: "✗" });
    chrome.action.setBadgeBackgroundColor({ color: "#F44336" }); // Red
  }
};

// Listen for messages from popup
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "UPDATE_ICON") {
    updateIcon(msg.darkMode);
  }
});

// Initialize icon state on startup
chrome.runtime.onStartup.addListener(() => {
  chrome.storage.local.get(["darkMode"], (result) => {
    updateIcon(result.darkMode || false);
  });
});

// Also check when extension is installed/updated
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(["darkMode"], (result) => {
    updateIcon(result.darkMode || false);
  });
});
