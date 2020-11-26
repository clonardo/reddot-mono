import React from 'react';
import {
  Button,
  Container,
  Card,
  Alert,
  CardColumns,
  Spinner
} from 'react-bootstrap';
import styled from '@emotion/styled';
import { MainLayout } from '../components';

const Heading = styled.h1`
  font-size: 18px;
`;

export function Index() {
  return (
    <MainLayout>
      <Container>
        <Container className="mt-4 px-0 d-flex justify-content-between align-items-center">
          <Heading>Products</Heading>
        </Container>

        <Container className="px-0 mt-4 mb-5">
          <CardColumns>
            <Card>
              {/* <Card.Img variant="top" src={product.image} /> */}
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>Description</Card.Text>
                <Card.Text>{`Quantity: ${42}`}</Card.Text>
                <Container className="px-0 d-flex justify-content-between">
                  <Card.Text>Card Content</Card.Text>
                  <Card.Text>{`Status: Amazing`}</Card.Text>
                  <Button
                    variant="info"
                    size="lg"
                    className="mr-2"
                    onClick={() => {
                      return false;
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="lg"
                    onClick={() => {
                      return false;
                    }}
                  >
                    Delete
                  </Button>
                </Container>
              </Card.Body>

              <Card.Footer className="d-flex justify-content-end">
                {/* <Link href={`/product/${product.id}`}>
                        <a>View Details</a>
                      </Link> */}
                Footer
              </Card.Footer>
            </Card>
          </CardColumns>
        </Container>
      </Container>
    </MainLayout>
  );
}

export default Index;
