## sprint 4
This sprint is focused on getting you familiarized with MongoDB. As always, keep updating your progress on the repo's Kanban Boards as you go along.

### MongoDB
1. Install MongoDB Community Edition by following [this guide](https://docs.mongodb.com/manual/administration/install-community/).
2. Follow [the tutorialspoint MongoDB tutorial](https://www.tutorialspoint.com/mongodb/index.htm) up to (not including) the section on indexing.
3. Read through [MongoDB's own "Getting Started" guide](https://docs.mongodb.com/manual/tutorial/getting-started/) for Node.js (the default tab is for the Mongo shell&mdash;switch to the "Node.js" tab up top).
4. Follow to completion [this blog post](https://zellwk.com/blog/crud-express-mongodb/) from the last sprint to practice working with MongoDB in Node.js.

### Project 4.5: discount-twitter-2
__Description__: *migrate discount-twitter to MongoDB.*
1. Migrate discount-twitter-1 to use MongoDB (hosted on [mLab](https://mlab.com/)) instead of just a `.json` file. All you need to change is how the data is stored: instead of reading in `chirps.json` in `index.js`, query all the tweets in the database; instead of pushing chirps to `data`, insert the chirps into the database; etc.
2. Log in to your account on [Heroku](https://www.heroku.com/).
3. Create a new app on Heroku and deploy the finished project.

### Additional Resources
+ [MongoDB University](https://university.mongodb.com/)
+ [the Guru99 MongoDB tutorial](https://www.guru99.com/mongodb-tutorials.html)
+ [MongoDB in 30 Minutes](https://www.youtube.com/watch?v=pWbMrx5rVBE)
+ [this gamified MongoDB tutorial from Code School](https://www.codeschool.com/courses/the-magical-marvels-of-mongodb)
+ [the JavaTpoint MongoDB tutorial](https://www.javatpoint.com/mongodb-tutorial)
+ [the w3resource MongoDB tutorial](https://www.w3resource.com/mongodb/introduction-mongodb.php)