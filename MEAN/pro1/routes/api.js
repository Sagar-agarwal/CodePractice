var express = require('express');
var router = express.Router();


// some implementation
router.route('/posts')
	
	//returns all posts
	.get(function(req, res){

		//temporary solution
		res.send({message: 'TODO return all posts in database'});
	})

	.post(function(req, res){

		//temporary solution
		res.send({message: 'TODO create new post in database'});
	})

router.route('/posts/:id')

	//return a particular post
	.get(function(req, res){

		res.send({message: 'ToDo return post with ID ' + req.params.id})
	})

	//update existing post
	.put(function(req,res){

		//modify a post
		res.send({message: 'ToDo modify post with ID ' + req.params.id})
	})

	//delete post
	.delete(function(req, res){

		//delete a post
		res.send({message: 'ToDo delete post with ID ' + req.params.id})
	})

module.exports = router;