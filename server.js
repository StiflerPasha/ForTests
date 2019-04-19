/*
const http = require("http");
const fs = require("fs");

//404 response
const send404Response = (response) => {
    response.writeHead(404, {"Context-type": "plain/text"});
    response.write("Error 404: Page not found!");
    console.log("Error 404");
    response.end();
};

//Handle a user request
const onRequest = (request, response) => {
    if (request.method === "GET" && request.url === "/") {
        response.writeHead(200, {"Context-type": "text/html"});
        fs.createReadStream("./index.html").pipe(response);
        console.log("All good!")
    } else {
        send404Response(response)
    }
};

http.createServer(onRequest).listen(8888);
console.log("Server is now running...");*/


/*const connect = require("connect");
const http = require("http");

const app = connect();


function profile(request, response) {
    console.log("User requested profile");
}

function forum(request, response) {
    console.log("User requested forum");
}

app.use("/profile", profile);
app.use("/forum", forum);

http.createServer(app.listen(8888));
console.log("Server is running...");*/


