const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST
} = process.env;

module.exports = {
  url: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}?authSource=admin`
};
