import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AIChatbot } from "@/components/ai-chatbot"
import { Card, CardContent } from "@/components/ui/card"
import { chapters } from "@/lib/chapters-data"
import { BookOpen, ArrowRight, Clock, FileText } from "lucide-react"
import * as Icons from "lucide-react"
import Link from "next/link"
import type React from "react"

export const metadata = {
  title: "Chapters - LearnC",
  description: "Browse all C programming chapters and start learning",
}

export default function ChaptersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50/50 to-white">
      <Header />

      <main className="flex-1">
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 text-primary mb-6">
              <BookOpen className="h-7 w-7" />
            </div>
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl mb-4">Chapters</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore C Programming step by step. Each chapter includes detailed notes, code examples, and interactive
              quizzes.
            </p>
          </div>
        </section>

        <section className="pb-16 sm:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {chapters.map((chapter) => {
                const IconComponent =
                  (Icons as Record<string, React.ComponentType<{ className?: string }>>)[chapter.icon] || Icons.BookOpen

                return (
                  <Link href={`/chapters/${chapter.slug}`} key={chapter.id}>
                    <Card className="group h-full bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden">
                      <CardContent className="p-6">
                        {/* Chapter number badge */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                            {chapter.id}
                          </span>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3.5 w-3.5" />
                            {chapter.duration}
                          </div>
                        </div>

                        {/* Icon */}
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-blue-100 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-6 w-6" />
                        </div>

                        {/* Title & Description */}
                        <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                          {chapter.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{chapter.description}</p>

                        {/* Footer with lessons count and arrow */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                            <FileText className="h-4 w-4" />
                            <span>{chapter.lessons} lessons</span>
                          </div>
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <AIChatbot />
    </div>
  )
}
