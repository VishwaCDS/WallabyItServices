const API_URL = "http://localhost:5000/api";

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
  const response = await fetch("http://localhost:5000/api/chat/ai-chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(messageData),
  });
  return response.json();
};
