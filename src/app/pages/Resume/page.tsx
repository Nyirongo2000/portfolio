import Link from "next/link";

export default function Resume() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white p-8">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-extrabold tracking-wide mb-4 text-neon-blue">
          Oliver Stevin Nyirongo
        </h1>
        <p className="text-lg text-gray-400">Software Engineer & Designer</p>
        <div className="mt-6 space-y-2">
          <p className="text-lg text-gray-300">Phone: +265882748301</p>
          <p className="text-lg text-gray-300">
            Email: olivernyirongo@gmail.com
          </p>
          <p className="text-lg text-gray-300">
            GitHub:{" "}
            <Link
              href="https://github.com/Nyirongo2000"
              target="_blank"
              className="text-neon-blue hover:text-neon-green"
            >
              github.com/Nyirongo2000
            </Link>
          </p>
        </div>
      </section>

      <hr className="border-t-2 border-neon-blue my-8" />

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-neon-green mb-4">
          Professional Summary
        </h2>
        <p className="text-gray-300 leading-relaxed">
          I am a self-motivated and proficient software engineer passionate
          about exploring new technologies and innovative solutions. Highly
          skilled as a full-stack developer and self-taught designer with a keen
          ability to identify performance trends and areas for improvement. I
          also have good communication skills and the ability to work within a
          system while thinking independently, bringing a unique blend of
          technical expertise and independent thinking.
        </p>
      </section>

      <hr className="border-t-2 border-neon-blue my-8" />

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-neon-green mb-4">
          Academic Background
        </h2>
        <ul className="text-gray-300 leading-relaxed space-y-4">
          <li>
            <strong>
              University of Malawi, Chancellor College (2019 - 2024)
            </strong>
            <br />
            Bachelor of Science in Computer Science
          </li>
          <li>
            <strong>
              National College of Information Technology - NACIT (2019)
            </strong>
            <br />
            NCC Education Level 4 Diploma
          </li>
        </ul>
      </section>

      <hr className="border-t-2 border-neon-blue my-8" />

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-neon-green mb-4">
          Professional Qualifications
        </h2>
        <ul className="text-gray-300 leading-relaxed space-y-4">
          <li>
            <strong>
              Certificate for ALX AiCE - AI Career Essentials - 17th May 2024
            </strong>
          </li>
          <li>
            <strong>
              Project DPro: Project Management for Development Professionals -
              10 March 2024
            </strong>
          </li>
        </ul>
      </section>

      <hr className="border-t-2 border-neon-blue my-8" />

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-neon-green mb-4">
          Experience/Projects
        </h2>
        <ul className="text-gray-300 leading-relaxed space-y-4">
          <li>
            Navigation System For The Visually Impaired: (Final year project
            work)
          </li>
          <li>
            Next-Gen Hackathon: Payslip Automation with Blockchain Technology
          </li>
          <li>UNIMA Off-Campus Accommodation Finder - Web App</li>
          <li>Social Chatting App</li>
        </ul>
      </section>

      <hr className="border-t-2 border-neon-blue my-8" />

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-neon-green mb-4">Skills</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-neon-blue mb-2">
              Technical Skills:
            </h3>
            <ul className="text-gray-300 leading-relaxed list-disc list-inside">
              <li>Mobile App Development (Flutter)</li>
              <li>Web App Development (React, Next.js)</li>
              <li>Back-End Development (Java)</li>
              <li>Database: Postgres, MySQL</li>
              <li>Blockchain (Solidity)</li>
              <li>
                Graphic Design: Adobe Photoshop, Illustrator, Premiere, After
                Effects
              </li>
              <li>
                Project Management: Project planning and execution, team
                coordination
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-neon-blue mb-2">
              Other Skills:
            </h3>
            <ul className="text-gray-300 leading-relaxed list-disc list-inside">
              <li>Excellent problem-solving skills</li>
              <li>Strong communication and interpersonal skills</li>
              <li>Ability to work in a team environment</li>
              <li>Self-motivated and able to work independently</li>
              <li>Capacity to learn quickly and adapt to new situations</li>
              <li>Ability to work under pressure</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-t-2 border-neon-blue my-8" />

      <section>
        <h2 className="text-3xl font-semibold text-neon-green mb-4">
          Traceable Referees
        </h2>
        <div className="space-y-6">
          <div>
            <strong>Dr. Kondwani Munthali</strong>
            <br />
            Head of Computing Department, University of Malawi
            <br />
            <span>Email:</span>{" "}
            <a
              href="mailto:kmunthali@unima.ac.mw"
              className="text-neon-blue hover:text-neon-green"
            >
              kmunthali@unima.ac.mw
            </a>
          </div>
          <div>
            <strong>Jemimah N Kaonga</strong>
            <br />
            Senior Monitoring and Evaluation Officer, Baylor College of Medicine
            <br />
            Phone: +265 888 042 798
            <br />
            <span>Email:</span>{" "}
            <a
              href="mailto:jemimahkaonga22@gmail.com"
              className="text-neon-blue hover:text-neon-green"
            >
              jemimahkaonga22@gmail.com
            </a>
          </div>
          <div>
            <strong>Fatsani Byson</strong>
            <br />
            Lecturer, University of Malawi
            <br />
            Phone: +265 881 051 359
          </div>
        </div>
      </section>
    </main>
  );
}
