<script setup>
import { FunnelIcon } from '@heroicons/vue/24/outline';

import { Dropdown } from 'flowbite';

onMounted(() => {
  // set the dropdown menu element
  const $targetElFilter = document.getElementById('filterDropDownMenu');

  // set the element that trigger the dropdown menu on click
  const $triggerElFilter = document.getElementById('filterDropDownBtn');

  // options with default values
  const options = {
    placement: 'bottom',
    triggerType: 'click',
    offsetSkidding: 20,
    offsetDistance: 10,
    delay: 300,
  };

  const filterDropdown = new Dropdown(
    $targetElFilter,
    $triggerElFilter,
    options
  );
});
</script>

<template>
  <!-- FILTER Dropdown -->
  <button
    id="filterDropDownBtn"
    data-dropdown-toggle="filterDropDownMenu"
    class="flex items-center gap-1 border bg-white border-gray-300 px-5 py-2 text-gray-500 hover:bg-gray-400 hover:text-white rounded-md max-xl:px-4 max-sm:p-2"
  >
    <FunnelIcon class="w-6 h-6 max-xl:w-5 max-xl:h-5 max-sm:w-6 max-sm:h-6" />
    <span class="text-base max-xl:text-sm max-sm:hidden">Filter</span>
  </button>

  <!--FILTER Dropdown menu -->
  <div
    id="filterDropDownMenu"
    class="z-10 hidden bg-white divide-y divide-gray-100 max-lg:w-28"
  >
    <ul
      class="px-3 py-4 text-sm text-gray-700 flex items-center gap-1 shadow-md rounded-md max-lg:flex-col max-lg:items-start"
      aria-labelledby="filterDropDownBtn"
    >
      <li class="mr-1 max-lg:hidden">
        <p>Where</p>
      </li>
      <li>
        <select
          id="candidate"
          class="bg-gray-50 border border-gray-300 text-gray-800 text-sm focus:ring-green-400 focus:border-transparent rounded-md block w-full px-2 py-1 max-lg:w-full"
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
          class="bg-gray-50 border border-gray-300 text-gray-800 text-sm focus:ring-green-400 focus:border-transparent rounded-md block w-full py-1 max-lg:w-full"
        >
          <option selected value="is">is</option>
          <option value="is not">is not</option>
        </select>
      </li>
      <li>
        <input
          type="text"
          id="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-800 text-sm focus:ring-green-400 focus:border-transparent rounded-md block px-2 py-1 w-24 max-lg:w-full"
          placeholder="John"
          required
        />
      </li>
      <li class="max-lg:w-full">
        <button
          class="px-2 py-1 bg-gray-100 hover:bg-gray-200 border border-gray-300 hover:border-green-400 rounded-md text-sm text-gray-600 max-lg:w-full max-lg:bg-green-400 max-lg:text-gray-800"
        >
          Filter
        </button>
      </li>
    </ul>
  </div>
</template>
