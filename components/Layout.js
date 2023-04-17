import Nav from "./Nav";
import Footer from "./Footer";
import Aside from "./Aside";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 mt-16 px-4">
        <main className="col-span-1 lg:col-span-9 lg:mr-12">{children}</main>
        <Aside />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
