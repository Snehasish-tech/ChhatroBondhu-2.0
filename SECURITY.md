# 🔒 Security Policy

## Supported Versions

We release patches for security vulnerabilities. Which versions are eligible for receiving such patches depends on the CVSS v3.0 Rating:

| Version | Supported          |
| ------- | ------------------ |
| Latest  | ✅ Yes             |
| < Latest| ❌ No              |

We recommend always using the latest version of React-CB-JS to ensure you have all security updates.

---

## 🚨 Reporting a Vulnerability

**Please DO NOT report security vulnerabilities through public GitHub issues.**

If you discover a security vulnerability, please follow these steps:

### 1️⃣ **Report Privately**
- **Email:** Send details to the project maintainers (check repository for contact info)
- **GitHub Security Advisory:** Use GitHub's [private vulnerability reporting feature](https://github.com/YOUR_USERNAME/React-CB-JS/security/advisories/new)

### 2️⃣ **What to Include in Your Report**
Please provide the following information:

- **Type of vulnerability** (e.g., XSS, SQL injection, authentication bypass)
- **Full paths of source files** related to the vulnerability
- **Location of the affected code** (tag/branch/commit or direct URL)
- **Step-by-step instructions** to reproduce the issue
- **Proof-of-concept or exploit code** (if possible)
- **Impact assessment** - What could an attacker do?
- **Suggested fix** (if you have one)
- **Your contact information**

### 3️⃣ **What to Expect**

| Timeline | Action |
|----------|--------|
| **Within 48 hours** | Initial response acknowledging receipt |
| **Within 7 days** | Detailed response with assessment and next steps |
| **Within 30 days** | Resolution or status update |

We'll keep you informed throughout the process and give you credit for the discovery (unless you prefer to remain anonymous).

---

## 🛡️ Security Best Practices for Contributors

### For Code Contributors:

#### ✅ **Authentication & Authorization**
- Never commit sensitive credentials (API keys, passwords, tokens)
- Use environment variables for all secrets
- Implement proper authentication checks in protected routes
- Validate user permissions on both client and server side

#### ✅ **Input Validation**
- Sanitize all user inputs before processing
- Validate data types and formats
- Use parameterized queries to prevent injection attacks
- Implement rate limiting for API endpoints

#### ✅ **Dependencies**
- Regularly update dependencies: `npm audit fix`
- Review dependencies before adding them
- Avoid packages with known vulnerabilities
- Use `npm audit` before submitting PRs

#### ✅ **Data Protection**
- Never log sensitive information (passwords, tokens, PII)
- Implement proper error handling without exposing system details
- Use HTTPS for all external communications
- Encrypt sensitive data at rest and in transit

#### ✅ **XSS Prevention**
- React automatically escapes JSX content, but be cautious with:
  - `dangerouslySetInnerHTML` - avoid unless absolutely necessary
  - Direct DOM manipulation
  - Third-party libraries that render user content
- Sanitize HTML content from external sources

#### ✅ **Supabase Security**
- Use Row Level Security (RLS) policies
- Never expose service role keys in client code
- Validate all database operations
- Implement proper access control

#### ✅ **API Security**
- Implement proper CORS policies
- Use authentication tokens securely
- Validate all API responses
- Implement rate limiting

---

## ⚠️ Common Vulnerabilities to Avoid

### 1. **Exposed Secrets**
❌ **Never do this:**
```javascript
const API_KEY = "sk-1234567890abcdef"; // Hardcoded secret
```

✅ **Always do this:**
```javascript
const API_KEY = import.meta.env.VITE_API_KEY; // Environment variable
```

### 2. **Unsafe HTML Rendering**
❌ **Avoid:**
```jsx
<div dangerouslySetInnerHTML={{__html: userInput}} />
```

✅ **Prefer:**
```jsx
<div>{userInput}</div> // React escapes automatically
```

### 3. **Insecure Data Storage**
❌ **Avoid:**
```javascript
localStorage.setItem('token', jwtToken); // XSS vulnerable
```

✅ **Prefer:**
```javascript
// Use httpOnly cookies or secure storage methods
```

### 4. **Missing Input Validation**
❌ **Avoid:**
```javascript
const userId = req.params.id; // Direct use without validation
```

✅ **Prefer:**
```javascript
const userId = Number(req.params.id);
if (!userId || userId < 1) throw new Error('Invalid ID');
```

---

## 🔍 Security Checklist for Pull Requests

Before submitting a PR, ensure:

- [ ] No hardcoded secrets or API keys
- [ ] All user inputs are validated and sanitized
- [ ] No new dependencies with known vulnerabilities (`npm audit`)
- [ ] Sensitive operations require proper authentication
- [ ] Error messages don't expose system information
- [ ] No use of `dangerouslySetInnerHTML` without sanitization
- [ ] Environment variables used for configuration
- [ ] HTTPS used for all external API calls
- [ ] Proper error handling implemented
- [ ] Security-sensitive code reviewed thoroughly

---

## 🔐 Environment Variables Security

### Required Setup:
1. **Never commit `.env` files** to version control
2. **Use `.env.example`** with dummy values for documentation
3. **Rotate credentials** if accidentally exposed
4. **Use different credentials** for development and production

### .env.example (Safe to commit):
```env
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
# Never commit actual values
```

---

## 🚫 Out of Scope

The following issues are typically **NOT** considered security vulnerabilities:

- Reports from automated tools without proof of exploitability
- Missing security headers on non-sensitive pages
- Lack of CSRF protection on logout endpoints
- Self-XSS requiring user to paste malicious code
- Social engineering attacks
- Physical attacks requiring device access
- Denial of Service (DoS) attacks
- SPF/DMARC/DKIM records

---

## 📜 Disclosure Policy

- We follow **responsible disclosure** principles
- Security vulnerabilities will be patched before public disclosure
- We'll coordinate disclosure timing with the reporter
- We'll publicly acknowledge researchers (with permission)
- Critical vulnerabilities will be disclosed within 90 days of being reported

---

## 🏆 Hall of Fame

We appreciate security researchers who help keep React-CB-JS safe!

<!-- 
Contributors who report valid security issues will be listed here (with permission):
- [Name] - [Date] - [Vulnerability Type]
-->

*No security issues reported yet. Be the first to help us improve!*

---

## 📚 Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [React Security Best Practices](https://react.dev/learn/security)
- [Supabase Security](https://supabase.com/docs/guides/platform/security)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)

---

## 📞 Contact

For security-related questions or concerns:
- Review this security policy first
- Check existing security advisories
- Contact maintainers through private channels
- Use GitHub Security Advisory for vulnerabilities

**Thank you for helping keep React-CB-JS secure! 🔒**
