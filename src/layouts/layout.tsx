import Sidenav from "../components/sidenav/sidenav";
const Layout = (props: { children: any }) => {
  return (
    <div className="sticky top-0 left-0 w-screen ">
      <Sidenav />
      <div className="absolute top-0">{props.children}</div>
    </div>
  );
};

export default Layout;
