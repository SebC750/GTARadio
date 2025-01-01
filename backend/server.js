const express = require('express');
const app = express();

app.get("/", (req,res) => {
    res.send("Welcome to the gta radio server.")
    console.log("Hello world!")
})

app.listen(3000, (error) => {
    if(error){
        console.error("Server could not start. Error message: ", error);
    }
    else{
        console.log("Server listening on port 3000.");
    }
});