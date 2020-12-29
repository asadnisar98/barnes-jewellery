



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



const ServicesForm = () => (
  <StaticQuery
    query={graphql`
      query ServicesForm {
        allContentfulHomepage {
    edges {
      node {
        firstCollectionImage {
          fluid {
            src
          }
        }
        firstCollectionLink
        firstCollectionSubtext
        firstCollectionTitle
        secondCollectionBtnText
        secondCollectionImage {
          fluid {
            src
          }
        }
        secondCollectionLink
        secondCollectionSubtext
        secondCollectionTitle
        sectionSubText
        thirdCollectionBtnText
        thirdCollectionImage {
          fluid {
            src
          }
        }
        thirdCollectionLink
        thirdCollectionSubtext
        thirdCollectionTitle
        firstCollectionBtnText
      }
    }
  }
      }
        `}

render={data => (

	<div>
	  <section className="service-form">
	    <Container>
	    <Row>
	    <Col lg="12">
	      <h2>Submit Enquiry</h2>
	    </Col>
	    </Row>
	        <form name="services" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
	        <Row>
	          <Col lg="4">
								 <input type="hidden" name="bot-field" />
	<input type="hidden" name="form-name" value="services" />
	            <input type="text" name="name" placeholder="Your name" />
	          </Col>
	          <Col lg="4">
	            <input type="text" name="phone" placeholder="Your Telephone Number" />
	          </Col>
	          <Col lg="4">
	            <input type="email" name="email" placeholder="Your Email" />
	          </Col>
	          <Col lg="4">
	            <input type="text" name="servicerequired" placeholder="Service Required" />
	          </Col>
	          <Col lg="8">
	            <textarea name="message" placeholder="Your message"></textarea>
	          </Col>
	          <Col lg="12">
							  <button type="submit" className="form-button" href="#">Send Message</button>
	          </Col>
	        </Row>
	        </form>
	    </Container>
	  </section>
	</div>
)}
  />
);

export default ServicesForm;
