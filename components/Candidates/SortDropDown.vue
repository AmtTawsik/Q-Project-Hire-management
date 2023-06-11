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

const { headers, queryMap } = defineProps(['headers', 'queryMap'])
const { sortByText, sortByNumOrDate } = useTableData();

const selectedValue = ref('')

const selectedField = computed(() => selectedValue.value.split('-')[0])

const selectedFieldType = computed(() => headers.find(item => item.name === selectedField.value).type)

const selectedOrder = computed(() => selectedValue.value.split('-')[1])

const sortingMap = new Map([
  ['String', sortByText],
  ['Number', sortByNumOrDate],
  ['Date', sortByNumOrDate]
])

watch(selectedValue, () => {
  sortingMap.get(selectedFieldType.value)(selectedOrder.value, queryMap.get(selectedField.value));
});
</script>

<template>
  <button id="sortDropDownBtn" data-dropdown-toggle="sortDropDownMenu"
    class="focus:outline-none text-gray-500 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center border border-gray-300 hover:bg-gray-400 hover:text-white ml-4"
    type="button">
    <ArrowsUpDownIcon class="w-5 h-5" />
  </button>

  <!-- Dropdown menu -->

  <div id="sortDropDownMenu"
    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 w-44">
    <ul class="px-3 py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="sortDropDownBtn">
      <li class="flex items-center gap-2" v-for="(header, index) in headers" :key="index">
        <span class="w-full py-2 text-start"> {{ header.name }} </span>
        <select v-model="selectedValue" v-if="header.type === 'String'"
          class="block w-full px-2 py-1 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-gray-500 focus:border-gray-400">
          <option :value="`${header.name}-asc`" selected>A &rarr; Z</option>
          <option :value="`${header.name}-desc`">Z &rarr; A</option>
        </select>
        <select v-model="selectedValue" v-if="header.type === 'Number' || header.type === 'Date'"
          class="block w-full px-2 py-1 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-gray-500 focus:border-gray-400">
          <option :value="`${header.name}-asc`" selected>1 &rarr; 9</option>
          <option :value="`${header.name}-desc`">9 &rarr; 1</option>
        </select>
      </li>
    </ul>
  </div>
</template>
