const connection = require('../config/connection');
const { User, Reaction, Thought } = require('../models');
const usernames = [
  'cindypineapple',
  'dopeydolphins'];
const emails = [
  'cindyp@yah.com',
  'doped']; 


// Store username and email into an object using insertMany()
User.collection.insertMany({ usernames, emails })
  .then((data) => {
    console.log(data);
  })  
  .catch((err) => {
    console.log(err);
  }
);


console.info('Seeding complete! 🌱');
process.exit(0);
  