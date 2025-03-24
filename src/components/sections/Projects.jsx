import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Gesture Control freeBOT using OpenCV and Mediapip</h3>
              <p className="text-gray-400 mb-4">
              Developed a real-time gesture-controlled freeBOT using OpenCV and MediaPipe for precise hand landmark track-
ing. Integrated an ESP32 microcontroller with optimized Bluetooth communication for low-latency wireless control.
Improved responsiveness by implementing multi-threaded processing, Kalman filtering, and adaptive gesture recog-
nition. Engineered for efficient human-machine interaction, ensuring accurate and real-time navigation.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["OpenCV", "MediaPipe","Python"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-x-24 my-4">
                  <a
                    href="https://github.com/rajkumarmallipaamu/CPU-scheduler"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project →
                  </a>

                 
                </div>

            </div>


            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Offline Signature Forgery Detection</h3>
              <p className="text-gray-400 mb-4">
              Developed a deep learning-based Offline Signature Forgery Detection system using CNNs and VGG16, achieving
99.62% accuracy. Implemented precision, recall, and F1-score evaluations for robust model validation. Leveraged
TensorFlow, sklearn, seaborn, and matplotlib for data preprocessing, model training, and performance visualization.
Optimized feature extraction and classification to enhance forgery detection reliability
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["CNN", "TensorFlow", "sklearn", "seaborn", "matplotlib"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-x-24 my-4">
                  <a
                    href="https://github.com/rajkumarmallipaamu/Fake-signature-detection"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project →
                  </a>

          
                </div>
            </div>
                </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Cloud-Based Gas Detection and Alert System Using Raspberry Pi</h3>
              <p className="text-gray-400 mb-4">
              Designed an IoT-based gas monitoring system using MQ sensors and Raspberry Pi with ADC (MCP3008) for real-time gas detection. Integrated Wi-Fi for cloud connectivity and Pushover API for instant mobile alerts.

              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[ "Raspberry Pi", "MQ Sensors", "Python", 
      "Pushover API", "Wi-Fi", "Cloud Integration"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-x-24 my-4">
                  <a
                    href="https://drive.google.com/drive/folders/1qWf9zbcsTzVBUiizHqJ0Iu6F3E8wNagN?usp=sharing"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project →
                  </a>

                  <a
                    href="https://drive.google.com/file/d/1Q_6gWEjCDBxWDh6a6csr-kXbyfQnRqw5/view?usp=sharing"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    demo →
                  </a>
                </div>

            </div>


            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">CPU Scheduler</h3>
              <p className="text-gray-400 mb-4">
              Developed a web-based CPU scheduling simulator using HTML, CSS, and JavaScript
               for real-time process visualization. Simulated FCFS, SJF, SRTF, and RR algorithms, analyzing turnaround and waiting times.
               Integrated interactive Gantt charts for dynamic performance evaluation.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-x-24 my-4">
                  <a
                    href="https://github.com/rajkumarmallipaamu/CPU-scheduler"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project →
                  </a>

                  <a
                    href="https://rajkumarmallipaamu.github.io/CPU-scheduler/"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    demo →
                  </a>
                </div>
            </div>
    



            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">ToDo List</h3>
              <p className="text-gray-400 mb-4">
              Built a full-stack ToDo app with Node.js, Express.js, and React,
               featuring JWT authentication and Prisma-managed PostgreSQL. 
              Secured with bcrypt and containerized using Docker for scalability.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Node.js", "Express.js", "Prisma", "PostgreSQL", "Docker", "bcrypt", "JWT"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/rajkumarmallipaamu/ToDo-List"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Portfolio</h3>
              <p className="text-gray-400 mb-4">
              Built a responsive portfolio using React, Vite, and Tailwind CSS with dynamic rendering and smooth animations.
               Optimized performance through code-splitting and lazy loading for a fast, seamless user experience
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Vite", "Tailwind CSS", "JavaScript (ES6+)"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/rajkumarmallipaamu/Rajkumar-portfolio"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
