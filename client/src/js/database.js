import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });


export const putDb = async (content) => {
  const db = await openDB('jate');
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put ({content});
  const result = await request;
  console.log('jate database updated',result);
};


export const getDb = async () => {
  const db = await openDB('jate');
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  console.log('jate database retrieved',result);
};

initdb();
