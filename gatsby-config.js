const data = require('./data/siteConfig');

module.exports = {
    siteMetadata: {
        title: data.myName,
        ...data,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `./src/utils/typography.js`
            }
        },
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Human", // your name
                short_name: "Human", // your shorter name
                start_url: "/",
                background_color: "#000",
                theme_color: "#000",
                display: "standalone",
                icon: "./static/profile.jpg", // your profile picture
                // if your file is called human.png, replace that text with ./static/human.png
                // the ./static/ is very important, it tells Gatsby which directory to find your profile picture
            },
        },
        'gatsby-plugin-offline',
    ]
};
