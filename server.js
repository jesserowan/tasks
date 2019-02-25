const express = require('express'),
     mongoose = require('mongoose'),
           bp = require('body-parser'),
         path = require('path'),
          app = express();

mongoose.connect(`mongodb://localhost/tasks`);
app.use(bp.json());

app.use(express.static(__dirname + '/client/public/index.html'));

const TaskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, default: ''},
    completed: {type: Boolean, default: false},
}, {timestamps: true})

mongoose.model('Task', TaskSchema);
const Task = mongoose.model('Task');

app.get('/tasks', function(req, res){
    Task.find({}, function(err, tasks){
        if(err){
            console.log('something went wrong...');
            res.json({message: "error", error: err});
        } else {
            console.log('successfully found all tasks');
            res.json({message: 'success', data: tasks});
        }
    })
});

app.post('/tasks', function(req, res){
    let task = new Task(req.body);
    task.save(function(err){
        if(err){
            console.log('something went wrong...');
            res.json({message: "error", error: err});
        } else {
            console.log('successfully created task');
            res.json({message: 'success', data: task});
        }
    })
});

app.get('/tasks/:id', function(req, res){
    Task.find({_id: req.params.id}, function(err, task){
        if(err){
            console.log('something went wrong...');
            res.json({message: "error", error: err});
        } else {
            console.log('successfully found task');
            res.json({message: 'success', data: task});
        }
    })
});

app.put('/tasks/:id', function(req, res){
    Task.update({_id: req.params.id}, {$set: req.body}, function(err){
        if(err){
            console.log('something went wrong...');
            res.json({message: 'error', error: err});
        } else {
            res.json({message: 'success'});
        }
    });
});

app.delete('/tasks/:id', function(req, res){
    Task.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.log('something went wrong...');
            res.json({message: "error", error: err})
        } else {
            console.log('successfully removed task');
            res.json({message: 'task removed'});
        }
    })
});

app.listen(8000, function(){
    console.log('Listening on port 8000...')
});