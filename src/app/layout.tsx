import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '陈思远 | 资深前端工程师',
    template: '%s | 简历',
  },
  description:
    '8年前端开发经验，专注于现代Web技术栈。曾主导多个大型项目的架构设计，在性能优化、团队协作和技术创新方面有丰富实践经验。',
  keywords: [
    '前端工程师',
    'React',
    'Next.js',
    'Vue',
    'TypeScript',
    '个人简历',
    'Web开发',
  ],
  authors: [{ name: '陈思远' }],
  generator: 'Coze Code',
  openGraph: {
    title: '陈思远 | 资深前端工程师',
    description: '8年前端开发经验，专注于现代Web技术栈',
    url: 'https://siyuanchen.dev',
    siteName: '陈思远简历',
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
