<script setup>
import { useCandidate } from '~/composables/candidate.js';
import { ChevronUpDownIcon } from '@heroicons/vue/24/solid';

import { Drawer } from 'flowbite';

const { DUMMY_DATA } = useTableData();

const { tableTdVisible } = useHideDropDown();

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
</script>
<template>
  <CandidatesDetails />

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
          <th
            v-if="tableTdVisible.isRatingVisible"
            scope="col"
            class="px-3 py-3"
          >
            <div class="flex items-center gap-1">
              <span>Rating</span>
              <ChevronUpDownIcon class="w-4 h-4" />
            </div>
          </th>
          <th
            v-if="tableTdVisible.isStagesVisible"
            scope="col"
            class="px-3 py-3"
          >
            <div class="flex items-center gap-1">
              <span>Stages</span>
              <ChevronUpDownIcon class="w-4 h-4" />
            </div>
          </th>

          <th v-if="tableTdVisible.isTeamVisible" scope="col" class="px-3 py-3">
            <div class="flex items-center gap-1">
              <span>Team</span>
              <ChevronUpDownIcon class="w-4 h-4" />
            </div>
          </th>
          <th v-if="tableTdVisible.isDateVisible" scope="col" class="px-3 py-3">
            <div class="flex items-center gap-1">
              <span>Applied date</span>
              <ChevronUpDownIcon class="w-4 h-4" />
            </div>
          </th>

          <th
            v-if="tableTdVisible.isOwnerVisible"
            scope="col"
            class="px-3 py-3"
          >
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
        />
      </tbody>
    </table>
  </div>
</template>
