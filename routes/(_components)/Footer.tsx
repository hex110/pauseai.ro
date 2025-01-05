export default function Footer() {
  return (
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <h3 class="text-xl font-bold mb-4 text-accent">PauseAI România</h3>
        <p class="text-gray-300">
          Împreună pentru un viitor sigur cu AI
        </p>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-4 text-accent">Link-uri Rapide</h3>
        <ul class="space-y-3">
          <li>
            <a
              href="/riscuri"
              class="text-gray-300 hover:text-accent transition-colors"
            >
              Riscuri
            </a>
          </li>
          <li>
            <a
              href="/actiune"
              class="text-gray-300 hover:text-accent transition-colors"
            >
              Acțiune
            </a>
          </li>
          <li>
            <a
              href="/potential"
              class="text-gray-300 hover:text-accent transition-colors"
            >
              Potențial
            </a>
          </li>
          <li>
            <a
              href="/despre"
              class="text-gray-300 hover:text-accent transition-colors"
            >
              Despre
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-4 text-accent">Contact</h3>
        <ul class="space-y-3">
          <li>
            <a
              href="mailto:contact@pauseai.ro"
              class="text-gray-300 hover:text-accent transition-colors inline-flex items-center"
            >
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              contact@pauseai.ro
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/pauseairo"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-300 hover:text-accent transition-colors inline-flex items-center"
            >
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
