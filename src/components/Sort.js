import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index'

class Sort extends Component {
    
    onClick = (sortBy, sortValue) => {
        this.props.onSort({
            by : sortBy,
            value : sortValue
        })
    }
  render() {
    var { sort } = this.props
    return (
        <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sắp Xếp <span className="fa fa-caret-square-o-down ml-2"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li 
                            onClick={ () => this.onClick('name', 1) }
                        >
                            <a role="button" className="btn">
                                <span className="fa fa-sort-alpha-asc pr-2"></span>
                                <span className="font-weight-bold">Tên A-Z</span>
                            </a>
                            <i className={ (sort.by === 'name' && sort.value === 1) ? 'fa-solid fa-check pr-2' : ''}></i>
                        </li>
                        <li 
                            onClick={ () => this.onClick('name', -1) }
                        >
                            <a role="button" className="btn">
                                <span className="fa fa-sort-alpha-desc pr-2"></span>
                                <span className="font-weight-bold">Tên Z-A</span>
                            </a>
                            <i className={ (sort.by === 'name' && sort.value === -1) ? 'fa-solid fa-check pr-2' : ''}></i>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li 
                            onClick={ () => this.onClick('status', 1) }
                        >
                            <a role="button" className="btn">
                                <span>Trạng Thái Kích Hoạt</span>
                            </a>
                            <i className={ (sort.by === 'status' && sort.value === 1) ? 'fa-solid fa-check pr-2' : ''}></i>
                        </li>
                        <li 
                            onClick={ () => this.onClick('status', -1) }
                        >
                            <a role="button" className="btn">Trạng Thái Ẩn</a>
                            <i className={ (sort.by === 'status' && sort.value === -1) ? 'fa-solid fa-check pr-2' : ''}></i>
                        </li>
                    </ul>
                </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        sort : state.sort
    }
  }
  
  const mapDispatchToProps = (dispatch, props) => {
    return {
        onSort : (sort) => {
            dispatch(actions.sortTask(sort))
        }
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Sort);
