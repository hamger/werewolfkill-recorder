import React, { Component } from 'react';
import './App.less';
import 'hg-parapicker/dist/picker.min.css';
import ParaPicker from 'hg-parapicker';
import Begin from '~/begin/begin.js';
import {observable, action, computed} from 'mobx';
import {observer} from 'mobx-react';

class Store {
  @observable config = [{
    title: "平民",
    done: true,
  }, {
    title: "狼人",
    done: true,
  }];

  @action changeState({index, title}){
    this.config[index].title = title
  }

  @computed get selectItem () {
    return  this.config.filter((item) => item.done)
  }
}

const store = new Store();
// var players = [1,2,3,4,5,6,7,8,9,10,11,12];

var data = [
    ['平民', '狼人', '预言家', '女巫', '猎人', '白痴'],
    ['存活', '死亡', '吃刀', '票出', '吃毒', '中枪']
];

@observer
class App extends Component {
  	constructor(props) {
	    super(props);
	    this.state = {
	    	players: [
    			{
    				identity: '平民',
    				state: '存活',
    			},{
    				identity: '平民2',
    				state: '存活',
    			},{
    				identity: '平民3',
    				state: '存活',
    			},{
    				identity: '平民4',
    				state: '存活',
    			},
    		]
	    };
  	}

  	componentDidMount () {
  		let len = this.state.players.length;
  		for (var i = 0; i < len; i++) {
	  		new ParaPicker({
	            inputId: `btn${i}`,
	            title: `${i}号玩家`,
	            data: data,
	            success: (arr) => {
	       //          this.setState({
				    //   date: new Date()
				    // });
	            }
	        });
  		}
  	}

  	render() {
    	return (
	      	<div className="App">
	      		<Begin store={store} />
	        	<ul className="number-box">  
	          		{
	          			this.state.players.map((val, index) => {
	          				return (
	          		 			<li id={`btn${index}`} key={index}>
	          		 				{val.identity} <br /> {val.state}
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
