document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    if (form) {
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let fname = document.getElementById('fname').value;
        let lname = document.getElementById('lname').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;
        
        let contactData = {
          id: Date.now(),
          fname: fname,
          lname: lname,
          email: email,
          message: message
        };
  
        // Check if contacts already exist in localStorage
        let existingContacts = JSON.parse(localStorage.getItem('contacts')) || [];
  
        // Add the new contact data
        existingContacts.push(contactData);
  
        // Store the updated contacts in localStorage
        localStorage.setItem('contacts', JSON.stringify(existingContacts));
  
        // Display success message
        document.getElementById('responseMessage').innerText = "Message saved successfully!";
        
        // Clear the form
        form.reset();
      });
    }
});
  
let slideIndex = 1;
document.addEventListener("DOMContentLoaded", function () {
  showSlides(slideIndex); // Then call it
});

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}