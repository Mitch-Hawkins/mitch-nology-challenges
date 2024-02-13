import {
  collection,
  getDocs,
  doc,
  getDoc,
  deleteDoc,
  addDoc,
  updateDoc,
  increment,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../config/firebase";

export const getAllMovies = async () => {
  const querySnapshot = await getDocs(collection(db, "movies"));
  //     // console.log(querySnapshot);
  //   querySnapshot.forEach((doc) => {
  //     console.log(doc.id, " => ", doc.data());
  //   });

  const dataToReturn = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  console.log(dataToReturn);

  return dataToReturn;
};

//========================

export const getMovieById = async (id) => {
  const docRef = doc(db, "movies", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error("Movie not found");
  }

  return { id: docSnap.id, ...docSnap.data() };
};

//========================

export const deleteMovie = async (id) => {
  const docRef = doc(db, "movies", id);
  const docSnap = await deleteDoc(docRef);
  //   console.log(docSnap);
  return "deleted";

  //   if (!docSnap.exists()) {
  //     throw new Error("Movie not found");
  //   }
};

export const addNewMovie = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "movies"), {
      ...data,
      timesWatched: 0,
    });

    // console.log("added movie with id" + docRef.id);
    return docRef.id;
  } catch (e) {
    throw e;
  }
};

export const incrementTimesWatched = async (id) => {
  const docRef = doc(db, "movies", id);
  await updateDoc(docRef, {
    timesWatched: increment(1),
  });
};

export const subscribeToMovies = (callback) => {
  const collectionRef = collection(db, "movies");
  const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
    const movieData = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    callback(movieData);
  });
  return unsubscribe;
};
