import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextJS 15 - ISR with dynamic params",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
