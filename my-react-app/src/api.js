// Use an env var so you can switch between local and deployed backend easily.
// When building for production, set REACT_APP_API_URL to e.g.:
//   http://3.107.183.213:5000/api
const API_URL =
  process.env.REACT_APP_API_URL || "http://3.107.183.213:5000/api";

export const sendInquiry = async (formData) => {
  const response = await fetch(`${API_URL}/inquiry`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  return response.json();
};

export const sendChatMessage = async (chatData) => {
  const response = await fetch(`${API_URL}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(chatData),
  });
  return response.json();
};

export const sendAiMessage = async (messageData) => {
  const response = await fetch(`${API_URL}/chat/ai-chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(messageData),
  });
  return response.json();
};
