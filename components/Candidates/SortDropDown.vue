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

const { sortByText, sortByNumOrDate } = useTableData();

const name = ref('name-asc');
const rating = ref('rating-asc');
const date = ref('date-asc');

watch(name, (changedValue) => {
  sortByText(changedValue.split('-')[1], 'candidate.name');
});

watch(rating, (changedValue) => {
  sortByNumOrDate(changedValue.split('-')[1], 'rating');
});

watch(date, (changedValue) => {
  sortByNumOrDate(changedValue.split('-')[1], 'appliedDate');
});
</script>

<template>
  <button
    id="sortDropDownBtn"
    data-dropdown-toggle="sortDropDownMenu"
    class="focus:outline-none text-gray-500 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center border border-gray-300 hover:bg-gray-400 hover:text-white ml-4"
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
      class="px-3 py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="sortDropDownBtn"
    >
      <li class="flex items-center gap-2">
        <span class="w-full py-2 text-start"> Name </span>
        <select
          v-model="name"
          class="block w-full px-2 py-1 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-gray-500 focus:border-gray-400"
        >
          <option value="name-asc" selected>A &rarr; Z</option>
          <option value="name-desc">Z &rarr; A</option>
        </select>
      </li>
      <li class="flex items-center gap-2">
        <span class="w-full py-2 text-start"> Rating </span>
        <select
          v-model="rating"
          class="block w-full px-2 py-1 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-gray-500 focus:border-gray-400"
        >
          <option value="rating-asc" selected>1 &rarr; 9</option>
          <option value="rating-desc">9 &rarr; 1</option>
        </select>
      </li>
      <li class="flex items-center gap-2">
        <span class="w-full py-2 text-start"> Date </span>
        <select
          v-model="date"
          class="block w-full px-2 py-1 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-gray-500 focus:border-gray-400"
        >
          <option value="date-asc" selected>1 &rarr; 9</option>
          <option value="date-desc">9 &rarr; 1</option>
        </select>
      </li>
    </ul>
  </div>
</template>
