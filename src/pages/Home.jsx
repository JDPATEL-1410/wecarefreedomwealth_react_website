import React, { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import GoogleReviews from '../components/GoogleReviews';
import {
  FaChartLine,
  FaShieldAlt,
  FaArrowRight,
  FaHome,
  FaGraduationCap,
  FaRing,
  FaUmbrella,
  FaChartPie,
  FaBullseye,
  FaUniversity,
  FaFileInvoiceDollar,
  FaPlay,
  FaYoutube,
  FaClock,
  FaEye
} from 'react-icons/fa';
import axios from 'axios';

import ServiceCard from '../components/ServiceCard';

// Import Service Images
import goalImg from '../assets/images/services/goal-based-investing.png';
import mfImg from '../assets/images/services/mutual-funds.png';
import stocksImg from '../assets/images/services/stocks.png';
import fdImg from '../assets/images/services/fixed-deposits.png';
import taxImg from '../assets/images/services/tax-planning.png';
import lifeInsImg from '../assets/images/services/life-insurance.png';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const Home = () => {
  const [latestVideo, setLatestVideo] = useState(null);
  const [otherVideos, setOtherVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  // YouTube API Configuration
  const YOUTUBE_API_KEY = "AIzaSyC2Ipc357Zm_TffHwDw5p_YBClyMYgT3vc";
  const PLAYLIST_ID = "UUADuni6S-18E2haTHUwkunA";

  // Utility to format YouTube date
  const timeAgo = (dateStr) => {
    const date = new Date(dateStr);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) return interval + "y ago";
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) return interval + "mo ago";
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) return interval + "d ago";
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) return interval + "h ago";
    interval = Math.floor(seconds / 60);
    if (interval >= 1) return interval + "m ago";
    return Math.floor(seconds) + "s ago";
  };

  const formatDuration = (duration) => {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    if (!match) return "Live";

    const hours = match[1] ? parseInt(match[1]) : 0;
    const minutes = match[2] ? parseInt(match[2]) : 0;
    const seconds = match[3] ? parseInt(match[3]) : 0;

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const formatViewCount = (views) => {
    const num = parseInt(views);
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);

        // Fetch latest videos from playlist
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems`,
          {
            params: {
              part: 'snippet',
              maxResults: 5,
              playlistId: PLAYLIST_ID,
              key: YOUTUBE_API_KEY,
            },
          }
        );

        if (response.data.items.length > 0) {
          const videoIds = response.data.items.map(item =>
            item.snippet.resourceId.videoId
          );

          // Fetch video details
          const detailsResponse = await axios.get(
            `https://www.googleapis.com/youtube/v3/videos`,
            {
              params: {
                part: 'contentDetails,statistics',
                id: videoIds.join(','),
                key: YOUTUBE_API_KEY,
              },
            }
          );

          const videosWithDetails = response.data.items.map((item, index) => {
            const details = detailsResponse.data.items[index];
            return {
              id: item.id || index,
              title: item.snippet.title,
              thumbnail: item.snippet.thumbnails.maxres?.url || item.snippet.thumbnails.high?.url,
              videoId: item.snippet.resourceId.videoId,
              duration: details ? formatDuration(details.contentDetails.duration) : "Live",
              views: details ? formatViewCount(details.statistics.viewCount) : "New",
              uploadDate: timeAgo(item.snippet.publishedAt),
              description: item.snippet.description.substring(0, 100) + '...'
            };
          });

          // First video is the latest (YouTube returns newest first)
          setLatestVideo(videosWithDetails[0]);
          setOtherVideos(videosWithDetails.slice(1, 4)); // Get next 3 videos
        }
        setLoading(false);

      } catch (err) {
        console.error("Error fetching YouTube videos:", err);
        // Fallback static videos
        const staticVideos = [
          {
            id: 1,
            title: "Organize Your Money - Live the lifestyle you want | Nikhil Thakkar",
            thumbnail: "https://img.youtube.com/vi/srALW6zLb0k/maxresdefault.jpg",
            videoId: "srALW6zLb0k",
            duration: "10:05",
            views: "1.2K",
            uploadDate: "2 days ago",
            description: "Learn how to organize your finances for the lifestyle you deserve"
          },
          {
            id: 2,
            title: "Diwali Picks 2024 | Nikhil Thakkar | We Care Freedom Wealth",
            thumbnail: "https://img.youtube.com/vi/g4AZe-tF4Vw/maxresdefault.jpg",
            videoId: "g4AZe-tF4Vw",
            duration: "18:00",
            views: "5.4K",
            uploadDate: "1 month ago",
            description: "Special Diwali investment recommendations for 2024"
          },
          {
            id: 3,
            title: "What is SIF? | Everything You Need to Know | Nikhil Thakkar",
            thumbnail: "https://img.youtube.com/vi/fwW22NEA3fA/maxresdefault.jpg",
            videoId: "fwW22NEA3fA",
            duration: "15:20",
            views: "3.1K",
            uploadDate: "2 weeks ago",
            description: "Complete guide to Systematic Investment Framework"
          }
        ];
        setLatestVideo(staticVideos[0]);
        setOtherVideos(staticVideos.slice(1));
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const services = useMemo(() => [
    {
      id: 1,
      title: "Goal Based Investing",
      icon: FaBullseye,
      description: "Strategic investment planning aligned with your life goals and aspirations",
      image: goalImg,
      link: "/services/goal-base-investing",
      gradient: "from-orange-500 to-red-600",
      features: ["Retirement Planning", "Child Education", "Dream Home"]
    },
    {
      id: 2,
      title: "Mutual Funds",
      icon: FaChartLine,
      description: "Diversified portfolio management for long-term wealth creation",
      image: mfImg,
      link: "/services/mutual-fund",
      gradient: "from-blue-500 to-indigo-600",
      features: ["SIP & Lumpsum", "Tax Saving ELSS", "Portfolio Review"]
    },
    {
      id: 3,
      title: "Stocks",
      icon: FaChartPie,
      description: "Equity investments and stock market advisory services",
      image: stocksImg,
      link: "/services/stocks",
      gradient: "from-emerald-500 to-teal-600",
      features: ["Equity Advisory", "Technical Analysis", "Long-term Picks"]
    },
    {
      id: 4,
      title: "Fixed Deposits",
      icon: FaUniversity,
      description: "Safe and guaranteed returns with flexible tenure options",
      image: fdImg,
      link: "/services/fixed-deposit",
      gradient: "from-yellow-500 to-orange-600",
      features: ["Corporate FDs", "Higher Returns", "Monthly Payouts"]
    },
    {
      id: 5,
      title: "Tax Planning",
      icon: FaFileInvoiceDollar,
      description: "Optimize your tax savings with expert financial planning",
      image: taxImg,
      link: "/services/tax-planning",
      gradient: "from-rose-500 to-pink-600",
      features: ["80C Deductions", "Tax Audit", "ITR Filing"]
    },
    {
      id: 6,
      title: "Life Insurance",
      icon: FaShieldAlt,
      description: "Comprehensive protection for you and your loved ones",
      image: lifeInsImg,
      link: "/services/life-insurance",
      gradient: "from-purple-500 to-violet-600",
      features: ["Term Insurance", "Critical Illness", "Family Protection"]
    }
  ], []);

  const goals = useMemo(() => [
    {
      id: 1,
      title: "Dream Home",
      icon: FaHome,
      link: "/goals/dream-home",
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 2,
      title: "Wealth Creation",
      icon: FaChartLine,
      link: "/goals/wealth-creation",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      id: 3,
      title: "Retirement",
      icon: FaUmbrella,
      link: "/goals/retirement",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 4,
      title: "Child's Education",
      icon: FaGraduationCap,
      link: "/goals/child-education",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 5,
      title: "Child's Wedding",
      icon: FaRing,
      link: "/goals/child-wedding",
      color: "from-pink-500 to-pink-600"
    },
    {
      id: 6,
      title: "Emergency Fund",
      icon: FaShieldAlt,
      link: "/goals/emergency-fund",
      color: "from-red-500 to-red-600"
    }
  ], []);



  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <HeroSection />


      {/* Services Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-orange-50 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-50 rounded-full blur-3xl opacity-30 -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">Services & Products</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 font-medium">
              Experience Bespoke Financial Solutions with WCFW's 35-Year Legacy of Trust
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                image={service.image}
                buttonLink={service.link}
                gradient={service.gradient}
                features={service.features}
                delay={index * 0.1}
              />
            ))}
          </motion.div>

          <div className="text-center mt-12 sm:mt-16">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-base sm:text-lg font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              aria-label="Explore all our financial services"
            >
              Explore All Services
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      {/* Video Section - Added after Hero */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-orange-50 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-50 rounded-full blur-3xl opacity-30 -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-orange-50 border border-orange-100 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
              <FaYoutube className="text-red-500 text-base sm:text-lg" />
              <span className="text-xs sm:text-sm font-bold text-orange-700 uppercase tracking-widest">
                Latest Financial Insights
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight">
              Watch & <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-500">Learn</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 font-medium">
              Latest wealth creation strategies from Nikhil Thakkar. New videos highlight automatically.
            </p>
          </motion.div>

          {loading ? (
            <div className="grid lg:grid-cols-3 gap-8 sm:gap-10">
              {/* Latest Video Skeleton */}
              <div className="lg:col-span-2">
                <div className="bg-gray-100 rounded-3xl p-6 sm:p-8 animate-pulse h-[400px]"></div>
              </div>
              {/* Other Videos Skeleton */}
              <div className="space-y-6 sm:space-y-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-gray-100 rounded-2xl p-6 animate-pulse h-[120px]"></div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8 sm:gap-10">
              {/* Latest Video - Highlighted */}
              {latestVideo && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="lg:col-span-2 group"
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-orange-100 relative">
                    {/* New Badge */}
                    <div className="absolute top-6 left-6 z-20">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs sm:text-sm font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-2">
                        <FaYoutube className="text-white" />
                        NEW RELEASE
                      </span>
                    </div>

                    <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
                      <img
                        src={latestVideo.thumbnail}
                        alt={latestVideo.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90"
                        onError={(e) => {
                          e.target.src = `https://img.youtube.com/vi/${latestVideo.videoId}/maxresdefault.jpg`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <a
                          href={`https://www.youtube.com/watch?v=${latestVideo.videoId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-all duration-500 hover:shadow-3xl hover:scale-110"
                          aria-label={`Watch ${latestVideo.title}`}
                        >
                          <FaPlay className="ml-1 text-lg sm:text-xl" />
                        </a>
                      </div>
                      <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full text-xs sm:text-sm font-bold text-white flex items-center uppercase tracking-widest">
                        <FaClock className="mr-2 text-orange-400" /> {latestVideo.duration}
                      </div>
                    </div>

                    <div className="p-6 sm:p-8 md:p-10">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors line-clamp-2">
                        {latestVideo.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base mb-6 line-clamp-2">
                        {latestVideo.description}
                      </p>
                      <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                        <div className="flex items-center gap-4 sm:gap-6">
                          <span className="flex items-center text-xs sm:text-sm font-semibold text-gray-500">
                            <FaEye className="mr-2 text-orange-500" /> {latestVideo.views} views
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-gray-500">
                            {latestVideo.uploadDate}
                          </span>
                        </div>
                        <a
                          href={`https://www.youtube.com/watch?v=${latestVideo.videoId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm sm:text-base font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 group/watch"
                          aria-label="Watch full video on YouTube"
                        >
                          Watch Now
                          <FaArrowRight className="group-hover/watch:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Other Videos */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6 sm:space-y-8"
              >
                {otherVideos.map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <a
                      href={`https://www.youtube.com/watch?v=${video.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-4 sm:gap-6 p-4 sm:p-6 bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200"
                      aria-label={`Watch ${video.title}`}
                    >
                      <div className="relative flex-shrink-0 w-32 sm:w-40 h-24 sm:h-28 rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                          onError={(e) => {
                            e.target.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-white">
                          {video.duration}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full flex items-center justify-center shadow-lg">
                            <FaPlay className="text-xs" />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                          {video.title}
                        </h4>
                        <div className="flex items-center justify-between mt-4">
                          <span className="flex items-center text-xs text-gray-500">
                            <FaEye className="mr-1 text-orange-500" /> {video.views}
                          </span>
                          <span className="text-xs text-gray-500">{video.uploadDate}</span>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}

                {/* View All Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to="/videos"
                    className="flex items-center justify-center gap-3 w-full p-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 group/all"
                    aria-label="View all videos"
                  >
                    <FaYoutube className="text-red-500 text-lg sm:text-xl" />
                    <span className="text-sm sm:text-base font-semibold">View All Videos</span>
                    <FaArrowRight className="group-hover/all:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* Goals Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 sm:w-96 sm:h-96 border-4 border-orange-500 rounded-full hidden sm:block"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 sm:w-64 sm:h-64 border-4 border-blue-500 rounded-full hidden sm:block"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Let's Start to <span className="text-orange-600">Plan Your Goals</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Investing and savings get direction when mapped with your short-term, medium-term, and long-term financial goals
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6"
          >
            {goals.map((goal) => (
              <motion.div
                key={goal.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group"
              >
                <Link
                  to={goal.link}
                  className="flex flex-col items-center text-center p-4 sm:p-6 bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-orange-200 h-full min-h-[140px] sm:min-h-[180px]"
                  aria-label={`Plan for ${goal.title}`}
                >
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${goal.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <goal.icon className="text-white text-lg sm:text-2xl" aria-hidden="true" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {goal.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Google Reviews Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              What Our <span className="text-orange-600">Clients Say</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Trusted by thousands of satisfied clients across India
            </p>
          </motion.div>

          <GoogleReviews />
        </div>
      </section>
    </div>
  );
};

export default Home;