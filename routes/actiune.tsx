import { PageProps } from "$fresh/server.ts";

export default function Action(_props: PageProps) {
  return (
    <div class="min-h-screen">
      <main class="max-w-6xl mx-auto px-4 py-16 space-y-24">
        {/* Hero Section */}
        <section class="text-center space-y-8">
          <h1 class="text-5xl font-bold">
            Implică-te în Mișcare
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            AI nu va deveni mai sigur dacă nu acționăm decisiv pentru a cere
            măsuri de siguranță. Alege o activitate în funcție de interesele și
            abilitățile tale.
          </p>
        </section>

        {/* Main Actions */}
        <section class="space-y-12">
          <h2 class="text-3xl font-bold">Pentru Toată Lumea</h2>

          <div class="grid md:grid-cols-2 gap-8">
            <div class="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 class="text-2xl font-bold">Cere Acțiune Guvernamentală</h3>
              <ul class="space-y-4">
                <li class="flex gap-3">
                  <span class="text-accent">→</span>
                  <span>
                    <strong>Scrie politicienilor</strong>: Email-urile sunt
                    surprinzător de eficiente și necesită relativ puțin efort.
                  </span>
                </li>
                <li class="flex gap-3">
                  <span class="text-accent">→</span>
                  <span>
                    <strong>Sună la birouri legislative</strong>: Pregătește-ți
                    punctele principale înainte de apel pentru a rămâne
                    concentrat pe subiect.
                  </span>
                </li>
                <li class="flex gap-3">
                  <span class="text-accent">→</span>
                  <span>
                    <strong>Participă la proteste</strong>: Alătură-te
                    protestelor existente sau organizează unul nou în orașul
                    tău.
                  </span>
                </li>
              </ul>
            </div>

            <div class="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 class="text-2xl font-bold">Informează Comunitatea</h3>
              <ul class="space-y-4">
                <li class="flex gap-3">
                  <span class="text-accent">→</span>
                  <span>
                    <strong>Distribuie pe social media</strong>: Împărtășește
                    informații despre riscurile AI și cum pot fi abordate.
                  </span>
                </li>
                <li class="flex gap-3">
                  <span class="text-accent">→</span>
                  <span>
                    <strong>Vorbește cu cei din jur</strong>: Discută cu familia
                    și prietenii despre importanța siguranței AI.
                  </span>
                </li>
                <li class="flex gap-3">
                  <span class="text-accent">→</span>
                  <span>
                    <strong>Organizează evenimente</strong>: Creează
                    oportunități pentru discuții și informare în comunitatea ta.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Specific Groups */}
        <section class="space-y-12">
          <h2 class="text-3xl font-bold">Pentru Grupuri Specifice</h2>

          <div class="grid md:grid-cols-2 gap-8">
            <div class="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 class="text-2xl font-bold">Pentru cei din Tech</h3>
              <ul class="space-y-4">
                <li class="flex gap-3">
                  <span class="text-accent">→</span>
                  <span>
                    <strong>Evită dezvoltarea capabilităților</strong>: Nu lucra
                    la proiecte care fac sistemele AI mai puternice fără măsuri
                    de siguranță.
                  </span>
                </li>
                <li class="flex gap-3">
                  <span class="text-accent">→</span>
                  <span>
                    <strong>Discută cu colegii</strong>: Abordează subiectul
                    riscurilor AI la locul de muncă și în comunitatea tech.
                  </span>
                </li>
                <li class="flex gap-3">
                  <span class="text-accent">→</span>
                  <span>
                    <strong>Organizează seminarii</strong>: Prezintă despre
                    siguranța AI în cadrul companiei sau la conferințe.
                  </span>
                </li>
              </ul>
            </div>

            <div class="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 class="text-2xl font-bold">Pentru Decidenți</h3>
              <ul class="space-y-4">
                <li class="flex gap-3">
                  <span class="text-accent">→</span>
                  <span>
                    <strong>Pregătește-te pentru summit-uri</strong>: Formează
                    coaliții pentru împărtășirea informațiilor despre siguranță.
                  </span>
                </li>
                <li class="flex gap-3">
                  <span class="text-accent">→</span>
                  <span>
                    <strong>Stabilește comitete</strong>: Investighează
                    riscurile AI și publică constatările.
                  </span>
                </li>
                <li class="flex gap-3">
                  <span class="text-accent">→</span>
                  <span>
                    <strong>Prioritizează siguranța</strong>: Fă din siguranța
                    AI o prioritate în platforma ta politică.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Join Us */}
        <section class="text-center space-y-8 bg-gray-50 p-12 rounded-2xl">
          <h2 class="text-3xl font-bold">Alătură-te Comunității Noastre</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Împreună suntem mai puternici. Alătură-te comunității noastre pentru
            a te conecta cu alții care împărtășesc aceleași preocupări și pentru
            a amplifica impactul acțiunilor tale.
          </p>
          <div class="flex gap-4 justify-center">
            <a
              href="https://discord.gg/2XXWXvErfA"
              target="_blank"
              rel="noopener"
              class="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Discord
            </a>
            <a
              href="https://linktr.ee/pauseai"
              target="_blank"
              rel="noopener"
              class="inline-block border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent/10 transition-colors"
            >
              Social Media
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
