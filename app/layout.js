import SmoothScroll from '@/components/SmoothScroll.jsx'
import { Cinzel, Inter, Koulen, Roboto_Mono } from 'next/font/google'
import './globals.css'
import Overlay from '@/components/Overlay.jsx'
import Navbar from '@/components/Navbar.jsx'
import { Analytics } from '@vercel/analytics/react';

const inter = Koulen({
  subsets: ['latin'],
  weight: ['400']
})
const roboto = Roboto_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-roboto'
})
export const metadata = {
  metadataBase: new URL('https://personal-portfolio-delta-lime-54.vercel.app'),
  keywords: [
    'Full Stack Developer',
    'Web Developer Portfolio',
    'Software Developer Portfolio',
    'Frontend Developer',
    'Backend Developer',
    'JavaScript Developer',
    'React Developer',
    'Node.js Developer',
    'HTML5/CSS3',
    'Responsive Web Design',
    'Full Stack Projects',
    'Web Development Projects',
    'Software Engineering',
    'GitHub Portfolio',
    'JavaScript Frameworks',
    'MERN Stack',
    'API Development',
    'Web App Development',
    'Coding Portfolio'
  ],

  title: 'Sheikh Arman',
  description: 'A Full Stack Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} ${roboto.variable}`}>
        <SmoothScroll>
          <Overlay />
          {children}
          <Navbar />
        </SmoothScroll>
        <Analytics/>
      </body>
    </html>
  )
}
