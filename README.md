# Shopify Product Showcase

A modern, responsive product showcase built with Next.js 16 and powered by Shopify's Storefront API. This project demonstrates real-time product data fetching and display from a Shopify development store.

![Next.js](https://img.shields.io/badge/Next.js-16.1.0-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8?style=flat-square&logo=tailwind-css)
![Shopify](https://img.shields.io/badge/Shopify-Storefront_API-96bf48?style=flat-square&logo=shopify)

## ✨ Features

- 🛍️ **Product Grid Display** - Responsive grid layout showcasing products with images, descriptions, and prices
- 🔄 **Real-time Data** - Fetches live product data from Shopify Storefront API
- 🌓 **Dark Mode Support** - Built-in light and dark theme support
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop views
- ⚡ **Server-Side Rendering** - Fast initial page loads with Next.js App Router
- 🎨 **Modern UI** - Clean, professional design with Tailwind CSS

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **API:** Shopify Storefront API
- **API Client:** @shopify/storefront-api-client
- **Runtime:** React 19

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- A Shopify Partner account
- A Shopify development store with products

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/saleh-fadel/shopify-product-showcase.git
   cd shopify-product-showcase
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```bash
   NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
   NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_storefront_api_token
   ```

   To get these credentials:
   - Go to your Shopify admin
   - Navigate to **Settings → Apps and sales channels → Develop apps**
   - Create a custom app with Storefront API access
   - Configure the following scopes:
     - `unauthenticated_read_product_listings`
     - `unauthenticated_read_product_inventory`
     - `unauthenticated_read_product_tags`
   - Install the app and copy your credentials

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
shopify-product-showcase/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page with product grid
│   └── globals.css         # Global styles
├── lib/
│   └── shopify.ts          # Shopify API client and queries
├── public/                 # Static assets
├── .env.local             # Environment variables (not in git)
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🔑 Key Components

### Shopify API Client (`lib/shopify.ts`)
- Configures Storefront API client
- Provides `getProducts()` function for fetching products
- Includes `getCollections()` for future collection features
- Error handling and GraphQL query management

### Product Display (`app/page.tsx`)
- Server-side data fetching
- Responsive product grid (1/2/3 columns)
- Product cards with images, titles, descriptions, and prices
- Empty state handling

## 🎯 Roadmap

### Planned Features
- [ ] Product detail pages with full information
- [ ] Collection browsing and filtering
- [ ] Search functionality
- [ ] Product variants (sizes, colors)
- [ ] Shopping cart integration
- [ ] Checkout flow with Shopify Checkout API
- [ ] Pagination for large product catalogs
- [ ] Product sorting (price, name, date)
- [ ] Wishlist functionality
- [ ] SEO optimization

### Future Enhancements
- [ ] Product reviews and ratings
- [ ] Related products section
- [ ] Performance optimizations with image optimization
- [ ] Analytics integration
- [ ] A/B testing setup

## 📝 What I Learned

This project helped me understand:
- Setting up and configuring Shopify Partner accounts
- Working with Shopify's Storefront API
- Creating custom apps and managing API credentials
- GraphQL queries for e-commerce data
- Next.js 16 App Router and Server Components
- Environment variable management
- Git workflow and version control best practices

## 🤝 Contributing

This is a personal learning project, but suggestions and feedback are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- [Shopify Storefront API Documentation](https://shopify.dev/docs/api/storefront)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 👨‍💻 Author

**Saleh Fadel**
- GitHub: [@saleh-fadel](https://github.com/saleh-fadel)

---

⭐ If you found this project helpful, please consider giving it a star!
