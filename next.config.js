const withOffline = require('next-offline');

const nextConfig = {
    transformManifest: (manifest) => ['/'].concat(manifest),
    workboxOpts: {
        runtimeCaching: [
            {
                urlPattern: /.jpg$/,
                handler: 'CacheFirst',
                options: {
                    cacheName: 'images'
                }
            },
            {
                urlPattern: /^https:\/\/yts.mx\/api\/v2\/list_movies/i,
                handler: 'StaleWhileRevalidate',
                options: {
                    cacheName: 'api-list'
                }
            },
            {
                urlPattern: /^https:\/\/yts.mx\/api\/v2\/movie_details.json/i,
                handler: 'StaleWhileRevalidate',
                options: {
                    cacheName: 'api-details'
                }
            },
            {
                urlPattern: /^https:\/\/yts.mx\/api\/v2\/movie_suggestions.json/i,
                handler: 'StaleWhileRevalidate',
                options: {
                    cacheName: 'api-suggestions'
                }
            }
        ]
    }
};

module.exports = withOffline(nextConfig);
