import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from '../../../components/Footer';

// 1. Data Proyek (Kita salin ke sini agar halaman detail tahu isinya)
const daftarKarya = [
  {
    id: "cv-krama-samudra-berkat",
    judul: "Company Profile - CV Krama Samudra Berkat",
    kategori: "Freelance Project",
    tech: "HTML, CSS, JavaScript, Bootstrap, Netlify, DomainNesia",
    deskripsi: "Commissioned by a skipjack tuna export business, this project required a robust digital footprint to reach international B2B clients. Operating as an independent web developer, I took complete ownership of the project lifecycle—from initial concept and UI/UX design to final deployment. The primary objective was to deliver a highly responsive, professional, and fast-loading platform that accurately reflects the client's global business scale.",
    tantangan: "As the sole developer managing the entire end-to-end process, my primary challenge was delivering a production-ready website under a tight deadline while navigating every technical decision independently. To ensure rapid development without sacrificing responsiveness, I strategically utilized Bootstrap alongside HTML, CSS, and JavaScript. I efficiently set up the deployment infrastructure via Netlify and configured custom domain routing through DomainNesia. Furthermore, I implemented foundational SEO best practices, which successfully elevated the client's global digital footprint and actively attracted B2B prospects from multiple countries.",
    gambar: ["/globalfish_1.png", "/globalfish_2.png", "/globalfish_3.png"], // Ganti dengan nama file aslimu nanti
    link: "https://globalfishid.com", // Hapus baris ini jika web sudah mati
    github: "https://github.com/YosiaAmadeus/CV-Krama-Samudra-Berkat.git",   
  },
  {
    id: "jakarta-virtual-tour",
    judul: "Jakarta Virtual Tour",
    kategori: "Work Project",
    tech: "HTML, CSS, JavaScript, Pano2VR",
    deskripsi: "Originally commissioned by the regional government to digitally promote the capital's infrastructure and tourism to the public and potential investors. Taking charge of nearly 70% of the core development, I engineered a high-fidelity, interactive 360-degree digital environment. The resulting platform exceeded initial expectations, leading it to be prominently showcased at the Jakarta Innovation Days 2025.",
    tantangan: "Entrusted as the primary developer for this massive, high-stakes government project on my third day at the company, I faced the daunting challenge of immediately mastering a completely unfamiliar VR engine, 3DVista, while hitting aggressive development deadlines. I tackled this through a rapid, hands-on learning approach—directly applying newly learned mechanics into production builds daily. This allowed me to overcome the steep learning curve under intense pressure and deliver a platform of such high quality that it was unexpectedly selected to be showcased at Jakarta Innovation Days 2025, securing the 'Most Innovative Booth' award.",
    gambar: ["/jakarta_1.png", "/jakarta_2.png", "/jakarta_3.png"], // Ganti dengan nama file aslimu nanti
    link: "https://jakarta.govirtual.id/urban-tourism/", // Hapus baris ini jika web sudah mati
    video: "/jakarta_vid.mp4",
  },
  {
    id: "semarang-virtual-tour",
    judul: "Semarang Virtual Tour",
    kategori: "Work Project",
    tech: "HTML, CSS, JavaScript, Pano2VR",
    deskripsi: "Following the success of the Jakarta initiative, this web-based interactive experience was developed to digitally promote the tourism sector and highlight the iconic landmarks of Semarang. The platform demanded a highly engaging user interface and complex environmental routing to accurately represent the city's rich cultural heritage.",
    tantangan: "Mid-development, the company transitioned its primary VR infrastructure to a more complex engine called Pano2VR, challenging me to learn this advanced software from scratch while concurrently managing the final phases of the Jakarta 3DVista project. I successfully navigated this intense context-switching between two entirely different VR ecosystems by rapidly adapting to Pano2VR's mechanics, maintaining a steady development momentum that ensured the Semarang virtual tour was delivered with high-quality interactivity without ever sacrificing the ongoing Jakarta deployment.",
    gambar: ["/semarang_1.png", "/semarang_2.png", "/semarang_3.png"], // Ganti dengan nama file aslimu nanti
    link: "https://semarang.govirtual.id/lawangsewu/index.html#", // Hapus baris ini jika web sudah mati
    video: "/semarang_vid.mp4",
  }
];

// 2. Fungsi Utama Halaman Dinamis
export default async function ProjectDetail({ params }) {
  const resolvedParams = await params;
  const project = daftarKarya.find((karya) => karya.id.toString() === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 pt-20 pb-10 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        
        {/* Tombol Kembali (Tetap sama) */}
        <div className="mb-12 animate-fade-in-up">
          <Link href="/#portofolio" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 font-medium transition-colors group">
            <span className="group-hover:-translate-x-1 transition-transform">&lt;-</span> 
            Back to Portfolio
          </Link>
        </div>

        {/* Header Halaman Detail */}
        <header className="mb-12 animate-fade-in-up delay-100">
          <span className="inline-block px-4 py-1.5 text-sm font-bold text-blue-700 bg-blue-100 rounded-full mb-6">
            {project.kategori}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 leading-tight">
            {project.judul}
          </h1>

          {/* Container Tombol & Tech Stack */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            
            {/* Tombol Visit Site - HANYA MUNCUL JIKA ADA LINK */}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-2 shrink-0">
                Visit Live Site <span>&#x2197;</span>
              </a>
            )}

            {/* Tombol GitHub Source Code */}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-full font-semibold hover:border-gray-900 hover:bg-gray-50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2">
                  Source Code <span>&lt;/&gt;</span>
                </a>
              )}

            <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-sm flex-grow">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">TOOLS & TECH STACK</h3>
              <p className="text-gray-800 font-medium">{project.tech}</p>
            </div>
          </div>
        </header>

        {/* 2. Featured Media (Mendukung Video dan Foto Sekaligus) */}
        <div className="mb-16 flex flex-col gap-8 animate-fade-in-up delay-200">
          
          {/* Render Video Pertama (Jika Ada) */}
          {project.video && (
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-gray-900 aspect-video relative group">
              <video 
                src={project.video} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          )}

          {/* Render Foto (Bisa 1 atau banyak) */}
          {project.gambar && project.gambar.map((imgSrc, index) => (
            <div key={index} className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-gray-200 relative">
              <img 
                src={imgSrc} 
                alt={`${project.judul} screenshot ${index + 1}`} 
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700" 
              />
            </div>
          ))}

          {/* Jika tidak ada gambar maupun video sama sekali */}
          {!project.gambar && !project.video && (
            <div className="rounded-3xl overflow-hidden shadow-sm border-4 border-dashed border-gray-200 aspect-video relative flex items-center justify-center bg-gray-50">
              <span className="text-gray-400 font-medium tracking-widest uppercase">Media Coming Soon</span>
            </div>
          )}

        </div>

        {/* Konten Utama (Overview & Challenges) */}
        <article className="prose prose-lg max-w-none text-gray-600 animate-fade-in-up delay-300">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="mb-10 leading-relaxed text-xl">
            {project.deskripsi}
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenges & Solutions</h2>
          <p className="leading-relaxed text-lg bg-gray-100 p-8 rounded-3xl">
            {project.tantangan}
          </p>
        </article>
          
        {/* --- FOOTER --- */}
        <Footer />
                
      </div>
    </main>
  );
}