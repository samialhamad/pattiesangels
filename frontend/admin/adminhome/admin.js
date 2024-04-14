function validateLogin(){
    var username = document.getElementById("username-field").value;
    var password = document.getElementById("password-field").value;

    // Testing url
    //fetch('http://localhost:3000/apply/login', {
    
    fetch('https://patties-angels-8cd06741a91a.herokuapp.com/apply/login', {
        method: 'POST' ,
        headers: {
            'Content-Type' : 'application/json',

        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success){
            alert('Login was successful');
            updateNavigation(true);
        }else{
            alert('Incorrect login');
            updateNavigation(false);
            //document.getElementById("Login-error-msg").style.display = "block";
        }
    })
    .catch(error => {
        console.error('Error:', error);

    });
    return false;
}

document.getElementById("login-form").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent the default form submission
    validateLogin(); // Call the validateLogin function
});

// function to hide the edit menu until admin logs in
function updateNavigation(isAuthenticated) {
    const editAnimals = document.getElementById("editanimals");
    const viewAnimals = document.getElementById("viewanimals");
    const addAnimals = document.getElementById("addanimals");
    const viewForms = document.getElementById("viewform");

    // If user is authenticated, show links to protected pages
    if (isAuthenticated) {
        editAnimals.style.display = "block";
        viewAnimals.style.display = "block";
        addAnimals.style.display = "block";
        viewForms.style.display = "block";
    } else { // If user is not authenticated, hide links to protected pages
        editAnimals.style.display = "none";
        viewAnimals.style.display = "none";
        addAnimals.style.display = "none";
        viewForms.style.display = "none";
    }
}