const express = require("express");
const cors = require("cors");
const {MongoClient} = require('mongodb');
const { createBrotliDecompress } = require("zlib");
const session = require('express-session');

const app = express();

app.use(express.json());
app.use(cors());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 24*60*60*1000
    }
}));

const uri = "mongodb+srv://root:ssn@placement-portal.j6mxd.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
client.connect();


app.post("/login", async function(req, res) {
            
    var result = await getLogin(client,req.body.uname);
    if(result){
        req.session.name = result.uname;
        {/*console.log(req.session);*/}
    if(req.body.pass === result.pass){
        console.log("password matched");
        if(result.type === 'admin')
            res.send("admin");
        if(result.type === 'student')
            res.send("student")
        if(result.type === 'recruiter')
            res.send("recruiter")
    }
    }
    else{
        res.send("Username not found");
    }
  });

app.post("/reg", async function(req,res) {

    var result = await createDoc(client,req.body,'LoginDetails');
    if(result){
        console.log("User added");
        res.send("User added");
    }
})

app.post("/update",async function(req,res) {
    var result = await createDoc(client,req.body,'StudentDetails');
    if(result){
        console.log("Profile updated");
        res.send("Profile Updated");
    }
})

app.post("/viewStudents",async function(req,res) {
    var result = await retrieveDoc(client,"shreesh",'StudentDetails');
    if(result){
        console.log("Profile retrieved");
        console.log(req.session);
        res.send(result);
    }
})

app.listen(8080, function(){
    console.log("server is running on port 8080");
  })

async function getLogin(client,namelisting){
    const result = await client.db('PlacementPortal').collection('LoginDetails').findOne({uname: namelisting});

    if(result) {
        return result;
    }
    else{
        console.log('No listing found');
    }

}

async function createDoc(client,newListing,coll){
    const result1 = await client.db('PlacementPortal').collection(coll).deleteOne({Name: newListing.Name});
    const result2 = await client.db('PlacementPortal').collection(coll).insertOne(newListing);
    console.log("Database updated with the following id: "+ result2.insertedId)
    if(result2) {
        return result2;
    }
}

async function retrieveDoc(client,nameListing,coll){
    const result = await client.db('PlacementPortal').collection(coll).find().toArray();
    console.log("Database retrieval successful");
    console.log(result);
    if(result) {
        return result;
    }
}