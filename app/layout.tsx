import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

// Load Google Fonts
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif',
});

// Set metadata
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Horizon - The New Generation of the banking platform",
  icons: {
    icon: '/icons/logo.svg'
  }
};

// Define RootLayout as a constant
const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
        {children}
      </body>
    </html>
  );
};

// Export RootLayout as the default export
export default RootLayout;
