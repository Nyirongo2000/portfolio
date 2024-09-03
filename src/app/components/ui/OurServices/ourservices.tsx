import Image from "next/image";
import Card from "../shared/card";
import Link from "next/link";

export default function OurServices() {
  return (
    <main className="bg-slate-100">
      {/* Section Header */}
      <div className="flex flex-col justify-start mt-[-16rem] p-6">
        <h6>Our Services</h6>
        <h1 className="text-5xl">What Do We Do?</h1>
      </div>

      {/* Introduction and Cards Section */}
      <div className="flex flex-col md:flex-row justify-center p-6">
        {/* Introduction and Image */}
        <div className="flex-1 flex flex-col mb-10 md:mb-0">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo <br />
            culpa adipisci omnis a vero, quisquam nam. Quo id doloremque
            <br />
            nesciunt est iusto deleniti fugiat consectetur, tenetur in
            <br />
            voluptas qui temporibus.
          </p>
          <div>
            <div className="flex flex-col md:flex-row  mt-4 space-y-4 md:space-y-0 md:space-x-4">
              <Link
                href="/pages/CodePortfolio"
                className="flex items-center gap-5 justify-center md:justify-start rounded-lg bg-slate-900 px-3 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-700 md:text-base"
              >
                <span>Code Portfolio</span>
              </Link>
              <Link
                href="/pages/DesignPortfolio"
                className="flex items-center gap-7 justify-center md:justify-start rounded-lg bg-slate-900 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-700 md:text-base"
              >
                <span>Design Portfolio</span>
              </Link>
            </div>
          </div>
          <div>
            <Image
              src="/resources/cyborg.png"
              alt="Description of image"
              width={400}
              height={300}
              className="object-cover hidden md:block mt-4"
            />
            <Image
              src="/resources/cyborgm.png"
              alt="Description of image"
              width={400}
              height={300}
              className="object-cover block md:hidden mt-4"
            />
          </div>
        </div>

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center items-start md:ml-10">
          <Card
            href="https://link-to-project-one.com"
            imageSrc="/resources/self.png"
            imageAlt="Tech Image 1"
            description="Service One"
          />
          <Card
            href="https://link-to-project-two.com"
            imageSrc="/resources/self.png"
            imageAlt="Tech Image 2"
            description="Service Two"
          />
          <Card
            href="https://link-to-project-three.com"
            imageSrc="/resources/self.png"
            imageAlt="Tech Image 3"
            description="Service Three"
          />
          <Card
            href="https://link-to-project-four.com"
            imageSrc="/resources/self.png"
            imageAlt="Tech Image 4"
            description="Service Four"
          />
        </div>
      </div>
    </main>
  );
}
