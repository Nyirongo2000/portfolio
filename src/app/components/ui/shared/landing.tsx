import Image from "next/image";
import Link from "next/link";
export default function Landing(){
  return (
    <main className="flex min-h-screen flex-row  justify-between p-24">
      {/* Flexbox Container for Intro Text and Numbers */}
      <div className="flex flex-col w-full justify-between">
        <div className="flex">
          <p>
            Where Design Meets Development: <br/>
            Explore My Creative & Technical Masterpieces
          </p>
        </div>
        <div className="flex flex-col w-full justify-between ">
          <div className="flex text-center">
            <p>code Portfolio</p>
          </div>
          <div className="flex text-right">
            <p>design Portfolio</p>
          </div>
        </div>
        <div className="flex">
          <p>get in touch</p>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-between w-full">
        <Image
          src="/path-to-your-image.jpg" // Replace with the actual path to your image
          alt="Description of image"
          width={500} // Set your desired width
          height={300} // Set your desired height
          className="object-cover"
        />
      </div>
    </main>
  );
};