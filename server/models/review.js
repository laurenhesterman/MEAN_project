var mongoose = require('mongoose');
// create the schema
var ReviewSchema = new mongoose.Schema({
    name:  {type: String, required: [true, 'Your name is required'], minlength: 3},
    stars: {type: Number, required: [true, 'Star Rating is required'],min: [1, 'Must Be at least 1'],
            max: [5, 'No more than 5']},
    content:  {type: String, required: [true, 'Review name is required'], minlength: 3},
    restid:  {type: String},
   }, {timestamps: true }) 

   mongoose.model('Review', ReviewSchema); 
   
// register the schema as a model
var Review = mongoose.model('Review', ReviewSchema);