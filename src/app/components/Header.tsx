"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex container items-center justify-between p-3 lg:px-6" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Peter Irungu</span>
            <span className="text-xl font-bold text-primary">PI</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:gap-x-6">
          <Link
            href="#home"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            HOME
          </Link>
          <Link
            href="#projects"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            PROJECTS
          </Link>
          <Link
            href="#services"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            SERVICES
          </Link>
          <Link
            href="#timeline"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            JOURNEY
          </Link>
          <Link
            href="#about"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            ABOUT
          </Link>
          <Link
            href="#contact"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            CONTACT
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="mailto:alidantech@example.com">
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              HIRE ME
            </Button>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              href="#home"
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="#projects"
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              PROJECTS
            </Link>
            <Link
              href="#services"
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              SERVICES
            </Link>
            <Link
              href="#timeline"
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              JOURNEY
            </Link>
            <Link
              href="#about"
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="#contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              CONTACT
            </Link>
            <Link href="mailto:alidantech@example.com" className="block w-full mt-4">
              <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                HIRE ME
              </Button>
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  )
}

