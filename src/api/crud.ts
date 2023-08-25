import {
  collection,
  doc,
  getDocs,
  addDoc,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";
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
        data.push({ id: doc.id, ...doc.data() });
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

export const getScheduleByDay = async (
  section: string,
  day: any,
  department: string
) => {
  let response: any = [];
  const ref = collection(db, "departments", department, section);

  const q = query(ref, where("day", "==", `${day}`));

  (await getDocs(q)).forEach((snapshot) => {
    let res = snapshot.data();
    response.push({ id: snapshot?.id, ...res });
  });

  console.log("DAY: ", response);
};

export const deleteScheduleById = async (
  section: string,
  department: string,
  docId: string
) => {
  const docRef = doc(db, "departments", department, section, docId);

  await deleteDoc(docRef);
};
