import { ref, watchEffect } from 'vue';
import { projectFirestore } from '../firebase/config';

const getCollection = (collection, query) => {
  // create a ref to store the documents
  const documents = ref(null);
  const error = ref(null);

  // register the firestore collection reference
  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy('createdAt');

  if (query) {
    collectionRef = collectionRef.where(...query);
  }

  const unsub = collectionRef.onSnapshot(
    (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        // must wait for the server to create the timestamp & send it back
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });

      // update the values
      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = 'Could not fetch the data';
    }
  );
  watchEffect((onCleanup) => {
    // unsub from prev collection when watcher is stoped (component unmounted)
    onCleanup(() => unsub());
  });
  return { documents, error };
};

export default getCollection;
