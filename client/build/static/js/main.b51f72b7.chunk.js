(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(8),i=a.n(s),r=(a(15),a(1)),o=a(2),c=a(3),m=a(5),u=a(4),d=a(6),p=(a(16),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.props.onCreate(a.state),a.setState({task:"",description:"",isComplete:!1});var t=!0,n=!1,l=void 0;try{for(var s,i=e.target.childNodes[Symbol.iterator]();!(t=(s=i.next()).done);t=!0){var r=s.value;r.classList.contains("form-control")&&(r.value="")}}catch(o){n=!0,l=o}finally{try{t||null==i.return||i.return()}finally{if(n)throw l}}},a.handleName=function(e){a.setState({task:e.target.value})},a.handleDescription=function(e){a.setState({description:e.target.value})},a.state={task:"",description:"",isComplete:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",{className:"form-group"},"Task"),l.a.createElement("input",{className:"form-control",type:"text",name:"taskName",onChange:this.handleName}),l.a.createElement("label",{className:"form-group"},"Description"),l.a.createElement("input",{className:"form-control",type:"text",name:"taskDescription",onChange:this.handleDescription}),l.a.createElement("input",{className:"btn btn-outline-primary a",type:"submit",value:"Add Task"}))}}]),t}(n.Component)),h=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).createTask=function(e){var t=Object(r.a)(a.state.tasks);e.id=a.state.latest_id,a.setState({latest_id:e.id+1}),t.push(e),a.setState({tasks:t}),console.log("inside of app",e)},a.state={latest_id:4,tasks:[{id:1,task:"Learn React",description:"states, props, jsx, whatever",isComplete:!1},{id:2,task:"climb a mountain",description:"mount killimanjaro",isComplete:!1},{id:3,task:"white water raft the colorado river",description:"very wet",isComplete:!1}]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e,t){var a=Object(r.a)(this.state.tasks);for(var n in a)a[n].id===e&&(a[n].isComplete=!a[n].isComplete);this.setState({tasks:a})}},{key:"deleteTask",value:function(e,t){var a=Object(r.a)(this.state.tasks);for(var n in a)a[n].id===e&&a.splice(n,1);this.setState({tasks:a})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h1",null,"React Tasks"),l.a.createElement("div",{className:"table-div"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Task"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Status"),l.a.createElement("th",{width:"25%"},"Actions"))),l.a.createElement("tbody",null,this.state.tasks.map(function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.task),l.a.createElement("td",null,t.description),l.a.createElement("td",null,t.isComplete?l.a.createElement("span",null,"Complete"):l.a.createElement("span",null,"Incomplete")),l.a.createElement("td",{className:"actions"},l.a.createElement("button",{className:"btn btn-outline-secondary",onClick:e.handleClick.bind(e,t.id)},"Update"),l.a.createElement("button",{className:"btn btn-outline-secondary",onClick:e.deleteTask.bind(e,t.id)},"Delete")))}))),l.a.createElement("div",{className:"form-div"},l.a.createElement(p,{onCreate:this.createTask}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.b51f72b7.chunk.js.map