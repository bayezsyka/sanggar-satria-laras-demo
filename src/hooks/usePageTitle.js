import { useEffect } from "react";
import { seoData } from "../constants/seoData";
import { setSeo } from "../lib/seo";

export const usePageTitle = (key) => {
  useEffect(() => {
    setSeo(seoData[key] ?? seoData.default);
  }, [key]);
};
