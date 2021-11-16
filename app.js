import {
  applyPolyfills,
  defineCustomElements,
} from "@enreach/core-component-library/dist/loader";

applyPolyfills().then(() => {
  console.log("applyPolyfills done");

  defineCustomElements();
});

import { BrandLibrary } from "@enreach/brand-library";

new BrandLibrary().setBrand("neutral");
