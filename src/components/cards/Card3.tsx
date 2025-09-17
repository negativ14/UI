import { CardSim } from "lucide-react";

export default function Card3() {
  return (
    <div className="ring-1 ring-amber-900 h-[26rem] w-72 rounded-lg p-4 flex flex-col gap-4 relative overflow-hidden before:absolute before:inset-0 before:-z-10 before:translate-y-[200%] before:bg-gradient-to-br before:from-amber-200 before:to-amber-400 before:scale-[2.5] before:transition-all before:duration-300 before:content-[''] hover:before:translate-y-[0%] drop-shadow-xl hover:ring-0 transition-all duration-500 group">
      <h1 className="text-3xl font-semibold tracking-tight group-hover:text-white transition-colors duration-300 text-shadow-sm">
        Card with Animation
      </h1>
      <p className="text-xl font-mono group-hover:text-amber-900 transition-colors duration-300">
        This card is ready for animation effects. Hover, click, or add motion to
        bring it to life with smooth transitions and 3D interactions.
      </p>
      <CardSim className="absolute text-accent h-[10rem] w-auto bottom-0 rotate-150 translate-y-15 translate-x-30 group-hover:text-amber-100 transition-colors duration-300" />
    </div>
  );
}
