import React from "react";

export const FontContext = React.createContext(
  {} as {
    font: boolean;
    setfont: React.Dispatch<React.SetStateAction<boolean>>;
  }
)
