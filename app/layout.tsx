import SiteHeader from '@/components/shared/SiteHeader';
import ModalController from '@/components/ui/Modal/ModalController';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import getCurrentUser from './actions/getCurrentUser';
import './globals.css';
import { NextAuthProvider } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <Toaster />
          <SiteHeader user={currentUser} />
          {children}
          <ModalController />
        </NextAuthProvider>
      </body>
    </html>
  );
}
