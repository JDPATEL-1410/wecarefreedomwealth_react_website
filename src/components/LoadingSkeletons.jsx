import React from 'react';

// Card Skeleton for blog posts, videos, etc.
export const CardSkeleton = ({ count = 3 }) => {
    return (
        <>
            {Array.from({ length: count }).map((_, index) => (
                <div
                    key={index}
                    className="bg-white rounded-2xl overflow-hidden shadow-warm border-2 border-orange-100 animate-pulse"
                >
                    {/* Image skeleton */}
                    <div className="h-48 bg-gradient-to-r from-gray-200 to-gray-300"></div>

                    {/* Content skeleton */}
                    <div className="p-6 space-y-4">
                        {/* Title */}
                        <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-3/4"></div>

                        {/* Description lines */}
                        <div className="space-y-2">
                            <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded"></div>
                            <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-5/6"></div>
                        </div>

                        {/* Button */}
                        <div className="h-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-32"></div>
                    </div>
                </div>
            ))}
        </>
    );
};

// List Skeleton for text content
export const ListSkeleton = ({ count = 5 }) => {
    return (
        <div className="space-y-4">
            {Array.from({ length: count }).map((_, index) => (
                <div key={index} className="animate-pulse flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full"></div>
                    <div className="flex-1 space-y-2">
                        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-3/4"></div>
                        <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Table Skeleton
export const TableSkeleton = ({ rows = 5, cols = 4 }) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-warm border-2 border-orange-100">
            <div className="animate-pulse">
                {/* Header */}
                <div className="bg-gradient-to-r from-gray-200 to-gray-300 h-12"></div>

                {/* Rows */}
                {Array.from({ length: rows }).map((_, rowIndex) => (
                    <div key={rowIndex} className="border-t border-gray-200 p-4">
                        <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
                            {Array.from({ length: cols }).map((_, colIndex) => (
                                <div
                                    key={colIndex}
                                    className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded"
                                ></div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Form Skeleton
export const FormSkeleton = () => {
    return (
        <div className="bg-white rounded-2xl p-8 shadow-warm-lg border-2 border-orange-100 animate-pulse space-y-6">
            {/* Title */}
            <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2"></div>

            {/* Form fields */}
            {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="space-y-2">
                    <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-24"></div>
                    <div className="h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded"></div>
                </div>
            ))}

            {/* Button */}
            <div className="h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-full"></div>
        </div>
    );
};

// Page Skeleton
export const PageSkeleton = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="animate-pulse space-y-8">
                    {/* Hero section */}
                    <div className="text-center space-y-4">
                        <div className="h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2 mx-auto"></div>
                        <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-3/4 mx-auto"></div>
                    </div>

                    {/* Content grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <CardSkeleton count={3} />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Spinner Component
export const Spinner = ({ size = 'md', color = 'orange' }) => {
    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-16 h-16',
        lg: 'w-24 h-24'
    };

    const colorClasses = {
        orange: 'border-orange-500',
        white: 'border-white',
        gray: 'border-gray-500'
    };

    return (
        <div className="flex justify-center items-center">
            <div
                className={`${sizeClasses[size]} border-t-2 border-b-2 ${colorClasses[color]} rounded-full animate-spin`}
            ></div>
        </div>
    );
};

// Full Page Loader
export const PageLoader = () => {
    return (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
            <div className="text-center">
                <div className="w-20 h-20 border-t-4 border-b-4 border-orange-500 rounded-full animate-spin mb-4"></div>
                <p className="text-gray-600 font-semibold">Loading...</p>
            </div>
        </div>
    );
};

const skeletons = {
    CardSkeleton,
    ListSkeleton,
    TableSkeleton,
    FormSkeleton,
    PageSkeleton,
    Spinner,
    PageLoader
};

export default skeletons;
