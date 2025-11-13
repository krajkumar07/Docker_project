# Docker Project

A full-stack application with Flask backend and Express frontend, containerized using Docker.

## Project Structure

```
Docker_Project/
├── Backend/
│   ├── app.py              # Flask application
│   ├── business.py         # Business logic
│   ├── names.txt           # Data file
│   ├── requirements.txt    # Python dependencies
│   └── Dockerfile          # Backend container config
├── Frontend/
│   ├── public/
│   │   └── index.html      # Frontend HTML
│   ├── app.js              # Express server
│   ├── package.json        # Node.js dependencies
│   └── Dockerfile          # Frontend container config
└── docker-compose.yml      # Multi-container orchestration
```

## Services

### Backend (Flask)
- **Port**: 5000
- **Endpoints**:
  - `GET /` - Hello world
  - `GET /api` - Returns names data from names.txt

### Frontend (Express)
- **Port**: 3000
- **Endpoints**:
  - `GET /` - Serves static HTML
  - `GET /names` - Fetches data from backend API

## Quick Start

1. **Clone and navigate to project**:
   ```bash
   cd Docker_Project
   ```

2. **Run with Docker Compose**:
   ```bash
   docker-compose up --build
   ```

3. **Access the application**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000/api

## Development

### Running Locally (without Docker)

**Backend**:
```bash
cd Backend
pip install -r requirements.txt
python app.py
```

**Frontend**:
```bash
cd Frontend
npm install
npm start
```

### Environment Variables

- `BACKEND_URL`: Backend API URL (default: http://backend:5000/api in Docker)

## Docker Commands

- **Build and start**: `docker-compose up --build`
- **Start in background**: `docker-compose up -d`
- **Stop services**: `docker-compose down`
- **View logs**: `docker-compose logs`

## Technologies

- **Backend**: Python, Flask
- **Frontend**: Node.js, Express
- **Containerization**: Docker, Docker Compose