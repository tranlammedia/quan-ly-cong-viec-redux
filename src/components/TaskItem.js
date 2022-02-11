
import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './../actions/index'


class TaskItem extends Component {
    onUpdateStatus = () => {
        // this.props.onUpdateStatusTaskItem(this.props.task.id)
        this.props.onUpdateStatus(this.props.task.id)
    }
    onDelete = () => {
        this.props.onDeleteTask(this.props.task.id)
        this.props.onCloseForm()
    }
    onEditTask = () => {
        // this.props.onUpdateDataTaskItem(this.props.task.id)
        this.props.onOpenForm()
        this.props.onEditTask(this.props.task)
    }
  render() {
    return (
        <tr>
            <td>{ this.props.id}</td>
            <td>{ this.props.task.name }</td>
            <td 
                className={this.props.task.status ? 'text-center bg-success' : 'text-center bg-danger'}
                onClick={ this.onUpdateStatus }
            >
                <span className="label label-success">
                            { this.props.task.status ? 'Kích hoạt' : 'Chưa kích hoạt' }
                        </span>
            </td>
            <td className="text-center">
                <button 
                    type="button" 
                    className="btn btn-warning"
                    onClick={ this.onEditTask }
                >
                    <span className="fa fa-pencil mr-2"></span>Sửa
                </button>
                &nbsp;
                <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={ this.onDelete }
                >
                    <span className="fa fa-trash mr-2"></span>Xóa
                </button>
            </td>
        </tr>
    );
  }
}


const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus : (id) => {
            dispatch(actions.updateStatus(id))
        },
        onDeleteTask : (id) => {
            dispatch(actions.deleteTask(id))
        },
        onCloseForm : () => {
            dispatch(actions.closeForm())
        },
        onOpenForm : () => {
            dispatch(actions.openForm())
        },
        onEditTask : (task) => {
            dispatch(actions.editTask(task))
            
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);