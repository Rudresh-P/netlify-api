const express = require("express");
const serverless = require("serverless-http")
const cors = require("cors")

const app = express();
app.use(cors());
app.options('*', cors())

const router = express.Router();

router.get("/", (req,res)=>{
    res.json({
        "Hello":"World",
        "wob":true
    })
});

router.get("/wob",(req,res)=>{
    res.json({
        "breathing":true
    })
})

app.use("/.netlify/functions/api/",router);


module.exports.handler = serverless(app);