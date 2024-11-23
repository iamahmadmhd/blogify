import './globals.css';

const defaultUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

export const metadata = {
    metadataBase: new URL(defaultUrl),
    title: 'Blogify',
    description: 'The fastest way to build apps with Next.js and Supabase',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className='bg-background text-foreground'>
                <main>{children}</main>
                <footer className='mx-auto flex w-full items-center justify-center gap-8 border-t py-16 text-center text-xs'></footer>
            </body>
        </html>
    );
}
