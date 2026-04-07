import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductDemo } from './components/ProductDemo';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { TechnicalArchitecture } from './components/TechnicalArchitecture';
import { DesignSystem } from './components/DesignSystem';
import { KnownIssues } from './components/KnownIssues';
import { AssignmentCompliance } from './components/AssignmentCompliance';
import { ScreenGallery } from './components/ScreenGallery';
import { Roadmap } from './components/Roadmap';
import { DownloadSection } from './components/DownloadSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <ProductDemo />
      <Features />
      <HowItWorks />
      <ScreenGallery />
      <Roadmap />
      <TechnicalArchitecture />
      <DesignSystem />
      <KnownIssues />
      <AssignmentCompliance />
      <ScreenGallery />
      <DownloadSection />
      <Footer />
    </div>
  );
}
