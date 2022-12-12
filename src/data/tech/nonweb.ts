import {
  techUnityE,
  techAndroidE,
  techUMLE,
  techEtcE,
  techNonDevE,
} from "./nonweb/nonwebe";
import {
  techUnityJ,
  techAndroidJ,
  techUMLJ,
  techEtcJ,
  techNonDevJ,
} from "./nonweb/nonwebj";
import {
  techUnityK,
  techAndroidK,
  techUMLK,
  techEtcK,
  techNonDevK,
} from "./nonweb/nonwebk";
import type { TechItem } from "./techItem";

export const techNonWeb: TechItem = {
  title: "Non-Web",
  details: {
    ko: [techUnityK, techAndroidK, techUMLK, techEtcK, techNonDevK],
    en: [techUnityE, techAndroidE, techUMLE, techEtcE, techNonDevE],
    jp: [techUnityJ, techAndroidJ, techUMLJ, techEtcJ, techNonDevJ],
  },
};
