# MailSentry

**Enterprise email phishing analysis platform with real-time threat intelligence, link neutralisation, and SOC-grade audit logging.**

## Tech Stack

- **Backend:** Python 3.11 / FastAPI
- **Frontend:** React 18 / Vite / Tailwind CSS
- **Database:** SQLite (async via aiosqlite)
- **Threat Intel:** VirusTotal API, Google Safe Browsing, PhishTank
- **Auth:** JWT (HS256) + Bcrypt + RBAC
- **Containerisation:** Docker + Docker Compose

## Security Features

- 4-tier link neutralisation (Safe / Caution / Dangerous / Critical)
- OWASP Top 10 mitigations
- Tamper-evident audit logging with SHA-256 hash chain
- Rate limiting per endpoint
- Security headers (CSP, HSTS, X-Frame-Options)
- Manager notification pipeline for critical overrides

## License

MIT License - see [LICENSE](LICENSE) for details.

## Author

**Souvik Sarker** - [GitHub](https://github.com/SouviksHub)
