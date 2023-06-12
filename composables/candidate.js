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
      age:24
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
      age:32
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
      age:19
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
        team: 'Developer Team',
      },

      appliedDate: new Date('2023-02-15'),
      owner: {
        name: 'Kristin Watson',
        image: p2,
      },
      age:18
    },
  ];

  const DUMMY_DATA = useState('tableDummyData', () => {
    return TABLE_DUMMY_DATA;
  });

  //  SORTING
  const sortDataByField = (cb) => {
    DUMMY_DATA.value.sort(cb);
  };

  const sortByText = (order, field) => {
    const [key, nestedKey] = field.split('.');

    switch (order) {
      case 'asc':
        sortDataByField((a, b) =>
          a[key][nestedKey].localeCompare(b[key][nestedKey])
        );
        break;
      case 'desc':
        sortDataByField((a, b) =>
          b[key][nestedKey].localeCompare(a[key][nestedKey])
        );
        break;
    }
  };

  const sortByNumOrDate = (order, field) => {
    switch (order) {
      case 'asc':
        sortDataByField((a, b) => a[field] - b[field]);
        break;
      case 'desc':
        sortDataByField((a, b) => b[field] - a[field]);
        break;
    }
  };

  // FILTERING
  const filterDataByField = (cb) => {
    DUMMY_DATA.value = TABLE_DUMMY_DATA.filter(cb);
  };

  const filterDataByText = (keyword, operator, field) => {
    const nestedKeys = field.split('.');

    filterDataByField((item) => {
      let fieldValue = item;
      // Traverse the nested keys to access the final value
      for (const key of nestedKeys) {
        if (fieldValue && fieldValue.hasOwnProperty(key)) {
          fieldValue = fieldValue[key];
        } else {
          fieldValue = undefined;
          break;
        }
      }

      // Perform the filtering based on the operator and keyword
      switch (operator) {
        case 'is':
          return (
            fieldValue &&
            fieldValue.toLowerCase().includes(keyword.toLowerCase())
          );
        case 'is-not':
          return (
            !fieldValue ||
            !fieldValue.toLowerCase().includes(keyword.toLowerCase())
          );
        default:
          return true; // No operator specified, return all data
      }
    });
  };

  // const filterDataByText = (keyword, operator, field) => {
  //   const [key, nestedKey] = field.split('.');

  //   switch (operator) {
  //     case 'is':
  //       filterDataByField((item) =>
  //         item[key][nestedKey].toLowerCase().includes(keyword.toLowerCase())
  //       );
  //       break;
  //     case 'is-not':
  //       filterDataByField(
  //         (item) =>
  //           !item[key][nestedKey].toLowerCase().includes(keyword.toLowerCase())
  //       );
  //       break;
  //   }
  // };

  const filterDataByNum = (inputNum, operator, field) => {
    switch (operator) {
      case 'eq':
        filterDataByField((item) => item[field] === inputNum);
        break;
      case 'nt-eq':
        filterDataByField((item) => item[field] !== inputNum);
        break;
      case 'lt':
        filterDataByField((item) => item[field] < inputNum);
        break;
      case 'gt':
        filterDataByField((item) => item[field] > inputNum);
        break;
      case 'le':
        filterDataByField((item) => item[field] <= inputNum);
        break;
      case 'ge':
        filterDataByField((item) => item[field] >= inputNum);
        break;
    }
  };

  const filterDataByDate = (targetDate, operator, field) => {
    switch (operator) {
      case 'is':
        filterDataByField(
          (item) => item[field].getTime() === new Date(targetDate).getTime()
        );
        break;
      case 'is-before':
        filterDataByField(
          (item) => item[field].getTime() < new Date(targetDate).getTime()
        );
        break;
      case 'is-after':
        filterDataByField(
          (item) => item[field].getTime() > new Date(targetDate).getTime()
        );
        break;
      case 'is-on-before':
        filterDataByField(
          (item) => item[field].getTime() <= new Date(targetDate).getTime()
        );
        break;
      case 'is-on-after':
        filterDataByField(
          (item) => item[field].getTime() >= new Date(targetDate).getTime()
        );
        break;
    }
  };

  const resetFilterFields = () => {
    DUMMY_DATA.value = TABLE_DUMMY_DATA;
  };

  return {
    DUMMY_DATA,
    sortByText,
    sortByNumOrDate,
    filterDataByText,
    filterDataByNum,
    filterDataByDate,
    resetFilterFields,
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
      isAgeVisible:true
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
