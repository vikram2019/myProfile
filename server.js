let express = require('express');
let bodyParser = require('body-parser');
// let nodemon = require('nodemon');
let morgan = require('morgan');
let cors = require('cors');
let path = require('path');
let mongoose = require('mongoose');

let skillRoutes = require('./backend/skills/skillsRoute/skillsRoutes');
let educationRoutes = require('./backend/education/educationRoute/educationRoutes');
let profile = require('./backend/profile/profileRoutes/profileRoutes');
let config = require('./config/config');
let yearRoutes = require('./backend/miscellaneous/routes/yearsRoutes');
let monthRoutes = require('./backend/miscellaneous/routes/monthRoutes');
let linkRoutes = require('./backend/miscellaneous/routes/linkRoutes');
let courseRoutes = require('./backend/miscellaneous/routes/courseRoutes');

let app = express();

// app.use(morgan(dev));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());
//This is the static file for Angular 8
app.use(express.static(path.join(__dirname, '/dist/vikramProfile')));


app.use('/skills', skillRoutes);
app.use('/education', educationRoutes);
app.use('/profile', profile);
app.use('/year', yearRoutes);
app.use('/month', monthRoutes);
app.use('/link', linkRoutes);
app.use('/course', courseRoutes);


app.use((data,req, res, next) => {
    const error = new Error(data);
    error.status = 404;
    next(error);
});

//This is the Default Route for Angular 6
app.get('*', function (req, res, next) {
    res.sendFile(path.join(__dirname));
})

app.listen(config.port, (err)=>{
    if(err){
        console.log('Error in connecting in database');
    }else{
        console.log('Server connected at port '+config.port);
    }
});

mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify : false });
mongoose.connection.on('Connected', (err)=>{
    if(err){
        console.log('Error in connecting the database '+err);
    }else{
        console.log('Connected to database at port 27017');
    }
});