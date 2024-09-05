import Image from "next/image";
import Link from "next/link";
import Card from "../shared/card";

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
        <Card
          href="https://chikanda-landlord.vercel.app/"
          imageSrc="/resources/hostel.jpg"
          imageAlt="Tech Image 1"
          description="Hostel Booking System"
        />

        {/* Card 2 */}
        <Card
          href="https://link-to-project-one.com"
          imageSrc="/resources/customer1.jpg"
          imageAlt="Tech Image 1"
          description="Customer Management System"
        />

        {/* Card 3 */}
        <Card
          href="https://link-to-project-one.com"
          imageSrc="/resources/payslip2.jpg"
          imageAlt="Tech Image 1"
          description="blockchain payslip automation"
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
    </>
  );
}
