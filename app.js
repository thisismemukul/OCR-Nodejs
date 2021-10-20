const express = require("express");
const app = express();
const tesseract = require("tesseract.js");

app.get("/", function(req, res) {

    tesseract.recognize("hindi.jpg", "hin", {}).then(result => {
        res.send(result.data.text)
        console.log(result.data.text)
    }).catch(err => {
        console.log(err.message)
    });


});





app.get("*", function(req, res) {
    res.send("error 404 :{ Page not found.")
});

const port = process.env.PORT = '5500';
app.listen(port, () => console.log(`Server Started at PORT ${port}`));