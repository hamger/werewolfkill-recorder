import React, { Component } from 'react';
import {inject} from "mobx-react";

import './begin.less';
// var options = ['平民', '狼人', '预言家', '女巫', '猎人', '白痴'];

@inject("store") // 注入store
class Begin extends Component {
  	constructor (props) {
	    super(props);
      this.store = this.props.store;  //通过props来导入访问已注入的store
      this.select = this.store.select;
  	}

    select (index) {
      this.select(index);
    }

  	render() {
    	return (
      	<div className="begin">
          <h3>请选择本局配置</h3> 
        	<div className="options-box">  
          		{
          			this.store.config.map((val, index) => {
          				return (
                    <span onClick={this.select.bind(this, index)} key={index}>
                    <i style={{backgroundColor: val.select ? '#365dea' : '#FFF'}}></i>
                    {val.title}</span>
        					)
          			})
        		 	}
        	</div>
      	</div>
    	);
  	}
}

export default Begin;
