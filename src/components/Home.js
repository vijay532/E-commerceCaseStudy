import React from 'react'
import { Button, Row, Carousel, Container } from 'react-bootstrap';

import BannerData from '../server/banners/index.get.json';
import categoryData from '../server/categories/index.get.json';
import '../css/Home.css'

export default function Home() {
  return (
      <Container>
      <Carousel>
      {
        BannerData.length > 0 && BannerData.map((data,index)=>(
          <Carousel.Item key={index}>
            <img
              className="img-fluid img-thumbnail"
              src={data.bannerImageUrl}
              alt={data.bannerImageAlt}
            />
          </Carousel.Item>      
        ))
      }
      </Carousel>
      <div>
        {
          categoryData.length > 0 && categoryData.map((data, index)=>(
              <Row className={`mt-2 border border-light category-card ${index%2 == 0? ' even' : 'odd'}`}>
                {
                  data.imageUrl != '' && typeof data.imageUrl != 'undefined' && (
                  <>
                    <div className="col-md-8 col-sm-8">
                      <img src={data.imageUrl} style={{ width: '50%', margin:'2% 10%' }} />
                    </div>
                    <div className="col-md-4 col-sm-4 mt-2 category-detail">
                      <b>{data.name}</b>
                      <p>{data.description}</p>
                      <Button variant="danger">Explore {data.name}</Button>
                    </div>
                  </>
                )}
                                
              </Row>
            
            ))
        }
      </div>
      </Container>
  )
}
