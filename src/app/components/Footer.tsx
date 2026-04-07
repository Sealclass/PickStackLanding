import { Logo } from './Logo';
import { Code2, FileText, Palette, Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <Logo size="md" />
            </div>
            <h3 className="text-xl font-bold mb-3">Pickstack</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Turn anything into ranked collections. A production-ready mobile AI product.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#demo" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Demo
                </a>
              </li>
              <li>
                <a href="#download" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Download
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#architecture" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Code2 className="w-4 h-4" />
                  Architecture Docs
                </a>
              </li>
              <li>
                <a href="#design-system" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Palette className="w-4 h-4" />
                  Design System
                </a>
              </li>
              <li>
                <a href="#api" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  API Documentation
                </a>
              </li>
              <li>
                <a href="https://github.com/myasnikoviv/ranking_app" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <div className="text-sm text-muted-foreground space-y-3">
              <p>
                Built with Flutter, powered by AI. Pickstack demonstrates production-ready mobile engineering with clean architecture.
              </p>
              <p>
                Combining voice interaction, structured AI, and smart collections into one cohesive experience.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2026 Pickstack. Built as a technical case study.
          </div>
          
          {/* Social links */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/myasnikoviv/ranking_app" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-accent hover:bg-primary/10 border border-border hover:border-primary/30 flex items-center justify-center transition-all group">
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="#twitter" className="w-10 h-10 rounded-lg bg-accent hover:bg-secondary/10 border border-border hover:border-secondary/30 flex items-center justify-center transition-all group">
              <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
            </a>
            <a href="#linkedin" className="w-10 h-10 rounded-lg bg-accent hover:bg-primary/10 border border-border hover:border-primary/30 flex items-center justify-center transition-all group">
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
