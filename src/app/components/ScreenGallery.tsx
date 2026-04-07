import { motion } from 'motion/react';

const screens = [
  {
    title: 'Onboarding',
    description: 'Beautiful entry experience',
    image: '/assets/screenshots/onboarding.png',
  },
  {
    title: 'Home Screen',
    description: 'Dynamic ranked collections',
    image: '/assets/screenshots/main_screen_loaded.png',
  },
  {
    title: 'Listings',
    description: 'Clean list views',
    image: '/assets/screenshots/list_of_items.png',
  },
  {
    title: 'Item Detail',
    description: 'Rich metadata and AI insights',
    image: '/assets/screenshots/item_detail.png',
  },
  {
    title: 'AI Plans',
    description: 'Smart collection strategies',
    image: '/assets/screenshots/plans.png',
  },
  {
    title: 'Saved Items',
    description: 'Custom collections',
    image: '/assets/screenshots/saved_items.png',
  },
  {
    title: 'Profile',
    description: 'Personal settings',
    image: '/assets/screenshots/profile.png',
  },
  {
    title: 'Design System',
    description: 'Consistent RA components',
    image: '/assets/screenshots/design_system.png',
  },
  {
    title: 'Plan Details',
    description: 'Deep dive into rankings',
    image: '/assets/screenshots/plan_detail.png',
  },
];

export function ScreenGallery() {
  return (
    <section id="gallery" className="relative py-32 px-6 overflow-hidden">
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
