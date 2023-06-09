<script setup>
import {
  HandThumbDownIcon,
  EllipsisVerticalIcon,
  ArrowDownTrayIcon,
  PrinterIcon,
  ChevronDownIcon,
} from '@heroicons/vue/24/outline';

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
} from '@heroicons/vue/24/solid';

const { DUMMY_DATA } = useTableData()


const headers = ref([{ name: "Rating", type: 'Number' }, { name: 'Stages', type: 'Object' }, { name: 'Team', type: 'String' }, { name: 'Applied Date', type: "Date" }, { name: 'Owner', type: 'String' }]);

const headMap = new Map([
  ['Rating', 'isRatingVisible'],
  ['Stages', 'isStagesVisible'],
  ['Team', 'isTeamVisible'],
  ['Applied Date', 'isDateVisible'],
  ['Owner', 'isOwnerVisible'],
]);

const groupMap = new Map([
  ['Rating', arrangeByRating],
  ['Stages', arrangeByStages],
  ['Team', arrangeByTeam],
  ['Owner', arrangeByOwner],
]);

function arrangeByRating(data) {
  return data.reduce((acc, user) => {
    (acc[user.rating] ||= []).push(user);
    return acc;
  }, {});
}
function arrangeByStages(data) {
  return data.reduce((acc, user) => {
    (acc[user.stages.state] ||= []).push(user);
    return acc;
  }, {});
}
function arrangeByTeam(data) {
  return data.reduce((acc, user) => {
    (acc[user.team.name] ||= []).push(user);
    return acc;
  }, {});
}
function arrangeByOwner(data) {
  return data.reduce((acc, user) => {
    (acc[user.owner.name] ||= []).push(user);
    return acc;
  }, {});
}

const tableRowMap = new Map([
  ['Rating', { property: 'rating', visilibility: 'isRatingVisible', component: resolveComponent('CandidatesTableDataRating') }],
  ['Stages', { property: 'stages', visilibility: 'isStagesVisible', component: resolveComponent('CandidatesTableDataStages') }],
  ['Team', { property: 'team', visilibility: 'isTeamVisible', component: resolveComponent('CandidatesTableDataTeam') }],
  ['Applied Date', { property: 'appliedDate', visilibility: 'isDateVisible', component: resolveComponent('CandidatesTableDataDate') }],
  ['Owner', { property: 'owner', visilibility: 'isOwnerVisible', component: resolveComponent('CandidatesTableDataOwner') }],
])

function changeGroup(list, evt, groupedBy) {
  if (evt.added !== undefined) {
    switch (groupedBy) {
      case 'Rating':
        console.log('hello1')
        console.log([...list])
        list[evt.added.newIndex].rating =
          list[(evt.added.newIndex + 1) % list.length].rating;
          console.log(list)
        break;
      case 'Team':
        console.log('hello2')
        list[evt.added.newIndex].team.name =
          list[(evt.added.newIndex + 1) % list.length].team.name;
        break;
      case 'Stages':
        console.log('hello3')
        console.log(list[evt.added.newIndex].candidate.name)
        list[evt.added.newIndex].stages.state =
          list[(evt.added.newIndex + 1) % list.length].stages.state;
        console.log(list[evt.added.newIndex].candidate.name)
        break;
      case 'Owner':
        console.log('hello4')
        list[evt.added.newIndex].owner = {
          ...list[(evt.added.newIndex + 1) % list.length].owner,
        };
        break;
      default:
        break;
    }
  }
}
</script>

<template>
  <div class="flex flex-col h-full lg:h-[91.5vh] px-5 pt-5">
    <header class="mb-10 max-lg:mb-6 max-sm:mb-8">
      <div class="flex items-center justify-between max-xl:flex-col max-xl:items-start max-xl:gap-4 max-sm:flex-row">
        <div class="flex items-center">
          <h3 class="mr-6 text-2xl max-xl:text-xl max-xl:mr-4 max-sm:hidden">
            56 Candidates
          </h3>

          <!-- FILTER Dropdown -->
          <CandidatesFilterDropDown :headers="headers"/>

          <!-- HIDE Dropdown -->
          <CandidatesHideDropDown />

          <!-- SORT Dropdown -->
          <CandidatesSortDropDown />

          <CandidatesGroupDropDown />
        </div>

        <div class="flex items-center">

          <div class="pr-5 mr-5 border-r border-gray-400 max-md:border-none max-md:mr-0">
            <button
              class="p-2 text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-400 hover:text-white">
              <EllipsisVerticalIcon class="w-6 h-6 font-semibold" />
            </button>
          </div>

          <button
            class="p-2 mr-5 text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-500 hover:text-white">
            <ArrowDownTrayIcon class="w-6 h-6 font-semibold" />
          </button>

          <button
            class="p-2 mr-5 text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-500 hover:text-white max-md:hidden">
            <PrinterIcon class="w-6 h-6 font-semibold" />
          </button>

          <button class="flex items-center gap-1 border-2 rounded-md border-black px-5 py-[.54rem] max-md:p-2">
            <PlusIcon class="w-4 h-4 font-semibold max-md:w-5 max-md:h-5" />
            <span class="text-sm font-medium max-md:hidden">Add Candidate</span>
          </button>
        </div>
      </div>
    </header>

    <CandidatesTable :TABLE_DATA="DUMMY_DATA" :headers="headers" :groupMap="groupMap" :headMap="headMap"
      :changeGroup="changeGroup" :tableRowMap="tableRowMap" />

    <footer class="flex items-center justify-between py-3 mt-auto mb-2">
      <div class="flex items-center gap-4">
        <span class="text-base text-gray-500 max-xl:text-sm max-md:hidden">View</span>

        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
          class="text-gray-600 bg-white hover:bg-green-200 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-md text-sm px-4 py-2.5 text-center inline-flex items-center max-xl:px-3 max-xl:py-2"
          type="button">
          10
          <ChevronDownIcon class="w-4 h-4 ml-2" />
        </button>
        <!-- Dropdown menu -->
        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">1</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">2</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">3</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">4</a>
            </li>
          </ul>
        </div>

        <span class="text-base text-gray-500 max-xl:text-sm max-lg:hidden">Candidates per page</span>
      </div>

      <nav aria-label="Page navigation example">
        <ul class="inline-flex items-center gap-2 -space-x-px">
          <li>
            <div class="flex items-center text-gray-500">
              <ChevronLeftIcon class="w-5 h-5 max-xl:w-4 max-xl:h-4" />
              <a href="#"
                class="py-2 pl-1 pr-2 ml-0 text-base leading-tight rounded-l-lg hover:text-gray-700 max-xl:text-sm">Prev</a>
            </div>
          </li>
          <li>
            <a href="#"
              class="px-2 py-1 font-medium leading-tight bg-yellow-300 rounded-full hover:bg-yellow-400 max-xl:text-sm">1</a>
          </li>
          <li>
            <a href="#" class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400 max-xl:text-sm">2</a>
          </li>
          <li>
            <a href="#" class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400 max-xl:text-sm">3</a>
          </li>
          <li>
            <a href="#"
              class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400 max-xl:text-sm">...</a>
          </li>
          <li>
            <a href="#" class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400 max-xl:text-sm">24</a>
          </li>

          <li>
            <div class="flex items-center text-gray-500">
              <a href="#"
                class="py-2 pl-1 pr-2 ml-0 text-base leading-tight rounded-l-lg hover:text-gray-700 max-xl:text-sm">Next</a>
              <ChevronRightIcon class="w-5 h-5 max-xl:w-4 max-xl:h-4" />
            </div>
          </li>
        </ul>
      </nav>
    </footer>
  </div>
</template>
