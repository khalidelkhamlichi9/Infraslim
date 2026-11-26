module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'infraslimAdminJwtSecret2026'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'infraslimApiSalt2026'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'infraslimTransferSalt2026'),
    },
  },
});
