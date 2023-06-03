export const useCandidate = () => {
  const currCandidate = useState('candidate', () => {});

  const getCurrentCandInfo = (info) => {
    currCandidate.value = info;
  };

  return { currCandidate, getCurrentCandInfo };
};

export const useHideDropDown = () => {
  const tableTdVisible = useState('tableTdVisible', () => {
    const isVisible = {
      isRatingVisible: true,
      isStagesVisible: true,
      isTeamVisible: true,
      isDateVisible: true,
      isOwnerVisible: true,
    };

    return isVisible;
  });

  const tdToggle = (state) => {
    tableTdVisible.value.isRatingVisible = state;
    tableTdVisible.value.isStagesVisible = state;
    tableTdVisible.value.isTeamVisible = state;
    tableTdVisible.value.isDateVisible = state;
    tableTdVisible.value.isOwnerVisible = state;
  };

  const showAllTableTd = () => {
    tdToggle(true);
  };

  const hideAllTableTd = () => {
    tdToggle(false);
  };

  return { tableTdVisible, showAllTableTd, hideAllTableTd };
};
