function sendToTelegram() {
    // Replace with your bot token and chat ID
    const botToken = "7618002548:AAEQJ0J7HROUn1KqjQMpBp4pzcm0Z3SJic8";
    const chatId = "6316918531";

    // Fetch form values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phoneNumber").value;
    const subject = document.getElementById("subject").value;
    // const description = document.getElementById("description").value;

    console.log(firstName, lastName, email, phone, subject);


    // Construct the message
    const message = `
📬 *New Submission:*

👤 *Name:* ${firstName} ${lastName} 
📧 *Email:* ${email}
📞 *Phone:* ${phone}
📝 *Subject:* ${subject}
    `;

    // Telegram API URL
    const telegramAPI = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}
`;

    // Send data using fetch API
    fetch(telegramAPI, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "Markdown" // Allows bold, italics, and emojis
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert("Message sent successfully!");
            document.getElementById("contactForm").reset(); // Clear form
        } else {
            alert("Please try again!");
        }
    })
    console.log(data)
    .catch(error => {
        console.error("Error:", error);
        alert("Error occurred while sending the message.");
    });
    console.log(data);


    return false; // Prevent form reload
// console.log("Data Is Send");

}

