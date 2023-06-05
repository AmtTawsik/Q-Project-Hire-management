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

      appliedDate: '01/03/2021',
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

      appliedDate: '13/03/2021',
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

      appliedDate: '28/08/2021',
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

      appliedDate: '22/06/2021',
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

  return { DUMMY_DATA, sortByNameAtoZ, sortByNameZtoA };
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
