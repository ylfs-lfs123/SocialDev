import { useEffect } from 'react';
import { auth, createUserDoc } from '../firebase/firebase';

const useUser = handler => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async user => {
      if (user) {
        const authUser = await createUserDoc(user);
        handler({ authUser });
      } else {
        auth.signOut();
        handler(null);
      }
    });

    return () => unsubscribe();
  }, []);
};
export default useUser;