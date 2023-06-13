<script setup>
import { EllipsisHorizontalIcon } from '@heroicons/vue/24/solid';

const { data, headers, tableRowMap } = defineProps([
  'data',
  'headers',
  'tableRowMap',
]);

const rowData = {
  ...data,
};

const { tableTdVisible } = useHideDropDown();
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
  <template v-for="(header, i) in headers" :key="i">
    <td v-if="tableRowMap.get(header.name).visibility===undefined?true:tableTdVisible[tableRowMap.get(header.name).visibility]">
      <component
        :is="tableRowMap.get(header.name)?.component"
        :content="rowData[tableRowMap.get(header.name).property]"
        @click="tableRowMap.get(header.name)?.clickHandler!==undefined?tableRowMap.get(header.name).clickHandler(rowData):''"
        :id="tableRowMap.get(header.name)?.id"
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
