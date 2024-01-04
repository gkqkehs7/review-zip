export const changeInputValue = (
  e: React.ChangeEvent<HTMLInputElement>,
  setStateFunction: React.Dispatch<React.SetStateAction<string>>,
): void => {
  setStateFunction(e.target.value);
};
