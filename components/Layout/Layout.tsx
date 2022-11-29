/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactNode } from "react";

import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Navigation */}
      <Navigation />
      {/* Main contents of page */}
      <main>{children}</main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
