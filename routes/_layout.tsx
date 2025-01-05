import { defineLayout } from "$fresh/server.ts";
import Navigation from "./(_components)/Navigation.tsx";
import Footer from "./(_components)/Footer.tsx";

export default defineLayout((_req, ctx) => {
  return (
    <div class="flex flex-col min-h-screen">
      <header class="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <Navigation />
      </header>

      <main class="flex-auto w-full">
        <div class="max-w-7xl mx-auto px-4 py-8">
          <ctx.Component />
        </div>
      </main>

      <footer class="bg-black text-white mt-8">
        <div class="max-w-7xl mx-auto px-4 py-12">
          <Footer />
        </div>
      </footer>
    </div>
  );
});
