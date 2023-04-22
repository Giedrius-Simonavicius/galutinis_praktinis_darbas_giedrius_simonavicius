import { addDoc, collection } from 'firebase/firestore';
import React from 'react';
import { db } from '../firebase/firebase';
import AddShopForm from '../components/shops/AddShopForm';
import { NavLink } from 'react-router-dom';

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
      <div className="container innerForm">
        <h1>Add new shop</h1>
        <AddShopForm onAddShop={addShopIntoFire} />
        <div className="flex comment">
          <NavLink className="linkAfterComment" to={'/shops'}>
            &#8592; Go back to shops
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default AddShopPage;
