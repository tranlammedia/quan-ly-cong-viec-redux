import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index'

class Search extends Component {
  constructor (props) {
    super(props);
    this.state = {
      keyword : ''
    }
  }
  onChange = (event) => {
    var name = event.target.name
    var value = event.target.value
    this.setState({
      [name] : value
    })
  }
  onSearch = (keyword) => {
    this.props.onSearch(this.state.keyword)
  }
  render() {
    var { keyword } = this.state
    return (
      <div className="input-group">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Nhập từ khóa..."
            name="keyword"
            onChange={ this.onChange }
            value={ keyword }
          />
          <span className="input-group-btn">
                      <button 
                        className="btn btn-primary"
                        type="button"
                        onClick={ this.onSearch }
                      >
                          <span className="fa fa-search mr-2"></span>Tìm
          </button>
          </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch, props) => {
  return {
      onSearch : (keyword) => {
          dispatch(actions.searchTask(keyword))
      }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);

