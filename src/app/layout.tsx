import '../index.css'
import '../App.css'

export const metadata = {
    title: 'Web Personal Portofolio',
    description: 'Portofolio saya menggunakan Next.js dan Tailwind CSS',
    icons: {
        icon: '/Logo.png',
        shortcut: '/Logo.png',
        apple: '/Logo.png',
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning={true}>
                {children}
            </body>
        </html>
    )
}