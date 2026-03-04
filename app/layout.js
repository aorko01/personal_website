import { Inter, JetBrains_Mono } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata = {
  title: 'Zulfiker | Systems & ML Engineer',
  description:
    'GPU kernels, distributed training infrastructure, and systems software. Building close to the metal.',
  keywords: ['systems engineer', 'GPU', 'CUDA', 'ML infrastructure', 'Triton', 'distributed systems'],
  openGraph: {
    title: 'Zulfiker | Systems & ML Engineer',
    description: 'Building close to the metal — GPU kernels, distributed training, and systems software.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
