import admin from 'firebase-admin';
import serviceAccount from '../skipli-ai-3c532-firebase-adminsdk-fbsvc-6f91cd9384.json' assert { type: 'json' };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

export default db;
