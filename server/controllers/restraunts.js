var mongoose = require('mongoose');
var Restraunt = mongoose.model('Restraunt');
var Review = mongoose.model('Review');
module.exports = {
    show: function(req, res) {
        Restraunt.find({}, function(err, data) {
            console.log("test")
            if (data) {
                console.log(data)
                res.json(data)
            }
            if (err) {console.log(err)
                res.json(err)
            };                 
                
            })
    },
    showrev: function(req, res) {
        console.log("test for get reviews")
        var thisid = req.params.id
        console.log(thisid)
        Review.find({restid: thisid}, null, {sort: {stars: -1}}, function(err, data) {
            console.log("test")
            if (data) {
                console.log(data)
                res.json(data)
            }
            if (err) {console.log(err)
                res.json(err)
            };                 
                
            })
    },
    show_one: function(req, res) {
        console.log("test2")
        var thisid = req.params.id
        console.log(thisid)
        Restraunt.findOne({_id: thisid}, function(err, data){
            if (err) {
                // console.log(JSON.stringify(data));
                res.json(err)
            }
            if (data) {
                console.log("Got it", data)

                res.json({data:data})

            };                 
                
            })
    },
    create: function(req, res) {  
        console.log("test3")   
        var new_restraunt = new Restraunt({
            name: req.body.name,
            cuisine: req.body.cuisine,
            
         });
         console.log("In the create function", new_restraunt)
        new_restraunt.save(function(err,restraunt){
            if(err) {
                console.log('something went wrong');
                res.json(err)
            } else { // else console.log that we did well and then redirect to the root route
                console.log(new_restraunt.id)
                res.json(restraunt)
            }   
        })
    },
    createrev: function(req, res) {  
        console.log("test3.5")   
        var new_review = new Review({
            name: req.body.name,
            stars: req.body.stars,
            content: req.body.content,
            restid: req.body.restid
         });
         console.log("In the create function", new_review)
        new_review.save(function(err,review){
            if(err) {
                console.log('something went wrong');
                res.json(err)
            } else { // else console.log that we did well and then redirect to the root route
                console.log(new_review.id)
                res.json(review)
            }   
        })
    },
    update: function(req, res) {
        console.log("test4")
        var thisid = req.params.id
        console.log(thisid)       
        console.log(req.body.num) 
        // var opts = { runValidators: true }; 
        var client = req.body;   
        Restraunt.findOneAndUpdate({_id: thisid}, {name:req.body.name, cuisine:req.body.cuisine},  function(err, restraunt){
            if(err){
                console.log("Something wrong when updating data!");
                res.json(err)
            }    
            if(restraunt) {
                res.json(restraunt)
            }  
            
        });
        
    },
    delete: function(req, res) {
        console.log("test5")
        var thisid = req.params.id
        console.log(thisid)
        Restraunt.find({_id: thisid}).remove( function(err, tasks){
            if(err){
                console.log("Something wrong when deleting data!");
            }
            if(tasks) {
                res.json(tasks)
            }
        });  
       
    }
    
    
}