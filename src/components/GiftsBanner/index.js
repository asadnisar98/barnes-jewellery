
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

const GiftsBanner = () => (
  <StaticQuery
    query={graphql`
      query GiftsBanner {
  allContentfulProductTypePages {
    edges {
      node {
        giftsSubtext
        giftsBackground {
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
  <section style={{ background: `url(${node.giftsBackground.fixed.src})` }} className="listing-page-banner">
    <Container>
      <Row className="justify-content-md-center">
        <Col lg="8">
          <div className="listing-banner-text">
            <span>Gifts</span>
            <h2>
              {node.giftsSubtext}
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

export default GiftsBanner;
