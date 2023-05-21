import HeaderMenu from "../components/HeaderMenu";
import PropTypes from 'prop-types';

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

function MainLayout({ children }) {
  return (
    <>
      <HeaderMenu links={links} />
      {children}
    </>
  );
}

export default MainLayout;
