import { motion } from 'motion/react';
import { Palette, Grid3x3, Zap } from 'lucide-react';

export function DesignSystem() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Design <span className="text-primary">System</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A cohesive, scalable design language built for consistency
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Design Tokens */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Design Tokens</h3>
            </div>

            {/* Colors */}
            <div className="mb-8">
              <div className="text-sm font-semibold text-muted-foreground mb-4">Colors</div>
              <div className="grid grid-cols-4 gap-3">
                <div className="space-y-2">
                  <div className="h-16 rounded-lg bg-[#8b5cf6] shadow-lg shadow-primary/25" />
                  <div className="text-xs text-center text-muted-foreground">Primary</div>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-lg bg-[#06b6d4] shadow-lg shadow-secondary/25" />
                  <div className="text-xs text-center text-muted-foreground">Secondary</div>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-lg bg-[#0E0F13] border border-border" />
                  <div className="text-xs text-center text-muted-foreground">Surface</div>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-lg bg-[#16171f] border border-border" />
                  <div className="text-xs text-center text-muted-foreground">Muted</div>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="mb-8">
              <div className="text-sm font-semibold text-muted-foreground mb-4">Typography</div>
              <div className="space-y-3 bg-card border border-border rounded-xl p-6">
                <div className="text-3xl font-bold">Display</div>
                <div className="text-xl font-semibold">Heading</div>
                <div className="text-base">Body Text</div>
                <div className="text-sm text-muted-foreground">Caption</div>
              </div>
            </div>

            {/* Spacing */}
            <div>
              <div className="text-sm font-semibold text-muted-foreground mb-4">Spacing & Motion</div>
              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm">8px grid system</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span className="text-sm">Ease-out transitions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm">12px border radius</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Components */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                <Grid3x3 className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">Component Library</h3>
            </div>

            {/* Button examples */}
            <div className="mb-8">
              <div className="text-sm font-semibold text-muted-foreground mb-4">Buttons</div>
              <div className="flex flex-wrap gap-3">
                <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl transition-all">
                  Primary
                </button>
                <button className="px-6 py-3 bg-secondary hover:bg-secondary/90 text-white rounded-xl transition-all">
                  Secondary
                </button>
                <button className="px-6 py-3 bg-card hover:bg-accent border border-border text-foreground rounded-xl transition-all">
                  Outline
                </button>
              </div>
            </div>

            {/* Card examples */}
            <div className="mb-8">
              <div className="text-sm font-semibold text-muted-foreground mb-4">Cards</div>
              <div className="space-y-3">
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all cursor-pointer">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20" />
                    <div className="font-semibold">Ranking Card</div>
                  </div>
                  <div className="text-sm text-muted-foreground">Card with hover state</div>
                </div>
              </div>
            </div>

            {/* Chips */}
            <div className="mb-8">
              <div className="text-sm font-semibold text-muted-foreground mb-4">Chips & Tags</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm border border-primary/20">
                  Voice
                </span>
                <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm border border-secondary/20">
                  AI
                </span>
                <span className="px-4 py-2 bg-accent text-foreground rounded-full text-sm border border-border">
                  Collection
                </span>
              </div>
            </div>

            {/* Widget Integration */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-muted-foreground">Widget Architecture</div>
                  <div className="text-xs text-muted-foreground">Widgetbook integration ready</div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>Modular component system</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    <span>Interactive documentation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>Isolated component testing</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
