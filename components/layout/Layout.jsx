import NavBar from "../navbar/NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
