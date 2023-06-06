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

const { filterDataByRating, filterDataByName, filterDataByOwner } =
  useTableData();

const selectField = ref('name');

const numField = ref(true);
const textField = ref(false);
const dateField = ref(false);

const textOp = ref('is');
const text = ref('');

const ratingOp = ref('eq');
const rating = ref('');

watchEffect(() => {
  if (selectField.value === 'rating') {
    numField.value = true;
    textField.value = false;
    dateField.value = false;
  } else if (
    selectField.value === 'name' ||
    selectField.value === 'stages' ||
    selectField.value === 'team' ||
    selectField.value === 'owner'
  ) {
    numField.value = false;
    textField.value = true;
    dateField.value = false;
  } else if (selectField.value === 'date') {
    numField.value = false;
    textField.value = false;
    dateField.value = true;
  }
});

const filterHandler = () => {
  if (selectField.value === 'rating') {
    filterDataByRating(rating.value, ratingOp.value);
  }

  if (selectField.value === 'name') {
    filterDataByName(text.value, textOp.value);
  }

  if (selectField.value === 'owner') {
    filterDataByOwner(text.value, textOp.value);
  }
};
</script>

<template>
  <!-- FILTER Dropdown -->
  <button
    id="filterDropDownBtn"
    data-dropdown-toggle="filterDropDownMenu"
    class="flex items-center gap-1 border bg-white border-gray-300 px-3 py-2.5 text-gray-500 hover:bg-gray-400 hover:text-white rounded-md max-xl:px-4 max-sm:p-2"
  >
    <FunnelIcon class="w-5 h-5" />
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
          v-model="selectField"
          class="bg-gray-50 border border-gray-300 text-gray-800 text-sm focus:ring-green-400 focus:border-transparent rounded-md block w-full px-2 py-1 max-lg:w-full"
        >
          <option value="name" selected>Name</option>
          <option value="rating">Rating</option>
          <option value="stages">Stages</option>
          <option value="team">Team</option>
          <option value="date">Date</option>
          <option value="owner">Owner</option>
        </select>
      </li>
      <li>
        <select
          v-if="textField"
          v-model="textOp"
          class="bg-gray-50 border border-gray-300 text-gray-800 text-sm focus:ring-green-400 focus:border-transparent rounded-md block w-full py-1 max-lg:w-full"
        >
          <option selected value="is">is...</option>
          <option value="is-not">is not...</option>
        </select>

        <select
          v-if="numField"
          v-model="ratingOp"
          class="bg-gray-50 border border-gray-300 text-gray-800 text-sm focus:ring-green-400 focus:border-transparent rounded-md block w-full py-1 max-lg:w-full"
        >
          <option selected value="eq">&#x208C;</option>
          <option value="nt-eq">&#x2260;</option>
          <option value="lt">&lt;</option>
          <option value="gt">&gt;</option>
          <option value="le">&le;</option>
          <option value="ge">&ge;</option>
        </select>

        <select
          v-if="dateField"
          class="bg-gray-50 border border-gray-300 text-gray-800 text-sm focus:ring-green-400 focus:border-transparent rounded-md block w-full py-1 max-lg:w-full"
        >
          <option selected value="eq">&#x208C;</option>
          <option value="nt-eq">&#x2260;</option>
          <option value="lt">&lt;</option>
          <option value="gt">&gt;</option>
          <option value="le">&le;</option>
          <option value="ge">&ge;</option>
        </select>
      </li>
      <li>
        <input
          v-if="textField"
          type="text"
          v-model="text"
          class="bg-gray-50 border border-gray-300 text-gray-800 text-sm focus:ring-green-400 focus:border-transparent rounded-md block px-2 py-1 w-24 max-lg:w-full"
          required
        />

        <input
          v-if="numField"
          type="number"
          v-model="rating"
          class="bg-gray-50 border border-gray-300 text-gray-800 text-sm focus:ring-green-400 focus:border-transparent rounded-md block px-2 py-1 w-24 max-lg:w-full"
          required
        />

        <input
          v-if="dateField"
          type="date"
          class="bg-gray-50 border border-gray-300 text-gray-800 text-sm focus:ring-green-400 focus:border-transparent rounded-md block px-2 py-1 w-24 max-lg:w-full"
          required
        />
      </li>
      <li class="max-lg:w-full">
        <button
          @click="filterHandler"
          class="px-2 py-1 bg-gray-100 hover:bg-gray-200 border border-gray-300 hover:border-green-400 rounded-md text-sm text-gray-600 max-lg:w-full max-lg:bg-green-400 max-lg:text-gray-800"
        >
          Filter
        </button>
      </li>
    </ul>
  </div>
</template>
