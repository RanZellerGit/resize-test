import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Table } from 'antd';
import uuid from './uuid';
import tabSize from './resize';
import $ from 'jquery';

class ResizeTable extends Component {
  componentDidMount() {
    let me = $(ReactDOM.findDOMNode(this));
    let table = me.find('table');
    let id = uuid();
    table.attr('id', id);
    tabSize(id);
    this.setColumnsWidth(id);
  }

  setColumnsWidth = (id) => {
    let me = $(ReactDOM.findDOMNode(this));
    console.log(me);
    let table = me.find(`#${id}`);
    let colgroup = table.find('colgroup');
    let cols = colgroup.find('col');
    $(cols).each(function (index, el) {
      this.style.width = 'auto';
    });
  };

  render() {
    return <Table {...this.props} />;
  }
}

export default ResizeTable;
