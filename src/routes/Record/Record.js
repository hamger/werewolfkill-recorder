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
  endsVote (status, id) {
    this.dispatch({
      type: 'record/changeVoteStatus',
      payload: status, id
    })
  }
  vote (status, id) {
    if(status === 1) {
      this.dispatch({
        type: 'record/markVote',
        payload: id, status
      })
      this.dispatch({
        type: 'record/startVote',
        payload: id
      })
    } else if (status === 2) {
      this.dispatch({
        type: 'record/markVote',
        payload: id
      })
      this.dispatch({
        type: 'record/startVote',
        payload: id
      })
    } else {
      this.dispatch({
        type: 'record/markVote',
        payload: id
      })
    }
  }
  delVote (i, j) {
    this.dispatch({
      type: 'record/delVote',
      payload: i, j
    })
  }
  addNote () {
    this.dispatch({
      type: 'record/addNote'
    })
  }

  render () {
    return (
      <div className={styles.wrap}>
        <PlayersPanel configGod={this.allocation.configGod}></PlayersPanel>
        {
          this.props.record.notes.map((item, idx) => {
            return (
              <div key={item.id}  className={styles.voteBox}>
                <div className={styles.head}>
                  <h5>{item.title}</h5>
                    <div className={item.voteStatus === 0 ? styles.buttonBox : styles.buttonBox2}>
                    {
                      item.voteStatus === 0 ? (
                        <Button onClick={() => this.endsVote(1, item.id)}>投票</Button>
                      ) : (
                        [<Button onClick={() => this.vote(2, item.id)}>下一组</Button>,
                          <Button onClick={() => this.vote(1, item.id)}>弃票</Button>,
                        <Button onClick={() => {
                          this.vote(0, item.id)
                          this.endsVote(0, item.id)
                        }}>结束</Button>]
                      )
                    }
                  </div>
                </div>
                <div className={styles.content}>
                  {
                    item.vote.map((item2, index) => {
                      return (
                        <div className={styles.listItem}>
                          <VoteInput key={index} voter={item2.voter} votee={item2.votee}></VoteInput>
                          <span key={index} className={styles.delBtn} onClick={() => this.delVote(idx, index)}>x</span>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
        <Button className={styles.addNote} size='small' onClick={() => this.addNote()}>下一轮</Button>
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
