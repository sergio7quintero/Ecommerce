document.addEventListener("DOMContentLoaded", () => {
    // Attach the submit event listener after the DOM is fully loaded
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form field values
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("email").value.trim();
        const mobile = document.getElementById("mobile").value.trim();
        const message = document.getElementById("message").value.trim();

        // Initialize an array to collect error messages
        let errors = [];

        // Validate fields
        if (!firstName) errors.push("First Name is required.");
        if (!lastName) errors.push("Last Name is required.");
        if (!email) {
            errors.push("Email is required.");
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.push("Please enter a valid email address.");
        }
        if (!mobile) {
            errors.push("Mobile number is required.");
        } else if (!/^\d+$/.test(mobile)) {
            errors.push("Mobile number must contain only digits.");
        }
        if (!message) errors.push("Message is required.");

        // Display errors or submit form
        if (errors.length > 0) {
            // Clear previous error messages if any
            alert(errors.join("\n")); // Show all errors at once
        } else {
            alert("Form submitted successfully!");
            // Add actual submission logic here (e.g., AJAX)
        
        document.getElementById("contactForm").reset();
        
        }   
    });
});