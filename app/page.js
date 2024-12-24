"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header";
import { AtomIcon, Edit, Share2 } from "lucide-react";
import { useEffect } from "react";
import 'animate.css';


export default function Home() {
  // Add animation delay to ensure the page loads smoothly
  useEffect(() => {
    const heading = document.getElementById('heading');
    setTimeout(() => {
      heading?.classList.add('animate__animated', 'animate__fadeIn');
    }, 500); // Animation delay after loading
  }, []);

  return (
    <div className="relative">
      {/* Background Image */}
      <Image
        src={"/grid.svg"}
        alt="Background grid"
        className="absolute z-[-10] w-full"
        width={1200}
        height={300}
      />
      
      {/* Header Component */}
      <Header />
      
      {/* Landing Section */}
      <section className="z-50">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          {/* Main Heading with Animation */}
          <h1
            id="heading"
            className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white animate__animated animate__fadeIn"
          >
            Your Personal AI Interview Coach
          </h1>
          
          {/* Subheading */}
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Double your chances of landing that job offer with our AI-powered
            interview prep.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="/dashboard"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 transform transition-transform duration-300 hover:scale-105"
            >
              Get Started
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Additional Section (Optional) */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose Our AI Interview Coach?</h2>
        <p className="text-lg mb-8">
          Our personalized coaching system is designed to mimic real-life interview scenarios, providing valuable feedback.
        </p>
        <div className="flex justify-center space-x-6">
          <div className="bg-white p-6 rounded-xl shadow-lg text-gray-900 w-64">
            <AtomIcon className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-Time Feedback</h3>
            <p>Get immediate feedback after every mock interview.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-gray-900 w-64">
            <Edit className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered Coaching</h3>
            <p>Leverage cutting-edge AI to enhance your interview skills.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-gray-900 w-64">
            <Share2 className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Practice Anywhere</h3>
            <p>Prepare for interviews anytime, anywhere, on any device.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
