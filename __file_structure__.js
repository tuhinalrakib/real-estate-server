/**
 * real-estate-platform/
├── client/                     # Frontend (React)
│   ├── public/
│   └── src/
│       ├── assets/            # Static images, logos
│       ├── components/        # Reusable components
│       │   ├── common/        # Navbar, Footer, Button etc.
│       │   ├── Home/          # Sections: Banner, Ads, Reviews
│       │   ├── Property/      # PropertyCard, PropertyDetail
│       │   ├── Review/        # ReviewModal, ReviewList
│       │   └── Auth/          # Login, Register, PrivateRoute
│       ├── dashboards/        
│       │   ├── UserDashboard/
│       │   ├── AgentDashboard/
│       │   └── AdminDashboard/
│       ├── layout/            # Layouts for different dashboards
│       ├── pages/             # Page components (routed)
│       │   ├── Home.jsx
│       │   ├── AllProperties.jsx
│       │   ├── PropertyDetails.jsx
│       │   ├── Login.jsx
│       │   └── Register.jsx
│       ├── routes/            # All route files (protected/public)
│       ├── hooks/             # Custom hooks like useAuth, useRole
│       ├── contexts/          # React Context Providers (AuthContext)
│       ├── firebase/          # Firebase config & auth utils
│       ├── services/          # Axios instances / API functions
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
│
├── server/                     # Backend (Node.js + Express + MongoDB)
│   ├── config/                # DB connection, Firebase Admin SDK
│   ├── controllers/          # Controller logic for each route
│   ├── middlewares/          # authMiddleware, roleMiddleware etc.
│   ├── models/               # Mongoose models: User, Property, Offer, Review
│   ├── routes/               # Route handlers
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   ├── agentRoutes.js
│   │   ├── adminRoutes.js
│   │   └── propertyRoutes.js
│   ├── utils/                # Helper functions, validators
│   ├── app.js                # Express setup
│   └── server.js             # Entry point
│
├── .env
├── .gitignore
├── package.json              # Root package (can also split client/server package.json)
├── README.md

 */