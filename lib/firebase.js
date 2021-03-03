import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      private_key: process.env.FIREBASE_PRIVATE_KEY,
      project_id: 'alicanyildirim-blog'
    }),
    databaseURL: 'https://alicanyildirim-dev-default-rtdb.firebaseio.com/'
  });
}

export default admin.database();
