"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle, RotateCcw, Trophy } from "lucide-react"
import { cn } from "@/lib/utils"

interface QuizQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

interface QuizSectionProps {
  questions: QuizQuestion[]
  chapterTitle: string
}

export function QuizSection({ questions, chapterTitle }: QuizSectionProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null))

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

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
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

  if (completed) {
    const percentage = Math.round((score / questions.length) * 100)
    return (
      <Card className="border-2 border-primary/20">
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Trophy className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Quiz Completed!</h3>
            <p className="text-lg text-muted-foreground mb-4">{chapterTitle}</p>
            <div className="text-4xl font-bold text-primary mb-2">
              {score} / {questions.length}
            </div>
            <p className="text-muted-foreground mb-6">
              {percentage >= 80 ? "Excellent work!" : percentage >= 60 ? "Good job!" : "Keep practicing!"}
            </p>
            <div className="w-full bg-muted rounded-full h-3 mb-6">
              <div
                className="bg-primary h-3 rounded-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <Button onClick={handleRestart} className="gap-2">
              <RotateCcw className="h-4 w-4" />
              Try Again
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  const question = questions[currentQuestion]

  return (
    <Card className="border-2 border-primary/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Quiz: {chapterTitle}</CardTitle>
          <span className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 mt-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-lg font-medium text-foreground">{question.question}</p>

        <div className="space-y-2">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showResult}
              className={cn(
                "w-full text-left p-4 rounded-lg border-2 transition-all duration-200",
                "hover:border-primary/50 hover:bg-accent",
                selectedAnswer === index && !showResult && "border-primary bg-primary/5",
                showResult && index === question.correctAnswer && "border-green-500 bg-green-50 text-green-900",
                showResult &&
                  selectedAnswer === index &&
                  index !== question.correctAnswer &&
                  "border-red-500 bg-red-50 text-red-900",
                showResult && selectedAnswer !== index && index !== question.correctAnswer && "opacity-50",
              )}
            >
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "flex h-7 w-7 items-center justify-center rounded-full text-sm font-medium",
                    selectedAnswer === index ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
                    showResult && index === question.correctAnswer && "bg-green-500 text-white",
                    showResult &&
                      selectedAnswer === index &&
                      index !== question.correctAnswer &&
                      "bg-red-500 text-white",
                  )}
                >
                  {showResult && index === question.correctAnswer ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : showResult && selectedAnswer === index && index !== question.correctAnswer ? (
                    <XCircle className="h-4 w-4" />
                  ) : (
                    String.fromCharCode(65 + index)
                  )}
                </span>
                <span>{option}</span>
              </div>
            </button>
          ))}
        </div>

        {showResult && (
          <div
            className={cn(
              "p-4 rounded-lg",
              selectedAnswer === question.correctAnswer
                ? "bg-green-50 border border-green-200"
                : "bg-blue-50 border border-blue-200",
            )}
          >
            <p
              className={cn("text-sm", selectedAnswer === question.correctAnswer ? "text-green-800" : "text-blue-800")}
            >
              <strong>Explanation:</strong> {question.explanation}
            </p>
          </div>
        )}

        <div className="flex justify-end gap-3 pt-4">
          {!showResult ? (
            <Button onClick={handleSubmit} disabled={selectedAnswer === null}>
              Submit Answer
            </Button>
          ) : (
            <Button onClick={handleNext}>
              {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
