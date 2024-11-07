import { RoundedButton } from "../../Button";

const content = [
  {
    title: "⁠Podcast Highlight Curation",
    content:
      "We comb through your podcast to find the most compelling, share-worthy moments that your audience will love. Whether it's a jaw-dropping revelation, a hilarious anecdote, or a deeply relatable quote, we pick the gems that are perfect for social media.",
  },
  {
    title: "Short-Form Edits for Social",
    content:
      "We take those highlight moments and transform them into bite-sized clips, optimized for platforms like Instagram Reels, TikTok, and YouTube Shorts. Perfect for grabbing attention in a few seconds!",
  },
  {
    title: "Audience Engagement Strategy",
    content:
      "We don't just edit and post. We strategize! We'll help you figure out what kind of content resonates best with your audience and how to position it to maximize engagement—likes, shares, and comments.",
  },
  {
    title: "Audience Engagement Strategy",
    content:
      "We don't just edit and post. We strategize! We'll help you figure out what kind of content resonates best with your audience and how to position it to maximize engagement—likes, shares, and comments.",
  },
  {
    title: "Short-Form Edits for Social",
    content:
      "We take those highlight moments and transform them into bite-sized clips, optimized for platforms like Instagram Reels, TikTok, and YouTube Shorts. Perfect for grabbing attention in a few seconds!",
  },
];
// components/Services.js
export default function OurServices() {
  return (
    <>
      <div className="flex font-clash h-full  flex-col py-10 items-center justify-center my-20  bg-secondary text-white">
        <h2 className="text-7xl font-bold uppercase pb-8">Our Seervices</h2>
        <div className="grid gap-20 px-32 py-10 place-items-center grid-cols-1 md:grid-cols-2  max-w-1/3  w-full">
          {content.map((data, index) => (
            <div className="">
              <h3 className="text-3xl">{data.title}</h3>
              <p className="text-xl font-light">{data.content}</p>
            </div>
          ))}
          <div className="">
            <RoundedButton size="xl" section="CTA" text="Start a project!" />
          </div>
        </div>
      </div>
    </>
  );
}
