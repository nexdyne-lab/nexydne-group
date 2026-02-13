import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home, ArrowRight, Search, FileText, Briefcase } from "lucide-react";
import { useLocation, Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full bg-[#0a0e3d] flex flex-col">
      <Navigation />
      
      <div className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Column: Error Message */}
            <div className="text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#00d4ff] text-sm font-medium">
                <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Error 404</span>
              </div>
              
              <h1 className="text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight">
                Page not <span className="text-[#00d4ff]">found</span>
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-md">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  onClick={handleGoHome}
                  className="bg-[#00d4ff] hover:bg-[#00bce3] text-[#0a0e3d] font-bold rounded-full px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-lg shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:shadow-[0_0_25px_rgba(0,212,255,0.5)] transition-all"
                >
                  <Home className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Back to Home
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => setLocation("/contact")}
                  className="border-white/20 text-white hover:bg-white/10 hover:text-white rounded-full px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-lg"
                >
                  Contact Support
                </Button>
              </div>
            </div>
            
            {/* Right Column: Helpful Links */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                You might be looking for:
              </h3>
              
              <div className="space-y-4">
                <Link href="/solutions/intelligent-process-optimization">
                  <div className="group flex items-center gap-4 p-4 rounded-lg sm:rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#00d4ff]/30 transition-all cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-[#00d4ff]/10 flex items-center justify-center text-[#00d4ff] group-hover:scale-110 transition-transform">
                      <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium group-hover:text-[#00d4ff] transition-colors">Our Solutions</h4>
                      <p className="text-sm text-gray-400">Explore our enterprise capabilities</p>
                    </div>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 group-hover:text-[#00d4ff] group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
                
                <Link href="/insights">
                  <div className="group flex items-center gap-4 p-4 rounded-lg sm:rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#00d4ff]/30 transition-all cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-[#00d4ff]/10 flex items-center justify-center text-[#00d4ff] group-hover:scale-110 transition-transform">
                      <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium group-hover:text-[#00d4ff] transition-colors">Latest Insights</h4>
                      <p className="text-sm text-gray-400">Read our thought leadership articles</p>
                    </div>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 group-hover:text-[#00d4ff] group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
                
                <Link href="/cases">
                  <div className="group flex items-center gap-4 p-4 rounded-lg sm:rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#00d4ff]/30 transition-all cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-[#00d4ff]/10 flex items-center justify-center text-[#00d4ff] group-hover:scale-110 transition-transform">
                      <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium group-hover:text-[#00d4ff] transition-colors">Case Studies</h4>
                      <p className="text-sm text-gray-400">See our impact across industries</p>
                    </div>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 group-hover:text-[#00d4ff] group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
