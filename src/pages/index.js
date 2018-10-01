import React from 'react'
import { Link } from 'gatsby'
import { Layout, Button, Row, Col } from 'antd'
import Wrapper from '../components/layout'
import heroArtwork from '../images/heroArtwork.svg'
import whyArtwork from '../images/whyArtwork.svg'
import brandElement from '../images/brandElement.svg'
import './index.scss';

const IndexPage = () => (
  <Wrapper>
    <Layout>
      <section className="container hero">
        <Row type="flex" justify="space-around" align="middle">
          <Col md={12}>
            <h1>Discover Awesome projects in the Decentralized Universe</h1>
            <h3>By community, For the community.</h3>
            <div className="subscription-form">
              <Button type="primary" size="large">Primary</Button>
            </div>
          </Col>
          <Col md={12}>
            <img src={heroArtwork} />
          </Col>
        </Row>
      </section>
      <section className="container our-why">
        <Row type="flex" justify="space-around" align="top">
          <Col md={12}>
            <img src={whyArtwork} />
          </Col>
          <Col md={12}>
            <h1>Why do we need this?</h1>
            <p className="content">Realizing the potential application of blockchain and similar technologies can empower people around the world. We made it our mission to help people navigate through the decentralized web to discover legitimate projects that will shape the world for the better.</p>
            <div className="subscription-form">
              <Button type="primary" size="large">Primary</Button>
            </div>
          </Col>
        </Row>
      </section>
      <section className="container how-do-we-plan">
        <Row type="flex" justify="start" align="middle">
          <Col md={12}>
            <h1>How do we plan to execute?</h1>
            <p className="content">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
            
            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
          </Col>
        </Row>
      </section>
      <section className="container join-us">
        <Row type="flex" justify="space-around" align="top">
          <Col md={12}>
            <h1>Join Us</h1>
            <p className="content">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
            
            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>

            <div className="subscription-form">
              <Button type="primary" size="large">Primary</Button>
            </div>
          </Col>
          <Col md={12} className="brand-element">
            <img src={brandElement} />
          </Col>
        </Row>
      </section>
    </Layout>
  </Wrapper>
)

export default IndexPage
