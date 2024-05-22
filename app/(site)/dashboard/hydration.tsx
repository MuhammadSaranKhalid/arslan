"use client"; // (a)

import useUserInfoStore from "@/zustand/userStore";
import * as React from "react";

const Hydration = () => {
  React.useEffect(() => {
    useUserInfoStore.persist.rehydrate();
  }, []); // (b)

  return null;
};

export default Hydration;
