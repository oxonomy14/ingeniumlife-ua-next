/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://ingeniumlife-ua-next.vercel.app",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://ingeniumlife-ua-next.vercel.app/sitemap-0.xml",
    ],
    policies: [], // оставить пустым, если используешь шаблон
  },
  robotsTxtTransform: async (robotsTxt) => {
    const fs = require("fs");
    const customTxt = fs.readFileSync("./robots.txt", "utf8");
    return customTxt;
  },
};
