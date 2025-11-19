import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { List } from "lucide-react";
import MenuLinks from "./menu-links";

export default function Header() {
  return (
    <header className="w-full">
      <div className="flex justify-between items-center m-4 xl:mx-auto max-w-7xl">
        <div className="flex justify-center items-center gap-2">
          <Image
            alt="Anteater icon"
            src="/icon.svg"
            width={499}
            height={298}
            loading="eager"
            className="w-auto max-h-10"
          />
          <h1 className="font-title text-3xl">Tamanduá Digital</h1>
        </div>
        <Sheet>
          <SheetTrigger className="lg:hidden text-white text-4xl">
            <List className="text-white" />
          </SheetTrigger>
          <SheetContent
            side="top"
            className="flex justify-center items-center bg-zinc-950 h-screen text-slate-50"
          >
            <SheetHeader>
              <SheetTitle className="hidden">Menu</SheetTitle>
              <MenuLinks style="flex flex-col items-center justify-center gap-8 text-lg font-medium text-zinc-200" />
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <MenuLinks style="hidden lg:flex items-center justify-center gap-8 text-lg font-medium text-zinc-200" />
      </div>
    </header>
  );
}
