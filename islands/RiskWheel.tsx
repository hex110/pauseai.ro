/**
 * RiskWheel Component Documentation
 *
 * State Management:
 * - selectedCategory: Controls what content is displayed in the right panel
 * - activeSegment: Controls visual state of segments (color, scale). Separated from selectedCategory to allow smooth animations
 * - isInitialView: Controls wheel position (centered vs left)
 * - showContent: Controls right panel visibility
 * - hasInteracted: Prevents initial animation when page loads
 *
 * Animation Timing Issues & Solutions:
 * 1. Initial Load Animation:
 *    - Issue: Wheel would animate from right on page load
 *    - Solution: Added hasInteracted signal and 'transition-none' class initially
 *
 * 2. Right Panel Fade:
 *    - Issue: Content would disappear before fade animation completed
 *    - Solution: Separated content unmounting (selectedCategory) from visibility (showContent)
 *    - Content stays mounted during fade out, only unmounts after animation
 *
 * 3. Segment Color Transition:
 *    - Issue: Color would change after wheel position animation
 *    - Solution: Separated activeSegment from selectedCategory
 *    - Both states change immediately, only content cleanup is delayed
 *
 * Text Positioning & Scaling:
 * 1. Multi-line vs Single-line:
 *    - Multi-line text uses two tspan elements with dy="0" and dy="1.2em"
 *    - Single-line text uses one tspan with dy="0.6em" to center vertically
 *
 * 2. X-Position:
 *    - Must be set on tspan elements, not just the text element
 *    - Different x values for left/right vs top/bottom segments
 *    - Current values: "360" for bottom/left, "340" for top/right
 *
 * 3. Scale & Position Compensation:
 *    - Default scale is 1.2
 *    - Selected scale is 1.5
 *    - When scaling up, text needs position compensation to prevent unwanted movement
 *    - Each segment needs different translation values due to rotation:
 *      Top: translateY(-12px) translateX(10px)
 *      Right: translateY(12px) translateX(10px)
 *      Bottom: translateY(12px) translateX(-10px)
 *      Left: translateY(-12px) translateX(-10px)
 *
 * Container Sizing:
 * - Wheel container must be 900px tall to accommodate 1.5x scale of 600px wheel
 * - This prevents layout shifts during animations
 *
 * Common Pitfalls to Avoid:
 * 1. Don't mix content state (selectedCategory) with visual state (activeSegment)
 * 2. Don't unmount content before animations complete
 * 3. Don't forget to update both tspan x values when adjusting text position
 * 4. Remember transform origin affects how scaling behaves
 * 5. Scale transformations need translation compensation to maintain position
 *
 * Future Improvements:
 * - Could add mobile responsiveness
 * - Could add keyboard navigation
 * - Could optimize performance by using CSS custom properties for dynamic values
 *
 * Mobile Implementation:
 * - Uses isMobile signal (triggers at < 768px)
 * - Completely different layout for mobile vs desktop
 * - Mobile shows a simple stacked card layout
 * - Each card contains:
 *   * Category title
 *   * Description
 *   * Subcategories list
 *   * Expert quote (if available)
 * - Maintains consistent styling with desktop panel
 * - No animations or interactions on mobile (yet)
 *
 * Possible Future Mobile Implementations:
 * 1. Swipeable Wheel:
 *    - Convert wheel to touch-friendly rotating carousel
 *    - Swipe left/right to rotate between segments
 *    - Active segment expands to show details
 *    - Use touch gestures for natural interaction
 *
 * 2. Vertical Accordion:
 *    - Keep current card layout but add interactivity
 *    - Cards start collapsed showing only titles
 *    - Tap to expand/collapse with smooth animation
 *    - Only one card expanded at a time
 *    - Animated indicator showing current selection
 *
 * 3. Mini Wheel + Panel:
 *    - Smaller version of desktop wheel at top
 *    - Wheel scales to fit mobile width
 *    - Tapping segments shows panel below
 *    - Panel slides up from bottom
 *    - Maintains desktop interaction model but optimized for touch
 */

import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface RiskCategory {
  id: string;
  title: string;
  description: string;
  subCategories: {
    title: string;
    description: string;
  }[];
  expertQuote?: {
    text: string;
    author: string;
  };
}

const riskCategories: RiskCategory[] = [
  {
    id: "societal",
    title: "Impactul Social",
    description: "Efectele AI asupra structurii și funcționării societății",
    subCategories: [
      {
        title: "Dislocarea Locurilor de Muncă",
        description: "Automatizarea și impactul asupra pieței muncii",
      },
      {
        title: "Instabilitate Economică",
        description: "Schimbări rapide în economie și inegalități",
      },
      {
        title: "Schimbări Structurale",
        description: "Transformări în relațiile și normele sociale",
      },
    ],
    expertQuote: {
      text:
        "Trebuie să ne pregătim pentru o transformare fundamentală a pieței muncii și să adaptăm sistemele noastre sociale.",
      author: "Dr. Ana Popescu, Sociolog",
    },
  },
  {
    id: "information",
    title: "Integritatea Informației",
    description: "Riscuri legate de manipularea și dezinformarea digitală",
    subCategories: [
      {
        title: "Deep Fakes",
        description: "Conținut sintetic indistinctibil de realitate",
      },
      {
        title: "Dezinformare în Masă",
        description: "Răspândirea rapidă a informațiilor false",
      },
      {
        title: "Interferențe Electorale",
        description: "Manipularea proceselor democratice",
      },
    ],
    expertQuote: {
      text:
        "Capacitatea AI de a genera conținut fals devine din ce în ce mai sofisticată, amenințând bazele discursului public.",
      author: "Prof. Ion Ionescu, Expert în Securitate Cibernetică",
    },
  },
  {
    id: "security",
    title: "Securitate",
    description: "Vulnerabilități și amenințări la adresa siguranței",
    subCategories: [
      {
        title: "Atacuri Cibernetice",
        description: "Sisteme autonome malițioase",
      },
      {
        title: "Încălcări ale Vieții Private",
        description: "Supraveghere și colectare de date",
      },
      {
        title: "Riscuri de Infrastructură",
        description: "Vulnerabilități în sisteme critice",
      },
    ],
    expertQuote: {
      text:
        "AI poate fi folosit atât pentru a proteja, cât și pentru a compromite sistemele noastre de securitate.",
      author: "Maria Dumitrescu, Expert în Securitate Națională",
    },
  },
  {
    id: "control",
    title: "Probleme de Control",
    description: "Provocări în menținerea controlului asupra sistemelor AI",
    subCategories: [
      {
        title: "Probleme de Aliniere",
        description: "Asigurarea comportamentului dorit",
      },
      {
        title: "Imprevizibilitate",
        description: "Decizii și acțiuni neașteptate",
      },
      {
        title: "Concentrarea Puterii",
        description: "Controlul asupra tehnologiei AI",
      },
    ],
    expertQuote: {
      text:
        "Cu cât sistemele AI devin mai complexe, cu atât devine mai dificil să prezicem și să controlăm comportamentul lor.",
      author: "Dr. Radu Popovici, Cercetător în AI",
    },
  },
];

export default function RiskWheel() {
  const selectedCategory = useSignal<string | null>(null);
  const activeSegment = useSignal<string | null>(null);
  const isMobile = useSignal(false);
  const isInitialView = useSignal(true);
  const showContent = useSignal(false);
  const hasInteracted = useSignal(false);

  useEffect(() => {
    if (!IS_BROWSER) return;
    const checkMobile = () => {
      isMobile.value = globalThis.innerWidth < 768;
    };
    checkMobile();
    globalThis.addEventListener("resize", checkMobile);
    return () => globalThis.removeEventListener("resize", checkMobile);
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    if (!hasInteracted.value) hasInteracted.value = true;

    if (selectedCategory.value === categoryId) {
      isInitialView.value = true;
      activeSegment.value = null;
      showContent.value = false;
      setTimeout(() => {
        selectedCategory.value = null;
      }, 500);
    } else {
      selectedCategory.value = categoryId;
      activeSegment.value = categoryId;
      isInitialView.value = false;
      showContent.value = true;
    }
  };

  return (
    <>
      {isMobile.value
        ? (
          <div class="space-y-8 px-4">
            {riskCategories.map((category) => (
              <div
                key={category.id}
                class="bg-white rounded-lg shadow-lg p-6 space-y-6 border-l-4 border-accent"
              >
                <h2 class="text-2xl font-bold mb-4">
                  {category.title}
                </h2>
                <p class="text-gray-600 mb-6">
                  {category.description}
                </p>

                <div class="space-y-6">
                  {category.subCategories.map((sub) => (
                    <div key={sub.title}>
                      <h3 class="font-bold text-lg mb-2">{sub.title}</h3>
                      <p class="text-gray-600">{sub.description}</p>
                    </div>
                  ))}
                </div>

                {category.expertQuote && (
                  <blockquote class="border-l-4 border-accent pl-4 italic bg-gray-50 p-4 rounded-r-lg mt-6">
                    <p class="mb-2">{category.expertQuote.text}</p>
                    <footer class="text-sm text-gray-600">
                      — {category.expertQuote.author}
                    </footer>
                  </blockquote>
                )}
              </div>
            ))}
          </div>
        )
        : (
          <div class="relative h-[900px] flex items-center justify-center">
            <div
              class={`transition-all duration-500 absolute ${
                !hasInteracted.value ? "transition-none" : "ease-in-out"
              } ${
                isInitialView.value
                  ? "left-1/2 -translate-x-1/2 scale-150"
                  : "left-0 -translate-x-32 scale-100"
              }`}
              style={{
                width: "600px",
                height: "600px",
              }}
            >
              <svg
                viewBox="0 0 500 500"
                class="w-full h-full"
              >
                <defs>
                  <path
                    id="segment"
                    d="M 250 250 L 250 50 A 200 200 0 0 1 450 250 L 250 250"
                    class="transition-colors duration-300"
                  />
                </defs>

                <circle
                  cx="250"
                  cy="250"
                  r="200"
                  class="fill-white stroke-accent stroke-2"
                />

                {riskCategories.map((category, index) => {
                  const _isSelected = selectedCategory.value === category.id;

                  return (
                    <g
                      key={category.id}
                      transform={`rotate(${index * 90} 250 250)`}
                      class="cursor-pointer group"
                      onClick={() => handleCategoryClick(category.id)}
                    >
                      <use
                        href="#segment"
                        class={`transition-all duration-300 ease-in-out ${
                          activeSegment.value === category.id
                            ? "fill-accent stroke-accent"
                            : "fill-white stroke-accent group-hover:fill-accent/10"
                        }`}
                        style={{
                          transformOrigin: "250px 250px",
                          transform: activeSegment.value === category.id
                            ? "scale(1.1)"
                            : "scale(1)",
                        }}
                      />
                      <text
                        y={index === 0 || index === 3 ? "175" : "110"}
                        text-anchor="middle"
                        dominant-baseline="middle"
                        style={{
                          transformOrigin: "350px 150px",
                          transform: activeSegment.value === category.id
                            ? `scale(1.5) rotate(-${index * 90}deg) ${
                              index === 0
                                ? "translateY(-12px) translateX(10px)"
                                : index === 1
                                ? "translateY(12px) translateX(10px)"
                                : index === 2
                                ? "translateY(12px) translateX(-10px)"
                                : "translateY(-12px) translateX(-10px)"
                            }`
                            : `scale(1.2) rotate(-${index * 90}deg)`,
                          transition: "transform 300ms ease-in-out",
                        }}
                        class={`text-md font-bold pointer-events-none transition-colors duration-300 ${
                          activeSegment.value === category.id
                            ? "fill-white"
                            : "fill-gray-900"
                        }`}
                      >
                        {(() => {
                          const xPos = index === 2 || index === 3
                            ? "360"
                            : "340"; // Bottom segment gets 500, others get 340
                          return category.title.split(" ").length === 1
                            ? (
                              <tspan x={xPos} dy="0.6em">
                                {category.title}
                              </tspan>
                            )
                            : (
                              <>
                                <tspan x={xPos} dy="0">
                                  {category.title.split(" ")[0]}
                                </tspan>
                                <tspan x={xPos} dy="1.2em">
                                  {category.title.split(" ").slice(1).join(" ")}
                                </tspan>
                              </>
                            );
                        })()}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            <div
              class={`absolute right-16 transition-opacity duration-500 ease-in-out ${
                !isInitialView.value && showContent.value
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
              style={{
                width: "500px",
              }}
            >
              {selectedCategory.value && (
                <div class="bg-white rounded-lg shadow-lg p-6 space-y-6 border-l-4 border-accent">
                  <h2 class="text-2xl font-bold mb-4">
                    {riskCategories.find((c) => c.id === selectedCategory.value)
                      ?.title}
                  </h2>
                  <p class="text-gray-600 mb-6">
                    {riskCategories.find((c) => c.id === selectedCategory.value)
                      ?.description}
                  </p>

                  {riskCategories.find((c) => c.id === selectedCategory.value)
                    ?.subCategories.map((sub, index) => (
                      <div
                        key={sub.title}
                        class="transform transition-all duration-500"
                        style={{
                          transitionDelay: `${index * 100}ms`,
                        }}
                      >
                        <h3 class="font-bold text-lg mb-2">{sub.title}</h3>
                        <p class="text-gray-600">{sub.description}</p>
                      </div>
                    ))}

                  {riskCategories.find((c) => c.id === selectedCategory.value)
                    ?.expertQuote && (
                    <blockquote class="border-l-4 border-accent pl-4 italic bg-gray-50 p-4 rounded-r-lg">
                      <p class="mb-2">
                        {riskCategories.find((c) =>
                          c.id === selectedCategory.value
                        )?.expertQuote?.text}
                      </p>
                      <footer class="text-sm text-gray-600">
                        — {riskCategories.find((c) =>
                          c.id === selectedCategory.value
                        )?.expertQuote?.author}
                      </footer>
                    </blockquote>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
    </>
  );
}
