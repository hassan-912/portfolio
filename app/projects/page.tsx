'use client'

import Navbar from '../components/Navbar'
import { useRouter } from 'next/navigation'

interface Project {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  demoUrl?: string
}

const projects: Project[] = [
  {
    title: 'Treasure Hunt AI Game',
    description: 'An AI-powered treasure hunt game implementing A* algorithm and Greedy Search for optimal pathfinding.',
    technologies: ['Python', 'AI/ML', 'Pathfinding Algorithms'],
    githubUrl: 'https://github.com/seif-ashraf-007/treasure-hunt-ai-game.git'
  },
  {
    title: 'Muscle-Generator Website',
    description: 'A fitness-focused website built with modern web technologies to help users track and optimize their workouts.',
    technologies: ['JavaScript', 'Tailwind CSS', 'React'],
    githubUrl: 'https://github.com/hassan-912/grow-muscle',
    demoUrl: 'https://blockhaven.net/'
  }
]

export default function Projects() {
  const router = useRouter()

  const handleNavigation = (url: string) => {
    router.push(url) // Use Next.js router for navigation
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <div className="pt-16">
        <section className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-8">
            Projects
          </h1>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group"
              >
                {/* Prevent overlay from blocking buttons */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={() => handleNavigation(project.githubUrl)}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    type="button"
                  >
                    GitHub
                  </button>
                  {project.demoUrl && (
                    <button
                      onClick={() => handleNavigation(project.demoUrl!)}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                      type="button"
                    >
                      Live Demo
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
