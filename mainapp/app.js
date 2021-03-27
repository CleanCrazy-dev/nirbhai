const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");
const Role = db.role;

let dbConfig = require('./config/db.config');

let conMsg = "message";

// Connecting mongoDB Database
db.mongoose.connect(dbConfig.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database sucessfully connected!');
  conMsg = 'Database sucessfully connected!';
  initial();
})
.catch(err => {
  console.error("Connection error", err);
  conMsg = "Connection error" + err;
  process.exit();
});

const app = express();

var corsOptions = {
  origin: dbConfig.corsOptions
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to real estate application." });
});

// checkDB
app.get("/checkDB", (req, res) => {
  res.json({ message: conMsg });
});

// Routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/property.routes')(app);
require('./routes/basicLookup.routes')(app);

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "Buyer"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'Buyer' to roles collection");
      });

      new Role({
        name: "Seller"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'Seller' to roles collection");
      });

      new Role({
        name: "Admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'Admin' to roles collection");
      });
    }
  });
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

