import Image from "next/image";
import Link from "next/link";

export default function Webdev() {
  return (
    <>
      {/* Section Header */}
      <div className="flex flex-col justify-start p-6">
        <h6>Web Development</h6>
        <h1 className="text-5xl">Recent Projects</h1>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center items-start md:ml-10">
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-white p-4 m-4 rounded-lg shadow-md w-full md:w-[30%]">
          <Link href="https://link-to-project-one.com">
            <Image
              src="/resources/self.png"
              alt="Tech Image 1"
              width={150}
              height={150}
              className="mb-4 md:opacity-50 md:hover:opacity-100 transition-opacity duration-300"
            />
          </Link>
          <p>Service One</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center bg-white p-4 m-4 rounded-lg shadow-md w-full md:w-[30%]">
          <Link href="https://link-to-project-two.com">
            <Image
              src="/resources/self.png"
              alt="Tech Image 2"
              width={150}
              height={150}
              className="mb-4 md:opacity-50 md:hover:opacity-100 transition-opacity duration-300"
            />
          </Link>
          <p>Service Two</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center bg-white p-4 m-4 rounded-lg shadow-md w-full md:w-[30%]">
          <Link href="https://link-to-project-three.com">
            <Image
              src="/resources/self.png"
              alt="Tech Image 3"
              width={150}
              height={150}
              className="mb-4 md:opacity-50 md:hover:opacity-100 transition-opacity duration-300"
            />
          </Link>
          <p>Service Three</p>
        </div>
      </div>

      {/* Link to More Projects */}
      <div className="flex justify-center items-center">
        <Link
          href="/pages/CodePortfolio"
          className="flex w-fill justify-center rounded-lg bg-orange-700 px-3 py-3 text-sm font-medium text-white transition-colors hover:bg-orange-900 md:text-base"
        >
          <p className="">More Web Projects</p>
        </Link>
      </div>
    </>
  );
}
