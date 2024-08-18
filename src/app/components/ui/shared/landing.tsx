import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <main className="flex min-h-screen flex-row  p-10">
      {/* Flexbox Container for Intro Text and Numbers */}
      <div className="flex flex-row justify-between ">
        <div className="flex flex-col">
          <div className="flex">
            <p>
              Where Design Meets Development: <br />
              Explore My Creative & Technical Masterpieces
            </p>
          </div>
          <div className="flex flex-col  mt-4">
            <div>
              <p>code Portfolio</p>
            </div>
            <div>
              <p>design Portfolio</p>
            </div>
          </div>
          <div className="mt-4">
            <p>get in touch</p>
          </div>
        </div>

        <div className="mt-[-10rem] mr-[-17rem]">
          <Image
            src="/resources/self.png"
            alt="Description of image"
            width={700}
            height={1}
            className="object-cover"
          />
        </div>
      </div>

      {/* Image Section */}
    </main>
  );
};