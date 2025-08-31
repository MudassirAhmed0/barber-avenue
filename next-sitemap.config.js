const { default: axios } = require("axios");
require("dotenv").config();

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_FRONTEND_URL, // Replace with your domain
  generateRobotsTxt: true,
  //   exclude: ["/admin", "/api/*"], // Exclude paths as needed
  sitemapSize: 9999999, // Ensures all URLs fit into a single file
  generateIndexSitemap: false, // Prevents `sitemapindex.xml` from being created

  additionalPaths: async (config) => {
    const locales = ["", "ar"]; // Add your supported locales
    const dynamicRoutes = await fetchDynamicRoutes();
    console.log(dynamicRoutes);
    // Generate localized paths
    return dynamicRoutes.flatMap((route) => {
      return locales.map((locale) => ({
        loc: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/${
          locale ? locale + "/" : ""
        }${route}`, // e.g., /en/post/1 or /ar/post/1
        changefreq: "daily",
        priority: 0.8,
      }));
    });
  },
};

// Simulated dynamic route fetching (adjust for your API or data source)
async function fetchDynamicRoutes() {
  const pagesData = await fetchAllPages();
  //   console.log(pagesData.data?.data?.pages?.data);
  const pages = pagesData.data?.data?.pages?.data;

  let slugs = [];
  pages.forEach((page) => {
    slugs.push(page.url);
  });

  return slugs;
}

async function fetchAllPages() {
  const pagesQuery = `
    query AllPages {
      pages: entries(collection: "pages", site: "english") {
        data {
          slug
          url
        }
      }
    }
  `;

  return await axiosDataFetcher(pagesQuery);
}

async function axiosDataFetcher(query) {
  const reqData = JSON.stringify({
    query: query,
  });
  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
    headers: {
      "Content-Type": "application/json",
    },
    data: reqData,
  };
  const data = await axios.request(config);
  return data;
}
module.exports = config;
