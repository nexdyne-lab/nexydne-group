import { ArrowLeft, Check } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function SpecializedCodingAssistant() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-20">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm mb-8 text-slate-300">
            <Link href="/" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <Link href="/capabilities/custom-model-tuning" className="hover:text-white transition-colors">Custom Model Tuning</Link>
            <span>/</span>
            <span className="text-white">Software Specialized Coding</span>
          </nav>

          <h1 className="text-5xl md:text-6xl font-bold mb-3 max-w-4xl">
            Automotive Manufacturer Accelerates Embedded Software Dev with Custom AI
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Fine-tuned model understood proprietary hardware constraints and safety standards, speeding up ECU code generation by 35%.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 mb-6">
              A major automotive OEM was developing next-generation electric vehicle (EV) platforms. The software running on Electronic Control Units (ECUs) had to meet rigorous safety standards (ISO 26262) and operate within strict memory and processing constraints. General-purpose coding assistants failed to understand these specific requirements, often suggesting inefficient or non-compliant code.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              The engineering team needed a specialized tool that "spoke the language" of embedded systems and their proprietary vehicle architecture.
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
              NEXDYNE fine-tuned a code-generation model on the client's historical embedded C/C++ codebase, safety manuals, and hardware specifications.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Features</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-slate-900">Safety-Critical Code Generation.</strong> The model was trained to prioritize MISRA C compliance and avoid unsafe memory practices, generating code that was ready for safety certification.
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-slate-900">Hardware-Aware Optimization.</strong> The assistant suggested optimizations specific to the target microcontroller architecture, ensuring efficient use of limited RAM and CPU cycles.
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-slate-900">Automated Documentation.</strong> The tool automatically generated detailed technical documentation and traceability matrices required for regulatory audits.
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
              <div className="text-5xl font-bold text-blue-600 mb-2">35%</div>
              <div className="text-slate-600">Reduction in development time</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">50%</div>
              <div className="text-slate-600">Decrease in bug density</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">2x</div>
              <div className="text-slate-600">Faster safety certification</div>
            </div>
          </div>

          <div className="bg-slate-50 border-l-4 border-slate-600 p-6 mb-12">
            <p className="text-lg text-slate-700 italic mb-4">
              "This isn't just a coding tool; it's a domain expert. It understands the constraints of our hardware better than some of our junior engineers, helping us build safer cars faster."
            </p>
            <p className="text-slate-900 font-semibold">
              Chief Software Engineer
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-700 to-slate-900 text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Build specialized software faster
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            See how fine-tuned AI can master your specific domain.
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
