// Write your code in this file!
const currentUser = 'Miguel';

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const firstInitial = currentUser[0];

const restOfName = currentUser.slice(1);

const shortGreeting = `Welcome, ${firstInitial} !`;

console.log(shortGreeting);
