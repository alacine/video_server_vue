module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://172.50.0.3:8000',
        // target: "http://localhost:8000",
        ws: true,
        changeOrigin: true
      },
      '^/stream': {
        // target: "http://localhost:8000",
        target: 'http://172.50.0.4:9000',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
