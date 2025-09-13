import List from "@/components/tab/ui/List";
import { ToggleTheme } from "@/components/ui/toggle-theme";

export default function Home() {
  return (
    <main className="w-full h-full border-x">
      <div className="max-w-6xl border mx-auto">
        <div className="flex flex-col h-screen">
          <nav className="flex justify-between items-center p-4 border-b">
            <h1 className="font-sub font-semibold">UI</h1>
            <ToggleTheme />
          </nav>

          <div className="w-full flex-1 min-h-96 p-4">
            <div className="border h-full w-full flex justify-center">
              <div className="w-full h-full bg-background p-2 overflow-hidden relative flex  justify-center items-center gap-4">
                <List />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
