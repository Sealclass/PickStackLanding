import { motion } from 'motion/react';
import { AlertCircle, Clock, ToggleLeft } from 'lucide-react';

const issues = [
  {
    icon: <Clock className="w-5 h-5 text-primary" />,
    title: 'Delayed loading state after generating a plan',
    description: "When navigating to the plan screen after tapping 'Generate plan', the loading skeleton does not appear immediately. This is caused by a state update timing issue, resulting in a short delay before the content renders.",
    status: 'In progress',
    glow: 'from-primary/10 to-transparent',
  },
  {
    icon: <ToggleLeft className="w-5 h-5 text-secondary" />,
    title: 'Bottom navigation state mismatch',
    description: 'In some cases, the bottom navigation highlights a different tab than the currently visible screen. This happens because the navigation bar state is not fully synchronized with the routing system and requires reactive updates.',
    status: 'Planned fix',
    glow: 'from-secondary/10 to-transparent',
  },
];

export function KnownIssues() {
  return (
    <section id="known-issues" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium mb-6 border border-border">
            <AlertCircle className="w-3 h-3" />
            Transparency Report
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Known Issues</h2>
          <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">What we're actively improving</p>
          <p className="text-xl text-muted-foreground leading-relaxed">
            PickStack is under active development. We represent these areas transparently as we refine stability and overall experience.
          </p>
        </motion.div>

        {/* Issues List */}
        <div className="space-y-6">
          {issues.map((issue, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${issue.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
              
              <div className="relative bg-card/40 backdrop-blur-sm border border-border group-hover:border-primary/20 transition-all duration-300 p-8 rounded-3xl">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0 p-3 bg-accent/50 rounded-2xl w-fit">
                    {issue.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold">{issue.title}</h3>
                      <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider border border-primary/20">
                        {issue.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {issue.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 text-sm text-muted-foreground/60 italic"
        >
          These issues are known and will be addressed in upcoming updates.
        </motion.p>
      </div>
    </section>
  );
}
