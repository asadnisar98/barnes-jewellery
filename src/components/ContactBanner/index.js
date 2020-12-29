import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import Img from "gatsby-image"
import 'bootstrap/dist/css/bootstrap.css';
import {
	Container,
  Row,
  Col
  } from "reactstrap";
import Call from '../../images/call.png';
import Location from '../../images/location.png';
import Clock from '../../images/clock.png';
import Mail from '../../images/mail.png';
import AniLink from "gatsby-plugin-transition-link/AniLink"

const ContactBanner = () => (
  <StaticQuery
    query={graphql`
      query Banner {
  allContentfulContactPage {
    edges {
      node {
        bannerSubtext
				contactbanner {
				 fixed(height:900, width:1900) {
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
		{data.allContentfulContactPage.edges.map(({ node }) => (
  <section style={{ background: `url(${node.contactbanner.fixed.src})` }}  className="contact-banner">
    <Container>
      <Row className="justify-content-md-center">
        <Col lg="8">
          <div className="services-text">
            <span>Contact Us</span>
            <h2>{node.bannerSubtext}</h2>
          </div>
        </Col>

      </Row>
    </Container>
  </section>
			))}
  </div>
)}
  />
);

export default ContactBanner;
