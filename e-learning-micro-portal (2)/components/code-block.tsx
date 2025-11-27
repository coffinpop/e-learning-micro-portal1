"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CodeBlockProps {
  code: string
  title?: string
}

export function CodeBlock({ code, title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Simple syntax highlighting
  const highlightCode = (code: string) => {
    return code
      .replace(/(\/\/.*)/g, '<span class="comment">$1</span>')
      .replace(
        /(#include|#define|return|int|float|char|double|void|if|else|for|while|do|struct|typedef|sizeof|break|continue|switch|case|default|const|static|extern|unsigned|signed|long|short)/g,
        '<span class="keyword">$1</span>',
      )
      .replace(/(".*?")/g, '<span class="string">$1</span>')
      .replace(/(\b\d+\.?\d*\b)/g, '<span class="number">$1</span>')
      .replace(
        /(printf|scanf|fopen|fclose|fprintf|fscanf|fgets|fputs|strlen|strcpy|strcat|strcmp|malloc|free|sizeof)/g,
        '<span class="function">$1</span>',
      )
  }

  return (
    <div className="relative rounded-lg overflow-hidden border border-border">
      {title && (
        <div className="flex items-center justify-between bg-slate-800 px-4 py-2 border-b border-slate-700">
          <span className="text-sm font-medium text-slate-300">{title}</span>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 px-2 text-slate-400 hover:text-slate-200 hover:bg-slate-700"
            onClick={copyToClipboard}
          >
            {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      )}
      <pre className="code-block overflow-x-auto">
        <code dangerouslySetInnerHTML={{ __html: highlightCode(code) }} className="text-sm leading-relaxed" />
      </pre>
      {!title && (
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 h-8 px-2 text-slate-400 hover:text-slate-200 hover:bg-slate-700"
          onClick={copyToClipboard}
        >
          {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
        </Button>
      )}
    </div>
  )
}
