const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const indexRoute = require("./routes/index.js");
const releaseRoute = require("./routes/release.js");

const PORT = 3001;

const app = express();
app.use(cors())

app.use(bodyParser.json());

app.use("/api", indexRoute);
app.use("/api/release", releaseRoute);

app.listen(PORT, "0.0.0.0");