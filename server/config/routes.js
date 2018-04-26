var mongoose = require('mongoose');
var Restraunt = mongoose.model('Restraunt');
var Review = mongoose.model('Review');
var restraunts = require('../controllers/restraunts.js');
var path = require('path')

module.exports = function(app) {
    app.get("/restraunt", (req, res) => { 
        restraunts.show(req, res)
        })
    app.get("/review/:id", (req, res) => { 
        restraunts.showrev(req, res)
        })
    app.get("/restraunt/:id", (req, res) => { 
        restraunts.show_one(req, res)
        })
    app.post("/restraunt", (req, res) => { 
        restraunts.create(req, res)
        })
    app.post("/review", (req, res) => { 
        restraunts.createrev(req, res)
        })
    app.put("/restraunt/:id", (req, res) => { 
        console.log("test")
        restraunts.update(req, res)
        })
    app.delete("/restraunt/:id", (req, res) => { 
        restraunts.delete(req, res)
        })
    app.all('*', (req, res)=>{
        res.sendFile(path.resolve('./client/dist/index.html'))
    })
}                          
