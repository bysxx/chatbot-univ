import '@styles/global.css';

export const metadata = {
  title: 'Chatbot for hanyang',
  description: 'Chatbot for hanyang',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
