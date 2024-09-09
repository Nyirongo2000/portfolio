"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

// Component for Contact Form
export default function Contactus() {
  // State variables for form inputs
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false); // New state for modal visibility

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form behavior
    console.log("Sending");

    // Prepare data
    let data = {
      firstName,
      surName,
      email,
      message,
    };

    // POST request to API
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Response succeeded!");
          setSubmitted(true);

          // Clear the form fields
          setFirstName("");
          setSurName("");
          setEmail("");
          setMessage("");

          // Show success modal
          setShowModal(true);
        }
      })
      .catch((err) => {
        console.log("Error occurred:", err);
      });
  };

  return (
    <>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold">Message Sent!</h2>
            <p>
              Your message has been sent successfully. We will get back to you
              soon.
            </p>
            <button
              className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Section Header */}
      <div className="flex flex-col justify-start p-6">
        <h6>Do you like what you see?</h6>
        <h1 className="text-5xl">Let us Work on that Dream Project</h1>
      </div>

      <div className="flex flex-row justify-evenly">
        {/* Contact Form */}
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="p-6 w-full h-fit max-w-md bg-white shadow-lg rounded-md"
          >
            {/* First Name Field */}
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Surname Field */}
            <div className="mb-4">
              <label
                htmlFor="surname"
                className="block text-sm font-medium text-gray-700"
              >
                Surname
              </label>
              <input
                onChange={(e) => setSurName(e.target.value)}
                value={surName}
                type="text"
                id="surname"
                name="surName"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col justify-center gap-4">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Submit
              </button>

              <hr />
              <p className="text-center"> or</p>

              {/* WhatsApp Contact */}
              <Link
                href={"https://wa.me/265882748301?text=hello"}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                <div className="flex flex-row justify-between gap-1">
                  <p>Get in Touch</p>
                  <FaWhatsapp className="text-2xl text-white" />
                </div>
              </Link>
            </div>
          </form>
        </div>

        {/* Image */}
        <div>
          <Image
            src="/resources/happy1.png"
            alt="Description of image"
            width={600}
            height={400}
            className="object-cover hidden md:block mt-4"
          />
        </div>
      </div>
    </>
  );
}
