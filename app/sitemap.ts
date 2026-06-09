import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://aegisautofilm.ca",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
        url: "https://aegisautofilm.ca/cybertruck-ppf",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
  ];
}