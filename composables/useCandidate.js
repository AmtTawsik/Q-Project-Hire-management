export const useCandidate = () => {
  const currCandidate = useState('candidate', () => {});

  const getCurrentCandInfo = (info) => {
    currCandidate.value = info;
  };

  return { currCandidate, getCurrentCandInfo };
};
