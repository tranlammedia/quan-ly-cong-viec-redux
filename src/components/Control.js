import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
  // onSearch = (data) => {
  //   this.props.onSearchApp(data)
  // }
  // onSort = (sortBy, value) => {
  //   this.props.onSortApp(sortBy, value)
  // }
  render() {

    return (
        <div className="row mt-2 mb-2">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Search />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Sort />
            </div>
        </div>
    );
  }
}

export default Control;
