"use client";
import Link from "next/link";
import { useState } from "react";
import Footer from '../components/Footer';
  
const daftarKarya = [
  {
    id: "cv-krama-samudra-berkat",
    judul: "Company Profile - CV Krama Samudra Berkat",
    kategori: "Freelance Project",
    tech: "HTML, CSS, JavaScript, Bootstrap, Netlify, DomainNesia",
    deskripsi: "A responsive company profile website designed to establish a strong digital presence for a professional client, encompassing full UI development, domain integration, and end-to-end deployment."
  },
  {
    id: "jakarta-virtual-tour",
    judul: "Jakarta Virtual Tour",
    kategori: "Work Project",
    tech: "HTML, CSS, JavaScript, 3DVista",
    deskripsi: "An immersive 360-degree interactive virtual tour platform exploring Jakarta. This project was awarded the 'Most Innovative Booth' at Jakarta Innovation Days 2025."
  },
  {
    id: "semarang-virtual-tour",
    judul: "Semarang Virtual Tour",
    kategori: "Work Project",
    tech: "HTML, CSS, JavaScript, Pano2VR",
    deskripsi: "An interactive web-based virtual tour experience designed to promote tourism and showcase the iconic landmarks of Semarang city."
  }
];

export default function Home() {

  // --- SEMUA STATE DIKUMPULKAN DI SINI (Level Teratas Komponen) ---
  const [filterAktif, setFilterAktif] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("idle"); // State baru untuk animasi form

  const daftarKategori = ["All", "Freelance Project", "Work Project"];
  const karyaDisaring = filterAktif === "All" ? daftarKarya : daftarKarya.filter((karya) => filterAktif === karya.kategori)
  
  // --- FUNGSI SUBMIT FORM ---
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("loading");

    const form = e.target;
    const formData = new FormData(form);

    try {
      // 1. UBAH "/" MENJADI "/__forms.html"
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      
      // 2. TAMBAHKAN PENGECEKAN INI AGAR ANIMASI JUJUR
      if (!response.ok) {
        throw new Error("Gagal mengirim pesan");
      }
      
      setFormStatus("success");
      form.reset();
      setTimeout(() => setFormStatus("idle"), 4000);
      
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 4000);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-10 md:p-10">
      <div className="max-w-7xl mx-auto">

        {/* --- HEADER / NAVBAR --- */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b-2 border-gray-200 transition-all">
          <div className="px-6 md:px-20">
            <div className="max-w-7xl mx-auto py-4 flex justify-between items-center relative">
              
              {/* Logo */}
              <div className="text-xl md:text-2xl font-bold font-mono tracking-tight text-gray-800">
                yosia<span className="text-blue-600">.portfolio()</span>
              </div>
              
              {/* Desktop Menu (Sembunyi di HP) */}
              <div className="hidden md:flex gap-8 text-sm font-medium text-gray-500 mr-5">
                <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
                <a href="#portofolio" className="hover:text-gray-900 transition-colors">Projects</a>
                <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
              </div>

              {/* Hamburger Button (Hanya muncul di HP) */}
              <button 
                className="md:hidden flex flex-col gap-1.5 p-2 z-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                <span className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
                <span className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
              </button>

            </div>
          </div>

          {/* Mobile Dropdown Menu (Muncul jika isMenuOpen bernilai true) */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white border-b-2 border-gray-200 shadow-xl flex flex-col py-4 px-6 gap-4 animate-fade-in-down">
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-gray-600 hover:text-gray-900">About</a>
              <a href="#portofolio" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          )}
        </nav>

        {/* --- HERO SECTION --- */}
        <section className="relative min-h-screen flex items-center pt-32 lg:pt-20 pb-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          
            {/* Kolom Kiri: Teks, Tombol & Tech Stack */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 leading-tight opacity-0 animate-fade-in-up">
                Hi, I'm Yosia.
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-6 opacity-0 animate-fade-in-up delay-100">
                A web developer crafting digital experiences.
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-500 mb-10 leading-relaxed max-w-2xl opacity-0 animate-fade-in-up delay-200">
                I enjoy turning ideas into functional, responsive, and user-friendly digital experiences, while constantly learning and improving my craft.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up delay-300">
                <a href="#portofolio" className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:shadow-lg hover:-translate-y-1 inline-block">
                  View My Work
                </a>
                <a href="#about" className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-full font-semibold hover:border-gray-900 hover:bg-gray-50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 inline-block">
                  About Me
                </a>
              </div>

              {/* Elemen Pengisi Ruang: Tech Stack */}
              <div className="mt-12 flex flex-col lg:flex-row items-center gap-4 opacity-0 animate-fade-in-up delay-300">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Tech Stack</p>
                <div className="hidden lg:block w-12 h-[2px] bg-gray-200"></div>
                <div className="flex flex-wrap justify-center gap-3 text-gray-600 text-sm font-medium">
                  <span className="px-3 py-1 bg-gray-100 rounded-full">JavaScript</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full">ReactJS</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full">Next.js</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full">SQL</span>
                </div>
              </div>

            </div>

            {/* Kolom Kanan: Tempat Foto */}
            <div className="flex justify-center lg:justify-end mt-8 lg:mt-0 opacity-0 animate-fade-in-up delay-200">
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem]">
                <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
                <div className="relative w-full h-full bg-gray-200 rounded-[2.5rem] shadow-xl overflow-hidden border-4 border-white flex items-center justify-center hover:scale-[1.02] transition-transform duration-500">
                  <img src="/Yos - Drum 4.jpg" alt="Yosia Amadeus" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- ABOUT & EXPERIENCE SECTION --- */}
        <section id="about" className="mb-32 scroll-mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Kolom Kiri: Cerita & CV */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">About Me</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  I am a web developer focused on building clean, responsive, and user-centric interfaces. My core stack revolves around HTML, modern CSS (Tailwind), JavaScript (React/Next.js), and SQL.
                </p>
                <p>
                  As I begin my professional journey in the tech industry, I approach every project with humility and a strong desire to grow. I am highly motivated to deepen my expertise in frontend engineering while gradually exploring backend architectures to build a comprehensive, full-stack understanding of how robust web applications work.
                </p>
                <p>
                 When I am not writing code, you can usually find me behind a drum kit. It is the perfect creative outlet for me to balance out the logical, problem-solving side of web development and keep my energy high. More than just a hobby, playing music with others has taught me how to listen closely, adapt to different tempos, and collaborate seamlessly—skills that I bring into every development team I am a part of.
                </p>
              </div>
              <a href="CV Yosia Amadeus Ishak.pdf" download="CV Yosia Amadeus Ishak.pdf" className="px-6 py-3 bg-white text-gray-900 border-2 border-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all inline-block text-center">
                Download Resume (PDF)
              </a>
            </div>

            {/* Kolom Kanan: Timeline Pengalaman */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-8">Experience</h2>
              
              <div className="space-y-8 border-l-2 border-gray-100 ml-3 pl-6">
                
                {/* Item Timeline 1 */}
                <div className="relative">
                  <span className="absolute -left-[35px] top-1 w-4 h-4 bg-gray-900 rounded-full border-4 border-white"></span>
                  <h3 className="text-xl font-bold text-gray-900">Freelance Web Developer</h3>
                  <p className="text-sm text-blue-600 font-semibold mb-2">Independent / Clients &bull; 2025 - Present</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Developing and deploying custom websites, as well as providing ongoing maintenance, domain integration, and hosting management.
                  </p>
                </div>

                {/* Item Timeline 2 */}
                <div className="relative">
                  <span className="absolute -left-[35px] top-1 w-4 h-4 bg-gray-900 rounded-full border-4 border-white"></span>
                  <h3 className="text-xl font-bold text-gray-900">Frontend Web Developer</h3>
                  <p className="text-sm text-blue-600 font-semibold mb-2">Teknologi GoVirtual Indonesia &bull; Sep 2025 - Mar 2026</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                   Built immersive 360-degree interactive virtual tour experiences for government clients across Semarang, Bogor, Lampung and notably Jakarta, whose project secured the 'Most Innovative Booth' award at Jakarta Innovation Days 2025.
                    </p>
                </div>

                {/* Item Timeline 3 */}
                <div className="relative">
                  <span className="absolute -left-[35px] top-1 w-4 h-4 bg-gray-900 rounded-full border-4 border-white"></span>
                  <h3 className="text-xl font-bold text-gray-900">IT Developer Intern</h3>
                  <p className="text-sm text-blue-600 font-semibold mb-2">MNC Tourism Indonesia (formerly MNC Land) &bull; Apr 2025 - Jul 2025</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Contributed to the Property Management System by developing full-stack features using Angular and Laravel, implementing SQL database audit logs, and ensuring seamless UI behavior through QA testing. Beyond my primary development tasks, I expanded my technical scope by assisting with Odoo server backup operations and spearheading early R&D for intelligent AI agents using Python.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>
        
        {/* --- PORTFOLIO SECTION --- */}
        <section id="portofolio" className="mb-32 scroll-mt-32">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Projects</h1>
            <p className="mt-4 text-gray-500 text-lg">A collection of my recent work and professional explorations.</p>
          </header>

          <div className="flex gap-4 mb-8">
            {daftarKategori.map((kategori) => (
              <button key={kategori} onClick={() => setFilterAktif(kategori)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${filterAktif === kategori ? "bg-gray-900 text-white" : "bg-white text-gray-600 hover:bg-gray-100"}`}>{kategori}</button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {karyaDisaring.map((karya) => (
              <div key={karya.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-50 rounded-full mb-4">
                    {karya.kategori}
                  </span>
                  <h2 className="text-xl font-bold mb-2 leading-tight">{karya.judul}</h2>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {karya.deskripsi}
                  </p>
                </div>
                
                <div className="mb-6 mt-auto">
                  <Link href={`/projects/${karya.id}`} className="text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors inline-flex items-center gap-1 group">
                    View Details 
                    <span className="group-hover:translate-x-1 transition-transform">-&gt;</span>
                  </Link>
                </div>

                <div className="pt-4 border-t border-gray-50 mt-auto">
                  <p className="text-xs text-gray-400 font-medium tracking-wide">
                    TOOLS & TECH STACK
                  </p>
                  <p className="text-sm font-semibold text-gray-700 mt-1">
                    {karya.tech}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section id="contact" className="mb-20 scroll-mt-32">
          <div className="bg-gray-900 text-white rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                  Let's work together.
                </h2>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-md mx-auto lg:mx-0">
                  Whether you need to build a web application from scratch, require assistance managing domains and hosting for your business, or just want to connect, I'm always open to discussing new opportunities.
                </p>
                
                <div className="flex flex-col items-center lg:items-start gap-6">
                  <div className="flex items-center gap-4">
                    <span className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center font-bold text-xl">@</span>
                    <span className="text-gray-300 font-medium text-lg">yosiaamadeus10@gmail.com</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 md:p-8 text-gray-900 shadow-lg">
                <form 
                  name="contact" 
                  method="POST" 
                  data-netlify="true" 
                  onSubmit={handleFormSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                    <input type="text" name="name" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                    <input type="email" name="email" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                    <textarea rows="4" name="message" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all resize-none" placeholder="Tell me about your project..."></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={formStatus === "loading"}
                    className={`w-full py-4 text-white rounded-xl font-bold transition-all ${
                      formStatus === "loading" ? "bg-gray-500 cursor-not-allowed" : 
                      formStatus === "success" ? "bg-green-500" : 
                      formStatus === "error" ? "bg-red-500" :
                      "bg-gray-900 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-1"
                    }`}
                  >
                    {formStatus === "loading" ? "Sending..." : 
                     formStatus === "success" ? "Message Sent! ✅" : 
                     formStatus === "error" ? "Oops! Try Again." : 
                     "Send Message"}
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <Footer />

      </div>
    </main>
  );
}