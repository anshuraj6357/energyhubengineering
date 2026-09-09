# Solar Goat × EnergyHub MVP

Full-stack MVP for solar project intake, project tracking and admin operations.

## Included

- Responsive Solar Goat × EnergyHub landing page
- Solar project intake form
- MongoDB project storage
- Public project reference ID and tracking API
- Admin JWT login
- Admin project list/detail APIs
- Status workflow
- Admin notes
- Solar Goat review fields
- File upload support
- Dockerfiles
- Docker Compose

## Quick start with Docker

1. Copy the backend environment file:

```bash
cp backend/.env.example backend/.env
```

2. Edit `backend/.env` and change `JWT_SECRET`, `ADMIN_EMAIL`, and `ADMIN_PASSWORD`.

3. Start:

```bash
docker compose up --build
```

Frontend:
- http://localhost:8080

Backend health:
- http://localhost:5000/api/health

## Local development

Backend:

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

For local MongoDB, change:

```env
MONGO_URI=mongodb://localhost:27017/solar_goat_energyhub
```

Frontend:

```bash
cd frontend
npm install
npm run dev
```

## API

### Public
- `POST /api/projects`
- `GET /api/projects/track/:publicId`
- `POST /api/auth/login`

### Admin - Bearer token required
- `GET /api/projects/admin/all`
- `GET /api/projects/admin/:id`
- `PATCH /api/projects/admin/:id/status`
- `POST /api/projects/admin/:id/notes`
- `PATCH /api/projects/admin/:id/review`
- `POST /api/projects/admin/:id/files`

## Important

This is an MVP starter. Before a real production launch, add:
- proper user accounts / password hashing or external auth
- cloud file storage such as S3
- transactional email provider
- rate limiting
- request validation
- audit logging
- backups
- HTTPS
- payment integration if needed
- legal/privacy copy
