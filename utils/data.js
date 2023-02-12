// Purpose: Generate fake data for testing 
const faker = require('faker');

// Generate 15 usernames 
const usernames = Array.from({ length: 15 }, () => faker.internet.userName());
// Generate 15 emails
const emails = Array.from({ length: 15 }, () => faker.internet.email());



console.log(usernames);
console.log(emails);
