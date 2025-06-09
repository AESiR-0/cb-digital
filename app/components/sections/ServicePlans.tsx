"use client";
import React from "react";
import Title from "../Title";

const plans = [
    {
        title: "Vibe",
        description: "For established brands looking to enhance their social media engagement across diverse formats",
        features: [
            "30 shorts/month",
            "Posted on Instagram, YouTube, LinkedIn, Facebook & TikTok",
            "Repurposed podcasts, videos, and reels",
            "Scripted content",
            "Bespoke animations",
            "24/7 Slack support"
        ],
    },
    {
        title: "Momentum",
        description: "For brands seeking a complete content solution from production to promotion across various media",
        features: [
            "Full production of podcasts and video content",
            "Content pushed via theme pages, Slack, Reddit, and newsletters",
            "4 Long-form clips for YouTube/month ",
            "18-30 shorts/month",
            " Custom animations",
            "Performance tracking metrics",
            " 24/7 Slack support",
        ],
    },
    {
        title: "Visionary",
        description: "For visionary founders & VCs initiating their brand presence with comprehensive multimedia content",
        features: [
            "4 podcasts/videos monthly",
            "Content strategy & guest planning",
            "Development of brand identity and website tailored to multimedia content",
            "Custom shorts, animations and videos",
            "Advanced performance tracking",
            "24/7 Slack support",
        ],
    },
];

export default function ServicePlans() {
    return (
        <div className="py-10 px-5 md:px-10 lg:px-20">
            <div className="text-xl w-full flex justify-center text-center mb-10">
                <Title alignment="center" code="#FF0000" title1="Content Buffet" title2="" />
            </div>
            <div className="service-plans grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {plans.map((plan, index) => (
                    <div key={index} className={`flex flex-col items-center p-8 rounded-lg shadow-lg hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] transition-all duration-300 ${index === 1 ? 'rounded-xl border border-[#FF0000] shadow-[0_0_20px_rgba(255,0,0,0.4)]' : ''}`}>
                        <h3 className="text-5xl font-bold mb-5">{plan.title}</h3>
                        <p className="text-center mb-6">{plan.description}</p>
                        <ul className="list-none mb-6">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center mb-8">
                                    <span className="mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FF0000" className="drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                                        </svg>
                                    </span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="px-6 py-2 border border-[#FF0000] text-white rounded-full hover:bg-[#FF0000] hover:text-secondary transition hover:shadow-[0_0_15px_rgba(255,0,0,0.5)]">
                            Book a Call
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
} 