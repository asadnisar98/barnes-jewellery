
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

const CufflinksBanner = () => (
  <StaticQuery
    query={graphql`
      query CufflinksBanner {
  allContentfulProductTypePages {
    edges {
      node {
        cufflinksSubtext
        cufflinksBackground {
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
  <section style={{ background: `url(${node.cufflinksBackground.fixed.src})` }} className="listing-page-banner">
    <Container>
      <Row className="justify-content-md-center">
        <Col lg="8">
          <div className="listing-banner-text">
            <span>Cufflinks</span>
            <h2>
              {node.cufflinksSubtext}
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

export default CufflinksBanner;
