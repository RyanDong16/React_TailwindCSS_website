export async function sendChatMessage(messages) {
  const response = await fetch("http://localhost:8000/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Server error");
  }

  return data;
}
