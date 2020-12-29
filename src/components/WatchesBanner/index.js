
import React, { useState } from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import Img from "gatsby-image"
import 'bootstrap/dist/css/bootstrap.css';
import {
	Container,
  Row,
  Col
  } from "reactstrap";
import AniLink from "gatsby-plugin-transition-link/AniLink"

const WatchesBanner = () => (
  <StaticQuery
    query={graphql`
      query WatchesBanner {
  allContentfulProductTypePages {
    edges {
      node {
        watchesSubtext
        watchesBackground {
          fixed(width:1440, height:550) {
            src
          }
        }
      }
    }
  }
}
    `}
render={data => (
  <div>
  	{data.allContentfulProductTypePages.edges.map(({ node }) => (
      <div>
  <section style={{ background: `url(${node.watchesBackground.fixed.src})` }} className="listing-page-banner">
    <Container>
      <Row className="justify-content-md-center">
        <Col lg="8">
          <div className="listing-banner-text">
            <span>Watches</span>
            <h2>
              {node.watchesSubtext}
            </h2>
          </div>
        </Col>
      </Row>
    </Container>

  </section>
  </div>
    ))}
    </div>
)}
  />
);

export default WatchesBanner;
