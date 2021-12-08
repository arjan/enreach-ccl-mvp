import "@enreach/core-component-library/dist/collection/global/main.css";

import {
  applyPolyfills,
  defineCustomElements,
} from "@enreach/core-component-library/dist/loader";

import { BrandLibrary } from "@enreach/brand-library";

applyPolyfills().then(() => {
  console.log("applyPolyfills done");

  defineCustomElements();

  new BrandLibrary().setBrand("Enreach");
});
