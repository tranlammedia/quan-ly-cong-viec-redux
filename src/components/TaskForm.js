import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index'
class TaskForm extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            id : '', 
            name: '',
            status: true
        };
        
    }
    componentDidMount() {
        if(this.props.itemEditing) {
            this.setState({
                id : this.props.itemEditing.id,
                name : this.props.itemEditing.name,
                status : this.props.itemEditing.status
            })
        }
        // else this.setState({ 
        //     id : '', 
        //     name: '',
        //     status: true
        // });
    }
    UNSAFE_componentWillReceiveProps(nextProp) {
        if(nextProp && nextProp.itemEditing) {
            this.setState({
                id : nextProp.itemEditing.id,
                name : nextProp.itemEditing.name,
                status : nextProp.itemEditing.status
            })
        } else this.setState({ 
            id : '', 
            name: '',
            status: true
        });
    }
    onToggleForm = () => {
        this.props.onCloseForm()
    }
    onChange = (event) => {
        var name = event.target.name
        var value = event.target.value
        if(name === 'status') {
            value =  event.target.value === 'true' ? true : false
        }
        this.setState({
            [ name ] : value
        })
    }
    onSubmit = (event) => {
        event.preventDefault()
        // this.props.onSubmitTaskForm(this.state)
        this.props.onSaveTask(this.state)

        this.onClear()
        this.onToggleForm()
    }
    onClear = () => {
        this.setState({
            name: '',
            status: false
        })
    }
  render() {
    if(!this.props.isDisplayForm) {
        return null
    } 
    else return (
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">Thêm Công Việc
                    <span
                        className="fa fa-times-circle ml-5 close-form"
                        onClick={ this.onToggleForm }
                    >
                    </span>
                </h3>
            </div>
            <div className="panel-body">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Tên :</label>
                        <input 
                            type="text"
                            className="form-control"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                        />
                    </div>
                    <label>Trạng Thái :</label>
                    <select
                        className="form-control"
                        required="required"
                        name="status"
                        value={this.state.status}
                        onChange={this.onChange}
                    >
                        <option value={true}>Kích Hoạt</option>
                        <option value={false}>Ẩn</option>
                    </select>
                    <br/>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn btn-warning"
                        >Thêm</button>&nbsp;
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={ this.onClear }    
                        >Hủy Bỏ</button>
                    </div>
                </form>
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
        onSaveTask : (task) => {
            dispatch(actions.saveTask(task))
        },
        onCloseForm : () => {
            dispatch(actions.closeForm())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
