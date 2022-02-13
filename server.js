const express = require("express");
const fs = require("fs");
const notes = require("./db/db.json");
const uuid = require("uuid");
const path = require("path");


const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));
