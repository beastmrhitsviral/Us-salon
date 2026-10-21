import { useEffect } from "react";

interface PageSEOProps {
  title: string;
  description: string;
}

export function PageSEO({ title, description }: PageSEOProps) {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Update og:title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    }

    // Update og:description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute("content", description);
    }

    // Scroll to top on page navigation
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [title, description]);

  return null;
}
