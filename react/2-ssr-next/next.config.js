module.exports = {
  reactStrictMode: true,
  env: {},
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ]
  },
}
