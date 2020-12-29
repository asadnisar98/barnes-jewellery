
import React, { useState } from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import 'bootstrap/dist/css/bootstrap.css';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Container, Row, Col } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';


import * as actions from '../../redux/actions/sortActions';
import * as actionTypes from '../../redux/actions/constants/actionTypes';

const CollectionHome = () => {
  const { products } = useSelector((state) => state.sort);
  const dispatch = useDispatch();
  const [firstFetch, setFirstFetch] = useState(false);

  return (
    <StaticQuery
      query={graphql`
        query ProductListing {
          allShopifyProduct {
            edges {
              node {
                description
                handle
                title
                shopifyId
                variants {
                  title
                  image {
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 300, maxHeight: 320) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                  price
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        console.log('data', data.allShopifyProduct, products),
        !firstFetch
          ? (dispatch(actions.allProducts(data)), setFirstFetch(true))
          : null,
        (
          <div>
        
            <section className="listing-sec">
              <Container>
                <div className="product-filters">
                  <Row className="justify-content-md-center">
                    <Col lg="8"></Col>
                    <Col lg="2" xs="6">
                      <select className="custom-select my-select"
                        name="sort"
                        id="sort"
                        onChange={(event) =>
                          dispatch(actions.sortProducts(event.target.value, data))
                        }
                      >
                        <option value="">Sort By:</option>
                        <option value={actionTypes.Alphabetically_A_to_Z}>
                          A to Z
                        </option>
                        <option value={actionTypes.Alphabetically_Z_to_A}>
                          Z to A
                        </option>
                      </select>
                    </Col>
                    <Col lg="2" xs="6">
                      <select className="custom-select my-select"
                        name="sort"
                        id="sort"
                        onChange={(event) =>
                          dispatch(actions.sortProducts(event.target.value, data))
                        }
                      >
                        <option value="">By Price:</option>
                        <option value={actionTypes.Price_High_To_Low}>
                          High To Low
                        </option>
                        <option value={actionTypes.Price_Low_To_High}>
                          Low To High
                        </option>
                      </select>
                    </Col>
                  </Row>
                </div>
                <Row>
                  {products.allShopifyProduct?.edges.map(({ node }) => (
                    <Col lg="3" className="mb-4">
                      {node.variants.map((variant) => (
                        <div>
                          <div className="product-listing">
                            <div className="product-listing-img">
                              <AniLink
                                paintDrip
                                to={`/product/${node.handle}/`}
                                hex="#381928"
                              >
                                <Img
                                  fluid={
                                    variant.image.localFile.childImageSharp
                                      .fluid
                                  }
                                  alt="collection"
                                />
                              </AniLink>
                              <div className="product-listing-hover">
                                <p className="limitations">
                                  {node.description}
                                </p>
                                <AniLink
                                  paintDrip
                                  to={`/product/${node.handle}/`}
                                  hex="#381928"
                                >
                                  <h2>View More</h2>
                                </AniLink>
                              </div>
                            </div>
                            <AniLink
                              paintDrip
                              to={`/product/${node.handle}/`}
                              hex="#381928"
                            >
                              <h2>{node.title} </h2>
                            </AniLink>
                            <span>{variant.price} </span>
                          </div>
                        </div>
                      ))}
                    </Col>
                  ))}
                </Row>
              </Container>
            </section>
          </div>
        )
      )}
    />
  );
};

export default CollectionHome;
