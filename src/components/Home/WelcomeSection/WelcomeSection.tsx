import { useEffect, useState } from "react";

const WelcomeSection = () => {
  const [time, setTime] = useState(new Date());
  const [welcomeMessage, setWelcomeMessage] = useState("");

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);

  useEffect(() => {
    const hour = time.getHours();
    if (hour >= 0 && hour < 10) {
      setWelcomeMessage("Good morning");
    } else if (hour >= 10 && hour < 16) {
      setWelcomeMessage("Good evening");
    } else {
      setWelcomeMessage("Good night");
    }
  }, [time]);

  const tick = () => {
    setTime(new Date());
  };

  return (
    <section className="flex justify-between items-center">
      <div className="flex justify-center items-center text-3xl font-medium gap-3 capitalize">
        <span>{welcomeMessage}</span>
        <span className="text-playerColor">Ali Houshangi</span>
      </div>
      <span className="bg-playerColor px-6 rounded-md text-primary">
        {time.toLocaleTimeString()}
      </span>
    </section>
  );
};

export default WelcomeSection;
