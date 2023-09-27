import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { DocumentData, QueryDocumentSnapshot, QuerySnapshot, addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, onSnapshot, orderBy, query, setDoc, updateDoc, where } from "firebase/firestore"; 
import { Item } from "./components/menu";
import { Option } from "./components/productDetails";
import { Order } from "./orders/page";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: process.env.DBKey,

  authDomain: "zenmenu-71a7f.firebaseapp.com",

  projectId: "zenmenu-71a7f",

  storageBucket: "zenmenu-71a7f.appspot.com",

  messagingSenderId: "246725129317",

  appId: "1:246725129317:web:9380129b8cc1d72722428c",

  measurementId: "G-8Y7TXP2F63"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export async function getCategories(): Promise<string[]>{
  const ref = collection(getFirestore(app), 'Categories');
  const q = query(ref, orderBy('index'))
  const docs = await getDocs(q)
  var ret: string[] = [];
  docs.forEach(doc => ret.push(doc.id))
  return ret;
}

export async function getItems(category: string) : Promise<Item[]>{
  const ref = collection(getFirestore(app), 'Items');
  const q = query(ref, where('Category', '==', category), where('isAvailable', '==', true))
  const docs = await getDocs(q)
  var ret: Item[] = [];
  docs.forEach(doc => ret.push(doc.data() as Item))
  return ret;
}

export async function getAllItems() : Promise<Item[]>{
  const ref = collection(getFirestore(app), 'Items');
  const docs = await getDocs(ref);
  var ret: Item[] = [];
  docs.forEach(doc => ret.push(doc.data() as Item))
  return ret;
}

export async function getItemDetails(ItemName: string) : Promise<{Price: number, isAvailable: boolean}>{
  const ref = collection(getFirestore(app), 'Items');
  const q = query(ref, where('Name', '==', ItemName))
  const docs = await getDocs(q)
  var ret : QueryDocumentSnapshot<DocumentData, DocumentData>[] = [];
  docs.forEach(doc => ret.push(doc))
  return {Price: ret[0].data().Price, isAvailable: ret[0].data().isAvailable?? false};
}
export async function updateItemDetails(ItemName: string, Price: number, isAvailable: boolean){
  const ref = collection(getFirestore(app), 'Items');
  const q = query(ref, where('Name', '==', ItemName))
  const docs = await getDocs(q)
  var id: string = '';
  docs.forEach(doc => id = doc.id)
  updateDoc(doc(getFirestore(app), "Items", id), {Price: Price, isAvailable: isAvailable})
}
export async function getAdditions(Item:Item) {
  const ref = collection(getFirestore(app), 'Additions');
  var ret: Option[] = []
  const promises =(Item.Additions as string[]).map(async (addition)=>{
    const q = query(ref, where('Name', '==', addition))
    await getDocs(q).then((docs) =>docs.forEach(doc => ret.push(doc.data() as Option)));
  })
  await Promise.all(promises);
  
  return ret;
}

export function setOrder(order: {Name: string, items: any[], total: number}){
  addDoc(collection(getFirestore(app), 'Orders'), order)
}

export function unSubscribeToDB(setter: React.Dispatch<React.SetStateAction<Order[]>>){
  return onSnapshot(collection(getFirestore(app), 'Orders'), snapshot =>{
    var orders : Order[] = [];
    snapshot.forEach((doc)=> orders.push({...doc.data(),id: doc.id} as Order));
    setter(orders);
  })
}

export function removeItem(id: string){
  deleteDoc(doc(getFirestore(app), 'Orders/' + id));
}