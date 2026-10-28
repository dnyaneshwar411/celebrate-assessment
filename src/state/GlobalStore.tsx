import { createContext, useContext, useEffect, useReducer } from "react";
import type { DispatchReducerArgs } from "../types";
import useLocalStorage from "../hooks/useLocalStorage";

const GlobalStoreContext = createContext({
  liked: new Set(),
  toggleLike: () => {},
  dispatch: (_: DispatchReducerArgs) => {}
})

function reducer(state: any, action: DispatchReducerArgs) {
  switch (action.type) {
    case "TOGGLE_LIKE": {
      const next = new Set(state.liked);
      if (next.has(action.payload)) next.delete(action.payload);
      else next.add(action.payload);
      return { ...state, liked: next };
    }
    default:
      return state
  }
}

export default function GlobalStore({
  children,
}: {
  children: React.ReactNode;
}) {
  const [storedIds, setStoredIds] = useLocalStorage("liked-photos", []);
  const [state, dispatch] = useReducer(reducer, undefined, () => ({
    liked: new Set(storedIds),
  }));

  useEffect(() => {
    setStoredIds(Array.from(state.liked));
  }, [state.liked]);

  return <GlobalStoreContext.Provider value={{
    ...state,
    dispatch
  }}>
    {children}
  </GlobalStoreContext.Provider>
}

export const useGlobalStore = function () {
  const data = useContext(GlobalStoreContext);
  if (!data) throw new Error('useGlobalStore must be used within <GlobalStore>');
  return data;
}