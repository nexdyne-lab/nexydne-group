import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, TrendingUp, DollarSign, PieChart, RefreshCw, BarChart3, Download } from "lucide-react";
import { Link } from "wouter";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const INDUSTRIES = [
  { id: "fintech", name: "FinTech & Financial Services", multiplier: 0.25, color: "#00d4ff" },
  { id: "retail", name: "Retail & E-commerce", multiplier: 0.18, color: "#a855f7" },
  { id: "logistics", name: "Logistics & Supply Chain", multiplier: 0.15, color: "#3b82f6" },
  { id: "healthcare", name: "Healthcare & Life Sciences", multiplier: 0.22, color: "#ef4444" },
  { id: "energy", name: "Energy & Sustainability", multiplier: 0.20, color: "#eab308" },
  { id: "manufacturing", name: "Manufacturing & IoT", multiplier: 0.16, color: "#06b6d4" },
];

export default function GrowthSimulator() {
  const [revenue, setRevenue] = useState<number>(100); // In millions
  const [industry, setIndustry] = useState(INDUSTRIES[0]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    if (!resultsRef.current) return;

    try {
      const canvas = await html2canvas(resultsRef.current, {
        scale: 2,
        backgroundColor: "#0a0e3d",
      });
      
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [canvas.width, canvas.height]
      });

      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save(`NexDyne-Growth-Projection-${industry.name.replace(/\s+/g, "-")}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  const handleSimulate = () => {
    setIsSimulating(true);
    setShowResults(false);
    setTimeout(() => {
      setIsSimulating(false);
      setShowResults(true);
    }, 1500);
  };

  // Generate projection data
  const generateData = () => {
    const data = [];
    const baseGrowthRate = 0.05; // 5% organic growth for core business
    
    for (let year = 0; year <= 5; year++) {
      const coreRevenue = revenue * Math.pow(1 + baseGrowthRate, year);
      
      // Venture revenue starts small (investment phase) then scales
      // Year 1: -5% (Investment), Year 2: 0%, Year 3: +5%, Year 4: +15%, Year 5: +Multiplier
      let ventureRevenue = 0;
      if (year === 1) ventureRevenue = 0;
      if (year === 2) ventureRevenue = revenue * 0.02;
      if (year === 3) ventureRevenue = revenue * 0.08;
      if (year === 4) ventureRevenue = revenue * 0.15;
      if (year === 5) ventureRevenue = revenue * industry.multiplier; // Mature venture contribution

      // Smooth curve interpolation for simplicity in this demo
      if (year > 1) {
         ventureRevenue = revenue * (industry.multiplier * ((year - 1) / 4)); 
      }

      data.push({
        year: `Year ${year}`,
        "Core Business": Math.round(coreRevenue),
        "New Venture": Math.round(ventureRevenue),
        total: Math.round(coreRevenue + ventureRevenue)
      });
    }
    return data;
  };

  const data = generateData();
  const finalYear = data[data.length - 1];
  const totalGrowth = finalYear.total - revenue;
  const percentGrowth = Math.round((totalGrowth / revenue) * 100);

  return (
    <div className="min-h-screen bg-[#0a0e3d] text-white font-sans selection:bg-[#00d4ff] selection:text-[#0a0e3d]">
      <Navigation />

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e3d] via-[#0a0e3d] to-[#050829]" />
        
        <div className="container px-4 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <BarChart3 className="w-4 h-4 text-[#00d4ff]" />
              <span className="text-sm font-medium text-[#00d4ff] uppercase tracking-wider">Growth Simulator</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-3">
              Visualize your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-blue-400">
                venture potential.
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              See how launching a new digital venture can accelerate your revenue growth beyond organic trajectories.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Controls */}
            <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-[#00d4ff]" />
                Input Parameters
              </h3>
              
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-3">
                    Current Annual Revenue ($M)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input 
                      type="number" 
                      value={revenue}
                      onChange={(e) => setRevenue(Number(e.target.value))}
                      className="w-full bg-[#0a0e3d] border border-white/20 rounded-xl py-4 pl-12 pr-4 text-white font-bold text-lg focus:outline-none focus:border-[#00d4ff] transition-colors"
                    />
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="1000" 
                    step="10"
                    value={revenue}
                    onChange={(e) => setRevenue(Number(e.target.value))}
                    className="w-full mt-4 accent-[#00d4ff]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-3">
                    Target Industry
                  </label>
                  <div className="grid grid-cols-1 gap-3">
                    {INDUSTRIES.map((ind) => (
                      <button
                        key={ind.id}
                        onClick={() => setIndustry(ind)}
                        className={`px-4 py-3 rounded-xl text-left text-sm font-medium transition-all border ${
                          industry.id === ind.id 
                            ? "bg-[#00d4ff]/10 border-[#00d4ff] text-[#00d4ff]" 
                            : "bg-[#0a0e3d] border-white/10 text-gray-400 hover:border-white/30"
                        }`}
                      >
                        {ind.name}
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={handleSimulate}
                  disabled={isSimulating}
                  className="w-full py-4 bg-[#00d4ff] text-[#0a0e3d] font-bold rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSimulating ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      Simulating...
                    </>
                  ) : (
                    <>
                      Run Simulation
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-8">
              {showResults ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#0a0e3d] border border-white/10 rounded-2xl p-8 h-full relative"
                >
                  <div ref={resultsRef} className="bg-[#0a0e3d] p-4 rounded-xl">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">5-Year Growth Projection</h3>
                        <p className="text-gray-400 text-sm">Based on {industry.name} benchmarks</p>
                      </div>
                      <div className="flex gap-6">
                        <div className="text-right">
                          <div className="text-sm text-gray-400 uppercase tracking-wider mb-1">Total Revenue</div>
                          <div className="text-3xl font-bold text-white">${finalYear.total}M</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-400 uppercase tracking-wider mb-1">Net Growth</div>
                          <div className="text-3xl font-bold text-[#00d4ff]">+{percentGrowth}%</div>
                        </div>
                      </div>
                    </div>

                    <div className="h-[400px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                          <XAxis 
                            dataKey="year" 
                            stroke="#9ca3af" 
                            tick={{ fill: '#9ca3af' }} 
                            axisLine={false}
                            tickLine={false}
                          />
                          <YAxis 
                            stroke="#9ca3af" 
                            tick={{ fill: '#9ca3af' }} 
                            axisLine={false}
                            tickLine={false}
                            tickFormatter={(value) => `$${value}M`}
                          />
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#050829', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                            itemStyle={{ color: '#fff' }}
                            cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                          />
                          <Legend wrapperStyle={{ paddingTop: '20px' }} />
                          <Bar dataKey="Core Business" stackId="a" fill="#1e293b" radius={[0, 0, 4, 4]} />
                          <Bar dataKey="New Venture" stackId="a" fill={industry.color} radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
                      <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-[#00d4ff]" />
                        Analysis
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        By launching a new venture in <strong>{industry.name}</strong>, you could potentially add <strong>${Math.round(finalYear["New Venture"])}M</strong> in annual revenue by Year 5. This represents a diversification of your portfolio, reducing reliance on core business lines while capturing higher-growth market segments.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button 
                      onClick={handleDownloadPDF}
                      className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download Report
                    </button>
                  </div>
                </motion.div>
              ) : (
                <div className="h-full min-h-[500px] bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center p-8 text-center border-dashed">
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
                    <PieChart className="w-10 h-10 text-gray-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-300 mb-2">Ready to Simulate</h3>
                  <p className="text-gray-500 max-w-md">
                    Enter your current revenue and select a target industry to visualize the potential impact of a new venture build.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
