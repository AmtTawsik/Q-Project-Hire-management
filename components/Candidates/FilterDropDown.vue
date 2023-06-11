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

const { headers,queryMap } = defineProps(['headers','queryMap'])
const {
  filterDataByText,
  filterDataByNum,
  filterDataByDate,
  resetFilterFields,
} = useTableData();

const selectField = ref(headers[0].name);

//selected field type computed automatically with selectedFiled
const selectedFieldType = computed(() => {
  const currentField = headers.find(item => item.name === selectField.value)
  return currentField.type
})

const text = reactive({
  value: '',
  op: 'is',
});

const num = reactive({
  value: '',
  op: 'eq',
});

const date = reactive({
  value: '',
  op: 'is',
});

const resetBtnVisible = ref(false);

watchEffect(() => {
  if (
    text.value.trim().length !== 0 ||
    num.value.toString().trim().length !== 0 ||
    date.value.trim().length !== 0
  ) {
    resetBtnVisible.value = true;
  } else {
    resetBtnVisible.value = false;
    resetFilterFields();
  }
});

//value and operations are changed to map to get the value with single line using the selected input type. just like in line no 88 
const valueAndOperationMap = new Map([
  ["String", text],
  ["Number", num],
  ["Date", date]
])

//filter Function now can be used as per the selected input data type
const filterMap = new Map([
  ['Number', filterDataByNum],
  ['Date', filterDataByDate],
  ['String', filterDataByText],
]);

const filterHandler = () => {
  const selectedInput=valueAndOperationMap.get(selectedFieldType.value)

  //queryMap is coming as props so we need to defined it as per the structure of data in the paraent component
  const selectedQuery=queryMap.get(selectField.value)

  filterMap.get(selectedFieldType.value)(selectedInput.value,selectedInput.op,selectedQuery)
};

const resetHandler = () => {
  text.value = '';
  num.value = '';
  date.value = '';
  text.op = 'is';
  num.op = 'eq';
  date.op = 'is';
  resetFilterFields();
};
</script>

<template>
  <!-- FILTER Dropdown -->
  <button id="filterDropDownBtn" data-dropdown-toggle="filterDropDownMenu"
    class="flex items-center gap-1 border bg-white border-gray-300 px-3 py-2.5 text-gray-500 hover:bg-gray-400 hover:text-white rounded-md max-xl:px-4 max-sm:p-2">
    <FunnelIcon class="w-5 h-5" />
  </button>

  <!--FILTER Dropdown menu -->
  <div id="filterDropDownMenu" class="z-10 hidden bg-white divide-y divide-gray-100 max-lg:w-28">
    <ul
      class="flex items-center gap-1 px-3 py-4 text-sm text-gray-700 rounded-md shadow-md max-lg:flex-col max-lg:items-start"
      aria-labelledby="filterDropDownBtn">
      <li class="mr-1 max-lg:hidden">
        <p>Where</p>
      </li>
      <li>
        <select id="candidate" v-model="selectField"
          class="block w-full px-2 py-1 text-sm text-gray-800 truncate border border-gray-300 rounded-md bg-gray-50 focus:ring-green-400 focus:border-transparent max-lg:w-full">
          <option v-for="(header, index) in headers" :key="index" :value="header.name">{{ header.name }}</option>
        </select>
      </li>
      <li>
        <select v-if="selectedFieldType === 'String'" v-model="text.op"
          class="block w-full py-1 text-sm text-gray-800 border border-gray-300 rounded-md bg-gray-50 focus:ring-green-400 focus:border-transparent max-lg:w-full">
          <option selected value="is">is...</option>
          <option value="is-not">is not...</option>
        </select>

        <select v-if="selectedFieldType === 'Number'" v-model="num.op"
          class="block w-full py-1 text-sm text-gray-800 border border-gray-300 rounded-md bg-gray-50 focus:ring-green-400 focus:border-transparent max-lg:w-full">
          <option selected value="eq">&#x208C;</option>
          <option value="nt-eq">&#x2260;</option>
          <option value="lt">&lt;</option>
          <option value="gt">&gt;</option>
          <option value="le">&le;</option>
          <option value="ge">&ge;</option>
        </select>

        <select v-if="selectedFieldType === 'Date'" v-model="date.op"
          class="block w-full py-1 text-sm text-gray-800 border border-gray-300 rounded-md bg-gray-50 focus:ring-green-400 focus:border-transparent max-lg:w-full">
          <option selected value="is">is...</option>
          <option value="is-before">is before...</option>
          <option value="is-after">is after...</option>
          <option value="is-on-before">is on or before...</option>
          <option value="is-on-after">is on or after...</option>
        </select>
      </li>
      <li>
        <input v-if="selectedFieldType === 'String'" type="text" v-model="text.value"
          class="block w-24 px-2 py-1 text-sm text-gray-800 border border-gray-300 rounded-md bg-gray-50 focus:ring-green-400 focus:border-transparent max-lg:w-full"
          required />

        <input v-if="selectedFieldType === 'Number'" type="number" v-model="num.value"
          class="block w-24 px-2 py-1 text-sm text-gray-800 border border-gray-300 rounded-md bg-gray-50 focus:ring-green-400 focus:border-transparent max-lg:w-full"
          required max="5" min="1" />

        <input v-if="selectedFieldType === 'Date'" type="date" v-model="date.value"
          class="block w-24 px-2 py-1 text-sm text-gray-800 border border-gray-300 rounded-md bg-gray-50 focus:ring-green-400 focus:border-transparent max-lg:w-full"
          required />
      </li>
      <li class="max-lg:w-full">
        <button @click="filterHandler"
          class="px-2 py-1 text-sm text-gray-600 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 hover:border-green-400 max-lg:w-full max-lg:bg-green-400 max-lg:text-gray-800">
          Filter
        </button>
      </li>

      <li v-if="resetBtnVisible" class="max-lg:w-full">
        <button @click="resetHandler"
          class="p-1 text-sm text-gray-600 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 max-lg:w-full max-lg:text-gray-800 max-lg:flex max-lg:items-center max-lg:justify-center">
          <XMarkIcon class="w-5 h-5" />
        </button>
      </li>
    </ul>
  </div>
</template>
