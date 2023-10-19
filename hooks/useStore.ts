import { set } from "react-hook-form";
import { create } from "zustand";
import { getFromLocalStorage, saveToLocalStorage } from "@/utils/localStorage";

const INITIAL_DURATION = 60; // 60 seconds

const PERCENT_INCREASE = 0.01; // 1%

const defaultUsername = "";
const defaultProcessGoal = "Exercise every day";

type Store = {
  dayNumber: number;
  username: string;
  processGoal: string;
  duration: number;
  isDailyChallengeCompleted: boolean;
  percentageIncreased: number;
  setUsername: (username: string) => void;
  setProgressGoal: (processGoal: string) => void;
  setDuration: () => void;
  setDayNumber: () => void;
  setDailyChallengeCompleted: () => void;
  setPercentageIncrease: () => void;
};

const useStore = create<Store>((set) => {
  const duration = parseFloat(
    getFromLocalStorage("duration") || INITIAL_DURATION.toString(),
  );

  const dayNumber = parseFloat(getFromLocalStorage("dayNumber") || "1");

  const percentageIncreased = parseFloat(
    getFromLocalStorage("percentageIncreased") || "1",
  );

  const setUsername = (username: string) => {
    set({ username });
    saveToLocalStorage("username", username);
  };

  const setProgressGoal = (processGoal: string) => {
    set({ processGoal });
    saveToLocalStorage("processGoal", processGoal);
  };

  const setDuration = () => {
    const newDuration = duration + duration * PERCENT_INCREASE;
    set({ duration: newDuration });
    saveToLocalStorage("duration", newDuration.toString());
  };

  const setDayNumber = () => {
    const newDayNumber = dayNumber + 1;
    set({ dayNumber: newDayNumber });
    saveToLocalStorage("dayNumber", newDayNumber.toString());
  };

  const setDailyChallengeCompleted = () => {
    set({ isDailyChallengeCompleted: true });
  };

  const setPercentageIncrease = () => {
    const newPercentageIncreased =
      percentageIncreased + percentageIncreased * PERCENT_INCREASE;
    set({ percentageIncreased: newPercentageIncreased });
    saveToLocalStorage(
      "percentageIncreased",
      newPercentageIncreased.toString(),
    );
  };

  return {
    username: getFromLocalStorage("username") || defaultUsername,
    processGoal: getFromLocalStorage("processGoal") || defaultProcessGoal,
    duration,
    dayNumber,
    isDailyChallengeCompleted: false,
    percentageIncreased,
    setUsername,
    setProgressGoal,
    setDuration,
    setDayNumber,
    setDailyChallengeCompleted,
    setPercentageIncrease,
  };
});

export default useStore;
