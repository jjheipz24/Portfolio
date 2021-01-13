const path = require("path");

// module.exports = {
//     webpack: (config, { dev }) => {
//         config.module.rules.push(
//             {}
//         )
//         return config;
//     }
// }

const withVideos = require('next-videos')
module.exports = withVideos()