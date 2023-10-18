const express = require('express');
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/user.routes.js");
const customerdataRoutes = require("./routes/customerdata.routes.js");




var corsOptions = {
    origin: "http://localhost:8081"
  };


function onStart(){
    console.log(`Server running on port ${PORT}`);
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());
// parses incoming requests with urlencoded payloads
// extended: true - parsing the URL-encoded data with the querystring library
app.use(express.urlencoded({extended: true}));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });
/**
 * Routes.
 */
// Add this after the middleware part
app.use("/api/users", userRoutes); // This will handle routes defined in user.routes.js
app.use("/api/customer", customerdataRoutes); // This will handle routes defined in user.routes.js



module.exports = app;