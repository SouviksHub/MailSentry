# Contributing to MailSentry

Thank you for your interest in contributing to MailSentry! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## How to Contribute

### Reporting Bugs

1. Check the [Issues](https://github.com/SouviksHub/MailSentry/issues) page to see if the bug has already been reported
2. If not, open a new issue with:
   - A clear, descriptive title
   - Steps to reproduce the behaviour
   - Expected vs actual behaviour
   - Environment details (OS, Python version, Node version)

### Suggesting Features

Open an issue with the **feature request** label, including:
- A clear description of the feature
- The problem it solves
- Any proposed implementation details

### Submitting Changes

1. **Fork** the repository
2. **Create a branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** following our coding standards
4. **Write tests** for any new functionality
5. **Run the test suite** to ensure nothing is broken:
   ```bash
   # Backend tests
   cd backend && pytest

   # Frontend tests
   cd frontend && npm test
   ```
6. **Commit** with a clear message following [Conventional Commits](https://www.conventionalcommits.org/):
   ```
   feat: add email attachment scanning
   fix: resolve JWT token expiry issue
   docs: update API endpoint documentation
   test: add unit tests for link classifier
   ```
7. **Push** to your fork and **open a Pull Request**

## Development Setup

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
pip install -r requirements-dev.txt   # Dev dependencies (pytest, black, ruff)
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Coding Standards

### Python (Backend)
- Follow PEP 8
- Use type hints for function signatures
- Format with **Black** (line length: 88)
- Lint with **Ruff**

### JavaScript/React (Frontend)
- Use functional components with hooks
- Follow ESLint configuration
- Use Material UI (MUI) components and sx prop for styling (no inline styles)

## Security

If you discover a security vulnerability, please **do not** open a public issue. Instead, email [souvik.govt@gmail.com](mailto:souvik.govt@gmail.com) directly.

## Questions?

Open a [Discussion](https://github.com/SouviksHub/MailSentry/discussions) or reach out via the contact info in the README.

---

Thank you for helping make MailSentry better!
