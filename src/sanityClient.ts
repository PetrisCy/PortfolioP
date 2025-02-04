import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "blz37rvi",
  dataset: "production",
  useCdn: true,
  token:
    "skntAahSR35AmW9LjBLDAPZtMY9QvXpMKOFlvrzWgZnM9kJVb3uucspl9h5wEeZAIMSAedeWT36LA8ZmIEcSEtyhq7o5fzBKgxYfltGNVCpGt30kiBh5WPJ3Emj5SNZj9gFx65Au4isrTSMmkE71eOtt0rC8OT0xLCabFrbBZQVaDhg9ewBH",
});

const incrementPageView = async (slug: string) => {
  try {
    // Fetch the pageView document by slug
    const query = `*[_type == "pageView" && page == $slug][0]`;
    const params = { slug };
    const existingPage = await client.fetch(query, params); // Fetch the existing pageView document

    if (existingPage) {
      // If the page exists, increment the view count
      await client
        .patch(existingPage._id)
        .setIfMissing({ views: 0 })
        .inc({ views: 1 })
        .commit();
      console.log("Updated", slug);
    } else {
      // If the page doesn't exist, create a new page view document
      await client.create({
        _type: "pageView",
        page: slug, //
        views: 0,
      });
      console.log("Created new page view document for", slug);
    }
  } catch (error) {
    console.error("Error updating page views:", error);
  }
};

export default client;
export { incrementPageView };
