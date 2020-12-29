
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

const ProductBanner = () => (
  <StaticQuery
    query={graphql`
      query ProductBanner {
    allContentfulProductTypePages {
      edges {
        node {
          allProductsSubtext
          allProductsBackground {
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
  <section style={{ background: `url(${node.allProductsBackground.fixed.src})` }} className="listing-page-banner">
    <Container>
      <Row className="justify-content-md-center">
        <Col lg="8">
          <div className="listing-banner-text">
            <span>All Products</span>
            <h2>
              {node.allProductsSubtext}
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

export default ProductBanner;
