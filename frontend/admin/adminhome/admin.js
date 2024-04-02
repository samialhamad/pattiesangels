function validateLogin(){
    var username = document.getElementById("username-field").value;
    var password = document.getElementById("password-field").value;

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
    const editPets = document.getElementById("editpets");
    const viewPets = document.getElementById("viewpets");
    const addPets = document.getElementById("addpets");
    const viewForms = document.getElementById("viewform");

    // If user is authenticated, show links to protected pages
    if (isAuthenticated) {
        editPets.style.display = "block";
        viewPets.style.display = "block";
        addPets.style.display = "block";
        viewForms.style.display = "block";
    } else { // If user is not authenticated, hide links to protected pages
        editPets.style.display = "none";
        viewPets.style.display = "none";
        addPets.style.display = "none";
        viewForms.style.display = "none";
    }
}