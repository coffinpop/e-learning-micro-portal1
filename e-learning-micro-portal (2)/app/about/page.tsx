import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AIChatbot } from "@/components/ai-chatbot"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, BookOpen, Code2, GraduationCap, MessageCircle, Mail, ArrowRight, Heart } from "lucide-react"

export const metadata = {
  title: "About - LearnC",
  description: "Learn about our mission to make C programming accessible to everyone",
}

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Content",
    description: "10 well-structured chapters covering everything from basics to advanced topics.",
  },
  {
    icon: Code2,
    title: "Practical Examples",
    description: "Real code examples with explanations to help you understand concepts better.",
  },
  {
    icon: Target,
    title: "Interactive Quizzes",
    description: "Test your knowledge with MCQ quizzes after each chapter.",
  },
  {
    icon: MessageCircle,
    title: "AI Tutor",
    description: "Get instant help with your questions using our AI-powered tutor.",
  },
]

const team = [
  {
    name: "For Students",
    description: "Designed specifically for students who want to learn C programming from scratch.",
  },
  {
    name: "By Educators",
    description: "Content created by experienced programmers and educators.",
  },
  {
    name: "Free Forever",
    description: "All content is completely free and accessible to everyone.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <GraduationCap className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl mb-6">About LearnC</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our mission is to make C programming education accessible, engaging, and effective for students
              everywhere.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Why We Built This</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Learning C programming can be challenging, especially for beginners. Many resources are either too
                    complex or lack practical examples.
                  </p>
                  <p>
                    We created LearnC to bridge this gap - providing clear explanations, hands-on code examples, and
                    interactive quizzes all in one place.
                  </p>
                  <p>
                    Our platform is designed with students in mind, using simple language and building concepts step by
                    step from the ground up.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/chapters">
                    <Button className="gap-2">
                      <BookOpen className="h-4 w-4" />
                      Start Learning
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="gap-2 bg-transparent">
                      <Mail className="h-4 w-4" />
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {team.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-2">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">What Makes Us Different</h2>
              <p className="text-lg text-muted-foreground">Everything you need to master C programming</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <Card key={index}>
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

        {/* CTA */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <Heart className="h-12 w-12 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Made with Love for Students</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start your C programming journey today. It's completely free!
            </p>
            <Link href="/chapters">
              <Button size="lg" className="gap-2">
                Begin Learning
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
