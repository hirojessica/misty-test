import "./globals.css";

export const metadata = {
  title: "Misty Collection Summer",
  description: "A premium jewelry landing page with editorial motion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
