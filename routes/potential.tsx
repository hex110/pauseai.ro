import { PageProps } from "$fresh/server.ts";

export default function Potential(_props: PageProps) {
  return (
    <div class="min-h-screen">
      <main class="max-w-6xl mx-auto px-4 py-16 space-y-24">
        {/* Hero Section */}
        <section class="text-center space-y-8">
          <h1 class="text-5xl font-bold">
            Potențialul AI pentru Binele Umanității
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Când este dezvoltată în siguranță și cu control democratic,
            Inteligența Artificială poate aduce beneficii extraordinare
            societății noastre.
          </p>
        </section>

        {/* Key Areas */}
        <section class="space-y-12">
          <h2 class="text-3xl font-bold">Domenii Cheie de Impact</h2>

          <div class="grid md:grid-cols-2 gap-8">
            <div class="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 class="text-2xl font-bold">Sănătate și Medicină</h3>
              <p class="text-gray-600">
                AI poate revoluționa diagnosticarea bolilor, dezvoltarea de
                medicamente și tratamente personalizate. Poate ajuta la
                prevenirea pandemiilor și la îmbunătățirea accesului la
                îngrijiri medicale de calitate.
              </p>
              <ul class="space-y-2 text-gray-600">
                <li class="flex gap-3">
                  <span class="text-accent">•</span>
                  <span>Diagnostic mai rapid și mai precis</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-accent">•</span>
                  <span>Descoperirea de noi medicamente</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-accent">•</span>
                  <span>Monitorizare și prevenție îmbunătățită</span>
                </li>
              </ul>
            </div>

            <div class="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 class="text-2xl font-bold">Educație și Cercetare</h3>
              <p class="text-gray-600">
                AI poate personaliza experiența de învățare pentru fiecare
                student și poate accelera descoperirile științifice în toate
                domeniile.
              </p>
              <ul class="space-y-2 text-gray-600">
                <li class="flex gap-3">
                  <span class="text-accent">•</span>
                  <span>Învățare adaptivă personalizată</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-accent">•</span>
                  <span>Accelerarea cercetării științifice</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-accent">•</span>
                  <span>Acces îmbunătățit la educație</span>
                </li>
              </ul>
            </div>

            <div class="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 class="text-2xl font-bold">Sustenabilitate și Mediu</h3>
              <p class="text-gray-600">
                AI poate ajuta la combaterea schimbărilor climatice, optimizarea
                consumului de energie și protejarea biodiversității.
              </p>
              <ul class="space-y-2 text-gray-600">
                <li class="flex gap-3">
                  <span class="text-accent">•</span>
                  <span>Optimizarea consumului de energie</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-accent">•</span>
                  <span>Monitorizarea ecosistemelor</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-accent">•</span>
                  <span>Dezvoltarea de tehnologii verzi</span>
                </li>
              </ul>
            </div>

            <div class="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 class="text-2xl font-bold">Progres Scientific</h3>
              <p class="text-gray-600">
                AI poate accelera descoperirile în fizică, biologie, astronomie
                și alte domenii științifice, ajutându-ne să înțelegem mai bine
                universul.
              </p>
              <ul class="space-y-2 text-gray-600">
                <li class="flex gap-3">
                  <span class="text-accent">•</span>
                  <span>Modelarea fenomenelor complexe</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-accent">•</span>
                  <span>Analiza datelor științifice</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-accent">•</span>
                  <span>Accelerarea experimentelor</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Safety Matters */}
        <section class="space-y-8 bg-gray-50 p-12 rounded-2xl">
          <h2 class="text-3xl font-bold">De Ce Este Importantă Siguranța</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="space-y-4">
              <p class="text-gray-600">
                Pentru a realiza acest potențial extraordinar, trebuie să ne
                asigurăm că dezvoltarea AI este făcută în mod responsabil și
                sigur. Acest lucru înseamnă:
              </p>
              <ul class="space-y-2 text-gray-600">
                <li class="flex gap-3">
                  <span class="text-accent">→</span>
                  <span>Aliniere cu valorile umane</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-accent">→</span>
                  <span>Control democratic și transparență</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-accent">→</span>
                  <span>Distribuție echitabilă a beneficiilor</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-accent">→</span>
                  <span>Protecția drepturilor și libertăților</span>
                </li>
              </ul>
            </div>
            <div class="space-y-4">
              <p class="text-gray-600">
                O pauză în dezvoltarea modelelor avansate de AI ne va permite
                să:
              </p>
              <ul class="space-y-2 text-gray-600">
                <li class="flex gap-3">
                  <span class="text-accent">→</span>
                  <span>Dezvoltăm sisteme robuste de siguranță</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-accent">→</span>
                  <span>Creăm cadre de reglementare adecvate</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-accent">→</span>
                  <span>Evaluăm și gestionăm riscurile</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-accent">→</span>
                  <span>Asigurăm beneficii pentru întreaga societate</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section class="text-center space-y-8">
          <h2 class="text-3xl font-bold">Construiește Viitorul cu Noi</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Împreună putem asigura că potențialul extraordinar al AI este
            realizat în beneficiul întregii umanități, într-un mod sigur și
            echitabil.
          </p>
          <div class="flex gap-4 justify-center">
            <a
              href="/actiune"
              class="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Implică-te
            </a>
            <a
              href="/riscuri"
              class="inline-block border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent/10 transition-colors"
            >
              Vezi Riscurile
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
