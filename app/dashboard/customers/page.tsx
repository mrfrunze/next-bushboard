import Head from 'next/head';

interface Metadata {
    title: string;
    description: string;
    metadataBase: URL;
}

export const metadata: Metadata = {
    title: 'Customers | Acme Dashboard',
    description: 'The official Next.js Learn Dashboard built with App Router.',
    metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function Page() {

    return <>
        <Head>
            <title>{metadata.title || 'Default Title'}</title>
            <meta name="description" content={metadata.description} />
            <link rel="canonical" href={metadata.metadataBase.toString()} />
        </Head>
        <p>Customers Page</p>
    </>;
}