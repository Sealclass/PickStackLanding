import { motion } from 'motion/react';
import { Download, Github, Code } from 'lucide-react';

export function DownloadSection() {
  return (
    <section id="download" className="relative py-32 px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-card via-card to-muted border border-border rounded-3xl p-12 text-center shadow-2xl"
        >
          {/* Accent glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-3xl -z-10" />

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-primary">explore</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Download the APK and start building better collections with AI
          </p>

          {/* Download stats */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">Android</div>
              <div className="text-sm text-muted-foreground">Platform</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-1">APK</div>
              <div className="text-sm text-muted-foreground">Direct Install</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-1">Free</div>
              <div className="text-sm text-muted-foreground">Open Source</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.a
              href="/assets/app-release.apk"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl flex items-center gap-3 justify-center transition-all shadow-lg shadow-primary/25"
            >
              <Download className="w-5 h-5" />
              Download APK
            </motion.a>
            
            <motion.a
              href="https://github.com/myasnikoviv/ranking_app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-card hover:bg-accent border border-border text-foreground rounded-xl flex items-center gap-3 justify-center transition-all"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </motion.a>
          </div>

          {/* Installation note */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent border border-border rounded-xl">
            <Code className="w-5 h-5 text-primary" />
            <div className="text-left">
              <div className="text-sm font-semibold">Developer Instructions</div>
              <div className="text-xs text-muted-foreground">Full setup guide included in repository</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
