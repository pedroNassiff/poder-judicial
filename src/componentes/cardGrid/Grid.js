import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import Card from '../card'
import DummyDataGrid from 'dummyData/dummyDataGrid'

const ComponentName = () => {
    return (
    <Row justify="center">
      <Col span={8} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
        <Card 
          img={DummyDataGrid[0].img}
          title={DummyDataGrid[0].title}
          description={DummyDataGrid[0].description}
         />
      </Col>
      <Col span={8} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 3 }}>
        <Card
          img={DummyDataGrid[1].img}
          title={DummyDataGrid[1].title}
          description={DummyDataGrid[1].description}
        />
      </Col>
      <Col span={8} xs={{ order: 3 }} sm={{ order: 4 }} md={{ order: 2 }} lg={{ order: 1 }}>
        <Card
            img={DummyDataGrid[2].img}
            title={DummyDataGrid[2].title}
            description={DummyDataGrid[2].description}
          />
      </Col>
    </Row>
    );
};

export default ComponentName;