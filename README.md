<div align="center">

# 🎓 ChhatroBondhu 2.0

### Your AI-Powered Study Companion for Smarter Learning

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Enabled-3ECF8E?logo=supabase&logoColor=white)](https://supabase.com/)

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Tech Stack](#-tech-stack) • [Contributing](#-contributing)

</div>

---

## 📖 About

**ChhatroBondhu 2.0** is a comprehensive, AI-powered study platform designed to revolutionize how students learn. With intelligent features like AI assistants, personalized study schedules, gamification, and mental health support, it creates an all-in-one ecosystem for academic success.

## ✨ Features

### 🤖 AI-Powered Tools
- **AI Assistant** - Get instant, contextual help with your studies powered by Google Gemini/OpenAI
- **AI Quiz Generator** - Automatically generate quizzes from your study materials
- **Exam Analyzer** - Analyze past exams and get insights on improvement areas
- **Voice Notes** - Convert voice to text for quick note-taking
- **Handwriting to Digital** - Transform handwritten notes into searchable digital text

### 📚 Study Enhancement
- **Smart Flashcards** - Spaced repetition algorithm for optimal memory retention
- **Study Room** - Virtual study spaces with collaborative features
  - Pomodoro Timer with customizable intervals
  - Task List management
  - Ambient Sounds (rain, cafe, white noise)
  - Study Statistics tracking
  - Distraction Blocker
- **Focus Mode** - Distraction-free environment for deep work
- **YouTube Study Integration** - Learn from curated educational content
- **3D Visualizations** - Interactive 3D models for complex concepts

### 📊 Progress Tracking
- **Dashboard** - Comprehensive analytics and insights
  - Quick Stats Bar
  - Progress Charts (daily, weekly, monthly)
  - Study Streak tracking
  - Achievements & Badges
  - Personalized Recommendations
- **Challenge Mode** - Compete with yourself and others
- **Smart Schedule** - AI-generated study plans based on your goals

### 🧠 Wellness Support
- **Mental Health Module** - Track your emotional well-being
- **Smart Reminders** - Never miss a study session or deadline
- **Study Spotify** - Curated playlists for focused studying

### 🎨 Modern UI/UX
- **Dark/Light Mode** - Toggle between themes for eye comfort
- **Responsive Design** - Seamless experience across all devices
- **Beautiful Animations** - Smooth transitions and interactions
- **Accessibility First** - Built with inclusivity in mind

## 🚀 Demo

> Add screenshots or GIF demos here to showcase your application

```bash
# Live Demo (if deployed)
# https://your-app-url.com
```

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - UI Library
- **Vite 7.2.4** - Build tool and dev server
- **React Router DOM 7.12.0** - Client-side routing
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Recharts** - Data visualization

### Backend & Services
- **Supabase** - Authentication, Database, and Storage
- **TanStack Query** - Data fetching and caching
- **Google Gemini API** - AI capabilities (optional)
- **OpenAI API** - Alternative AI provider (optional)

### Developer Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- Git
- A Supabase account (free tier available)

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/chattrobondhu-2.0.git
cd chattrobondhu-2.0
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Configure Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Add your configuration:

```env
# Supabase Configuration (Required)
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# AI Provider (Optional - Choose one)
VITE_AI_PROVIDER=gemini  # Options: gemini, openai, groq
VITE_GEMINI_API_KEY=your_gemini_api_key  # Free from https://makersuite.google.com
# VITE_OPENAI_API_KEY=your_openai_api_key
# VITE_GROQ_API_KEY=your_groq_api_key
```

> 📘 **See [AI_SETUP.md](AI_SETUP.md) for detailed AI integration instructions**

### Step 4: Set Up Supabase

1. Create a new project at [Supabase](https://supabase.com)
2. Copy your project URL and anon key to `.env`
3. Run the database migrations (if provided in `/supabase` folder)

### Step 5: Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to see your app! 🎉

### Step 6: Build for Production

```bash
npm run build
npm run preview  # Preview production build locally
```

## 📁 Project Structure

```
chattrobondhu-2.0/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Reusable components
│   │   ├── dashboard/  # Dashboard-specific components
│   │   ├── study-room/ # Study room features
│   │   └── ui/         # UI primitives (buttons, cards, etc.)
│   ├── contexts/       # React Context providers
│   ├── hooks/          # Custom React hooks
│   ├── integrations/   # Third-party integrations
│   │   └── supabase/   # Supabase client and types
│   ├── lib/            # Utility functions and services
│   ├── pages/          # Route pages/views
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── .env                # Environment variables (create this)
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── tailwind.config.js  # Tailwind CSS configuration
```

## 🔑 Key Components

### Authentication
```jsx
// Protected routes using AuthContext
import { AuthContext } from './contexts/AuthContext';
```

### AI Service
```jsx
// AI integration abstraction
import { aiService } from './lib/aiService';
```

### Supabase Client
```jsx
// Database and auth client
import { supabase } from './integrations/supabase/client';
```

## 🎯 Usage Examples

### Creating a Study Session

```jsx
import { PomodoroTimer } from './components/study-room/PomodoroTimer';

<PomodoroTimer 
  focusTime={25} 
  breakTime={5}
  onSessionComplete={(stats) => console.log(stats)}
/>
```

### Using AI Assistant

```jsx
import { aiService } from './lib/aiService';

const response = await aiService.chat({
  message: "Explain photosynthesis",
  context: "biology"
});
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Deploy to Netlify

```bash
# Build command
npm run build

# Publish directory
dist
```

### Deploy to Other Platforms
- **Render** - Static site deployment
- **Firebase Hosting** - Google's hosting solution
- **GitHub Pages** - Free hosting for static sites

## 🔐 Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `VITE_SUPABASE_URL` | Your Supabase project URL | ✅ Yes | - |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous key | ✅ Yes | - |
| `VITE_AI_PROVIDER` | AI provider (gemini/openai/groq) | ❌ No | `gemini` |
| `VITE_GEMINI_API_KEY` | Google Gemini API key | ❌ No | - |
| `VITE_OPENAI_API_KEY` | OpenAI API key | ❌ No | - |
| `VITE_GROQ_API_KEY` | Groq API key | ❌ No | - |

## 🧪 Testing

```bash
# Run tests (when configured)
npm test

# Run linting
npm run lint
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation as needed
- Test your changes thoroughly

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- [Shadcn/ui](https://ui.shadcn.com/) - UI component inspiration
- [Lucide Icons](https://lucide.dev/) - Beautiful icon set
- [Supabase](https://supabase.com/) - Backend infrastructure
- [Google Gemini](https://ai.google.dev/) - AI capabilities

## 📞 Support

- 📧 Email: support@chattrobondhu.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/chattrobondhu-2.0/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/yourusername/chattrobondhu-2.0/discussions)

## 🗺️ Roadmap

- [ ] Mobile app (React Native)
- [ ] Offline mode support
- [ ] Real-time collaborative study rooms
- [ ] Advanced analytics dashboard
- [ ] Integration with Google Calendar
- [ ] Multi-language support
- [ ] Browser extension for quick notes

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/chattrobondhu-2.0?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/chattrobondhu-2.0?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/chattrobondhu-2.0)
![GitHub pull requests](https://img.shields.io/github/issues-pr/yourusername/chattrobondhu-2.0)

---

<div align="center">

**Made with ❤️ by the ChhatroBondhu Team**

⭐ Star this repo if you find it helpful!

[Report Bug](https://github.com/yourusername/chattrobondhu-2.0/issues) • [Request Feature](https://github.com/yourusername/chattrobondhu-2.0/issues)

</div>

