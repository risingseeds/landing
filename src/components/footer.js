import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Menu, Row, Col, Icon } from 'antd'
import Logo from '../images/logo/rising-logo-sm.svg';
import './footer.scss'

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div className="container">
            <Row>
              <Col md={6}>
                <div className="menu-title">
                  <img src={Logo} />
                </div>
                <div className="description">
                  <p className="what-is-rising-seeds">A community-driven platform that curates crypto-related products, projects, and information. It's a place for crypto enthusiasts to share and geek out about the latest blockchain projects/products and ideas. </p>
                </div>
              </Col>

              <Col md={6}>
                <div className="contact-us">
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer

