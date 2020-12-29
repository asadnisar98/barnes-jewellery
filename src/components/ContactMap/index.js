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


const ContactMap = () => (
  <StaticQuery
    query={graphql`
      query Map {
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
       <section className="map-iframe">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.145314915514!2d-0.25158848431471514!3d51.47384692097696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760e586225e615%3A0x270a6b72f1d1e0fb!2sBarnes%20Jewellery!5e0!3m2!1sen!2s!4v1608477853179!5m2!1sen!2s" width="100%" height="550" frameborder="0"allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
       </section>
     </div>

)}
  />
);

export default ContactMap;
