import Navbar from '../components/Navbar'

const experiences = [
  {
    type: 'Volunteering',
    title: 'Public Relations Trainee',
    organization: 'Ministry of Youth and Sports',
    location: 'Cairo, Egypt',
    period: 'Mar 2024 – Present',
    description: 'Working in the public relations department, handling communications and outreach initiatives.'
  },
  {
    type: 'Volunteering',
    title: 'PR Member',
    organization: 'Youth Leading Youth (YLY)',
    location: 'Egypt',
    period: 'Present',
    description: 'Contributing to youth development initiatives and community engagement programs.'
  },
  {
    type: 'Volunteering',
    title: 'Assistant Team Manager',
    organization: 'MCS',
    location: 'Egypt',
    period: 'May 2023 – Present',
    description: 'Supporting team operations and project management in a student organization.'
  }
]

export default function Experience() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <div className="pt-16">
        <section className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-8">
            Experience
          </h1>

          <div className="grid gap-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400">
                      {exp.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      {exp.organization}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                      {exp.type}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center text-gray-600 dark:text-gray-400 mb-4">
                  <span>{exp.location}</span>
                  <span className="hidden md:inline mx-2">•</span>
                  <span>{exp.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
} 