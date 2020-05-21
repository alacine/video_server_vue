module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:8000',
        ws: true,
        changeOrigin: true
      },
      '^/stream': {
        target: 'http://localhost:9000',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
