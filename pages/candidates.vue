<script setup>
import {
  FunnelIcon,
  HandThumbDownIcon,
  EllipsisVerticalIcon,
  ArrowDownTrayIcon,
  PrinterIcon,
  ChevronDownIcon,
  EyeIcon,
} from '@heroicons/vue/24/outline';

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
} from '@heroicons/vue/24/solid';

import { Dropdown } from 'flowbite';

onMounted(() => {
  // set the dropdown menu element
  const $targetElFilter = document.getElementById('filterDropDownMenu');
  const $targetElHide = document.getElementById('hideDropdownMenu');

  // set the element that trigger the dropdown menu on click
  const $triggerElFilter = document.getElementById('filterDropDownBtn');
  const $triggerElHide = document.getElementById('hideDropdownBtn');

  // options with default values
  const options = {
    placement: 'right',
    triggerType: 'click',
    offsetSkidding: 0,
    offsetDistance: 10,
    delay: 300,
  };

  const hideDropdownOptions = { ...options, placement: 'bottom' };

  const filterDropdown = new Dropdown(
    $targetElFilter,
    $triggerElFilter,
    options
  );
  const hideDropdown = new Dropdown(
    $targetElHide,
    $triggerElHide,
    hideDropdownOptions
  );
});

const tableTdVisible = ref({
  isRatingVisible: true,
  isStagesVisible: true,
  isTeamVisible: true,
  isDateVisible: true,
  isOwnerVisible: true,
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
</script>

<template>
  <div class="flex flex-col h-full lg:h-[91.5vh] px-5 pt-5">
    <header class="mb-10 max-lg:mb-6 max-sm:mb-8">
      <div
        class="flex items-center justify-between max-xl:flex-col max-xl:items-start max-xl:gap-4 max-sm:flex-row"
      >
        <div class="flex items-center">
          <h3 class="text-2xl mr-6 max-xl:text-xl max-xl:mr-4 max-sm:hidden">
            56 Candidates
          </h3>

          <!-- FILTER Dropdown -->
          <button
            id="filterDropDownBtn"
            data-dropdown-toggle="filterDropDownMenu"
            class="flex items-center gap-1 border bg-white border-gray-300 px-5 py-2 text-gray-500 hover:bg-gray-400 hover:text-white rounded-md max-xl:px-4 max-sm:p-2"
          >
            <FunnelIcon
              class="w-6 h-6 max-xl:w-5 max-xl:h-5 max-sm:w-6 max-sm:h-6"
            />
            <span class="text-base max-xl:text-sm max-sm:hidden">Filter</span>
          </button>

          <!--FILTER Dropdown menu -->
          <div
            id="filterDropDownMenu"
            class="z-10 hidden bg-white divide-y divide-gray-100"
          >
            <ul
              class="px-3 py-4 text-sm text-gray-700 flex items-center gap-1 shadow-md rounded-md"
              aria-labelledby="filterDropDownBtn"
            >
              <li class="mr-1">
                <p>Where</p>
              </li>
              <li>
                <select
                  id="candidate"
                  class="bg-gray-50 border border-gray-300 text-gray-800 text-sm focus:ring-green-400 focus:border-transparent rounded-md block w-full px-2 py-1"
                >
                  <option value="name" selected>Rating</option>
                  <option value="Stages">Stages</option>
                  <option value="team">Team</option>
                  <option value="date">Date</option>
                  <option value="owner">Owner</option>
                </select>
              </li>
              <li>
                <select
                  id="filter"
                  class="bg-gray-50 border border-gray-300 text-gray-800 text-sm focus:ring-green-400 focus:border-transparent rounded-md block w-full px-2 py-1"
                >
                  <option selected value="is">is</option>
                  <option value="is not">is not</option>
                </select>
              </li>
              <li>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-800 text-sm focus:ring-green-400 focus:border-transparent rounded-md block w-full px-2 py-1"
                  placeholder="John"
                  required
                />
              </li>
              <li>
                <button
                  class="px-2 py-1 bg-gray-100 hover:bg-gray-200 border border-gray-300 hover:border-green-400 rounded-md text-sm text-gray-600"
                >
                  Filter
                </button>
              </li>
            </ul>
          </div>

          <!-- HIDE Dropdown -->
          <button
            id="hideDropdownBtn"
            data-dropdown-toggle="hideDropdownMenu"
            class="focus:outline-none text-gray-600 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center border border-gray-300 hover:bg-gray-400 hover:text-white ml-4"
            type="button"
          >
            <EyeIcon class="w-5 h-5" />
          </button>

          <!-- HIDE Dropdown menu -->
          <div
            id="hideDropdownMenu"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-md shadow dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              class="pl-2 py-2 pr-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="hideDropdownBtn"
            >
              <li>
                <div
                  class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <label
                    class="relative inline-flex items-center w-full cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      v-model="tableTdVisible.isRatingVisible"
                      class="sr-only peer"
                    />
                    <div
                      class="w-9 h-5 bg-red-400 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-green-400"
                    ></div>
                    <span
                      class="ml-3 text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      Rating</span
                    >
                  </label>
                </div>
              </li>
              <li>
                <div
                  class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <label
                    class="relative inline-flex items-center w-full cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      v-model="tableTdVisible.isStagesVisible"
                      class="sr-only peer"
                    />
                    <div
                      class="w-9 h-5 bg-red-400 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-green-400"
                    ></div>
                    <span
                      class="ml-3 text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      Stages</span
                    >
                  </label>
                </div>
              </li>
              <li>
                <div
                  class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <label
                    class="relative inline-flex items-center w-full cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      v-model="tableTdVisible.isTeamVisible"
                      class="sr-only peer"
                    />
                    <div
                      class="w-9 h-5 bg-red-400 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-green-400"
                    ></div>
                    <span
                      class="ml-3 text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      Team</span
                    >
                  </label>
                </div>
              </li>
              <li>
                <div
                  class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <label
                    class="relative inline-flex items-center w-full cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      v-model="tableTdVisible.isDateVisible"
                      class="sr-only peer"
                    />
                    <div
                      class="w-9 h-5 bg-red-400 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-green-400"
                    ></div>
                    <span
                      class="ml-3 text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      Applied Date
                    </span>
                  </label>
                </div>
              </li>
              <li>
                <div
                  class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <label
                    class="relative inline-flex items-center w-full cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      v-model="tableTdVisible.isOwnerVisible"
                      class="sr-only peer"
                    />
                    <div
                      class="w-9 h-5 bg-red-400 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-green-400"
                    ></div>
                    <span
                      class="ml-3 text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      Owner</span
                    >
                  </label>
                </div>
              </li>
            </ul>
            <div
              class="flex gap-1 justify-between text-gray-600 px-2 py-3 text-xs"
            >
              <button
                @click="hideAllTableTd"
                class="bg-gray-100 px-3 py-1 rounded-sm hover:bg-gray-200"
              >
                Hide All
              </button>
              <button
                @click="showAllTableTd"
                class="bg-gray-100 px-3 py-1 rounded-sm hover:bg-gray-200"
              >
                Show All
              </button>
            </div>
          </div>
        </div>

        <div class="flex items-center">
          <div class="flex items-center gap-2 mr-6 max-xl:gap-1 max-xl:mr-5">
            <span class="text-2xl font-semibold max-xl:text-xl">3</span>
            <p class="text-base text-gray-500 max-xl:text-sm">Selected</p>
          </div>

          <button
            class="p-2 border border-gray-300 text-gray-500 bg-white rounded-md mr-5 hover:bg-gray-400 hover:text-white max-md:hidden"
          >
            <HandThumbDownIcon class="w-6 h-6" />
          </button>

          <div
            class="pr-5 mr-5 border-r border-gray-400 max-md:border-none max-md:mr-0"
          >
            <button
              class="p-2 border border-gray-300 bg-white text-gray-500 rounded-md hover:bg-gray-400 hover:text-white"
            >
              <EllipsisVerticalIcon class="w-6 h-6 font-semibold" />
            </button>
          </div>

          <button
            class="p-2 mr-5 border border-gray-300 bg-white text-gray-500 rounded-md hover:bg-gray-500 hover:text-white"
          >
            <ArrowDownTrayIcon class="w-6 h-6 font-semibold" />
          </button>

          <button
            class="p-2 mr-5 border border-gray-300 bg-white text-gray-500 rounded-md hover:bg-gray-500 hover:text-white max-md:hidden"
          >
            <PrinterIcon class="w-6 h-6 font-semibold" />
          </button>

          <button
            class="flex items-center gap-1 border-2 rounded-md border-black px-5 py-[.54rem] max-md:p-2"
          >
            <PlusIcon class="w-4 h-4 font-semibold max-md:w-5 max-md:h-5" />
            <span class="text-sm font-medium max-md:hidden">Add Candidate</span>
          </button>
        </div>
      </div>
    </header>

    <CandidatesTable :tableTdVisible="{ ...tableTdVisible }" />

    <footer class="mt-auto py-3 flex items-center justify-between mb-2">
      <div class="flex gap-4 items-center">
        <span class="text-gray-500 text-base max-xl:text-sm max-md:hidden"
          >View</span
        >

        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          class="text-gray-600 bg-white hover:bg-green-200 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-md text-sm px-4 py-2.5 text-center inline-flex items-center max-xl:px-3 max-xl:py-2"
          type="button"
        >
          10
          <ChevronDownIcon class="w-4 h-4 ml-2" />
        </button>
        <!-- Dropdown menu -->
        <div
          id="dropdown"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >1</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >2</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >3</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >4</a
              >
            </li>
          </ul>
        </div>

        <span class="text-gray-500 text-base max-xl:text-sm max-lg:hidden"
          >Candidates per page</span
        >
      </div>

      <nav aria-label="Page navigation example">
        <ul class="inline-flex -space-x-px items-center gap-2">
          <li>
            <div class="flex items-center text-gray-500">
              <ChevronLeftIcon class="w-5 h-5 max-xl:w-4 max-xl:h-4" />
              <a
                href="#"
                class="pl-1 pr-2 py-2 ml-0 leading-tight text-base rounded-l-lg hover:text-gray-700 max-xl:text-sm"
                >Prev</a
              >
            </div>
          </li>
          <li>
            <a
              href="#"
              class="px-2 py-1 font-medium leading-tight bg-yellow-300 rounded-full hover:bg-yellow-400 max-xl:text-sm"
              >1</a
            >
          </li>
          <li>
            <a
              href="#"
              class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400 max-xl:text-sm"
              >2</a
            >
          </li>
          <li>
            <a
              href="#"
              class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400 max-xl:text-sm"
              >3</a
            >
          </li>
          <li>
            <a
              href="#"
              class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400 max-xl:text-sm"
              >...</a
            >
          </li>
          <li>
            <a
              href="#"
              class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400 max-xl:text-sm"
              >24</a
            >
          </li>

          <li>
            <div class="flex items-center text-gray-500">
              <a
                href="#"
                class="pl-1 pr-2 py-2 ml-0 leading-tight text-base rounded-l-lg hover:text-gray-700 max-xl:text-sm"
                >Next</a
              >
              <ChevronRightIcon class="w-5 h-5 max-xl:w-4 max-xl:h-4" />
            </div>
          </li>
        </ul>
      </nav>
    </footer>
  </div>
</template>
