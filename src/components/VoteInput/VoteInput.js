import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './VoteInput.less';
import { Input, Row, Col } from 'antd';

class VoteInput extends Component {
  constructor (props) {
    super(props)
    this.state = props.allocation
  }

  componentDidMount () {
  }

  render () {
    return (
      <Row className={styles.voteRow}>
        <Col span={11}><Input /></Col>
        <Col span={2}><span> 投 </span></Col>
        <Col span={11}><Input /></Col>
      </Row>
    );
  }
} 

VoteInput.propTypes = {
};

function mapStateToProps(state) {
  return  {allocation: state.allocation};
}

export default connect(mapStateToProps)(VoteInput);
