import { site } from "../content";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    url: site.url,
    email: `mailto:${site.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santo Domingo Este",
      addressCountry: "DO",
    },
    sameAs: [site.linkedin, site.github],
    knowsLanguage: ["en", "es"],
    description: site.description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
