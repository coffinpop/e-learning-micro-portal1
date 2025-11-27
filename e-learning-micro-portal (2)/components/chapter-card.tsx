import type React from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, BookOpen } from "lucide-react"
import * as Icons from "lucide-react"
import { cn } from "@/lib/utils"

interface ChapterCardProps {
  id: number
  slug: string
  title: string
  description: string
  icon: string
  lessons: number
  duration: string
}

export function ChapterCard({ id, slug, title, description, icon, lessons, duration }: ChapterCardProps) {
  const IconComponent = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[icon] || Icons.BookOpen

  return (
    <Link href={`/chapters/${slug}`}>
      <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div
              className={cn(
                "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
                "bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground",
              )}
            >
              <IconComponent className="h-6 w-6" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="secondary" className="text-xs">
                  Chapter {id}
                </Badge>
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{description}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <BookOpen className="h-3.5 w-3.5" />
                  {lessons} lessons
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {duration}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
