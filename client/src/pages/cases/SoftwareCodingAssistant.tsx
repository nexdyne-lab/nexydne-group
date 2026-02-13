import { ArrowLeft, Check } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function SoftwareCodingAssistant() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-20">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm mb-8 text-slate-300">
            <Link href="/" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <Link href="/capabilities/artificial-intelligence" className="hover:text-white transition-colors">Generative AI</Link>
            <span>/</span>
            <span className="text-white">Software Coding Assistants</span>
          </nav>

          <h1 className="text-5xl md:text-6xl font-bold mb-3 max-w-4xl">
            Tech Giant Boosts Developer Productivity 40% with GenAI
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Custom-trained coding assistants automated boilerplate code and unit testing, allowing engineers to focus on complex architecture.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 mb-6">
              A leading enterprise software company was facing a slowdown in feature delivery. Their codebase was massive and complex, requiring significant time for new engineers to onboard. Senior developers spent up to 30% of their time writing repetitive boilerplate code and unit tests, distracting them from high-value architectural work.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              They wanted to leverage Generative AI to accelerate development but needed a solution that understood their proprietary frameworks and coding standards, which off-the-shelf tools couldn't provide.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">The Solution</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 mb-8">
              NEXDYNE fine-tuned a large language model (LLM) on the client's internal code repositories and documentation to create a secure, context-aware coding assistant.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Capabilities</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-slate-900">Context-Aware Autocomplete.</strong> The assistant suggested code snippets that adhered to internal style guides and utilized proprietary libraries, reducing context switching.
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-slate-900">Automated Unit Testing.</strong> Developers could highlight a function and ask the assistant to generate comprehensive unit tests, covering edge cases that were often overlooked.
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-slate-900">Legacy Code Refactoring.</strong> The tool could explain complex legacy code and suggest modern refactoring strategies, accelerating the modernization of technical debt.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">The Results</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-slate-600">Increase in coding velocity</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">50%</div>
              <div className="text-slate-600">Reduction in code review time</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">90%</div>
              <div className="text-slate-600">Developer adoption rate</div>
            </div>
          </div>

          <div className="bg-slate-50 border-l-4 border-slate-600 p-6 mb-12">
            <p className="text-lg text-slate-700 italic mb-4">
              "It's like having a senior engineer pair programming with you 24/7. It handles the drudgery so we can focus on the innovation."
            </p>
            <p className="text-slate-900 font-semibold">
              Principal Software Architect
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-700 to-slate-900 text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Supercharge your engineering team
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Explore how custom GenAI tools can accelerate your development lifecycle.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-slate-900 rounded-full hover:bg-slate-100 transition-colors font-semibold">
              Contact us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
