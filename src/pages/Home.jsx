import MainLayout from "../layouts/MainLayout";

const links = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

export default function Home() {
  return (
    <>
      <MainLayout>
        <h1>Home</h1>
      </MainLayout>
    </>
  );
}
