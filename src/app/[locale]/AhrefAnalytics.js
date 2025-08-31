"use client";

import Script from "next/script";

const AhrefAnalytics = () => {
  //You can show in the console the GA_TRACKING_ID to confirm

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://analytics.ahrefs.com/analytics.js`}
        data-key={"EsARW3AAQeBn67AEKyPSPw"}
        async
      />
      <Script
        id="ld-json"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `{
 "@context": "https://schema.org/",
 "@type": "WebSite",
 "name": "maaden",
 "url": "https://maaden-dev.vercel.app/",
 "potentialAction": {
 "@type": "SearchAction",
 "target": "{search_term_string}",
 "query-input": "required name=search_term_string"
 }
} `,
        }}
      />
      <Script
        id="ahref-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                      var ahrefs_analytics_script = document.createElement('script');
  ahrefs_analytics_script.async = true;
  ahrefs_analytics_script.src = 'https://analytics.ahrefs.com/analytics.js';
  ahrefs_analytics_script.setAttribute('data-key', 'EsARW3AAQeBn67AEKyPSPw');
  document.getElementsByTagName('head')[0].appendChild(ahrefs_analytics_script);
          
          `,
        }}
      />
    </>
  );
};

export default AhrefAnalytics;
