import { useEffect, useState } from "react";
import client from "../../sanityClient";

const PageViewDisplay = ({ slug }) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const query = `*[_type == "pageView" && page == $slug][0] { views }`;
        const params = { slug };
        const result = await client.fetch(query, params);
        setViews(result?.views || 0);
      } catch (error) {
        console.error("Error fetching page views:", error);
      }
    };

    fetchViews();
  }, [slug]);

  return (
    <p className="text-xs bg-zinc-900 text-zinc-900">Page Views: {views}</p>
  );
};

export default PageViewDisplay;
