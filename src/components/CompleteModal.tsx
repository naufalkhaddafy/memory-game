import React, { useEffect } from "react";
import confetti from "canvas-confetti";

interface CompleteModalProps {
  open?: boolean;
  showNext?: boolean;
  attempt: number;
  onClickNext?: () => void;
  time: {
    minutes: number;
    seconds: number;
  };
  level: number;
}

const CompleteModal: React.FC<CompleteModalProps> = ({
  open,
  showNext,
  onClickNext,
  time,
  attempt,
  level,
}) => {
  useEffect(() => {
    if (open === true) {
      confetti();
    }
  }, [open]);
  const scoreAmount = Math.round(
    (10000 * level) / (attempt * (time.minutes * 60 + time.seconds))
  );
  return (
    <div
      className={`${
        open ? "flex" : "hidden"
      } fixed bg-black/30 z-10  w-screen h-screen top-0 left-0 flex-col items-center justify-center`}
    >
      <div className="bg-white p-6 max-w-lg w-11/12 text-slate-800 [box-shadow:6px_6px_0_var(--tw-shadow-color)] shadow-indigo-700 flex flex-col items-center gap-4">
        <h2 className="text-3xl font-bold ">Yeay!</h2>
        <p className="text-2xl font-semibold">Score:</p>
        <p className="text-5xl font-bold mb-1 -translate-y-3">
          <span className="">{scoreAmount}</span>
        </p>
        <p className="text-slate-600 max-w-sm text-center">
          Kamu berhasil menyelesaikan level {level} dengan:
        </p>
        <div className=" flex justify-around w-full">
          <p className="text-4xl font-bold mb-4 -translate-y-3">
            <span className="relative after:content-['percobaan'] after:absolute after:font-normal after:text-slate-400 after:text-base after:-bottom-4 after:-left-2">
              {attempt}x
            </span>
          </p>
          <p className="text-4xl font-bold mb-4 -translate-y-3">
            <span className="relative after:content-['menit'] after:absolute after:font-normal after:text-slate-400 after:text-base after:-bottom-4 after:left-1">
              {("0" + time?.minutes).slice(-2)}
            </span>
            :
            <span className="relative after:content-['detik'] after:absolute after:font-normal after:text-slate-400 after:text-base after:-bottom-4 after:left-1">
              {("0" + time?.seconds).slice(-2)}
            </span>
          </p>
        </div>

        {showNext ? (
          <button
            className="px-5 py-2 text-slate-100 bg-indigo-800 font-semibold"
            onClick={onClickNext}
          >
            Level Berikutnya
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default CompleteModal;
