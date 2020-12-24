import React from 'react';
import dynamic from 'next/dynamic';
// import styled from '@emotion/styled';
import { MainLayout } from '../components';
import { Row, Col, PageHeader } from 'antd';
// import '@ant-design/pro-card/dist/card.css';
// import ProCard from '@ant-design/pro-card/dist/card';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from '@ant-design/icons';

// const ProCard = dynamic(() => import('@ant-design/pro-card'), {
//   ssr: false
// });

export function Index() {
  return (
    <MainLayout>
      <>
        <PageHeader
          title="Products"
          className="mt-4 px-0 d-flex justify-content-between align-items-center"
        />

        <Row className="px-0 mt-4 mb-5">
          <Col>Nothing to see here</Col>
          {/* <Col>
            <ProCard
              title="Actions 1"
              // style={{ width: 300 }}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />
              ]}
            >
              <div> Card content!? </div>
            </ProCard>
          </Col> */}
          {/* <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <ProCard
              title="Actions 1"
              // style={{ width: 300 }}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />
              ]}
            >
              <div> Card content!? </div>
            </ProCard>
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <ProCard
              title="Actions 2"
              // style={{ width: 300 }}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />
              ]}
            >
              <div> Card content!? </div>
            </ProCard>
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <ProCard
              title="Actions 3"
              // style={{ width: 300 }}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />
              ]}
            >
              <div> Card content!? </div>
            </ProCard>
          </Col> */}
        </Row>
      </>
    </MainLayout>
  );
}

export default Index;
