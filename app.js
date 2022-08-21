const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./database/models");
var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Hello World!." });
});

require("./routes/plan.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 5002;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
});

// app.use(...);
db.sequelize.sync()
.then(() => {
console.log("Synced db.");
})
.catch((err) => {
console.log("Failed to sync db: " + err.message);
});
