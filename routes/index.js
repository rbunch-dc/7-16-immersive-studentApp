var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var mongoUrl = 'mongodb://localhost:27017/students';
var db; //Global so all of our routes have access to the db connection

mongoClient.connect(mongoUrl, function(error, database){
	if(error){
		console.log(error); //Print out the error because there is one
	}else{
		db = database; //Set the database object that was passed back to our callback, to our global db.
		console.log("Connected to Mongo successfully.");
	}
});

var studentsInClass = [
	"Paige", 
	"Danny", 
	"Jackson",
	"Shirlette",
	"Daniel",
	"Alex",
	"JT",
	"Eric",
	"David",
	"Brett",
	"Danielle",
	"Summer"
];



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/students', function(req, res, next){
	db.collection('class').find().toArray(function(error, classResult){
		// req.query = the query string as an object!
		var studentNumber = req.query.student;
		res.render('students',{
			joeShmoe: studentsInClass,
			anotherVariable: [3,4,5,1234,2345,456,346],
			animals: [
				{
					name: 'zebra',
					weight: 'a lot'
				},
				{
					name: 'black bear',
					type: 'best'
				}
			],
			whoToHighlight: studentNumber
		});
	});
});

module.exports = router;
