import React from 'react';

const SliderInput = ({ label, value, min, max, step = 1, onChange, prefix = "", suffix = "" }) => (
    <div className="space-y-4">
        <div className="flex justify-between items-center">
            <span className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">{label}</span>
            <span className="text-slate-900 font-black text-xl">{prefix}{value.toLocaleString('en-IN')}{suffix}</span>
        </div>
        <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-100 rounded-full appearance-none cursor-pointer accent-orange-500"
        />
    </div>
);

export default SliderInput;
