module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'local',
        providerOptions: {
          sizeLimit: 250 * 1024 * 1024,
          autoHash: true,  // Important for file tracking
        },
      },
    },
  });
