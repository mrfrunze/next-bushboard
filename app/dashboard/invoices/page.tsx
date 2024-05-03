import { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
    title: {
        template: '%s | Acme Dashboard',
        default: 'Invoices | Acme Dashboard',
    },
    description: 'Detailed view of invoices.',
    metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};


export default function Page() {
    
    return <>
        <Head>
            <title>{metadata.title.default}</title>
            <meta name="description" content={metadata.description} />
            <link rel="canonical" href={metadata.metadataBase.toString()} />
        </Head>
        <p>Invoices Page</p>
    </>;
}