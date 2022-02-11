
import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux'
import * as actions from './../actions/index'

class TaskList extends Component {
    constructor (props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            filterName : '', 
            filterStatus: -1 // -1 all - 0 chưa kích hoạt - 1 kích hoạt
        };
    }
    // onUpdateStatusTaskList = (id) => {
    //     this.props.onUpdateStatusTaskList(id)
    // }
    onDeleteTaskList = (id) => {
        this.props.onDeleteTaskList(id)
    }
    onUpdateDataTaskList = (id) => {
        this.props.onUpdateDataTaskList(id)
    }
    onFilter = (event) => {
        var name = event.target.name
        var value = event.target.value
        var filter = {
            name : name === 'filterName' ? value : this.state.filterName,
            status : name === 'filterStatus' ? value : this.state.filterStatus
        }
        this.props.onFilterTable(filter)
        this.setState({
            [ name ] : value
        })
    }
    render() {
        var { filterTable, tasks, keyword, sort } = this.props
        console.log(sort)
        // filter on table
        
        if(filterTable.name) {
            
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(filterTable.name) !== -1
            })
        }
        
        tasks = tasks.filter((task) => {
            switch(filterTable.status) {
                case -1:
                    return task;
                    break;
                case 0:
                    return task.status === false;
                    break;
                default:
                    return task.status === true;
                    break;
            }
        })

        // search
        tasks = tasks.filter((task) => {
            return task.name.toLowerCase().indexOf(keyword) !== -1
        })
        
        // sort 
        if(sort.by === 'name') {
                tasks.sort((a, b) => {
                    var nameA = a.name.toLowerCase()
                    var nameB = b.name.toLowerCase()
                    if( nameA < nameB ) {
                        return -sort.value
                    } else return sort.value
                        
                })
            }
        if(sort.by === 'status') {
            tasks.sort((a, b) => {
                var statusA = a.status
                var statusB = b.status
                if( statusA < statusB ) {
                    return sort.value
                } else return -sort.value
                    
            })
        }

        var elements = []
        if (tasks) {
            elements = tasks.map((item, index) => {
                return <TaskItem 
                            key={index}
                            id={ index + 1 }
                            task={item}
                            // onUpdateStatusTaskItem={ this.onUpdateStatusTaskList }
                            onUpdateDataTaskItem={ this.onUpdateDataTaskList }
                            // onDeleteTaskItem={ this.onDeleteTaskList }
                        />
            })
        }
        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input
                                type="text" 
                                className="form-control"
                                name="filterName"
                                value={ this.state.filterName }
                                onChange={ this.onFilter }
                            />
                        </td>
                        <td>
                            <select 
                                className="form-control"
                                name="filterStatus"
                                value={ this.state.filterStatus }
                                onChange={ this.onFilter }
                            >
                                <option value={-1}>Tất Cả</option>
                                <option value={0}>Ẩn</option>
                                <option value={1}>Kích Hoạt</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    { elements }
                </tbody>
            </table>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        tasks : state.tasks,
        filterTable : state.filterTable,
        keyword : state.search,
        sort : state.sort
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilterTable : (filter) => {
            dispatch(actions.filterTable(filter))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
