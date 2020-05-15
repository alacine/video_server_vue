module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://callmepancake.top:8000',
        ws: true,
        changeOrigin: true
      },
      '^/stream': {
        target: 'http://callmepancake.top:9000',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
