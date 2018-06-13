import React from 'react';
import { connect } from 'dva';
import styles from './Allocation.css';
import { Button, InputNumber, Checkbox, Row, Col } from 'antd';
import { routerRedux } from 'dva/router';


const Allocation = ({allocation, dispatch}) => {
  let { configBase, configGod } = allocation
  
  function save() {
    dispatch({
      type: 'allocation/save',
      payload: configBase, configGod
    });
    alert('配置成功');
    dispatch(routerRedux.push('/'));
  }
  function cancle() {
    dispatch(routerRedux.push('/'));
  }
  function changeBase(id, value) {
    configBase[id].number = value
  } 
  function changeGod(id, value) {
    configGod[id].select = value.target.checked
  } 
  return (
    <div className={styles.normal}>
      <Row>
        <Col span={8}>
          平民 <InputNumber min={1} max={10} defaultValue={configBase[0].number}  onChange={(value) => changeBase(0, value)} />
        </Col>
        <Col span={8}>
          狼人 <InputNumber min={1} max={10} defaultValue={configBase[1].number}  onChange={changeBase.bind(this, 1)} />
        </Col>
      </Row>
      <Row>
        {
          configGod.map(function (item) {
            return (
              <Col key={item.id} span={8}>
                <Checkbox defaultChecked={item.select} onChange={(value) => changeGod(item.id, value)}>{item.title}</Checkbox>
              </Col>
            )
          })
        }
      </Row>
      <Button type="primary" onClick={save}>保存</Button>
      <Button onClick={cancle}>返回</Button>
    </div>
  );
} 

Allocation.propTypes = {
};

// 函数的返回值作为 props 传入组件
function mapStateToProps(state) {
  // {key : state.命名空间}
  return  {allocation: state.allocation};
}

export default connect(mapStateToProps)(Allocation);
