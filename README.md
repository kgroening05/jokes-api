# Dad Jokes API

## Description
A fun project to practice creating a RESTful API with node and Express.

Get a random joke on page load. Log in to add your own jokes.

The jokes are largely from the internet. Some are jokes I had embedded in my memory for some reason.

## Challenges / Lessons Learned

Setting up authentication took more effort on this than I expected. For some reason, users were able to log in, but no cookie was getting saved to the client with a session ID. 

The solution ended up being the options I was using when setting up the session in the express-session middleware. I was trying to send a secure cookie, but didn't realize that the browser would only transmit this when using HTTPS. Simply removing the parameter from the cookie options fixed everything.

## Future Work

My goal in creating this was primarily to create a simple but fun RESTful API. If I come back to this project in the future, I would like allow people who sign up to get a token or some other authentication they could use to make GET requests to the endpoint, allowing them to get random jokes in their own sites / projects.
