// basic imports with our css file
import ReactDOM from "react-dom";
import React from "react";
import "./index.css";

//creating AddTask component
class AddTask extends React.Component {
    constructor(props){
        super(props);
        //initially input box where we write tasks to add is empty
        this.state = {
            taskDesc: ""
        }
    }
    handleTaskTextChange(e){
        //set taskDesc in state to the value we entered in input box to reflect those changes in our app
        this.setState({
            taskDesc: e.target.value
        })
    }
    
    handleAddTaskClick(){
        //this will call the handlerToCollectTaskInfo() fn that we passed through parent App component
        this.props.handlerToCollectTaskInfo(this.state.taskDesc);
        // after clicking the addtask button we clear the input box
        this.setState({
            taskDesc: ""
        })
    }

    render() {
        return (
            <form>
                {/* on change of text this handleTaskTextChange function is called */}
                <input type="text" value={this.state.taskDesc} onChange={(e) => this.handleTaskTextChange(e)} />
                {/* on clicking the button this handleAddTaskClick function is called */}
                <input type="button" value="Add Task" onClick={() => this.handleAddTaskClick()}/>
            </form>
        );
    }
}

//creating tasklist component
class TaskList extends React.Component {

    handleTaskClick(taskDesc){
        //it takes our task desc and pass it to the handlerToCollectTaskClickInfo() fn defined in our parent App component
        this.props.handlerToCollectTaskClickInfo(taskDesc);
    }

    render() {
        //initialise an empty list
        let list = [];

        //fill the list with data recieved from parent App via props
        for (let i = 0; i < this.props.tasks.length; i++) {
            let task = this.props.tasks[i];
            let spanAction;

            //finished has cross icon and todo has tick icon
            if(task.isFinished){
                spanAction = (
                    //on clicking this icon a function is called which contains the task desc of the task clicked
                    <span class="material-icons" onClick={() => this.handleTaskClick(task.desc)}>close</span>
                );
            } else {
                spanAction = (
                    //on clicking this icon a function is called which contains the task desc of the task clicked
                    <span class="material-icons" onClick={() => this.handleTaskClick(task.desc)}>done</span>
                );
            }

            let listItem = (
                // set key to individually identify tasks
                // create a list item tag with it
                <div key={i}>
                    <span>{task.desc}</span>
                    {spanAction}
                </div>
            );
            //push this item in out list
            list.push(listItem)
        }

        return (
        <>
            {/* props is used to interact from parent to child */}
            {/* pros contains attributes like purpose,etc. that are defined inside <TaskList/> in the App(parent) component*/}
            <div className={this.props.forStyling}>
                <div className="list-container">
                    <div className="title">{this.props.purpose}</div>
                    <div className="content">
                        {/* use the list created above */}
                        {list}
                    </div>
                </div>
            </div>
            {/* html classes are added for different versions of this component and those will be styled accordingly */}
        </>
        );
    }
}

//app is a react component
class App extends React.Component {
    constructor(props){
        super(props);

        //state contains all the data we need to pass to components
        this.state = {
            //dummy tasks -> tasks array can be empty as we are filling it with the tasks entered in the input box in our application
            tasks: [{
                desc: "Switch off light", isFinished: false
            },{
                desc: "Turn On Fan", isFinished: true
            },{
                desc: "Make Tea", isFinished: false
            },{
                desc: "Make Dinner", isFinished: true
            }]
        }
    }

    handleNewTask(taskDesc){
        //make copy of old tasks
        let oldTasks = this.state.tasks.slice();
        //push our new task as unfinished i.e. todo
        oldTasks.push({
            desc: taskDesc,
            isFinished: false
        });
        //change the state to reflect the changes on app as it will call render()
        this.setState({
            tasks: oldTasks
        })
    }

    handleTaskStatusUpdate(taskDesc, newStatus){
        //make copy of old tasks
        let oldTasks = this.state.tasks.slice();

        //find task that matched our taskDesc
        let taskItem = oldTasks.find(ot => ot.desc == taskDesc);
        //set its is Finished to newStatus
        taskItem.isFinished = newStatus;

        //set tasks in state to rerender the page and reflect the changes
        this.setState({
            tasks: oldTasks
        })
    }

    //render() is a lifecycle method which runs when our app is started
    render() {
        let tasks = this.state.tasks;//get tasks from state
        //separate todo and done tasks in terms of isFinished attribute
        let todoTasks = tasks.filter(t => t.isFinished == false);
        let doneTasks = tasks.filter(t => t.isFinished == true);
        
        //it returns HTML mixed with JS(called JSX)
        return (
        <>
            <div className="add-task">
            {/* addtask component is used inside app component using <AddTask /> tag*/}
            {/* passed handlerToCollectTaskInfo(a fn to handle newly added tasks) to AddTask component from parent App */}
            <AddTask handlerToCollectTaskInfo={(taskDesc) => this.handleNewTask(taskDesc)}/>
            </div>
            <div className="task-lists">
                {/* tasklist component is used twice inside app component using <TaskList /> tag, 
                it also has attributes(like purpose, forStyling, etc) which are values passed to the children component TaskList from parent component App*/}
                {/* handlerToCollectTaskClickInfo is a function sent to TaskList component via parent App which changes isFinished on click of cross or tick */}
                <TaskList handlerToCollectTaskClickInfo={(taskDesc) => this.handleTaskStatusUpdate(taskDesc, true)} tasks={todoTasks} purpose="Tasks to do" forStyling="todo"/>
                {/* for todo it sets isFinished=true and opp. for finished */}
                {/* handleTaskStatusUpdate works by calling the function handleTaskStatusUpdate() 
                having the task desc recieved from Tasklist's task that was clicked along with the change in isFinished to be reflected*/}
                <TaskList handlerToCollectTaskClickInfo={(taskDesc) => this.handleTaskStatusUpdate(taskDesc, false)} tasks={doneTasks} purpose="Finished tasks" forStyling="finished"/>
                {/* tasks list for different components has been passed in attribute called tasks */}
            </div>
        </>
        );
    }
}

//this returned value is injected in <App/> -- which can be used as a tag anywhere to place our component --
//ReactDom takes this tag injects it in "root" and then renders it
ReactDOM.render(<App />, document.getElementById("root"));


