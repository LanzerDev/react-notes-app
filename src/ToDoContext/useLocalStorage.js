import React from "react";

//custom hook para guardar cosas en el local Storage
function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItems] = React.useState(initialValue)
  
   React.useEffect(() => {
     try {
      const localStorageItem = localStorage.getItem(itemName)
      let parsedItems;

      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue))
        parsedItems = initialValue
      } else {
        parsedItems = JSON.parse(localStorageItem)
      }
      setItems(parsedItems);
      setLoading(false);
    }
    catch (error) {
      setError(error)
    }
    },[]);
    
  
  
  
  
  
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem)
        setItems(newItem);
      } catch (error) {
        setError(error)
      }
    }
    return {
      item,
      saveItem,
      loading,
      error,
    };
  }

export { useLocalStorage }