const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/user-profile/:abcd', function(req, res) {
    console.log(req)
    console.log(req.params.abcd)
    res.send('dummy response')
})

router.get('/test-me', function (req, res) {
    console.log('------------------')
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)
    res.send('My first ever api!')
});
router.get('/all/movies', function (req, res) {
    console.log(req);
    let array = ['RRS', 'PUSHPA', 'KICK', 'SARAY', 'JANIDUMAN']
    res.send(array);
});

   

const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/user-profile/:abcd', function(req, res) {
    console.log(req)
    console.log(req.params.abcd)
    res.send('dummy response')
});

// Problem  this is my first problem 1
router.get('/Get/movies', function(req, res) {
    let arr = ['Rang De Basanti', 'Kick', 'King', 'RRR']
    res.send(arr)
});

// Problem this is my second problem 2

router.get('/Get/movie/:index', function (req, res) {
    let arr = ['Loha', 'Spider man home king', 'King', 'RRR'];
     res.send(arr[req.params.index])
});

// Problem  3
router.get('/Get/movies/:index', function (req, res) {
    let arr = ['Janidusman', 'Tiranga', 'King', 'RRR'];
    if (req.params.index>arr.length-1){
        res.send("use a valid index in an error message")
    }
     res.send(arr[req.params.index])
});

// Problem 4 -----------------------------------------------------------------
router.get('/films', function (req, res) {
    movies = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo" }];
        res.send(movies)
});
 
// Problem no 5 -------------------------------------------------

router.get('/films/:filmId', function (req, res) {
    
    movies = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo" }];
        if(req.params.filmId > movies.length -1){

          res.send("the filmid no is exceeded")      

        }
res.send(movies[req.params.filmId])


});
router.get('/get-missing', function (req, res)
const numArry = [1,2,3,4,5,7,8,9]
const missing =[];
for (let i in numArry){
    let x =numArray[i] - numArry[i-1];
    let diff =1;
    while (diff < x){
        missing.push(numArry[i-1]+ diff);
        diff++;
    }

})

module.exports = router;


// adding this comment for no reason
