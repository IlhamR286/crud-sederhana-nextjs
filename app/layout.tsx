import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CRUD Sederhana Tugas 5',
  description: 'Aplikasi CRUD Next.js + PostgreSQL untuk tugas pertemuan 5',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-gray-100 min-h-screen antialiased">
        <main className="container mx-auto py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
