# Security Policy

## Supported Versions

| Version | Supported          |
|---------|--------------------|
| main    | :white_check_mark: |

## Reporting a Vulnerability

**Please do NOT open a public GitHub issue for security vulnerabilities.**

Instead, report vulnerabilities privately via email:

**Email:** [souvik.govt@gmail.com](mailto:souvik.govt@gmail.com)

Include the following in your report:

1. **Description** of the vulnerability
2. **Steps to reproduce** the issue
3. **Impact assessment** (what could an attacker do?)
4. **Suggested fix** (if you have one)

### Response Timeline

- **Acknowledgement:** Within 48 hours
- **Initial assessment:** Within 5 business days
- **Fix timeline:** Depends on severity (Critical: 24-72h, High: 1 week, Medium: 2 weeks)

## Security Measures

MailSentry implements the following security controls:

### Authentication & Authorisation
- JWT tokens (HS256) with short-lived access tokens and refresh token rotation
- Bcrypt password hashing with per-user salt
- Role-Based Access Control (Analyst / Manager / Admin)
- Account lockout after failed login attempts

### Data Protection
- All API communication over HTTPS (enforced via HSTS)
- Input validation via Pydantic strict models
- Parameterised queries (no raw SQL) to prevent SQL injection
- Output encoding to prevent XSS

### Infrastructure
- Security headers: CSP, HSTS, X-Frame-Options, X-Content-Type-Options
- Rate limiting per endpoint to prevent brute-force and DoS
- Docker containers run as non-root with `no-new-privileges` and `read_only` filesystem
- Tamper-evident audit logging with SHA-256 hash chain
- Dependency auditing via pip-audit and npm audit in CI pipeline

### OWASP Top 10 Coverage
- **A01 Broken Access Control** — RBAC with middleware enforcement
- **A02 Cryptographic Failures** — Bcrypt + JWT + HTTPS
- **A03 Injection** — Pydantic validation + parameterised queries
- **A04 Insecure Design** — Threat modelling documented in /docs
- **A05 Security Misconfiguration** — Hardened Docker + security headers
- **A06 Vulnerable Components** — Automated dependency auditing in CI
- **A07 Auth Failures** — Account lockout + token rotation
- **A08 Data Integrity** — SHA-256 hash chain audit logs
- **A09 Logging Failures** — Structured JSON logging with tamper evidence
- **A10 SSRF** — URL validation + allowlist for external API calls

## Responsible Disclosure

We follow responsible disclosure practices. If you report a vulnerability:

- We will work with you to understand and address the issue
- We will credit you in the fix (unless you prefer anonymity)
- We ask that you do not disclose the vulnerability publicly until a fix is released

Thank you for helping keep MailSentry secure.
