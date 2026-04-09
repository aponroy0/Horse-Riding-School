import "./globals.css";

export const metadata = {
  title: "Buraq Horse Riding School",
  description:
    "Welcome to Buraq Horse Riding School — a place where tradition meets discipline, and passion meets excellence.",
  icons: {
    icon: "/assets/Buraq_Horse_Riding_Logo.png",
    shortcut: "/assets/Buraq_Horse_Riding_Logo.png",
    apple: "/assets/Buraq_Horse_Riding_Logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
