import { PageProps } from "$fresh/server.ts";
import RiskWheel from "../islands/RiskWheel.tsx";

export default function Risks(_props: PageProps) {
  return (
    <div class="min-h-screen">
      <main class="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <section class="text-center space-y-8 mb-12">
          <h1 class="text-5xl font-bold">
            Riscurile Inteligenței Artificiale
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            AI este o tehnologie puternică care transformă rapid lumea noastră.
            Are un potențial extraordinar, dar și riscuri semnificative care
            trebuie abordate.
          </p>
        </section>

        {/* Risk Wheel */}
        <section>
          <RiskWheel />
        </section>

        {/* Present Risks */}
        <section class="space-y-12 mt-12">
          <h2 class="text-3xl font-bold">Riscuri Prezente</h2>

          <div class="grid md:grid-cols-2 gap-8">
            <div class="space-y-4">
              <h3 class="text-2xl font-bold">Dezinformare și Polarizare</h3>
              <p class="text-gray-600">
                Sistemele AI pot crea conținut fals indistinct de cel real -
                imagini, videoclipuri, text și audio. Acest lucru amenință
                încrederea în informație și poate duce la polarizare socială
                extremă.
              </p>
              <p class="text-sm text-gray-500 italic">
                "Existența deepfake-urilor convingătoare distruge încrederea. O
                imagine reală poate fi numită generată de AI, și oamenii vor
                crede asta."
              </p>
            </div>

            <div class="space-y-4">
              <h3 class="text-2xl font-bold">Pierderea Locurilor de Muncă</h3>
              <p class="text-gray-600">
                AI nu înlocuiește doar munca fizică, ci și cea intelectuală.
                Multe profesii pot deveni redundante, ducând la instabilitate
                economică și inegalitate socială dacă nu suntem pregătiți.
              </p>
              <p class="text-sm text-gray-500 italic">
                "Cei care dețin aceste sisteme AI vor putea să profite de ele,
                dar cei care își pierd locurile de muncă în favoarea lor nu vor
                beneficia."
              </p>
            </div>

            <div class="space-y-4">
              <h3 class="text-2xl font-bold">Arme Autonome</h3>
              <p class="text-gray-600">
                Companiile dezvoltă deja arme controlate de AI. O nouă cursă a
                înarmării a început, iar presiunea de a da mașinilor puterea de
                decizie crește.
              </p>
              <p class="text-sm text-gray-500 italic">
                "Viteza cu care AI poate procesa informații și lua decizii poate
                duce la escaladarea conflictelor în minute."
              </p>
            </div>

            <div class="space-y-4">
              <h3 class="text-2xl font-bold">
                Securitate și Confidențialitate
              </h3>
              <p class="text-gray-600">
                AI poate analiza cantități mari de date pentru a găsi informații
                personale. Poate fi folosit pentru urmărire, șantaj sau
                manipulare la scară largă.
              </p>
              <p class="text-sm text-gray-500 italic">
                "Conectarea punctelor este dificilă și consumă timp, dar AI
                poate face acest lucru mult mai ieftin și eficient."
              </p>
            </div>
          </div>
        </section>

        {/* Future Risks */}
        <section class="space-y-12">
          <h2 class="text-3xl font-bold">Riscuri Viitoare</h2>

          <div class="grid md:grid-cols-2 gap-8">
            <div class="space-y-4">
              <h3 class="text-2xl font-bold">Risc Existențial</h3>
              <p class="text-gray-600">
                Mulți cercetători avertizează că AI ar putea duce la sfârșitul
                umanității. Crearea unor sisteme superinteligente fără aliniere
                perfectă cu valorile umane reprezintă un risc existențial.
              </p>
            </div>

            <div class="space-y-4">
              <h3 class="text-2xl font-bold">Concentrarea Puterii</h3>
              <p class="text-gray-600">
                Modelele AI puternice pot fi folosite pentru a obține și mai
                multă putere. Acest ciclu poate duce la concentrarea unei
                cantități nesănătoase de putere în mâinile câtorva companii sau
                guverne.
              </p>
            </div>

            <div class="space-y-4">
              <h3 class="text-2xl font-bold">Pierderea Controlului Uman</h3>
              <p class="text-gray-600">
                Chiar și cu sisteme AI individuale controlabile, am putea pierde
                treptat puterea de a lua decizii importante pe măsură ce acestea
                sunt încorporate în instituții și viața de zi cu zi.
              </p>
            </div>

            <div class="space-y-4">
              <h3 class="text-2xl font-bold">Arme Biologice</h3>
              <p class="text-gray-600">
                AI poate face cunoștințele despre arme biologice mai accesibile
                și poate ajuta la proiectarea unor noi agenți patogeni. Costul
                dezvoltării armelor biologice scade dramatic datorită AI.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section class="text-center space-y-8 bg-gray-50 p-12 rounded-2xl">
          <h2 class="text-3xl font-bold">Ce Putem Face?</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Pentru toate problemele discutate mai sus, riscul crește odată cu
            îmbunătățirea capacităților AI. Cel mai sigur lucru de făcut acum
            este să încetinim dezvoltarea sistemelor AI mai puternice până când
            am găsit modalități de a gestiona riscurile.
          </p>
          <a
            href="/actiune"
            class="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Implică-te
          </a>
        </section>
      </main>
    </div>
  );
}
