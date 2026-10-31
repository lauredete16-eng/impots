import "./globals.css";
import AuthProvider from "@/components/AuthProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/config";

export const metadata = { title: `Accueil ${SITE.domain}`, description: SITE.tagline };

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <AuthProvider>
          <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:bg-white focus:p-2">Aller au contenu principal</a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
