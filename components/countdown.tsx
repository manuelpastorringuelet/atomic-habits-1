"use client";

import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import { Button } from "@/components/ui/button";

import useStore from "@/hooks/useStore";

const Countdown = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const {
    username,
    duration,
    isDailyChallengeCompleted,
    setDuration,
    setDayNumber,
    setDailyChallengeCompleted,
    setPercentageIncrease,
  } = useStore();

  const startCountdown = () => {
    setIsPlaying(true);
  };

  const onComplete = () => {
    setIsPlaying(false);
    setDayNumber();
    setDuration();
    setDailyChallengeCompleted();
    setPercentageIncrease();
  };

  if (isDailyChallengeCompleted) {
    return (
      <div className="flex flex-col space-y-10 text-center">
        <h1 className="text-2xl">
          Congratulations,{" "}
          <span className="text-xl font-bold text-green-500">{username}</span>
          <br />
          Come back tomorrow
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-10">
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={Math.round(duration)}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[duration, duration * 0.66, duration * 0.33, 0]}
        onComplete={onComplete}
      >
        {({ remainingTime }) => (
          <div>
            <p>Time left: {remainingTime}</p>
          </div>
        )}
      </CountdownCircleTimer>
      <div className="flex flex-col space-y-4">
        <Button onClick={startCountdown} disabled={isPlaying}>
          Start Countdown
        </Button>
      </div>
    </div>
  );
};

export default Countdown;
