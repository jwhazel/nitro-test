export default eventHandler(async (event) => {
  const fileName = getRouterParam(event, "fileName");
  const file = await useStorage("assets:filez").getItem(fileName);

  return {
    fileName,
    isArrayBuffer: ArrayBuffer.isView(file),
    fileContents: file
  };
});
