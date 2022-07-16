import React, { useEffect } from 'react';
import RNBootSplash from "react-native-bootsplash";
import Navigation from './Navigation';


const App = () => {
  
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
    });
  }, []);

  return (
    <Navigation />
  );
};

export default App;
