import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'aos/dist/aos.css';
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />        
        <main>{children}</main>  
        <Footer />        
      </body>
    </html>
  );
}
