import React from "react";
import { HeaderStyled } from "../styles/HeaderStyle";

export default function Header(props) {
  const locale = navigator.language || "en-US";
  const today = new Date();
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    formatMatcher: "best fit"
  };

  return (
    <HeaderStyled>
      <h1>{today.toLocaleDateString(locale, options)}</h1>
    </HeaderStyled>
  );
}
