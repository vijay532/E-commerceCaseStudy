import React , { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import Message from './Message';

import productData from '../server/products/index.get.json';
import bannerData from '../server/products/index.get.json';

import { useStateValue } from '../StateProvider';
import { MessageSharp } from '@material-ui/icons';

export default function Products() {

  const [{basket},dispatch]=useStateValue();

  function addToCart(name,image,price){
    // dispatch the item into the data layer
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        name:name,
        image:image,
        price:price
      }
    })
    return <Message/>
  }
  
  return (
    <>
      <Row>
        <Col className="col-md-4" style={{backgroundColor : '#e7e7e7', marginLeft:'1%'}}>
          <Row>Fruits & Vegetables</Row>
          <hr></hr>
          <Row>Bakes Cakes and Dairy</Row>
          <hr></hr>
          <Row>Beverages</Row>
          <hr></hr>
          <Row>Beauty and Hygiene</Row>
          <hr></hr>
          <Row>Baby Care</Row>
        </Col>
        <Col className="col-xs-8">
          <Row>
            {productData.length > 0 && productData.map((data)=>(
              <Col className="col-sm-3 d-flex-mb-2" style = {{ border: '1px solid' }}>
                <h6 className="mb-2">{data.name}</h6>
                <img className="mb-2" src={data.imageURL} style = {{ width : '100%'}}/>
                <Row className="mb-2" style={{backgroundColor : '#e7e7e7'}}>
                  <small>{data.description}</small>
                </Row>
                <Row className="pb-2 pt-2">
                  <Col>
                    <b>MRP Rs.  {data.price}</b></Col>
                  <Col>
                    <Button className="danger" onClick ={ () => addToCart(data.name, data.imageURL, data.price) }>
                                               Buy Now </Button>
                  </Col>
                </Row>
              </Col>
            ))
            }
          </Row>
        </Col>  
      </Row>
    </>
  )
}
