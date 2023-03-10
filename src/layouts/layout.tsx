import Sidenav from "../components/sidenav/sidenav";
const Layout = (props: { children: any }) => {
  return <div className="sticky top-0 left-0 w-full ">{props.children}</div>;
};

export default Layout;
