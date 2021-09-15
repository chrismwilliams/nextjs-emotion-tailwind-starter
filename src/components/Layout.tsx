import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <a id="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
