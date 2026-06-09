import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://aegisautofilm.ca",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}