module.exports = {

  'strapi-neon-tech-db-branches': {
    enabled: true,
    config: {
      neonApiKey: "napi_5sj97al0ofcunpqaaripp6k1y51z41xezimsw119qexkyb1u9wiqqpy6wu04p2y4", // get it from here: https://console.neon.tech/app/settings/api-keys
      neonProjectName: "ecommerce",
      neonRole: "db-ecommerce_owner", // create it manually under roles for your project first
      gitBranch: "main" // branch can be pinned via this config option. Will not use branch from git then. Usefull for preview/production deployment
    }
  },

}