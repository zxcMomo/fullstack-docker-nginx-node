# Fullstack Docker App (Nginx + Node + SSL)

## 🔥 Overview
This project demonstrates a production-like setup using:

- Docker & Docker Compose
- Nginx as reverse proxy
- Node.js backend
- HTTPS with Let's Encrypt

## 🏗 Architecture

Browser → HTTPS → Nginx → Node.js container

## 🚀 Features

- Reverse proxy with Nginx
- Dockerized Node.js app
- Domain connected
- SSL (HTTPS) enabled
- HTTP → HTTPS redirect

## ⚙️ How to run

```bash
docker-compose up -d --build
