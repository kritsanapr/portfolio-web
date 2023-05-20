import { HeaderMenu } from "../components/HeaderMenu";

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
    <HeaderMenu link={links} />
      <h1>Home</h1>
    </>
  );
}
