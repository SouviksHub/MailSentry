<div align="center">

# 🛡️ MailSentry

**Enterprise Email Phishing Analysis Platform**

*Real-time threat intelligence, link neutralisation, and tamper-evident audit logging*

[![Python](https://img.shields.io/badge/Python-3.11-3776AB?style=flat-square&logo=python&logoColor=white)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-009688?style=flat-square&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat-square&logo=docker&logoColor=white)](#getting-started)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

MailSentry is an enterprise-grade platform designed to detect and neutralise email phishing threats before they reach end users. It combines multiple threat intelligence sources with a 4-tier link classification system to provide real-time analysis of suspicious emails, URLs, and attachments.

Built for organisations that need proactive phishing defence with full audit trails and role-based access control.

---

## Features

### Threat Detection & Analysis
- **Multi-source intelligence** — integrates VirusTotal, Google Safe Browsing, and PhishTank APIs for comprehensive URL scanning
- **4-tier link classification** — categorises links as Safe / Caution / Dangerous / Critical with automated response actions
- **Email header analysis** — parses and evaluates email headers for spoofing indicators (SPF, DKIM, DMARC)
- **Attachment scanning** — inspects file types and hashes against known threat databases

### Security & Compliance
- **Tamper-evident audit logging** — SHA-256 hash chain ensures log integrity and non-repudiation
- **RBAC (Role-Based Access Control)** — granular permissions for analysts, managers, and admins
- **OWASP Top 10 mitigations** — built-in protections against common web vulnerabilities
- **Security headers** — CSP, HSTS, X-Frame-Options, and X-Content-Type-Options enforced by default
- **Rate limiting** — per-endpoint throttling to prevent abuse

### Operations
- **Manager notification pipeline** — automatic escalation for critical threat overrides
- **Link neutralisation** — dangerous URLs are defanged and replaced with safe redirects
- **Dashboard analytics** — real-time metrics on threat volume, classification breakdown, and response times

---

## Architecture

```
┌─────────────────┐     ┌──────────────────┐     ┌──────────────────┐
│   React 18    │────▶│   FastAPI       │────▶│   SQLite (async) │
│   Vite        │     │   Python 3.11   │     │   aiosqlite      │
│   Tailwind    │     │   JWT + RBAC     │     └──────────────────┘
└─────────────────┘     └───────┬──────────┘
         Frontend              │              Backend
                               │
                    ┌─────────┴───────────┐
                    │  Threat Intelligence  │
                    ├─────────────────────┤
                    │  ● VirusTotal API     │
                    │  ● Google Safe Browse │
                    │  ● PhishTank          │
                    └─────────────────────┘
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Backend** | Python 3.11, FastAPI, Pydantic, aiosqlite |
| **Frontend** | React 18, Vite, Tailwind CSS |
| **Database** | SQLite (async via aiosqlite) |
| **Auth** | JWT (HS256), Bcrypt, Role-Based Access Control |
| **Threat Intel** | VirusTotal API, Google Safe Browsing, PhishTank |
| **Infrastructure** | Docker, Docker Compose |
| **Testing** | Pytest, React Testing Library |

---

## Getting Started

### Prerequisites

- Python 3.11+
- Node.js 18+
- Docker & Docker Compose (optional)

### Option 1: Docker (Recommended)

```bash
# Clone the repository
git clone https://github.com/SouviksHub/MailSentry.git
cd MailSentry

# Start all services
docker-compose up -d
```

The app will be available at `http://localhost:3000` (frontend) and `http://localhost:8000` (API).

### Option 2: Manual Setup

**Backend**

```bash
cd backend
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
pip install -r requirements.txt

# Set environment variables
cp .env.example .env
# Edit .env with your API keys (VirusTotal, Google Safe Browsing)

uvicorn main:app --reload --port 8000
```

**Frontend**

```bash
cd frontend
npm install
npm run dev
```

---

## Project Structure

```
MailSentry/
├── backend/
│   ├── routers/          # API route handlers
│   ├── services/         # Business logic & threat analysis
│   ├── middleware/        # Auth, rate limiting, security headers
│   └── templates/        # Email templates for notifications
├── frontend/
│   └── src/              # React components, pages, hooks
├── docs/                 # Project documentation
├── scripts/              # Utility & deployment scripts
├── tests/                # Unit & integration tests
├── .gitignore
├── LICENSE               # MIT License
└── README.md
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/analyse/email` | Submit email for phishing analysis |
| `POST` | `/api/analyse/url` | Scan a URL against threat intelligence |
| `GET` | `/api/reports` | Retrieve analysis reports |
| `GET` | `/api/reports/:id` | Get detailed report by ID |
| `GET` | `/api/dashboard/stats` | Dashboard analytics and metrics |
| `POST` | `/api/auth/login` | User authentication |
| `GET` | `/api/audit-log` | Tamper-evident audit trail |

> Full API documentation available at `/docs` (Swagger UI) when the backend is running.

---

## Security

MailSentry implements defence-in-depth with the following measures:

| Feature | Implementation |
|---------|---------------|
| **Authentication** | JWT tokens (HS256) with configurable expiry |
| **Password Storage** | Bcrypt hashing with salt |
| **Authorisation** | Role-based access control (Analyst / Manager / Admin) |
| **Audit Logging** | SHA-256 hash chain for tamper evidence |
| **Link Neutralisation** | 4-tier classification: Safe → Caution → Dangerous → Critical |
| **Rate Limiting** | Per-endpoint throttling |
| **Security Headers** | CSP, HSTS, X-Frame-Options, X-Content-Type-Options |
| **Input Validation** | Pydantic models with strict type checking |

---

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with ❤️ by [Souvik Sarker](https://github.com/SouviksHub)**

[![GitHub](https://img.shields.io/badge/GitHub-SouviksHub-181717?style=flat-square&logo=github)](https://github.com/SouviksHub)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-souviksarker-0077B5?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/souviksarker)

</div>
