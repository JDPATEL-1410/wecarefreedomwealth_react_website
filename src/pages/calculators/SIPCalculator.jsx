import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaLightbulb,
  FaCalculator,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';
import { Line, Doughnut } from 'react-chartjs-2';
import SliderInput from '../../components/SliderInput';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);
  const [currency, setCurrency] = useState('INR');

  const currencySymbols = {
    INR: '₹',
    USD: '$',
    EUR: '€'
  };

  // Calculate SIP returns
  const calculateSIP = () => {
    const monthlyRate = expectedReturn / 12 / 100;
    const months = timePeriod * 12;

    const futureValue = monthlyInvestment *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate);

    const totalInvestment = monthlyInvestment * months;
    const estimatedReturns = futureValue - totalInvestment;

    return {
      futureValue: Math.round(futureValue),
      totalInvestment: Math.round(totalInvestment),
      estimatedReturns: Math.round(estimatedReturns),
      returnPercentage: ((estimatedReturns / totalInvestment) * 100).toFixed(2)
    };
  };

  const results = calculateSIP();

  // Growth Chart Data
  const growthChartData = {
    labels: Array.from({ length: timePeriod + 1 }, (_, i) => `Year ${i}`),
    datasets: [
      {
        label: 'Future Value',
        data: Array.from({ length: timePeriod + 1 }, (_, i) => {
          const months = i * 12;
          const monthlyRate = expectedReturn / 12 / 100;
          if (months === 0) return 0;
          return Math.round(monthlyInvestment *
            ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
            (1 + monthlyRate));
        }),
        borderColor: 'rgb(249, 115, 22)',
        backgroundColor: 'rgba(249, 115, 22, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: 'rgb(249, 115, 22)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2
      },
      {
        label: 'Investment',
        data: Array.from({ length: timePeriod + 1 }, (_, i) => monthlyInvestment * i * 12),
        borderColor: 'rgb(30, 41, 59)',
        backgroundColor: 'rgba(30, 41, 59, 0.05)',
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: 'rgb(30, 41, 59)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2
      }
    ]
  };

  const growthChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: { size: 12, weight: '700', family: 'Inter' }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        padding: 16,
        titleFont: { size: 14, weight: '800' },
        bodyFont: { size: 13, weight: '500' },
        callbacks: {
          label: (context) => `${context.dataset.label}: ${currencySymbols[currency]}${(context.parsed.y / 100000).toFixed(2)}L`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(0, 0, 0, 0.05)' },
        ticks: {
          callback: (value) => `${currencySymbols[currency]}${(value / 100000).toFixed(1)}L`,
          font: { size: 11, weight: '600' }
        }
      },
      x: {
        grid: { display: false },
        ticks: { font: { size: 11, weight: '600' } }
      }
    }
  };

  const doughnutChartData = {
    labels: ['Invested Capital', 'Estimated Yield'],
    datasets: [
      {
        data: [results.totalInvestment, results.estimatedReturns],
        backgroundColor: ['#1e293b', '#f97316'],
        borderColor: ['#fff', '#fff'],
        borderWidth: 4,
        hoverOffset: 20
      }
    ]
  };

  return (
    <div className="bg-[#f8fafc]">
      {/* Cinematic Light Header */}
      <section
        className="relative h-[65vh] flex items-center overflow-hidden pt-16"
        style={{
          backgroundImage: 'linear-gradient(135deg, #ffe5bd 0%, #fffdf7 35%, #c7f1ff 100%)'
        }}
      >
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8)_0%,_transparent_100%)]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-3 bg-orange-500/10 backdrop-blur-md border border-orange-500/20 px-4 py-2 rounded-full mb-8"
              >
                <FaCalculator className="text-orange-600 text-sm" />
                <span className="text-orange-900 font-bold text-xs uppercase tracking-[0.2em]">Institutional Calculator</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
                SIP <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                  Forecaster.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-xl mb-12 font-medium">
                Strategically engineer your wealth accumulation path by analyzing the clinical impact of compounding over long-term horizons.
              </p>

              <div className="flex flex-wrap gap-10">
                <div className="flex flex-col">
                  <span className="text-slate-900 text-3xl font-black">{currencySymbols[currency]}500</span>
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Minimum Entry</span>
                </div>
                <div className="w-px h-12 bg-slate-200"></div>
                <div className="flex flex-col">
                  <span className="text-orange-600 text-3xl font-black">12-15%</span>
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Target Benchmark</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="hidden lg:block relative"
            >
              <div className="bg-white/60 backdrop-blur-xl border border-white/40 p-12 rounded-[4rem] shadow-2xl relative z-10 overflow-hidden text-center">
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-4">Projected Terminal Corpus</p>
                <p className="text-6xl font-black text-slate-900 tracking-tighter">
                  {currencySymbols[currency]}{(results.futureValue / 100000).toFixed(2)}L
                </p>
                <div className="mt-8 pt-8 border-t border-slate-900/10 flex justify-between">
                  <div>
                    <p className="text-slate-500 text-[8px] font-black uppercase tracking-widest">Invested</p>
                    <p className="text-lg font-bold text-slate-900">{(results.totalInvestment / 100000).toFixed(2)}L</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-[8px] font-black uppercase tracking-widest">Yield</p>
                    <p className="text-lg font-bold text-orange-600">{(results.estimatedReturns / 100000).toFixed(2)}L</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left Column: Calibration */}
            <div className="lg:col-span-4 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[3rem] shadow-xl p-10 border border-slate-100"
              >
                <h3 className="text-2xl font-black text-slate-900 mb-10 flex items-center uppercase tracking-tight">
                  <span className="w-1.5 h-8 bg-orange-500 rounded-full mr-4"></span>
                  Calibration
                </h3>

                <div className="space-y-10">
                  <SliderInput
                    label="Monthly Allocation"
                    value={monthlyInvestment}
                    min={500}
                    max={200000}
                    step={500}
                    onChange={setMonthlyInvestment}
                    prefix={currencySymbols[currency]}
                  />
                  <SliderInput
                    label="Expected Yield (%)"
                    value={expectedReturn}
                    min={1}
                    max={30}
                    step={0.5}
                    onChange={setExpectedReturn}
                    suffix="%"
                  />
                  <SliderInput
                    label="Time Horizon"
                    value={timePeriod}
                    min={1}
                    max={40}
                    onChange={setTimePeriod}
                    suffix=" Yrs"
                  />

                  <div className="pt-6">
                    <label className="block text-slate-500 font-bold text-[10px] uppercase tracking-widest mb-4">Currency Protocol</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['INR', 'USD', 'EUR'].map((curr) => (
                        <button
                          key={curr}
                          onClick={() => setCurrency(curr)}
                          className={`py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${currency === curr
                            ? 'bg-slate-900 text-white shadow-lg'
                            : 'bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-100'
                            }`}
                        >
                          {curr}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="bg-orange-500 rounded-[3rem] p-10 text-slate-900 relative overflow-hidden group shadow-lg shadow-orange-500/20">
                <div className="relative z-10">
                  <FaLightbulb className="text-4xl mb-6 text-slate-900/50" />
                  <h4 className="text-xl font-black mb-4 uppercase leading-tight">Advisor Insight</h4>
                  <p className="text-sm font-medium leading-relaxed opacity-90">
                    Step-up your SIP by 10% annually to aggressively combat inflation and accelerate your terminal wealth targets.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Visualization */}
            <div className="lg:col-span-8 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[3rem] shadow-xl p-10 border border-slate-100 h-[600px] flex flex-col"
              >
                <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">Growth Projection</h3>
                <div className="flex-1 w-full">
                  <Line data={growthChartData} options={growthChartOptions} />
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[3rem] shadow-xl p-10 border border-slate-100 flex flex-col items-center justify-center text-center"
                >
                  <h3 className="text-xl font-black text-slate-900 mb-8 uppercase tracking-tight">Yield Breakdown</h3>
                  <div className="h-64 w-full">
                    <Doughnut data={doughnutChartData} options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: { position: 'bottom', labels: { usePointStyle: true, font: { size: 10, weight: '700' } } }
                      }
                    }} />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-slate-900 rounded-[3rem] p-10 text-white flex flex-col justify-center"
                >
                  <h3 className="text-2xl font-black mb-10 uppercase tracking-tight">Security Protocol</h3>
                  <div className="space-y-6">
                    {[
                      { title: "Rupee Cost Averaging", desc: "Systematic volatility mitigation." },
                      { title: "Compound Velocity", desc: "Exponential growth multiplier." },
                      { title: "Tactical Discipline", desc: "Behavioral alpha generation." }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start space-x-4">
                        <FaCheckCircle className="text-orange-500 mt-1" />
                        <div>
                          <p className="font-black text-xs uppercase tracking-widest">{item.title}</p>
                          <p className="text-[10px] text-slate-400 font-medium">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="mt-12 bg-white text-slate-900 font-black py-4 px-8 rounded-2xl flex items-center justify-center group hover:bg-orange-500 hover:text-white transition-all text-xs uppercase tracking-widest shadow-xl">
                    Consult Architect <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SIPCalculator;

