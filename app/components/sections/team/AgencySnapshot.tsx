const content = [
  {
    title: "happy clients",
    number: "100",
    content:
      "Had to show the number here, can't fit 100 testimonials in our wesbite. (really think we should get a new developer)",
  },
  {
    title: "podcasts produced",
    number: "25",
    content:
      "Had to show the number here, can't fit 100 testimonials in our wesbite. (really think we should get a new developer)",
  },
  {
    title: "reels repurposed",
    number: "500",
    content:
      "We are not kidding, literally counted. (had an intern do it, instead of a making coffee) ",
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
    <div>
      <div className="flex gap-24 py-10 px-10 ">
        <h2 className="font-clash uppercase leading-tight w-1/3 text-6xl font-semibold">
          Agency Snapshot
        </h2>
        <div className="grid-cols-2 gap-24 text-3xl grid">
          {content.map((data, index) => (
            <div key={index} className="">
              <h6 className="pb-5">{data.title}</h6>
              <h6 className="text-5xl font-light ">{data.number}+</h6>
              <h6 className="font-thin text-xl pr-20">{data.content}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
