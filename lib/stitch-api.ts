// lib/stitch-api.ts
// Mock data structure for the Google Stitch "Artisanal Cannabis Heritage Reserve" project

export interface StitchProjectData {
  id: string;
  name: string;
  theme: {
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
    textColor: string;
  };
  content: {
    heroTitle: string;
    heroSubtitle: string;
    aboutText: string;
  };
}

export async function fetchStitchData(apiKey: string): Promise<StitchProjectData> {
  // TODO: Replace with actual Google Stitch API call when MCP tools/endpoints are available
  // e.g., const response = await fetch(`https://api.stitch.withgoogle.com/v1/projects/...`, { headers: { Authorization: `Bearer ${apiKey}` } });
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: "artisanal-cannabis-heritage-reserve",
        name: "Artisanal Cannabis Heritage Reserve",
        theme: {
          primaryColor: "#1A1A1A",
          secondaryColor: "#C5A059",
          backgroundColor: "#FAF9F6",
          textColor: "#1A1A1A"
        },
        content: {
          heroTitle: "Reserved for the Few.",
          heroSubtitle: "Curated 3.5g Micro-Batches. Nitrogen-sealed in precision aluminum canisters with gold foil and hand-textured linen labels. A standard beyond luxury.",
          aboutText: "The Grove Reserve represents the pinnacle of heritage cannabis cultivation. Every batch is meticulously selected, cured, and preserved to ensure zero terpene degradation."
        }
      });
    }, 500); // simulate network latency
  });
}
