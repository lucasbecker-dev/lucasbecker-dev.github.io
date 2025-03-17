"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import Script from "next/script"
import { z } from "zod"
import { toast } from "sonner"
import emailjs from '@emailjs/browser'
import { emailjsConfig } from "@/app/config/emailjs"

// Skill component for highlighting technologies
const Skill = ({ children }: { children: React.ReactNode }) => (
  <strong className="text-primary">{children}</strong>
);

// Contact form schema for validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const handleSmoothScroll = useSmoothScroll()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    // Store a reference to the form element
    const form = e.currentTarget;

    // Get form data
    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string
    };

    // Validate form data
    const result = contactFormSchema.safeParse(data);

    if (!result.success) {
      // Format and display validation errors
      const formattedErrors: { [key: string]: string } = {};
      result.error.issues.forEach(issue => {
        formattedErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(formattedErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Send the form data using EmailJS
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        emailjsConfig.publicKey
      );

      // Reset the form using the stored reference
      form.reset();
      toast.success('Message sent successfully! I will get back to you soon.');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Lucas Becker",
            "url": "https://lucasbecker-dev.github.io",
            "jobTitle": "Software Engineer",
            "worksFor": {
              "@type": "Organization",
              "name": "We Make Good Software"
            },
            "description": "Software Engineer specializing in Java, Spring Boot, React, TypeScript, and full-stack web development.",
            "skills": "Java, Spring Boot, React, TypeScript, Hibernate, Maven, MySQL, Tailwind CSS, Next.js",
            "sameAs": [
              "https://github.com/lucasbecker-dev",
              "https://www.linkedin.com/in/lucasbecker-dev/"
            ]
          })
        }}
      />
      <Script
        id="schema-portfolio"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "headline": "Lucas Becker - Software Engineer Portfolio",
            "about": {
              "@type": "Person",
              "name": "Lucas Becker"
            },
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "SoftwareSourceCode",
                  "name": "Project 1",
                  "programmingLanguage": ["React", "Node.js", "MongoDB"],
                  "codeRepository": "https://github.com/yourusername/project1",
                  "position": 1
                },
                {
                  "@type": "SoftwareSourceCode",
                  "name": "Project 2",
                  "programmingLanguage": ["TypeScript", "Next.js", "Prisma"],
                  "codeRepository": "https://github.com/yourusername/project2",
                  "position": 2
                },
                {
                  "@type": "SoftwareSourceCode",
                  "name": "Project 3",
                  "programmingLanguage": ["Python", "Django", "PostgreSQL"],
                  "codeRepository": "https://github.com/yourusername/project3",
                  "position": 3
                }
              ]
            }
          })
        }}
      />
      <header className="sticky top-0 z-10 backdrop-blur-sm bg-background/90 border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            <Link href="/" className="text-orange-600 hover:text-orange-700 transition-colors text-shadow">
              Lucas Becker
            </Link>
          </div>
          <nav
            className={`${mobileMenuOpen ? "flex" : "hidden"
              } md:flex absolute md:static inset-x-0 top-16 p-4 md:p-0 bg-background md:bg-transparent border-b md:border-0 flex-col md:flex-row gap-6 md:items-center`}
          >
            <Link
              href="#about"
              className="text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                handleSmoothScroll(e);
                setMobileMenuOpen(false);
              }}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                handleSmoothScroll(e);
                setMobileMenuOpen(false);
              }}
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                handleSmoothScroll(e);
                setMobileMenuOpen(false);
              }}
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                handleSmoothScroll(e);
                setMobileMenuOpen(false);
              }}
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="hidden md:flex gap-2">
              <Link href="https://github.com/lucasbecker-dev" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-foreground hover:text-primary hover:bg-primary/10">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/lucasbecker-dev/" target="_blank" rel="noopener noreferrer">
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
              Hi, I'm <span className="text-orange-600 text-shadow">Lucas Becker</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Software Engineer specializing in building exceptional digital experiences with <Skill>Java</Skill>, <Skill>Spring Boot</Skill>, <Skill>Maven</Skill>, <Skill>Hibernate</Skill>, <Skill>React</Skill>, <Skill>TypeScript</Skill>, <Skill>Tailwind CSS</Skill>, and <Skill>MySQL</Skill>.
            </p>
            <div className="flex gap-4 pt-4">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#contact" onClick={handleSmoothScroll}>Get in touch</Link>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link href="#projects" onClick={handleSmoothScroll}>View my work</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image src="pfp2.png?height=320&width=320" alt="Profile" fill className="object-cover" priority />
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
                I'm a passionate software engineer specializing in <Skill>Java</Skill>, <Skill>Spring Boot</Skill>, <Skill>Hibernate</Skill>, <Skill>Maven</Skill>, <Skill>MySQL</Skill>, <Skill>React</Skill>, <Skill>Tailwind CSS</Skill>, and <Skill>TypeScript</Skill>. I focus on creating clean, efficient, and user-friendly applications.
              </p>
              <p className="text-lg">
                My journey in software development began with building simple websites as a teenager, which sparked my curiosity about how technology works. Since then, I've worked on a
                variety of projects ranging from web applications to developer tools.
              </p>
              <p className="text-lg">When I'm not coding, you can find me reading, exercising, and spending time with my family.</p>

              <h3 className="text-xl font-semibold mt-6">Education</h3>
              <div className="space-y-2">
                <div>
                  <div className="font-medium">Bachelor of Science in Computer Science</div>
                  <div className="text-muted-foreground">Western Governors University, December 2025</div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6">Relevant Experience</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-medium">Full Stack Developer & Project Manager</div>
                  <div className="text-muted-foreground">We Make Good Software, July 2024 – Present</div>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>Developed and maintained a full-stack web application using <Skill>Java</Skill>, <Skill>Spring Boot</Skill>, <Skill>TypeScript</Skill>, <Skill>React</Skill>, <Skill>MySQL</Skill>, and <Skill>Material UI</Skill></li>
                    <li>Deployed applications on <Skill>Railway</Skill> and managed the project using <Skill>Jira</Skill></li>
                    <li>Conducted code reviews, provided technical guidance, and contributed to architectural and design decisions</li>
                    <li>Led team meetings, coordinated client communications, and oversaw project planning</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Additional Experience</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-medium">Java Coding Instructor</div>
                  <div className="text-muted-foreground">Coders Campus, May 2024 – Present (Contract, Remote)</div>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>Teaching <Skill>Java</Skill>, <Skill>Spring Boot</Skill>, <Skill>Hibernate</Skill>, <Skill>Maven</Skill>, <Skill>MySQL</Skill>, <Skill>Thymeleaf</Skill>, <Skill>HTML</Skill>, and <Skill>CSS</Skill> coding skills to full stack Java bootcamp students</li>
                    <li>Conducting regular class sessions, answering questions, and providing 1-on-1 tutoring</li>
                    <li>Helping students develop practical programming skills for real-world applications</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium">Software Developer</div>
                  <div className="text-muted-foreground">Self Employed, September 2021 – Present</div>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>Delivered custom full-stack web solutions as a freelance Software Engineer</li>
                    <li>Adapted to diverse client requirements by leveraging both front-end and back-end development skills</li>
                    <li>Utilized technologies such as <Skill>Java</Skill>, <Skill>Spring</Skill>, and <Skill>React</Skill> to build scalable applications</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium">Full Stack Engineer</div>
                  <div className="text-muted-foreground">Start Small Think Big, January 2022 – August 2022</div>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>Contributed as a contract developer within an agile team of four engineers</li>
                    <li>Enhanced testing coverage and improved overall application performance</li>
                    <li>Built and integrated various components while proactively identifying and resolving bugs</li>
                    <li>Utilized a modern tech stack including <Skill>Next.js</Skill>, <Skill>React</Skill>, <Skill>Material UI</Skill>, <Skill>Salesforce</Skill>, and <Skill>Jira</Skill></li>
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
            {/* Project 1 - YEAH App */}
            <Card className="overflow-hidden group hover:shadow-md hover:shadow-primary/10 transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/yeah-app.png"
                  alt="YEAH App - Engagement and Accountability Platform"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">YEAH App</h3>
                  <div className="flex gap-2">
                    <div className="flex items-center text-xs text-muted-foreground mr-2">
                      <Lock className="h-3 w-3 mr-1" />
                      Private Code
                    </div>
                    <Link href="https://dev.yeahapp.com/" target="_blank" rel="noopener noreferrer">
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
                  YEAH (Your Engagement and Accountability Helper) is a SaaS platform that helps course creators increase student engagement and completion rates through automated check-ins and sentiment analysis.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Java</Badge>
                  <Badge variant="secondary">Spring Boot</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">MySQL</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            {/* <Card className="overflow-hidden group hover:shadow-md hover:shadow-primary/10 transition-shadow">
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
            </Card> */}

            {/* Project 3 - Godot Smart Graphics Settings */}
            <Card className="overflow-hidden group hover:shadow-md hover:shadow-primary/10 transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/smart-graphics-settings.png"
                  alt="Godot Smart Graphics Settings"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">Smart Graphics Settings</h3>
                  <div className="flex gap-2">
                    <Link href="https://github.com/lucasbecker-dev/godot-smart-graphics-settings" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-foreground hover:text-primary hover:bg-primary/10"
                      >
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  An adaptive graphics settings system for Godot Engine that automatically adjusts quality settings to maintain target FPS, with threading support and customizable quality presets.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Godot Engine</Badge>
                  <Badge variant="secondary">GDScript</Badge>
                  <Badge variant="secondary">Game Development</Badge>
                  <Badge variant="secondary">Performance Optimization</Badge>
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
                  <Badge>Material UI</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>HTML</Badge>
                  <Badge>CSS</Badge>
                  <Badge>Thymeleaf</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md hover:shadow-primary/10 transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Java</Badge>
                  <Badge>Spring Boot</Badge>
                  <Badge>Maven</Badge>
                  <Badge>Hibernate</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>Express</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md hover:shadow-primary/10 transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Database</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>MySQL</Badge>
                  <Badge>Hibernate</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>PostgreSQL</Badge>
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
                  <Badge>Railway</Badge>
                  <Badge>Vercel</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md hover:shadow-primary/10 transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Testing</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Jest</Badge>
                  <Badge>JUnit</Badge>
                  <Badge>ngrok</Badge>
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
                  <Badge>UI/UX Design</Badge>
                  <Badge>Jira</Badge>
                  <Badge>Salesforce</Badge>
                  <Badge>Figma</Badge>
                  <Badge>Project Management</Badge>
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
                  href="mailto:lucasbecker.dev@gmail.com"
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  lucasbecker.dev@gmail.com
                </Link>
                <Link
                  href="https://github.com/lucasbecker-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                  github.com/lucasbecker-dev
                </Link>
                <Link
                  href="https://www.linkedin.com/in/lucasbecker-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  linkedin.com/in/lucasbecker-dev
                </Link>
              </div>
            </div>
            <Card className="hover:shadow-md hover:shadow-primary/10 transition-shadow">
              <CardContent className="p-6">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500 mt-1">{errors.message}</p>
                    )}
                  </div>
                  <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
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
            Copyright © {new Date().getFullYear()} Lucas Becker. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/lucasbecker-dev" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary hover:bg-primary/10">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/lucasbecker-dev/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary hover:bg-primary/10">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:lucasbecker.dev@gmail.com">
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary hover:bg-primary/10">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div >
  )
}

