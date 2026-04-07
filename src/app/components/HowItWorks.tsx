import { motion } from 'motion/react';
import { MessageSquare, Sparkles, Database, FolderOpen, Wand2 } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Ask anything',
    description: 'Use voice or text. No special commands or syntax needed.',
    color: 'primary',
  },
  {
    icon: Sparkles,
    number: '02',
    title: 'AI builds structured ranking',
    description: 'Our engine generates organized lists with intelligent ordering.',
    color: 'secondary',
  },
  {
    icon: Database,
    number: '03',
    title: 'Items include rich metadata',
    description: 'Images, locations, descriptions, and actionable context.',
    color: 'primary',
  },
  {
    icon: FolderOpen,
    number: '04',
    title: 'Save into collections',
    description: 'Organize discoveries into personal, reusable collections.',
    color: 'secondary',
  },
  {
    icon: Wand2,
    number: '05',
    title: 'Generate new lists',
    description: 'Create plans and recommendations from your saved items.',
    color: 'primary',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How it <span className="text-primary">works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From thought to organized collection in seconds
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line connector for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary opacity-20" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center`}>
                    <div className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 ${step.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                      Step {step.number}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-lg max-w-md mx-auto lg:mx-0">
                      {step.description}
                    </p>
                  </div>

                  {/* Center icon */}
                  <div className="relative flex-shrink-0">
                    <div className={`relative w-20 h-20 rounded-2xl ${step.color === 'primary' ? 'bg-primary/10 border-primary/30' : 'bg-secondary/10 border-secondary/30'} border-2 flex items-center justify-center shadow-lg ${step.color === 'primary' ? 'shadow-primary/20' : 'shadow-secondary/20'}`}>
                      <Icon className={`w-10 h-10 ${step.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                    </div>
                    {/* Pulse effect */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className={`absolute inset-0 rounded-2xl ${step.color === 'primary' ? 'bg-primary' : 'bg-secondary'}`}
                    />
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
