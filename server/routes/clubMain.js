const { request } = require("express");
const express = require("express");

const clubMainRoutes = express.Router();
 
const dbo = require("../db/conn");
 
const ObjectId = require("mongodb").ObjectId;

clubMainRoutes.route("/club/members").get(function (req, res) {
    let db_connect = dbo.getDb("main");
    let myquery = { clubname: "Sports" };
    db_connect
      .collection("club-members")
      .findOne(myquery,function (err, result) {
        if (err) throw err;
        res.json(result);
      });
   });

   clubMainRoutes.route("/club/potentialMembers").get(function (req, res) {
    let db_connect = dbo.getDb("main");
    let myquery = { clubEmail: "d@mail.utoronto.ca" };
    db_connect
      .collection("clubApplicants")
      .find(myquery)
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
   });

   clubMainRoutes.route("/club/potentialMembers/:id").delete(function (req, res) {
    let db_connect = dbo.getDb("main");
    let myquery = { _id: ObjectId(req.params.id)  };
    db_connect
      .collection("clubApplicants")
      .deleteOne(myquery, function (err, result) {
        if (err) throw err;
      });
   });

   clubMainRoutes.route("/club/potentialMembers").post(function (req, res) {
    let db_connect = dbo.getDb("main");
    let student = {
      clubName: req.body.clubName,
      clubEmail: req.body.clubEmail,
      email: req.body.email,
      userName: req.body.userName,
     };
    db_connect
      .collection("club-members")
      .insertOne(student, function (err, result) {
        if (err) throw err;
        console.log("Student added to club");
      });
   });



module.exports = clubMainRoutes;