import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import SingleShop from '../components/shops/SingleShop';
import '../styles/shopsPage.scss';

function ShopsPage() {
  const [shopsArr, setShopsArr] = useState([]);
  const isEmpty = !!shopsArr.length;
  console.log('isEmpty ===', isEmpty);
  useEffect(() => {
    async function getShops() {
      try {
        const querySnapshot = await getDocs(collection(db, 'shops'));
        const tempShops = [];
        querySnapshot.forEach((doc) => {
          tempShops.push({
            uid: doc.id,
            ...doc.data(),
          });
        });
        setShopsArr(tempShops);
      } catch (error) {
        console.warn('getShops', error.code, error.message);
      }
    }
    getShops();
    console.log('shopsArr ===', shopsArr);
  }, []);
  return (
    <ul>
      {(isEmpty &&
        shopsArr.map((sObj) => <SingleShop key={sObj.uid} item={sObj} />)) || (
        <h2>We apologise. There are no shops to display</h2>
      )}
    </ul>
  );
}

export default ShopsPage;
