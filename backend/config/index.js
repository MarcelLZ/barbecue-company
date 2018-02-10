const configs = {
  shared: {
    env: process.env.NODE_ENV || 'development'
  },

  development: {
    mongo: {
      uri: 'mongodb://barbecue:YmjtjVVHtBWyz79w@ds231228.mlab.com:31228/barbecue-company',
      options: { debug: true }
    }
  },

  production: {
    mongo: {
      uri: 'mongodb://barbecue:YmjtjVVHtBWyz79w@ds231228.mlab.com:31228/barbecue-company',
      options: { debug: false }
    }
  }
}

export default { ...configs.shared, ...configs[configs.shared.env] }
