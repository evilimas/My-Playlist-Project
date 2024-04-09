import { ref, watchEffect } from 'vue';
import { projectFirestore } from '../firebase/config';

const getDocument = (collection, id) => {
  // create a ref to store the documents
  const document = ref(null);
  const error = ref(null);

  // register the firestore collection reference
  let documentRef = projectFirestore.collection(collection).doc(id);
  const unsub = documentRef.onSnapshot(
    (snapshot) => {
      if (snapshot.data()) {
        document.value = { ...snapshot.data(), id: snapshot.id };
        error.value = null;
      } else {
        error.value = 'Document does not exist';
      }
    },
    (err) => {
      console.log(err.message);
      error.value = 'Could not fetch the document';
    }
  );
  watchEffect((onCleanup) => {
    // unsub from prev collection when watcher is stoped (component unmounted)
    onCleanup(() => unsub());
  });
  return { document, error };
};

export default getDocument;
