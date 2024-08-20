import Image from "next/image";

export default function OurServices() {
  return (
    <main className=" bg-slate-100">
      {/* Section Header */}
      <div className="flex flex-col justify-start0 mt-[-16rem] p-6">
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
            <Image
              src="/resources/cyborg.png"
              alt="Description of image"
              width={400}
              height={300}
              className="object-cover mt-4"
            />
          </div>
        </div>

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center items-start md:ml-10">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-white p-4 m-4 rounded-lg shadow-md w-full md:w-[45%]">
            <Image
              src="/resources/self.png"
              alt="Tech Image 1"
              width={150}
              height={150}
              className="mb-4"
            />
            <p>Service One</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center bg-white p-4 m-4 rounded-lg shadow-md w-full md:w-[45%]">
            <Image
              src="/resources/self.png"
              alt="Tech Image 2"
              width={150}
              height={150}
              className="mb-4"
            />
            <p>Service Two</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center bg-white p-4 m-4 rounded-lg shadow-md w-full md:w-[45%]">
            <Image
              src="/resources/self.png"
              alt="Tech Image 3"
              width={150}
              height={150}
              className="mb-4"
            />
            <p>Service Three</p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center bg-white p-4 m-4 rounded-lg shadow-md w-full md:w-[45%]">
            <Image
              src="/resources/self.png"
              alt="Tech Image 4"
              width={150}
              height={150}
              className="mb-4"
            />
            <p>Service Four</p>
          </div>
        </div>
      </div>
    </main>
  );
}
