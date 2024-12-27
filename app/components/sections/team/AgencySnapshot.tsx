const content = [
  {
    title: "happy clients",
    number: "100",
    content:
      "Had to show the number here, can't fit 100 testimonials in our website. (really think we should get a new developer)",
  },
  {
    title: "podcasts produced",
    number: "25",
    content:
      "Had to show the number here, can't fit 100 testimonials in our website. (really think we should get a new developer)",
  },
  {
    title: "reels repurposed",
    number: "500",
    content:
      "We are not kidding, literally counted. (had an intern do it, instead of making coffee) ",
  },
  {
    title: "thumbnails made",
    number: "300",
    content:
      "Well, this annoys us the most but we still do that to get the clicks! (we're quite good at it)",
  },
];

export default function AgencySnapshot() {
  return (
    <div className="py-10 px-5 md:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row lg:gap-24 items-start">
        {/* Title Section */}
        <h2 className="font-clash uppercase text-center lg:text-left leading-tight text-4xl lg:text-6xl font-semibold mb-10 lg:mb-0 lg:w-1/3">
          Agency Snapshot
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-24 text-2xl lg:text-3xl w-full">
          {content.map((data, index) => (
            <div key={index} className="flex flex-col">
              <h6 className="pb-2 lg:pb-5 font-semibold">{data.title}</h6>
              <h6 className="text-4xl lg:text-5xl font-light mb-2 lg:mb-4">{data.number}+</h6>
              <p className="font-thin text-base lg:text-xl pr-2 lg:pr-10">{data.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
