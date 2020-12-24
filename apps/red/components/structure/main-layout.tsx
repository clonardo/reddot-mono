import { TopNavMenu } from './top-nav-menu';
import { Layout } from 'antd';
const { Content, Sider } = Layout;
import Head from 'next/head';
// import { Global, css } from '@emotion/react';
import { AppFooter } from './footer';

export const MainLayout = ({ children }): JSX.Element => (
  <Layout className="main-layout-section">
    <Head>
      <title>CMS</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {/* <Global
      styles={css`
        html,
        body,
        #__next {
          height: 100%;
        }
      `}
    /> */}
    <TopNavMenu />
    <Layout hasSider={true} style={{ flex: '1 0 auto' }}>
      <Sider>left sidebar</Sider>
      <Content>{children}</Content>
    </Layout>
    <AppFooter />
  </Layout>
);
