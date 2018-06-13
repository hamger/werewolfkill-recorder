import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './Record.css';
import 'hg-parapicker/dist/picker.min.css';
import ParaPicker from 'hg-parapicker';

const selectItems = [
  ['未知', '平民', '狼人'],
  ['存活', '死亡']
];

class Record extends Component {
  constructor (props) {
    super(props)
    this.state = props.allocation
    let players = []
    for (let i=0; i < this.state.amount; i++) {
      players.push({id: i, identity: '未知', status: '存活'})
    }
    this.state.players = players
    this.state.configGod.forEach(item => {
      selectItems[0].push(item.title)
    });
  }

  componentDidMount () {
    for (let i = 0; i < this.state.amount; i++) {
      new ParaPicker({
        inputId: `player-${i}`,
        title: `${i+1}号玩家`,
        data: selectItems,
        success: (arr) => {
          let tempArr = this.state.players
          tempArr[i].identity = arr[0]
          tempArr[i].status = arr[1]
          this.setState({players: tempArr})
        }
      });
    }
  }

  render () {
    return (
      <div className={styles.normal}>
        {
          this.state.players.map(item => {
            return <div key={item.id} id={`player-${item.id}`} className={styles.player}
            style={{backgroundColor: item.status === '存活' ? '#5bb1fb' : '#bebebe'}}>
              {item.id + 1 + '号'}<br/>{item.identity}
            </div>
          })
        }
      </div>
    );
  }
}

Record.propTypes = {
};

// 函数的返回值作为 props 传入组件
function mapStateToProps(state) {
  // {key : state.命名空间}
  return  {allocation: state.allocation};
}

export default connect(mapStateToProps)(Record);
