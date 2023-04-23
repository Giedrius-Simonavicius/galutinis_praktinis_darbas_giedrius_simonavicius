import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import SingleShop from '../components/shops/SingleShop';
import '../styles/shopsPage.scss';
import { useAuthCtx } from '../store/AuthProvider';

function ShopsPage() {
  const [shopsArr, setShopsArr] = useState([]);
  const { isLoading, setIsLoading } = useAuthCtx();
  const isNotEmpty = !!shopsArr.length;
  useEffect(() => {
    setIsLoading(true);
    console.log('isLoading ===', isLoading);
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
        setIsLoading(false);
        console.log('isLoading ===', isLoading);
      } catch (error) {
        console.warn('getShops', error.code, error.message);
        setIsLoading(false);
      }
    }
    getShops();
  }, []);
  return (
    <div className="page">
      {isNotEmpty && (
        <ul className="allShops">
          {shopsArr.map((sObj) => (
            <SingleShop key={sObj.uid} item={sObj} />
          ))}
        </ul>
      )}
      {!isNotEmpty && (
        <h2>We apologise. There are no shops to display at the moment</h2>
      )}
    </div>
  );
}

export default ShopsPage;
