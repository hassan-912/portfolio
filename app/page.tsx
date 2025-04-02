import Navbar from './components/Navbar'
import SocialLinks from './components/SocialLinks'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <Navbar />
      <div className="pt-16">
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-4 transition-colors duration-300">
              Hassan Azb
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
              Computer Science Student & Aspiring Software Developer
            </h2>
            <div className="flex justify-center mb-12">
              <SocialLinks />
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
              Welcome to my portfolio! I'm passionate about creating innovative solutions and exploring the endless possibilities of technology.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
