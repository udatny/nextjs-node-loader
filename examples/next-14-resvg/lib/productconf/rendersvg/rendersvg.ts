import {Resvg, ResvgRenderOptions} from "@resvg/resvg-js";


export async function rendersvg(encodedModel: string) {
  const emptySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"></svg>`;
  const opts: ResvgRenderOptions = {
    background: "#000000",
    font: {
      loadSystemFonts: false
    },
  };
  const resvg = new Resvg(emptySvg, opts);
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  return pngBuffer;

}
