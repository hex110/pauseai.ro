import { useSignal } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function MobileMenu() {
  const isOpen = useSignal(false);

  return (
    <div class="relative">
      <button
        onClick={() => IS_BROWSER && (isOpen.value = !isOpen.value)}
        class="p-2 hover:bg-gray-100 rounded-lg"
        aria-label="Menu"
        aria-expanded={isOpen.value}
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen.value
              ? "M6 18L18 6M6 6l12 12"
              : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {isOpen.value && (
        <div class="absolute top-full right-0 w-48 mt-2 py-2 bg-white rounded-lg shadow-lg border border-gray-100">
          <nav class="flex flex-col">
            <a
              href="/"
              class="px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-accent transition-colors font-saira"
              onClick={() => isOpen.value = false}
            >
              Acasă
            </a>
            <a
              href="/riscuri"
              class="px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-accent transition-colors font-saira"
              onClick={() => isOpen.value = false}
            >
              Riscuri
            </a>
            <a
              href="/actiune"
              class="px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-accent transition-colors font-saira"
              onClick={() => isOpen.value = false}
            >
              Acțiune
            </a>
            <a
              href="/potential"
              class="px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-accent transition-colors font-saira"
              onClick={() => isOpen.value = false}
            >
              Potențial
            </a>
            <a
              href="/despre"
              class="px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-accent transition-colors font-saira"
              onClick={() => isOpen.value = false}
            >
              Despre
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
