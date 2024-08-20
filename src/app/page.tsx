import Image from "next/image";
import Landing from "./components/ui/Landing/landing";
import OurServices from "./components/ui/OurServices/ourservices";
import Webdev from "./components/ui/webdev/webdev";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center mb-0 justify-between p-24">
        <Landing />
      </div>
      <OurServices />
      <Webdev/>
    </>
  );
}
