import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AIChatbot } from "@/components/ai-chatbot"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  BookOpen,
  Code2,
  GraduationCap,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Zap,
  Target,
  Trophy,
  MessageCircle,
  Repeat,
  FunctionSquare,
  Pointer,
  LayoutList,
  FileText,
  HelpCircle,
  Braces,
} from "lucide-react"
import { chapters } from "@/lib/chapters-data"

const features = [
  {
    icon: BookOpen,
    title: "10 Comprehensive Chapters",
    description: "From basics to advanced topics like pointers and file handling",
  },
  {
    icon: Code2,
    title: "Code Examples",
    description: "Practical, runnable code snippets with detailed explanations",
  },
  {
    icon: Target,
    title: "Interactive Quizzes",
    description: "Test your knowledge with MCQs after each chapter",
  },
  {
    icon: MessageCircle,
    title: "AI Tutor Assistant",
    description: "Get instant help with your C programming questions",
  },
]

const learningTopics = [
  { icon: Braces, title: "Basics of C", description: "Syntax, structure & compilation" },
  { icon: Repeat, title: "Loops", description: "for, while & do-while loops" },
  { icon: FunctionSquare, title: "Functions", description: "Modular code & reusability" },
  { icon: Pointer, title: "Pointers", description: "Memory addresses & references" },
  { icon: LayoutList, title: "Arrays", description: "Data collections & indexing" },
  { icon: FileText, title: "Strings", description: "Character arrays & manipulation" },
  { icon: BookOpen, title: "File Handling", description: "Read & write to files" },
  { icon: HelpCircle, title: "Quizzes", description: "Test your knowledge" },
]

const stats = [
  { value: "10", label: "Chapters", icon: BookOpen },
  { value: "50+", label: "Code Examples", icon: Code2 },
  { value: "100+", label: "Quiz Questions", icon: Target },
  { value: "24/7", label: "AI Assistance", icon: MessageCircle },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-primary/[0.02] to-background">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            {/* Centered Hero Content */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  <Zap className="mr-1.5 h-4 w-4" />
                  Free & Student-Friendly
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                Learn <span className="text-primary">C Programming</span> Easily
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Master the fundamentals of C programming with our comprehensive, beginner-friendly tutorials.
                Interactive notes, code examples, quizzes, and an AI tutor to guide you every step of the way.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/chapters">
                  <Button size="lg" className="gap-2 shadow-lg shadow-primary/25">
                    <GraduationCap className="h-5 w-5" />
                    Start Learning
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl border border-border bg-slate-900 p-6 sm:p-8 shadow-2xl">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                    <span className="ml-2 text-xs text-slate-500 font-mono">hello.c</span>
                  </div>
                  <pre className="text-sm sm:text-base text-slate-300 font-mono leading-relaxed overflow-x-auto">
                    <code>
                      <span className="text-purple-400">#include</span>{" "}
                      <span className="text-green-400">&lt;stdio.h&gt;</span>
                      {"\n\n"}
                      <span className="text-slate-500">{"// Your first C program"}</span>
                      {"\n"}
                      <span className="text-purple-400">int</span> <span className="text-blue-400">main</span>() {"{\n"}
                      {"    "}
                      <span className="text-blue-400">printf</span>(
                      <span className="text-green-400">"Hello, World!\\n"</span>);{"\n"}
                      {"    "}
                      <span className="text-purple-400">return</span> <span className="text-orange-400">0</span>;{"\n"}
                      {"}"}
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 rounded-xl bg-card border border-border shadow-sm"
                >
                  <stat.icon className="h-5 w-5 text-primary mb-2" />
                  <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-card border-y border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">What You Will Learn</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Master these essential C programming concepts step by step
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {learningTopics.map((topic, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer"
                >
                  <CardContent className="p-5 sm:p-6 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <topic.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{topic.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{topic.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section - kept but refined */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Everything You Need to Learn C</h2>
              <p className="mt-4 text-lg text-muted-foreground">A complete learning platform designed for students</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-2 border-transparent hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="pt-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Learn C Section - refined */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">Why Learn C Programming?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  C is one of the most influential programming languages ever created. Learning C gives you a deep
                  understanding of how software interacts with hardware and forms the foundation for many other
                  languages.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Foundation for many languages",
                    "Essential for system programming",
                    "Understand how computers work",
                    "Widely used in embedded systems",
                    "Strong career opportunities",
                    "Gateway to OS development",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-transparent rounded-3xl blur-xl" />
                <Card className="relative shadow-xl">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                        <Trophy className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-lg">Course Overview</h3>
                        <p className="text-sm text-muted-foreground">What you'll master</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {chapters.slice(0, 5).map((chapter) => (
                        <li key={chapter.id} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-medium">
                            {chapter.id}
                          </span>
                          {chapter.title}
                        </li>
                      ))}
                      <li className="flex items-center gap-3 text-sm text-primary font-medium">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-medium">
                          +
                        </span>
                        5 more chapters...
                      </li>
                    </ul>
                    <Link href="/chapters" className="mt-6 block">
                      <Button className="w-full shadow-md">View All Chapters</Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-primary">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <Lightbulb className="h-12 w-12 mx-auto mb-6 text-primary-foreground/80" />
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl mb-4">
              Ready to Start Your C Programming Journey?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Join thousands of students learning C programming with our easy-to-follow tutorials.
            </p>
            <Link href="/chapters">
              <Button size="lg" variant="secondary" className="gap-2 shadow-lg">
                <BookOpen className="h-5 w-5" />
                Begin Chapter 1
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <AIChatbot />
    </div>
  )
}
