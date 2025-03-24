import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React.js", "Vite", "Tailwind CSS"];
const backendSkills = ["Node.js", "Express.js", "Prisma", "PostgreSQL", "JWT", "bcrypt"];
const databaseSkills = ["PostgreSQL", "Docker"];
const mlSkills = ["TensorFlow", "Scikit-learn", "OpenCV", "Mediapipe", "NumPy", "pandas", "Matplotlib"];
const developerTools = ["Git", "Visual Studio", "Arduino"];
const programmingLanguages = ["C++ ", "Java", "Python", "SQL", "JavaScript (ES6+)", "HTML", "CSS"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
            A full-stack developer and ML enthusiast specializing in IoT. 
            I build scalable applications, AI-driven systems, and innovative tech solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
    {[  
      { title: "Frontend", skills: frontendSkills },
      { title: "Backend", skills: backendSkills },
      { title: "Programming Languages", skills: programmingLanguages },
      { title: "ML & Data Science", skills: mlSkills },
      { title: "Databases & Cloud", skills: databaseSkills },
      { title: "Developer Tools & Version Control", skills: developerTools },
    ].map((category, index) => (
      <div key={index} className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-white/10">
        <h3 className="text-xl font-bold mb-4"> {category.title} </h3>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((tech, key) => (
            <span
              key={key}
              className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                         hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
              </div>
            


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  
  {/* Education Section */}
  <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
    <h3 className="text-xl font-bold mb-4 text-blue-400"> 🏫 Education </h3>
    <div className="space-y-4 text-gray-300">
      
      <div>
        <h4 className="font-semibold text-white"> B.Tech, Computer Science and Engineering </h4>
        <p className="text-sm text-gray-400"> Vellore Institute of Technology (VIT), Vellore | CGPA: 8.63 </p>
        <span className="text-blue-400 text-sm"> Sep 2021 - Jul 2025 </span>
      </div>

      <div>
        <h4 className="font-semibold text-white"> Class 12 (BIEAP) </h4>
        <p className="text-sm text-gray-400"> Percentage: 98% </p>
        <span className="text-blue-400 text-sm"> Mar 2020 - Jun 2021 </span>
      </div>

      <div>
        <h4 className="font-semibold text-white"> Class 10 (SSC) </h4>
        <p className="text-sm text-gray-400"> CGPA: 10 </p>
        <span className="text-blue-400 text-sm"> Mar 2018 - Apr 2019 </span>
      </div>

    </div>
  </div>

  {/* Certifications Section */}
  <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
    <h3 className="text-xl font-bold mb-4 text-blue-400"> 📜 Certifications and Licenses </h3>
    <div className="space-y-4 text-gray-300">
      
      <div>
        <h4 className="font-semibold text-white"> AWS Certified Solutions Architect – Associate </h4>
        <p className="text-sm text-gray-400"> Amazon Web Services (AWS) | Issued Aug 2024 </p>
        <div className="flex justify-between items-center">
          <a 
            href="https://drive.google.com/file/d/1DULp5W6064GpdBVAIAnCIeKxkXbMWynh/view"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors my-4"
          >
            View Certificate →
          </a>
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-white"> AWS Cloud Practitioner </h4>
        <p className="text-sm text-gray-400"> Amazon Web Services (AWS) | Issued Jun 2024 </p>
        <div className="flex justify-between items-center">
          <a 
            href="https://drive.google.com/file/d/1h5ZEJGVPZTeS7b_4K7zeydlWqbFs0QdY/view"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors my-4"
          >
            View Certificate →
          </a>
        </div>
      </div>

    </div>
 

       
            </div>


          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
