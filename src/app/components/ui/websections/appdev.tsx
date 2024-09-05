import Image from "next/image";
import Link from "next/link";
import Card from "../shared/card";

export default function Appdev() {
  return (
    <main className="bg-slate-100">
      {/* Section Header */}
      <div className="flex flex-col justify-start p-6">
        <h6>mobile Development</h6>
        <h1 className="text-5xl">Recent Projects</h1>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center items-start md:ml-10">
        {/* Card 1 */}
        <Card
          href="https://link-to-project-one.com"
          imageSrc="/resources/chatapp.png"
          imageAlt="Tech Image 1"
          description="secure inhouse company chat app"
        />

        {/* Card 2 */}
        <Card
          href="https://link-to-project-one.com"
          imageSrc="/resources/habit.jpg"
          imageAlt="Tech Image 1"
          description="habit tracker app"
        />

        {/* Card 3 */}
        <Card
          href="https://link-to-project-one.com"
          imageSrc="/resources/colors.png"
          imageAlt="Tech Image 1"
          description="my colors"
        />
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
    </main>
  );
}
