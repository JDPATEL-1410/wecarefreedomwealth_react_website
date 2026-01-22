import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaUmbrella,
  FaRupeeSign,
  FaUser,
  FaPercentage,
  FaChartLine,
  FaTrophy,
  FaInfoCircle,
  FaLightbulb,
  FaPiggyBank,
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

const RetirementCalculator = () => {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyExpense, setMonthlyExpense] = useState(50000);
  const [inflationRate, setInflationRate] = useState(6);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [currentSavings, setCurrentSavings] = useState(500000);
  const [currency, setCurrency] = useState('INR');

  const currencySymbols = { INR: '₹', USD: '$', EUR: '€' };

  const calculateRetirement = () => {
    const yearsToRetirement = retirementAge - currentAge;
    const yearsInRetirement = 25; // Assuming 25 years post-retirement
    const futureMonthlyExpense = monthlyExpense * Math.pow(1 + inflationRate / 100, yearsToRetirement);
    const futureYearlyExpense = futureMonthlyExpense * 12;

    let corpusNeeded = 0;
    for (let i = 0; i < yearsInRetirement; i++) {
      const yearExpense = futureYearlyExpense * Math.pow(1 + inflationRate / 100, i);
      const presentValue = yearExpense / Math.pow(1 + expectedReturn / 100, i);
      corpusNeeded += presentValue;
    }

    const futureValueOfSavings = currentSavings * Math.pow(1 + expectedReturn / 100, yearsToRetirement);
    const corpusGap = corpusNeeded - futureValueOfSavings;

    const monthlyRate = expectedReturn / 12 / 100;
    const months = yearsToRetirement * 12;
    const monthlySIP = corpusGap > 0 ? (corpusGap * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1) : 0;

    return {
      corpusNeeded: Math.round(corpusNeeded),
      futureValueOfSavings: Math.round(futureValueOfSavings),
      corpusGap: Math.round(Math.max(0, corpusGap)),
      monthlySIP: Math.round(monthlySIP),
      futureMonthlyExpense: Math.round(futureMonthlyExpense),
      yearsToRetirement,
      totalInvestment: Math.round(monthlySIP * months)
    };
  };

  const results = calculateRetirement();

  const generateYearWiseData = () => {
    const data = [];
    const monthlyRate = expectedReturn / 12 / 100;
    let savingsValue = currentSavings;
    let sipValue = 0;

    for (let year = 1; year <= results.yearsToRetirement; year++) {
      savingsValue = savingsValue * (1 + expectedReturn / 100);
      const months = year * 12;
      sipValue = results.monthlySIP > 0 ? results.monthlySIP * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate) : 0;
      const totalValue = savingsValue + sipValue;
      const invested = currentSavings + (results.monthlySIP * months);
      const returns = totalValue - invested;

      data.push({ year, invested: Math.round(invested), returns: Math.round(returns), value: Math.round(totalValue) });
    }
    return data;
  };

  const yearWiseData = generateYearWiseData();

  const lineChartData = {
    labels: Array.from({ length: results.yearsToRetirement + 1 }, (_, i) => `Year ${i}`),
    datasets: [
      {
        label: 'Corpus Accrual',
        data: [currentSavings, ...yearWiseData.map(d => d.value)],
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

  const lineChartOptions = {
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
          label: (context) => `Corpus: ${currencySymbols[currency]}${(context.parsed.y / 10000000).toFixed(2)}Cr`
        }
      }
    },
    scales: {
      y: {
        grid: { color: 'rgba(0,0,0,0.05)' },
        ticks: {
          callback: (value) => `${currencySymbols[currency]}${(value / 10000000).toFixed(1)}Cr`,
          font: { size: 11, weight: '600' }
        }
      },
      x: { grid: { display: false }, ticks: { font: { size: 11, weight: '600' } } }
    }
  };

  const doughnutData = {
    labels: ['Legacy Assets', 'Strategic Allocation', 'Compound Growth'],
    datasets: [{
      data: [currentSavings, results.totalInvestment, results.corpusGap > 0 ? results.corpusNeeded - currentSavings - results.totalInvestment : 0],
      backgroundColor: ['#0f172a', '#f97316', '#fbbf24'],
      borderColor: ['#fff', '#fff', '#fff'],
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
              <FaUmbrella className="text-orange-600 text-xs" />
              <span className="text-orange-900 font-bold text-[10px] uppercase tracking-[0.2em]">Legacy Architecture</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8 uppercase tracking-tighter">
              Golden <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 font-black">
                Horizon.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto font-medium">
              Engineer your independence with actuarial precision and clinical corpus modeling for a life of institutional freedom.
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
                  <FaUser className="mr-3 text-orange-500" />
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

                <div className="grid grid-cols-2 gap-6">
                  <SliderInput
                    label="Current Age"
                    value={currentAge}
                    onChange={setCurrentAge}
                    min={20}
                    max={60}
                    step={1}
                  />
                  <SliderInput
                    label="Retirement"
                    value={retirementAge}
                    onChange={setRetirementAge}
                    min={45}
                    max={70}
                    step={1}
                  />
                </div>

                <SliderInput
                  label="Monthly Lifestyle Cost"
                  value={monthlyExpense}
                  onChange={setMonthlyExpense}
                  min={10000}
                  max={500000}
                  step={5000}
                  unit={currencySymbols[currency]}
                />

                <SliderInput
                  label="Inflation Hedge (%)"
                  value={inflationRate}
                  onChange={setInflationRate}
                  min={3}
                  max={15}
                  step={0.5}
                />

                <SliderInput
                  label="Current Liquidity"
                  value={currentSavings}
                  onChange={setCurrentSavings}
                  min={0}
                  max={10000000}
                  step={100000}
                  unit={currencySymbols[currency]}
                />

                {/* Legacy Insight */}
                <div className="bg-orange-50 p-6 rounded-[2rem] border border-orange-100">
                  <div className="flex items-start">
                    <FaLightbulb className="text-orange-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-black text-slate-900 text-xs uppercase tracking-widest mb-1 italic">Compounding Alpha</h4>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        Time is your most critical leverage. A 5-year delay in capital deployment can double your required servicing cost.
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
                label="Target Corpus"
                value={`${currencySymbols[currency]}${(results.corpusNeeded / 10000000).toFixed(2)}Cr`}
                subtext="Capital Requirement"
                color="text-slate-900"
              />
              <ResultCard
                icon={FaChartLine}
                label="Growth Factor"
                value={`${currencySymbols[currency]}${((results.corpusNeeded - currentSavings - results.totalInvestment) / 10000000).toFixed(2)}Cr`}
                subtext="Projected Appreciation"
                color="text-orange-600"
              />
              <ResultCard
                icon={FaTrophy}
                label="Servicing SIP"
                value={`${currencySymbols[currency]}${(results.monthlySIP / 1000).toFixed(1)}K`}
                subtext="Monthly Deployment"
                color="text-white"
                featured
              />
            </div>

            {/* Growth Curve */}
            <div className="bg-white rounded-[4rem] shadow-xl p-10 border border-slate-100">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Accrual Trajectory</h3>
              </div>
              <div className="h-96">
                <Line data={lineChartData} options={lineChartOptions} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-[4rem] shadow-xl p-10 border border-slate-100">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-10 text-center">Capital Origin</h3>
                <div className="h-64 flex items-center justify-center relative">
                  <Doughnut data={doughnutData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }} />
                  <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Yield Contribution</span>
                    <span className="text-2xl font-black text-slate-900">
                      {((results.corpusGap > 0 ? results.corpusNeeded - currentSavings - results.totalInvestment : 0) / results.corpusNeeded * 100).toFixed(0)}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Block */}
              <div className="bg-slate-900 rounded-[4rem] shadow-2xl p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/20 rounded-full blur-3xl"></div>
                <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-8 text-orange-500">Security Protocol</h4>
                <div className="space-y-6">
                  <BenefitItem text="Inflation Hedged" />
                  <BenefitItem text="Longevity Verified" />
                  <BenefitItem text="Asset Rebalancing" />
                </div>
                <div className="mt-12 pt-8 border-t border-white/10">
                  <button className="w-full py-4 bg-orange-600 hover:bg-white hover:text-orange-600 transition-all rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center">
                    Consult Architect <FaArrowRight className="ml-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Yearly Table Block */}
            <div className="bg-white rounded-[4rem] shadow-xl overflow-hidden border border-slate-100">
              <div className="bg-slate-900 px-8 py-6 text-white text-center">
                <h3 className="text-xs font-black uppercase tracking-[0.3em]">Yearly Amortization</h3>
              </div>
              <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
                <table className="w-full text-left">
                  <thead className="sticky top-0 bg-slate-50 z-10">
                    <tr>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Year</th>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Target Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {yearWiseData.map((row) => (
                      <tr key={row.year} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 text-xs font-black text-slate-900 uppercase">Y{row.year}</td>
                        <td className="px-6 py-4 text-xs font-bold text-slate-600 text-right">
                          {currencySymbols[currency]}{(row.value / 10000000).toFixed(2)}Cr
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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

export default RetirementCalculator;
