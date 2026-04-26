import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  try {
    if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_PRIVATE_KEY) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        }),
      });
    } else {
      console.warn("Faltan variables de entorno para inicializar Firebase Admin.");
    }
  } catch (error) {
    console.error('Firebase admin initialization error', error.stack);
  }
}

let db;
try {
  db = admin.firestore();
} catch (e) {
  console.warn("Firestore no pudo ser inicializado. Verifica las credenciales.");
}

export { db };
