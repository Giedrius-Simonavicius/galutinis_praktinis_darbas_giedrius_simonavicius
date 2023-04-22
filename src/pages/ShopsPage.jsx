import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import SingleShop from '../components/shops/SingleShop';

function ShopsPage() {
  const [shopsArr, setShopsArr] = useState([]);

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
    <div>
      {shopsArr.map((sObj) => (
        <SingleShop key={sObj.uid} item={sObj} />
      ))}
    </div>
  );
}

export default ShopsPage;
