<div align="center">

# ⚡ HALCYON

### Unified Student Dashboard

**Academic Intelligence · Productivity · Student Community**

A modern student-focused web platform designed to bring academics,
performance insights, productivity tools, and student interaction
into one unified interface.

<br>

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-HALCYON-0A84FF?style=for-the-badge)](https://halcyon-student-dashboard.vercel.app/)
[![Built With](https://img.shields.io/badge/Built_With-HTML%20%7C%20CSS%20%7C%20JavaScript-7B2FFF?style=for-the-badge)](#-technology-stack)
[![Status](https://img.shields.io/badge/Status-Working_Prototype-C026FF?style=for-the-badge)](#-project-status)

<br>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0A84FF,7B2FFF,C026FF&height=120&section=header"/>

</div>

---

## ✦ What is HALCYON?

**HALCYON** is a student-centric web dashboard that combines
academic information, performance analytics, productivity utilities,
personalization, and student community features into a single
modern interface.

Instead of treating attendance, CIE performance, timetable,
study planning, and productivity as separate experiences,
HALCYON brings them together into one student-facing dashboard.

> **One dashboard. Multiple aspects of student life.**

The current version is a **working frontend prototype** built using
HTML, CSS, and JavaScript with demonstration data.

---

# 🚀 Core Experience

<table>
<tr>
<td width="50%">

### 📊 Academic Intelligence

- Attendance overview
- CIE performance
- Subject analytics
- Performance trends
- Weak-area identification
- Timetable
- Faculty information

</td>

<td width="50%">

### ⚡ Productivity

- Pomodoro focus timer
- Focus sessions
- Break management
- Focus history
- Planner
- Notes
- Exam countdown

</td>
</tr>

<tr>
<td>

### 🎓 Academic Utilities

- SGPA Calculator
- What-if analysis
- Academic report
- Subject-wise calculations
- Performance visualization

</td>

<td>

### 👥 Student Community

- Study groups
- Student leaderboard
- Classmate search
- Student community
- Discussions
- Collaboration

</td>
</tr>
</table>

---

# ✨ Feature System

## 📈 Dashboard

A centralized overview of the student's academic state.

**Includes**

- Attendance summary
- CIE overview
- Subject statistics
- Academic goals
- Progress indicators
- Important information at a glance

---

## 🧠 Performance Analytics

HALCYON transforms academic numbers into visual information.

```text
Raw Data
   ↓
Processing
   ↓
Visualization
   ↓
Insight
   ↓
Action
```

Students can quickly identify:

- Attendance trends
- CIE performance
- Subjects requiring attention
- Overall academic patterns

---

## 🎓 Academic Tools

### SGPA Calculator

Users can enter:

```text
Subject
Credits
Marks
```

The application calculates the estimated SGPA using a
credit-weighted grade-point calculation.

### What-If Analysis

Students can experiment with different marks and understand
how potential results could affect their academic performance.

### Exam Countdown

A simple utility for tracking upcoming examinations.

---

# ⏱️ Productivity Layer

HALCYON isn't only designed to **show academic information**.

It also provides tools that help students **act on it**.

### Pomodoro Focus System

```text
┌───────────────┐
│   FOCUS       │
│    25:00      │
└───────┬───────┘
        ↓
┌───────────────┐
│     BREAK     │
│    05:00      │
└───────┬───────┘
        ↓
   Repeat Session
```

Features include:

- Focus timer
- Break timer
- Session tracking
- Focus history
- Productivity feedback

---

# 👤 Personalization

HALCYON provides a personalized student experience.

### Profile System

- Editable name
- Bio
- Avatar selection
- Persistent profile preferences
- Badges
- Progress information

User preferences are stored locally using the browser's
**LocalStorage API**.

---

# 👥 Social Hub

A student-oriented space for interaction and collaboration.

### Current features

```text
Study Groups
      │
      ├── AI Study Circle
      ├── Python Coders Club
      ├── Maths Doubt Solvers
      └── Chemistry Prep Squad

Leaderboard
      │
      └── Student Progress

Find Classmates
      │
      └── Search by name / USN / branch
```

HALCYON also includes an **unofficial RYMEC student community**
for discussions, collaboration, opportunities, and student interaction.

---

# 🎨 Interface

HALCYON follows a modern dashboard-oriented design language.

### Design principles

- Clean information hierarchy
- Responsive layouts
- Card-based interface
- Dark / Light theme
- Visual analytics
- Consistent spacing
- Interactive components
- Mobile-friendly design

### Visual Identity

```text
HALCYON PALETTE

#0A84FF  →  Orbit Blue
#7B2FFF  →  Orbit Purple
#C026FF  →  Orbit Pink
#111827  →  Orbit Dark
```

---

# 🛠️ Technology Stack

<div align="center">

| Technology | Role |
|---|---|
| **HTML5** | Application structure |
| **CSS3** | UI, layouts, themes & responsive design |
| **JavaScript** | Application logic & interactivity |
| **Chart.js** | Academic data visualization |
| **Font Awesome** | Interface icons |
| **Google Fonts** | Typography |
| **LocalStorage** | Client-side persistence |
| **Vercel** | Deployment |
| **GitHub** | Version control |

</div>

---

# 🧩 Architecture

HALCYON currently follows a lightweight client-side architecture.

```text
                    ┌─────────────────────┐
                    │      HALCYON UI     │
                    │      index.html     │
                    └──────────┬──────────┘
                               │
                    ┌──────────▼──────────┐
                    │        CSS          │
                    │     style.css       │
                    └──────────┬──────────┘
                               │
              ┌────────────────▼────────────────┐
              │          JavaScript             │
              │                                 │
              │  app.js     charts.js   data.js │
              └───────────────┬─────────────────┘
                              │
              ┌───────────────▼───────────────┐
              │        Browser Storage        │
              │          LocalStorage        │
              └──────────────────────────────┘
```

---

# 📁 Project Structure

```text
HALCYON/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   ├── charts.js
│   └── data.js
│
├── images/
│   ├── profile.jpg
│   ├── avatar-boy-1.jpeg
│   ├── avatar-boy-2.jpeg
│   ├── avatar-boy-3.jpeg
│   ├── avatar-girl-1.jpeg
│   ├── avatar-girl-2.jpeg
│   └── avatar-girl-3.jpeg
│
├── audio/
│   └── lofi-focus.mp3
│
└── README.md
```

---

# 🔐 Privacy & Data

### Privacy-first prototype

HALCYON's current prototype does **not require real student
academic data**.

> 🔒 **No student data is collected, stored, or used by this project.**

The current version uses demonstration data for the academic
dashboard.

Certain user preferences, such as profile information and selected
avatars, may be stored locally in the user's browser.

### Institutional Integration

Future integration with official college systems would require:

```text
Institutional Approval
        ↓
Approved Data Access
        ↓
Authentication
        ↓
Security Review
        ↓
Controlled Deployment
```

HALCYON does **not** directly scrape or access private institutional
student information.

---

# 🎯 Project Objectives

HALCYON was developed around several practical objectives:

### 01 — Simplify

Bring frequently used student utilities into one interface.

### 02 — Visualize

Make academic performance easier to understand through visual
analytics.

### 03 — Organize

Provide tools for planning, studying, and tracking progress.

### 04 — Personalize

Allow students to maintain their own profile and preferences.

### 05 — Connect

Provide student-oriented community and collaboration features.

---

# 🧪 Current Project Status

<div align="center">

### 🟢 WORKING PROTOTYPE

</div>

The current version is a functional frontend prototype.

It demonstrates the user experience, interface architecture,
interactive features, calculations, productivity utilities,
personalization, and student community concepts.

Academic information currently uses **demonstration data**.

---

# 🔮 Roadmap

### Phase 01 — Prototype

- [x] Dashboard
- [x] Academic overview
- [x] Attendance analytics
- [x] CIE analytics
- [x] Timetable
- [x] Faculty section
- [x] SGPA calculator
- [x] What-if analysis
- [x] Exam countdown
- [x] Pomodoro timer
- [x] Planner & notes
- [x] Profile system
- [x] Avatar system
- [x] Dark / Light mode
- [x] Social Hub
- [x] Student community

### Phase 02 — Institutional Integration

- [ ] Approved college data integration
- [ ] Secure authentication
- [ ] Backend services
- [ ] Real-time academic data
- [ ] Notifications
- [ ] College announcements

### Phase 03 — Platform Expansion

- [ ] Mobile application
- [ ] Advanced analytics
- [ ] Faculty feedback system
- [ ] Bus information
- [ ] Event management
- [ ] Expanded student collaboration

---

# 🌐 Live Demo

<div align="center">

### Try HALCYON

**https://halcyon-student-dashboard.vercel.app/**

</div>

---

# 📸 Screenshots

> Add your best dashboard screenshots here.

```text
docs/
├── dashboard.png
├── academics.png
├── analytics.png
├── tools.png
├── profile.png
└── social-hub.png
```

Example:

```markdown
![HALCYON Dashboard](docs/dashboard.png)
```

---

# 💡 Why HALCYON?

Most student platforms focus on displaying information.

HALCYON explores a different approach:

> **Information → Insight → Action**

A student shouldn't only see that attendance is low.

The interface should help the student understand the situation,
identify what needs attention, and provide tools that help them
take action.

---

# 👨‍💻 Developer

<div align="center">

### Viresh Ranjanagi

**Computer Science & Engineering**

RYMEC, Ballari

Student Developer

</div>

---

# 📜 Disclaimer

HALCYON is an independently developed student project and is
currently a demonstration prototype.

It is **not an official RYMEC application** and does not represent
the institution.

Any future institutional deployment, branding, data integration,
or access to college systems would require appropriate permission
and authorization from the institution.

---

<div align="center">

## ⚡ HALCYON

### *A simpler way to experience student life.*

Built with curiosity, code, and a lot of late-night debugging. ❤️

<br>

**HTML • CSS • JavaScript**

</div>
```
