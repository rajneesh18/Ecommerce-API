const { mongoose } = require('mongoose');

const db = (fn) => {
  try {
    mongoose.Promise = global.Promise;
    mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => {
        console.log('DB Connected');
        fn();
      })
      .catch((err) => {
        console.log('DB Connection Failed');
        process.exit(1);
      });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = db;
