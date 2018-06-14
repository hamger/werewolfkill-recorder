import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './PlayersPanel.less';
import 'hg-parapicker/dist/picker.min.css';
import ParaPicker from 'hg-parapicker';
import { Affix } from 'antd';

const selectItems = [
  ['未知', '平民', '狼人'],
  ['存活', '死亡', '警长']
];

class PlayersPanel extends Component {
  constructor (props) {
    super(props)
    const players = []
    for (let i=0; i < props.amount; i++) {
      players.push({id: i, identity: '未知', status: '存活'})
    }
    props.configGod.forEach(item => {
      selectItems[0].push(item.title)
    });
    // props 是只读的，不能作为Object.assign的第一个参数
    this.state = Object.assign({
      players: players
    },  props)
  }

  componentDidMount () {
    for (let i = 0; i < this.state.amount; i++) {
      new ParaPicker({
        inputId: `player-${i}`,
        title: `${i+1}号玩家`,
        data: selectItems,
        success: (arr) => {
          console.log(this.props);
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
      <Affix>
        <div className={styles.playersBox}>
        {
          this.state.players.map(item => {
            return <div key={item.id} id={`player-${item.id}`} className={styles.player}
            style={{
              backgroundColor: item.status === '存活' ? '#5bb1fb' :
              (item.status === '死亡' ? '#bebebe' : '#f36f6f')
            }}>
            {item.id + 1 + '号'}<br/>{item.identity}
            </div>
          })
        }
        </div>
      </Affix>
    );
  }
}

// export default PlayersPanel;

PlayersPanel.propTypes = {
};

// 函数的返回值作为 props 传入组件
function mapStateToProps(state) {
  // {key : state.命名空间}
  return  {
    record: state.record
  };
}

export default connect(mapStateToProps)(PlayersPanel);
