const SITE_URL = "https://sanggarputrasatrialaras.id";

const upsertMeta = (selector, attribute, content) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, selector.match(/"(.+?)"/)?.[1] ?? "");
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

export const setSeo = ({ title, description, path = "/" }) => {
  const url = `${SITE_URL}${path}`;

  document.title = title;
  upsertMeta('meta[name="description"]', "name", description);
  upsertMeta('meta[property="og:title"]', "property", title);
  upsertMeta('meta[property="og:description"]', "property", description);
  upsertMeta('meta[property="og:url"]', "property", url);
  upsertMeta('meta[name="twitter:title"]', "name", title);
  upsertMeta('meta[name="twitter:description"]', "name", description);

  let canonical = document.head.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
};
