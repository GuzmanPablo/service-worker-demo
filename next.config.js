const withOffline = require('next-offline');

const nextConfig = {
    devIndicators: {
        autoPrerender: true
    },
    transformManifest: (manifest) => ['/'].concat(manifest),
    generateInDevMode: true,
    dontAutoRegisterSw: true,
    workboxOpts: {
        swDest: 'static/service-worker.js',
        runtimeCaching: [
            {
                urlPattern: /\.(?:jpg|jpeg|svg)$/,
                handler: 'CacheFirst',
                options: {
                    cacheName: 'images',
                    expiration: {
                        maxEntries: 10
                    }
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
