import { motion } from 'motion/react';
import { Download, Sparkles, Layers, UserCircle, BarChart3, ArrowRight } from 'lucide-react';

const roadmapBlocks = [
  {
    id: 1,
    title: 'Core Experience',
    icon: <Layers className="w-6 h-6 text-primary" />,
    features: ['Rich media (images for items)', 'Smart suggestions', 'Better loading states'],
    glow: 'from-primary/20 to-transparent',
  },
  {
    id: 2,
    title: 'AI Features',
    icon: <Sparkles className="w-6 h-6 text-secondary" />,
    features: ['Prompt builder', 'Context-aware actions', 'Image-based input'],
    glow: 'from-secondary/20 to-transparent',
  },
  {
    id: 3,
    title: 'Account & Personalization',
    icon: <UserCircle className="w-6 h-6 text-primary" />,
    features: ['Google / Apple sign-in', 'User profile', 'Notifications'],
    glow: 'from-primary/20 to-transparent',
  },
  {
    id: 4,
    title: 'Monetization & Growth',
    icon: <BarChart3 className="w-6 h-6 text-secondary" />,
    features: ['Subscriptions', 'Credits system', 'Analytics'],
    glow: 'from-secondary/20 to-transparent',
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="relative py-32 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Roadmap</h2>
          <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">Where PickStack is going next</p>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            PickStack is evolving from a specialized AI ranking tool into a complete discovery platform. 
            We're building the future of structured AI interaction.
          </p>
        </motion.div>

        {/* Roadmap Blocks */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {roadmapBlocks.map((block, index) => (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${block.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
              
              <div className="relative h-full bg-card/40 backdrop-blur-sm border border-border group-hover:border-primary/30 transition-all duration-300 p-8 rounded-3xl shadow-xl flex flex-col">
                <div className="mb-6 p-3 bg-accent/50 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                  {block.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4">{block.title}</h3>
                
                <ul className="space-y-3 mt-auto">
                  {block.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2.5rem] overflow-hidden border border-border bg-card/60 backdrop-blur-md p-12 text-center"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-32 -mb-32" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">See the full roadmap</h3>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Explore everything we're building — from core features to long-term vision. 
              Our journey is just beginning.
            </p>

            <motion.a
              href="/assets/PickStack_Product_Roadmap.md"
              download="roadmap.md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              <Download className="w-5 h-5" />
              Download Roadmap
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
