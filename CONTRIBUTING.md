# 🤝 Contributing to ChhatroBondhu-2.0

Thank you for your interest in contributing!

React-CB-JS is a fully open-source, student-friendly project, and we welcome contributors of all skill levels. This is a modern React application built with Vite, Tailwind CSS, and Supabase, featuring AI-powered study tools and productivity features.

Please follow the guidelines below for a smooth and successful contribution.

---

## 📌 Getting Started

### 1️⃣ Fork the Repository
Click on the **Fork** button at the top-right of this GitHub repo.

### 2️⃣ Clone Your Fork
```bash
git clone https://github.com/Snehasish-tech/ChhatroBondhu-2.0
cd ChhatroBondhu-2.0
```

### 3️⃣ Create a Feature Branch
Always create a new branch for your feature or fix:
```bash
git checkout -b feature-your-feature-name
```

---

## 🧰 Project Setup

### ✔ Requirements:
- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager
- Any code editor (**VS Code** recommended)
- Basic knowledge of **React**, **JavaScript/JSX**, **Tailwind CSS**

### ✔ Installation Steps:

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Set up Environment Variables:**
   Create a `.env` file in the root directory (if not already present):
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
   *Note: Contact the maintainers for environment variable values if needed.*

3. **Run Development Server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

4. **Build for Production:**
   ```bash
   npm run build
   ```

5. **Preview Production Build:**
   ```bash
   npm run preview
   ```

---

## 📝 What You Can Contribute

### ✔ Code Contributions
- **Improve UI/UX** - Enhance existing components or pages
- **Fix Bugs** - Address layout, responsiveness, or functionality issues
- **Add Features** - Implement new study tools or productivity features
- **Optimize Performance** - Improve loading times and efficiency
- **Enhance Accessibility** - Make the app more accessible (ARIA labels, keyboard navigation)
- **Add New Pages** - Create additional features like new study modes, analytics, etc.
- **Improve AI Integration** - Enhance AI assistant or quiz generation features

### ✔ Content Contributions
- Update documentation (README, API docs, component docs)
- Write guides or tutorials
- Improve error messages and user feedback
- Add code comments for complex logic

### ✔ Design & Media
- Create or update icons, illustrations, images
- Improve color schemes and themes
- Design new component variations
- Add animations and transitions

### ✔ Testing
- Write unit tests or integration tests
- Report bugs with detailed reproduction steps
- Test on different browsers and devices

---

## ⚠ Contribution Rules (Very Important)

### ✔ Code Style & Quality
- Use **clean, readable React code** with proper component structure
- Follow **React best practices** (hooks, state management, component composition)
- Use **functional components** and hooks (avoid class components)
- Follow existing **naming conventions**:
  - Components: `PascalCase` (e.g., `StudyRoom.jsx`)
  - Files: `PascalCase` for components, `camelCase` for utilities
  - Functions/Variables: `camelCase`
- **Indent code properly** (2 spaces - check existing files)
- Use **Tailwind CSS** for styling (avoid inline styles when possible)
- Run **ESLint** before committing: `npm run lint`

### ✔ File & Folder Guidelines
- **Component files** → `src/components/`
- **Page files** → `src/pages/`
- **Utility functions** → `src/lib/`
- **Hooks** → `src/hooks/`
- **Context providers** → `src/contexts/`
- **UI components** → `src/components/ui/`
- **Assets (images, icons)** → `src/assets/`

### ❌ DO NOT:
- Commit large media files (compress images before adding)
- Commit `node_modules/`, `.env`, `.vscode/`, or system files
- Add unnecessary dependencies without discussion
- Break existing functionality
- Ignore ESLint warnings/errors

### ✔ Commit Message Guidelines
Use **clear, meaningful commit messages**:

```bash
✅ Good Examples:
Add: Voice notes recording feature
Fix: Pomodoro timer reset bug
Update: Dashboard UI responsiveness
Refactor: AI service API calls
Style: Improve dark mode theme colors

❌ Bad Examples:
update
fixed stuff
changes
asdfgh
```

### ✔ Pull Request Guidelines
**Required for all PRs:**
- ✅ Clear description of what was changed and why
- ✅ Screenshots/GIFs for UI changes (before/after)
- ✅ Reference related issue number (e.g., "Fixes #123")
- ✅ Test your changes thoroughly
- ✅ Ensure no ESLint errors
- ✅ Update documentation if needed

---

## 📤 Submitting a Pull Request

Once your feature is ready:

1. **Stage and commit your changes:**
   ```bash
   git add .
   git commit -m "Add: Clear description of your change"
   ```

2. **Push to your fork:**
   ```bash
   git push origin feature-your-feature-name
   ```

3. **Open a Pull Request:**
   - Go to your fork on GitHub
   - Click **Compare & Pull Request**
   - Fill in the PR template:
     - **Title:** Clear, descriptive title
     - **Description:** What changed and why
     - **Screenshots:** For UI changes (required)
     - **Related Issue:** Link to issue number
   - Submit 🎉

4. **Wait for Review:**
   - Maintainers will review your PR
   - Address any requested changes
   - Once approved, your PR will be merged!

---

## 🐞 Creating Issues

Before starting work, **create an Issue** or check existing ones.

### Issue Should Include:
- **Title:** Clear, concise summary
- **Description:** Detailed explanation of the issue/feature
- **Why it's needed:** Context and benefits
- **Screenshots/Videos:** If UI-related
- **Steps to Reproduce:** For bugs
- **Expected vs Actual Behavior:** For bugs
- **Environment:** Browser, OS, Node version (if relevant)

**Wait for a maintainer to assign the issue to you before starting work.**

---

## 🧪 Testing Your Changes

Before submitting:

1. **Test locally:**
   ```bash
   npm run dev
   ```

2. **Check for errors:**
   ```bash
   npm run lint
   ```

3. **Build successfully:**
   ```bash
   npm run build
   ```

4. **Test in multiple browsers** (Chrome, Firefox, Safari, Edge)

5. **Test responsive design** (mobile, tablet, desktop)

6. **Test both light and dark themes**

---

## 🎨 Design Guidelines

- Follow the existing **design system** and color palette
- Maintain **consistency** with current UI/UX patterns
- Use **Tailwind CSS utility classes** for styling
- Support both **light and dark modes**
- Ensure **responsive design** (mobile-first approach)
- Follow **accessibility best practices** (WCAG guidelines)

---

## 🤝 Code of Conduct

By contributing, you agree to:

- ✅ Be respectful and supportive to all contributors
- ✅ Help beginners who ask questions
- ✅ Keep discussions constructive and professional
- ✅ Follow open-source etiquette
- ✅ Give credit where credit is due
- ❌ Avoid spamming issues or PRs
- ❌ No harassment, discrimination, or toxic behavior

---

## 💬 Need Help?

If you're confused or stuck at any step:

- 💬 **Open an Issue** with the `question` label
- 📧 **Tag maintainers** in comments
- 🌐 **Check existing issues** for similar questions
- 📖 **Read the documentation** (README.md, AI_SETUP.md)

We're here to help you grow! 🌱

---

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Supabase Documentation](https://supabase.com/docs)

---

## 🎉 Welcome to the ChhatroBondhu-2.0 Community!

Thank you for contributing your time, skills, and creativity. Together, let's build something amazing! 🚀

**Happy Coding! 💻✨**
