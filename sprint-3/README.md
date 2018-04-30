## sprint 3
This sprint is focused on introducing templating and MongoDB. As with the last sprint, keep updating your progress on the repo's Kanban Boards as you go along.

### Templating
Now that you have a decent grasp of HTML/CSS/JavaScript, it's time to move on to templates. Templates are kind of the same, but not really; they're exactly what the name implies: document templates that don't contain any data. They're essentially generic documents that we can pass data into on-the-fly, allowing us to reuse the same web documents over and over again with different data&mdash;super useful. [Handlebars](https://handlebarsjs.com/) is the templating engine we'll be using.
1. Read [this beginner's guide to Handlebars](https://www.sitepoint.com/a-beginners-guide-to-handlebars/) up to the bit about custom helpers. *Note: the guide mentions a JavaScript file that needs to be loaded, but the templating engine is already baked into our Express app.*

### Project 4: discount-twitter-1
__Description__: *use templating from a .json file to automatically generate site code and add/delete "chirps" from the site.*
1. Recreate this web document (**TODO** mockup).
2. Templatize it (**TODO** include example.hbs and example.json).
3. PUT operation.
4. DEL operation.

### MongoDB
1. https://docs.mongodb.com/manual/administration/install-community/
2. Follow to completion [this blog post](https://zellwk.com/blog/crud-express-mongodb/) from the last sprint.

### Project 4.5: discount-twitter-2
__Description__: *migrate discount-twitter to MongoDB.*
1. Set up (init) MongoDB database and collection.
2. Migrate discount-twitter-1 to use MongoDB instead of just a .json file.

__Since other people are going to be on this repo as well, please don't merge anything back into `master`&mdash;just work on your own branch.__

### Additional Resources
+ [the Handlebars website](https://handlebarsjs.com/), especially [the guide to Handlebars expressions](https://handlebarsjs.com/expressions.html)
+ [MongoDB University](https://university.mongodb.com/)
+ [the tutorialspoint MongoDB tutorial](https://www.tutorialspoint.com/mongodb/index.htm)
+ [MongoDB's own "Getting Started" guide](https://docs.mongodb.com/manual/tutorial/getting-started/)
+ [the Guru99 MongoDB tutorial](https://www.guru99.com/mongodb-tutorials.html)
+ [MongoDB in 30 Minutes](https://www.youtube.com/watch?v=pWbMrx5rVBE)
+ [this gamified MongoDB tutorial from Code School](https://www.codeschool.com/courses/the-magical-marvels-of-mongodb)
+ [the JavaTpoint MongoDB tutorial](https://www.javatpoint.com/mongodb-tutorial)
+ [the w3resource MongoDB tutorial](https://www.w3resource.com/mongodb/introduction-mongodb.php)