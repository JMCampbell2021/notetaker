const express = require("express");
const fs = require("fs");
const notes = require("./db/db.json");


const PORT = process.env.PORT || 3001;
const app = express();

