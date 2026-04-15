import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '郭娜 | 品牌市场总监',
    template: '%s | 简历',
  },
  description:
    '15年品牌战略规划与企业综合管理经验，横跨文旅、科技、消费、投资等多行业，曾任上市筹备公司核心高管。精通品牌整合营销、企业顶层设计、上市辅导与资本对接。',
  keywords: [
    '品牌总监',
    '市场总监',
    '品牌战略',
    '整合营销',
    '郭娜',
    '个人简历',
  ],
  authors: [{ name: '郭娜' }],
  generator: 'Coze Code',
  openGraph: {
    title: '郭娜 | 品牌市场总监',
    description: '15年品牌战略规划与企业综合管理经验',
    siteName: '郭娜简历',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="en">
      <body className={`antialiased`}>
        {isDev && <Inspector />}
        {children}
      </body>
    </html>
  );
}
