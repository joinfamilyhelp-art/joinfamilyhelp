import("./.output/server/index.mjs").catch((error) => {
  console.error("Fallo al arrancar el servidor nitro:", error);
  process.exit(1);
});
