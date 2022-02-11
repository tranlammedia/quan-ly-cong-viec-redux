import './App.css';
import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index'
class App extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            tasks: [],
            // isDisplayForm: false,
            // taskEdit: null,
            // filter : {
            //     name : '',
            //     status : -1
            // },
            // keyword : '',
            // sort : {
            //     sortBy : '',
            //     value : ''
            // }
        };
        
    }
    // componentDidMount() {
    //     var tasks = localStorage.getItem('tasks')
    //     this.setState({
    //         tasks : JSON.parse(tasks)
    //     })
    // }
    createGuid = () => {
        function s4() {
           return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
           return s4()+s4()+s4()+s4(); // Example => 'e014026082e6237b'
    }
    
    
    onDisplayForm = () => {
        // if(this.state.isDisplayForm && this.state.taskEdit !== null ) {
        //     this.setState({
        //         isDisplayForm : true,
        //         taskEdit : null
        //     })
        // } else {
        //     this.setState({
        //         isDisplayForm : !this.state.isDisplayForm,
        //     })
        // }
        if(this.props.itemEditing.id) {
            this.props.onOpenForm()
        } else this.props.onToggleForm()
        this.props.onClearTask({
            id : '',
            name : '',
            status: false
        })
    }
    // onCloseForm = () => {
    //     this.setState({
    //         isDisplayForm : false
    //     })
    // }
    // onOpenForm = () => {
    //     this.setState({
    //         isDisplayForm : true
    //     })
    // }
    // null tasks
    // onSubmitApp = (data) => {
    //     var tasks = this.state.tasks
    //     if(data.id) {
    //         var index = this.findId(data.id)
    //         tasks[index] = data
    //     }
    //     else {
    //         data.id = this.createGuid()
    
    //         // if tasks null
    //         tasks = tasks ? tasks.concat(data) : [data]
                         
    //         this.setState({
    //             tasks : tasks
    //         })
    //     }
    //     // tasks = tasks.concat(data)
    //     localStorage.setItem('tasks', JSON.stringify(tasks))
        
    // }
    // onClearTaskEdit = (data) => {
    //     this.setState({
    //         taskEdit : data
    //     })
    // }
    // onUpdateStatusApp = (id) => {
    //     var tasks = this.state.tasks
    //     var index = this.findId(id)
    //     // console.log(index)
    //     if(index !== -1) {
    //         tasks[index].status = !tasks[index].status
    //         this.setState({
    //             tasks : tasks
    //         })
    //     }
    //     localStorage.setItem('tasks', JSON.stringify(tasks))
    // }
    // onUpdateDataApp  = (id) => {
    //     var { tasks } = this.state
    //     var index = this.findId(id)
    //     this.setState({
    //         taskEdit : tasks[index]
    //     })
    //     this.onOpenForm()
    // }
    // findId(id) {
    //     var result = -1;
    //     this.state.tasks.forEach((task, index) => {
    //         if(task.id === id) {
    //             // console.log(index)
    //             result = index
    //         }
    //     })
    //     return result
    // }
    // onDeleteApp = (id) => {
    //     var tasks = this.state.tasks
    //     var index = this.findId(id)
    //     // console.log(index)
    //     if(index !== -1) {
    //         tasks.splice(index, 1)
    //         // tasks[index].status = !tasks[index].status
    //         this.setState({
    //             tasks : tasks
    //         })
    //     }
    //     localStorage.setItem('tasks', JSON.stringify(tasks))
    //     this.onCloseForm()
    // }
    // onFilterTaskList = (filterName, filterStatus) => {
    //     this.setState({
    //         filter : {
    //             name : filterName.toLowerCase(),
    //             status : parseInt(filterStatus)
    //         }
    //     })
    // }
    // onSearch = (data) => {
    //     this.setState({
    //         keyword : data.keyword
    //     })
    // }
    onSort = (sortBy, value) => {
        this.setState({
            sort : {
                sortBy : sortBy,
                value : value
            }
        })
    }
    render() {
        var { isDisplayForm } = this.props
        // var elmDisplayForm = isDisplayForm
        //     ? <TaskForm 
        //         // onCloseForm={ this.onCloseForm }
        //         // onSubmitTaskForm = { this.onSubmitApp }
        //         taskEdit={this.state.taskEdit}
        //         onClearTaskEdit={ this.onClearTaskEdit }
        //     /> 
        //     : ''
        // if(filter) {
            // if(filter.name) {
            //     tasks = tasks.filter((task) => {
            //         return task.name.toLowerCase().indexOf(filter.name) !== -1
            //     })
            // }
            // if(tasks) {
            //     tasks = tasks.filter((task) => {
            //         switch(filter.status) {
            //             case -1:
            //                 return task;
            //                 break;
            //             case 0:
            //                 return task.status === false;
            //                 break;
            //             default:
            //                 return task.status === true;
            //                 break;
            //         }
            //     })

            // }
            // if(keyword) {
            //     tasks = tasks.filter((task) => {
            //         return task.name.toLowerCase().indexOf(keyword) !== -1
            //     })
            // }
        // }
        // if(sort.sortBy === 'name') {
        //     tasks.sort((a, b) => {
        //         var nameA = a.name.toLowerCase()
        //         var nameB = b.name.toLowerCase()
        //         if( nameA < nameB ) {
        //             return -sort.value
        //         } else return sort.value
                    
        //     })
        // }
        // if(sort.sortBy === 'status') {
        //     tasks.sort((a, b) => {
        //         var statusA = a.status
        //         var statusB = b.status
        //         if( statusA < statusB ) {
        //             return sort.value
        //         } else return -sort.value
                    
        //     })
        // }
        // console.log(tasks)
        return (
        <div className="container">
            <div className="text-center">
                <h1>Quản Lý Công Việc</h1>
                <hr/>
            </div>
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <TaskForm 
                    // onCloseForm={ this.onCloseForm }
                    // onSubmitTaskForm = { this.onSubmitApp }
                    // taskEdit={this.state.taskEdit}
                    // onClearTaskEdit={ this.onClearTaskEdit }
                /> 
                </div>
                <div className={ isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                    <button 
                        type="button"
                        className="btn btn-primary"
                        onClick={ this.onDisplayForm }
                    >
                        <span 
                            className={ isDisplayForm ? "fa fa-minus mr-2" : "fa fa-plus mr-2"}
                            
                        ></span>Thêm Công Việc
                    </button>
                    
                    <Control 
                        // onSearchApp={ this.onSearch }
                        // onSortApp={ this.onSort }
                    />
                    <div className="row mt-15">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <TaskList 
                                // tasks={ tasks }
                                // onUpdateStatusTaskList={ this.onUpdateStatusApp }
                                // onUpdateDataTaskList={ this.onUpdateDataApp }
                                // onDeleteTaskList={ this.onDeleteApp }
                                // onFilter= { this.onFilterTaskList }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isDisplayForm : state.isDisplayForm,
        itemEditing : state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleForm : () => {
            dispatch(actions.toggleForm())
        },
        onOpenForm : () => {
            dispatch(actions.openForm())
        },
        onClearTask : (task) => {
            dispatch(actions.editTask(task))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
