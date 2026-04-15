"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Calendar, ChevronDown, Sparkles, FileText, Video, Cpu, ArrowRight } from "lucide-react";

// 简历数据 - 郭娜
const resumeData = {
  name: "郭娜",
  title: "品牌市场总监",
  tagline: "Brand Strategy & Marketing Director",
  location: "北京市",
  email: "755360966@qq.com",
  phone: "13120250250",
  summary: "15年品牌战略规划与企业综合管理经验，横跨文旅、科技、消费、投资等多行业，曾任上市筹备公司核心高管，具备从0到1构建品牌、团队与业务体系的实战能力。精通品牌整合营销、企业顶层设计、上市辅导与资本对接，擅长以市场为导向驱动企业增长。累计打造多个年销超千万/千万级中标额的标杆项目。",
  coreStrengths: [
    "品牌战略与整合营销",
    "企业战略与顶层设计", 
    "上市辅导与资本对接",
    "IP资产孵化与内容创新",
    "跨界整合与项目管理",
    "AI工具赋能效率提升"
  ],
  stats: [
    { value: "15+", label: "年经验" },
    { value: "6+", label: "家公司" },
    { value: "千万级", label: "标杆项目" },
    { value: "AI+", label: "效率提升" }
  ],
  experience: [
    {
      company: "北京分享时代科技股份有限公司",
      position: "品牌市场总监",
      period: "2022.01 — 至今",
      description: "主导集团品牌体系建设与整合营销策略，负责品牌定位、IP内容创意、传播策划与市场推广，推动品牌与业务深度融合。牵头整合集团多核心部门，制定年度品牌规划，对接资本市场，助力企业上市筹备。",
      highlights: ["上市筹备", "品牌体系", "IP孵化", "资本对接"]
    },
    {
      company: "北京互动时代网络技术有限公司",
      position: "市场品牌总监",
      period: "2021.03 — 2021.12",
      description: "主导品牌定位、视觉体系搭建与O2O商业模式研究，建立标准化品牌管理体系。通过社群运营与数据分析，提升平台用户粘性及转化效率。依托环球梦工场IP图库主导衍生品开发，实现IP商业化多元延展。",
      highlights: ["品牌定位", "社群运营", "IP商业化", "O2O模式"]
    },
    {
      company: "大洲新燕（北京）生物科技有限公司",
      position: "品牌市场总监",
      period: "2019.09 — 2021.02",
      description: "负责燕窝饮料、国潮好酒品牌全案体系建设与运营，开展商业模式研究，制定品牌各业务板块战略方案。策划执行大型品牌活动，打造社会热点事件，拉动品牌影响力与目标人群渗透。",
      highlights: ["品牌全案", "国潮文化", "热点事件", "渠道营销"]
    },
    {
      company: "北京莱鹏纳通文化传媒有限公司",
      position: "品牌战略负责人",
      period: "2015.11 — 2019.06",
      description: "聚焦农合农副产品发展战略，主导企业自有品牌IP孵化与品牌建设管理，协助拓展农副产品市场。搭建自媒体平台矩阵，制定社会化传播策略，实现品牌差异化竞争。",
      highlights: ["IP孵化", "自媒体矩阵", "扶贫项目", "内容营销"]
    },
    {
      company: "八零印象",
      position: "客户总监",
      period: "2013.08 — 2015.10",
      description: "负责项目前期与客户端沟通，制定营销规划和创意产出。快速诊断品牌问题，建立动态品牌模型，制定定位战略，为品牌占据细分行业第一地位提供品牌策划与设计服务。",
      highlights: ["品牌诊断", "整合营销", "策略咨询", "创意策划"]
    },
    {
      company: "北京灵智精锐整合营销顾问有限公司",
      position: "客户总监",
      period: "2009.09 — 2013.07",
      description: "对接客户需求，开展品牌、市场、竞争环境研究，制定整合营销规划与创意推广方案。为蒙牛、宝洁、中粮等TOP级品牌提供全年整合营销服务，落地新品上市、线下巡展等活动。",
      highlights: ["整合营销", "品牌策略", "活动执行", "客户管理"]
    }
  ],
  education: [
    {
      school: "对外经济贸易大学",
      degree: "本科 · 2005 — 2009",
      description: ""
    }
  ],
  skills: {
    "核心能力": ["品牌战略与整合营销", "企业战略与顶层设计", "上市辅导与资本对接", "IP资产孵化与内容创新"],
    "专业技能": ["品牌定位与重塑", "整合营销策划", "IP孵化运营", "危机公关处理", "团队建设管理"],
    "AI工具应用": ["AI生成文案策划", "AI图像创作", "AI视频制作", "AI数据分析", "AI效率工具链"],
    "工具技能": ["PPT / Word / Excel", "品牌数据分析", "项目管理", "预算管理"]
  },
  portfolio: [
    {
      title: "AI创意短片",
      subtitle: "吉卜力猫咪田园",
      description: "运用AI视频生成工具创作的品牌创意短片，展示田园猫咪治愈风格，应用于品牌内容营销与社交媒体传播。",
      type: "video",
      tags: ["AI视频", "创意内容", "品牌传播"],
      link: "https://pan.baidu.com/s/1g08QbFMHsTPghSX57pDFTw",
      pwd: "23mz"
    },
    {
      title: "品牌战略规划",
      subtitle: "小河狸创客战略规划方案",
      description: "科技教育品牌全案战略规划，涵盖品牌定位、市场分析、传播策略与执行方案。",
      type: "document",
      tags: ["品牌战略", "全案策划", "教育科技"],
      link: "https://pan.baidu.com/s/1bsrXmeoiNdSL3MAnpmdgRA",
      pwd: "kbey"
    },
    {
      title: "年度品牌营销",
      subtitle: "阖家燕年度线上品牌市场营销策划",
      description: "燕窝品牌全年线上营销规划，整合电商、社交媒体、KOL合作等多渠道资源。",
      type: "document",
      tags: ["品牌营销", "电商运营", "KOL合作"],
      link: "https://pan.baidu.com/s/18342pdw9JiqH-euoplLprw",
      pwd: "hihy"
    },
    {
      title: "整合营销专案",
      subtitle: "出口小方瓶整合营销专案",
      description: "白酒品牌整合营销方案，包含品牌定位、创意策划、媒介投放与效果评估。",
      type: "document",
      tags: ["整合营销", "白酒品牌", "创意策划"],
      link: "https://pan.baidu.com/s/1F6HFZXjRJhwLQ_rz9arzeQ",
      pwd: "e6sq"
    },
    {
      title: "节庆活动策划",
      subtitle: "二十四节气美食嘉年华策划方案",
      description: "结合二十四节气传统文化的大型美食活动策划，线上线下联动传播。",
      type: "document",
      tags: ["活动策划", "传统文化", "节庆营销"],
      link: "https://pan.baidu.com/s/1ou7FAyBhW5aIsPOqVh7thg",
      pwd: "3mfh"
    },
    {
      title: "数字文化项目",
      subtitle: "中华瑰宝数字文化节项目规划方案",
      description: "数字文化IP项目整体规划，融合传统文化与现代科技，打造数字文化新体验。",
      type: "document",
      tags: ["数字文化", "IP打造", "文化创新"],
      link: "https://pan.baidu.com/s/1ADBC9xJ3y0GDrOg8dlu5TA",
      pwd: "tmke"
    }
  ]
};

function SectionTitle({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return (
    <div className="mb-8">
      <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-foreground">
        {children}
      </h2>
      {subtitle && (
        <p className="text-sm tracking-[0.2em] uppercase text-[var(--gold)] mt-2">{subtitle}</p>
      )}
    </div>
  );
}

function TimelineItem({ company, position, period, description, highlights }: { 
  company: string; position: string; period: string; description: string; highlights: string[];
}) {
  return (
    <div className="relative pl-8 pb-10 last:pb-0">
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-[var(--gold)] to-[var(--gold)]/20 last:hidden" />
      <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[var(--gold)]" />
      <div className="group">
        <span className="text-xs tracking-[0.15em] uppercase text-[var(--gold)]/70 mb-1 block">{period}</span>
        <h3 className="font-serif text-xl mb-1 group-hover:text-[var(--gold)] transition-colors">{company}</h3>
        <p className="text-sm text-muted-foreground mb-3">{position}</p>
        <p className="text-sm text-muted-foreground/80 leading-relaxed mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {highlights.map((item, i) => (
            <span key={i} className="text-xs px-3 py-1 border border-[var(--gold)]/30 text-[var(--gold)]/80 rounded-none">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function PortfolioCard({ title, subtitle, description, type, tags, link, pwd }: { 
  title: string; subtitle: string; description: string; type: string; tags: string[]; link: string; pwd: string;
}) {
  const IconComponent = type === 'video' ? Video : FileText;
  
  const handleClick = () => {
    // 构造带提取码的百度网盘跳转链接
    const fullLink = `${link}?pwd=${pwd}`;
    window.open(fullLink, '_blank');
  };
  
  return (
    <div 
      onClick={handleClick}
      className="group cursor-pointer relative overflow-hidden bg-card border border-border hover:border-[var(--gold)] transition-all duration-500"
    >
      {/* 顶部装饰线 */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--gold)] via-[var(--gold)]/50 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
      
      <div className="p-8">
        {/* 图标与标签 */}
        <div className="flex items-center justify-between mb-6">
          <div className={`p-3 ${type === 'video' ? 'bg-purple-500/10' : 'bg-[var(--gold)]/10'}`}>
            <IconComponent className={`w-6 h-6 ${type === 'video' ? 'text-purple-500' : 'text-[var(--gold)]'}`} />
          </div>
          <span className="text-xs tracking-[0.1em] uppercase text-muted-foreground">
            {type === 'video' ? 'VIDEO' : 'DOCUMENT'}
          </span>
        </div>
        
        {/* 内容 */}
        <h4 className="font-serif text-lg mb-1 group-hover:text-[var(--gold)] transition-colors">{title}</h4>
        <p className="text-sm text-[var(--gold)] mb-4">{subtitle}</p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">{description}</p>
        
        {/* 标签 */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, i) => (
            <span key={i} className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
        
        {/* 底部链接 */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>提取码</span>
            <span className="font-mono text-[var(--gold)]">{pwd}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-[var(--gold)] transition-colors">
            <span>查看详情</span>
            <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ResumePage() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 80) {
          el.classList.add("visible");
        }
      });

      const sections = ["about", "experience", "skills", "portfolio", "education", "contact"];
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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/30">
        <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
          <span className="font-serif text-xl tracking-wide">{resumeData.name}</span>
          <div className="hidden md:flex items-center gap-10">
            {[
              { id: "about", label: "关于" },
              { id: "experience", label: "经历" },
              { id: "skills", label: "技能" },
              { id: "portfolio", label: "作品集" },
              { id: "education", label: "教育" },
              { id: "contact", label: "联系" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm tracking-wide transition-colors ${
                  activeSection === item.id 
                    ? "text-[var(--gold)]" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero 区域 */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* 装饰元素 */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-px h-40 bg-gradient-to-b from-transparent via-[var(--gold)]/20 to-transparent" />
          <div className="absolute top-40 right-20 w-32 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/10 to-transparent" />
          <div className="absolute bottom-32 left-1/4 w-48 h-48 rounded-full bg-[var(--gold)]/[0.02] blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-[var(--gold)]/[0.03] blur-3xl" />
        </div>
        
        <div className="relative z-10 text-center px-8 max-w-3xl">
          {/* 头像 */}
          <div className="mb-10 reveal">
            <div className="w-36 h-36 md:w-44 md:h-44 mx-auto relative">
              <div className="absolute inset-0 rounded-full border border-[var(--gold)]/30" />
              <div className="absolute inset-2 rounded-full overflow-hidden">
                <img 
                  src="/avatar.jpg" 
                  alt={resumeData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* 装饰角标 */}
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t border-r border-[var(--gold)]/50" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b border-l border-[var(--gold)]/50" />
            </div>
          </div>
          
          <div className="reveal delay-100">
            <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-6">
              {resumeData.tagline}
            </p>
          </div>
          
          <h1 className="reveal delay-200 font-serif text-6xl md:text-8xl font-extralight tracking-tight mb-6">
            {resumeData.name}
          </h1>
          
          <p className="reveal delay-300 text-lg md:text-xl text-muted-foreground tracking-wide mb-12">
            {resumeData.title}
          </p>
          
          <div className="reveal delay-400 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground/70">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[var(--gold)]" />
              {resumeData.location}
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[var(--gold)]" />
              {resumeData.email}
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[var(--gold)]" />
              {resumeData.phone}
            </span>
          </div>
          
          <div className="reveal delay-500 mt-16">
            <button 
              onClick={() => scrollToSection("about")}
              className="group"
            >
              <ChevronDown className="w-6 h-6 text-muted-foreground/50 group-hover:text-[var(--gold)] transition-colors" />
            </button>
          </div>
        </div>
      </header>

      {/* 关于我 */}
      <section id="about" className="py-32 md:py-40 px-8">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <SectionTitle subtitle="About">关于我</SectionTitle>
          </div>
          
          <p className="reveal delay-100 text-lg md:text-xl leading-relaxed text-muted-foreground/90 mb-12 font-light">
            {resumeData.summary}
          </p>
          
          {/* 核心优势 */}
          <div className="reveal delay-200 mb-12">
            <h4 className="text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-6">核心优势</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {resumeData.coreStrengths.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <div className="w-1 h-1 rounded-full bg-[var(--gold)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI工具优势 */}
          <div className="reveal delay-300 mb-12 p-8 border border-[var(--gold)]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--gold)]/5 to-transparent" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-5 h-5 text-[var(--gold)]" />
                <h4 className="text-xs tracking-[0.2em] uppercase text-[var(--gold)]">
                  AI工具赋能
                </h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                熟练运用AI工具提升工作效率，包括：AI生成营销文案与创意脚本、AI图像创作与品牌视觉设计、AI视频制作（如吉卜力风格短片）、AI数据分析与洞察报告。将传统品牌营销与AI技术深度融合，打造差异化竞争优势。
              </p>
            </div>
          </div>

          {/* 数据统计 */}
          <div className="reveal delay-400 grid grid-cols-4 gap-4">
            {resumeData.stats.map((stat, i) => (
              <div key={i} className="text-center p-6 border border-border/50 hover:border-[var(--gold)]/30 transition-colors">
                <p className="font-serif text-3xl text-[var(--gold)] mb-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 工作经历 */}
      <section id="experience" className="py-32 md:py-40 px-8 bg-secondary/[0.03]">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <SectionTitle subtitle="Experience">工作经历</SectionTitle>
          </div>
          <div className="reveal delay-100">
            {resumeData.experience.map((exp, index) => (
              <TimelineItem key={index} {...exp} />
            ))}
          </div>
        </div>
      </section>

      {/* 技能 */}
      <section id="skills" className="py-32 md:py-40 px-8">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <SectionTitle subtitle="Skills">专业技能</SectionTitle>
          </div>
          <div className="reveal delay-100 space-y-10">
            {Object.entries(resumeData.skills).map(([category, items], index) => (
              <div key={index}>
                <h4 className="text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-4">{category}</h4>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, i) => (
                    <span key={i} className="text-sm px-4 py-2 border border-border hover:border-[var(--gold)]/50 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 作品集 */}
      <section id="portfolio" className="py-32 md:py-40 px-8 bg-secondary/[0.03]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-[var(--gold)]" />
              <SectionTitle subtitle="Portfolio">作品集</SectionTitle>
            </div>
          </div>
          <p className="reveal delay-100 text-sm text-muted-foreground mb-12 tracking-wide">
            点击卡片直接跳转到百度网盘，提取码已自动填充
          </p>
          <div className="reveal delay-200 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumeData.portfolio.map((item, index) => (
              <PortfolioCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* 教育背景 */}
      <section id="education" className="py-32 md:py-40 px-8">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <SectionTitle subtitle="Education">教育背景</SectionTitle>
          </div>
          <div className="reveal delay-100">
            {resumeData.education.map((edu, index) => (
              <div key={index} className="relative pl-6 border-l border-[var(--gold)]/30">
                <h4 className="font-serif text-xl mb-1">{edu.school}</h4>
                <p className="text-sm text-[var(--gold)]">{edu.degree}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 联系方式 */}
      <section id="contact" className="py-32 md:py-40 px-8 bg-foreground text-background">
        <div className="max-w-3xl mx-auto text-center">
          <div className="reveal">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-4">
              Contact
            </p>
            <h2 className="font-serif text-5xl md:text-6xl font-extralight mb-8">
              期待交流
            </h2>
          </div>
          <p className="reveal delay-100 text-lg text-muted-foreground mb-12">
            感谢您的关注，欢迎与我联系
          </p>
          <div className="reveal delay-200 flex flex-wrap justify-center gap-8 mb-8">
            <a 
              href={`mailto:${resumeData.email}`}
              className="flex items-center gap-3 text-lg hover:text-[var(--gold)] transition-colors"
            >
              <Mail className="w-5 h-5" />
              {resumeData.email}
            </a>
            <a 
              href={`tel:${resumeData.phone}`}
              className="flex items-center gap-3 text-lg hover:text-[var(--gold)] transition-colors"
            >
              <Phone className="w-5 h-5" />
              {resumeData.phone}
            </a>
          </div>
          <div className="reveal delay-300 flex items-center justify-center gap-3 text-sm text-muted-foreground/60">
            <MapPin className="w-4 h-4" />
            <span>{resumeData.location}</span>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-8 px-8 border-t border-border/30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/50">
          <p className="tracking-wide">{resumeData.name} · {resumeData.title}</p>
          <p className="flex items-center gap-2">
            <Calendar className="w-3 h-3" />
            {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
