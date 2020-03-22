module.exports =
  process.env.NODE_ENV === 'production'
    ? require('./redux.prod')
    : require('./redux.dev');
