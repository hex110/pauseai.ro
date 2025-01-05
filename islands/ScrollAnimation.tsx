import { useComputed, useSignal } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface Section {
  id: string;
  title: string;
  description: string;
  illustration: string;
  link: {
    text: string;
    href: string;
  };
}

const sections: Section[] = [
  {
    id: "potential",
    title: "Puterea AI",
    description:
      "Inteligența artificială are potențialul de a rezolva unele dintre cele mai mari provocări ale umanității.",
    illustration: "M 50 50 L 150 50 L 100 150 Z", // Placeholder SVG path
    link: {
      text: "Explorează Potențialul →",
      href: "/potential",
    },
  },
  {
    id: "risks",
    title: "Riscurile",
    description:
      "Dar dezvoltarea nechibzuită poate duce la consecințe grave și ireversibile.",
    illustration: "M 50 50 L 150 50 L 100 150 Z", // Placeholder SVG path
    link: {
      text: "Înțelege Riscurile →",
      href: "/riscuri",
    },
  },
  {
    id: "action",
    title: "Acțiune",
    description:
      "Împreună putem ghida dezvoltarea AI într-o direcție benefică și sigură.",
    illustration: "M 50 50 L 150 50 L 100 150 Z", // Placeholder SVG path
    link: {
      text: "Implică-te →",
      href: "/actiune",
    },
  },
];

export default function ScrollAnimation() {
  const currentSection = useSignal(0);
  const progress = useSignal(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Animation state for the reactor
  const reactorState = useComputed(() => {
    if (currentSection.value === 0) return "normal";
    if (currentSection.value === 1) return "warning";
    return "safe";
  });

  useEffect(() => {
    if (!IS_BROWSER || !containerRef.current) return;

    // Set up intersection observer for each section
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(
              (ref) => ref === entry.target,
            );
            if (index !== -1) {
              currentSection.value = index;
              progress.value = entry.intersectionRatio;
            }
          }
        });
      },
      {
        root: null,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    // Observe each section
    sectionRefs.current.forEach((ref) => {
      if (ref) observerRef.current?.observe(ref);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div ref={containerRef} class="relative">
      {/* Fixed background with reactor illustration */}
      <div class="fixed inset-0 pointer-events-none">
        <svg
          viewBox="0 0 800 600"
          class="w-full h-full opacity-20"
        >
          <g
            class={`transition-transform duration-1000 ${
              reactorState.value === "warning"
                ? "scale-110"
                : reactorState.value === "safe"
                ? "scale-100"
                : ""
            }`}
          >
            {/* Reactor core */}
            <circle
              cx="400"
              cy="300"
              r="50"
              class={`transition-colors duration-1000 ${
                reactorState.value === "warning"
                  ? "fill-red-500"
                  : reactorState.value === "safe"
                  ? "fill-green-500"
                  : "fill-blue-500"
              }`}
            />
            {/* Reactor shell */}
            <circle
              cx="400"
              cy="300"
              r="100"
              class="fill-none stroke-gray-800 stroke-2"
            />
            {/* Cooling towers */}
            <path
              d="M 250 300 Q 300 100 350 300"
              class="fill-none stroke-gray-800 stroke-2"
            />
            <path
              d="M 450 300 Q 500 100 550 300"
              class="fill-none stroke-gray-800 stroke-2"
            />
          </g>
        </svg>
      </div>

      {/* Scrollable content */}
      <div class="relative z-10">
        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            class="min-h-screen flex items-center justify-center p-8"
          >
            <div class="max-w-2xl mx-auto text-center">
              <h2 class="text-4xl font-bold mb-6">{section.title}</h2>
              <p class="text-xl mb-8">{section.description}</p>
              <a
                href={section.link.href}
                class="inline-block bg-accent text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors"
              >
                {section.link.text}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
