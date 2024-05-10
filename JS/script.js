// Use document.getElementById to select elements with specific IDs ('idea-list', 'feedback-form', 'name', 'email', and 'message') from the HTML. Store references to these elements in variables (ideaList, feedbackForm, nameInput, emailInput, and messageInput) so that we can easily access them later in our JavaScript code.
// Cache elements
const ideaList = document.getElementById('idea-list');
const feedbackForm = document.getElementById('feedback-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Define an array of startup ideas called "startupIdeas".
const startupIdeas = [
    "Social media platform for pet lovers",
    "Subscription service for plant lovers",
    "Virtual reality travel experiences",
    "AI-powered personal assistant for productivity",
    "Online marketplace for handmade crafts",
    "Healthy meal kit delivery service",
    "Interactive language learning app",
    "Fitness tracking app with personalized workouts",
    "Investment and financial diversification fund app",
    "Smart home automation system",
    "Business ideas for entrepreship",
    "An app for tracking personal fitness goals"
];

// Iterate over the array of startup ideas using the forEach method
startupIdeas.forEach(idea => {
    // Create a new list item element, within the loop using 'document.createElement'
    const listItem = document.createElement('li');
    
    // Set the text content of the list item to the current startup idea using the 'textContent' property
    listItem.textContent = idea;
    
    // Append the newly created list item to the ideaList using 'appendChild'
    ideaList.appendChild(listItem);
});


// Function to validate the feedback form. Defined a function 'validateFeedbackForm' to handle form submission. This function prevents the default form submission behavior, validates the name, email, and message inputs, and calls the submitFeedback function if all inputs are valid.
function validateFeedbackForm(event) {
    event.preventDefault(); // Prevent form submission
    // Validate name, email, and message inputs
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        alert('Please fill out all fields.');
        return;
    }
    // Submit feedback if all inputs are valid. The 'submitFeedback' function displays a success message and resets the form inputs.
    submitFeedback();
}

// Function to submit feedback
function submitFeedback() {
    // Display a success message
    alert('Feedback submitted successfully!');
    // Reset the form inputs
    feedbackForm.reset();
}

// Add event listener to the feedback form for form submission. Added an event listener to the feedback form, listening for the 'submit' event. When the form is submitted, the validateFeedbackForm function is called.
feedbackForm.addEventListener('submit', validateFeedbackForm);


// Function to generate random startup ideas
function generateStartupIdeas() {
    const startupIdeas = [
        'A platform for connecting freelance designers with clients',
        'A subscription box service for exotic spices',
        'An online marketplace for handmade crafts',
        'A virtual event planning tool for businesses',
        'A mobile game that teaches coding skills'
    ];

    // Clear existing ideas
    ideaList.innerHTML = '';

    // Generate and display new startup ideas
    startupIdeas.forEach(idea => {
        const listItem = document.createElement('li');
        listItem.textContent = idea;
        ideaList.appendChild(listItem);
    });
}

// Generate startup ideas when the page loads
window.addEventListener('load', generateStartupIdeas);

// Cache the footer element using querySelector
const footer = document.querySelector('footer');

//Modify the styles and/or CSS.....
// Function to handle idea selection and highlighting
function selectIdea(event) {
    console.log('Idea clicked:', event.currentTarget.textContent);
    
    // Remove the 'selected' class from all ideas
    const allIdeas = document.querySelectorAll('#idea-list li');
    allIdeas.forEach(idea => {
        idea.classList.remove('selected');
    });
    
    // Add the 'selected' class to the clicked idea
    const selectedIdea = event.currentTarget;
    selectedIdea.classList.add('selected');
}

// Add event listeners to each idea to handle selection
const ideas = document.querySelectorAll('#idea-list li');
ideas.forEach(idea => {
    idea.addEventListener('click', selectIdea);
});
