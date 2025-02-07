import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false, // False to get fresh data
  apiVersion: "2024-01-31", // Latest API version
  token: process.env.NEXT_PUBLIC_SANITY_AUTH_TOKEN, // Use API Token for Auth
});

