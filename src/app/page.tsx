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
      <div className="flex min-h-screen flex-col items-center mb-0 justify-between p-24">
        <Landing />
      </div>
      <OurServices />
      <Webdev />
      <hr className="m-10" />
      <Appdev />
      <hr className="m-10" />
      <Design />
      <hr className="m-10" />
      <Contactus />
      <hr className="m-10" />
    </>
  );
}
