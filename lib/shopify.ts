import { createStorefrontApiClient } from '@shopify/storefront-api-client';

const client = createStorefrontApiClient({
  storeDomain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!,
  apiVersion: '2025-01',
  publicAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
});

export async function getProducts() {
  const query = `
    query getProducts {
      products(first: 10) {
        edges {
          node {
            id
            title
            description
            handle
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const { data, errors } = await client.request(query);
    
    if (errors) {
      console.error('GraphQL errors:', errors);
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return null;
  }
}

export async function getCollections() {
  const query = `
    query getCollections {
      collections(first: 10) {
        edges {
          node {
            id
            title
            description
            handle
            image {
              url
              altText
            }
          }
        }
      }
    }
  `;

  try {
    const { data, errors } = await client.request(query);
    
    if (errors) {
      console.error('GraphQL errors:', errors);
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching collections:', error);
    return null;
  }
}

