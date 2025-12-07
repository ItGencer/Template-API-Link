import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig.js";

// ДОДАТИ тестовий документ
async function addTest() {
  try {
    await addDoc(collection(db, "test"), {
      name: "Gencer",
      created: Date.now()
    });
    console.log("Document added!");
  } catch (err) {
    console.error("Error:", err);
  }
}

// ОТРИМАТИ всі документи
async function getData() {
  try {
    const querySnapshot = await getDocs(collection(db, "test"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());

    });
  } catch (err) {
    console.error("Error:", err);
  }
}

//addTest();
//getData();