import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaPiggyBank,
  FaChartLine,
  FaTrophy,
  FaLightbulb,
  FaExchangeAlt,
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

const STPCalculator = () => {
  const [totalInvestment, setTotalInvestment] = useState(1000000);
  const [monthlyTransfer, setMonthlyTransfer] = useState(10000);
  const [sourceReturn, setSourceReturn] = useState(6);
  const [targetReturn, setTargetReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);
  const [currency, setCurrency] = useState('INR');

  const currencySymbols = { INR: '₹', USD: '$', EUR: '€' };

  const calculateSTP = () => {
    const sourceMonthlyRate = sourceReturn / 12 / 100;
    const targetMonthlyRate = targetReturn / 12 / 100;
    const months = timePeriod * 12;
    let sourceBalance = totalInvestment;
    let targetBalance = 0;
    let totalTransferred = 0;

    for (let i = 0; i < months; i++) {
      const sourceReturns = sourceBalance * sourceMonthlyRate;
      sourceBalance = sourceBalance + sourceReturns - monthlyTransfer;

      const targetReturns = targetBalance * targetMonthlyRate;
      targetBalance = targetBalance + targetReturns + monthlyTransfer;
      totalTransferred += monthlyTransfer;

      if (sourceBalance <= 0) break;
    }

    return {
      finalSourceValue: Math.max(0, Math.round(sourceBalance)),
      finalTargetValue: Math.round(targetBalance),
      totalTransferred: Math.round(totalTransferred),
      totalValue: Math.round(Math.max(0, sourceBalance) + targetBalance)
    };
  };

  const results = calculateSTP();

  const generateYearWiseData = () => {
    const data = [];
    const sourceMonthlyRate = sourceReturn / 12 / 100;
    const targetMonthlyRate = targetReturn / 12 / 100;
    let sourceBalance = totalInvestment;
    let targetBalance = 0;

    for (let year = 1; year <= timePeriod; year++) {
      let yearlyTransfer = 0;
      for (let month = 1; month <= 12; month++) {
        const sourceReturns = sourceBalance * sourceMonthlyRate;
        sourceBalance = sourceBalance + sourceReturns - monthlyTransfer;

        const targetReturns = targetBalance * targetMonthlyRate;
        targetBalance = targetBalance + targetReturns + monthlyTransfer;
        yearlyTransfer += monthlyTransfer;

        if (sourceBalance <= 0) { sourceBalance = 0; break; }
      }
      data.push({
        year,
        transferred: Math.round(yearlyTransfer),
        sourceBalance: Math.round(Math.max(0, sourceBalance)),
        targetBalance: Math.round(targetBalance)
      });
      if (sourceBalance <= 0) break;
    }
    return data;
  };

  const yearWiseData = generateYearWiseData();

  const lineChartData = {
    labels: Array.from({ length: timePeriod + 1 }, (_, i) => `Year ${i}`),
    datasets: [
      {
        label: 'Source Fund',
        data: [totalInvestment, ...yearWiseData.map(d => d.sourceBalance)],
        borderColor: 'rgb(234, 179, 8)',
        backgroundColor: 'rgba(234, 179, 8, 0.05)',
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: 'rgb(234, 179, 8)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2
      },
      {
        label: 'Target Fund',
        data: [0, ...yearWiseData.map(d => d.targetBalance)],
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.05)',
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: 'rgb(34, 197, 94)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2
      }
    ]
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: 'top', align: 'end', labels: { usePointStyle: true, font: { size: 10, weight: 'black' } } },
      tooltip: {
        backgroundColor: '#0f172a',
        padding: 12,
        titleFont: { size: 14, weight: 'bold' },
        bodyFont: { size: 13 },
        callbacks: {
          label: (context) => `${context.dataset.label}: ${currencySymbols[currency]}${context.parsed.y.toLocaleString()}`
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

  const doughnutData = {
    labels: ['Liquid Reserve', 'Target Equity'],
    datasets: [{
      data: [results.finalSourceValue, results.finalTargetValue],
      backgroundColor: ['#fbbf24', '#10b981'],
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
              <FaExchangeAlt className="text-orange-600 text-xs" />
              <span className="text-orange-900 font-bold text-[10px] uppercase tracking-[0.2em]">Liquid Allocation</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8 uppercase tracking-tighter">
              Transfer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 font-black">
                Velocity.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto font-medium">
              Optimize your systematic transition from debt to equity with clinical Rupee-cost averaging models.
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
            <div className="bg-white rounded-[3rem] shadow-xl border border-slate-100 sticky top-24 overflow-hidden">
              <div className="bg-slate-900 px-8 py-6 text-white">
                <h2 className="text-lg font-black uppercase tracking-widest flex items-center">
                  <FaCalculator className="mr-3 text-orange-500" />
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
                  label="Initial Corpus"
                  value={totalInvestment}
                  onChange={setTotalInvestment}
                  min={100000}
                  max={10000000}
                  step={100000}
                  unit={currencySymbols[currency]}
                />

                <SliderInput
                  label="Monthly Transition"
                  value={monthlyTransfer}
                  onChange={setMonthlyTransfer}
                  min={5000}
                  max={200000}
                  step={5000}
                  unit={currencySymbols[currency]}
                />

                <div className="grid grid-cols-2 gap-6">
                  <SliderInput
                    label="Source Yield"
                    value={sourceReturn}
                    onChange={setSourceReturn}
                    min={1}
                    max={15}
                    step={0.5}
                  />
                  <SliderInput
                    label="Target Yield"
                    value={targetReturn}
                    onChange={setTargetReturn}
                    min={1}
                    max={20}
                    step={0.5}
                  />
                </div>

                <SliderInput
                  label="Horizon (Years)"
                  value={timePeriod}
                  onChange={setTimePeriod}
                  min={1}
                  max={30}
                  step={1}
                />

                {/* Transition Insight */}
                <div className="bg-orange-50 p-6 rounded-[2rem] border border-orange-100">
                  <div className="flex items-start">
                    <FaLightbulb className="text-orange-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-black text-slate-900 text-xs uppercase tracking-widest mb-1 italic">Transition Alpha</h4>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        STP captures Rupee-cost averaging while keeping capital productive in liquid instruments.
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
                icon={FaPiggyBank}
                label="Residual Source"
                value={`${currencySymbols[currency]}${(results.finalSourceValue / 100000).toFixed(2)}L`}
                subtext="Remaining Liquid"
                color="text-slate-900"
              />
              <ResultCard
                icon={FaChartLine}
                label="Accumulated Target"
                value={`${currencySymbols[currency]}${(results.finalTargetValue / 100000).toFixed(2)}L`}
                subtext="Total Equity Exposure"
                color="text-orange-600"
              />
              <ResultCard
                icon={FaTrophy}
                label="Aggregate Value"
                value={`${currencySymbols[currency]}${(results.totalValue / 100000).toFixed(2)}L`}
                subtext="Portfolio Terminal"
                color="text-white"
                featured
              />
            </div>

            {/* Transition Curve */}
            <div className="bg-white rounded-[4rem] shadow-xl p-10 border border-slate-100">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Portfolio Rebalancing</h3>
              </div>
              <div className="h-96">
                <Line data={lineChartData} options={lineChartOptions} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-[4rem] shadow-xl p-10 border border-slate-100 text-center">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-10">Asset Dispersion</h3>
                <div className="h-64 flex items-center justify-center relative">
                  <Doughnut data={doughnutData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }} />
                  <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Equity Weight</span>
                    <span className="text-2xl font-black text-slate-900">
                      {((results.finalTargetValue / results.totalValue) * 100).toFixed(0)}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Table Block */}
              <div className="bg-white rounded-[4rem] shadow-xl overflow-hidden border border-slate-100">
                <div className="bg-slate-900 px-8 py-6 text-white text-center">
                  <h3 className="text-xs font-black uppercase tracking-[0.3em]">Transition Schedule</h3>
                </div>
                <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
                  <table className="w-full text-left font-black">
                    <thead className="sticky top-0 bg-slate-50 z-10">
                      <tr>
                        <th className="px-6 py-4 text-[10px] text-slate-400 uppercase tracking-widest">Year</th>
                        <th className="px-6 py-4 text-[10px] text-slate-400 uppercase tracking-widest text-right">Target</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {yearWiseData.map((row) => (
                        <tr key={row.year} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 text-xs text-slate-900 uppercase">Y{row.year}</td>
                          <td className="px-6 py-4 text-xs text-slate-600 text-right">
                            {currencySymbols[currency]}{(row.targetBalance / 100000).toFixed(2)}L
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Protocol Awareness Block */}
            <div className="bg-slate-900 rounded-[4rem] shadow-2xl p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/20 rounded-full blur-3xl"></div>
              <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-8 text-orange-500">Systematic Architecture</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <BenefitItem text="Averaging Verified" />
                  <BenefitItem text="Liquid Yield Protected" />
                  <BenefitItem text="Volatility Mitigated" />
                </div>
                <div className="flex flex-col justify-end">
                  <button className="w-full py-4 bg-orange-600 hover:bg-white hover:text-orange-600 transition-all rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center shadow-xl shadow-orange-600/20">
                    Speak to Architect <FaArrowRight className="ml-3" />
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

export default STPCalculator;
