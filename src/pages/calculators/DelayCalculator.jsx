import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaHourglassHalf,
  FaRupeeSign,
  FaCalendarAlt,
  FaPercentage,
  FaChartLine,
  FaTrophy,
  FaInfoCircle,
  FaLightbulb,
  FaClock,
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

const DelayCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(20);
  const [delayYears, setDelayYears] = useState(2);
  const [currency, setCurrency] = useState('INR');

  const currencySymbols = { INR: '₹', USD: '$', EUR: '€' };

  const calculateDelay = () => {
    const monthlyRate = expectedReturn / 12 / 100;

    // Scenario 1: Investment Now
    const totalMonthsNow = timePeriod * 12;
    const futureValueNow = monthlyInvestment *
      ((Math.pow(1 + monthlyRate, totalMonthsNow) - 1) / monthlyRate) *
      (1 + monthlyRate);

    // Scenario 2: Investment After Delay
    const totalMonthsDelay = (timePeriod - delayYears) * 12;
    const futureValueDelay = totalMonthsDelay > 0 ? monthlyInvestment *
      ((Math.pow(1 + monthlyRate, totalMonthsDelay) - 1) / monthlyRate) *
      (1 + monthlyRate) : 0;

    const lossOfWealth = futureValueNow - futureValueDelay;
    const totalInvestedNow = monthlyInvestment * totalMonthsNow;
    const totalInvestedDelay = monthlyInvestment * Math.max(0, totalMonthsDelay);

    return {
      futureValueNow: Math.round(futureValueNow),
      futureValueDelay: Math.round(futureValueDelay),
      lossOfWealth: Math.round(lossOfWealth),
      totalInvestedNow: Math.round(totalInvestedNow),
      totalInvestedDelay: Math.round(totalInvestedDelay),
      delayMonths: delayYears * 12
    };
  };

  const results = calculateDelay();

  const lineChartData = {
    labels: Array.from({ length: timePeriod + 1 }, (_, i) => `Year ${i}`),
    datasets: [
      {
        label: 'Immediate Start',
        data: Array.from({ length: timePeriod + 1 }, (_, i) => {
          const months = i * 12;
          const monthlyRate = expectedReturn / 12 / 100;
          return months === 0 ? 0 : Math.round(monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
        }),
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.05)',
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: 'rgb(34, 197, 94)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2
      },
      {
        label: `Delayed by ${delayYears}Y`,
        data: Array.from({ length: timePeriod + 1 }, (_, i) => {
          const months = Math.max(0, (i - delayYears) * 12);
          const monthlyRate = expectedReturn / 12 / 100;
          if (i < delayYears) return 0;
          return Math.round(monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
        }),
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.05)',
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: 'rgb(239, 68, 68)',
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
          label: (context) => `${context.dataset.label}: ${currencySymbols[currency]}${(context.parsed.y / 100000).toFixed(2)}L`
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
    labels: ['Realized Wealth', 'Opportunity Loss'],
    datasets: [{
      data: [results.futureValueDelay, results.lossOfWealth],
      backgroundColor: ['#10b981', '#ef4444'],
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
              <FaClock className="text-orange-600 text-xs" />
              <span className="text-orange-900 font-bold text-[10px] uppercase tracking-[0.2em]">Opportunity Risk</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8 uppercase tracking-tighter">
              Cost of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 font-black">
                Inertia.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto font-medium">
              Deconstruct the true financial impact of procrastination with clinical precision and compound loss modeling.
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
                  label="Monthly Commitment"
                  value={monthlyInvestment}
                  onChange={setMonthlyInvestment}
                  min={1000}
                  max={500000}
                  step={1000}
                  unit={currencySymbols[currency]}
                />

                <SliderInput
                  label="Inertia Period (Years)"
                  value={delayYears}
                  onChange={setDelayYears}
                  min={1}
                  max={10}
                  step={1}
                />

                <SliderInput
                  label="Target Yield (%)"
                  value={expectedReturn}
                  onChange={setExpectedReturn}
                  min={1}
                  max={25}
                  step={0.5}
                />

                <SliderInput
                  label="Horizon (Years)"
                  value={timePeriod}
                  onChange={setTimePeriod}
                  min={5}
                  max={40}
                  step={1}
                />

                {/* Warning Insight */}
                <div className="bg-red-50 p-6 rounded-[2rem] border border-red-100">
                  <div className="flex items-start">
                    <FaLightbulb className="text-red-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-black text-slate-900 text-xs uppercase tracking-widest mb-1 italic">Compounding Penalty</h4>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        Delaying by just {delayYears} years could erode your terminal wealth by {((results.lossOfWealth / results.futureValueNow) * 100).toFixed(0)}%.
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
                icon={FaTrophy}
                label="Maximum Potential"
                value={`${currencySymbols[currency]}${(results.futureValueNow / 100000).toFixed(1)}L`}
                subtext="Immediate Execution"
                color="text-slate-900"
              />
              <ResultCard
                icon={FaHourglassHalf}
                label="Diminished Wealth"
                value={`${currencySymbols[currency]}${(results.futureValueDelay / 100000).toFixed(1)}L`}
                subtext={`Start after ${delayYears}Y`}
                color="text-orange-600"
              />
              <ResultCard
                icon={FaHourglassHalf}
                label="Inertia Penalty"
                value={`${currencySymbols[currency]}${(results.lossOfWealth / 100000).toFixed(1)}L`}
                subtext="Opportunity Loss"
                color="text-red-600"
                featured
              />
            </div>

            {/* Comparison Curve */}
            <div className="bg-white rounded-[4rem] shadow-xl p-10 border border-slate-100">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Wealth Erosion Modeling</h3>
              </div>
              <div className="h-96">
                <Line data={lineChartData} options={lineChartOptions} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-[4rem] shadow-xl p-10 border border-slate-100 text-center">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-10">Wealth Retention</h3>
                <div className="h-64 flex items-center justify-center relative">
                  <Doughnut data={doughnutData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }} />
                  <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Erosion Factor</span>
                    <span className="text-2xl font-black text-red-600">
                      {((results.lossOfWealth / results.futureValueNow) * 100).toFixed(0)}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Protocol Awareness Block */}
              <div className="bg-slate-900 rounded-[4rem] shadow-2xl p-12 text-white relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/20 rounded-full blur-3xl"></div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-8 text-orange-500">Action Protocol</h4>
                  <div className="space-y-6">
                    <BenefitItem text="Immediate Deployment" />
                    <BenefitItem text="Zero Inertia Efficiency" />
                    <BenefitItem text="Compounding Optimization" />
                  </div>
                </div>
                <div className="mt-12">
                  <button className="w-full py-4 bg-orange-600 hover:bg-white hover:text-orange-600 transition-all rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center shadow-xl shadow-orange-600/20">
                    Deploy Capital Now <FaArrowRight className="ml-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Strategic Information */}
            <div className="bg-white rounded-[4rem] shadow-xl p-10 border border-slate-100">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                  <FaInfoCircle className="text-orange-600" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 text-center md:text-left">The Price of Waiting</h4>
                  <p className="text-slate-600 font-medium leading-relaxed mb-6">
                    Compounding is back-heavy. The wealth generated in your final years often exceeds the total capital invested in previous decades. By delaying, you lose the most productive compounding years of your lifecycle.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Impact on SIP</span>
                      <span className="text-xs text-slate-700 font-bold">A 5-year delay can reduce terminal wealth by over 40% at high growth rates.</span>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Recovery Delta</span>
                      <span className="text-xs text-slate-700 font-bold">To recover the loss of a 2-year delay, you may need to increase your SIP by 25%.</span>
                    </div>
                  </div>
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

export default DelayCalculator;
