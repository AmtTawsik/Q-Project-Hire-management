<script setup>
import { EyeIcon } from '@heroicons/vue/24/outline';
import { Dropdown } from 'flowbite';

const tableTdVisible = ref({
  isRatingVisible: true,
  isStagesVisible: true,
  isTeamVisible: true,
  isDateVisible: true,
  isOwnerVisible: true,
});

const { getTableTdVisibleState } = defineProps(['getTableTdVisibleState']);
watchEffect(() => {
  getTableTdVisibleState(tableTdVisible);
  console.log(tableTdVisible);
});

onMounted(() => {
  // set the dropdown menu element
  const $targetEl = document.getElementById('dropdownMenu');

  // set the element that trigger the dropdown menu on click
  const $triggerEl = document.getElementById('dropdownButton');

  // options with default values
  const options = {
    placement: 'bottom',
    triggerType: 'click',
    offsetSkidding: 0,
    offsetDistance: 10,
    delay: 300,
    // onHide: () => {
    //   console.log('dropdown has been hidden');
    // },
    // onShow: () => {
    //   console.log('dropdown has been shown');
    // },
    // onToggle: () => {
    //   console.log('dropdown has been toggled');
    // },
  };

  const dropdown = new Dropdown($targetEl, $triggerEl, options);
  // console.log(dropdown);
});
</script>

<template>
  <button
    id="dropdownButton"
    data-dropdown-toggle="dropdownMenu"
    class="focus:outline-none text-gray-600 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center border border-gray-300 hover:bg-gray-400 hover:text-white ml-4"
    type="button"
  >
    <EyeIcon class="w-5 h-5" />
  </button>

  <!-- Dropdown menu -->
  <div
    id="dropdownMenu"
    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-72 dark:bg-gray-700 dark:divide-gray-600"
  >
    <ul
      class="p-3 space-y-1 text-sm text-gray-700 flex"
      aria-labelledby="dropdownButton"
    >
      <li>
        <div class="flex p-2 rounded hover:bg-gray-100">
          <label
            class="relative inline-flex items-center w-full cursor-pointer"
          >
            <input
              type="checkbox"
              v-model="tableTdVisible.isRatingVisible"
              class="sr-only peer"
            />
            <div
              class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600"
            ></div>
            <span
              class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Rating</span
            >
          </label>
        </div>
      </li>
      <li>
        <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <label
            class="relative inline-flex items-center w-full cursor-pointer"
          >
            <input
              type="checkbox"
              v-model="tableTdVisible.isStagesVisible"
              class="sr-only peer"
            />
            <div
              class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600"
            ></div>
            <span
              class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Stages</span
            >
          </label>
        </div>
      </li>
      <li>
        <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <label
            class="relative inline-flex items-center w-full cursor-pointer"
          >
            <input
              type="checkbox"
              v-model="tableTdVisible.isTeamVisible"
              class="sr-only peer"
            />
            <div
              class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600"
            ></div>
            <span
              class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Team</span
            >
          </label>
        </div>
      </li>
      <li>
        <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <label
            class="relative inline-flex items-center w-full cursor-pointer"
          >
            <input
              type="checkbox"
              v-model="tableTdVisible.isDateVisible"
              class="sr-only peer"
            />
            <div
              class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600"
            ></div>
            <span
              class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Applied Date
            </span>
          </label>
        </div>
      </li>
      <li>
        <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <label
            class="relative inline-flex items-center w-full cursor-pointer"
          >
            <input
              type="checkbox"
              v-model="tableTdVisible.isOwnerVisible"
              class="sr-only peer"
            />
            <div
              class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600"
            ></div>
            <span
              class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Owner</span
            >
          </label>
        </div>
      </li>
    </ul>
  </div>
</template>
