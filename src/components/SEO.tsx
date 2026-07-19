import { Helmet } from "react-helmet-async";

const SITE = "https://ahmadrehmani.lovable.app";
const DEFAULT_OG = "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/d35ab3c0-f329-4fcf-b0bd-6072dc3927cf";

type SEOProps = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: "website" | "article" | "profile";
  noindex?: boolean;
  jsonLd?: object | object[];
};

/**
 * Per-route SEO tags — title, description, canonical, OG/Twitter, optional JSON-LD.
 * Does NOT render any visible UI. Safe to add without touching page content.
 */
const SEO = ({ title, description, path, ogImage = DEFAULT_OG, ogType = "website", noindex, jsonLd }: SEOProps) => {
  const url = `${SITE}${path}`;
  const ldArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="North Houston Retina" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {ldArray.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
export { SITE };
