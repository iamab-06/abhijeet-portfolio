import type { Metadata } from "next";
import { portfolioData } from "../data/portfolioData";

export const siteConfig: Metadata = {
  title: portfolioData.seo.title,
  description: portfolioData.seo.description,
  keywords: portfolioData.seo.keywords,
  authors: portfolioData.seo.authors,
} as const;
