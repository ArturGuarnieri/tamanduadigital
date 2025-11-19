import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings } from "lucide-react";

export default function MenuLinks({ style }: { style: string }) {
  return (
    <nav className={style}>
      <Link
        className="hover:text-zinc-50 hover:underline underline-offset-2 transition-opacity"
        href="/"
      >
        home
      </Link>
      <Link
        className="hover:text-zinc-50 hover:underline underline-offset-2 transition-opacity"
        href="/services"
      >
        our services
      </Link>
      <Link
        className="hover:text-zinc-50 hover:underline underline-offset-2 transition-opacity"
        href="/who-we-are"
      >
        who we are
      </Link>
      <Link
        className="hover:text-zinc-50 hover:underline underline-offset-2 transition-opacity"
        href="/contact-us"
      >
        contact us
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Settings />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Settings</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>English</DropdownMenuItem>
          <DropdownMenuItem>Portuguese</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Dark</DropdownMenuItem>
          <DropdownMenuItem>Light</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
