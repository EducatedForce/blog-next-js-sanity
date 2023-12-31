import type {Metadata} from 'next';
import './globals.css';
import React from "react";


export const metadata: Metadata = {
  title: 'The Blog',
  description: 'Test blog with Next JS and Sanity',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body>{children}</body>
    </html>
  );
}
