"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AIChatbot } from "@/components/ai-chatbot"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { chapters } from "@/lib/chapters-data"
import { Target, BookOpen, ArrowRight, Trophy, RotateCcw, CheckCircle2, XCircle, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

export default function QuizPage() {
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [answers, setAnswers] = useState<(number | null)[]>([])

  const chapter = selectedChapter !== null ? chapters[selectedChapter] : null
  const questions = chapter?.quiz || []
  const question = questions[currentQuestion]

  const handleStartQuiz = (index: number) => {
    setSelectedChapter(index)
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setCompleted(false)
    setAnswers(new Array(chapters[index].quiz.length).fill(null))
  }

  const handleAnswerSelect = (index: number) => {
    if (showResult) return
    setSelectedAnswer(index)
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) return
    setShowResult(true)
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = selectedAnswer
    setAnswers(newAnswers)
    if (selectedAnswer === question.correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setCompleted(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setCompleted(false)
    setAnswers(new Array(questions.length).fill(null))
  }

  const handleBackToSelection = () => {
    setSelectedChapter(null)
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setCompleted(false)
  }

  const percentage = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50/50 to-white">
      <Header />

      <main className="flex-1">
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 text-primary mb-6">
              <Target className="h-7 w-7" />
            </div>
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl mb-4">Practice Quizzes</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Test your C programming knowledge with interactive MCQ quizzes. Select a chapter to begin!
            </p>
          </div>
        </section>

        {/* Quiz Content */}
        <section className="pb-16 sm:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {!chapter ? (
              /* Improved chapter selection grid */
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {chapters.map((ch, index) => (
                  <Card
                    key={ch.id}
                    className="group cursor-pointer bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden"
                    onClick={() => handleStartQuiz(index)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                          {ch.id}
                        </span>
                        <span className="text-xs text-muted-foreground bg-gray-100 px-2 py-1 rounded-full">
                          {ch.quiz.length} questions
                        </span>
                      </div>
                      <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                        {ch.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-5 line-clamp-2">{ch.description}</p>
                      <Button className="w-full gap-2 group-hover:bg-primary/90">
                        <Target className="h-4 w-4" />
                        Start Quiz
                        <ArrowRight className="h-4 w-4 ml-auto" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : completed ? (
              /* Improved results screen */
              <div className="max-w-2xl mx-auto">
                <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-blue-100">
                        <Trophy className="h-10 w-10 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground mb-2">Quiz Completed!</h2>
                      <p className="text-lg text-muted-foreground mb-6">{chapter.title}</p>

                      {/* Score Display */}
                      <div className="bg-gradient-to-r from-primary/5 to-blue-50 rounded-2xl p-6 mb-8">
                        <div className="text-5xl font-bold text-primary mb-2">
                          {score} / {questions.length}
                        </div>
                        <p className="text-muted-foreground">
                          {percentage >= 80
                            ? "Excellent work! You've mastered this topic!"
                            : percentage >= 60
                              ? "Good job! Keep practicing to improve!"
                              : "Keep practicing! Review the chapter and try again."}
                        </p>

                        {/* Progress bar */}
                        <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
                          <div
                            className={cn(
                              "h-4 rounded-full transition-all duration-700",
                              percentage >= 80 ? "bg-green-500" : percentage >= 60 ? "bg-yellow-500" : "bg-red-500",
                            )}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">{percentage}% correct</p>
                      </div>

                      {/* Answer Review */}
                      <div className="text-left mb-8">
                        <h3 className="font-semibold text-foreground mb-4">Answer Review</h3>
                        <div className="space-y-3">
                          {questions.map((q, i) => (
                            <div
                              key={i}
                              className={cn(
                                "flex items-center gap-3 p-3 rounded-xl",
                                answers[i] === q.correctAnswer ? "bg-green-50" : "bg-red-50",
                              )}
                            >
                              {answers[i] === q.correctAnswer ? (
                                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                              ) : (
                                <XCircle className="h-5 w-5 text-red-600 shrink-0" />
                              )}
                              <span className="text-sm text-foreground line-clamp-1">{q.question}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button onClick={handleRestart} variant="outline" className="flex-1 gap-2 bg-transparent">
                          <RotateCcw className="h-4 w-4" />
                          Try Again
                        </Button>
                        <Link href={`/chapters/${chapter.slug}`} className="flex-1">
                          <Button variant="outline" className="w-full gap-2 bg-transparent">
                            <BookOpen className="h-4 w-4" />
                            Review Chapter
                          </Button>
                        </Link>
                        <Button onClick={handleBackToSelection} className="flex-1 gap-2">
                          All Quizzes
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              /* Improved quiz interface with progress bar */
              <div className="max-w-2xl mx-auto">
                {/* Header with back button and progress */}
                <div className="flex items-center justify-between mb-6">
                  <Button variant="ghost" onClick={handleBackToSelection} className="gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </Button>
                  <span className="text-sm font-medium text-muted-foreground">
                    Chapter {chapter.id}: {chapter.title}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="font-medium text-foreground">
                      Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <span className="text-muted-foreground">
                      {Math.round(((currentQuestion + 1) / questions.length) * 100)}% complete
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-primary h-3 rounded-full transition-all duration-500"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Question Card */}
                <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
                  <CardContent className="p-6 sm:p-8">
                    {/* Question */}
                    <h2 className="text-xl font-semibold text-foreground mb-6">{question.question}</h2>

                    {/* Options */}
                    <div className="space-y-3 mb-6">
                      {question.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleAnswerSelect(index)}
                          disabled={showResult}
                          className={cn(
                            "w-full text-left p-4 rounded-xl border-2 transition-all duration-200",
                            "hover:border-primary/50 hover:bg-primary/5",
                            selectedAnswer === index && !showResult && "border-primary bg-primary/5 shadow-sm",
                            showResult && index === question.correctAnswer && "border-green-500 bg-green-50",
                            showResult &&
                              selectedAnswer === index &&
                              index !== question.correctAnswer &&
                              "border-red-500 bg-red-50",
                            showResult && selectedAnswer !== index && index !== question.correctAnswer && "opacity-50",
                            !showResult && "border-gray-200",
                          )}
                        >
                          <div className="flex items-center gap-4">
                            <span
                              className={cn(
                                "flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors",
                                selectedAnswer === index && !showResult
                                  ? "bg-primary text-white"
                                  : "bg-gray-100 text-foreground",
                                showResult && index === question.correctAnswer && "bg-green-500 text-white",
                                showResult &&
                                  selectedAnswer === index &&
                                  index !== question.correctAnswer &&
                                  "bg-red-500 text-white",
                              )}
                            >
                              {showResult && index === question.correctAnswer ? (
                                <CheckCircle2 className="h-5 w-5" />
                              ) : showResult && selectedAnswer === index && index !== question.correctAnswer ? (
                                <XCircle className="h-5 w-5" />
                              ) : (
                                String.fromCharCode(65 + index)
                              )}
                            </span>
                            <span
                              className={cn(
                                "text-foreground",
                                showResult && index === question.correctAnswer && "text-green-800 font-medium",
                                showResult &&
                                  selectedAnswer === index &&
                                  index !== question.correctAnswer &&
                                  "text-red-800",
                              )}
                            >
                              {option}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Explanation */}
                    {showResult && (
                      <div
                        className={cn(
                          "p-4 rounded-xl mb-6",
                          selectedAnswer === question.correctAnswer
                            ? "bg-green-50 border border-green-200"
                            : "bg-blue-50 border border-blue-200",
                        )}
                      >
                        <p
                          className={cn(
                            "text-sm",
                            selectedAnswer === question.correctAnswer ? "text-green-800" : "text-blue-800",
                          )}
                        >
                          <strong>Explanation:</strong> {question.explanation}
                        </p>
                      </div>
                    )}

                    {/* Action Button */}
                    <div className="flex justify-end">
                      {!showResult ? (
                        <Button onClick={handleSubmit} disabled={selectedAnswer === null} size="lg" className="px-8">
                          Submit Answer
                        </Button>
                      ) : (
                        <Button onClick={handleNext} size="lg" className="px-8 gap-2">
                          {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <AIChatbot />
    </div>
  )
}
