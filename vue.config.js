module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? process.env.BRANCH_NAME === 'main'
      ? '/'
      : `/${process.env.BRANCH_NAME}/`
    : '/'
}
