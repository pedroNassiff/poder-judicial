import React from "react";
import 'antd/dist/antd.css';
import './Card.scss';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

const CardComponent = (props) => {
  
  const {img, title, description} = props
  return (
    <Card
      style={{ width: '99%' }}
      cover={
        <img
          alt="example"
          src={require('../../assets/dummyImg/'+img)} 
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title={title}
        description={description}
      />
    </Card>
  );
};

export default CardComponent;
