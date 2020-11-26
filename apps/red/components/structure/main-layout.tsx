import { Navbar, Container } from 'react-bootstrap';
import Head from 'next/head';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';
import { AppFooter } from './footer';

export const MainLayout = ({ children }): JSX.Element => (
  <div className="d-flex flex-column h-100">
    <Head>
      <title>CMS</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Global
      styles={css`
        html,
        body,
        #__next {
          height: 100%;
        }
      `}
    />

    <Main>
      <Header />
      {children}
    </Main>
    <AppFooter />
  </div>
);

const Main = styled.main`
  flex: 1 0 auto;
`;

const Header = () => (
  <Container className="bg-light px-0" fluid>
    <Container>
      <Navbar bg="transparent" expand="lg" className="px-0">
        <Navbar.Brand href="/">CMS</Navbar.Brand>
      </Navbar>
    </Container>
  </Container>
);
