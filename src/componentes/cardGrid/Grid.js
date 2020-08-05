import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import Card from '../card'
import DummyDataGrid from 'dummyData/dummyDataGrid'

const ComponentName = () => {
  return (
    <Row justify="center">
      <Col span={8} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
        <img style={{cursor: 'pointer'}}
          width="98%"
          alt="example"
          src={require('../../' + DummyDataGrid[0].img)}
        />
      </Col>
      <Col span={8} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 3 }}>
        <img style={{cursor: 'pointer'}}
          width="98%"
          alt="example"
          src={require('../../' + DummyDataGrid[1].img)}
        />
      </Col>
      <Col span={8} xs={{ order: 3 }} sm={{ order: 4 }} md={{ order: 2 }} lg={{ order: 1 }}>
        <img style={{cursor: 'pointer'}}
          width="98%"
          alt="example"
          src={require('../../' + DummyDataGrid[2].img)}
        />
      </Col>
    </Row>
  );
};

export default ComponentName;