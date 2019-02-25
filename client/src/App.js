import React, { Component } from 'react';
import './App.css';
const axios = require('axios');

class TaskForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      completed: false
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state)
    this.setState({
      title: '',
      description: '',
      completed: false
    })
    this.setState({title: '', description: ''})
  }
  handleName = (e) => {
    this.setState({
      title: e.target.value
    })
  }
  handleDescription = (e) => {
    this.setState({
      description: e.target.value
    })
  }

  render () {
    const { title, description } = this.state;
    return (
      <form onSubmit = {this.handleSubmit}>
        <label className="form-group">Task</label>
        <input className="form-control" type="text" value={title} onChange={this.handleName} />

        <label className="form-group">Description</label>
        <input className="form-control" type="text" value={description} onChange={this.handleDescription} />

        <input className="btn btn-outline-primary a" type="submit" value="Add Task" />
      </form>
    )
  }
}


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      latest_id: 4,
      tasks: []
    }
  }

  componentDidMount(){
    axios.get('/tasks')
      .then ((res) => {
        console.log(res);
        this.setState({
          tasks: res.data.data
        })
      })
      .catch(function(err){
        console.log(err);
      })
  }

  handleClick = (id, e) => {
    let t = [...this.state.tasks];
    for (let i in t) {
      if (t[i]._id === id){
        t[i].completed = !t[i].completed;
      }
    }
    this.setState({tasks: t});
    axios.put('/tasks/' + id)
      .then((res) => {
        console.log('task status changed')
      }).catch((err)=>{
        console.log('error:' + err);
    })
  };

  deleteTask = (id, e) => {
    let t = [...this.state.tasks];
    for (let i in t){
      if(t[i]._id === id){
        t.splice(i, 1);
      }
    }
    this.setState({tasks: t});
    axios.delete('/tasks/' + id)
      .then((res) => {
        console.log('deleted');
      })
      .catch((err) => {
        console.log('error:' + err);
      })
  }

  createTask = (task) => {
    let t = [...this.state.tasks];
    task._id = this.state.latest_id;
    this.setState({
      latest_id: task._id + 1
    });
    t.push(task);
    this.setState({
      tasks: t
    });
    axios.post('/tasks', {
      title: task.title,
      description: task.description
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="reduce">
        <h1>React Tasks</h1>
        <div className="table-div">
          <table className="table table-striped table-light">
            <thead>
              <tr>
                <th>Task</th>
                <th>Description</th>
                <th className="th">Status</th>
                <th className="buttons-div">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.tasks.map((task) =>
                  <tr key={task._id}>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td className="th">{
                      (task.completed) ?
                        <span>Complete</span> : <span>Incomplete</span>
                    }</td>
                    <td className="actions">
                      <button className="btn btn-outline-secondary margin-right" onClick={this.handleClick.bind(this, task._id)}>
                        Update
                      </button>
                      <button className="btn btn-outline-danger" onClick={this.deleteTask.bind(this, task._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
          <h2>Add a Task</h2>
          <div className="form-div">
            <TaskForm onCreate = {this.createTask}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
