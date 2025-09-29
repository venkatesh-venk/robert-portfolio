# Robert Portfolio - Docker Setup

## 🚀 Quick Start

```bash
# Start the application
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the application
docker-compose down
```

## 📋 Available Commands

### Development
```bash
# Start with rebuild
docker-compose up --build

# Start in foreground (see logs)
docker-compose up

# Start in background
docker-compose up -d
```

### Production
```bash
# Use production configuration
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

### Maintenance
```bash
# Stop containers
docker-compose down

# Remove containers and volumes
docker-compose down -v

# View container status
docker-compose ps

# View logs
docker-compose logs robert-portfolio
```

## 🌐 Access URLs

- **Main App**: http://localhost:3000/robert-portfolio/
- **English**: http://localhost:3000/robert-portfolio/en/
- **French**: http://localhost:3000/robert-portfolio/fr/

## 🛠️ Configuration

### Environment Variables

Copy `env.example` to `.env` and configure:

```bash
cp env.example .env
```

Key variables:
- `NEXT_PUBLIC_LAB_URL`: Your lab/API URL
- `NODE_ENV`: production/development

### Port Configuration

Default port is 3000. To change:

```yaml
# In docker-compose.yml
ports:
  - "8080:8080"  # Change first number for external port
```

## 📁 Files Structure

```
robert-portfolio/
├── docker-compose.yml          # Main compose file
├── docker-compose.prod.yml     # Production overrides
├── Dockerfile                  # Multi-stage build
├── nginx-nonroot.conf         # Nginx configuration
├── .dockerignore              # Build exclusions
└── env.example                # Environment template
```

## 🔍 Troubleshooting

### Container won't start
```bash
docker-compose logs robert-portfolio
```

### Port conflicts
```bash
# Check what's using port 3000
lsof -i :3000

# Use different port
docker-compose up -p 3001:8080
```

### Rebuild after changes
```bash
docker-compose down
docker-compose up --build
```

## ✅ Health Check

The container includes health checks. Check status:

```bash
docker-compose ps
# Look for "healthy" status
```

## 🔒 Security Features

- ✅ Non-root user execution
- ✅ Security headers configured
- ✅ Read-only filesystem
- ✅ Minimal attack surface
- ✅ No unnecessary packages

## 📊 Performance

- ✅ Multi-stage build (optimized image size)
- ✅ Static asset caching
- ✅ Gzip compression
- ✅ Efficient nginx configuration
