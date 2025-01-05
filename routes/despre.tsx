import { PageProps } from "$fresh/server.ts";

export default function About(_props: PageProps) {
  return (
    <div class="min-h-screen">
      <main class="max-w-6xl mx-auto px-4 py-16 space-y-24">
        {/* Hero Section */}
        <section class="text-center space-y-8">
          <h1 class="text-5xl font-bold">
            Despre PauseAI
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Suntem o mișcare globală care militează pentru dezvoltarea sigură și
            responsabilă a Inteligenței Artificiale, sub control democratic.
          </p>
        </section>

        {/* Mission */}
        <section class="space-y-8">
          <h2 class="text-3xl font-bold">Misiunea Noastră</h2>
          <div class="grid md:grid-cols-2 gap-12">
            <div class="space-y-6">
              <p class="text-gray-600">
                Obiectivul nostru este să oprim temporar dezvoltarea modelelor
                AI avansate până când putem asigura că această tehnologie este
                dezvoltată în siguranță și în beneficiul întregii umanități.
              </p>
              <p class="text-gray-600">
                Credem că dezvoltarea AI trebuie să fie ghidată de principii
                etice clare și să fie supusă unui control democratic real, nu
                dictată exclusiv de interesele comerciale ale câtorva companii.
              </p>
            </div>
            <div class="space-y-4">
              <div class="flex gap-3 items-start">
                <span class="text-accent text-xl">→</span>
                <div>
                  <h3 class="font-bold">Oprirea Dezvoltării Necontrolate</h3>
                  <p class="text-gray-600">
                    Susținem o pauză globală în dezvoltarea modelelor AI
                    avansate
                  </p>
                </div>
              </div>
              <div class="flex gap-3 items-start">
                <span class="text-accent text-xl">→</span>
                <div>
                  <h3 class="font-bold">
                    Implementarea Măsurilor de Siguranță
                  </h3>
                  <p class="text-gray-600">
                    Dezvoltarea sistemelor de verificare și control
                  </p>
                </div>
              </div>
              <div class="flex gap-3 items-start">
                <span class="text-accent text-xl">→</span>
                <div>
                  <h3 class="font-bold">Control Democratic</h3>
                  <p class="text-gray-600">
                    Asigurarea supravegherii publice asupra dezvoltării AI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section class="space-y-12">
          <h2 class="text-3xl font-bold">Valorile Noastre</h2>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="space-y-4 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 class="text-2xl font-bold">Umanitatea Primul</h3>
              <p class="text-gray-600">
                Credem că AI trebuie dezvoltat într-un mod care beneficiază
                umanitatea, sau deloc. Prioritizăm binele comun înaintea
                profitului.
              </p>
            </div>

            <div class="space-y-4 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 class="text-2xl font-bold">Comunitate</h3>
              <p class="text-gray-600">
                Construim o comunitate puternică prin evenimente, întâlniri și
                acțiuni comune. Nu este doar despre activism, ci și despre
                prietenie și apartenență.
              </p>
            </div>

            <div class="space-y-4 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 class="text-2xl font-bold">Transparență</h3>
              <p class="text-gray-600">
                Facem și discutăm lucrurile public și deschis. Întâlnirile sunt
                deschise, iar codul este open source.
              </p>
            </div>

            <div class="space-y-4 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 class="text-2xl font-bold">Onestitate</h3>
              <p class="text-gray-600">
                Spunem ce credem, fără să îndulcim mesajul pentru a-l face mai
                acceptabil. Nu avem conflicte de interese care să ne
                influențeze.
              </p>
            </div>

            <div class="space-y-4 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 class="text-2xl font-bold">Diversitate în Preocupări</h3>
              <p class="text-gray-600">
                Fie că ești îngrijorat de riscurile existențiale sau de impactul
                asupra democrației, suntem uniți în dorința de a opri
                dezvoltarea necontrolată a AI.
              </p>
            </div>

            <div class="space-y-4 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 class="text-2xl font-bold">Acțiune</h3>
              <p class="text-gray-600">
                Suntem orientați spre acțiune. Perfectul este dușmanul binelui.
                Nu ne putem permite luxul de a doar discuta despre probleme.
              </p>
            </div>
          </div>
        </section>

        {/* Join Us */}
        <section class="text-center space-y-8 bg-gray-50 p-12 rounded-2xl">
          <h2 class="text-3xl font-bold">Alătură-te Mișcării</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Fiecare voce și fiecare acțiune contează. Împreună putem asigura că
            dezvoltarea AI servește interesele întregii umanități.
          </p>
          <div class="flex gap-4 justify-center">
            <a
              href="/actiune"
              class="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Implică-te
            </a>
            <a
              href="https://discord.gg/2XXWXvErfA"
              target="_blank"
              rel="noopener"
              class="inline-block border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent/10 transition-colors"
            >
              Intră pe Discord
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
