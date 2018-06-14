import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './Record.less';
import PlayersPanel from '../../components/PlayersPanel/PlayersPanel';
import VoteInput from '../../components/VoteInput/VoteInput';
import { Button } from 'antd';

class Record extends Component {
  constructor (props) {
    super(props)
    this.allocation = props.allocation
    this.record = props.record
    this.dispatch = props.dispatch
  }

  vote (status) {
    this.dispatch({
      type: 'record/changeVoteStatus',
      payload: status
    })
  }

  render () {
    return (
      <div className={styles.wrap}>
        <PlayersPanel status={this.record.voteStatus} amount={this.allocation.amount} configGod={this.allocation.configGod}></PlayersPanel>
        
        <div className={styles.voteBox}>
          <h5>竞选警长</h5>
          <VoteInput></VoteInput>
        </div>
        <div className={styles.voteBox}>
          <h5>第一天</h5>
          <VoteInput></VoteInput>
        </div>
        <div className={styles.buttonBox}> 
          <Button type="primary" onClick={() => this.vote(true)}>开始投票</Button>
          <Button  onClick={() => this.vote(false)}>结束投票</Button>
        </div>
      </div>
    );
  }
}

Record.propTypes = {
};

// 函数的返回值作为 props 传入组件
function mapStateToProps(state) {
  // {key : state.命名空间}
  return  {
    allocation: state.allocation,
    record: state.record
  };
}

export default connect(mapStateToProps)(Record);
