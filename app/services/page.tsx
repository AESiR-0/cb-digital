import React from "react";
import Services from "../components/sections/service/Services";
import TitleBody from "../components/sections/TitleBody";

export default function page() {
  return (<div className="w-screen bg-primary h-full">
    <Services />
    <TitleBody color="secondary" title='what we do' body={`We dive into your podcast, pull out the gold, and present it in a way that's impossible to scroll past. Our team is all about finding those mic-drop moments, the laughs, the feels, the wow-factor, and turning them into content that makes your audience hit the share button.`} />
    <TitleBody color="primary" title='our secret sauce' body={`It’s all about balancing the art of storytelling with the science of audience engagement. We don’t just slice up your podcast—we craft stories that pull people in and keep them hooked from start to finish.`} />

  </div>)
}
