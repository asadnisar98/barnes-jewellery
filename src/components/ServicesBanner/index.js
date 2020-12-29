
import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import Img from "gatsby-image"
import 'bootstrap/dist/css/bootstrap.css';
import {
	Container,
  Row,
  Col
  } from "reactstrap";
import AniLink from "gatsby-plugin-transition-link/AniLink"

const ServicesBanner = () => (
  <StaticQuery
    query={graphql`
			query ServicesBanner {
	  allContentfulServicesPage {
	    edges {
	      node {
	        bannerBackground {
	          fixed(width:1930, height:550) {
	            src
	          }
	        }
					 subtextbanner
	        firstServicesSubtext
	        firstservicesheading
	        fourthServicesHeading
	        fourthServicesSubtext
	        secondServicesHeading
	        secondServicesSubtext
	        thirdServicesHeading
	        thirdServicesSubtext
	        firstServicesBackground {
	          fixed(width:400, height:300) {
	            src
	          }
	        }
					thirdServicesBackground {
					 fixed(width:400, height:300) {
						 src
					 }
				 }
	        fourthServicesBackground {
	          fixed(width:400, height:300) {
	            src
	          }
	        }
	        secondServicesBackground {
	          fixed(width:400, height:300) {
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
	{data.allContentfulServicesPage.edges.map(({ node }) => (
	<div>
<section style={{ background: `url(${node.bannerBackground.fixed.src})` }} className="services-banner">
  <Container>
    <Row className="justify-content-md-center">
      <Col lg="8">
        <div className="services-text">
          <span>Services</span>
          <h2>{node.subtextbanner}</h2>
        </div>
      </Col>
    </Row>
  </Container>
</section>
<section className="services-boxs">
  <Container>

      <div>
      <Row className="justify-content-md-center">
      <Col lg="6" className="mb-4">
        <div style={{ background: `url(${node.firstServicesBackground.fixed.src})` }} className="collection-box">
          <div className="box-content">
          <h2>{node.firstservicesheading}</h2>
          <p>{node.firstServicesSubtext}</p>
          </div>
        </div>
      </Col>
      <Col lg="6" className="mb-4">
        <div style={{ background: `url(${node.secondServicesBackground.fixed.src})` }} className="collection-box">
          <div className="box-content">
          <h2>{node.secondServicesHeading}</h2>
          <p>{node.secondServicesSubtext}</p>
          </div>
        </div>
      </Col>

      <Col lg="6">
        <div style={{ background: `url(${node.thirdServicesBackground.fixed.src})` }} className="collection-box">
          <div className="box-content">
          <h2>{node.thirdServicesHeading}</h2>
          <p>{node.thirdServicesSubtext}</p>
          </div>
        </div>
      </Col>
      <Col lg="6">
        <div style={{ background: `url(${node.fourthServicesBackground.fixed.src})` }} className="collection-box">
          <div className="box-content">
          <h2>{node.fourthServicesHeading}</h2>
          <p>{node.fourthServicesSubtext}</p>

          </div>
        </div>
      </Col>
      <Col lg="12">
        <div className="services-divider"></div>
      </Col>
      </Row>
      </div>
    </Container>
</section>

</div>
))}
</div>
)}
  />
);

export default ServicesBanner;
