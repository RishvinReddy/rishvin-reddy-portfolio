'use client';

import { usePathname } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ChatWidget } from '@/components/ChatWidget';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isImmersivePage = pathname === '/universe' || pathname === '/ide';

  if (isImmersivePage) {
    return <main className="flex-grow">{children}</main>;
  }

  return (
    <>
      <Header />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
      <ChatWidget />
    </>
  );
}
