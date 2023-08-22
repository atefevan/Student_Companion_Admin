import { collection, doc, getDocs, addDoc } from "firebase/firestore";
import { db } from "../config/firestore";

export const getData = async (
  root: string,
  department: string,
  endpoint: string
) => {
  const PATH = `${root}/${department}/${endpoint}`;

  let data: any = [];

  try {
    await getDocs(collection(db, PATH)).then((snapshot) => {
      snapshot.docs.map((doc) => {
        data.push(doc?.id);
      });
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const setData = async (
  department: string,
  endpoint: string,
  payload: any
) => {
  try {
    const PATH = `departments/${department}`;
    const docRef = doc(db, PATH);
    const colRef = collection(docRef, endpoint);
    addDoc(colRef, payload);
  } catch (err) {
    console.error(err);
  }
};
