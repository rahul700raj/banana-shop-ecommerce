# 🍌 BananaShop - Modern E-Commerce Application

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.5-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

A full-featured, modern e-commerce web application built with React.js, Tailwind CSS, and DummyJSON API.

## 🚀 Live Demo

- **GitHub Repository:** [View Code](https://github.com/rahul700raj/banana-shop-ecommerce)
- **Live Site:** Coming soon on Netlify

## ✨ Features

### 📱 Pages (9 Total)
1. **Home** - Hero section with featured products
2. **Products** - Product listing with search & filters
3. **Product Details** - Dynamic product page with gallery
4. **Cart** - Shopping cart with quantity management
5. **Wishlist** - Save favorite products
6. **Login** - User authentication UI
7. **Sign Up** - User registration form
8. **About** - Company information
9. **Contact** - Contact form with business info
10. **404** - Custom error page

### 🎨 Design Features
- 🌈 Modern banana-themed gradient design
- 🎭 Smooth animations and transitions
- 📱 Fully responsive (mobile-first)
- 🎪 Advanced UI components
- 🧭 Sticky navbar with badges
- ⚡ Loading skeleton states
- 🔔 Toast notifications

### 🔌 Technical Features
- ✅ Real API integration (DummyJSON)
- ✅ LocalStorage for cart & wishlist
- ✅ Context API for state management
- ✅ React Router for navigation
- ✅ Axios for HTTP requests
- ✅ Error handling with retry
- ✅ Search & category filters
- ✅ Image gallery
- ✅ Form validation

## 🛠️ Technology Stack

- **Frontend:** React.js 18.2.0
- **Styling:** Tailwind CSS 3.3.5
- **Routing:** React Router DOM 6.20.0
- **HTTP Client:** Axios 1.6.2
- **API:** DummyJSON (https://dummyjson.com)
- **State Management:** Context API
- **Storage:** LocalStorage

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/rahul700raj/banana-shop-ecommerce.git
cd banana-shop-ecommerce
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

4. **Build for production**
```bash
npm run build
```

The app will open at `http://localhost:3000`

## 📂 Project Structure

```
banana-shop-ecommerce/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── ProductCard.js
│   │   ├── LoadingSkeleton.js
│   │   └── Toast.js
│   ├── context/
│   │   ├── CartContext.js
│   │   ├── WishlistContext.js
│   │   └── ToastContext.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Products.js
│   │   ├── ProductDetails.js
│   │   ├── Cart.js
│   │   ├── Wishlist.js
│   │   ├── Login.js
│   │   ├── SignUp.js
│   │   ├── About.js
│   │   ├── Contact.js
│   │   └── NotFound.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎯 Key Features Explained

### Cart Management
- Add/remove products
- Update quantities
- Persistent storage
- Real-time total calculation

### Wishlist
- Save favorite items
- Toggle wishlist status
- Persistent across sessions

### Product Filtering
- Search by name
- Filter by category
- Real-time results

### Responsive Design
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Deploy to Netlify

1. **Connect GitHub**
   - Go to [Netlify](https://netlify.com)
   - Click "Add new site" → "Import from Git"
   - Select this repository

2. **Configure Build**
   - Build command: `npm run build`
   - Publish directory: `build`

3. **Deploy**
   - Click "Deploy site"
   - Your site will be live!

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 📧 Contact

**Email:** rm2778643@gmail.com

## 📄 License

MIT License - feel free to use this project for learning!

## 🙏 Acknowledgments

- [DummyJSON](https://dummyjson.com) - Free fake API
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- [React](https://react.dev) - JavaScript library
- [React Router](https://reactrouter.com) - Routing library

## 🐛 Known Issues

None at the moment. Report issues [here](https://github.com/rahul700raj/banana-shop-ecommerce/issues).

## 🔮 Future Enhancements

- [ ] User authentication (Firebase/Auth0)
- [ ] Payment integration (Stripe)
- [ ] Order history
- [ ] Product reviews
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Dark mode

---

**Built with ❤️ and 🍌 by Rahul Mishra**

⭐ Star this repo if you found it helpful!