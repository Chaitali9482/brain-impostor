import './global.css';

export const metadata = {
  title: 'Brain Impostor',
  description: 'Trust nothing, find the lie.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white">{children}</body>
    </html>
  );
}
