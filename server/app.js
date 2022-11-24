const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:5000"
};

app.use(cors(corsOptions));

const swaggerUi = require("swagger-ui-express");
const swaggerJson = require("./swagger.json");

app.use('/api-docs/', swaggerUi.serve, swaggerUi.setup(swaggerJson))

// accept request in form or JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = require("./app/models");
db.client.sync();

require("./app/routes/player.routes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
