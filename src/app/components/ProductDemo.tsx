import { motion } from 'motion/react';
import { Mic, Sparkles, Save } from 'lucide-react';

export function ProductDemo() {
  return (
    <section id="demo" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See it in <span className="text-primary">action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how natural language transforms into structured, actionable collections
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-card to-muted rounded-3xl p-6 border border-border/50 shadow-2xl">
              <div className="bg-background rounded-2xl overflow-hidden aspect-[9/16] relative">
                <video
                  src="/assets/screenshots/pickstak_screencast_optimized.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* Flow description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Mic className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Voice-first interaction</h3>
                <p className="text-muted-foreground">
                  Speak naturally. No commands needed. Just ask for what you want to discover.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Structured AI output</h3>
                <p className="text-muted-foreground">
                  AI generates ranked lists with rich metadata, images, and context. Not just chat.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Save className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Actionable collections</h3>
                <p className="text-muted-foreground">
                  Save, organize, and generate new plans from your favorite items. Collections that work for you.
                </p>
              </div>
            </div>

            {/* Flow visualization */}
            <div className="pt-8 flex items-center justify-between text-sm text-muted-foreground">
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-2 mx-auto">1</div>
                <div>Ask</div>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-secondary/50 mx-2" />
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mb-2 mx-auto">2</div>
                <div>Rank</div>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-secondary/50 to-primary/50 mx-2" />
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-2 mx-auto">3</div>
                <div>Save</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
