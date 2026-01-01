import { getProducts, formatPrice, type ShopifyProduct } from '@/lib/shopify';
import Image from 'next/image';

export default async function Home() {
  const data = await getProducts();
  const products = data?.products?.edges || [];

  return (
    <div className="min-h-screen bg-white dark:bg-black p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 text-black dark:text-white">
            Shopify Product Showcase
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Built with Next.js 16.1 + React 19.2.3 + Shopify Storefront API
          </p>
        </div>
        
        {/* Empty State */}
        {products.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              No products found.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Make sure your Shopify store has products and your API credentials are correct.
            </p>
          </div>
        ) : (
          <>
            {/* Product Count */}
            <div className="mb-6">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Showing {products.length} products
              </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map(({ node: product }: { node: ShopifyProduct }) => {
                const image = product.images.edges[0]?.node;
                const price = product.priceRange.minVariantPrice;

                return (
                  <div 
                    key={product.id}
                    className="group border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    {/* Product Image */}
                    {image && (
                      <div className="relative aspect-square bg-gray-100 dark:bg-gray-900">
                        <Image
                          src={image.url}
                          alt={image.altText || product.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        />
                      </div>
                    )}

                    {/* Product Info */}
                    <div className="p-4">
                      <h2 className="text-lg font-semibold mb-2 text-black dark:text-white line-clamp-2">
                        {product.title}
                      </h2>
                      
                      {product.description && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                          {product.description}
                        </p>
                      )}
                      
                      <p className="text-xl font-bold text-black dark:text-white">
                        {formatPrice(price.amount, price.currencyCode)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
