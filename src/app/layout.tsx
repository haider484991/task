// src/app/layout.tsx
import './globals.css'; // Adjust the path as necessary
import { ReactNode } from 'react';

// Define the props type
interface RootLayoutProps {
  children: ReactNode; // Type the children prop
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
