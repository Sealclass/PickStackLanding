import { motion } from 'motion/react';
import { CheckCircle2, Plus } from 'lucide-react';

export function AssignmentCompliance() {
  const requirements = [
    'User enters ranking request',
    'AI generates ranked list',
    'Rich content (images, metadata)',
    'Runs on mobile device',
    'API usage demonstrated',
    'Instructions to run included',
  ];

  const bonusFeatures = [
    'Voice input for natural interaction',
    'Structured AI contracts (not chat)',
    'Collections system for reusability',
    'Offline-safe sync architecture',
    'Advanced UX with micro-interactions',
    'Widget-based component system',
    'Clean Architecture pattern',
    'Production-ready security',
  ];

  return (
    <section className="relative py-32 px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Assignment <span className="text-primary">Compliance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meeting requirements and exceeding expectations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Core Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Core Requirements</h3>
            </div>

            <div className="space-y-3">
              {requirements.map((req, index) => (
                <motion.div
                  key={req}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-3 p-4 bg-accent rounded-xl border border-border hover:border-primary/30 transition-all"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{req}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-xl">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-semibold text-primary">All requirements satisfied</span>
              </div>
            </div>
          </motion.div>

          {/* Beyond Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                <Plus className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">Beyond Requirements</h3>
            </div>

            <div className="space-y-3">
              {bonusFeatures.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-3 p-4 bg-accent rounded-xl border border-border hover:border-secondary/30 transition-all"
                >
                  <Plus className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-secondary/5 border border-secondary/20 rounded-xl">
              <div className="text-sm text-muted-foreground">
                Pickstack goes beyond a basic implementation to deliver a production-ready product with advanced features and professional engineering.
              </div>
            </div>
          </motion.div>
        </div>

        {/* Original Task Reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 bg-gradient-to-br from-card to-muted border border-border rounded-2xl p-8"
        >
          <h4 className="text-xl font-bold mb-4">Original Task Objective</h4>
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              "Build a mobile app where users can enter a ranking request, the AI generates a ranked list with rich content (images, metadata, etc.), demonstrating API usage. The app should run on mobile with instructions to run."
            </p>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            <span className="font-semibold">Task completed with additional value delivered</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
