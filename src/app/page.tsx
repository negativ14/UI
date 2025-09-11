import TailwindPattern from "@/components/backgrounds/TailwindPattern";
import {
  Card,
  CardDescription,
  CardFooter,
  CardImage,
  CardTitle,
} from "@/components/card/index";
import { ToggleTheme } from "@/components/ui/toggle-theme";
import Image from "next/image";
import image from "@/components/card/assets/aiony-haust-3TLl_97HNJo-unsplash.jpg";

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
              <div className="w-full h-full bg-background p-2 overflow-hidden relative flex justify-center items-center gap-4">
                {/* render comp */}
                <Card>
                  <CardImage>
                    <Image
                      src={image}
                      fill
                      alt="avatr"
                      className=" object-cover group-hover:scale-120 transition-all duration-300"
                    />
                  </CardImage>
                  <CardTitle>Image</CardTitle>

                  <CardDescription>
                    Passionate frontend developer crafting clean and accessible
                    interfaces. Loves experimenting with modern UI patterns.
                  </CardDescription>

                  <CardFooter>
                    Top-rated by 1,000+ users
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
