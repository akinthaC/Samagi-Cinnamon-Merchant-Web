document.getElementById("contactForm").addEventListener("submit", function (event) {
    // Get form fields
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Regex patterns
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Updated for global use
    const phonePattern = /^\+?[1-9]\d{1,14}$/; // Supports international numbers

    // Validate name
    if (name.length < 3) {
        Swal.fire({
            icon: "error",
            title: "Invalid Name",
            text: "Name must be at least 3 characters long.",
        });
        event.preventDefault();
        return;
    }

    // Validate email
    if (!emailPattern.test(email)) {
        Swal.fire({
            icon: "error",
            title: "Invalid Email",
            text: "Please enter a valid email address.",
        });
        event.preventDefault();
        return;
    }

    // Validate phone
    if (!phonePattern.test(phone)) {
        Swal.fire({
            icon: "error",
            title: "Invalid Phone",
            text: "Please enter a valid phone number (with or without a country code).",
        });
        event.preventDefault();
        return;
    }

    // Validate message
    if (message.length < 10) {
        Swal.fire({
            icon: "error",
            title: "Invalid Message",
            text: "Message must be at least 10 characters long.",
        });
        event.preventDefault();
        return;
    }

    // If all validations pass, show confirmation alert
    Swal.fire({
        icon: "question", // Question icon for confirmation
        title: "Do you want to send the message?",
        text: "Your form is valid and ready to be submitted!",
        showCancelButton: true, // Adds a "No" button
        confirmButtonText: "Yes, send it!", // Text for the "Yes" button
        cancelButtonText: "No, cancel", // Text for the "No" button
    }).then((result) => {
        if (result.isConfirmed) {
            // If "Yes" is clicked, submit the form
            Swal.fire({
                icon: "success",
                title: "Message Sent!",
                text: "Your message has been submitted successfully.",
            }).then(() => {
                event.target.submit(); // Submit the form programmatically
            });
        } else if (result.isDismissed) {
            // If "No" is clicked, show cancellation message
            Swal.fire({
                icon: "info",
                title: "Action Cancelled",
                text: "Your message was not sent.",
            });
        }
    });

    // Prevent default submission (for custom handling)
    event.preventDefault();
});