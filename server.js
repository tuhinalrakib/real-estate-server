const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

// initialize
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// global middlewares
app.use(cors());
app.use(express.json());

// base route
app.get('/', async (req, res) => {
    res.send('Real Estate Platform API is running 🚀');
});

// 404 handler
// app.use((req, res) => {
//     res.status(404).json({ message: "Route not found" });
// });


// Mongdb stup

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `${process.env.MONGO_URI}`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    db = client.db("real_estate");
    app.locals.db = db;

    app.use("/users", require("./routes/userRoutes"))

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



// start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});