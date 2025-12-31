import { getProducts } from '@/lib/shopify';

export default async function Home() {
  const data = await getProducts();
  const products = data?.products?.edges || [];

  return (
    <div className="min-h-screen bg-white dark:bg-black p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">
          Product Showcase
        </h1>
        
        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No products found. Make sure your Shopify store has products and your API credentials are correct.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(({ node: product }: any) => (
              <div 
                key={product.id}
                className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:shadow-lg transition-shadow"
              >
                {product.images.edges[0] && (
                  <img
                    src={product.images.edges[0].node.url}
                    alt={product.images.edges[0].node.altText || product.title}
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                )}
                <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">
                  {product.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {product.description}
                </p>
                <p className="text-lg font-bold text-black dark:text-white">
                  {product.priceRange.minVariantPrice.currencyCode}{' '}
                  {product.priceRange.minVariantPrice.amount}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
