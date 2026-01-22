import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft, FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';

// Official Google G Icon Component
const GoogleG = ({ size = 24, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24s.92 7.54 2.56 10.78l7.97-6.19z" />
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
);

const GoogleReviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const GOOGLE_REVIEW_LINK = "https://g.page/r/CUFzgFupG-ycEAE/review";
    const GOOGLE_MAPS_LINK = "https://www.google.com/search?q=We+Care+Freedom+Wealth+Pvt.+Ltd.+Anand#lrd=0x395e4e768393796f:0xe6c418a95b807341,1";

    // Google Reviews Data
    const reviews = [
        {
            id: 1,
            name: "Rajesh Kumar",
            rating: 5,
            date: "2 weeks ago",
            text: "Excellent financial planning services! The team at WeCare helped me plan my retirement effectively. Their personalized approach and regular follow-ups make them stand out. Highly recommended for anyone looking for professional wealth management.",
            avatar: "RK",
            color: "bg-[#4285F4]"
        },
        {
            id: 2,
            name: "Priya Sharma",
            rating: 5,
            date: "1 month ago",
            text: "I've been investing through WeCare for 3 years now. The returns have been consistent and the advisory is top-notch. They truly care about their clients' financial goals and provide honest, transparent advice.",
            avatar: "PS",
            color: "bg-[#EA4335]"
        },
        {
            id: 3,
            name: "Amit Patel",
            rating: 5,
            date: "3 weeks ago",
            text: "Best financial advisors in Gujarat! They helped me with tax planning and mutual fund investments. The team is very knowledgeable and always available to answer queries. Great experience overall!",
            avatar: "AP",
            color: "bg-[#FBBC05]"
        },
        {
            id: 4,
            name: "Sneha Desai",
            rating: 5,
            date: "2 months ago",
            text: "WeCare Freedom Wealth has been managing my family's investments for over 5 years. Their systematic approach and regular portfolio reviews have helped us achieve our financial goals. Trustworthy and professional!",
            avatar: "SD",
            color: "bg-[#34A853]"
        },
        {
            id: 5,
            name: "Vikram Singh",
            rating: 5,
            date: "1 week ago",
            text: "Impressed with their customer service and financial expertise. They helped me plan for my child's education and our dream home. The calculators on their website are very helpful too!",
            avatar: "VS",
            color: "bg-[#4285F4]"
        },
        {
            id: 6,
            name: "Meera Joshi",
            rating: 5,
            date: "3 months ago",
            text: "Professional, reliable, and client-focused. WeCare has helped me build a diversified portfolio that aligns with my risk appetite. Their regular updates and market insights are invaluable.",
            avatar: "MJ",
            color: "bg-[#EA4335]"
        }
    ];

    const handleNext = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, [reviews.length]);

    // Auto-rotate carousel with pause functionality
    useEffect(() => {
        if (!isPaused) {
            const timer = setInterval(() => {
                handleNext();
            }, 6000);

            return () => clearInterval(timer);
        }
    }, [handleNext, isPaused]);

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    const getVisibleReviews = () => {
        const prevIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        const nextIndex = (currentIndex + 1) % reviews.length;
        return [reviews[prevIndex], reviews[currentIndex], reviews[nextIndex]];
    };

    const visibleReviews = getVisibleReviews();

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 500 : -500,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 500 : -500,
            opacity: 0
        })
    };

    const ReviewCard = ({ review, isCenter = false }) => (
        <motion.article
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
                opacity: isCenter ? 1 : 0.7,
                scale: isCenter ? 1.02 : 0.95,
                y: isCenter ? -5 : 0
            }}
            transition={{ duration: 0.5 }}
            className={`relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-t-4 transition-all duration-500 h-full flex flex-col ${isCenter ? 'border-orange-500' : 'border-gray-200'
                }`}
        >
            {/* Google Logo Background */}
            <div className="absolute top-4 right-4 opacity-10">
                <GoogleG size={40} />
            </div>

            <div className="flex-grow">
                {/* Rating */}
                <div className="flex gap-1 mb-4" role="img" aria-label={`${review.rating} out of 5 stars`}>
                    {[...Array(review.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-lg" aria-hidden="true" />
                    ))}
                </div>

                <div className="relative mb-6">
                    <FaQuoteLeft className="text-blue-100 text-4xl absolute -top-2 -left-2 -z-0" />
                    <p className="text-gray-700 relative z-10 leading-relaxed text-sm sm:text-base line-clamp-4 italic">
                        "{review.text}"
                    </p>
                </div>
            </div>

            {/* Author Info */}
            <div className="flex items-center mt-auto pt-6 border-t border-gray-100">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md mr-4 ${review.color}`}>
                    {review.avatar}
                </div>
                <div>
                    <div className="flex items-center gap-1">
                        <h4 className="font-bold text-gray-900 text-sm sm:text-base">{review.name}</h4>
                        <FaCheckCircle className="text-blue-500 text-xs" title="Verified Reviewer" />
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400">{review.date}</span>
                        <div className="flex items-center gap-1 text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
                            <GoogleG size={10} />
                            <span>on Google</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.article>
    );

    return (
        <section className="relative w-full max-w-7xl mx-auto px-4 py-8">
            {/* Google Review Summary Badge (Thumbnail) */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto relative overflow-hidden">
                    {/* Decorative Background Element */}
                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
                    <div className="absolute -left-10 -top-10 w-40 h-40 bg-orange-50 rounded-full blur-3xl opacity-60"></div>

                    <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
                        {/* Google Brand Box */}
                        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-gray-50 group hover:scale-105 transition-transform duration-300">
                            <GoogleG size={48} />
                        </div>

                        <div className="text-center sm:text-left">
                            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 mb-1">
                                <span className="text-4xl font-extrabold text-gray-900 tracking-tight">4.7</span>
                                <div className="flex text-yellow-400 text-xl py-1">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-gray-200" style={{ clipPath: 'inset(0 30% 0 0)' }} />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 justify-center sm:justify-start">
                                Google Business Rating
                                <FaCheckCircle className="text-blue-500 text-base" />
                            </h3>
                            <p className="text-gray-500 font-medium">Based on <span className="text-blue-600 font-bold">373+</span> verified client reviews</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto relative z-10">
                        <a
                            href={GOOGLE_REVIEW_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-[#4285F4] text-white font-bold rounded-xl hover:bg-blue-600 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
                        >
                            <GoogleG size={18} />
                            Write a Review
                        </a>
                        <a
                            href={GOOGLE_MAPS_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-white border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 hover:border-gray-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
                        >
                            <span>View All Reviews</span>
                            <FaExternalLinkAlt className="text-xs pb-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Carousel Container */}
            <div
                className="relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Desktop View - 3 Cards */}
                <div className="hidden lg:grid lg:grid-cols-3 gap-6 xl:gap-8 items-stretch">
                    {visibleReviews.map((review, index) => (
                        <ReviewCard
                            key={`${review.id}-${index}`}
                            review={review}
                            isCenter={index === 1}
                        />
                    ))}
                </div>

                {/* Mobile/Tablet View - Single Card with Touch Swipe */}
                <div className="lg:hidden relative min-h-[350px]">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="h-full"
                        >
                            <ReviewCard
                                review={reviews[currentIndex]}
                                isCenter={true}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Controls */}
                <div className="flex flex-col sm:flex-row items-center justify-center mt-12 gap-8">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={handlePrev}
                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 hover:bg-gray-50 hover:text-orange-500 transition-all active:scale-90"
                            aria-label="Previous review"
                        >
                            <FaChevronLeft />
                        </button>

                        {/* Dot navigation */}
                        <div className="flex gap-2">
                            {reviews.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > currentIndex ? 1 : -1);
                                        setCurrentIndex(index);
                                    }}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'w-8 bg-orange-500'
                                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                                        }`}
                                    aria-label={`Go to review ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 hover:bg-gray-50 hover:text-orange-500 transition-all active:scale-90"
                            aria-label="Next review"
                        >
                            <FaChevronRight />
                        </button>
                    </div>

                    <a
                        href={GOOGLE_MAPS_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-600 font-semibold flex items-center gap-2 transition-colors text-sm"
                    >
                        View all <span className="underline decoration-blue-200 decoration-2 underline-offset-4">373 reviews on Google Maps</span>
                        <FaExternalLinkAlt className="text-xs" />
                    </a>
                </div>
            </div>

            {/* Sub-footer Marketing Text */}
            <div className="mt-16 text-center">
                <p className="text-gray-400 text-sm font-medium italic">
                    "Transparency and Trust are the cornerstones of our financial advisory legacy since 1990."
                </p>
            </div>
        </section>
    );
};

export default GoogleReviews;


