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
├── resume/                # Resume & Social Authority Hub
│   ├── generate_resume.py # Python-based Triple-Asset generator
│   ├── RESUME.md          # Content "Source of Truth"
│   ├── LINKEDIN_GUIDE.md  # Elite LinkedIn Profile Upgrade Guide
│   └── *.docx | *.pdf     # Generated professional assets
├── src/                   
│   ├── components/        # Functional UI split by Layout, Sections, and Atomic UI
│   ├── data/              # The "Central Brain" - all content lives here
│   ├── constants/         # Shared animation & brand tokens
│   └── index.css          # Global Design System (Tailwind layers)
```

---

## 📄 The Authority Pipeline (Triple-Output Automation)

A unique feature of this project is the **Brand Automation Hub** located in `/resume`. This logic ensures that your entire professional presence—Web, Document, and Social—is perfectly synchronized.

### How it works:
1.  **Source of Truth:** All professional data lives in your code/markdown as the primary origin.
2.  **Logic Synchronization:** The `resume/generate_resume.py` script contains the formal executive styling for document output and social guidelines.
3.  **One-Command Generation:**
    ```bash
    # From the project root:
    python3 resume/generate_resume.py
    ```
    This script outputs three high-class assets:
    *   **DOCX**: A pixel-perfect, navy-themed executive resume for recruiters.
    *   **PDF**: A board-level document ready for direct executive communication.
    *   **LinkedIn Guide**: A specific tactical guide for upgrading your social presence to match your elite brand.

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
    *   **Plus Jakarta Sans:** Used for headings to project premium corporate authority and handle Croatian diacritics with high fidelity.
    *   **Inter:** The gold standard for UI legibility, used for body text with optimized tracking for editorial readability.
    *   **Playfair Display:** Used sparingly for high-fidelity editorial accents.

---

## 🚀 Getting Started

### Prerequisites:
*   Node.js (v16+)
*   Python 3 (for asset generation)
*   Python Libraries: `pip install python-docx docx2pdf`
*   **Microsoft Word** (Required for high-fidelity PDF conversion on macOS)

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
