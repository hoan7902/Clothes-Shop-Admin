// components/layout.tsx

import Footer from "../Footer";
import Header from "../Header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <main>
        <Header/>
        {children}
        <Footer/>
      </main>
    </>
  );
}
