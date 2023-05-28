import './globals.css';
import { Header } from '@/components/Header';
import { Roboto, Inter, Playfair_Display } from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});
const playfair = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Explore the world',
  description: 'You deserve the best, plain your travelling with us!!!',
}
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});




export default async function RootLayout({ children }) {
  return (
    <html className={"w-[100%] h-[100%] bg-white pt-[96px]"} lang="pt-BR">
      <body data-theme="mytheme" className={inter.className + ""}>
        <Header />
        {children}</body>
    </html >
  )
}
