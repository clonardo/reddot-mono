import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import styled from '@emotion/styled';
import { format } from 'date-fns';

const StyledFooter = styled(Layout)`
  flex-shrink: 0;
`;

export const AppFooter = () => {
  return (
    <Footer className="bg-dark text-white px-0">
      {`©${format(new Date(), 'yyyy')}`}
    </Footer>
  );
};
