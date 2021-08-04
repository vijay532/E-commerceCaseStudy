import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { Link ,useHistory } from "react-router-dom";

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../StateProvider';

export default function Header() {
  
  const history = useHistory();
  const [{basket}, dispatch] = useStateValue();

  return (
    <Container className="sticky-top bg-light"> 
      <Row>
        <Col>
          <Link to='/'>
            <img src='/static/images/logo.png'/>
          </Link>
        </Col>
        <Col>
          <Row>
            <Col onClick = { ()=> history.push('/') }>Home</Col>
            <Col onClick = { () => history.push('/products') }>products</Col>
          </Row>
        </Col>
        <Col>
          <Row md={2}>
            <Col onClick = { () => history.push('/login') }>signIn</Col>
            <Col onClick = { () => history.push('/register') }>register</Col>
            <Col className="d-inline-flex p-2">
              <ShoppingCartIcon onClick = { () => history.push('/cartListing') }/>
              <h6>{basket.length}</h6>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
