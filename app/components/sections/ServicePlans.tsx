"use client";
import React from "react";

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
            <h2 className="text-xl w-full flex justify-center   text-center mb-10"> <span className=" bg-secondary rounded-xl p-3 px-5 font-bold ">Service Plans</span></h2>
            <div className="flex flex-col lg:flex-row justify-center gap-10">
                {plans.map((plan, index) => (
                    <div key={index} className={`flex flex-col items-center p-8 rounded-lg shadow-lg ${index === 1 ? 'rounded-xl border border-white' : ''}`}>
                        <h3 className="text-5xl  mb-5">{plan.title}</h3>
                        <p className="text-center mb-6">{plan.description}</p>
                        <ul className="list-none mb-6">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center mb-8">
                                    <span className="mr-2">✔️</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-secondary transition">
                            Book a Call
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
} 