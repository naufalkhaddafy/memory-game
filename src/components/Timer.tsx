import React, { useEffect, useState } from "react";
import { formatTime } from "../utils";

interface TimerProps {
  seconds?: number;
  minutes?: number;
}

const Timer: React.FC<TimerProps> = ({ seconds, minutes }) => {
  const [timer, setTimer] = useState({
    seconds: seconds || 0,
    minutes: minutes || 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
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
    return () => clearInterval(interval);
  }, []);

  return (
    <div>{formatTime({ minutes: timer.minutes, seconds: timer.seconds })}</div>
  );
};

export default Timer;
