import { addDoc, collection } from 'firebase/firestore';
import React from 'react';
import { db } from '../firebase/firebase';
import AddShopForm from '../components/shops/AddShopForm';
import { NavLink } from 'react-router-dom';
import { useAuthCtx } from '../store/AuthProvider';
import Loader from '../components/ui/loader/Loader';

function AddShopPage() {
  const { navTo, setIsLoading, ui, isLoading } = useAuthCtx();

  async function addShopIntoFire(newShopObj) {
    setIsLoading(true);
    try {
      await addDoc(collection(db, 'shops'), newShopObj);
      setIsLoading(false);
      ui.showSuccess('Shop added');
      setTimeout(() => {
        navTo('shops');
      }, 3000);
    } catch (error) {
      ui.showError('Something went wrong');
      setIsLoading(false);
    }
  }

  return (
    <div className="mainForm">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container innerForm">
          <h1>Add new shop</h1>
          <AddShopForm onAddShop={addShopIntoFire} />
          <div className="flex comment">
            <NavLink className="linkAfterComment" to={'/shops'}>
              &#8592; Go back to shops
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddShopPage;
