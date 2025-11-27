"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  role: "user" | "assistant"
  content: string
}

const initialMessages: Message[] = [
  {
    role: "assistant",
    content:
      "Hi! I'm your C Programming tutor. Ask me anything about C - variables, loops, pointers, or any topic you're learning!",
  },
]

// Simulated responses for common C programming questions
const getResponse = (question: string): string => {
  const q = question.toLowerCase()

  if (q.includes("pointer") || q.includes("&") || q.includes("*")) {
    return 'Pointers store memory addresses! Use & to get an address and * to access the value at that address. For example:\n\nint x = 10;\nint *ptr = &x;  // ptr holds address of x\nprintf("%d", *ptr);  // prints 10\n\nWant me to explain pointer arithmetic or common pointer uses?'
  }

  if (q.includes("array")) {
    return 'Arrays store multiple values of the same type in contiguous memory. Key points:\n\n1. Indexing starts at 0\n2. Size is fixed at declaration\n3. Array name is a pointer to first element\n\nint arr[5] = {1, 2, 3, 4, 5};\nprintf("%d", arr[0]);  // prints 1\n\nNeed help with 2D arrays or array operations?'
  }

  if (q.includes("loop") || q.includes("for") || q.includes("while")) {
    return "C has three loop types:\n\n1. **for** - when you know iterations:\n   for(int i=0; i<5; i++) { }\n\n2. **while** - condition checked first:\n   while(x > 0) { x--; }\n\n3. **do-while** - runs at least once:\n   do { } while(condition);\n\nWhich loop would you like to learn more about?"
  }

  if (q.includes("function")) {
    return "Functions make code reusable! Structure:\n\nreturn_type name(parameters) {\n    // body\n    return value;\n}\n\nExample:\nint add(int a, int b) {\n    return a + b;\n}\n\nCall it: int sum = add(5, 3);  // sum = 8\n\nWant to learn about void functions or function prototypes?"
  }

  if (q.includes("struct") || q.includes("structure")) {
    return "Structures group different data types together:\n\nstruct Student {\n    int id;\n    char name[50];\n    float marks;\n};\n\nstruct Student s1;\ns1.id = 101;\n\nAccess members with dot (.) operator. Use -> with pointers to structs.\n\nNeed help with arrays of structures?"
  }

  if (q.includes("string")) {
    return "Strings in C are char arrays ending with '\\0':\n\nchar str[] = \"Hello\";  // Auto adds \\0\n\nCommon functions (include <string.h>):\n- strlen(str) - length\n- strcpy(dest, src) - copy\n- strcat(dest, src) - concatenate\n- strcmp(s1, s2) - compare\n\nWant examples of any string function?"
  }

  if (q.includes("variable") || q.includes("data type")) {
    return "C has several data types:\n\n- int: whole numbers (4 bytes)\n- float: decimals (4 bytes)\n- double: precise decimals (8 bytes)\n- char: single character (1 byte)\n\nint age = 20;\nfloat price = 19.99;\nchar grade = 'A';\n\nUse %d for int, %f for float, %c for char in printf/scanf."
  }

  if (q.includes("hello world") || q.includes("first program")) {
    return 'Here\'s the classic first C program:\n\n#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}\n\n- #include brings in the stdio library\n- main() is where execution starts\n- printf() displays text\n- return 0 means success\n\nTry it out!'
  }

  if (q.includes("file") || q.includes("fopen") || q.includes("fclose")) {
    return 'File handling in C:\n\n// Write to file\nFILE *fp = fopen("file.txt", "w");\nfprintf(fp, "Hello!");\nfclose(fp);\n\n// Read from file\nFILE *fp = fopen("file.txt", "r");\nfgets(buffer, 100, fp);\nfclose(fp);\n\nModes: "r" (read), "w" (write), "a" (append)\n\nAlways close files with fclose()!'
  }

  return "That's a great question! Here are some tips:\n\n1. Break down the problem into smaller parts\n2. Write pseudocode first\n3. Test your code with different inputs\n4. Use printf() statements to debug\n\nCould you be more specific about what you'd like to learn? I can help with:\n- Variables & Data Types\n- Operators\n- Loops\n- Functions\n- Arrays\n- Strings\n- Pointers\n- Structures\n- File Handling"
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    // Simulate AI response delay
    setTimeout(() => {
      const response = getResponse(userMessage)
      setMessages((prev) => [...prev, { role: "assistant", content: response }])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full",
          "bg-primary text-primary-foreground shadow-lg",
          "transition-transform hover:scale-110",
          isOpen && "hidden",
        )}
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-[380px] h-[500px] flex flex-col shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border p-4 bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/20">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">AI Tutor</h3>
                <p className="text-xs opacity-80">Ask me about C Programming</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="rounded-full p-1 hover:bg-primary-foreground/20">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={cn("flex gap-3", message.role === "user" && "flex-row-reverse")}>
                <div
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                    message.role === "assistant" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground",
                  )}
                >
                  {message.role === "assistant" ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                </div>
                <div
                  className={cn(
                    "max-w-[260px] rounded-2xl px-4 py-2 text-sm",
                    message.role === "assistant"
                      ? "bg-muted text-foreground rounded-tl-sm"
                      : "bg-primary text-primary-foreground rounded-tr-sm",
                  )}
                >
                  <pre className="whitespace-pre-wrap font-sans">{message.content}</pre>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3">
                  <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="border-t border-border p-4">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about C programming..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={!input.trim() || isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </Card>
      )}
    </>
  )
}
