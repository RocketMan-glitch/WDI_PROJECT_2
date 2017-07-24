module.exports = {
  port: process.env.PORT || 3000,
  db: process.env.MONGODB_URI || 'mongodb://localhost:27017/wdi-project-2',
  secret: process.env.SESSION_SECRET || 'ssh it\'s a secret'
};
