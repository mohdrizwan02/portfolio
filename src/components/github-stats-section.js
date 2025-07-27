"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Github, ExternalLink, Star, Users, TrendingUp, GitCommit, Folder, AlertCircle } from "lucide-react"
import Image from "next/image"
import axios from "axios"

export default function GithubStatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // GitHub username - replace with your actual username
  const GITHUB_USERNAME = "mohdrizwan02" // Change this to your GitHub username

  // State for GitHub data
  const [githubData, setGithubData] = useState({
    user: null,
    repos: [],
    totalCommits: 0,
    totalStars: 0,
    languages: {},
    loading: true,
    error: null,
  })

  // Axios configuration
  const githubApi = axios.create({
    baseURL: "https://api.github.com",
    timeout: 10000,
    headers: {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "Portfolio-Website",
      // Add GitHub token if available for higher rate limits
      ...(process.env.NEXT_PUBLIC_GITHUB_TOKEN && {
        Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      }),
    },
  })

  // Fetch GitHub data using Axios
  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setGithubData((prev) => ({ ...prev, loading: true, error: null }))

        // Fetch user data
        const userResponse = await githubApi.get(`/users/${GITHUB_USERNAME}`)
        const userData = userResponse.data

        // Fetch repositories with pagination
        const reposResponse = await githubApi.get(`/users/${GITHUB_USERNAME}/repos`, {
          params: {
            per_page: 100,
            sort: "updated",
            type: "public",
          },
        })
        const reposData = reposResponse.data

        // Calculate total stars
        const totalStars = reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0)

        // Get languages from repositories
        const languages = {}
        const languagePromises = reposData.slice(0, 15).map(async (repo) => {
          try {
            if (repo.language) {
              languages[repo.language] = (languages[repo.language] || 0) + 1
            }
            // Optionally fetch detailed language stats
            const langResponse = await githubApi.get(`/repos/${GITHUB_USERNAME}/${repo.name}/languages`)
            const repoLanguages = langResponse.data

            Object.entries(repoLanguages).forEach(([lang, bytes]) => {
              languages[lang] = (languages[lang] || 0) + bytes
            })
          } catch (error) {
            // Skip if language data is not available
            console.warn(`Could not fetch languages for ${repo.name}:`, error.message)
          }
        })

        await Promise.allSettled(languagePromises)

        // Estimate total commits
        let totalCommits = 0
        try {
          const commitPromises = reposData.slice(0, 8).map(async (repo) => {
            try {
              const commitsResponse = await githubApi.get(`/repos/${GITHUB_USERNAME}/${repo.name}/commits`, {
                params: { per_page: 1 },
              })

              // Extract total count from Link header
              const linkHeader = commitsResponse.headers.link
              if (linkHeader) {
                const match = linkHeader.match(/page=(\d+)>; rel="last"/)
                return match ? Number.parseInt(match[1]) : 1
              }
              return commitsResponse.data.length
            } catch (error) {
              console.warn(`Could not fetch commits for ${repo.name}:`, error.message)
              return 0
            }
          })

          const commitCounts = await Promise.allSettled(commitPromises)
          totalCommits = commitCounts
            .filter((result) => result.status === "fulfilled")
            .reduce((sum, result) => sum + result.value, 0)
        } catch (error) {
          console.warn("Could not fetch commit data:", error.message)
          // Rough estimate based on repository count and activity
          totalCommits = Math.floor(reposData.length * 12)
        }

        setGithubData({
          user: userData,
          repos: reposData,
          totalCommits,
          totalStars,
          languages,
          loading: false,
          error: null,
        })
      } catch (error) {
        console.error("Error fetching GitHub data:", error)

        let errorMessage = "Failed to fetch GitHub data"
        if (error.response) {
          // Server responded with error status
          if (error.response.status === 404) {
            errorMessage = "GitHub user not found"
          } else if (error.response.status === 403) {
            errorMessage = "GitHub API rate limit exceeded"
          } else if (error.response.status >= 500) {
            errorMessage = "GitHub API server error"
          }
        } else if (error.request) {
          // Request was made but no response received
          errorMessage = "Network error - please check your connection"
        } else if (error.code === "ECONNABORTED") {
          // Request timeout
          errorMessage = "Request timeout - GitHub API is slow"
        }

        setGithubData((prev) => ({
          ...prev,
          loading: false,
          error: errorMessage,
        }))
      }
    }

    fetchGitHubData()
  }, [GITHUB_USERNAME])

  // Fallback data for when API fails or during loading
  const fallbackStats = [
    {
      icon: GitCommit,
      label: "Total Commits",
      value: "500+",
      description: "Across all repositories",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-500/20 to-teal-500/20",
    },
    {
      icon: Star,
      label: "Stars Earned",
      value: "45",
      description: "From open source contributions",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-500/20 to-orange-500/20",
    },
    {
      icon: Users,
      label: "Followers",
      value: "28",
      description: "Active GitHub followers",
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-500/20 to-indigo-500/20",
    },
    {
      icon: Folder,
      label: "Repositories",
      value: "25",
      description: "Public repositories",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/20 to-pink-500/20",
    },
  ]

  // Generate stats from real data
  const stats = githubData.user
    ? [
      {
        icon: GitCommit,
        label: "Total Commits",
        value: githubData.totalCommits > 0 ? `${githubData.totalCommits}+` : "500+",
        description: "Across all repositories",
        color: "from-emerald-500 to-teal-500",
        bgColor: "from-emerald-500/20 to-teal-500/20",
      },
      {
        icon: Star,
        label: "Stars Earned",
        value: githubData.totalStars.toString(),
        description: "From open source contributions",
        color: "from-yellow-500 to-orange-500",
        bgColor: "from-yellow-500/20 to-orange-500/20",
      },
      {
        icon: Users,
        label: "Followers",
        value: githubData.user.followers.toString(),
        description: "Active GitHub followers",
        color: "from-blue-500 to-indigo-500",
        bgColor: "from-blue-500/20 to-indigo-500/20",
      },
      {
        icon: Folder,
        label: "Repositories",
        value: githubData.user.public_repos.toString(),
        description: "Public repositories",
        color: "from-purple-500 to-pink-500",
        bgColor: "from-purple-500/20 to-pink-500/20",
      },
    ]
    : fallbackStats

  // Get top languages
  const topLanguages = Object.entries(githubData.languages)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)

  // Retry function for failed requests
  const retryFetch = () => {
    setGithubData((prev) => ({ ...prev, loading: true, error: null }))
    // Trigger useEffect again by changing a dependency
    window.location.reload()
  }

  return (
    <section id="github" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            GitHub Activity
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {githubData.loading
              ? "Loading my coding journey and contributions..."
              : githubData.error
                ? "A glimpse into my coding journey and open source contributions"
                : `Real-time stats from my GitHub profile (@${GITHUB_USERNAME})`}
          </motion.p>
        </motion.div>

        {/* Loading State */}
        {githubData.loading && (
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center px-8 py-4 bg-white/70 dark:bg-black/50 backdrop-blur-2xl rounded-2xl border border-white/20 dark:border-white/10 shadow-lg"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <motion.div
                className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500 mr-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <span className="text-gray-700 dark:text-gray-300 font-medium text-lg">
                Fetching GitHub data with Axios...
              </span>
            </motion.div>
          </div>
        )}

        {/* Error State */}
        {githubData.error && (
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block"
            >
              <div className="bg-red-50 dark:bg-red-900/20 backdrop-blur-2xl rounded-2xl border border-red-200 dark:border-red-800 shadow-lg p-6 max-w-md mx-auto">
                <div className="flex items-center mb-4">
                  <AlertCircle className="h-6 w-6 text-red-500 mr-3" />
                  <span className="text-red-600 dark:text-red-400 font-semibold">GitHub API Error</span>
                </div>
                <p className="text-red-600 dark:text-red-400 text-sm mb-4">{githubData.error}</p>
                <motion.button
                  onClick={retryFetch}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Retry
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}

        {/* Success indicator */}
        {githubData.user && !githubData.loading && (
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center px-6 py-3 bg-green-50 dark:bg-green-900/20 backdrop-blur-2xl rounded-2xl border border-green-200 dark:border-green-800 shadow-lg"
            >
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse" />
              <span className="text-green-600 dark:text-green-400 font-medium">
                ✅ Live data loaded successfully from GitHub API
              </span>
            </motion.div>
          </div>
        )}

        {/* GitHub Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              className="group relative"
            >
              <div className="bg-white/70 dark:bg-black/50 backdrop-blur-2xl rounded-3xl p-8 text-center border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl opacity-60" />

                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-6 shadow-lg`}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <stat.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  <motion.h3
                    className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                  >
                    {stat.value}
                  </motion.h3>

                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">{stat.label}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{stat.description}</p>
                </div>
              </div>

              {/* Glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl`}
              />
            </motion.div>
          ))}
        </div>

        {/* Real GitHub Stats Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="group relative"
          >
            <div className="bg-white/70 dark:bg-black/50 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
              {/* Glossy overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl opacity-60" />

              <div className="relative z-10">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">GitHub Stats</h4>
                <motion.div
                  className="rounded-2xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={`https://github-readme-stats.vercel.app/api?username=mohdrizwan02&show_icons=true&theme=radical&hide_border=true&bg_color=00000000&cache_seconds=1800`}
                    alt="GitHub Stats"
                    width={400}
                    height={200}
                    className="w-full h-auto"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=200&width=400&text=GitHub+Stats";
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="group relative"
          >
            <div className="bg-white/70 dark:bg-black/50 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
             
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl opacity-60" />

              <div className="relative z-10">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Top Languages</h4>
                <motion.div
                  className="rounded-2xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=mohdrizwan02&layout=compact&theme=radical&hide_border=true&bg_color=00000000&cache_seconds=1800`}
                    alt="Top Languages"
                    width={400}
                    height={200}
                    className="w-full h-auto"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=200&width=400&text=Top+Languages";
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="group relative mb-12"
        >
          <div className="bg-white/70 dark:bg-black/50 backdrop-blur-2xl rounded-3xl p-10 border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
           
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl opacity-60" />

            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <motion.div
                    className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl mr-4"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <TrendingUp className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">GitHub Streak</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">My coding consistency over time</p>
              </div>

              <div className="flex justify-center">
                <motion.div
                  className="rounded-2xl overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >

                  <img
                    src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=radical&hide_border=true&background=00000000&cache_seconds=1800`}
                    alt="GitHub Streak Stats"
                    width={600}
                    height={200}
                    className="w-full h-auto"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=200&width=600&text=GitHub+Streak+Stats";
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

      
        {githubData.repos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Recent Repositories</h3>
              <p className="text-gray-600 dark:text-gray-300">My latest projects and contributions</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {githubData.repos.slice(0, 6).map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 1.6 + index * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative"
                >
                  <div className="bg-white/70 dark:bg-black/50 backdrop-blur-2xl rounded-2xl p-6 border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden h-full">
                    {/* Glossy overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-60" />

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-bold text-lg text-gray-900 dark:text-white truncate flex-1 mr-2">
                          {repo.name}
                        </h4>
                        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                          <Star className="h-4 w-4" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-1 line-clamp-3">
                        {repo.description || "No description available"}
                      </p>

                      <div className="flex items-center justify-between">
                        {repo.language && (
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded-full font-medium">
                            {repo.language}
                          </span>
                        )}
                        <motion.a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-center"
        >
          <motion.a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 dark:from-white dark:to-gray-100 dark:hover:from-gray-100 dark:hover:to-white text-white dark:text-gray-900 px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 group relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <Github className="h-6 w-6 mr-3 relative z-10" />
            <span className="relative z-10">View GitHub Profile</span>
            <ExternalLink className="h-5 w-5 ml-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
