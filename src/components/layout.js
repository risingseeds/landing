import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Layout } from 'antd'
import { StaticQuery, graphql } from 'gatsby'
import Navbar from './navbar'
import './layout.scss'

const { Header, Content } = Layout;

const App = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Layout>
          <Header className="main-header">
            <Navbar />
          </Header>
          <Content>
            <Layout>
              <Content className="main-pages">
                {children} 
              </Content>
            </Layout>
          </Content>
        </Layout>
      </div>
    )}
  />
)

App.propTypes = {
  children: PropTypes.node.isRequired,
}

export default App
