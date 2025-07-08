const express = require("express")
const router = express.Router()

router.post("/", async(req,res)=>{
    const newUser = req.body 
    const db = req.app.locals.db 
    const result = await db.collection("users").insertOne(newUser)
    res.send(result)
})

// Get all users (admin only)
router.get("/", async (req, res) => {
  try {
    const db = req.app.locals.db;
    const users = await db.collection("users").find().toArray();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users", error });
  }
});


module.exports =  router 