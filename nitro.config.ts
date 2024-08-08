//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  serverAssets: [
    {
      baseName: "filez",
      dir: "../filez",
    },
  ],
});
