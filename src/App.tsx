import { ThemeProvider } from "./theme";
import { About } from "./components/About";
import { CaseStudyGrid } from "./components/CaseStudyGrid";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { JsonLd } from "./components/JsonLd";
import { Skills } from "./components/Skills";
import { Timeline } from "./components/Timeline";

export default function App() {
  return (
    <ThemeProvider>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <CaseStudyGrid />
        <Skills />
        <Timeline />
      </main>
      <Footer />
      <JsonLd />
    </ThemeProvider>
  );
}
