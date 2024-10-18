const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

const authenticate = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  admin.auth().verifyIdToken(token)
    .then(() => next())
    .catch(() => res.status(403).json({ message: 'Unauthorized' }));
};

module.exports = authenticate;
