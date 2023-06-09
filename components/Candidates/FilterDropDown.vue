<script setup>
import { FunnelIcon } from '@heroicons/vue/24/outline';
import { XMarkIcon } from '@heroicons/vue/24/solid';
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

const {
  filterDataByText,
  filterDataByNum,
  filterDataByDate,
  resetFilterFields,
} = useTableData();

const selectField = ref('text-name');

const text = reactive({
  text: '',
  op: 'is',
});

const num = reactive({
  num: '',
  op: 'eq',
});

const date = reactive({
  date: '',
  op: 'is',
});

const resetBtnVisible = ref(false);

watchEffect(() => {
  if (
    text.text.trim().length !== 0 ||
    num.num.toString().trim().length !== 0 ||
    date.date.trim().length !== 0
  ) {
    resetBtnVisible.value = true;
  } else {
    resetBtnVisible.value = false;
    resetFilterFields();
  }
});

const filterHandler = () => {
  const selectedField = selectField.value.split('-')[1];
  const selectedText = text.text;
  const selectedTextOp = text.op;
  const selectedRating = num.num;
  const selectedRatingOp = num.op;
  const selectedDate = date.date;
  const selectedDateOp = date.op;

  // const filetMap = new Map([
  //   ['Number', filterDataByNum],
  //   ['Date', filterDataByDate],
  //   ['String', filterDataByText],
  // ]);

  switch (selectedField) {
    case 'name':
      filterDataByText(selectedText, selectedTextOp, 'candidate.name');
      break;
    case 'rating':
      filterDataByNum(selectedRating, selectedRatingOp, 'rating');
      break;
    case 'stages':
      filterDataByText(selectedText, selectedTextOp, 'stages.state');
      break;
    case 'team':
      filterDataByText(selectedText, selectedTextOp, 'team.team');
      break;
    case 'date':
      filterDataByDate(selectedDate, selectedDateOp, 'appliedDate');
      break;
    case 'owner':
      filterDataByText(selectedText, selectedTextOp, 'owner.name');
      break;
  }
};

const resetHandler = () => {
  text.text = '';
  num.num = '';
  date.date = '';
  text.op = 'is';
  num.op = 'eq';
  date.op = 'is';
  resetFilterFields();
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
      class="flex items-center gap-1 px-3 py-4 text-sm text-gray-700 rounded-md shadow-md max-lg:flex-col max-lg:items-start"
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
          <option value="text-name" selected>Name</option>
          <option value="num-rating">Rating</option>
          <option value="text-stages">Stages</option>
          <option value="text-team">Team</option>
          <option value="date-date">Date</option>
          <option value="text-owner">Owner</option>
        </select>
      </li>
      <li>
        <select
          v-if="selectField.split('-')[0] === 'text'"
          v-model="text.op"
          class="bg-gray-50 border border-gray-300 text-gray-800 text-sm focus:ring-green-400 focus:border-transparent rounded-md block w-full py-1 max-lg:w-full"
        >
          <option selected value="is">is...</option>
          <option value="is-not">is not...</option>
        </select>

        <select
          v-if="selectField.split('-')[0] === 'num'"
          v-model="num.op"
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
          v-if="selectField.split('-')[0] === 'date'"
          v-model="date.op"
          class="bg-gray-50 border border-gray-300 text-gray-800 text-sm focus:ring-green-400 focus:border-transparent rounded-md block w-full py-1 max-lg:w-full"
        >
          <option selected value="is">is...</option>
          <option value="is-before">is before...</option>
          <option value="is-after">is after...</option>
          <option value="is-on-before">is on or before...</option>
          <option value="is-on-after">is on or after...</option>
        </select>
      </li>
      <li>
        <input
          v-if="selectField.split('-')[0] === 'text'"
          type="text"
          v-model="text.text"
          class="bg-gray-50 border border-gray-300 text-gray-800 text-sm focus:ring-green-400 focus:border-transparent rounded-md block px-2 py-1 w-24 max-lg:w-full"
          required
        />

        <input
          v-if="selectField.split('-')[0] === 'num'"
          type="number"
          v-model="num.num"
          class="bg-gray-50 border border-gray-300 text-gray-800 text-sm focus:ring-green-400 focus:border-transparent rounded-md block px-2 py-1 w-24 max-lg:w-full"
          required
          max="5"
          min="1"
        />

        <input
          v-if="selectField.split('-')[0] === 'date'"
          type="date"
          v-model="date.date"
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

      <li v-if="resetBtnVisible" class="max-lg:w-full">
        <button
          @click="resetHandler"
          class="p-1 bg-gray-100 hover:bg-gray-200 border border-gray-300 hover:border-green-400 rounded-md text-sm text-gray-600 max-lg:w-full max-lg:bg-green-400 max-lg:text-gray-800"
        >
          <XMarkIcon class="w-5 h-5" />
        </button>
      </li>
    </ul>
  </div>
</template>
