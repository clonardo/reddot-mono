// const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');

/**
 * Next config object, pre-compose
 */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.plugins = config.plugins || [];

    /*
        config.plugins = [
            ...config.plugins
            // Read the .env file
            new Dotenv({
                path: path.join(__dirname, '.env'),
                systemvars: true
            })
            
        ];
        */

    return config;
  },
  env: {
    MAILCHIMP_API_DC: process.env.MAILCHIMP_API_DC,
    MAILCHIMP_SIGNUP_LIST_ID: process.env.MAILCHIMP_SIGNUP_LIST_ID,
    MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
    HUBSPOT_EMBED_URL: process.env.HUBSPOT_EMBED_URL,
    HUBSPOT_PORTAL_ID: +process.env.HUBSPOT_PORTAL_ID,
    HUBSPOT_SIGNUP_FORM_ID: process.env.HUBSPOT_SIGNUP_FORM_ID,
    HUBSPOT_API_KEY: process.env.HUBSPOT_API_KEY,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
  },
};

// module.exports = withSass({});

module.exports = withPlugins(
  [
    // breaks display of navbar and assorted images, wtf.
    // [withSass(withPurgeCss())],
    // [withSass],
    [withFonts],
    /*
    [
      optimizedImages,
      {
        optimizeImagesInDev: true,
        optimizeImages: true,
        handleImages: [
          'jpeg',
          'jpg',
          'jpe',
          'ico',
          'png',
          'svg',
          'webp',
          'gif',
        ],
        mozjpeg: {
          quality: 80,
        },
        optipng: {
          optimizationLevel: 3,
        },
      },
    ],
    */
    // [withImages],
    // [withSourceMaps],
  ],
  nextConfig
);
