import Image from "next/image";
import Landing from "./components/ui/Landing/landing";
import OurServices from "./components/ui/OurServices/ourservices";
import Webdev from "./components/ui/websections/webdev";
import Appdev from "./components/ui/websections/appdev";
import Design from "./components/ui/websections/design";
import Contactus from "./components/ui/websections/contactus";

export default function Home() {
  return (
    <>
      <Landing />
      <hr />
      <OurServices />
      <hr />
      <Webdev />
      <hr />
      <Appdev />
      <hr />
      <Design />
      <hr />
      <Contactus />
      <hr />
    </>
  );
}
