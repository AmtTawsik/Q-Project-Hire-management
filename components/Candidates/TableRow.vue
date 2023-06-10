<script setup>
import { EllipsisHorizontalIcon } from '@heroicons/vue/24/solid';

const { data, headers, tableRowMap } = defineProps([
  'data',
  'headers',
  'tableRowMap',
]);

// console.log(data.candidate.name)
const rowData = {
  ...data,
};

const { currCandidate, getCurrentCandInfo } = useCandidate();
const { tableTdVisible } = useHideDropDown();

const detailsHandler = (rowData) => {
  getCurrentCandInfo(rowData);
};
</script>

<template>
  <td class="w-4 p-4 rounded-tl-md" scope="row">
    <div class="flex items-center">
      <input
        id="checkbox-table-search-1"
        type="checkbox"
        class="w-5 h-5 text-green-400 bg-gray-100 border-gray-300 focus:ring-white focus:ring-0"
      />
      <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
    </div>
  </td>
  <td
    id="button-open"
    @click="detailsHandler(rowData)"
    scope="row"
    class="flex items-center px-3 py-5 text-gray-900 w-[170px] truncate"
  >
    <img
      class="w-10 h-10 rounded-full"
      :src="rowData.candidate.image"
      alt="Jese image"
    />

    <p class="pl-3 truncate">{{ rowData.candidate.name }}</p>
  </td>
  <template v-for="(header, i) in headers" :key="i">
    <td v-if="tableTdVisible[tableRowMap.get(header.name).visilibility]">
      <component
        :is="tableRowMap.get(header.name)?.component"
        :content="rowData[tableRowMap.get(header.name).property]"
      >
      </component>
    </td>
  </template>
  <td class="px-3 py-4 rounded-tr-md">
    <button>
      <EllipsisHorizontalIcon class="w-6 h-6" />
    </button>
  </td>
</template>
