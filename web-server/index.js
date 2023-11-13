const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/employee');    

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb://127.0.01:27017/webData');
 
app.post('/register', (req,res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({email: email})
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success")
                } else {
                    res.json("The Password is not correct!")
                }
            } else {
                res.json("No Recode Existed!")
            }
        })
        .catch(err => res.json(err))
});

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
        .then(employee => res.json(employee))
        .catch(err => res.json(err))
});

app.listen(3001, () => {
    console.log('Server is Running!');
});



