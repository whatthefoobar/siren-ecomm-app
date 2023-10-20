import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="d-flex flex-column vh-100">
      <ToastContainer position="bottom-center" limit={1} />
      <header>
        <NavigationBar />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
