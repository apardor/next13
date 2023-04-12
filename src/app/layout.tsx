import './globals.css'
import { Poppins } from 'next/font/google';
import Header from './components/Header';

const poppins = Poppins ({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Andres',
  description: 'Web dev',
  keywords: 'space, web design'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ poppins.className}>
        <Header />
        <main className='container mx-auto px-4'>
         {children}
        </main>
        </body>
    </html>
  )
}
