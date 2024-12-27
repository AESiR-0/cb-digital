import React from "react";

const svgs = [
    // Replace these with your actual SVG paths or components
    <svg key="1" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
    </svg>,
    <svg key="2" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="16" height="16" stroke="white" strokeWidth="2" />
    </svg>,
    <svg key="3" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="12,2 22,22 2,22" stroke="white" strokeWidth="2" />
    </svg>,<svg key="1" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
    </svg>,
    <svg key="2" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="16" height="16" stroke="white" strokeWidth="2" />
    </svg>,
    <svg key="3" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="12,2 22,22 2,22" stroke="white" strokeWidth="2" />
    </svg>,<svg key="1" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
    </svg>,
    <svg key="2" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="16" height="16" stroke="white" strokeWidth="2" />
    </svg>,
    <svg key="3" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="12,2 22,22 2,22" stroke="white" strokeWidth="2" />
    </svg>,<svg key="1" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
    </svg>,
    <svg key="2" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="16" height="16" stroke="white" strokeWidth="2" />
    </svg>,
    <svg key="3" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="12,2 22,22 2,22" stroke="white" strokeWidth="2" />
    </svg>,
    // Add more SVGs as needed
];

export default function ClientMarquee() {
    return (
        <div className="overflow-hidden py-4 mx-20 bg-secondary-2 group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-2 via-transparent to-secondary-2 pointer-events-none"></div>
            <div className="flex animate-marquee space-x-8" style={{ width: '75vw' }}>
                {svgs.map((svg, index) => (
                    <div key={index} className="flex-shrink-0">
                        {svg}
                    </div>
                ))}
                {svgs.map((svg, index) => (
                    <div key={index + svgs.length} className="flex-shrink-0">
                        {svg}
                    </div>
                ))}
            </div>
        </div>
    );
} 