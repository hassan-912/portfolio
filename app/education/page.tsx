import Navbar from '../components/Navbar'

const education = [
  {
    type: 'Education',
    title: 'Bachelor of Science in Computer Science',
    institution: 'The Egyptian E-Learning University (EELU)',
    period: '2022 – 2026',
    description: 'Currently pursuing a degree in Computer Science with a focus on software development and artificial intelligence.'
  }
]

const certifications = [
  {
    type: 'Certification',
    title: 'AI Certificate',
    institution: 'Zewail City of Science and Technology',
    period: '2023',
    description: 'Comprehensive training in artificial intelligence fundamentals and applications.'
  },
  {
    type: 'Certification',
    title: 'InnovEgypt Entrepreneurship Program',
    institution: 'ITIDA',
    period: '2023',
    description: 'Entrepreneurship training program focusing on innovation and business development in the technology sector.'
  }
]

export default function Education() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <div className="pt-16">
        <section className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-8">
            Education & Certifications
          </h1>

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 mb-6">
                Education
              </h2>
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400">
                        {edu.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                        {edu.type}
                      </span>
                    </div>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 mb-4">
                    {edu.period}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 mb-6">
                Certifications
              </h2>
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400">
                        {cert.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {cert.institution}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                        {cert.type}
                      </span>
                    </div>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 mb-4">
                    {cert.period}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 