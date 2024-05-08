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
    "Business ideas for entrepreship"
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

