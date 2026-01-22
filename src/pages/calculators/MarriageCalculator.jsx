import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaPercentage,
  FaChartLine,
  FaTrophy,
  FaLightbulb,
  FaRing,
  FaArrowRight,
  FaCheckCircle,
  FaGlassCheers,
  FaCalculator,
  FaShieldAlt
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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend, Filler);

const MarriageCalculator = () => {
  const [currentCost, setCurrentCost] = useState(1000000);
  const [childAge, setChildAge] = useState(10);
  const [marriageAge, setMarriageAge] = useState(25);
  const [inflationRate, setInflationRate] = useState(8);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [currentSavings, setCurrentSavings] = useState(100000);
  const [currency, setCurrency] = useState('INR');

  const currencySymbols = { INR: '₹', USD: '$', EUR: '€' };

  const calculateMarriage = () => {
    const yearsToMarriage = Math.max(0, marriageAge - childAge);
    const futureCost = currentCost * Math.pow(1 + inflationRate / 100, yearsToMarriage);
    const futureValueOfSavings = currentSavings * Math.pow(1 + expectedReturn / 100, yearsToMarriage);
    const corpusGap = Math.max(0, futureCost - futureValueOfSavings);

    const monthlyRate = expectedReturn / 12 / 100;
    const months = yearsToMarriage * 12;
    const monthlySIP = (corpusGap > 0 && months > 0) ? (corpusGap * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1) : 0;
    const totalInvestment = monthlySIP * months;

    return {
      futureCost: Math.round(futureCost),
      futureValueOfSavings: Math.round(futureValueOfSavings),
      corpusGap: Math.round(corpusGap),
      monthlySIP: Math.round(monthlySIP),
      totalInvestment: Math.round(totalInvestment),
      yearsToMarriage
    };
  };

  const results = calculateMarriage();

  const generateYearWiseData = () => {
    const data = [];
    const monthlyRate = expectedReturn / 12 / 100;
    let savingsValue = currentSavings;
    let sipValue = 0;

    for (let year = 1; year <= results.yearsToMarriage; year++) {
      savingsValue = savingsValue * (1 + expectedReturn / 100);
      const months = year * 12;
      sipValue = results.monthlySIP > 0 ? results.monthlySIP * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate) : 0;
      const totalValue = savingsValue + sipValue;
      const invested = currentSavings + (results.monthlySIP * months);
      const returns = totalValue - invested;

      data.push({
        year,
        invested: Math.round(invested),
        returns: Math.round(returns),
        value: Math.round(totalValue)
      });
    }
    return data;
  };

  const yearWiseData = generateYearWiseData();

  const lineChartData = {
    labels: Array.from({ length: results.yearsToMarriage + 1 }, (_, i) => `Y ${i}`),
    datasets: [
      {
        label: 'Accrued Corpus',
        data: [currentSavings, ...yearWiseData.map(d => d.value)],
        borderColor: 'rgb(249, 115, 22)',
        backgroundColor: 'rgba(249, 115, 22, 0.05)',
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: '#f97316'
      },
      {
        label: 'Inflation-Adjusted Target',
        data: Array(results.yearsToMarriage + 1).fill(results.futureCost),
        borderColor: 'rgba(15, 23, 42, 0.3)',
        borderDash: [5, 5],
        fill: false,
        pointRadius: 0
      }
    ]
  };

  const doughnutData = {
    labels: ['Seed Capital', 'Incremental Accrual', 'Yield Weight'],
    datasets: [{
      data: [currentSavings, results.totalInvestment, results.corpusGap > 0 ? results.futureCost - currentSavings - results.totalInvestment : 0],
      backgroundColor: ['#0f172a', '#f97316', '#fbbf24'],
      borderColor: '#fff',
      borderWidth: 4,
      hoverOffset: 12
    }]
  };

  return (
    <div className="bg-[#f8fafc]">
      {/* Cinematic Header */}
      <section
        className="relative h-[55vh] flex items-center overflow-hidden pt-16"
        style={{ backgroundImage: 'linear-gradient(135deg, #ffe5bd 0%, #fffdf7 35%, #c7f1ff 100%)' }}
      >
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8)_0%,_transparent_100%)]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center space-x-3 bg-white/60 backdrop-blur-md border border-white/40 px-4 py-2 rounded-full mb-8">
              <FaRing className="text-orange-600 text-xs" />
              <span className="text-orange-900 font-bold text-[10px] uppercase tracking-[0.2em]">Legacy Planning</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8 uppercase tracking-tighter">
              Nuptial <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 font-black">Capital.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto font-medium">
              Engineer the financial architecture for a significant life milestone with clinical corpus modeling and long-term yield optimization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Parameters */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-4">
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
                      <button key={curr} onClick={() => setCurrency(curr)} className={`flex-1 py-3 px-4 rounded-xl text-xs font-black transition-all ${currency === curr ? 'bg-white text-slate-900 shadow-lg' : 'text-slate-500 hover:text-slate-700'}`}>
                        {curr}
                      </button>
                    ))}
                  </div>
                </div>

                <SliderInput label="Present-Day Value" value={currentCost} onChange={setCurrentCost} min={100000} max={10000000} step={50000} unit={currencySymbols[currency]} />

                <div className="grid grid-cols-2 gap-6">
                  <SliderInput label="Current Age" value={childAge} onChange={setChildAge} min={0} max={18} hideSlider />
                  <SliderInput label="Target Age" value={marriageAge} onChange={setMarriageAge} min={18} max={40} hideSlider />
                </div>

                <SliderInput label="Initial Seed Capital" value={currentSavings} onChange={setCurrentSavings} min={0} max={5000000} step={50000} unit={currencySymbols[currency]} />

                <div className="grid grid-cols-2 gap-6">
                  <SliderInput label="Inflation (%)" value={inflationRate} onChange={setInflationRate} min={3} max={15} step={0.5} hideSlider />
                  <SliderInput label="Expected Yield (%)" value={expectedReturn} onChange={setExpectedReturn} min={8} max={20} step={0.5} hideSlider />
                </div>

                {/* Insight */}
                <div className="bg-orange-50 p-6 rounded-[2rem] border border-orange-100">
                  <div className="flex items-start">
                    <FaLightbulb className="text-orange-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-black text-slate-900 text-xs uppercase tracking-widest mb-1 italic">Compounding Alpha</h4>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        Even a 2-year early start can reduce your required monthly commitment by up to 25% due to exponential yield accrual.
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
                icon={FaRing}
                label="Projected Corpus"
                value={`${currencySymbols[currency]}${(results.futureCost / 100000).toFixed(1)}L`}
                subtext="Inflation-Adjusted"
                color="text-slate-900"
              />
              <ResultCard
                icon={FaChartLine}
                label="Yield Required"
                value={`${currencySymbols[currency]}${((results.futureCost - currentSavings - results.totalInvestment) / 100000).toFixed(1)}L`}
                subtext="Expected Gains"
                color="text-orange-600"
              />
              <ResultCard
                icon={FaTrophy}
                label="Monthly SIP"
                value={`${currencySymbols[currency]}${(results.monthlySIP / 1000).toFixed(1)}K`}
                subtext="Capital Required"
                color="text-white"
                featured
              />
            </div>

            {/* Accrual Chart */}
            <div className="bg-white rounded-[4rem] shadow-xl p-10 border border-slate-100">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Accrual Projection</h3>
              </div>
              <div className="h-96">
                <Line data={lineChartData} options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: { display: false },
                    tooltip: {
                      backgroundColor: '#0f172a',
                      padding: 12,
                      callbacks: {
                        label: (context) => `Value: ${currencySymbols[currency]}${(context.parsed.y / 100000).toFixed(1)}L`
                      }
                    }
                  },
                  scales: {
                    y: { ticks: { callback: (v) => `${(v / 100000).toFixed(0)}L` }, grid: { color: 'rgba(0,0,0,0.05)' } },
                    x: { grid: { display: false } }
                  }
                }} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-[4rem] shadow-xl p-10 border border-slate-100 text-center">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-10 text-center">Capital Origin</h3>
                <div className="h-64 flex items-center justify-center relative">
                  <Doughnut data={doughnutData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }} />
                  <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Yield Weight</span>
                    <span className="text-2xl font-black text-orange-600">
                      {results.futureCost > 0 ? (((results.futureCost - currentSavings - results.totalInvestment) / results.futureCost) * 100).toFixed(0) : 0}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Protocol Block */}
              <div className="bg-slate-900 rounded-[4rem] shadow-2xl p-12 text-white relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/20 rounded-full blur-3xl"></div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-8 text-orange-500">Nuptial Protocol</h4>
                  <div className="space-y-6">
                    <BenefitItem text="Inflation-Hedged Target" />
                    <BenefitItem text="Tax-Efficient Corpus" />
                    <BenefitItem text="Dynamic Asset Rebalancing" />
                  </div>
                </div>
                <div className="mt-12">
                  <button className="w-full py-4 bg-orange-600 hover:bg-white hover:text-orange-600 transition-all rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center shadow-xl shadow-orange-600/20">
                    Speak to Legacy Architect <FaArrowRight className="ml-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Strategic Info */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                  <FaGlassCheers className="text-orange-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 mb-4 text-lg uppercase tracking-tight text-center md:text-left">Strategic Planning Directives</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">Fundamental principles for architecting a significant life milestone:</p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-slate-50 p-6 rounded-2xl text-center">
                      <FaRing className="text-orange-500 mx-auto mb-3" />
                      <h5 className="text-[10px] font-black uppercase tracking-widest mb-1 text-slate-900">Start Early</h5>
                      <p className="text-[10px] text-slate-500 font-bold italic">Max Compounding</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl text-center">
                      <FaPercentage className="text-orange-500 mx-auto mb-3" />
                      <h5 className="text-[10px] font-black uppercase tracking-widest mb-1 text-slate-900">Adjust Inflation</h5>
                      <p className="text-[10px] text-slate-500 font-bold italic">Lifestyle Buffer</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl text-center">
                      <FaShieldAlt className="text-orange-500 mx-auto mb-3" />
                      <h5 className="text-[10px] font-black uppercase tracking-widest mb-1 text-slate-900">Hedging</h5>
                      <p className="text-[10px] text-slate-500 font-bold italic">Downside Protection</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResultCard = ({ icon: Icon, label, value, subtext, color, featured }) => (
  <motion.div whileHover={{ y: -5 }} className={`${featured ? 'bg-slate-900 text-white shadow-2xl shadow-slate-900/40' : 'bg-white text-slate-900 border border-slate-100 shadow-xl'} rounded-[3rem] p-8 transition-all`}>
    <div className={`w-12 h-12 ${featured ? 'bg-orange-600' : 'bg-slate-50'} rounded-2xl flex items-center justify-center mb-6`}>
      <Icon className={featured ? 'text-white' : 'text-orange-600'} />
    </div>
    <p className={`text-[10px] font-black uppercase tracking-[0.2em] mb-2 text-slate-400`}>{label}</p>
    <p className={`text-2xl font-black mb-1 ${color}`}>{value}</p>
    <p className={`text-[10px] font-bold ${featured ? 'text-orange-500/80' : 'text-slate-400 italic'}`}>{subtext}</p>
  </motion.div>
);

const BenefitItem = ({ text }) => (
  <div className="flex items-center space-x-3">
    <FaCheckCircle className="text-orange-500 text-sm" />
    <span className="text-xs font-black uppercase tracking-widest text-slate-300">{text}</span>
  </div>
);

export default MarriageCalculator;
