const currentCandidate = ref({});
const setCandidate = (obj) => {
  currentCandidate.value = obj;
  // console.log(currentCandidate.value);
};

export const useCandidate = () => {
  return { currentCandidate, setCandidate };
};
