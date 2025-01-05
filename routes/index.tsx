import { PageProps } from "$fresh/server.ts";

export default function Home(_props: PageProps) {
  return (
    <div class="min-h-screen">
      <main class="max-w-6xl mx-auto px-4 py-16 space-y-24">
        {/* Hero Section */}
        <section class="text-center space-y-8">
          <h1 class="text-5xl font-bold">
            Să oprim dezvoltarea AI până când o putem face în siguranță
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Inteligența Artificială avansează rapid, aducând atât oportunități
            cât și riscuri semnificative. Este timpul să acționăm pentru a ne
            asigura că această tehnologie servește umanitatea, nu o pune în
            pericol.
          </p>
          <div class="flex gap-4 justify-center">
            <a
              href="/actiune"
              class="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Implică-te
            </a>
            <a
              href="/riscuri"
              class="border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent/10 transition-colors"
            >
              Află riscurile
            </a>
          </div>
        </section>

        {/* Key Points */}
        <section class="grid md:grid-cols-3 gap-12">
          <div class="space-y-4">
            <h3 class="text-2xl font-bold">Riscuri Prezente</h3>
            <p class="text-gray-600">
              De la dezinformare și polarizare socială până la pierderea
              locurilor de muncă și probleme de securitate - AI are deja un
              impact semnificativ asupra societății noastre.
            </p>
          </div>
          <div class="space-y-4">
            <h3 class="text-2xl font-bold">Riscuri Viitoare</h3>
            <p class="text-gray-600">
              Dezvoltarea necontrolată a AI poate duce la probleme și mai grave:
              arme autonome, concentrarea puterii, și posibile riscuri
              existențiale pentru umanitate.
            </p>
          </div>
          <div class="space-y-4">
            <h3 class="text-2xl font-bold">Acțiune Colectivă</h3>
            <p class="text-gray-600">
              Împreună putem cere o pauză în dezvoltarea modelelor AI avansate
              până când avem sisteme de siguranță adecvate și control
              democratic.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section class="text-center space-y-8 bg-gray-50 p-12 rounded-2xl">
          <h2 class="text-3xl font-bold">Alătură-te mișcării</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Fie că ești dezvoltator, activist, sau doar îți pasă de viitorul
            nostru, avem nevoie de tine. Împreună putem face diferența.
          </p>
          <a
            href="/actiune"
            class="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Vezi cum poți ajuta
          </a>
        </section>
      </main>
    </div>
  );
}
