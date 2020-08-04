import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import Card from '../card'

const ComponentName = () => {
    return (
    <Row justify="center">
      <Col span={8} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
        <Card/>
      </Col>
        <Col span={8} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 3 }}>
      <Card/>
        </Col>
      <Col span={8} xs={{ order: 3 }} sm={{ order: 4 }} md={{ order: 2 }} lg={{ order: 1 }}>
        <Card/>
      </Col>
    </Row>
    );
};

export default ComponentName;