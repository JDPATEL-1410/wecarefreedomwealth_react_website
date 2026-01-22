import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaInfoCircle,
  FaLightbulb,
  FaCalculator,
  FaArrowRight,
  FaBalanceScale,
  FaShieldAlt,
  FaTrophy,
  FaCheckCircle
} from 'react-icons/fa';
import { Doughnut } from 'react-chartjs-2';
import SliderInput from '../../components/SliderInput';
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Title, Tooltip, Legend);

const TaxCalculator = () => {
  const [annualIncome, setAnnualIncome] = useState(1200000);
  const [deductions, setDeductions] = useState(150000);
  const [regime, setRegime] = useState('old');
  const [currency] = useState('INR');

  const currencySymbols = { INR: '₹', USD: '$', EUR: '€' };

  const calculateTax = () => {
    const taxableIncome = annualIncome - (regime === 'old' ? deductions : 0);
    let tax = 0;

    if (regime === 'old') {
      if (taxableIncome <= 250000) tax = 0;
      else if (taxableIncome <= 500000) tax = (taxableIncome - 250000) * 0.05;
      else if (taxableIncome <= 1000000) tax = 12500 + (taxableIncome - 500000) * 0.20;
      else tax = 112500 + (taxableIncome - 1000000) * 0.30;
    } else {
      if (taxableIncome <= 300000) tax = 0;
      else if (taxableIncome <= 600000) tax = (taxableIncome - 300000) * 0.05;
      else if (taxableIncome <= 900000) tax = 15000 + (taxableIncome - 600000) * 0.10;
      else if (taxableIncome <= 1200000) tax = 45000 + (taxableIncome - 900000) * 0.15;
      else if (taxableIncome <= 1500000) tax = 90000 + (taxableIncome - 1200000) * 0.20;
      else tax = 150000 + (taxableIncome - 1500000) * 0.30;
    }

    const cess = tax * 0.04;
    const totalTax = tax + cess;
    const netIncome = annualIncome - totalTax;
    const effectiveRate = (totalTax / annualIncome) * 100;

    return {
      taxableIncome: Math.round(taxableIncome),
      tax: Math.round(tax),
      cess: Math.round(cess),
      totalTax: Math.round(totalTax),
      netIncome: Math.round(netIncome),
      effectiveRate: effectiveRate.toFixed(2)
    };
  };

  const results = calculateTax();

  const doughnutData = {
    labels: ['Net Liquidity', 'Tax Exposure'],
    datasets: [{
      data: [results.netIncome, results.totalTax],
      backgroundColor: ['#0f172a', '#f97316'],
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
              <FaBalanceScale className="text-orange-600 text-xs" />
              <span className="text-orange-900 font-bold text-[10px] uppercase tracking-[0.2em]">Fiscal Optimization</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8 uppercase tracking-tighter">
              Fiscal <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 font-black">Architecture.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto font-medium">
              Deconstruct your tax liability with clinical precision using advanced regime comparative modeling and surrender-value optimization.
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
                  Fiscal Directives
                </h2>
              </div>

              <div className="p-10 space-y-10">
                {/* Regime Switching */}
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Baseline Regime</p>
                  <div className="flex bg-slate-100 p-1.5 rounded-2xl">
                    <button onClick={() => setRegime('old')} className={`flex-1 py-3 px-4 rounded-xl text-[10px] font-black transition-all uppercase tracking-widest ${regime === 'old' ? 'bg-white text-slate-900 shadow-lg' : 'text-slate-500 hover:text-slate-700'}`}>Old Regime</button>
                    <button onClick={() => setRegime('new')} className={`flex-1 py-3 px-4 rounded-xl text-[10px] font-black transition-all uppercase tracking-widest ${regime === 'new' ? 'bg-white text-slate-900 shadow-lg' : 'text-slate-500 hover:text-slate-700'}`}>New Regime</button>
                  </div>
                </div>

                <SliderInput label="Gross Annual Yield" value={annualIncome} onChange={setAnnualIncome} min={300000} max={10000000} step={50000} unit={currencySymbols[currency]} />

                {regime === 'old' && (
                  <SliderInput label="Deduction Portfolio" value={deductions} onChange={setDeductions} min={0} max={500000} step={5000} unit={currencySymbols[currency]} />
                )}

                {/* Insight */}
                <div className="bg-orange-50 p-6 rounded-[2rem] border border-orange-100">
                  <div className="flex items-start">
                    <FaLightbulb className="text-orange-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-black text-slate-900 text-xs uppercase tracking-widest mb-1 italic">Tax Intelligence</h4>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        Strategically pivot between regimes based on your deduction depth. High-leverage investments in ELSS and Health Cover favor the Old Regime.
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
                icon={FaShieldAlt}
                label="Taxable Base"
                value={`${currencySymbols[currency]}${(results.taxableIncome / 100000).toFixed(1)}L`}
                subtext="After Deductions"
                color="text-slate-900"
              />
              <ResultCard
                icon={FaCalculator}
                label="Total Exposure"
                value={`${currencySymbols[currency]}${(results.totalTax / 100000).toFixed(2)}L`}
                subtext="Inclusive of Cess"
                color="text-orange-600"
              />
              <ResultCard
                icon={FaTrophy}
                label="Net Retained"
                value={`${currencySymbols[currency]}${(results.netIncome / 100000).toFixed(1)}L`}
                subtext="Capital Retained"
                color="text-white"
                featured
              />
            </div>

            {/* Distribution Chart */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-[4rem] shadow-xl p-10 border border-slate-100 text-center flex flex-col items-center">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-10 text-center w-full">Yield Partition</h3>
                <div className="h-64 flex items-center justify-center relative w-full">
                  <Doughnut data={doughnutData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }} />
                  <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Effective Rate</span>
                    <span className="text-2xl font-black text-orange-600">
                      {results.effectiveRate}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Protocol Block */}
              <div className="bg-slate-900 rounded-[4rem] shadow-2xl p-12 text-white relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/20 rounded-full blur-3xl"></div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-8 text-orange-500">Fiscal Protocol</h4>
                  <div className="space-y-6">
                    <BenefitItem text="Cross-Regime Calibration" />
                    <BenefitItem text="Tax-Alpha Accrual" />
                    <BenefitItem text="Asset-Linked Deductions" />
                  </div>
                </div>
                <div className="mt-12">
                  <button className="w-full py-4 bg-orange-600 hover:bg-white hover:text-orange-600 transition-all rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center shadow-xl shadow-orange-600/20">
                    Consult Tax Architect <FaArrowRight className="ml-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Ledger Breakdown */}
            <div className="bg-white rounded-[4rem] shadow-xl overflow-hidden border border-slate-100">
              <div className="bg-slate-900 px-10 py-6 text-white text-center">
                <h3 className="text-xl font-black uppercase tracking-widest">Fiscal Ledger</h3>
              </div>
              <div className="p-10 space-y-6">
                <LedgerRow label="Gross Annual Inflow" value={annualIncome} symbol={currencySymbols[currency]} />
                {regime === 'old' && <LedgerRow label="Exemptions & Deductions" value={deductions} symbol={currencySymbols[currency]} negative />}
                <LedgerRow label="Taxable Assessment Base" value={results.taxableIncome} symbol={currencySymbols[currency]} highlight />
                <LedgerRow label="Net Tax Component" value={results.tax} symbol={currencySymbols[currency]} borderTop />
                <LedgerRow label="Health & Education Cess (4%)" value={results.cess} symbol={currencySymbols[currency]} />
                <LedgerRow label="Total Fiscal Liability" value={results.totalTax} symbol={currencySymbols[currency]} featured />
              </div>
            </div>

            {/* Strategic Info */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                  <FaInfoCircle className="text-orange-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 mb-4 text-lg uppercase tracking-tight text-center md:text-left">Optimization Directives</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">Core benchmarks for enhancing your post-tax yield:</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-6 rounded-2xl">
                      <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest mb-2">Section 80C</p>
                      <p className="text-xs text-slate-600 font-bold leading-relaxed italic">Maximize the ₹1.5L limit with long-term assets like PPF or ELSS for dual benefit.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl">
                      <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest mb-2">Section 80D</p>
                      <p className="text-xs text-slate-600 font-bold leading-relaxed italic">Hedge health risks while eroding taxable base through premium exemptions.</p>
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
    <span className="text-xs font-black uppercase tracking-widest text-slate-300\">{text}</span>
  </div>
);

const LedgerRow = ({ label, value, symbol, negative, highlight, featured, borderTop }) => (
  <div className={`flex justify-between items-center py-4 ${borderTop ? 'border-t border-slate-100' : ''} ${highlight ? 'bg-slate-50 px-6 rounded-xl' : ''}`}>
    <span className={`text-xs font-black uppercase tracking-widest ${featured ? 'text-slate-900 text-sm' : 'text-slate-500'}`}>{label}</span>
    <span className={`text-lg font-black ${negative ? 'text-orange-600' : (featured ? 'text-orange-600 text-xl' : 'text-slate-900')} ${highlight ? 'text-blue-600' : ''}`}>
      {negative ? '-' : ''}{symbol}{value.toLocaleString()}
    </span>
  </div>
);

export default TaxCalculator;
