import { useState } from "react";

export const useInput = name => {
  const [value, setValue] = useState(name);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value);
      }
    }
  };
};
