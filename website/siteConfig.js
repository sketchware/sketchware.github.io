/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const apps = [
  {
    caption: "Exo-light",
    image: "/img/showcase/exo-light.png",
    infoLink: "https://play.google.com/store/apps/details?id=lightstick.light",
    pinned: true
  },
  {
    caption: "SW Manifest Manager",
    image: "/img/showcase/sw-manifest-icon.png",
    infoLink:
      "https://play.google.com/store/apps/details?id=com.heystudios.swmm",
    pinned: true
  },
  {
    caption: "TransSketch",
    image: "/img/showcase/trans-sketch.png",
    infoLink:
      "https://play.google.com/store/apps/details?id=com.memeslabs.TransSketch",
    pinned: true
  },
  {
    caption: "Rishi Creations",
    image: "/img/showcase/rishi-creations.png",
    infoLink:
      "https://play.google.com/store/apps/details?id=net.in.rishicreations",
    pinned: true
  },
  {
    caption: "Ad Injector",
    image: "/img/showcase/ad-injector.png",
    infoLink:
      "https://play.google.com/store/apps/details?id=com.cubestudiodev.adinjector",
    pinned: true
  },
  {
    caption: "Go Spinner",
    image: "/img/showcase/go-spinner.png",
    infoLink: "https://play.google.com/store/apps/details?id=com.go.spinner",
    pinned: true
  },
  {
    caption: "Health Tips Guide",
    image: "/img/showcase/health-tips-book.png",
    infoLink:
      "https://play.google.com/store/apps/details?id=com.HealthTipsBook",
    pinned: true
  },
  {
    caption: "Body Building Guide",
    image: "/img/showcase/body-building-guide.png",
    infoLink:
      "https://play.google.com/store/apps/details?id=com.cubestudiodev.bodybuildingguide",
    pinned: true
  },
  {
    caption: "Oak Island Mystery",
    image: "/img/showcase/oak-island-mystery.png",
    infoLink:
      "https://play.google.com/store/apps/details?id=com.boxygames.oakmystery",
    pinned: true
  },
  {
    caption: "Red Bird Adventures",
    image: "/img/showcase/red-bird-adventures.png",
    infoLink: "https://play.google.com/store/apps/details?id=com.boxyincgaming",
    pinned: true
  },
  {
    caption: "Fast Clicker",
    image: "/img/showcase/fast-clicker.png",
    infoLink:
      "https://play.google.com/store/apps/details?id=net.fastclickeratm.ash",
    pinned: true
  },
  {
    caption: "Facebook Marketing Guide",
    image: "/img/showcase/facebook-marketing-guide.png",
    infoLink:
      "https://play.google.com/store/apps/details?id=com.cubestudiodev.fmg",
    pinned: true
  }
];

const siteConfig = {
  title: "Sketchware" /* title for your website */,
  tagline: "Create Apps on your Smartphone",
  url: "https://sketchware.github.io" /* your website url */,
  baseUrl: "/" /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  cname: "docs.sketchware.io\nwww.docs.sketchware.io",

  // Used for publishing and more
  projectName: "sketchware.github.io",
  organizationName: "sketchware",
  // For top-level user or org sies, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: "firebase-getting-started", label: "Docs" },
    // { doc: "doc4", label: "API" },
    { page: "help", label: "Help" },
    { blog: true, label: "Blog" }
  ],

  // If you have users set above, you add it here:
  apps,

  /* path to images for header/footer */
  headerIcon: "img/logo.png",
  footerIcon: "img/logo.png",
  favicon: "img/logo.png",

  /* colors for website */
  colors: {
    primaryColor: "#008dcd",
    secondaryColor: "#09a7ec"
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: "Copyright © " + new Date().getFullYear() + " Sketchware",

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: "solarized-dark"
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ["https://buttons.github.io/buttons.js"],

  /* On page navigation for the current documentation page */
  onPageNav: "separate",

  /* Open Graph and Twitter card images */
  ogImage: "img/og_image.png",
  twitterImage: "img/og_image.png"

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
