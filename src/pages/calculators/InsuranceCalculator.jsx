import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaShieldAlt,
  FaHeartbeat,
  FaArrowRight,
  FaCheckCircle,
  FaUmbrella,
  FaCalculator,
  FaLightbulb,
  FaInfoCircle
} from 'react-icons/fa';
import { Doughnut, Bar } from 'react-chartjs-2';
import SliderInput from '../../components/SliderInput';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend, Filler);

const InsuranceCalculator = () => {
  const [annualIncome, setAnnualIncome] = useState(1200000);
  const [annualExpenses, setAnnualExpenses] = useState(400000); // Personal expenses to deduct
  const [yearsToRetire, setYearsToRetire] = useState(25);
  const inflationRate = 6;
  const expectedReturn = 8;
  const [existingCover, setExistingCover] = useState(2000000);
  const [currency, setCurrency] = useState('INR');

  const currencySymbols = { INR: '₹', USD: '$', EUR: '€' };

  const calculateHLV = () => {
    // Basic HLV using Income Replacement Method
    const netAnnualContribution = annualIncome - annualExpenses;
    const realRate = ((1 + expectedReturn / 100) / (1 + inflationRate / 100)) - 1;

    // PV of growing annuity
    let hlv = 0;
    if (realRate === 0) {
      hlv = netAnnualContribution * yearsToRetire;
    } else {
      hlv = netAnnualContribution * (1 - Math.pow(1 + realRate, -yearsToRetire)) / realRate;
    }

    const coverageGap = Math.max(0, hlv - existingCover);

    return {
      hlv: Math.round(hlv),
      coverageGap: Math.round(coverageGap),
      existingCover,
      netAnnualContribution
    };
  };

  const results = calculateHLV();

  const chartData = {
    labels: ['Life Value (HLV)', 'Existing Protection', 'Shield Deficit'],
    datasets: [{
      label: 'Capital Architecture',
      data: [results.hlv, results.existingCover, results.coverageGap],
      backgroundColor: ['#0f172a', '#10b981', '#f97316'],
      borderRadius: 12,
      borderWidth: 0,
      barThickness: 40
    }]
  };

  const doughnutData = {
    labels: ['Protected Asset', 'Unhedged Risk'],
    datasets: [{
      data: [results.existingCover, results.coverageGap],
      backgroundColor: ['#10b981', '#f97316'],
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
              <FaShieldAlt className="text-orange-600 text-xs" />
              <span className="text-orange-900 font-bold text-[10px] uppercase tracking-[0.2em]">Risk Neutralization</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8 uppercase tracking-tighter">
              Capital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 font-black">Fortress.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto font-medium">
              Quantify your Human Life Value (HLV) with actuarial precision and architect a comprehensive protection protocol for your legacy.
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
                  Actuarial Inputs
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

                <SliderInput label="Gross Annual Income" value={annualIncome} onChange={setAnnualIncome} min={300000} max={20000000} step={100000} unit={currencySymbols[currency]} />

                <SliderInput label="Personal Consumption" value={annualExpenses} onChange={setAnnualExpenses} min={50000} max={5000000} step={50000} unit={currencySymbols[currency]} />

                <SliderInput label="Protection Horizon (Y)" value={yearsToRetire} onChange={setYearsToRetire} min={1} max={50} step={1} />

                <SliderInput label="Current Capital Buffer" value={existingCover} onChange={setExistingCover} min={0} max={50000000} step={500000} unit={currencySymbols[currency]} />

                {/* Insight */}
                <div className="bg-orange-50 p-6 rounded-[2rem] border border-orange-100">
                  <div className="flex items-start">
                    <FaLightbulb className="text-orange-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-black text-slate-900 text-xs uppercase tracking-widest mb-1 italic">Protection Alpha</h4>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        Human Life Value represents the present value of your future earnings. Any deficit in this value is an unhedged risk to your dependents' lifestyle.
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
                icon={FaHeartbeat}
                label="Intrinsic HLV"
                value={`${currencySymbols[currency]}${(results.hlv / 10000000).toFixed(1)}Cr`}
                subtext="Capitalized Value"
                color="text-slate-900"
              />
              <ResultCard
                icon={FaUmbrella}
                label="Shield Status"
                value={`${currencySymbols[currency]}${(results.existingCover / 100000).toFixed(0)}L`}
                subtext="Current Hedging"
                color="text-emerald-600"
              />
              <ResultCard
                icon={FaShieldAlt}
                label="Required Shield"
                value={`${currencySymbols[currency]}${(results.coverageGap / 100000).toFixed(0)}L`}
                subtext="Protection Delta"
                color="text-white"
                featured
              />
            </div>

            {/* Gap Analysis Chart */}
            <div className="bg-white rounded-[4rem] shadow-xl p-10 border border-slate-100">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Vulnerability Analysis</h3>
              </div>
              <div className="h-96">
                <Bar data={chartData} options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: { legend: { display: false } },
                  scales: {
                    y: { ticks: { callback: (v) => `${(v / 100000).toFixed(0)}L` }, grid: { display: false } },
                    x: { grid: { display: false } }
                  }
                }} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-[4rem] shadow-xl p-10 border border-slate-100 text-center">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-10 text-center">Hedge Efficiency</h3>
                <div className="h-64 flex items-center justify-center relative">
                  <Doughnut data={doughnutData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }} />
                  <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Risk Covered</span>
                    <span className="text-2xl font-black text-emerald-600">
                      {results.hlv > 0 ? ((results.existingCover / results.hlv) * 100).toFixed(0) : 100}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Protocol Block */}
              <div className="bg-slate-900 rounded-[4rem] shadow-2xl p-12 text-white relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/20 rounded-full blur-3xl"></div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-8 text-orange-500">Security Protocol</h4>
                  <div className="space-y-6">
                    <BenefitItem text="Liability Neutralization" />
                    <BenefitItem text="Income Replacement Delta" />
                    <BenefitItem text="Legacy corpus Preservation" />
                  </div>
                </div>
                <div className="mt-12">
                  <button className="w-full py-4 bg-orange-600 hover:bg-white hover:text-orange-600 transition-all rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center shadow-xl shadow-orange-600/20">
                    Speak to Risk Architect <FaArrowRight className="ml-3" />
                  </button>
                </div>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                  <FaInfoCircle className="text-orange-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 mb-4 text-lg uppercase tracking-tight text-center md:text-left">Strategic Risk Guidelines</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">Fundamental principles for architecting your financial safety net:</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-6 rounded-2xl">
                      <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest mb-2">Rule of Thumb</p>
                      <p className="text-xs text-slate-600 font-bold leading-relaxed italic">"Aim for at least 15-20x of your annual income as basic term life coverage."</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl">
                      <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest mb-2">Inflation Hedge</p>
                      <p className="text-xs text-slate-600 font-bold leading-relaxed italic">"Regularly augment your shield as your lifestyle and liabilities evolve."</p>
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

export default InsuranceCalculator;
