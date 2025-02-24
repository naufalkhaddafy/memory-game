import { useEffect, useRef, useState } from "react";

interface TimerProps {
  seconds: number;
  minutes: number;
}
const useTimer = () => {
  const [timer, setTimer] = useState<TimerProps>({
    seconds: 0,
    minutes: 0,
  });

  const intervalRef = useRef<number | null>(null);
  // Function to start the timer
  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer.seconds === 59) {
          return {
            seconds: 0,
            minutes: prevTimer.minutes + 1,
          };
        } else {
          return { ...prevTimer, seconds: prevTimer.seconds + 1 };
        }
      });
    }, 1000);
  };

  // Function to stop the timer
  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Function to reset the timer
  const resetTimer = () => {
    setTimer({ seconds: 0, minutes: 0 });
    startTimer();
  };

  // Automatically start the timer when the component mounts
  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  return {
    timer,
    startTimer,
    stopTimer,
    resetTimer,
  };
};

export default useTimer;
