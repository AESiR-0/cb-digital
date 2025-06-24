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
                
                {/* Video Controls Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Play Button */}
                  <button className="group/play relative w-16 h-16 bg-red-500/90 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-red-500/50">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
                  </button>
                </div>
                
                {/* Mute Button */}
                <button className="absolute top-4 right-4 w-12 h-12 bg-[#171717]/50 hover:bg-[#171717]/70 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                  </svg>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                </button>
                
                {/* Video Label */}
                <div className="absolute bottom-4 left-4 bg-[#171717]/50 hover:bg-[#171717]/70 rounded-full px-3 py-1 transition-all duration-300">
                  <span className="text-white text-sm font-medium">Our Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
