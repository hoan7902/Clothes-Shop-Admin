// components/layout.tsx

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
      </main>
    </>
  );
}
