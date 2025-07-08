/**
 * real-estate-platform/│
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