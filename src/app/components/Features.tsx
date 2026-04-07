import { motion } from 'motion/react';
import { Mic, Brain, FolderHeart, MapPin, Sparkles, History } from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: 'Voice Input',
    description: 'Natural language, no commands. Just speak what you want to discover.',
    color: 'primary',
  },
  {
    icon: Brain,
    title: 'AI Ranking Engine',
    description: 'Structured output, not chat. Get organized, ranked results with rich metadata.',
    color: 'secondary',
  },
  {
    icon: FolderHeart,
    title: 'Collection System',
    description: 'Lists become reusable assets. Save, organize, and revisit your discoveries.',
    color: 'primary',
  },
  {
    icon: MapPin,
    title: 'Actionable Items',
    description: 'Every item is enriched with location, images, and context. Ready to use.',
    color: 'secondary',
  },
  {
    icon: Sparkles,
    title: 'Generate from Favorites',
    description: 'Create new plans from saved items. Your collections work together.',
    color: 'primary',
  },
  {
    icon: History,
    title: 'Smart Context',
    description: 'History and location aware. Results that understand your preferences.',
    color: 'secondary',
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-32 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
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
            Built for <span className="text-primary">real use</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every feature designed to make discovery effortless and collections meaningful
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="relative h-full bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color === 'primary' ? 'from-primary/5 to-transparent' : 'from-secondary/5 to-transparent'} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl ${feature.color === 'primary' ? 'bg-primary/10 border-primary/20' : 'bg-secondary/10 border-secondary/20'} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-7 h-7 ${feature.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
