import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";

export default defineConfig(({ command, mode }) => {
  function viteConfig(mode, config, rollupConfig) {
    let vite_config = config;
    if (mode === "production" && rollupConfig) {
      const build = {
        rollupConfig: rollupConfig,
      };
      vite_config["build"] = build;
    }

    return vite_config;
  }
  const port = 3000;

  console.log(command, mode);

  const env = loadEnv(mode, process.cwd());

  console.log(env.VITE_NAME);

  return viteConfig(mode, {
    build: {
      lib: {
        entry: resolve(__dirname, "lib", "main.js"),
        name: "demo",
        fileName: (format) => `demo.${format}.js`,
      },
    },
  });
});
