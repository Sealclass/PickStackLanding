import { motion } from 'motion/react';

const screens = [
  {
    title: 'Home',
    description: 'Stacked ranking cards',
    image: 'https://images.unsplash.com/photo-1744869985867-d23cc60e3625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9iaWxlJTIwYXBwJTIwbW9ja3VwJTIwZGFya3xlbnwxfHx8fDE3NzUyMjgzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Voice Input',
    description: 'Natural language interaction',
    image: 'https://images.unsplash.com/photo-1689443111130-6e9c7dfd8f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBhYnN0cmFjdCUyMHB1cnBsZXxlbnwxfHx8fDE3NzUyMjgzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Ranking Detail',
    description: 'Rich content display',
    image: 'https://images.unsplash.com/photo-1762506168883-0f829364d598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBkYXJrJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzc1MjI4MzEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Item Detail',
    description: 'Full metadata view',
    image: 'https://images.unsplash.com/photo-1731400800900-1bce57414c09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY2lyY3VpdCUyMGJvYXJkJTIwcHVycGxlfGVufDF8fHx8MTc3NTIyODMxMXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Collections',
    description: 'Saved rankings',
    image: 'https://images.unsplash.com/photo-1769704552351-d5059b8bb6f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwcHVycGxlJTIwY3lhbnxlbnwxfHx8fDE3NzUyMjgzMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Settings',
    description: 'Customization & preferences',
    image: 'https://images.unsplash.com/photo-1733412505442-36cfa59a4240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMHNjcmVlbiUyMGRhcmt8ZW58MXx8fHwxNzc1MjI4MzExfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function ScreenGallery() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
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
            Screen <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A complete mobile experience designed for discovery
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screens.map((screen, index) => (
            <motion.div
              key={screen.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-card to-muted rounded-3xl p-4 border border-border hover:border-primary/50 transition-all duration-300 shadow-xl">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Phone mockup */}
                <div className="relative bg-background rounded-2xl overflow-hidden aspect-[9/19] shadow-inner">
                  <img
                    src={screen.image}
                    alt={screen.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Label */}
                <div className="mt-4 text-center">
                  <h3 className="font-semibold mb-1">{screen.title}</h3>
                  <p className="text-sm text-muted-foreground">{screen.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
