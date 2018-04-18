import React, { Component } from 'react';
// import '#/css/index.less';
import './App.less';
import 'hg-parapicker/dist/picker.min.css';
import ParaPicker from 'hg-parapicker';
// import 'antd/dist/antd.min.css';
// import { Button } from 'antd';
// import Begin from '~/begin/begin.js';
// import {observable, action, computed} from 'mobx';
// import {observer} from 'mobx-react';

// class Store {
//   @observable config;

//   constructor () {
//     this.config = [{
//       title: "平民",
//       number: 4,
//       select: true,
//     }, {
//       title: "狼人",
//       number: 4,
//       select: true,
//     }, {
//       title: "预言家",
//       select: true,
//     }, {
//       title: "女巫",
//       select: true,
//     }, {
//       title: "猎人",
//       select: true,
//     }, {
//       title: "白痴",
//       select: true,
//     }, {
//       title: "守卫",
//       select: false,
//     }];
//   }

//   @action select = (index) => {
//     this.config[index].select = !this.config[index].select
//     console.log(this.config[index].select);
//   }

//   @computed get selectItem () {
//     return  this.config.filter((item) => item.select)
//   }
// }

// const store = new Store();

const selectItems = [
    ['平民', '狼人', '预言家', '女巫', '猎人', '白痴'],
    ['存活', '死亡', '吃刀', '票出', '吃毒', '中枪', '自爆']
];

// @observer
class App extends Component {
  	constructor(props) {
	    super(props);
	    this.state = {
	    	config: [
          {
            title: "平民",
            number: 4,
            select: true,
          }, {
            title: "狼人",
            number: 4,
            select: true,
          }, {
            title: "预言家",
            select: true,
          }, {
            title: "女巫",
            select: true,
          }, {
            title: "猎人",
            select: true,
          }, {
            title: "白痴",
            select: true,
          }, {
            title: "守卫",
            select: false,
          }, {
            title: "白狼王",
            select: false,
          }
        ],
        showConfig: true,
        initConfig: []
	    };
  	}

  	componentDidMount () {
  		let len = this.state.config.length;
  		for (var i = 0; i < len; i++) {
	  		new ParaPicker({
	            inputId: `btn${i}`,
	            title: `${i+1}号玩家`,
	            data: selectItems,
	            success: (arr) => {
	       //          this.setState({
				    //   date: new Date()
				    // });
	            }
	        });
  		}
  	}

    select (index) {
      let configCopy = JSON.parse(JSON.stringify(this.state.config));
      configCopy[index].select = !configCopy[index].select;
      this.setState({config: configCopy});
    }

    add (index) {
      let configCopy = JSON.parse(JSON.stringify(this.state.config));
      configCopy[index].number++;
      this.setState({config: configCopy});
    }

    sub (index) {
      let configCopy = JSON.parse(JSON.stringify(this.state.config));
      let number = configCopy[index].number--;
      if(number <= 2) configCopy[index].number = 2;
      else configCopy.number = number;
      this.setState({config: configCopy});
    }
    
    initConfig () {
      let initConfig = [];
      this.state.config.forEach((val) => {
        if (val.number || val.select) initConfig.push(val)
      })
      this.setState({initConfig: initConfig, showConfig: false});
    }

    cancleConfig () {
      this.setState({showConfig: false});
    }
    
  	render() {
    	return (
	      	<div className="App">
            <div className="begin"
              style={{display: this.state.showConfig ? 'block' : 'none'}}>
              <h3>请选择本局配置</h3>
              <div className="options-box">  
                  {
                    this.state.config.map((val, index) => {
                      return (
                        val.number ?
                        <p style={{marginRight: '32px'}} key={index}>
                          {val.title}-{val.number}
                          <em onClick={this.add.bind(this, index)} className="solid-arrow-up"></em>
                          <em onClick={this.sub.bind(this, index)} className="solid-arrow-down"></em>
                        </p>
                        : <p onClick={this.select.bind(this, index)} key={index}>
                        <i style={{backgroundColor: val.select ? '#365dea' : '#FFF'}}></i>
                        {val.title}</p>
                      )
                    })
                  }
              </div>
              <div className="options-btn">
                <button onClick={this.initConfig.bind(this)}>确认</button>
                <button onClick={this.cancleConfig.bind(this)}>取消</button>
              </div>
            </div>
            <div className="show-config">
              {this.state.showConfig ? '隐藏配置' : '显示配置'}
            </div>
	      		{/*<Begin store={store} />*/}
	        	<ul className="number-box">  
	          		{
	          			this.state.config.map((val, index) => {
	          				return (
	          		 			<li id={`btn${index}`} key={index}>
	          		 				{`${index + 1}号`}
          		 				</li>
          					)
	          			})
          		 	}  
	        	</ul>
	      	</div>
    	);
  	}
}

export default App;
