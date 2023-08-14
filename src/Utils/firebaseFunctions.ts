import { collection, getDocs } from "firebase/firestore";
import { db } from "../../src/config/firestore";
import { rotues } from "../constants/appStrings";

let depts: string[] = [];
let batches: string[] = [];

export const getDatas = async () => {
  await getDocs(collection(db, rotues?.department)).then((snapshot) => {
    snapshot.docs.map(async (doc) => {
      depts.push(doc.id);
    });
  });
  return depts;
};

export const getBatches = async () => {
  depts.forEach(async (d, i) => {
    await getDocs(collection(db, `department/${depts[i]}/batch`)).then(
      (snapshot) => {
        snapshot.docs.map(async (doc) => {
          batches.push(doc.id);
        });
      }
    );
  });
  return batches;
};
