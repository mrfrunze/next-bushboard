import { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
    title: 'Invoices | Acme Dashboard',
};


export default function Page() {
    
    return <>
        <Head>
            <title>{metadata.title}</title>
        </Head>
        <p>Invoices Page</p>
    </>;
}