# Tonći Kučić — Strategic Engineering Executive Portfolio

[![React](https://img.shields.io/badge/React-18.x-61dafb?logo=react)](https://reactjs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer--Motion-12.x-ff69b4?logo=framer)](https://www.framer.com/motion/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind--CSS-3.x-38b2ac?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Private-lightgrey.svg)](#)

A world-class, high-performance digital portfolio designed for the C-Suite. This project represents the intersection of **Deep Technical Architecture** and **Executive Business Strategy**, serving as both a professional brand platform and an automated document generation engine.

---

## 🏛 Project Philosophy & Representation

This repository is more than a personal website; it is a **Digital Executive Identity System**. It is engineered to communicate high-trust, data-driven leadership to Fortune 500 CEOs, Board Members, and Investors.

### Core Objectives:
*   **Authority Positioning:** Establishing domain expertise in Telecommunications, iGaming, Life Sciences, and Smart Cities.
*   **Performance as Branding:** Utilizing hardware-accelerated animations and optimized assets to demonstrate technical rigor.
*   **Multi-Channel Consistency:** Ensuring the professional narrative is identical across the web profile and physical resume documents.

---

## 📂 Project Structure

The project follows a modular architecture designed for high maintainability and lean performance.

```text
├── public/                # Static assets & metadata
│   ├── images/            # Optimized WebM/PNG industry visual assets
│   ├── favicon.svg        # Custom brand amber monogram
│   └── manifest.json      # PWA metadata
├── resume/                # Resume Logic Hub (Automation)
│   ├── generate_resume.py # Python-based DOCX generator
│   ├── RESUME.md          # Content "Source of Truth"
│   └── *.docx             # Generated professional assets
├── src/                   
│   ├── components/        # Functional UI split by Layout, Sections, and Atomic UI
│   ├── data/              # The "Central Brain" - all content lives here
│   ├── constants/         # Shared animation & brand tokens
│   └── index.css          # Global Design System (Tailwind layers)
```

---

## 📄 The Resume Pipeline (Dual-Output Logic)

A unique feature of this project is the **Resume Automation Hub** located in `/resume`. This logic ensures that your professional document is never out of sync with your live website.

### How it works:
1.  **Source of Truth:** All professional data lives in `src/data/experiences.js` for the website.
2.  **Logic Synchronization:** The `resume/generate_resume.py` script contains the formal executive styling for document output.
3.  **One-Command Generation:**
    ```bash
    # From the project root:
    python3 resume/generate_resume.py
    ```
    This script outputs a high-class **.docx** file formatted specifically for executive recruiters and board-level reviewers, including specialized focus on Global Team Leadership and Cross-Domain Strategy.

---

## ⚡ Technical Infrastructure

Built on a modern, future-proof stack optimized for Core Web Vitals and smooth interaction.

*   **React 18:** Functional component architecture with defensive state management.
*   **Framer Motion:** Used for the cinematic "Industrial Footprint" background and scroll-linked parallax effects.
*   **Tailwind CSS:** A utility-first CSS implementation using custom layers for **Glassmorphism** and **Executive Dark Mode**.
*   **Lucide React:** Consistent, high-fidelity iconography.
*   **Performance Optimization:**
    *   **iOS Flicker Mitigation:** Explicit GPU acceleration hints for Safari.
    *   **Lazy Loading:** Native browser-level lazy loading for industrial image assets.
    *   **WebM Animation:** Replacing heavy GIFs with high-bitrate, low-weight video containers.

---

## 🎨 Design Approach: "The Executive Aesthetic"

The design DNA is inspired by premium fintech and automotive interfaces.

1.  **Brand Amber (#fbbf24):** Used as a surgical accent color against a primary **Deep Black (#000000)** canvas to represent high-value data and precision.
2.  **Executive Glassmorphism:** Strategic use of `backdrop-blur-xl` and `white/[0.03]` borders to create layers of depth and professional weight.
3.  **Typography:** 
    *   **Handwritten Script:** Used in the favicon and signature for a "signed" personal touch.
    *   **Manrope & Inter:** Clean, sans-serif fonts chosen for readability and modern corporate authority.

---

## 🚀 Getting Started

### Prerequisites:
*   Node.js (v16+)
*   Python 3 (for resume generation)
*   `python-docx` library (`pip install python-docx`)

### Local Development:
```bash
npm install
npm start
```

### Production Build:
```bash
npm run build
```

---

## 📝 License

This project and its content are private and intellectual property of **Tonći Kučić**.
