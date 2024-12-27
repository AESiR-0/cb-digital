"use client";
import React from "react";

const plans = [
    {
        title: "Echo",
        description: "For established podcasts that need social media content",
        features: [
            "30 shorts/month",
            "Posted on Instagram, YouTube, LinkedIn, Facebook & TikTok",
            "Repurposed content",
            "Custom scripted content",
            "Custom animations",
            "Reporting & Analytics",
            "24x7 Slack Support",
        ],
    },
    {
        title: "Growth",
        description: "For podcasts seeking a complete solution from production to promotion",
        features: [
            "Podcast production",
            "Podcast promotion via theme pages, slack, reddit & newsletters",
            "4 Long-form clips for YouTube/month",
            "18-30 shorts/month",
            "Custom animations",
            "Reporting & Analytics",
            "24x7 Slack Support",
        ],
    },
    {
        title: "Launchpad",
        description: "For tech companies & VCs looking to start a podcast from scratch",
        features: [
            "4 podcasts/month",
            "Guest sourcing & ideation",
            "Podcast brand & website creation",
            "Custom shorts",
            "Custom animations",
            "Reporting & Analytics",
            "24x7 Slack Support",
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