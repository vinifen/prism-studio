# 🎨 Prism Studio

#### v-0.1.0-alpha

## 📱 About the project

Prism Studio is an e-commerce project for art supplies that I'm building to improve my React Native skills and create something cool! The idea is to make a simple and fun platform where artists can browse and buy art materials.

For the backend, I'm using my [MarketCore API](https://github.com/vinifen/marketcore-api) project, which is a standard e-commerce API. Now I'm focusing on building the React Native project that will connect to this API.

### 🔧 Core Functionalities

- [x] User authentication and registration
- [x] Product List
- [ ] Product catalog browsing with categories
- [ ] Shopping cart management
- [ ] User profile management
- [ ] Order logic
- [ ] Product search functionality

## 🎥 Demo

Check out a short demo video of the app:

https://youtube.com/shorts/ETH4eQDcuB0


## 📝 Updates Since Last Checkpoint

### Applied Technologies & Patterns

- **Form Validation**: Used Zod with react-hook-form for schema validation on login and register screens
- **Routing**: Implemented Expo Router for file-based navigation throughout the app
- **Version Control**: Applied GitFlow workflow for branch management and organized releases

### Component Best Practices Applied

- **Component Isolation**: Created reusable UI components (`FormInput`, `ProductCard`, `PrimaryButton`, `SecondaryButton`)
- **Minimal Naming**: Used descriptive yet concise component names (`Div`, `H1-H4`, `LogoImage`)
- **Component Parametrization**: All components accept props via TypeScript interfaces for flexible reuse
- **Children Pattern**: Components like `Div` and gradient wrappers accept children for flexible composition
- **Composed Components**: Implemented re-export pattern via `index.ts` for grouped component imports
- **Event Callbacks**: Buttons and forms dispatch events to parent components via `onPress` and form submission handlers

## �🖼️ Prototyping

I've created some basic prototypes for Prism Studio using Figma. These include the main screens and user flows for the core features of the project.

**🎨 [View Interactive Prototypes on Figma](https://www.figma.com/design/cYCcxlyUv4ehb6Ceu7HizX/Prism-Studio?node-id=0-1&t=a3W722V6ZGykatyB-1)**

## 🗄️ Database Modeling

This is the database schema from my MarketCore API backend that Prism Studio will be using. It's a standard e-commerce database with all the necessary tables for products, users, orders, and cart management.

![View Database Schema](https://github.com/vinifen/prism-studio/blob/main/api/docs/database/marketcore-api-dbdiagram-io.png)

### 🏗️ Key Entities:
- **Users**: Customer and admin account management
- **Products**: Art supplies catalog with detailed specifications
- **Categories**: Hierarchical product organization
- **Orders**: Purchase transaction records
- **Cart**: Shopping cart management
- **Addresses**: Customer shipping information
- **Coupons**: Discount and promotional system

## 📅 Sprint Planning

**Total Duration: 11 weeks (77 days) - Starting September 7, 2025**

### ⚙️ Week 1: Environment Setup
- [x] Development environment configuration
- [x] API testing and integration
- [x] Project initialization and dependencies

### 🏗️ Week 2: Basic Foundation
- [x] Initial basic pages implementation
- [x] Login and registration pages
- [ ] Additional testing and adaptations
- [x] Build testing

### 🔐 Week 3: Authentication System
- [x] Progress on login and registration system
- [ ] Possibly add admin features (not priority)
- [ ] User authentication flow completion

### 👤 Week 4: Admin & Products Start
- [ ] Begin admin panel development (not priority)
- [ ] Start product-related features
- [ ] Product catalog foundation

### 🛍️ Week 5: Products Development
- [x] Continue product features development
- [ ] Continue admin panel (not priority)
- [x] Product listing and details

### 🔧 Week 6: Products & User Settings
- [ ] Finalize product features
- [ ] Begin user account configuration
- [ ] Start shopping cart logic
- [ ] Possibly finalize admin panel (not priority)

### 🛒 Week 7: Cart & Orders
- [ ] Continue user configuration
- [ ] Finalize shopping cart logic
- [ ] Finalize admin panel (not priority)
- [ ] Begin order logic implementation

### 📋 Week 8: User Settings & Orders
- [ ] Finalize user configuration
- [ ] Continue order logic development
- [ ] Begin code testing

### 🧪 Week 9: Orders & Testing
- [ ] Finalize order logic
- [ ] Build testing
- [ ] Continue code testing

### 🔍 Week 10: Final Development
- [ ] Complete order logic
- [ ] Comprehensive testing
- [ ] Bug fixes and corrections

### ✅ Week 11: Final Testing
- [ ] Final testing and validation
- [ ] Last-minute fixes
- [ ] Deployment preparation


### 🚀 Backend API
The backend API is finished. API documentation is available at the Swagger endpoint. The front-end will connect to the existing API services for all data operations.

## 🤝 Contributing

This project follows professional development practices including:
- GitFlow workflow for branch management
- Comprehensive testing requirements
- Code quality standards enforcement
- Detailed API documentation

For detailed contributing guidelines, please refer to our [GitFlow Documentation](https://github.com/vinifen/gitflow-documentation).

## 📄 License

This project is developed for educational purposes as part of software development skill enhancement.

