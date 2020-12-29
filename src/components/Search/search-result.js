import { Link } from "gatsby"
import { default as React } from "react"
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
  PoweredBy,
} from "react-instantsearch-dom"
import Img from 'gatsby-image';

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits

  return hitCount > 0 ? (
    <div className="HitCount">
      {hitCount} result{hitCount !== 1 ? `s` : ``}
    </div>
  ) : null
})

const PageHit = ({ hit }) => (
  <div>
  {hit.variants.map(variant => (
    <div>
    <Link to={`/product/${hit.handle}/`}>
    <Img className="search-img" fluid={variant.image.localFile.childImageSharp.fluid} alt="image-product" />

      <div className="price-title">
        <h4>
          <Highlight attribute="title" hit={hit} tagName="mark" />
        </h4>
        <p>{variant.price}</p>
      </div>
    </Link>
    </div>
  ))}
  </div>
)

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <HitCount />
    <Hits className="Hits" hitComponent={PageHit} />
  </Index>
)

const SearchResult = ({ indices, className }) => (
  <div className={className}>
    {indices.map(index => (
      <HitsInIndex index={index} />
    ))}
    <PoweredBy />
  </div>
)

export default SearchResult
