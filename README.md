# AI Career Nexus - Setup & Installation Guide

## 📋 Prerequisites

- Node.js 18+ and npm/yarn
- Modern web browser (Chrome, Firefox, Edge, Safari)
- Git (optional)

## 🚀 Quick Start

### 1. Install Dependencies

```powershell
npm install
```

### 2. Start Development Server

```powershell
npm run dev
```

The application will be available at `http://localhost:5173`

### 3. Build for Production

```powershell
npm run build
```

### 4. Preview Production Build

```powershell
npm run preview
```

## 📁 Project Structure

```
d:\HACKTHON\
├── src/
│   ├── pages/
│   │   ├── LandingPage.jsx      # Hero landing page
│   │   ├── Dashboard.jsx         # Main dashboard
│   │   ├── SkillMatcher.jsx      # Skill-to-Job matching
│   │   ├── ResumeAnalyzer.jsx    # Resume analysis
│   │   ├── AICoach.jsx           # AI interview coach
│   │   └── SkillGap.jsx          # Skill gap analytics
│   ├── App.jsx                   # Main app component
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── DESIGN_DOCUMENTATION.md

## 🎨 Features

### 1. Landing Page
- Futuristic hero section with 3D gradients
- Floating skill/job cards with animations
- AI-powered tagline
- "Start Career Test" CTA button
- 4 feature cards with micro-animations

### 2. Dashboard
- AI Career Score with radial gauge
- Animated skill wheel
- Progress tracking system
- Recommendations carousel
- Quick action cards
- Navigation to all 4 modules

### 3. Skill-to-Job Matching
- Dynamic skill input with AI suggestions
- Auto-suggestion chips
- Color-coded job match results
- Match percentage indicators (95%, 92%, etc.)
- Salary prediction bars
- Real-time job filtering

### 4. Resume Analyzer
- Drag-and-drop upload with glassmorphism
- AI scanning animation
- Resume score radial gauge (87/100)
- Detailed insights panel:
  - Strengths (4+ items)
  - Improvements (5+ items)
  - Missing keywords (8+ items)
- Category breakdowns (5 metrics)
- "Generate Better Resume" CTA

### 5. AI Career Chatbot & Interview Coach
- 4 interview modes:
  - Behavioral Interview
  - Technical Interview
  - Mock Interview
  - Career Chat
- Voice input capability (mic button)
- Real-time feedback indicators:
  - Tone analysis
  - Clarity score
  - Confidence level
  - Response structure
- AI behavior analysis on responses
- Session statistics

### 6. Skill Gap & Analytics
- Radar chart of skill strengths (6 skills)
- Weekly growth area chart
- Missing skills heatmap (8 skills):
  - Importance percentage
  - Difficulty level (Easy/Medium/Hard)
  - Time estimation
  - Category tags
- AI-recommended courses (3 courses):
  - Provider, duration, rating
  - Skills covered
  - Progress tracking
- Personalized roadmap timeline:
  - 5 learning milestones
  - Status tracking
  - Due dates

## 🎨 Design System

### Color Palette
- **Neon Blue**: #00D9FF
- **Neon Purple**: #B026FF
- **Neon Pink**: #FF006B
- **Neon Green**: #00FFB9
- **Neon Yellow**: #FFD600
- **Dark Backgrounds**: #0A0A0F → #2E2E40

### Animations
- Float: 6s infinite
- Pulse Slow: 4s infinite
- Glow: 3s infinite
- Shimmer: 2s infinite

### Components
- Glassmorphism cards
- Neon gradient buttons
- Floating UI elements
- 3D depth effects
- Micro-animations on hover

## 🔗 Navigation Flow

```
Landing Page (/)
    ↓
Dashboard (/dashboard)
    ├── Skill Matcher (/skill-matcher)
    ├── Resume Analyzer (/resume-analyzer)
    ├── AI Coach (/ai-coach)
    └── Skill Gap (/skill-gap)
```

## 📊 Data & Analytics

### Sample Data Included
- 50K+ career paths
- 98% AI accuracy
- 1M+ users
- AI Career Score: 92/100
- 24 skills mastered
- 156 learning hours
- 4 job matches with 85-95% match rates

## 🎯 Key Interactions

### Hover Effects
- Scale 1.05 on buttons
- Glow enhancement
- Card lift (5-10px)
- Border color transitions

### Click Effects
- Scale 0.95 tap feedback
- Ripple on glass elements
- Loading spinners
- Success animations

### Animations
- Page transitions: fade + slide
- Stagger animations on lists
- Chart data animations (2s)
- Floating card effects

## 🛠️ Customization

### Modify Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      neon: {
        blue: '#00D9FF',
        // Add your colors
      }
    }
  }
}
```

### Add New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in sidebar

### Adjust Animations
Modify `tailwind.config.js` keyframes section

## 📱 Responsive Design

- **Desktop**: Full layout with sidebar
- **Tablet**: Adjusted grids, smaller sidebar
- **Mobile**: Single column, drawer navigation

## 🎨 Unique Design Features

1. **Neon Gradient Theme**: Futuristic AI aesthetic
2. **Glassmorphism**: Modern frosted glass effects
3. **3D Depth**: Layered shadows and elevations
4. **Micro-animations**: Smooth, professional interactions
5. **Floating Elements**: Dynamic, engaging UI
6. **AI Visual Language**: Sparkles, brain icons, scanning effects

## 📚 Dependencies

### Core
- react: ^18.2.0
- react-dom: ^18.2.0
- react-router-dom: ^6.20.0

### UI & Animation
- framer-motion: ^10.16.0
- lucide-react: ^0.294.0

### Charts & Data
- recharts: ^2.10.0

### Utilities
- react-dropzone: ^14.2.3
- react-speech-recognition: ^3.10.0

### Development
- vite: ^5.0.8
- tailwindcss: ^3.3.6
- autoprefixer: ^10.4.16

## 🐛 Troubleshooting

### Port Already in Use
```powershell
# Change port in vite.config.js
server: { port: 3000 }
```

### Build Errors
```powershell
# Clear cache and reinstall
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

### Styling Issues
```powershell
# Rebuild Tailwind
npm run build
```

## 🚀 Deployment

### Netlify/Vercel
1. Connect repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Manual
1. Run `npm run build`
2. Upload `dist/` folder to hosting

## 📄 License

MIT License - Feel free to use for your projects!

## 🤝 Support

For issues or questions, refer to:
- Design Documentation: `DESIGN_DOCUMENTATION.md`
- Component examples in source files
- Tailwind CSS documentation
- Framer Motion documentation

---

**Version**: 1.0.0  
**Created**: December 12, 2025  
**Platform**: AI Career Nexus
# hackathon_project
