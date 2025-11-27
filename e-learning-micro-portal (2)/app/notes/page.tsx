import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AIChatbot } from "@/components/ai-chatbot"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { chapters } from "@/lib/chapters-data"
import { FileText, ArrowRight, ArrowLeft, CheckCircle2, Code2, BookOpen, Lightbulb, ListChecks } from "lucide-react"

export const metadata = {
  title: "Notes - LearnC",
  description: "Quick reference notes for all C programming chapters",
}

export default function NotesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50/50 to-white">
      <Header />

      <main className="flex-1">
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 text-primary mb-6">
              <FileText className="h-7 w-7" />
            </div>
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl mb-4">Quick Notes</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive notes from all chapters. Perfect for quick revision and exam preparation!
            </p>
          </div>
        </section>

        <section className="pb-16 sm:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {chapters.map((chapter, index) => (
                <Card key={chapter.id} className="bg-white border-0 shadow-sm rounded-2xl overflow-hidden">
                  {/* Chapter Header */}
                  <div className="bg-gradient-to-r from-primary/5 to-blue-50 px-6 py-5 border-b border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white text-sm font-semibold">
                          {chapter.id}
                        </span>
                        <div>
                          <h2 className="text-xl font-semibold text-foreground">{chapter.title}</h2>
                          <p className="text-sm text-muted-foreground">
                            {chapter.lessons} lessons · {chapter.duration}
                          </p>
                        </div>
                      </div>
                      <Link href={`/chapters/${chapter.slug}`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-2 bg-white hover:bg-primary hover:text-white"
                        >
                          <BookOpen className="h-4 w-4" />
                          View Full Chapter
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Left Column - Overview, Explanation, Key Points */}
                      <div className="space-y-6">
                        {/* Overview Section */}
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center">
                              <Lightbulb className="h-4 w-4 text-primary" />
                            </div>
                            <h3 className="font-semibold text-foreground">Overview</h3>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed pl-10">
                            {chapter.content.introduction}
                          </p>
                        </div>

                        {/* Explanation Section */}
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center">
                              <FileText className="h-4 w-4 text-primary" />
                            </div>
                            <h3 className="font-semibold text-foreground">Explanation</h3>
                          </div>
                          <ul className="space-y-2 pl-10">
                            {chapter.content.explanation.slice(0, 3).map((point, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-primary mt-1.5 text-xs">●</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Key Points / Summary */}
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="h-8 w-8 rounded-lg bg-green-100 flex items-center justify-center">
                              <CheckCircle2 className="h-4 w-4 text-green-600" />
                            </div>
                            <h3 className="font-semibold text-foreground">Summary & Key Points</h3>
                          </div>
                          <ul className="space-y-2 pl-10">
                            {chapter.content.keyPoints.slice(0, 4).map((point, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right Column - Code Example & Diagram */}
                      <div className="space-y-6">
                        {/* Example Code Section */}
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="h-8 w-8 rounded-lg bg-purple-100 flex items-center justify-center">
                              <Code2 className="h-4 w-4 text-purple-600" />
                            </div>
                            <h3 className="font-semibold text-foreground">Example Code</h3>
                          </div>
                          {chapter.content.codeExamples[0] && (
                            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                              <div className="bg-gray-900 px-4 py-2 flex items-center justify-between">
                                <span className="text-xs text-gray-400">{chapter.content.codeExamples[0].title}</span>
                                <div className="flex gap-1.5">
                                  <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                                  <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                                  <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
                                </div>
                              </div>
                              <pre className="bg-gray-950 p-4 overflow-x-auto">
                                <code className="text-sm text-gray-300 font-mono">
                                  {chapter.content.codeExamples[0].code}
                                </code>
                              </pre>
                            </div>
                          )}
                        </div>

                        {/* Diagram Section */}
                        {chapter.content.diagram && (
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <div className="h-8 w-8 rounded-lg bg-orange-100 flex items-center justify-center">
                                <ListChecks className="h-4 w-4 text-orange-600" />
                              </div>
                              <h3 className="font-semibold text-foreground">Diagram</h3>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                              <pre className="text-xs text-gray-700 font-mono overflow-x-auto whitespace-pre">
                                {chapter.content.diagram}
                              </pre>
                            </div>
                          </div>
                        )}

                        {/* Mini Quiz Teaser */}
                        <div className="bg-gradient-to-r from-primary/5 to-blue-50 rounded-xl p-4 border border-primary/10">
                          <div className="flex items-center gap-2 mb-2">
                            <ListChecks className="h-5 w-5 text-primary" />
                            <h4 className="font-semibold text-foreground">Mini Quiz</h4>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            Test your understanding with {chapter.quiz.length} questions on {chapter.title}.
                          </p>
                          <Link href={`/quiz?chapter=${index}`}>
                            <Button size="sm" className="gap-2">
                              Take Quiz
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                      {index > 0 ? (
                        <Link href={`/chapters/${chapters[index - 1].slug}`}>
                          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                            <ArrowLeft className="h-4 w-4" />
                            Previous: {chapters[index - 1].title}
                          </Button>
                        </Link>
                      ) : (
                        <div></div>
                      )}
                      {index < chapters.length - 1 ? (
                        <Link href={`/chapters/${chapters[index + 1].slug}`}>
                          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                            Next: {chapters[index + 1].title}
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <AIChatbot />
    </div>
  )
}
