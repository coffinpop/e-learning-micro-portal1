import Link from "next/link"
import { Code2, Github, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Code2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">LearnC</span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              A student-friendly platform to master C programming with interactive lessons, code examples, and quizzes.
              Start your coding journey today!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/chapters" className="text-sm text-muted-foreground hover:text-primary">
                  Chapters
                </Link>
              </li>
              <li>
                <Link href="/notes" className="text-sm text-muted-foreground hover:text-primary">
                  Notes
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="text-sm text-muted-foreground hover:text-primary">
                  Quiz
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Connect</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                  <Twitter className="h-4 w-4" />
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                  <Mail className="h-4 w-4" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} LearnC. Built for students, by students.
          </p>
        </div>
      </div>
    </footer>
  )
}
