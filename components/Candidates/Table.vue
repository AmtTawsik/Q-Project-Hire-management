<script setup>
import { useCandidate } from '~/composables/candidate.js';
import { ChevronUpDownIcon } from '@heroicons/vue/24/solid';
import p1 from '@/assets/images/pp-1.jpg';
import p2 from '@/assets/images/pp-2.jpg';
import p3 from '@/assets/images/pp-3.jpg';
import p4 from '@/assets/images/pp-4.jpg';
import p5 from '@/assets/images/pp-5.jpg';
import draggable from 'vuedraggable'
import { Drawer } from 'flowbite';

const headers = ref(['Rating', 'Stages', 'Team', 'Applied Date', 'Owner'])

const headMap=new Map([
  ['Rating' ,'isRatingVisible'],
  ['Stages','isStagesVisible'],
  ['Team','isTeamVisible'],
  ['Applied Date','isDateVisible'],
  ['Owner','isOwnerVisible']
])

const {DUMMY_DATA} = useTableData()

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
    <table class="w-full text-sm text-left text-gray-500 border-collapse dark:text-gray-400">
      <thead class="text-sm text-gray-800 bg-white shadow-sm">
        <draggable v-model="headers" item-key="id" tag="tr">
          <template #header>
            <th  scope="col" class="p-4 rounded-l-md">
              <div class="flex items-center">
                <input id="checkbox-all-search" type="checkbox"
                  class="w-5 h-5 text-green-400 bg-gray-100 border-gray-300 focus:ring-white focus:ring-0" />
                <label for="checkbox-all-search" class="sr-only">checkbox</label>
              </div>
            </th>
            <th scope="col" class="px-3 py-3">
              <div class="flex items-center gap-1">
                <span>Candidate Name</span>
                <ChevronUpDownIcon class="w-4 h-4" />
              </div>
            </th>
          </template>
          <template #item="{ element: header }">
            <th v-if="tableTdVisible[headMap.get(header)]" scope="col" class="px-3 py-3">
              <div class="flex items-center gap-1">
                <span>{{ header }}</span>
                <ChevronUpDownIcon class="w-4 h-4" />
              </div>
            </th>
          </template>
          <template #footer>
            <th scope="col" class="px-3 py-3 rounded-r-md">
              <div class="flex items-center gap-1">&nbsp;</div>
            </th>
          </template>
        </draggable>
      </thead>
      <tbody class="candidate-tbody">
        <tr class="text-base border-b bg-gray-50 max-xl:text-sm" v-for="data in DUMMY_DATA">
          <CandidatesTableRow :key="data.id" :id="data.id" :candidate="data.candidate" :rating="data.rating"
            :stages="data.stages" :team="data.team" :appliedDate="data.appliedDate" :owner="data.owner" :headers="headers" />
        </tr>
      </tbody>
    </table>
  </div>
</template>
data[header]