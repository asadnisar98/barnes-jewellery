const escapeStringRegexp = require("escape-string-regexp")
const indexName = `products`
const ProductQuery = `{
  allShopifyProduct {
    nodes {
      handle
      title
      id
      description
      variants {
        price
      }
    }
  }
}

`
function pageToAlgoliaRecord({ nodes: { id, title, description, ...rest } }) {
  return {
    objectID: id,
    ...title,
    ...description,
    ...rest,
  }
}

const queries = [
  {
    query: ProductQuery,
    transformer: ({ data }) => data.allShopifyProduct.nodes.map(pageToAlgoliaRecord),
    indexName,
    settings: { //settings
     },
  },
]
module.exports = queries
