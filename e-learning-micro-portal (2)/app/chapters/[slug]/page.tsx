import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AIChatbot } from "@/components/ai-chatbot"
import { CodeBlock } from "@/components/code-block"
import { QuizSection } from "@/components/quiz-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { chapters, getChapterBySlug, getAdjacentChapters } from "@/lib/chapters-data"
import { ArrowLeft, ArrowRight, BookOpen, Clock, CheckCircle2, Code2, FileText, Lightbulb } from "lucide-react"

export async function generateStaticParams() {
  return chapters.map((chapter) => ({
    slug: chapter.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const chapter = getChapterBySlug(slug)
  if (!chapter) return { title: "Chapter Not Found" }

  return {
    title: `${chapter.title} - LearnC`,
    description: chapter.description,
  }
}

export default async function ChapterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const chapter = getChapterBySlug(slug)

  if (!chapter) {
    notFound()
  }

  const { prev, next } = getAdjacentChapters(slug)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Chapter Header */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-8 sm:py-12 border-b border-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/chapters"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Chapters
            </Link>

            <div className="flex items-start gap-4">
              <Badge variant="secondary" className="text-sm mt-1">
                Chapter {chapter.id}
              </Badge>
              <div>
                <h1 className="text-3xl font-bold text-foreground sm:text-4xl mb-3">{chapter.title}</h1>
                <p className="text-lg text-muted-foreground mb-4">{chapter.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    {chapter.lessons} lessons
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {chapter.duration}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter Content */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-10">
              {/* Introduction */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <FileText className="h-5 w-5 text-primary" />
                    Introduction
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">{chapter.content.introduction}</p>
                </CardContent>
              </Card>

              {/* Explanation */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    Explanation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {chapter.content.explanation.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Code Examples */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Code2 className="h-5 w-5 text-primary" />
                    Code Examples
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {chapter.content.codeExamples.map((example, index) => (
                    <div key={index}>
                      <CodeBlock code={example.code} title={example.title} />
                      <p className="mt-3 text-sm text-muted-foreground bg-muted p-3 rounded-lg">
                        <strong>Explanation:</strong> {example.explanation}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Diagram */}
              {chapter.content.diagram && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Visual Diagram</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-muted p-4 rounded-lg text-sm font-mono overflow-x-auto text-foreground">
                      {chapter.content.diagram}
                    </pre>
                  </CardContent>
                </Card>
              )}

              {/* Key Points */}
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Key Points to Remember
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {chapter.content.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-medium">
                          {index + 1}
                        </span>
                        <span className="text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Quiz Section */}
              <div className="pt-6">
                <h2 className="text-2xl font-bold text-foreground mb-6">Test Your Knowledge</h2>
                <QuizSection questions={chapter.quiz} chapterTitle={chapter.title} />
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-8 border-t border-border">
                {prev ? (
                  <Link href={`/chapters/${prev.slug}`}>
                    <Button variant="outline" className="gap-2 bg-transparent">
                      <ArrowLeft className="h-4 w-4" />
                      <span className="hidden sm:inline">{prev.title}</span>
                      <span className="sm:hidden">Previous</span>
                    </Button>
                  </Link>
                ) : (
                  <div />
                )}
                {next ? (
                  <Link href={`/chapters/${next.slug}`}>
                    <Button className="gap-2">
                      <span className="hidden sm:inline">{next.title}</span>
                      <span className="sm:hidden">Next</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                ) : (
                  <Link href="/chapters">
                    <Button className="gap-2">
                      All Chapters
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <AIChatbot />
    </div>
  )
}
