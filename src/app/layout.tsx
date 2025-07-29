import './globals.css';

export const metadata = {
  title: '김희주의 포트폴리오',
  description: 'heejudev.dev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-mono">{children}</body>
    </html>
  );
}
