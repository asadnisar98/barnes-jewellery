import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Highlight, connectStateResults } from 'react-instantsearch-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';


const PostPreview = ({ hit }) => (


<div>
    {hit.variants.map(variant => (
      <div>
  <a href={`/product/${hit.handle}/`} >
<Highlight hit={hit} attribute="title" tagName="mark" />
</a>

  <p><Highlight hit={hit} attribute="description" tagName="mark" /></p>

      <div>
    <p>{variant.price}</p>
    <Img fluid={variant.image.localFile.childImageSharp.fluid} alt="image-product" />
    </div>
</div>

))}

</div>

)

export default PostPreview;
