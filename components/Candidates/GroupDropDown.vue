<template>
  <!-- GROUP Dropdown -->
  <button
    id="groupDropDownBtn"
    data-dropdown-toggle="groupDropDownMenu"
    class="flex items-center gap-1 px-3 py-2.5 ml-4 text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-400 hover:text-white max-xl:px-4 max-sm:p-2"
  >
    <RectangleGroupIcon class="w-5 h-5" />
  </button>

  <!--GROUP Dropdown menu -->
  <div
    id="groupDropDownMenu"
    class="z-10 hidden px-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-28"
  >
    <div
      v-if="grouped.active"
      class="text-sm px-2 pt-2 pb-1.5 text-gray-700 font-medium flex items-center justify-between"
    >
      <div>
        {{ grouped.groupedBy }}
      </div>
      <button
        type="button"
        @click="
          setGroup({
            active: false,
            groupedBy: null,
          })
        "
      >
        <XMarkIcon class="w-4 h-4 mt-[.15rem] ml-1" />
      </button>
    </div>

    <ul
      class="flex flex-col items-start w-full py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="groupDropDownBtn"
    >
      <li class="w-full" v-for="(header,index) in headers" :key="header">
        <button
          type="button"
          @click="
            setGroup({
              active: true,
              groupedBy: header.name,
            })
          "
          class="flex items-start w-full px-2 py-2 rounded-md hover:bg-gray-100"
        >
          {{ header.name }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {
  RectangleGroupIcon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline';
import { Dropdown } from 'flowbite';
import useGroup from '~/composables/grouping';

const {headers}=defineProps(['headers'])
const { grouped, setGroup } = useGroup();
onMounted(() => {
  // set the dropdown menu element
  const $targetElGroup = document.getElementById('groupDropDownMenu');

  // set the element that trigger the dropdown menu on click
  const $triggerElGroup = document.getElementById('groupDropDownBtn');

  // options with default values
  const options = {
    placement: 'bottom',
    triggerType: 'click',
    offsetSkidding: 0,
    offsetDistance: 10,
    delay: 300,
  };

  const groupDropdown = new Dropdown($targetElGroup, $triggerElGroup, options);
  // initDropdowns()
});
</script>
