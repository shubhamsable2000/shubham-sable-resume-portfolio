// app/layout.tsx
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import Footer component

export const metadata = {
  title: 'Shubham Sable Portfolio',
  description: 'Frontend Engineer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Navbar will be rendered at the top */}
        <Navbar />

        {/* Main content of the page should grow and push footer to the bottom */}
        <main className="flex-grow pt-20">{children}</main>

        {/* Footer will be rendered at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
