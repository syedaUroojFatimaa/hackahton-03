// Get references to the form and the resume display element
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
// Add an event listener for the form submission
form.addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Get values from the form inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Create the HTML for the resume using template literals
    var resumeHTML = "\n    <h2>Resume</h2>\n    <h3>Personal Information</h3>\n    <p><strong>Name:</strong> ".concat(name, "</p>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Phone:</strong> ").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
    // Update the resume display area with the generated resume HTML
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The Resume Display Element is Missing.');
    }
});
