import p1 from '@/assets/images/pp-1.jpg';
import p2 from '@/assets/images/pp-2.jpg';
import p3 from '@/assets/images/pp-3.jpg';
import p4 from '@/assets/images/pp-4.jpg';
import p5 from '@/assets/images/pp-5.jpg';

export const useTableData = () => {
  const TABLE_DUMMY_DATA = [
    {
      id: 1,
      candidate: {
        name: 'Darlene Robertson',
        image: p1,
      },
      rating: 0,
      stages: {
        state: 'Screening',
        value: 2,
        color: 'bg-green-800',
      },
      team: {
        self: 'Junior UI Designer',
        team: 'Design Team',
      },

      appliedDate: new Date('2022-02-15'),
      owner: {
        name: 'Kristin Watson',
        image: p2,
      },
    },
    {
      id: 2,
      candidate: {
        name: 'Cody Fisher',
        image: p3,
      },
      rating: 2,
      stages: {
        state: 'New Applied',
        value: 1,
        color: 'bg-emerald-400',
      },
      team: {
        self: 'Junior UX Designer',
        team: 'Design Team',
      },

      appliedDate: new Date('2023-01-12'),
      owner: {
        name: 'Albert Flores',
        image: p4,
      },
    },
    {
      id: 3,
      candidate: {
        name: 'Jenny Wilson',
        image: p4,
      },
      rating: 3,
      stages: {
        state: 'Design Challange',
        value: 3,
        color: 'bg-orange-400',
      },
      team: {
        self: 'UX Researcher',
        team: 'Design Team',
      },

      appliedDate: new Date('2022-12-15'),
      owner: {
        name: 'Dianne Russell',
        image: p5,
      },
    },
    {
      id: 4,
      candidate: {
        name: 'Diana Jane',
        image: p5,
      },
      rating: 4,
      stages: {
        state: 'Interview',
        value: 4,
        color: 'bg-violet-400',
      },
      team: {
        self: 'UX Researcher',
        team: 'Design Team',
      },

      appliedDate: new Date('2023-02-15'),
      owner: {
        name: 'Kristin Watson',
        image: p2,
      },
    },
  ];

  const DUMMY_DATA = useState('tableDummyData', () => {
    return TABLE_DUMMY_DATA;
  });

  const sortByNameAtoZ = () => {
    DUMMY_DATA.value.sort((a, b) =>
      a.candidate.name.localeCompare(b.candidate.name)
    );
  };

  const sortByNameZtoA = () => {
    DUMMY_DATA.value.sort((a, b) =>
      b.candidate.name.localeCompare(a.candidate.name)
    );
  };

  const sortByRating1to5 = () => {
    DUMMY_DATA.value.sort((a, b) => a.rating - b.rating);
  };

  const sortByRating5to1 = () => {
    DUMMY_DATA.value.sort((a, b) => b.rating - a.rating);
  };

  const sortByDate1to12 = () => {
    DUMMY_DATA.value.sort((a, b) => a.appliedDate - b.appliedDate);
  };

  const sortByDate12to1 = () => {
    DUMMY_DATA.value.sort((a, b) => b.appliedDate - a.appliedDate);
  };

  const filterDataByRating = (rating, operator) => {
    if (operator === 'eq') {
      DUMMY_DATA.value = TABLE_DUMMY_DATA.filter(
        (item) => item.rating === rating
      );
    } else if (operator === 'nt-eq') {
      DUMMY_DATA.value = TABLE_DUMMY_DATA.filter(
        (item) => item.rating !== rating
      );
    } else if (operator === 'lt') {
      DUMMY_DATA.value = TABLE_DUMMY_DATA.filter(
        (item) => item.rating < rating
      );
    } else if (operator === 'gt') {
      DUMMY_DATA.value = TABLE_DUMMY_DATA.filter(
        (item) => item.rating > rating
      );
    } else if (operator === 'le') {
      DUMMY_DATA.value = TABLE_DUMMY_DATA.filter(
        (item) => item.rating <= rating
      );
    } else if (operator === 'ge') {
      DUMMY_DATA.value = TABLE_DUMMY_DATA.filter(
        (item) => item.rating >= rating
      );
    }
  };

  const filterDataByName = (keyword, operator) => {
    if (operator === 'is') {
      DUMMY_DATA.value = TABLE_DUMMY_DATA.filter((item) =>
        item.candidate.name.toLowerCase().includes(keyword.toLowerCase())
      );
    } else if (operator === 'is-not') {
      console.log('runn');
      DUMMY_DATA.value = TABLE_DUMMY_DATA.filter(
        (item) =>
          !item.candidate.name.toLowerCase().includes(keyword.toLowerCase())
      );
    }
  };

  const filterDataByDate = (targetDate, operator) => {
    if (operator === 'is') {
      DUMMY_DATA.value = TABLE_DUMMY_DATA.filter(
        (item) => item.appliedDate.getTime() === new Date(targetDate).getTime()
      );
    } else if (operator === 'is-before') {
      DUMMY_DATA.value = TABLE_DUMMY_DATA.filter(
        (item) => item.appliedDate.getTime() < new Date(targetDate).getTime()
      );
    } else if (operator === 'is-after') {
      DUMMY_DATA.value = TABLE_DUMMY_DATA.filter(
        (item) => item.appliedDate.getTime() > new Date(targetDate).getTime()
      );
    } else if (operator === 'is-on-before') {
      DUMMY_DATA.value = TABLE_DUMMY_DATA.filter(
        (item) => item.appliedDate.getTime() <= new Date(targetDate).getTime()
      );
    } else if (operator === 'is-on-after') {
      DUMMY_DATA.value = TABLE_DUMMY_DATA.filter(
        (item) => item.appliedDate.getTime() >= new Date(targetDate).getTime()
      );
    }
  };

  const filterDataByOwner = (keyword, operator) => {
    if (operator === 'is') {
      DUMMY_DATA.value = TABLE_DUMMY_DATA.filter((item) =>
        item.owner.name.toLowerCase().includes(keyword.toLowerCase())
      );
    } else if (operator === 'is-not') {
      console.log('runn');
      DUMMY_DATA.value = TABLE_DUMMY_DATA.filter(
        (item) => !item.owner.name.toLowerCase().includes(keyword.toLowerCase())
      );
    }
  };

  return {
    DUMMY_DATA,
    sortByNameAtoZ,
    sortByNameZtoA,
    sortByRating1to5,
    sortByRating5to1,
    sortByDate1to12,
    sortByDate12to1,
    filterDataByRating,
    filterDataByName,
    filterDataByDate,
    filterDataByOwner,
  };
};

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
