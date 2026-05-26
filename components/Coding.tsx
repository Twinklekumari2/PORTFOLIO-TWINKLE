"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { div } from "motion/react-client";

function Coding() {
  const images = [
    "twinkle.png",
    "twinkle.png",
    "twinkle.png",
    "twinkle.png",
    "bestyr.png",
    "c++.png",
    "platforms.png",
    "twinkle.png",
    "twinkle.png",
    "twinkle.png",
    "twinkle.png",
    "twinkle.png",
    "journey.png",
    "leetcode.png",
    "codolio.png",
    "platforms.png",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "platforms.png",
    "codechef.png",
    "codehelp.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    "https://assets.aceternity.com/vortex.png",
    "https://assets.aceternity.com/wobble-card.png",
    "https://assets.aceternity.com/world-map.webp",
  ];
  return (
    <div id="coding">
        <h1 className="heading mb-4">
        My <span className="text-purple">Coding Journey</span>
      </h1>
      <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
        
      <ThreeDMarquee images={images} />
      </div>
    </div>
  );
}

export default Coding;
