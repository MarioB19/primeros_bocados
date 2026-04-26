import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKeyRaw = process.env.FIREBASE_PRIVATE_KEY;

  if (projectId && clientEmail && privateKeyRaw) {
    try {
      // Manejar la private key correctamente en cualquier entorno
      // En Vercel a veces llega con \n literales, a veces con saltos reales
      const privateKey = privateKeyRaw.includes('\\n')
        ? privateKeyRaw.replace(/\\n/g, '\n')
        : privateKeyRaw;

      admin.initializeApp({
        credential: admin.credential.cert({
          projectId,
          clientEmail,
          privateKey,
        }),
      });
      console.log('Firebase Admin inicializado correctamente.');
    } catch (error) {
      console.error('Firebase Admin initialization error:', error.message);
    }
  } else {
    console.warn('Faltan variables de entorno para Firebase Admin:', {
      hasProjectId: !!projectId,
      hasClientEmail: !!clientEmail,
      hasPrivateKey: !!privateKeyRaw,
    });
  }
}

let db;
if (admin.apps.length) {
  db = admin.firestore();
} else {
  console.error('No hay app de Firebase inicializada. Firestore no está disponible.');
}

export { db };
