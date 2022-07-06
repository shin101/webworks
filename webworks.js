
// Part One: Solidify Terminology

// In your own terms, define the following terms:

//     What is HTTP? how client and server receive and send data
//     What is a URL? internet address
//     What is DNS? converts url to number to retrieve info and vice versa
//     What is a query string? refers to q= in the url. in key value format
//     What are two HTTP verbs and how are they different? get and post. get data from server or push/send data to server 
//     What is an HTTP request? request from server data needed to view website
//     What is an HTTP response? info retrieved from server to client 
//     What is an HTTP header? Give a couple examples of request and response headers you have seen. gives additional info about the request. example was shown in the lecture, accept, for instance. you can modify language of requested website this way
//     What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser? your human readable URL gets converted to DNS (numbers), client(you) request info to server, server sends response with status code, displays the website you want t ovisit

// ------------------------------------------------------------------------------------


// Part Two: Practice Tools
// Using curl, make a GET request to the icanhazdadjoke.com API to find all jokes involving the word “pirate” curl https://icanhazdadjoke.com/search?term=pirate 


//     Use dig to find what the IP address is for icanhazdadjoke.com >> 172.67.211.64

//     Make a simple web page and serve it using python3 -m http.server. Visit the page in a browser. > done

// ------------------------------------------------------------------------------------

// Part Three: Explore Dev Tools

// Build a very simple HTML form that uses the GET method (it can use the same page URL for the action) when the form is submitted.

// Add a field or two to the form and, after submitting it, explore in Chrome Developer tools how you can view the request and response headers.

// Edit the page to change the form type to POST, refresh in the browser and re-submit. Do you still see the field in the query string? Explore in Chrome how you can view the request and response headers, as well as the form data.


// ------------------------------------------------------------------------------------

// Part Four: Explore the URL API

// At times, it’s useful for your JavaScript to look at the URL of the browser window and change how the script works depending on parts of that (particularly the query string).

// Read about the URL API

// Try some of the code examples in the Chrome Console so that you can get comfortable with the basic methods and properties for instances of the URL class.
