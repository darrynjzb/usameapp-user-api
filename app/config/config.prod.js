module.exports = {
  redisConfig: {
    port: process.env.NODE_REDIS_PORT,
    server: process.env.NODE_REDIS_SERVER,
    pass: process.env.NODE_REDIS_PASS,
    ttl: process.env.NODE_REDIS_TTL,
    tls: process.env.REDIS_USE_TLS || false
  },
  certJwt: process.env.BFF_OSP_JWT_CERT,
};
