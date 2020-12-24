import { Layout, Menu } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

/**
 * Top nav menu
 */
export const TopNavMenu = () => {
  return (
    <Header className="header antd_nav">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
  );
};
