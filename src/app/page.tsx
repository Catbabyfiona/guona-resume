"use client";

import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Globe, ExternalLink, Calendar, ChevronDown } from "lucide-react";

// 简历数据 - 请根据实际情况修改
const resumeData = {
  name: "陈思远",
  title: "资深前端工程师",
  tagline: "Crafting Digital Experiences",
  location: "北京市朝阳区",
  email: "siyuan.chen@example.com",
  phone: "+86 138-0000-1234",
  github: "github.com/siyuanchen",
  linkedin: "linkedin.com/in/siyuanchen",
  website: "siyuanchen.dev",
  summary: "8年前端开发经验，专注于现代Web技术栈。曾主导多个大型项目的架构设计，在性能优化、团队协作和技术创新方面有丰富实践经验。热爱技术，追求代码之美，致力于打造优雅且高效的用户体验。",
  skills: [
    { category: "Frontend", items: ["React/Next.js", "Vue/ Nuxt", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "Redis"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "CI/CD"] }
  ],
  experience: [
    {
      company: "字节跳动",
      position: "高级前端工程师",
      period: "2021.03 - 至今",
      description: "负责抖音创作者平台前端架构设计与开发，优化首屏加载性能提升40%。主导前端工程化改造，建立组件库和开发规范，服务团队10+开发者。",
      highlights: ["首屏性能优化", "前端架构设计", "工程化改造", "组件库建设"]
    },
    {
      company: "阿里巴巴",
      position: "前端工程师",
      period: "2018.07 - 2021.02",
      description: "参与淘宝商家后台系统开发，负责订单管理和数据分析模块。实现复杂交互需求，优化列表渲染性能，支持千万级数据展示。",
      highlights: ["复杂交互开发", "性能优化", "数据可视化"]
    },
    {
      company: "创业公司",
      position: "全栈工程师",
      period: "2016.07 - 2018.06",
      description: "从0到1搭建公司核心产品，独立完成前端和后端开发。快速迭代交付，支撑产品从0到100万用户增长。",
      highlights: ["全栈开发", "产品从0到1", "用户增长"]
    }
  ],
  projects: [
    {
      name: "React Component Library",
      description: "一套企业级React组件库，包含50+高质量组件，支持主题定制和按需加载。",
      tech: ["React", "TypeScript", "Storybook", "Rollup"],
      link: "#"
    },
    {
      name: "Data Visualization Dashboard",
      description: "实时数据可视化平台，支持多种图表类型和数据源接入，日均PV超过50万。",
      tech: ["Next.js", "D3.js", "WebSocket", "PostgreSQL"],
      link: "#"
    },
    {
      name: "Performance Monitor",
      description: "前端性能监控系统，实时追踪页面性能指标，自动预警异常情况。",
      tech: ["Node.js", "Redis", "React", "Web Vitals"],
      link: "#"
    }
  ],
  education: [
    {
      school: "北京理工大学",
      degree: "计算机科学与技术 · 硕士",
      period: "2013.09 - 2016.06",
      description: "研究方向：Web前端性能优化，发表相关学术论文2篇"
    },
    {
      school: "北京邮电大学",
      degree: "计算机科学与技术 · 学士",
      period: "2009.09 - 2013.06",
      description: "ACM-ICPC区域赛铜奖，校程序设计竞赛冠军"
    }
  ],
  certifications: ["AWS Certified Developer", "Google Analytics Certified"]
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-2">
      {children}
    </h2>
  );
}

function SectionDivider() {
  return <div className="w-12 h-px bg-[var(--gold)] mt-4 mb-8" />;
}

function TimelineItem({ 
  company, 
  position, 
  period, 
  description, 
  highlights 
}: { 
  company: string; 
  position: string; 
  period: string; 
  description: string; 
  highlights: string[];
}) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[var(--gold)]" />
      <div className="absolute left-[7px] top-4 w-px h-full bg-border -z-10 last:hidden" />
      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
        <h3 className="font-medium text-lg">{company}</h3>
        <span className="text-sm text-muted-foreground">{period}</span>
      </div>
      <p className="text-[var(--gold)] text-sm mb-3">{position}</p>
      <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {highlights.map((item, i) => (
          <span 
            key={i} 
            className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="inline-block px-4 py-2 text-sm rounded-sm bg-secondary hover:bg-accent transition-colors cursor-default">
      {skill}
    </span>
  );
}

function ProjectCard({ name, description, tech, link }: { name: string; description: string; tech: string[]; link: string }) {
  return (
    <div className="group p-6 rounded-lg border border-border bg-card hover:border-[var(--gold)] transition-all duration-300">
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-medium text-lg group-hover:text-[var(--gold)] transition-colors">{name}</h4>
        <a 
          href={link} 
          className="opacity-0 group-hover:opacity-100 transition-opacity"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-[var(--gold)]" />
        </a>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <span key={i} className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground font-mono">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function EducationCard({ school, degree, period, description }: { school: string; degree: string; period: string; description: string }) {
  return (
    <div className="border-l-2 border-[var(--gold)] pl-6">
      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
        <h4 className="font-medium">{school}</h4>
        <span className="text-sm text-muted-foreground">{period}</span>
      </div>
      <p className="text-[var(--gold)] text-sm mb-2">{degree}</p>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}

export default function ResumePage() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setMounted(true);
    
    // 滚动渐入效果
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 100;
        
        if (elementTop < windowHeight - revealPoint) {
          el.classList.add("visible");
        }
      });

      // 更新活跃区域
      const sections = ["about", "experience", "skills", "projects", "education", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初始检查
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-serif text-lg font-medium">{resumeData.name}</span>
          <div className="hidden md:flex items-center gap-8">
            {["about", "experience", "skills", "projects", "education", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm capitalize transition-colors ${
                  activeSection === item 
                    ? "text-[var(--gold)]" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item === "about" ? "关于" : item === "experience" ? "经历" : item === "skills" ? "技能" : item === "projects" ? "项目" : item === "education" ? "教育" : "联系"}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero 区域 */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[var(--gold)]/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[var(--gold)]/3 blur-3xl" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="animate-fade-in mb-6">
            <p className="text-sm tracking-[0.3em] uppercase text-[var(--gold)] mb-4">
              {resumeData.tagline}
            </p>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 animate-fade-in-up">
            {resumeData.name}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up delay-200">
            {resumeData.title}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-12 animate-fade-in-up delay-300">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {resumeData.location}
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground self-center" />
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              {resumeData.email}
            </span>
          </div>
          <button 
            onClick={() => scrollToSection("about")}
            className="animate-fade-in-up delay-400 animate-bounce"
          >
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </button>
        </div>
      </header>

      {/* 关于我 */}
      <section id="about" className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <SectionTitle>关于我</SectionTitle>
            <SectionDivider />
          </div>
          <p className="reveal delay-100 text-lg md:text-xl leading-relaxed text-muted-foreground">
            {resumeData.summary}
          </p>
          <div className="reveal delay-200 mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="font-serif text-4xl font-medium text-[var(--gold)]">8+</p>
              <p className="text-sm text-muted-foreground mt-1">年经验</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl font-medium text-[var(--gold)]">50+</p>
              <p className="text-sm text-muted-foreground mt-1">项目</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl font-medium text-[var(--gold)]">10+</p>
              <p className="text-sm text-muted-foreground mt-1">团队成员</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl font-medium text-[var(--gold)]">3</p>
              <p className="text-sm text-muted-foreground mt-1">公司</p>
            </div>
          </div>
        </div>
      </section>

      {/* 工作经历 */}
      <section id="experience" className="py-24 md:py-32 px-6 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <SectionTitle>工作经历</SectionTitle>
            <SectionDivider />
          </div>
          <div className="reveal delay-100">
            {resumeData.experience.map((exp, index) => (
              <TimelineItem key={index} {...exp} />
            ))}
          </div>
        </div>
      </section>

      {/* 技能 */}
      <section id="skills" className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <SectionTitle>专业技能</SectionTitle>
            <SectionDivider />
          </div>
          <div className="reveal delay-100 space-y-10">
            {resumeData.skills.map((group, index) => (
              <div key={index}>
                <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((skill, i) => (
                    <SkillBadge key={i} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="reveal delay-200 mt-12">
            <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
              认证资质
            </h4>
            <div className="flex flex-wrap gap-3">
              {resumeData.certifications.map((cert, i) => (
                <span 
                  key={i} 
                  className="text-sm px-4 py-2 rounded-sm border border-[var(--gold)] text-[var(--gold)]"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 项目展示 */}
      <section id="projects" className="py-24 md:py-32 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <SectionTitle>精选项目</SectionTitle>
            <SectionDivider />
          </div>
          <div className="reveal delay-100 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumeData.projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* 教育背景 */}
      <section id="education" className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <SectionTitle>教育背景</SectionTitle>
            <SectionDivider />
          </div>
          <div className="reveal delay-100 space-y-10">
            {resumeData.education.map((edu, index) => (
              <EducationCard key={index} {...edu} />
            ))}
          </div>
        </div>
      </section>

      {/* 联系方式 */}
      <section id="contact" className="py-24 md:py-32 px-6 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <div className="reveal">
            <p className="text-sm tracking-[0.3em] uppercase text-[var(--gold-light)] mb-4">
              联系方式
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-8">
              开启合作
            </h2>
          </div>
          <p className="reveal delay-100 text-lg text-gray-400 mb-12">
            感谢您的关注，期待与您交流
          </p>
          <div className="reveal delay-200 flex flex-wrap justify-center gap-6 mb-12">
            <a 
              href={`mailto:${resumeData.email}`}
              className="flex items-center gap-2 text-lg hover:text-[var(--gold-light)] transition-colors"
            >
              <Mail className="w-5 h-5" />
              {resumeData.email}
            </a>
            <a 
              href={`tel:${resumeData.phone}`}
              className="flex items-center gap-2 text-lg hover:text-[var(--gold-light)] transition-colors"
            >
              <Phone className="w-5 h-5" />
              {resumeData.phone}
            </a>
          </div>
          <div className="reveal delay-300 flex justify-center gap-6">
            <a 
              href={`https://${resumeData.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-gray-700 hover:border-[var(--gold-light)] hover:text-[var(--gold-light)] transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href={`https://${resumeData.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-gray-700 hover:border-[var(--gold-light)] hover:text-[var(--gold-light)] transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href={`https://${resumeData.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-gray-700 hover:border-[var(--gold-light)] hover:text-[var(--gold-light)] transition-all"
            >
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>Designed & Built by {resumeData.name}</p>
          <p className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
