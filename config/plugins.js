module.exports = ({ env }) => ({
  upload: {
    config: {
      sizeLimit: 250 * 1024 * 1024, // 250MB en bytes
      // providerOptions: { ... } (aquí ya no va sizeLimit)
    }
  }
});