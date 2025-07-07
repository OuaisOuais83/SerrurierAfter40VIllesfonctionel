import React from "react";
import { Helmet } from "react-helmet";

const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Serrure Minute",
    "description": "Serrurier urgence dans le Var (83) - Intervention 24h/24 et 7j/7",
    "image": "https://images.unsplash.com/photo-1529261233619-6afa28f5da3d",
    "url": "https://serrure-minute-var.com",
    "telephone": "+33786356139",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "135 avenue Victor Hugo",
      "addressLocality": "Fréjus",
      "postalCode": "83600",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.4338,
      "longitude": 6.7363
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "287"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 43.4338,
        "longitude": 6.7363
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de serrurerie",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Ouverture de porte claquée",
          "description": "Intervention urgente pour ouverture de porte claquée sans dégât"
        },
        {
          "@type": "Offer",
          "name": "Serrure bloquée",
          "description": "Dépannage serrure bloquée ou clé cassée"
        },
        {
          "@type": "Offer",
          "name": "Perte de clés",
          "description": "Intervention suite à perte de clés"
        },
        {
          "@type": "Offer",
          "name": "Sécurisation après cambriolage",
          "description": "Sécurisation et remplacement de serrure après effraction"
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;