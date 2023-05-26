import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorites(id) {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorites(id) {
    setFavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }

  const values = {
    ids: favoriteMealIds,
    addFavorite: addFavorites,
    removeFavorite: removeFavorites,
  };

  return (
    <FavoritesContext.Provider value={values}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
