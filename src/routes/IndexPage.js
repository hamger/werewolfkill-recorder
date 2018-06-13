import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h2 className={styles.title}>Hello<br/>Welcome to WR</h2>
      <ul className={styles.list}>
        <li><Link to="/allocation">设置配置</Link></li>
        <li><Link to="/record">记录本局</Link></li>
        <li><Link to="/about">关于</Link></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
