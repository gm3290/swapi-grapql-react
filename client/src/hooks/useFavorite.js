import { useEffect, useState } from "react";

const listSessionKey = "pumpack:starwarfans:fav";

const useFavorite = () => {
  const [list, setList] = useState([]);

  const handleSetList = (personId) => {
    let newList = [];
    if (list.includes(personId)) {
      newList = list.filter((x) => x !== personId);
    } else {
      newList = [...list, personId];
    }
    localStorage.setItem(listSessionKey, JSON.stringify(newList));
    setList(newList);
  };

  useEffect(() => {
    const stored = localStorage.getItem(listSessionKey);
    if (stored) {
      try {
        setList(JSON.parse(stored));
      } catch (error) {
        // Stored favorites list has been broken!!!
      }
    }
  }, []);

  return [list, handleSetList];
};

export default useFavorite;
