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
    class="flex items-center gap-1 px-3 py-2 text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-400 hover:text-white max-xl:px-4 max-sm:p-2"
  >
    <FunnelIcon class="w-6 h-6 max-xl:w-5 max-xl:h-5 max-sm:w-6 max-sm:h-6" />
  </button>

  <!--FILTER Dropdown menu -->
  <div
    id="filterDropDownMenu"
    class="z-10 hidden bg-white divide-y divide-gray-100 max-lg:w-28"
  >
    <ul
      class="flex items-center gap-1 px-3 py-4 text-sm text-gray-700 rounded-md shadow-md max-lg:flex-col max-lg:items-start"
      aria-labelledby="filterDropDownBtn"
    >
      <li class="mr-1 max-lg:hidden">
        <p>Where</p>
      </li>
      <li>
        <select
          id="candidate"
          class="block w-full px-2 py-1 text-sm text-gray-800 border border-gray-300 rounded-md bg-gray-50 focus:ring-green-400 focus:border-transparent max-lg:w-full"
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
          class="block w-full py-1 text-sm text-gray-800 border border-gray-300 rounded-md bg-gray-50 focus:ring-green-400 focus:border-transparent max-lg:w-full"
        >
          <option selected value="is">is</option>
          <option value="is not">is not</option>
        </select>
      </li>
      <li>
        <input
          type="text"
          id="first_name"
          class="block w-24 px-2 py-1 text-sm text-gray-800 border border-gray-300 rounded-md bg-gray-50 focus:ring-green-400 focus:border-transparent max-lg:w-full"
          placeholder="John"
          required
        />
      </li>
      <li class="max-lg:w-full">
        <button
          class="px-2 py-1 text-sm text-gray-600 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 hover:border-green-400 max-lg:w-full max-lg:bg-green-400 max-lg:text-gray-800"
        >
          Filter
        </button>
      </li>
    </ul>
  </div>
</template>
