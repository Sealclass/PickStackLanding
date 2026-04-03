import { Hero } from './components/Hero';
import { ProductDemo } from './components/ProductDemo';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { TechnicalArchitecture } from './components/TechnicalArchitecture';
import { DesignSystem } from './components/DesignSystem';
import { AssignmentCompliance } from './components/AssignmentCompliance';
import { ScreenGallery } from './components/ScreenGallery';
import { DownloadSection } from './components/DownloadSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <ProductDemo />
      <Features />
      <HowItWorks />
      <TechnicalArchitecture />
      <DesignSystem />
      <AssignmentCompliance />
      <ScreenGallery />
      <DownloadSection />
      <Footer />
    </div>
  );
}
