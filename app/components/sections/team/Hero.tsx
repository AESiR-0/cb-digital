import Image from "next/image";
import Card from "../../Cards";
import { RoundedButton } from "../../Button";

export default function Hero() {
  return (
    <div className="w-full bg-[#171717] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="w-full space-y-4">
          
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 ">
            {/* Text Content - Left Side */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8 text-white text-center lg:text-left">
              <p className="text-base lg:text-lg font-normal whitespace-pre-line leading-relaxed text-gray-400">
                {` We've scaled pages like Odd Marketing to 310K+ in 2 months, powered creators like Amish Tripathi, and worked with legends like Ashneer Grover, Tetr,  Groww, Kotak Secturities and Masters' Union.

From YouTube IPs and Instagram virality to faceless brands, podcast production, and AI-led content — we blend strategy, storytelling, and speed to make your brand unmissable.

Built in India. Scaling globally.
If the story matters, we'll make it binge-worthy.`}
              </p>
              <div className="flex justify-center lg:justify-start mt-5">
                <div className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
                  <span className="text-lg">Let's Animate</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  {/* Button doodles */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Image - Right Side */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <Image
                  src={'/static/team/joining_hands.png'}
                  alt="Team K Hero Image"
                  width={500}
                  height={500}
                  className="relative rounded-full object-cover shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
