import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { DocumentData, Query, QueryDocumentSnapshot, QuerySnapshot, addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, onSnapshot, orderBy, query, setDoc, updateDoc, where } from "firebase/firestore"; 
import { Item } from "./components/menu";
import { Option } from "./components/productDetails";
import { Order } from "./orders/page";
import { Offer } from "./components/bestSellers";
import getPayloadClient from "@/payload/payloadClient";
import qs from 'qs'
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
  const payload = await getPayloadClient();
  const response = await payload.find({
    collection: "categories",
    limit: 1000
  });
  return response.docs.map(r => r.Name) as unknown as string[];
}

export async function getItems(category: string) : Promise<Offer[]>{
  const payload = await getPayloadClient();
  const queryString = qs.stringify({
    where:{
      and: [
        {
          'Category.Name': {
            equals: category
          }
        },
        {
          isAvailable:{
            equals: true
          }
        }
      ]
    }
  }, {addQueryPrefix: true})
  const response = await payload.find({
    collection: "items",
    limit: 1000,
    where:{
      and: [
        {
          'Category.Name': {
            equals: category
          }
        },
        {
          isAvailable:{
            equals: true
          }
        }
      ]
    }
  });
  return response.docs.map(x => {return {...x, Category: (x as any).Category.Name}}) as unknown as Offer[];
}

export async function getOffers() : Promise<Offer[]>{
  const payload = await getPayloadClient();
  const response = await payload.find({
    limit: 10,
    collection: "items",
    where: {
      isPromo:{
        equals: true
      }
    }
  })
  return response.docs.map(x => {return {...x, Category: (x as any).Category.Name}}) as unknown as Offer[];
}

export async function getAllItems(filter: boolean = true) : Promise<Offer[]>{
  const payload = await getPayloadClient();
  const response = await payload.find({
    collection: "items",
    limit: 1000,
  })
  return response.docs.map(x => {return {...x, Category: (x as any).Category.Name}}) as unknown as Offer[];
}


export function setOrder(order: {Name: string, items: any[], total: number}){
  addDoc(collection(getFirestore(app), 'Orders'), order)
}

export function unSubscribeToDB(setter: React.Dispatch<React.SetStateAction<Order[]>>, setPlayAudio: React.Dispatch<React.SetStateAction<boolean>>){
  return onSnapshot(collection(getFirestore(app), 'Orders'), snapshot =>{
    var orders : Order[] = [];
    snapshot.forEach((doc)=> orders.push({...doc.data(),id: doc.id} as Order));
    setter(orders);
    if(snapshot.docChanges().some((c) => c.newIndex !== -1)) setPlayAudio(true);
  })
}

export function removeItem(id: string){
  deleteDoc(doc(getFirestore(app), 'Orders/' + id));
}