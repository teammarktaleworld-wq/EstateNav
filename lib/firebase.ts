import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore, collection, getDocs, addDoc, query, where } from 'firebase/firestore';
import { Property, LeadPayload, Segment } from './types';
import { INITIAL_PROPERTIES } from './mockData';

// Firebase configuration structure (pulled from Next.js environment variables)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export const isFirebaseConfigured = (): boolean => {
  return Boolean(
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY &&
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
  );
};

let app: FirebaseApp | null = null;
let db: Firestore | null = null;

if (typeof window !== 'undefined' || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
  try {
    if (isFirebaseConfigured()) {
      app = getApps().length ? getApp() : initializeApp(firebaseConfig);
      db = getFirestore(app);
    }
  } catch (error) {
    console.warn('Firebase initialization skipped or running in mock mode:', error);
  }
}

/**
 * Fetch properties by segment.
 * If Firebase is configured and documents exist in 'properties' collection, returns those;
 * otherwise gracefully returns the curated Abhee Ventures dataset.
 */
export async function getProperties(segment?: Segment): Promise<Property[]> {
  if (db && isFirebaseConfigured()) {
    try {
      const propRef = collection(db, 'properties');
      const q = segment ? query(propRef, where('segment', '==', segment)) : propRef;
      const snapshot = await getDocs(q);
      
      if (!snapshot.empty) {
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Property));
      }
    } catch (err) {
      console.warn('Firestore fetch failed, falling back to local inventory:', err);
    }
  }

  // Fallback to local curated mock inventory
  if (segment) {
    return INITIAL_PROPERTIES.filter(p => p.segment === segment);
  }
  return INITIAL_PROPERTIES;
}

/**
 * Submit high-intent consultative lead.
 * Persists to Firestore 'leads' collection when connected,
 * otherwise stores in localStorage / mock telemetry for testing.
 */
export async function submitLead(payload: LeadPayload): Promise<{ success: boolean; leadId?: string }> {
  if (db && isFirebaseConfigured()) {
    try {
      const leadsRef = collection(db, 'leads');
      const docRef = await addDoc(leadsRef, {
        ...payload,
        createdAt: new Date().toISOString(),
      });
      return { success: true, leadId: docRef.id };
    } catch (err) {
      console.error('Error submitting lead to Firestore:', err);
      // Fall through to mock storage
    }
  }

  // Mock persistence for offline / preview mode
  try {
    if (typeof window !== 'undefined') {
      const existing = JSON.parse(localStorage.getItem('estatenav_leads') || '[]');
      existing.push({ ...payload, id: `mock-${Date.now()}` });
      localStorage.setItem('estatenav_leads', JSON.stringify(existing));
    }
  } catch {}

  return { success: true, leadId: `mock-lead-${Date.now()}` };
}

