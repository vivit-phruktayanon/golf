import { useState, useCallback } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import CountdownPage from "@/components/CountdownPage";
import BirthdayPage from "@/components/BirthdayPage";

// Feb 13, 2026 00:00 AM GMT+7 = Feb 12, 2026 17:00 UTC
const BIRTHDAY_DATE = new Date("2026-02-12T17:00:00Z");

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [showBirthday, setShowBirthday] = useState(false);


  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
    // Check if countdown already passed
    if (new Date() >= BIRTHDAY_DATE) {
      setShowBirthday(true);
    }
  }, []);

  const handleCountdownComplete = useCallback(() => {
    setShowBirthday(true);
  }, []);

  if (loading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  if (!showBirthday) {
    return <CountdownPage targetDate={BIRTHDAY_DATE} onComplete={handleCountdownComplete} />;
  }

  return <BirthdayPage />;
};

export default Index;
