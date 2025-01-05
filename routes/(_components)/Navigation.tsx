import { asset as _asset } from "$fresh/runtime.ts";
import MobileMenu from "../../islands/MobileMenu.tsx";

export default function Navigation() {
  return (
    <div class="flex items-center justify-between max-w-7xl mx-auto px-4 py-4">
      <a href="/" class="flex items-center group relative">
        <img
          src="/PauseAI Logo Circle.svg"
          alt="PauseAI Circle Logo"
          class="h-10 w-10 transition-transform duration-250 group-hover:scale-120 absolute"
        />
        <img
          src="/PauseAI Banner without Circle.svg"
          alt="PauseAI"
          class="h-10 ml-2 z-10"
        />
      </a>

      <nav class="hidden md:flex items-center justify-end flex-1 ml-8">
        <div class="flex items-center space-x-12">
          <a
            href="/riscuri"
            class="font-saira hover:text-accent transition-colors py-2"
          >
            Riscuri
          </a>
          <a
            href="/actiune"
            class="font-saira hover:text-accent transition-colors py-2"
          >
            Acțiune
          </a>
          <a
            href="/potential"
            class="font-saira hover:text-accent transition-colors py-2"
          >
            Potențial
          </a>
          <a
            href="/despre"
            class="font-saira hover:text-accent transition-colors py-2"
          >
            Despre
          </a>
        </div>
      </nav>

      <div class="md:hidden">
        <MobileMenu />
      </div>
    </div>
  );
}
