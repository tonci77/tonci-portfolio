from docx import Document
from docx.shared import Pt, RGBColor, Inches
from docx.enum.text import WD_ALIGN_PARAGRAPH
import os

def style_doc(doc):
    style = doc.styles['Normal']
    style.font.name = 'Arial'
    style.font.size = Pt(10)
    style.font.color.rgb = RGBColor(40, 40, 40)

def add_link(paragraph, url, text):
    from docx.oxml.shared import qn
    from docx.oxml import OxmlElement
    part = paragraph.part
    r_id = part.relate_to(url, 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink', is_external=True)
    hyperlink = OxmlElement('w:hyperlink')
    hyperlink.set(qn('r:id'), r_id)
    new_run = OxmlElement('w:r')
    rPr = OxmlElement('w:rPr')
    c = OxmlElement('w:color')
    c.set(qn('w:val'), '1A365D')
    rPr.append(c)
    u = OxmlElement('w:u')
    u.set(qn('w:val'), 'single')
    rPr.append(u)
    new_run.append(rPr)
    t = OxmlElement('w:t')
    t.text = text
    new_run.append(t)
    hyperlink.append(new_run)
    paragraph._p.append(hyperlink)

def create_resume_docx(script_dir):
    doc = Document()
    style_doc(doc)

    sections = doc.sections
    for section in sections:
        section.top_margin = Inches(0.4)
        section.bottom_margin = Inches(0.4)
        section.left_margin = Inches(0.6)
        section.right_margin = Inches(0.6)

    # --- HEADER ---
    header = doc.add_paragraph()
    header.alignment = WD_ALIGN_PARAGRAPH.CENTER
    
    name = header.add_run("TONĆI KUČIĆ")
    name.bold = True
    name.font.size = Pt(26)
    name.font.color.rgb = RGBColor(26, 54, 93)
    header.add_run("\n")
    
    tagline = header.add_run("Executive Technology Leader | Board Member | Co-author")
    tagline.bold = True
    tagline.font.size = Pt(13)
    tagline.font.color.rgb = RGBColor(30, 30, 30)
    header.add_run("\n")
    
    contact = header.add_run("Split, Croatia | 003598323033 | tonci.kucic@gmail.com")
    contact.font.size = Pt(10)
    header.add_run("\n")
    
    links_p = doc.add_paragraph()
    links_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    add_link(links_p, "https://linkedin.com/in/toncikucic", "linkedin.com/in/toncikucic")
    links_p.add_run("  •  ")
    add_link(links_p, "https://tonci77.github.io/tonci-portfolio/", "tonci77.github.io/tonci-portfolio")

    # --- VALUE PROPOSITION ---
    h1 = doc.add_heading('EXECUTIVE PROFILE', level=1)
    h1.runs[0].font.color.rgb = RGBColor(26, 54, 93)
    
    doc.add_paragraph(
        "Strategic Engineering Executive with over 20 years of experience delivering high-stakes digital transformation "
        "and scaling high-performance organizations. Differentiated by a unique synthesis of deep architectural "
        "mastery, organizational psychology, and boardroom governance. Expert in managing large-scale global "
        "engineering teams (40+) and high-availability BSS/OSS systems in ultra-regulated industries including "
        "iGaming, Telecom, and Life Sciences."
    )

    # --- CORE STRENGTHS & DIFFERENTIATORS ---
    h2 = doc.add_heading('STRATEGIC DIFFERENTIATORS', level=1)
    h2.runs[0].font.color.rgb = RGBColor(26, 54, 93)
    
    diffs = [
        "Human Capital Architecture: Applying organizational psychology frameworks (Shark/Whale/Turtle personas) to scale high-performance cultures and retain top 1% talent.",
        "Precision in Regulation: Veteran lead for Tier-1 operators in mission-critical environments (Telecom/iGaming) where downtime and compliance failure are not options.",
        "Business-First Tech Strategy: Proven ability to translate complex R&D roadmaps into board-level value, P&L optimization, and M&A technical due diligence.",
        "End-to-End System Legacy: From greenfield Solution Architecture for Tier-1 Telcos to leading global engineering for multi-vertical iGaming platforms."
    ]
    
    for d in diffs:
        p = doc.add_paragraph(style='List Bullet')
        p.add_run(d)

    # --- PROFESSIONAL EXPERIENCE ---
    h3 = doc.add_heading('PROFESSIONAL EXPERIENCE', level=1)
    h3.runs[0].font.color.rgb = RGBColor(26, 54, 93)

    jobs = [
        {
            "title": "Head of Engineering",
            "company": "Casumo (Tier-1 iGaming)",
            "dates": "2024 – Present",
            "desc": "Orchestrating engineering strategy for a global multi-vertical platform. Leading 40+ engineers across Casino, Payments, and Sports. Driving platform resilience and engineering culture using advanced organizational psychology frameworks to ensure high-engagement and technical excellence."
        },
        {
            "title": "Engineering Manager / Team Lead",
            "company": "Studion",
            "dates": "2022 – 2024",
            "desc": "Scalability Architect for a 30+ member engineering organization. Established the Engineering Academy—a benchmark for talent development and internal branding—and implemented rigid engineering standards for distributed teams."
        },
        {
            "title": "Supervisory Board Member",
            "company": "Parkovi i Nasadi d.o.o.",
            "dates": "2023 – 2025",
            "desc": "Providing high-level governance and strategic advisory on multi-million euro digital infrastructure projects and organizational transformation for green management systems."
        },
        {
            "title": "Principal Consultant",
            "company": "TONCIK Consulting & Solutions",
            "dates": "2020 – 2025",
            "desc": "Delivering strategic enterprise architecture for Life Sciences (Clinical Trials), Smart City Digitalization, and Intelligent Transportation Systems (ITS) to public and private sector clients."
        },
        {
            "title": "Solution Architect",
            "company": "Hrvatski Telekom",
            "dates": "2020 – 2022",
            "desc": "Lead Architect for greenfield R&D R&D Innovation. Engineered enterprise-scale Product Catalog and Order Capture platforms for Croatia's Tier-1 Telecom provider."
        },
        {
            "title": "Engineering Team Lead",
            "company": "Fortuna Entertainment Group",
            "dates": "2018 – 2020",
            "desc": "Managed engineering delivery for high-load virtual sports platforms across Central Europe. Focused on horizontal scalability, high-availability architecture, and rapid feature velocity."
        },
        {
            "title": "Senior Solution Architect / Lead Developer",
            "company": "Kron d.o.o. (Telecom BSS/OSS)",
            "dates": "2004 – 2018",
            "desc": "14-year progressive leadership role. Designed and integrated mission-critical BSS/OSS systems for Tier-1 Telecom operators. Orchestrated complex system integrations for major telco providers across Southeast Europe."
        }
    ]

    for job in jobs:
        p = doc.add_paragraph()
        p.add_run(f"{job['title']} ").bold = True
        p.add_run(f"| {job['company']}").font.color.rgb = RGBColor(100, 100, 100)
        run = p.add_run(f"\t\t{job['dates']}")
        run.italic = True
        doc.add_paragraph(job['desc']).paragraph_format.space_after = Pt(8)

    # --- TECHNICAL ---
    h4 = doc.add_heading('TECHNICAL & ARCHITECTURAL ECOSYSTEM', level=1)
    h4.runs[0].font.color.rgb = RGBColor(26, 54, 93)
    techs = [
        "Enterprise Architecture: Microservices, Event-Driven, DDD, SOA, System Integration, High-Availability Design.",
        "Cloud & Platform: AWS, GCP, Kubernetes, Docker, Infrastructure as Code (IaC), CI/CD, ELK, Grafana.",
        "Data & Messaging: Apache Kafka, RabbitMQ, PostgreSQL, Oracle, MongoDB, Redis, High-Load Data Management.",
        "Ecosystems: Java/Spring Boot, .NET Core, Python, Node.js, React, Angular."
    ]
    for t in techs:
        doc.add_paragraph(t, style='List Bullet')

    # --- THOUGHT LEADERSHIP ---
    h5 = doc.add_heading('THOUGHT LEADERSHIP & PUBLICATIONS', level=1)
    h5.runs[0].font.color.rgb = RGBColor(26, 54, 93)
    p_pub = doc.add_paragraph()
    p_pub.add_run("Co-author of 'Peak Performance: Mindset & Tools for Managers'").bold = True
    p_pub.add_run("\nA world-class strategic guide to scaling high-performance engineering culture via organizational psychology. ")
    add_link(p_pub, "https://www.amazon.com/Peak-Performance-Mindset-Tools-Managers-ebook/dp/B0DKTV2WBT", "[Purchase Link]")

    docx_path = os.path.join(script_dir, "Tonci_Kucic_Executive_Resume.docx")
    doc.save(docx_path)
    print(f"Resume generated at: {docx_path}")
    return docx_path

def generate_linkedin_guide(script_dir):
    guide_path = os.path.join(script_dir, "LINKEDIN_GUIDE.md")
    content = """# 🚀 LinkedIn Elite Profile Upgrade Guide: Tonći Kučić

This guide is automatically synchronized with your latest Executive Resume data. Use these sections to transform your LinkedIn profile into a **C-Level Authority Hub**.

---

## 1. The "Power Headline" (The Hook)
*Copy and paste this into your LinkedIn Headline:*

**Head of Engineering at Casumo | Strategic Technology Executive | Board Member | Co-author of 'Peak Performance' | Scaling High-Performance Cultures through Organizational Psychology**

---

## 2. The "About" Section (The Narrative)
*Use this for your Summary section to bridge technical rigor with boardroom value:*

Engineering Executive with 20+ years of experience delivering mission-critical technology solutions and leading global organizational transformations. I specialize in bridging the gap between complex engineering roadmaps and boardroom-level business strategy.

**Differentiators:**
- **The Psychologist of Scale:** Applying organizational psychology frameworks (Shark/Whale/Turtle personas) to unlock elite performance in engineering cultures.
- **Precision in Regulation:** Veteran lead for Tier-1 operators in mission-critical environments (iGaming, Telecom, Life Sciences).
- **Capital Efficiency:** Proven track record in P&L management, M&A due diligence, and translating R&D into Product-Led Growth.

Co-author of **'Peak Performance: Mindset & Tools for Managers'**. Check out my digital ecosystem at: https://tonci77.github.io/tonci-portfolio/

---

## 3. Experience Optimization (Selective Impact)
*For your current role at Casumo:*

**Headline:** Head of Engineering
**Description:**
Directing engineering strategy for a Tier-1 global iGaming platform. Scaling 40+ engineers across Payments, Casino, and Sports verticals. 
- Integrated internal frameworks for engineering excellence.
- Architecting high-availability systems for global scale.
- Driving culture transformation using organizational psychology methodologies.

---

## 4. Featured Section (The "Halo Effect")
Add these as "Featured" items on your profile:
1. **Link:** Digital Portfolio (https://tonci77.github.io/tonci-portfolio/)
2. **Link:** Purchase 'Peak Performance' on Amazon (https://www.amazon.com/Peak-Performance-Mindset-Tools-Managers-ebook/dp/B0DKTV2WBT)
3. **Media:** Upload your latest PDF Resume (generated in this folder).

---

## 5. Skills & Endorsements
*Ensure these top 3 are pinned:*
1. **Technology Strategy**
2. **Organizational Psychology**
3. **Enterprise Architecture**

---

*Last Updated: 2026-01-28*
"""
    with open(guide_path, "w") as f:
        f.write(content)
    print(f"LinkedIn Guide generated at: {guide_path}")

if __name__ == "__main__":
    script_dir = os.path.dirname(os.path.abspath(__file__))
    
    # 1. Generate DOCX
    docx_path = create_resume_docx(script_dir)
    
    # 2. Generate PDF
    pdf_path = os.path.join(script_dir, "Tonci_Kucic_Executive_Resume.pdf")
    try:
        from docx2pdf import convert
        print("Converting to PDF (requires Microsoft Word to be open)...")
        convert(docx_path, pdf_path)
        print(f"PDF generated at: {pdf_path}")
    except Exception as e:
        print(f"\n[Note] PDF conversion skipped or failed: {e}")
        print("PDF conversion on Mac requires Microsoft Word to be installed.")
    
    # 3. Generate LinkedIn Guide
    generate_linkedin_guide(script_dir)
