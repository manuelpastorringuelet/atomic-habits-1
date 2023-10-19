import { create } from "zustand";

import { getFromLocalStorage, saveToLocalStorage } from "@/utils/localStorage";

type Store = {
  username: string;
  processGoal: string;
  setUsername: (username: string) => void;
  setProgressGoal: (processGoal: string) => void;
};

const useStore = create<Store>()((set) => ({
  username: getFromLocalStorage("username") || "",
  processGoal: getFromLocalStorage("processGoal") || "Exercise every day",
  setUsername: (username) => {
    set({ username });
    localStorage.setItem("username", username);
  },
  setProgressGoal: (processGoal) => {
    set({ processGoal });
    localStorage.setItem("processGoal", processGoal);
  },
}));

export default useStore;
