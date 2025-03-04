"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 backdrop-blur-sm bg-background/90 border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            <Link href="/" className="text-primary hover:text-primary/80 transition-colors">
              YourName
            </Link>
          </div>
          <nav
            className={`${
              mobileMenuOpen ? "flex" : "hidden"
            } md:flex absolute md:static inset-x-0 top-16 p-4 md:p-0 bg-background md:bg-transparent border-b md:border-0 flex-col md:flex-row gap-6 md:items-center`}
          >
            <Link
              href="#about"
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="hidden md:flex gap-2">
              <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-foreground hover:text-primary hover:bg-primary/10">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-foreground hover:text-primary hover:bg-primary/10">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-muted-foreground hover:text-primary hover:bg-primary/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <section className="py-12 md:py-24 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">YourName</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Software Engineer specializing in building exceptional digital experiences.
            </p>
            <div className="flex gap-4 pt-4">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#contact">Get in touch</Link>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link href="#projects">View my work</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image src="/placeholder.svg?height=320&width=320" alt="Profile" fill className="object-cover" priority />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-24 scroll-mt-16 section-alt rounded-xl p-6 md:p-8">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            About Me
            <div className="h-px bg-primary/30 flex-1 ml-4"></div>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg">
                I'm a passionate software engineer with a focus on creating clean, efficient, and user-friendly
                applications. With a strong foundation in both frontend and backend technologies, I enjoy tackling
                complex problems and turning ideas into reality.
              </p>
              <p className="text-lg">
                My journey in software development began with [your background story]. Since then, I've worked on a
                variety of projects ranging from [types of projects] to [other types of projects].
              </p>
              <p className="text-lg">When I'm not coding, you can find me [your hobbies or interests].</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Education</h3>
              <div className="space-y-2">
                <div>
                  <div className="font-medium">Bachelor of Science in Computer Science</div>
                  <div className="text-muted-foreground">University Name, 20XX - 20XX</div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6">Experience</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-medium">Software Engineer</div>
                  <div className="text-muted-foreground">Company Name, 20XX - Present</div>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>Developed and maintained [specific projects or technologies]</li>
                    <li>Collaborated with cross-functional teams to deliver [specific outcomes]</li>
                    <li>Improved [specific metrics] by implementing [specific solutions]</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            Projects
            <div className="h-px bg-primary/30 flex-1 ml-4"></div>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <Card className="overflow-hidden group hover:shadow-md hover:shadow-primary/10 transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Project 1"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">Project Name</h3>
                  <div className="flex gap-2">
                    <Link href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-foreground hover:text-primary hover:bg-primary/10"
                      >
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                    <Link href="https://project1-demo.com" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-foreground hover:text-primary hover:bg-primary/10"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="sr-only">Live Demo</span>
                      </Button>
                    </Link>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  A brief description of the project, what it does, and the problems it solves.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="overflow-hidden group hover:shadow-md hover:shadow-primary/10 transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Project 2"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">Project Name</h3>
                  <div className="flex gap-2">
                    <Link href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-foreground hover:text-primary hover:bg-primary/10"
                      >
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                    <Link href="https://project2-demo.com" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-foreground hover:text-primary hover:bg-primary/10"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="sr-only">Live Demo</span>
                      </Button>
                    </Link>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  A brief description of the project, what it does, and the problems it solves.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Prisma</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="overflow-hidden group hover:shadow-md hover:shadow-primary/10 transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Project 3"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">Project Name</h3>
                  <div className="flex gap-2">
                    <Link href="https://github.com/yourusername/project3" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-foreground hover:text-primary hover:bg-primary/10"
                      >
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                    <Link href="https://project3-demo.com" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-foreground hover:text-primary hover:bg-primary/10"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="sr-only">Live Demo</span>
                      </Button>
                    </Link>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  A brief description of the project, what it does, and the problems it solves.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Django</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-24 scroll-mt-16 section-alt rounded-xl p-6 md:p-8">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            Skills
            <div className="h-px bg-primary/30 flex-1 ml-4"></div>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-md hover:shadow-primary/10 transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>JavaScript</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>HTML</Badge>
                  <Badge>CSS</Badge>
                  <Badge>Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md hover:shadow-primary/10 transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Node.js</Badge>
                  <Badge>Express</Badge>
                  <Badge>Python</Badge>
                  <Badge>Django</Badge>
                  <Badge>Java</Badge>
                  <Badge>Spring Boot</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md hover:shadow-primary/10 transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Database</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>MongoDB</Badge>
                  <Badge>PostgreSQL</Badge>
                  <Badge>MySQL</Badge>
                  <Badge>Redis</Badge>
                  <Badge>Firebase</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md hover:shadow-primary/10 transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Git</Badge>
                  <Badge>GitHub Actions</Badge>
                  <Badge>Docker</Badge>
                  <Badge>Kubernetes</Badge>
                  <Badge>AWS</Badge>
                  <Badge>Vercel</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md hover:shadow-primary/10 transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Testing</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Jest</Badge>
                  <Badge>React Testing Library</Badge>
                  <Badge>Cypress</Badge>
                  <Badge>Selenium</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md hover:shadow-primary/10 transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Other</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Agile</Badge>
                  <Badge>Scrum</Badge>
                  <Badge>RESTful APIs</Badge>
                  <Badge>GraphQL</Badge>
                  <Badge>UI/UX Design</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            Contact
            <div className="h-px bg-primary/30 flex-1 ml-4"></div>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg">
                I'm currently open to new opportunities and collaborations. If you'd like to get in touch, feel free to
                reach out through any of the channels below.
              </p>
              <div className="flex flex-col gap-4 mt-6">
                <Link
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  your.email@example.com
                </Link>
                <Link
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                  github.com/yourusername
                </Link>
                <Link
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  linkedin.com/in/yourusername
                </Link>
              </div>
            </div>
            <Card className="hover:shadow-md hover:shadow-primary/10 transition-shadow">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8 bg-muted/50">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} YourName. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary hover:bg-primary/10">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary hover:bg-primary/10">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:your.email@example.com">
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary hover:bg-primary/10">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

