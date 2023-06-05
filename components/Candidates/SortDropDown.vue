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

const {
  sortByNameAtoZ,
  sortByNameZtoA,
  sortByRating1to5,
  sortByRating5to1,
  sortByDate1to12,
  sortByDate12to1,
} = useTableData();

const name = ref('nameAsc');
const rating = ref('ratingAsc');
const date = ref('dateAsc');

watch(name, () => {
  if (name.value === 'nameAsc') {
    sortByNameAtoZ();
  } else if (name.value === 'nameDesc') {
    sortByNameZtoA();
  }
});

watch(rating, () => {
  if (rating.value === 'ratingAsc') {
    sortByRating1to5();
  } else if (rating.value === 'ratingDesc') {
    sortByRating5to1();
  }
});

watch(date, () => {
  if (date.value === 'dateAsc') {
    sortByDate1to12();
  } else if (date.value === 'dateDesc') {
    sortByDate12to1();
  }
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
      class="px-3 py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="sortDropDownBtn"
    >
      <li class="flex items-center gap-2">
        <span class="w-full py-2 text-start"> Name </span>
        <select
          v-model="name"
          class="block w-full px-2 py-1 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-gray-500 focus:border-gray-400"
        >
          <option value="nameAsc" selected>A &rarr; Z</option>
          <option value="nameDesc">Z &rarr; A</option>
        </select>
      </li>
      <li class="flex items-center gap-2">
        <span class="w-full py-2 text-start"> Rating </span>
        <select
          v-model="rating"
          class="block w-full px-2 py-1 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-gray-500 focus:border-gray-400"
        >
          <option value="ratingAsc" selected>1 &rarr; 9</option>
          <option value="ratingDesc">9 &rarr; 1</option>
        </select>
      </li>
      <li class="flex items-center gap-2">
        <span class="w-full py-2 text-start"> Date </span>
        <select
          v-model="date"
          class="block w-full px-2 py-1 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-gray-500 focus:border-gray-400"
        >
          <option value="dateAsc" selected>1 &rarr; 9</option>
          <option value="dateDesc">9 &rarr; 1</option>
        </select>
      </li>
    </ul>
  </div>
</template>