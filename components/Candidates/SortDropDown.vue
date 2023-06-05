<script setup>
import { ArrowsUpDownIcon } from '@heroicons/vue/24/outline';

onMounted(() => {
  // set the dropdown menu element
  const $targetElHide = document.getElementById('sortDropDownMenu');

  // set the element that trigger the dropdown menu on click
  const $triggerElHide = document.getElementById('sortDropDownBtn');

  // options with default values
  const options = {
    placement: 'bottom',
    triggerType: 'click',
    offsetSkidding: 0,
    offsetDistance: 10,
    delay: 300,
  };

  const sortDropDown = new Dropdown($targetElHide, $triggerElHide, options);
});
</script>

<template>
  <button
    id="sortDropDownBtn"
    data-dropdown-toggle="sortDropDownMenu"
    class="focus:outline-none text-gray-600 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center border border-gray-300 hover:bg-gray-400 hover:text-white ml-4"
    type="button"
  >
    <ArrowsUpDownIcon class="w-5 h-5" />
  </button>
  <!-- Dropdown menu -->
  <div
    id="sortDropDownMenu"
    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 w-44"
  >
    <ul
      class="py-2 text-sm text-gray-700 dark:text-gray-200 px-3"
      aria-labelledby="sortDropDownBtn"
    >
      <li class="flex gap-2 items-center">
        <span class="w-full text-start py-2"> Name </span>
        <select
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-gray-500 focus:border-gray-500 block w-full px-2 py-1"
        >
          <option value="A to Z" selected>A &rarr; Z</option>
          <option value="Z to A">Z &rarr; A</option>
        </select>
      </li>
      <!-- <li>
        <button
          class="w-full text-start px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Rating
        </button>
      </li> -->
    </ul>
  </div>
</template>
