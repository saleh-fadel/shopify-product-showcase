import { createStorefrontApiClient } from '@shopify/storefront-api-client';

// TypeScript Interfaces
export interface ShopifyProduct {
  id: string;
  title: string;
  description: string;
  handle: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: {
    edges: Array<{
      node: {
        url: string;
        altText: string | null;
      };
    }>;
  };
}

export interface ShopifyCollection {
  id: string;
  title: string;
  description: string;
  handle: string;
  image: {
    url: string;
    altText: string | null;
  } | null;
}

interface ProductsResponse {
  products: {
    edges: Array<{
      node: ShopifyProduct;
    }>;
  };
}

interface CollectionsResponse {
  collections: {
    edges: Array<{
      node: ShopifyCollection;
    }>;
  };
}

// Create Shopify client
const client = createStorefrontApiClient({
  storeDomain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!,
  apiVersion: '2025-10',
  publicAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
});

export async function getProducts(): Promise<ProductsResponse | null> {
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
      throw new Error('Shopify API Error: Failed to fetch products');
    }
    
    return data as ProductsResponse;
  } catch (error) {
    console.error('Error fetching products:', error);
    return null;
  }
}

export async function getCollections(): Promise<CollectionsResponse | null> {
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
      throw new Error('Shopify API Error: Failed to fetch collections');
    }
    
    return data as CollectionsResponse;
  } catch (error) {
    console.error('Error fetching collections:', error);
    return null;
  }
}

// Utility function to format prices
export function formatPrice(amount: string, currencyCode: string): string {
  const price = parseFloat(amount);
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  }).format(price);
}
