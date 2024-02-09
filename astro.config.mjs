import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://lucaskoyama-astronaut.netlify.app/about/",
  integrations: [preact()],
  prefetch: { prefetchAll: true } // Project using View Transitions make prefetch enabled by default, but I've inserted this for learning purposes
});