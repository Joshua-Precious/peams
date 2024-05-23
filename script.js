document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get the values from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Perform login validation or process the login request
    // You can add your custom login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  
    // Reset the form after successful login
    this.reset();
  });