import { useState, useEffect } from "react";

function useLengthTracker(bikes, added) {
  const [bikesLength, setBikesLength] = useState(bikes.length);
  const [addedLength, setAddedLength] = useState(added.length);

  useEffect(() => {
    setBikesLength(bikes.length);
    setAddedLength(added.length);
  }, [bikes, added]);

  return { bikesLength, addedLength };
}

export default useLengthTracker;