var testimonials = [];

window.onload = function() {
    getTestimonials();
}

function getTestimonials() {
    var url = 'http://localhost:3000/api/testimonials'; //No api created yet

    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            if (request.status == 200) {
                console.log("GetTestimonials Response: " + request.response);

                var response = JSON.parse(request.response);
                
                testimonials = []; // Clear the existing testimonials array
                for (var i = 0; i < response.length; i++) {
                    var testimonial = new Testimonial(response[i]);
                    testimonials.push(testimonial);
                }
                addTestimonialDivs();
            }
            else {
                console.error('Error fetching testimonials:', request.statusText);
            }
        }
    }
    request.send();
}

function addTestimonialDivs() {
    var testimonialsContainerDiv = document.getElementById("testimonialsContainerDiv");
    console.log("Adding testimonial divs...");
    for (var i = 0; i < testimonials.length; i++) {
        var testimonial = testimonials[i];

        var testimonialDiv = document.createElement("div");
        testimonialDiv.setAttribute("class", "testimonialDiv");

        var authorP = document.createElement("p");
        authorP.innerHTML = "<strong>Author:</strong> " + testimonial.author;
        testimonialDiv.append(authorP);

        var contentP = document.createElement("p");
        contentP.innerHTML = "<strong>Testimonial:</strong> " + testimonial.content;
        testimonialDiv.append(contentP);

        testimonialsContainerDiv.append(testimonialDiv);
    }
}

// Testimonial Class
function Testimonial(data) {
    this.author = data.author || "";
    this.content = data.content || "";
}

// Add new testimonial
document.getElementById("submitTestimonial").addEventListener("click", function() {
    var author = document.getElementById("testimonialAuthor").value;
    var content = document.getElementById("testimonialContent").value;

    var newTestimonial = new Testimonial({ author: author, content: content });
    testimonials.push(newTestimonial);

    // Clear input fields
    document.getElementById("testimonialAuthor").value = "";
    document.getElementById("testimonialContent").value = "";

    addTestimonialDivs(); // Refresh the displayed testimonials

    sendNewTestimonialToBackend(newTestimonial);
});

function sendNewTestimonialToBackend(testimonial) {
    // Simulated backend POST request to save the new testimonial
    console.log("Sending new testimonial to the backend:", testimonial);
    // Implement the actual HTTP request to your API endpoint here
}


/*var testimonials = [];

window.onload = function() {
    getTestimonials();
}

function getTestimonials() {
    var url = 'http://localhost:3000/api/testimonials';

    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            if (request.status = 200) {
                console.log("GetTestimonial Response: " + request.response);

                var response = JSON.parse(request.response);
                
                animals = []; // Clear the existing animals array
                for (var i = 0; i < response.length; i++) {
                    var testimonial = {
                        author: response[i].author,
                        content: response[i].content,
                        date: response[i].date,
                        image: response[i].image
                        
                    };
                    testimonials.push(testimonial);
                }
                addTestimonialDivs();
            }
            else {console.error('Error fetching testimonial:', request.statusText);
        }
    }
}
request.send();
}

function addTestimonialDivs() {
    var testimonialsContainerDiv = document.getElementById("testimonialContainerDiv");

    for (var i = 0; i < testimonials.length; i++) {
        var testimonial = testimonials[i];

        var testimonialDiv = document.createElement("div");
        testimonialDiv.setAttribute("class", "testimonialDiv");

        // var img = document.createElement("img");
        // img.setAttribute("src", testimonial.image);
        // testimonialDiv.append(img);

        var h2 = document.createElement("h2");
        h2.innerHTML = testimonial.author;
        testimonialDiv.append(h2);

        var date = document.createElement("p");
        date.innerHTML = "Date: " + testimonial.date;
        testimonialDiv.append(date);

        var content = document.createElement("p");
        content.innerHTML = "Testimonial: " + testimonial.content;
        testimonialDiv.append(content);

        var anchor = document.createElement("a");
        anchor.setAttribute("href", "#");
        anchor.innerHTML = "View More";
        testimonialDiv.append(anchor);

        testimonialsContainerDiv.append(testimonialDiv);
    }
}
*/

