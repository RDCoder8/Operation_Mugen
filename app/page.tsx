// Middleware to protect routes in a Next.js application using Clerk for authentication
// This code checks if the user has the 'alumni' role and redirects them to the home page if they don't.
// It also fetches a list of users based on a search query and displays them in the UI.
//
// The code is structured to be used in a Next.js application with TypeScript support.
// It uses Clerk for user authentication and role management.
// The code is organized into a functional component that handles the rendering of the alumni dashboard.
// It includes a search functionality to filter users based on their names or email addresses.

import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-royal-blue text-white min-h-screen">
      {/* Header/Navbar - Assuming this is imported from your Navbar component */}
      <header className="sticky top-0 z-50 bg-royal-blue/90 backdrop-blur-sm">
        <Navbar />
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center p-8 sm:p-20 bg-royal-blue text-white" >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">Welcome to Mugen</h1>
          <p className="text-xl sm:text-2xl mb-8">Building amazing experiences</p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <a
              className="rounded-full bg-white text-royal-blue px-6 py-3 font-medium hover:bg-gray-100 transition-colors"
              href="#get-involved"
            >
              Get Started
            </a>
            <a
              className="rounded-full border border-white px-6 py-3 font-medium hover:bg-white/10 transition-colors"
              href="#testimonials"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="min-h-screen flex items-center justify-center p-8 sm:p-20 bg-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">What People Say</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <p className="mb-4 italic">"This platform has completely transformed how we work. The performance is incredible!"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20"></div>
                  <div>
                    <p className="font-bold">PinkDragon</p>
                    <p className="text-sm opacity-80">CEO, Company {item}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="min-h-screen flex items-center justify-center p-8 sm:p-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Get Involved</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { title: "Join Our Team", desc: "Become part of our growing family" },
              { title: "Partnership", desc: "Let's build something amazing together" },
              { title: "Contribute", desc: "Help us improve our platform" },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="mb-4">{item.desc}</p>
                <button className="text-sm font-medium hover:underline">Learn more →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Mission Section */}
       <section id="mission" className="min-h-screen flex items-center justify-center p-8 sm:p-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Mission</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { title: "Join Our Team", desc: "Become part of our growing family" },
              { title: "Partnership", desc: "Let's build something amazing together" },
              { title: "Contribute", desc: "Help us improve our platform" },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="mb-4">{item.desc}</p>
                <button className="text-sm font-medium hover:underline">Learn more →</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
<section id="contact" className="min-h-screen flex items-center justify-center p-8 sm:p-20 bg-royal-blue text-white">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Contact Us</h2>
    <form className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-lg">Full Name</label>
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          className="w-full p-3 mt-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-lg">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="Your Email"
          className="w-full p-3 mt-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-lg">Message</label>
        <textarea
          id="message"
          placeholder="Your Message"
          rows={4}
          className="w-full p-3 mt-2 border border-gray-300 rounded-md"
        ></textarea>
      </div>
      <button type="submit" className="bg-gold text-white border-2 border-gold px-6 py-3 rounded-full font-semibold hover:bg-gold-dark hover:border-gold-dark transition-all">
        Submit
      </button>
    </form>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-black/10 py-12 px-8 sm:px-20">
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-4">
          <div>
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={120}
              height={28}
            />
            <p className="mt-4 text-sm opacity-80">Building the future together</p>
          </div>
          {["Product", "Company", "Resources", "Legal"].map((item) => (
            <div key={item}>
              <h3 className="font-bold mb-4">{item}</h3>
              <ul className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <li key={i}>
                    <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:underline">
                      {item} Link {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-80">© 2023 Company Name. All rights reserved.</p>
          <div className="flex gap-6">
            {["twitter", "facebook", "linkedin", "github"].map((social) => (
              <a key={social} href="#" className="opacity-80 hover:opacity-100">
                <span className="sr-only">{social}</span>
                <div className="w-6 h-6 bg-white/20 rounded-full"></div>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

// Placeholder for your Navbar component
function Navbar() {
  return (
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={120}
          height={28}
        />
      </div>
      <div className="hidden md:flex space-x-8">
        <a href="#hero" className="hover:underline"></a>
        <a href="#mission" className="hover:underline">Mission</a>
        <a href="#get-involved" className="hover:underline">Get Involved</a>
        <a href="#get-involved" className="hover:underline">Donate</a>
        <a href="#get-involved" className="hover:underline">Volutneer</a>
        <a href="#contact" className="hover:underline">Contact Us</a>
        <a href="#testimonials" className="hover:underline">Testimonials</a>
      </div>
      <button className="md:hidden">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
}



