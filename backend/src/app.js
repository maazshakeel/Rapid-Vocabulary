// importing
require("dotenv").config()
const mysql = require("mysql")
const express = require('express');
const con = require('./config/database')

// app
const app = express()

// middleware
app.use(express.json())

// Login goes here

module.exports = app;