import React from 'react'
import { Link } from 'gatsby'
import { Layout as AntLayout, Button } from 'antd'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <AntLayout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby</p>
      <p>Now go build something great.</p>
      <Button type="primary">Primary</Button>
      <Link to="/page-2/">Go to page 2</Link>
    </AntLayout>
  </Layout>
)

export default IndexPage
