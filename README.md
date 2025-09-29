# PSA-project
PSA Project for school - Basic Flask Python App with Docker

## Overview
This is a basic Flask web application that demonstrates a simple Python web service with Docker containerization support. The application provides both a web interface and REST API endpoints.

## Features
- Simple Flask web application
- REST API endpoints for status and information
- Docker support with multi-stage build
- Health checks for monitoring
- Non-root user for security
- Development-friendly setup with docker-compose

## Project Structure
```
PSA-project/
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── Dockerfile            # Docker container definition
├── docker-compose.yml    # Docker Compose for development
├── .gitignore           # Git ignore patterns
└── README.md            # This file
```

## Available Endpoints

### Web Interface
- `GET /` - Home page with application information

### API Endpoints
- `GET /api/status` - Application status check
- `GET /api/info` - Detailed application information
- `GET /health` - Health check endpoint (for monitoring)

## Quick Start

### Running Locally (Python)
1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Run the application:
   ```bash
   python app.py
   ```

3. Access the application at http://localhost:5000

### Running with Docker

#### Option 1: Docker Build and Run
1. Build the Docker image:
   ```bash
   docker build -t psa-flask-app .
   ```

2. Run the container:
   ```bash
   docker run -p 5000:5000 psa-flask-app
   ```

#### Option 2: Docker Compose (Recommended for Development)
1. Start the application with Docker Compose:
   ```bash
   docker-compose up --build
   ```

2. Access the application at http://localhost:5000

3. Stop the application:
   ```bash
   docker-compose down
   ```

## API Examples

### Check Application Status
```bash
curl http://localhost:5000/api/status
```

Response:
```json
{
  "status": "running",
  "message": "PSA Flask application is healthy",
  "version": "1.0.0"
}
```

### Get Application Information
```bash
curl http://localhost:5000/api/info
```

Response:
```json
{
  "app_name": "PSA Project",
  "description": "Basic Flask Python app with Docker support",
  "framework": "Flask",
  "language": "Python",
  "containerized": true,
  "endpoints": [
    {
      "path": "/",
      "method": "GET",
      "description": "Home page"
    },
    {
      "path": "/api/status",
      "method": "GET",
      "description": "Application status"
    },
    {
      "path": "/api/info",
      "method": "GET",
      "description": "Application information"
    }
  ]
}
```

## Development

### Requirements
- Python 3.11+
- Docker (optional, for containerization)
- Docker Compose (optional, for easy development setup)

### Dependencies
- Flask 2.3.3 - Web framework
- Werkzeug 2.3.7 - WSGI utilities

## Docker Configuration

The Dockerfile includes:
- Python 3.11 slim base image
- Security best practices (non-root user)
- Health checks for monitoring
- Optimized layer caching
- SSL certificate handling for environments with proxy restrictions

## Contributing
This is a school project. For any issues or improvements, please create an issue in the repository.

## License
This project is for educational purposes as part of a school PSA project.
