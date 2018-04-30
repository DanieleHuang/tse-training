## sprint 3
This sprint is focused on introducing templating and MongoDB. As with the last sprint, keep updating your progress on the repo's Kanban Boards as you go along.

### Templating
Now that you have a decent grasp of HTML/CSS/JavaScript, it's time to move on to templates. Templates are kind of the same, but not really; they're exactly what the name implies: document templates that don't contain any data. They're essentially generic documents that we can pass data into on-the-fly, allowing us to reuse the same web documents over and over again with different data&mdash;super useful. [Handlebars](https://handlebarsjs.com/) is the templating engine we'll be using.
1. Read [this beginner's guide to Handlebars](https://www.sitepoint.com/a-beginners-guide-to-handlebars/) up to the bit about custom helpers. *Note: the guide mentions a JavaScript file that needs to be loaded, but the templating engine is already baked into our Express app.*

### Project 4: discount-twitter-1
__Description__: *use templating from a .json file to automatically generate site code and add "chirps" from the site.*
1. Recreate the screenshot below (no need to copy over all the "chirps"&mdash;just one will do):
![final](https://github.com/sumeet-bansal/tse-training/blob/internal/sprint-3/reference/final.png "final")

*Note: to get the icons, check out [the font-awesome icon set](https://fontawesome.com/icons?d=gallery&m=free). The exact ones used are `comment`, `retweet`, and `heart`. The font-awesome stylesheet is included in the starter code.*

For getting started on the page layout, see this wireframe:
![wireframe](https://github.com/sumeet-bansal/tse-training/blob/internal/sprint-3/reference/wireframe.png "wireframe")

This wireframe doesn't specify what the final page should look like so much as how the page should be laid out. The text accompanying the page sections (top-left of each rectangle) refer to the Bootstrap class you'll need to use for that section.

2. Templatize that wireframe. Basically, take all the hardcoded text in the chirp you structured by hand and add the corresponding Handlebars expressions from `chirps.json` (e.g. `KANYE WEST (@kanyewest)` becomes `{{author_name}} (@{{author_handle}})`).
3. Read the "CRUD - CREATE" section of [this blog post](https://zellwk.com/blog/crud-express-mongodb/) from the last sprint. *Note: the `body-parser` package is already included in the starter code, so you can ignore the part about having to install that.*
4. Create a route `\new` that allows you to add a chirp to your list in `chirps.json` by specifying all the required fields. You can cut corners here by having a form that just requires `author_name`, `author_handle`, and of course, `text`, and then set the remaining fields to `false` or `0`. In the `POST` method of your route, you'll need to clean up and format the data in `req.body`, and then [push that data](https://www.w3schools.com/jsref/jsref_push.asp) to the array of chirps in `data.json`. When you refresh the home page, you should see your newly added tweet.

### MongoDB
1. Install MongoDB by following [this guide](https://docs.mongodb.com/manual/administration/install-community/).
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