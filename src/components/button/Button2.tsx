export default function Button2() {
  return (
    <button className="bg-accent text-accent-foreground  px-4 py-1.5 rounded-md font-medium relative  group cursor-pointer shadow-[0px_1px_4px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset] active:scale-90 transition-transform duration-300">
      Hover{" "}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-emerald-300 to-transparent h-px w-3/4 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      <div className="absolute inset-x-0 bottom-1 bg-gradient-to-r from-transparent via-emerald-300 to-transparent h-[3px] w-3/4 mx-auto blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-active:opacity-0" />
    </button>
  );
}
