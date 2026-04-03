import { motion } from 'motion/react';
import { Code2, Database, Shield, Cpu } from 'lucide-react';

export function TechnicalArchitecture() {
  return (
    <section className="relative py-32 px-6">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1733412505442-36cfa59a4240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMHNjcmVlbiUyMGRhcmt8ZW58MXx8fHwxNzc1MjI4MzExfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Code background"
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
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
            Technical <span className="text-primary">Architecture</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built with production-grade engineering and modern best practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* AI System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">AI System</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <div>
                  <div className="font-semibold text-foreground">Prompt builders</div>
                  <div className="text-sm text-muted-foreground">Modular, composable templates</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <div>
                  <div className="font-semibold text-foreground">Structured contracts</div>
                  <div className="text-sm text-muted-foreground">No free-text parsing needed</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <div>
                  <div className="font-semibold text-foreground">Validation layer</div>
                  <div className="text-sm text-muted-foreground">Type-safe response handling</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <div>
                  <div className="font-semibold text-foreground">Intent handlers</div>
                  <div className="text-sm text-muted-foreground">Context-aware routing</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Data Flow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">Data Flow</h3>
            </div>
            <div className="relative">
              <div className="flex flex-col gap-3">
                {['Input', 'Enrichment', 'AI Processing', 'Validation', 'Persistence'].map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center text-sm font-semibold text-secondary">
                      {index + 1}
                    </div>
                    <div className="flex-1 px-4 py-2 bg-accent rounded-lg border border-border">
                      {step}
                    </div>
                    {index < 4 && (
                      <div className="absolute left-4 w-px h-3 bg-secondary/30" style={{ top: `${(index + 1) * 3.5}rem` }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Tech Stack</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between px-4 py-2 bg-accent rounded-lg border border-border">
                <span className="text-sm font-medium">Flutter</span>
                <span className="text-xs text-muted-foreground">Clean Architecture</span>
              </div>
              <div className="flex items-center justify-between px-4 py-2 bg-accent rounded-lg border border-border">
                <span className="text-sm font-medium">BLoC / Cubit</span>
                <span className="text-xs text-muted-foreground">State Management</span>
              </div>
              <div className="flex items-center justify-between px-4 py-2 bg-accent rounded-lg border border-border">
                <span className="text-sm font-medium">Supabase</span>
                <span className="text-xs text-muted-foreground">Backend & Data</span>
              </div>
              <div className="flex items-center justify-between px-4 py-2 bg-accent rounded-lg border border-border">
                <span className="text-sm font-medium">Firebase</span>
                <span className="text-xs text-muted-foreground">Remote Config</span>
              </div>
              <div className="flex items-center justify-between px-4 py-2 bg-accent rounded-lg border border-border">
                <span className="text-sm font-medium">Voice Input</span>
                <span className="text-xs text-muted-foreground">Native Integration</span>
              </div>
              <div className="flex items-center justify-between px-4 py-2 bg-accent rounded-lg border border-border">
                <span className="text-sm font-medium">Hydrated BLoC</span>
                <span className="text-xs text-muted-foreground">Local State</span>
              </div>
            </div>
          </motion.div>

          {/* Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">Security</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                <div>
                  <div className="font-semibold text-foreground">API key protection</div>
                  <div className="text-sm text-muted-foreground">Never stored in repository</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                <div>
                  <div className="font-semibold text-foreground">Environment-based config</div>
                  <div className="text-sm text-muted-foreground">Separate dev/prod settings</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                <div>
                  <div className="font-semibold text-foreground">Secure data sync</div>
                  <div className="text-sm text-muted-foreground">Encrypted communication</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
