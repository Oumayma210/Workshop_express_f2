//1 importation express
const express = require("express");
//2creation instance :app
const app = express();

//3Port
const PORT = 5620;
//4Middelware: format json
app.use(express.json());
//5 route simple
app.get("/test", (req, res) => res.send("hello"));
// 6Crud: get all
let users = [
    { name: "salim", age: 28 },
    { name: "mariem", age: 28 },
    { name: "oumayma", age: 25 },
];
app.get("/user", (req, res) =>
    res.status(200).send({ msg: "get all users", users })
);
//7Crud: Post
app.post("/adduser", (req, res) => {
    const newUser = req.body;
    users = [...users, newUser];
    res.status(200).send({ msg: "add new user please!!!", newUser });
});

//4creation du serveur
app.listen(PORT, (err) =>
    err
        ? console.log(err)
        : console.log(`the server is running in port ${PORT}`)
);
