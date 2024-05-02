import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Head from 'next/head';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

function formatTitle(title: string, metadata: Metadata): string {
  if (title) {
    return metadata.title.template.replace('%s', title);
  }
  return metadata.title.default;
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.metadataBase.toString()} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
