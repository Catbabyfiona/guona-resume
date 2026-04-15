"use client";

import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Globe, ExternalLink, Calendar, ChevronDown, Award, Users, TrendingUp, Rocket } from "lucide-react";

// 简历数据 - 郭娜
const resumeData = {
  name: "郭娜",
  title: "品牌市场总监",
  tagline: "Brand Strategy & Marketing Director",
  location: "北京市",
  email: "755360966@qq.com",
  phone: "13120250250",
  github: "",
  linkedin: "",
  website: "",
  summary: "15年品牌战略规划与企业综合管理经验，横跨文旅、科技、消费、投资等多行业，曾任上市筹备公司核心高管，具备从0到1构建品牌、团队与业务体系的实战能力。精通品牌整合营销、企业顶层设计、上市辅导与资本对接，擅长以市场为导向驱动企业增长。累计打造多个年销超千万/千万级中标额的标杆项目。",
  coreStrengths: [
    "品牌战略与整合营销",
    "企业战略与顶层设计", 
    "上市辅导与资本对接",
    "IP资产孵化与内容创新",
    "跨界整合与项目管理",
    "团队构建与组织发展"
  ],
  stats: [
    { value: "15+", label: "年经验" },
    { value: "6+", label: "家公司" },
    { value: "千万级", label: "标杆项目" },
    { value: "5000万+", label: "年营业额" }
  ],
  experience: [
    {
      company: "北京分享时代科技股份有限公司",
      position: "品牌市场总监",
      period: "2022.01 - 至今",
      description: "主导集团品牌体系建设与整合营销策略，负责品牌定位、IP内容创意、传播策划与市场推广，推动品牌与业务深度融合。牵头整合集团多核心部门，制定年度品牌规划，对接资本市场，助力企业上市筹备。",
      highlights: ["上市筹备", "品牌体系", "IP孵化", "资本对接"]
    },
    {
      company: "北京互动时代网络技术有限公司",
      position: "市场品牌总监",
      period: "2021.03 - 2021.12",
      description: "主导品牌定位、视觉体系搭建与O2O商业模式研究，建立标准化品牌管理体系。通过社群运营与数据分析，提升平台用户粘性及转化效率。依托环球梦工场IP图库主导衍生品开发，实现IP商业化多元延展。",
      highlights: ["品牌定位", "社群运营", "IP商业化", "O2O模式"]
    },
    {
      company: "大洲新燕（北京）生物科技有限公司",
      position: "品牌市场总监",
      period: "2019.09 - 2021.02",
      description: "负责燕窝饮料、国潮好酒品牌全案体系建设与运营，开展商业模式研究，制定品牌各业务板块战略方案。策划执行大型品牌活动，打造社会热点事件，拉动品牌影响力与目标人群渗透。",
      highlights: ["品牌全案", "国潮文化", "热点事件", "渠道营销"]
    },
    {
      company: "北京莱鹏纳通文化传媒有限公司",
      position: "品牌战略负责人",
      period: "2015.11 - 2019.06",
      description: "聚焦农合农副产品发展战略，主导企业自有品牌IP孵化与品牌建设管理，协助拓展农副产品市场。搭建自媒体平台矩阵，制定社会化传播策略，实现品牌差异化竞争。",
      highlights: ["IP孵化", "自媒体矩阵", "扶贫项目", "内容营销"]
    },
    {
      company: "八零印象",
      position: "客户总监",
      period: "2013.08 - 2015.10",
      description: "负责项目前期与客户端沟通，制定营销规划和创意产出。快速诊断品牌问题，建立动态品牌模型，制定定位战略，为品牌占据细分行业第一地位提供品牌策划与设计服务。",
      highlights: ["品牌诊断", "整合营销", "策略咨询", "创意策划"]
    },
    {
      company: "北京灵智精锐整合营销顾问有限公司",
      position: "客户总监",
      period: "2009.09 - 2013.07",
      description: "对接客户需求，开展品牌、市场、竞争环境研究，制定整合营销规划与创意推广方案。为蒙牛、宝洁、中粮等TOP级品牌提供全年整合营销服务，落地新品上市、线下巡展等活动。",
      highlights: ["整合营销", "品牌策略", "活动执行", "客户管理"]
    }
  ],
  projects: [
    {
      name: "阖家燕品牌战略体系打造",
      description: "完成全新阖家燕品牌从0到1的战略体系打造，制定品牌定位、包装策略、推广策略，拓展品牌推广渠道，策划公众营销事件。",
      tech: ["品牌定位", "包装设计", "营销策划", "渠道拓展"],
      link: "#"
    },
    {
      name: "「醉美老板娘」国潮好酒社会化传播",
      description: "将传统白酒与「国潮文化」结合，打造差异化品牌定位。策划「醉美老板娘」社会化事件，显著提升品牌在目标人群中的渗透率与知名度。",
      tech: ["国潮IP", "事件营销", "社会化传播", "品牌升级"],
      link: "#"
    },
    {
      name: "农副产品自媒体矩阵与扶贫项目",
      description: "打造农业类短视频内容体系，运营微信公众号、抖音、微博等账号。7天内销售22万斤大米，销售额达150万元，消化当地村当年1/3产量。",
      tech: ["内容矩阵", "短视频运营", "直播带货", "扶贫项目"],
      link: "#"
    },
    {
      name: "蒙牛真果粒酸奶新品上市整合营销",
      description: "围绕蒙牛真果粒酸奶新品，策划线上线下整合营销活动（明星见面会、粉丝季、大型巡展、网红直播等），提升产品市场占有率。",
      tech: ["新品上市", "整合营销", "KOL合作", "线下活动"],
      link: "#"
    }
  ],
  education: [
    {
      school: "对外经济贸易大学",
      degree: "本科 · 2005.09 - 2009.06",
      period: "2005.09 - 2009.06",
      description: ""
    }
  ],
  skills: {
    "核心能力": ["品牌战略与整合营销", "企业战略与顶层设计", "上市辅导与资本对接", "IP资产孵化与内容创新"],
    "专业技能": ["品牌定位与重塑", "整合营销策划", "IP孵化运营", "危机公关处理", "团队建设管理"],
    "工具技能": ["PPT/Word/Excel", "品牌数据分析", "项目管理", "预算管理"]
  }
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
      <div className="absolute left-0 top-2 w-2.5 h-2.5 rounded-full bg-[var(--gold)]" />
      <div className="absolute left-[5px] top-4 w-px h-full bg-border -z-10 last:hidden" />
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
            className="text-xs px-3 py-1 rounded-sm bg-secondary text-secondary-foreground"
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
          <span key={i} className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function StatCard({ value, label, icon }: { value: string; label: string; icon: React.ReactNode }) {
  return (
    <div className="text-center p-6 rounded-lg bg-card border border-border">
      <div className="flex justify-center mb-3 text-[var(--gold)]">
        {icon}
      </div>
      <p className="font-serif text-3xl font-medium text-[var(--gold)] mb-1">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
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
        const revealPoint = 100;
        
        if (elementTop < windowHeight - revealPoint) {
          el.classList.add("visible");
        }
      });

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
    handleScroll();
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
            {[
              { id: "about", label: "关于" },
              { id: "experience", label: "经历" },
              { id: "skills", label: "技能" },
              { id: "projects", label: "项目" },
              { id: "education", label: "教育" },
              { id: "contact", label: "联系" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm transition-colors ${
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
            <span className="w-1 h-1 rounded-full bg-muted-foreground self-center" />
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              {resumeData.phone}
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
          <p className="reveal delay-100 text-lg md:text-xl leading-relaxed text-muted-foreground mb-8">
            {resumeData.summary}
          </p>
          
          {/* 核心优势 */}
          <div className="reveal delay-200 mb-12">
            <h4 className="text-sm font-medium uppercase tracking-wider text-[var(--gold)] mb-4">
              核心优势
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {resumeData.coreStrengths.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 数据统计 */}
          <div className="reveal delay-300 grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard value={resumeData.stats[0].value} label={resumeData.stats[0].label} icon={<Award className="w-6 h-6" />} />
            <StatCard value={resumeData.stats[1].value} label={resumeData.stats[1].label} icon={<Users className="w-6 h-6" />} />
            <StatCard value={resumeData.stats[2].value} label={resumeData.stats[2].label} icon={<Rocket className="w-6 h-6" />} />
            <StatCard value={resumeData.stats[3].value} label={resumeData.stats[3].label} icon={<TrendingUp className="w-6 h-6" />} />
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
          <div className="reveal delay-100 space-y-8">
            {Object.entries(resumeData.skills).map(([category, items], index) => (
              <div key={index}>
                <h4 className="text-sm font-medium uppercase tracking-wider text-[var(--gold)] mb-4">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, i) => (
                    <SkillBadge key={i} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
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
          <div className="reveal delay-100 grid md:grid-cols-2 gap-6">
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
          <div className="reveal delay-100">
            {resumeData.education.map((edu, index) => (
              <div key={index} className="border-l-2 border-[var(--gold)] pl-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
                  <h4 className="font-medium text-lg">{edu.school}</h4>
                </div>
                <p className="text-[var(--gold)] text-sm">{edu.degree}</p>
              </div>
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
              期待交流
            </h2>
          </div>
          <p className="reveal delay-100 text-lg text-gray-400 mb-12">
            感谢您的关注，欢迎与我联系
          </p>
          <div className="reveal delay-200 flex flex-wrap justify-center gap-6 mb-8">
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
          <div className="reveal delay-200 flex items-center justify-center gap-4 text-sm text-gray-500">
            <MapPin className="w-4 h-4" />
            <span>{resumeData.location}</span>
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
