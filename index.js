const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const categories = require('./Data/category.json');
const courses = require('./Data/courses.json');

app.use(cors());
app.use(express.json());

//Get all Categories
app.get('/categories', (req, res) => {
    res.send(categories)
})

//Get all Courses
app.get('/courses', (req, res) => {
    res.send(courses)
})

//get Category by 
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(courses);
    }
    else {
        const category_courses = courses.filter(c => c.category_id === id);
        res.send(category_courses);
    }
})

//get courses by id
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourses = courses.find(c => c._id === id);
    res.send(selectedCourses);
});

app.get('/', (req, res) => {
    res.send('Courses Server is running')
})
app.listen(port, () => {
    console.log('Courses server running on', port)
})