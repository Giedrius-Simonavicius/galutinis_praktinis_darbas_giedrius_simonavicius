import { addDoc, collection } from 'firebase/firestore';
import React from 'react';
import { db } from '../firebase/firebase';
import AddShopForm from '../components/shops/AddShopForm';

function AddShopPage() {
  async function addShopIntoFire(newShopObj) {
    try {
      const docRef = await addDoc(collection(db, 'shops'), newShopObj);
    } catch (error) {
      console.error('Error while adding document: ', error);
    }
  }

  return (
    <div className="mainForm">
      <h1>Add new shop</h1>

      <AddShopForm onAddShop={addShopIntoFire} />
    </div>
  );
}

export default AddShopPage;
