import React, { Component } from 'react';
import './begin.less';
// var options = ['平民', '狼人', '预言家', '女巫', '猎人', '白痴'];

class Begin extends Component {
  	constructor(props) {
	    super(props);
	    this.state = {};
  	}

  	render() {
    	return (
      	<div className="begin">
          <h3>请选择本局配置</h3> 
        	<div className="options-box">  
          		{
          			this.props.store.config.map((val, index) => {
          				return (
                    <span key={index}>{val.title}</span>
        					)
          			})
        		 	}
        	</div>
      	</div>
    	);
  	}
}

export default Begin;
