import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaChartLine,
  FaRupeeSign,
  FaCalendarAlt,
  FaPercentage,
  FaPiggyBank,
  FaTrophy,
  FaInfoCircle,
  FaLightbulb,
  FaCalculator,
  FaArrowRight,
  FaCheckCircle,
  FaCoins
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

const LumpsumCalculator = () => {
  const [investment, setInvestment] = useState(100000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);
  const [currency, setCurrency] = useState('INR');

  const currencySymbols = {
    INR: '₹',
    USD: '$',
    EUR: '€'
  };

  // Calculate Lumpsum returns
  const calculateLumpsum = () => {
    const rate = expectedReturn / 100;
    const futureValue = investment * Math.pow((1 + rate), timePeriod);
    const estimatedReturns = futureValue - investment;

    return {
      futureValue: Math.round(futureValue),
      totalInvestment: investment,
      estimatedReturns: Math.round(estimatedReturns),
      returnPercentage: ((estimatedReturns / investment) * 100).toFixed(2),
      cagrRate: expectedReturn
    };
  };

  const results = calculateLumpsum();

  // Growth Chart Data
  const growthChartData = {
    labels: Array.from({ length: timePeriod + 1 }, (_, i) => `Year ${i}`),
    datasets: [
      {
        label: 'Terminal Value',
        data: Array.from({ length: timePeriod + 1 }, (_, i) => {
          const rate = expectedReturn / 100;
          return Math.round(investment * Math.pow((1 + rate), i));
        }),
        borderColor: 'rgb(249, 115, 22)',
        backgroundColor: 'rgba(249, 115, 22, 0.05)',
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: 'rgb(249, 115, 22)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2
      }
    ]
  };

  const growthChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#0f172a',
        padding: 12,
        titleFont: { size: 14, weight: 'bold' },
        bodyFont: { size: 13 },
        callbacks: {
          label: (context) => `Value: ${currencySymbols[currency]}${context.parsed.y.toLocaleString()}`
        }
      }
    },
    scales: {
      y: {
        grid: { color: 'rgba(0,0,0,0.05)' },
        ticks: {
          callback: (value) => `${currencySymbols[currency]}${(value / 100000).toFixed(1)}L`,
          font: { size: 11, weight: '600' }
        }
      },
      x: { grid: { display: false }, ticks: { font: { size: 11, weight: '600' } } }
    }
  };

  const doughnutChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: { size: 12, weight: 'bold' },
          padding: 20,
          color: '#1e293b'
        }
      },
      tooltip: {
        backgroundColor: '#0f172a',
        padding: 12,
        titleFont: { size: 14, weight: 'bold' },
        bodyFont: { size: 13 },
        callbacks: {
          label: (context) => ` ${context.label}: ${currencySymbols[currency]}${context.parsed.toLocaleString()}`
        }
      }
    },
    cutout: '70%',
    borderWidth: 0
  };

  const doughnutChartData = {
    labels: ['Capital Deployment', 'Wealth Accrual'],
    datasets: [{
      data: [results.totalInvestment, results.estimatedReturns],
      backgroundColor: ['#0f172a', '#f97316'],
      borderColor: ['#fff', '#fff'],
      borderWidth: 4,
      hoverOffset: 10
    }]
  };

  return (
    <div className="bg-[#f8fafc]">
      {/* Cinematic Light Header */}
      <section
        className="relative h-[55vh] flex items-center overflow-hidden pt-16"
        style={{
          backgroundImage: 'linear-gradient(135deg, #ffe5bd 0%, #fffdf7 35%, #c7f1ff 100%)'
        }}
      >
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8)_0%,_transparent_100%)]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-3 bg-white/60 backdrop-blur-md border border-white/40 px-4 py-2 rounded-full mb-8"
            >
              <FaCalculator className="text-orange-600 text-xs" />
              <span className="text-orange-900 font-bold text-[10px] uppercase tracking-[0.2em]">Institutional Terminal</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8 uppercase tracking-tighter">
              Capital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 font-black">
                Multiplier.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto font-medium">
              Calculate the terminal value of your one-time capital deployment with clinical precision and institutional forecasting tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Parameters */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-4"
          >
            <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-slate-100 sticky top-24">
              <div className="bg-slate-900 px-8 py-6 text-white">
                <h2 className="text-lg font-black uppercase tracking-widest flex items-center">
                  <FaPiggyBank className="mr-3 text-orange-500" />
                  Directives
                </h2>
              </div>

              <div className="p-10 space-y-10">
                {/* Currency Switching */}
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Base Currency</p>
                  <div className="flex bg-slate-100 p-1.5 rounded-2xl">
                    {['INR', 'USD', 'EUR'].map((curr) => (
                      <button
                        key={curr}
                        onClick={() => setCurrency(curr)}
                        className={`flex-1 py-3 px-4 rounded-xl text-xs font-black transition-all ${currency === curr ? 'bg-white text-slate-900 shadow-lg' : 'text-slate-500 hover:text-slate-700'}`}
                      >
                        {curr}
                      </button>
                    ))}
                  </div>
                </div>

                <SliderInput
                  label="Initial Deployment"
                  value={investment}
                  onChange={setInvestment}
                  min={10000}
                  max={10000000}
                  step={10000}
                  unit={currencySymbols[currency]}
                />

                <SliderInput
                  label="Expected Yield (%)"
                  value={expectedReturn}
                  onChange={setExpectedReturn}
                  min={1}
                  max={30}
                  step={0.5}
                />

                <SliderInput
                  label="Time Horizon (Years)"
                  value={timePeriod}
                  onChange={setTimePeriod}
                  min={1}
                  max={40}
                  step={1}
                />

                {/* Advisor Insight */}
                <div className="bg-orange-50 p-6 rounded-[2rem] border border-orange-100">
                  <div className="flex items-start">
                    <FaLightbulb className="text-orange-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-black text-slate-900 text-xs uppercase tracking-widest mb-1 italic">Advisor Insight</h4>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        Lumpsum strategies thrive on market cycles. Consider tactical entry points for peak alpha generation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <div className="lg:col-span-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ResultCard
                icon={FaCoins}
                label="Capital Deployed"
                value={`${currencySymbols[currency]}${(results.totalInvestment / 100000).toFixed(2)}L`}
                subtext="Initial Liquidity"
                color="text-slate-900"
              />
              <ResultCard
                icon={FaChartLine}
                label="Accrued Yield"
                value={`${currencySymbols[currency]}${(results.estimatedReturns / 100000).toFixed(2)}L`}
                subtext="Net Wealth Creation"
                color="text-orange-600"
              />
              <ResultCard
                icon={FaTrophy}
                label="Terminal Corpus"
                value={`${currencySymbols[currency]}${(results.futureValue / 100000).toFixed(2)}L`}
                subtext="Projected Value"
                color="text-white"
                featured
              />
            </div>

            {/* Visual Analytics */}
            <div className="bg-white rounded-[4rem] shadow-xl p-10 border border-slate-100">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Growth Projection</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Asset Value</span>
                  </div>
                </div>
              </div>
              <div className="h-96">
                <Line data={growthChartData} options={growthChartOptions} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-[4rem] shadow-xl p-10 border border-slate-100">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-10 text-center">Yield Breakdown</h3>
                <div className="h-64 flex items-center justify-center relative">
                  <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
                  <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Growth Factor</span>
                    <span className="text-2xl font-black text-slate-900">{results.returnPercentage}%</span>
                  </div>
                </div>
              </div>

              {/* Security Protocol Block */}
              <div className="bg-slate-900 rounded-[4rem] shadow-2xl p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/20 rounded-full blur-3xl"></div>
                <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-8 text-orange-500">Security Protocol</h4>
                <div className="space-y-6">
                  <BenefitItem text="Compounding Velocity" />
                  <BenefitItem text="Inflation Hedge" />
                  <BenefitItem text="Portfolio Recalibration" />
                </div>
                <div className="mt-12 pt-8 border-t border-white/10">
                  <button className="w-full py-4 bg-orange-600 hover:bg-white hover:text-orange-600 transition-all rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center">
                    Consult Architect <FaArrowRight className="ml-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResultCard = ({ icon: Icon, label, value, subtext, color, featured }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`${featured ? 'bg-slate-900 text-white shadow-2xl shadow-slate-900/40' : 'bg-white text-slate-900 border border-slate-100 shadow-xl'} rounded-[3rem] p-8 transition-all`}
  >
    <div className={`w-12 h-12 ${featured ? 'bg-orange-600' : 'bg-slate-50'} rounded-2xl flex items-center justify-center mb-6`}>
      <Icon className={featured ? 'text-white' : 'text-orange-600'} />
    </div>
    <p className={`text-[10px] font-black uppercase tracking-[0.2em] mb-2 ${featured ? 'text-slate-400' : 'text-slate-400'}`}>{label}</p>
    <p className={`text-3xl font-black mb-1 ${color}`}>{value}</p>
    <p className={`text-[10px] font-bold ${featured ? 'text-orange-500/80' : 'text-slate-400 italic'}`}>{subtext}</p>
  </motion.div>
);

const BenefitItem = ({ text }) => (
  <div className="flex items-center space-x-3">
    <FaCheckCircle className="text-orange-500 text-sm" />
    <span className="text-xs font-black uppercase tracking-widest text-slate-300">{text}</span>
  </div>
);

export default LumpsumCalculator;
