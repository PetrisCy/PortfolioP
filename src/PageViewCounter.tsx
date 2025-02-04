// src/PageViewCounter.tsx
import React, { useEffect, useState } from "react";
import client from "./sanityClient";

const PageViewCounter = ({ slug }: { slug: string }) => {
  const [views, setViews] = useState<number>(0);

  useEffect(() => {
    const fetchViews = async () => {
      const query = `*[_type == "pageView" && page == $slug][0]`;
      const params = { slug };
      const result = await client.fetch(query, params);
      setViews(result?.views || 0);
    };
    fetchViews();
  }, [slug]);

  return (
    <div>
      <p>Page views: {views}</p>
    </div>
  );
};

export default PageViewCounter;
