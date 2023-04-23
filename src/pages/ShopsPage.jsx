import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import SingleShop from '../components/shops/SingleShop';
import '../styles/shopsPage.scss';
import { useAuthCtx } from '../store/AuthProvider';

function ShopsPage() {
  const [shopsArr, setShopsArr] = useState([]);
  const { isLoading, setIsLoading, ui } = useAuthCtx();
  const isNotEmpty = !!shopsArr.length;

  useEffect(() => {
    async function getShops() {
      setIsLoading(true);
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
      } catch (error) {
        ui.showError('Something went wrong');
      }
    }
    setIsLoading(false);

    getShops();
  }, []);

  return (
    <div className="page">
      {isLoading ? (
        <h2>loading...</h2>
      ) : (
        isNotEmpty && (
          <ul className="allShops">
            {shopsArr.map((sObj) => (
              <SingleShop key={sObj.uid} item={sObj} />
            ))}
          </ul>
        )
      )}
      {!isNotEmpty && !isLoading && (
        <h2>We apologise. There are no shops to display at the moment</h2>
      )}
    </div>
  );
}

export default ShopsPage;
