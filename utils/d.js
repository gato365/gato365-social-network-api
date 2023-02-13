const connection = require('../config/connection');
const { User, Reaction, Thought } = require('../models');


// Connect to the database
connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');


  // Delete all users, thoughts, and reactions
  await User.deleteMany({});
  await Thought.deleteMany({});
  await Reaction.deleteMany({});


  const usernames = ['cindypineapple', 'dopeydolphins'];

  const emails = ['cindyp@yah.com', 'doped@gmail.com'];
  const thoughtTexts = [
    'I found this great article about the benefits of blogging. It was incredibly informative and I highly recommend it!',
    'I just wrote a blog post about the importance of staying organized. Check it out if you want to learn more!'];
  const reactionTexts = ['Great post!', 'Love it!'];


  const users = [];
  for (let i = 0; i < 2; i++) {
    users.push({
      username: usernames[i],
      email: emails[i]
    });
  }
  
  await User.collection.insertMany(users);

  // await thoughtCollection.insertOne(thoughts);
 


    console.info('Seeding complete! 🌱');
    process.exit(0);
  });  