# Help-Map-Plattform

Help-Map-Plattform/
├─ .env                       # Environment variables (DB URL, JWT secret, etc.)
├─ package.json
├─ tsconfig.json              # لو TypeScript
├─ nodemon.json               # لو تستخدم nodemon للتطوير
├─ README.md
├─ prisma/                    # لو تستخدم Prisma مع PostgreSQL
│   └─ schema.prisma
├─ src/
│   ├─ server.ts              # نقطة الدخول
│   ├─ app.ts                 # إعدادات Express Middleware
│   ├─ config/
│   │   ├─ db.ts              # إعداد الاتصال بالـ DB
│   │   └─ rateLimiter.ts     # Rate limiting
│   ├─ middlewares/
│   │   ├─ auth.ts            # JWT Auth middleware
│   │   ├─ errorHandler.ts    # Error handling middleware
│   │   └─ validate.ts         # Request validation
│   ├─ models/                # Models / Schemas
│   │   ├─ User.model.ts
│   │   ├─ MapRequest.model.ts
│   │   └─ Notification.model.ts
│   ├─ controllers/
│   │   ├─ auth.controller.ts
│   │   ├─ user.controller.ts
│   │   ├─ map.controller.ts
│   │   └─ notification.controller.ts
│   ├─ routes/
│   │   ├─ auth.routes.ts
│   │   ├─ user.routes.ts
│   │   ├─ map.routes.ts
│   │   └─ notification.routes.ts
│   ├─ services/
│   │   ├─ auth.service.ts
│   │   ├─ user.service.ts
│   │   ├─ map.service.ts
│   │   └─ notification.service.ts
│   ├─ utils/
│   │   ├─ validator.ts
│   │   ├─ logger.ts
│   │   └─ jwt.ts
│   └─ tests/
│       ├─ auth.test.ts
│       ├─ user.test.ts
│       ├─ map.test.ts
│       └─ notification.test.ts
├─ postman/
│   └─ HelpMapPlatform.postman_collection.json
└─ Dockerfile                # لو تريد production docker