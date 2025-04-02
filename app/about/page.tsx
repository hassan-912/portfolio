import Navbar from '../components/Navbar'
import Image from 'next/image'

export default function About() {
  const skills = [
    'Python', 'JavaScript', 'TypeScript', 'React', 'Next.js',
    'Node.js', 'AI/ML', 'Automation', 'Web Development',
    'Problem Solving', 'Team Leadership'
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <Navbar />
      <div className="pt-16">
        <section className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-8 transition-colors duration-300">
            About Me
          </h1>

          <div className="grid gap-8">
            <div className="bg-white/80 dark:bg-gray-800/80  rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group border border-gray-200 dark:border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-500 relative">
                  <Image
                    src="/pfp.jpg"
                    alt="Hassan Azb"
                    fill
                    className="w-full h-50 object-cover scale-215"
                    priority
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 transition-colors duration-300">
                    Hassan Azb
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 transition-colors duration-300">
                    Computer Science Student & Aspiring Software Developer
                  </p>
                </div>
              </div>

              <div className="space-y-4 mt-6">
                <div>
                  <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2 transition-colors duration-300">
                    Who Am I?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                    I am a passionate Computer Science student at The Egyptian E-Learning University (EELU), 
                    currently in my second year. My journey in technology began with a deep fascination for 
                    how software can solve real-world problems and create meaningful impact.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2 transition-colors duration-300">
                    My Journey
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                    My path in technology started with self-learning and exploring various programming 
                    languages. I've since developed a strong foundation in software development and 
                    continue to expand my knowledge through both academic studies and practical projects.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2 transition-colors duration-300">
                    What Drives Me
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                    I am particularly interested in artificial intelligence and its applications in 
                    solving complex problems. My goal is to contribute to innovative solutions that 
                    make a positive difference in people's lives.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg p-4 text-center transition-colors duration-300">
                  <span className="block text-2xl font-bold text-blue-800 dark:text-blue-200 transition-colors duration-300">2+</span>
                  <span className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">Years Experience</span>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg p-4 text-center transition-colors duration-300">
                  <span className="block text-2xl font-bold text-blue-800 dark:text-blue-200 transition-colors duration-300">10+</span>
                  <span className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">Projects Completed</span>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg p-4 text-center transition-colors duration-300">
                  <span className="block text-2xl font-bold text-blue-800 dark:text-blue-200 transition-colors duration-300">5+</span>
                  <span className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">Technologies</span>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg p-4 text-center transition-colors duration-300">
                  <span className="block text-2xl font-bold text-blue-800 dark:text-blue-200 transition-colors duration-300">3+</span>
                  <span className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">Certifications</span>
                </div>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80  rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group border border-gray-200 dark:border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 transition-colors duration-300">
                Skills & Expertise
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="p-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full transition-colors duration-300">
                      <svg className="w-5 h-5 text-blue-800 dark:text-blue-200 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 