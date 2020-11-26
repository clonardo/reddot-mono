import { Container } from 'react-bootstrap';
import styled from '@emotion/styled';
import { format } from 'date-fns';

const Footer = styled(Container)`
  flex-shrink: 0;
`;

export const AppFooter = () => {
  return (
    <Footer className="bg-dark text-white px-0" fluid as="footer">
      <Container className="py-3 d-flex justify-content-center">
        {`©${format(new Date(), 'yyyy')}`}
      </Container>
    </Footer>
  );
};
