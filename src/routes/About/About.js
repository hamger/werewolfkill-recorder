import styles from './About.less';
import { Link } from 'dva/router';

const About = () => {
  
  return (
    <div className={styles.normal}>
      <h2 className={styles.title}>WR is a short name of wereworfkill-recorder.</h2>
      <div>Author: <b>Hanger</b></div>
      <div>你可以到这里提建议：<a href="https://github.com/hamger/werewolfkill-recorder/issues" target="brank">Github</a></div>
      <div><Link to="/">返回</Link></div>
    </div>
  );
} 

About.propTypes = {
};

export default About;
