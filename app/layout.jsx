import "./globals.css";

export const metadata = {
  title: "Horseno - Horse Riding School",
  description:
    "Discover the joy of riding at Horseno, your ultimate destination for all things equestrian.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
