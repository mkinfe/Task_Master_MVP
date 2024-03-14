// JavaScript code for TaskMaster landing page

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Functionality for a hypothetical sign-up form
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Validate inputs (this is just an example, implement your own validation logic)
    if (email && password) {
        // Assuming you're using Firebase for authentication, you can implement sign-up logic here
        // Example:
        // firebase.auth().createUserWithEmailAndPassword(email, password)
        //     .then((userCredential) => {
        //         // Signed up successfully
        //     })
        //     .catch((error) => {
        //         // Handle sign-up errors
        //     });
        
        // For the sake of this example, just log the inputs
        console.log('Email:', email);
        console.log('Password:', password);
    } else {
        // Handle validation errors
        alert('Please fill in all fields.');
    }
});
