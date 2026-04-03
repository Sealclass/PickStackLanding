import { motion } from "motion/react";
import { Download, Play } from "lucide-react";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex justify-center lg:justify-start"
            >
              <Logo size="lg" />
            </motion.div>

            {/* Main headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Turn anything
              </span>
              <br />
              <span className="text-foreground">
                into ranked collections
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl">
              Ask. Discover. Save. Build better lists.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl flex items-center gap-3 justify-center transition-all shadow-lg shadow-primary/25"
              >
                <Download className="w-5 h-5" />
                Download APK
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-card hover:bg-accent border border-border text-foreground rounded-xl flex items-center gap-3 justify-center transition-all"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
              <div>
                <div className="text-3xl font-bold text-primary">
                  Voice
                </div>
                <div className="text-sm text-muted-foreground">
                  First Input
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">
                  AI
                </div>
                <div className="text-sm text-muted-foreground">
                  Powered
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">
                  Smart
                </div>
                <div className="text-sm text-muted-foreground">
                  Collections
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-md">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl rounded-full" />

              {/* Phone mockup container */}
              <div className="relative bg-gradient-to-br from-card to-muted rounded-[3rem] p-4 border border-border/50 shadow-2xl">
                <div className="bg-background rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  <img
                    src="https://images.unsplash.com/photo-1744869985867-d23cc60e3625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9iaWxlJTIwYXBwJTIwbW9ja3VwJTIwZGFya3xlbnwxfHx8fDE3NzUyMjgzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Pickstack app interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}