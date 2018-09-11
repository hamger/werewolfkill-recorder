import styles from './About.less';
import { Link } from 'dva/router';

const About = () => {
  
  return (
    <div className={styles.normal}>
      <h2>WR is a short name of wereworfkill-recorder.</h2>
      <div>Author: <b>Hanger</b></div>
      <div><a href="https://github.com/hamger/werewolfkill-recorder" target="brank">Github</a></div>
      <div><Link to="/">返回</Link></div>
    </div>
  );
} 

About.propTypes = {
};

export default About;
