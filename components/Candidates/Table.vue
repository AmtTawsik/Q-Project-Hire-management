<script setup>
import { useCandidate } from '~/composables/useCandidate';
import { ChevronUpDownIcon } from '@heroicons/vue/24/solid';
import p1 from '@/assets/images/pp-1.jpg';
import p2 from '@/assets/images/pp-2.jpg';
import p3 from '@/assets/images/pp-3.jpg';
import p4 from '@/assets/images/pp-4.jpg';
import p5 from '@/assets/images/pp-5.jpg';

import { Drawer } from 'flowbite';

onMounted(() => {
  // setup available elements
  const $buttonElement = document.querySelectorAll('#button-open');
  const $drawerElement = document.querySelector('#drawer-right');
  const $closeButton = document.querySelector('#close-button');

  // set modal options

  const drawerOptions = {
    placement: 'right',
    backdrop: true,
    bodyScrolling: false,
    edge: false,
    edgeOffset: '',
    backdropClasses:
      'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
  };

  // create a new modal instance
  if ($drawerElement) {
    const drawer = new Drawer($drawerElement, drawerOptions);

    // set event listeners for the button to show the drawer
    $buttonElement.forEach((el) => {
      el.addEventListener('click', () => drawer.toggle());
    });
    // $closeButton.addEventListener('click', () => drawer.hide());
  }
});

const DUMMY_DATA = [
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

const cDetails = ref({});
const { currentCandidate, setCandidate } = useCandidate();
const handleClick = (item) => {
  // setCandidate(item);
  setCandidate({ ...item });
};

// watchEffect(() => {
//   console.log(cDetails.value);
// });
</script>
<template>
  <CandidatesDetails :data="cDetails" />
  <div class="relative overflow-x-auto rounded-md">
    <table
      class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-collapse"
    >
      <thead class="text-sm text-gray-800 bg-white shadow-sm">
        <tr>
          <th scope="col" class="p-4 rounded-l-md">
            <div class="flex items-center">
              <input
                id="checkbox-all-search"
                type="checkbox"
                class="w-5 h-5 text-green-400 bg-gray-100 border-gray-300 focus:ring-white focus:ring-0"
              />
              <label for="checkbox-all-search" class="sr-only">checkbox</label>
            </div>
          </th>
          <th scope="col" class="px-3 py-3">
            <div class="flex items-center gap-1">
              <span>Candidate Name</span>
              <ChevronUpDownIcon class="w-4 h-4" />
            </div>
          </th>
          <th scope="col" class="px-3 py-3">
            <div class="flex items-center gap-1">
              <span>Rating</span>
              <ChevronUpDownIcon class="w-4 h-4" />
            </div>
          </th>
          <th scope="col" class="px-3 py-3">
            <div class="flex items-center gap-1">
              <span>Stages</span>
              <ChevronUpDownIcon class="w-4 h-4" />
            </div>
          </th>

          <th scope="col" class="px-3 py-3">
            <div class="flex items-center gap-1">
              <span>Team</span>
              <ChevronUpDownIcon class="w-4 h-4" />
            </div>
          </th>
          <th scope="col" class="px-3 py-3">
            <div class="flex items-center gap-1">
              <span>Applied date</span>
              <ChevronUpDownIcon class="w-4 h-4" />
            </div>
          </th>

          <th scope="col" class="px-3 py-3">
            <div class="flex items-center gap-1">
              <span>Owner</span>
              <ChevronUpDownIcon class="w-4 h-4" />
            </div>
          </th>

          <th scope="col" class="px-3 py-3 rounded-r-md">
            <div class="flex items-center gap-1">&nbsp;</div>
          </th>
        </tr>
      </thead>
      <tbody class="candidate-tbody">
        <CandidatesTableRow
          v-for="data in DUMMY_DATA"
          :key="data.id"
          :id="data.id"
          :candidate="data.candidate"
          :rating="data.rating"
          :stages="data.stages"
          :team="data.team"
          :appliedDate="data.appliedDate"
          :owner="data.owner"
          :handleClick="handleClick"
        />
      </tbody>
    </table>
  </div>
</template>
