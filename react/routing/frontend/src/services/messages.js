export const createMessage = async (messageData) => {
    const newMessage = { ...messageData, sentAt: new Date() };

    const response = await fetch("http://localhost:3000/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newMessage),
    });

    if (!response.ok) {
        throw new Error("Failed to send message");
    }

    return await response.json();
};
