








// The form automatically makes a POST request to the server, but here we'll also capture that form info as our "current user" data, then make an API call to retrieve the list of all users, and compare them to the current user to find a match. Then make a modal to display the match info.
// Alternatively, when the form is submitted, the server could run the matchmaking, and use handlebars to populate the match in the client's view. I'm not going to implement that here, because I want to approach this as part as a front end application interacting with an indifferent API. But I do think the handlebars approach would probably be a lot cleaner, both for code and execution.

