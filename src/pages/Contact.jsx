import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  FaWhatsapp,
  FaLinkedin, FaInstagram, FaYoutube, FaPaperPlane, FaFacebook,
  FaHeadset, FaGlobe, FaShieldAlt, FaArrowRight, FaHeadphones
} from 'react-icons/fa';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const officeLocations = [
    {
      city: "Anand HQ",
      address: "312 - 316, Krishna Shrey Complex, Raj Marg, Anand - 388001",
      phone: "+91 93772 77703",
      email: "info@wcfw.in",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d147.95806132827518!2d72.943892!3d22.5658472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4fd40a134a8d%3A0x9cec1ba95b807341!2sWe%20Care%20Freedom%20Wealth%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1697074456145!5m2!1sen!2sin",
    },
    {
      city: "Vadodara",
      address: "304-306, The Park, Above Nexa, Akshar Chowk, Vadodara - 390020",
      phone: "+91 98241 43812",
      email: "tushar@wcfw.in",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.2!2d73.1812!3d22.3072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE4JzI2LjAiTiA3M8KwMTAnNTIuMyJF!5e0!3m2!1sen!2sin!4v1696920000000!5m2!1sen!2sin"
    },
    {
      city: "Ahmedabad",
      address: "301, Anam 1, Nr. Parimal Garden, Off. C G Road, Ahmedabad - 380006",
      phone: "+91 72840 47366",
      email: "dhruvik@wcfw.in",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.1!2d72.5566!3d23.0340!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzAyLjQiTiA3MsKwMzMnMjMuOCJF!5e0!3m2!1sen!2sin!4v1696920000000!5m2!1sen!2sin"
    },
    {
      city: "Delhi",
      address: "505, Mansarover Building, Nehru Place, New Delhi - 110019",
      phone: "+91 98100 31561",
      email: "pravin@wcfw.in",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.522458072756!2d77.25075447527322!3d28.55145188888571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce36d49e45b33%3A0xa704474671d18209!2sMansarover%20Building%2C%20Nehru%20Place%2C%20New%20Delhi%2C%20Delhi%20110019!5e0!3m2!1sen!2sin!4v1707500000000!5m2!1sen!2sin"
    }
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Prepare email content
    const subject = `Inquiry: ${data.service} from ${data.name}`;
    const body = `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nService: ${data.service}\n\nMessage:\n${data.message}`;
    const mailtoLink = `mailto:care@wcfw.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      reset();
    }, 1000);
  };

  return (
    <div className="bg-[#f8fafc] selection:bg-orange-100 selection:text-orange-600">
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
                <FaHeadphones className="text-orange-600 text-sm" />
                <span className="text-orange-900 font-bold text-xs uppercase tracking-[0.2em]">Command Center</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
                Let's Talk <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                  Strategy.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-xl mb-12 font-medium">
                Connect with our advisory teams across India. Whether it's a portfolio audit or legacy planning, we're ready to architect your vision.
              </p>

              <div className="flex flex-wrap gap-10">
                <div className="flex flex-col">
                  <span className="text-slate-900 text-3xl font-black">60m</span>
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">SLA Response</span>
                </div>
                <div className="w-px h-12 bg-slate-200"></div>
                <div className="flex flex-col">
                  <span className="text-orange-600 text-3xl font-black">4+</span>
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Global Hubs</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="hidden lg:block relative"
            >
              <div className="bg-white/60 backdrop-blur-xl border border-white/40 p-12 rounded-[4rem] shadow-2xl relative z-10 overflow-hidden">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-slate-900 rounded-3xl flex items-center justify-center text-orange-500 shadow-xl">
                    <FaWhatsapp className="text-3xl text-green-400" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-black text-xl leading-tight">Instant <br /> Transmission</p>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">+91 93772 77703</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Form Side */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] p-8 sm:p-16 border border-slate-100"
              >
                <div className="flex items-center space-x-4 mb-10">
                  <span className="h-px w-12 bg-orange-500"></span>
                  <span className="text-orange-600 font-bold uppercase tracking-widest text-xs">Advisory Request Protocol</span>
                </div>
                <h2 className="text-4xl font-black text-slate-900 mb-10 leading-tight">Secure Advisory Channel</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Identity Protocol</label>
                      <input
                        {...register('name', { required: true })}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all font-bold text-slate-800 outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Satellite Line</label>
                      <input
                        {...register('phone', { required: true })}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all font-bold text-slate-800 outline-none"
                        placeholder="+91 98XXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Digital Coordinates</label>
                    <input
                      {...register('email', { required: true })}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all font-bold text-slate-800 outline-none"
                      placeholder="john@protocol.com"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Objective Vector</label>
                    <select
                      {...register('service', { required: true })}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all font-bold text-slate-800 outline-none appearance-none"
                    >
                      <option value="Wealth Management">Wealth Management</option>
                      <option value="Mutual Funds">Mutual Funds & SIPs</option>
                      <option value="Insurance">Life & Health Insurance</option>
                      <option value="Tax Planning">Tax Saving Strategies</option>
                      <option value="Others">General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Strategic Brief</label>
                    <textarea
                      {...register('message', { required: true })}
                      rows="4"
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all font-bold text-slate-800 outline-none resize-none"
                      placeholder="Briefly outline your financial objectives..."
                    ></textarea>
                  </div>

                  <button
                    disabled={isSubmitting}
                    className="w-full py-6 bg-slate-900 text-white font-black rounded-2xl shadow-2xl hover:bg-orange-600 transition-all flex items-center justify-center space-x-4 group uppercase tracking-widest text-xs"
                  >
                    <span>{isSubmitting ? "Initiating Uplink..." : "Activate Advisory Line"}</span>
                    <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Info Side */}
            <div className="lg:col-span-5 space-y-8">
              {/* Emergency / WhatsApp Node */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#0f172a] rounded-[3rem] p-10 text-white relative overflow-hidden group shadow-2xl shadow-slate-900/20"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-bl-full group-hover:scale-150 transition-transform duration-700"></div>
                <div className="flex items-center space-x-5 mb-8">
                  <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center border border-green-500/20">
                    <FaWhatsapp className="text-green-400 text-3xl" />
                  </div>
                  <div>
                    <h4 className="font-black text-xl tracking-tight">Vanguard Support</h4>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">SLA: 60 MIN PROTOCOL</p>
                  </div>
                </div>
                <p className="text-3xl font-black mb-8 tracking-tighter">+91 93772 77703</p>
                <a href="https://wa.me/919377277703" className="inline-flex items-center text-orange-400 font-black hover:text-white transition-colors group">
                  Initiate Secure Chat <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                </a>
              </motion.div>

              {/* Support Channels */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-[3rem] p-10 border border-slate-100 space-y-8 shadow-xl shadow-slate-900/5"
              >
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group">
                    <FaHeadset className="text-orange-500 text-2xl group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h5 className="font-black text-slate-900 text-lg">Global Registry</h5>
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2 mt-1">Mon-Sat | 10:00 - 18:00 IST</p>
                    <p className="text-slate-700 font-bold">info@wcfw.in</p>
                  </div>
                </div>
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group">
                    <FaGlobe className="text-blue-500 text-2xl group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h5 className="font-black text-slate-900 text-lg">Global Presence</h5>
                    <div className="flex space-x-4 mt-4">
                      {[FaLinkedin, FaFacebook, FaInstagram, FaYoutube].map((Icon, i) => (
                        <a key={i} href="#!" className="w-11 h-11 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-slate-400 hover:text-orange-600 hover:bg-white hover:shadow-lg transition-all">
                          <Icon />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Legacy Trust */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-10 border-2 border-dashed border-slate-200 rounded-[3rem] text-center"
              >
                <FaShieldAlt className="text-slate-300 text-5xl mx-auto mb-6" />
                <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.3em] mb-3">Institutional Grade Security</p>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">All transmission telemetry is encrypted and handled under strict confidentiality protocol.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Grid - Map Focused */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h3 className="text-orange-600 font-black uppercase tracking-[0.3em] text-xs mb-4">The Presence Protocol</h3>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900">National Hubs</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {officeLocations.map((office, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-50 hover:border-orange-200 transition-all group"
              >
                <div className="h-48 relative overflow-hidden">
                  <iframe
                    title={office.city}
                    src={office.mapEmbed}
                    className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                    loading="lazy"
                  ></iframe>
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-8">
                  <h4 className="font-black text-slate-900 text-xl mb-3 tracking-tight">{office.city}</h4>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed mb-6 line-clamp-2">{office.address}</p>
                  <div className="space-y-3 pt-6 border-t border-slate-50">
                    <p className="text-sm font-black text-orange-600">{office.phone}</p>
                    <p className="text-[10px] font-black text-slate-300 lowercase uppercase tracking-widest">{office.email}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

