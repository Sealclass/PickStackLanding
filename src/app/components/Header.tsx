import { motion } from "motion/react";
import { Download } from "lucide-react";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo size="sm" />
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            PickStack
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-primary transition-colors">How it works</a>
          <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
          <a href="#roadmap" className="hover:text-primary transition-colors">Roadmap</a>
          <a href="#architecture" className="hover:text-primary transition-colors">Architecture</a>
          <a href="#compliance" className="hover:text-primary transition-colors">Compliance</a>
        </nav>

        <motion.a
          href="/assets/app-release.apk"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold shadow-lg shadow-primary/25"
        >
          <Download className="w-4 h-4" />
          Get App
        </motion.a>
      </div>

      {/* Glassmorphism background */}
      <div className="absolute inset-0 -z-10 bg-background/60 backdrop-blur-xl border-b border-border/40" />
    </header>
  );
}
