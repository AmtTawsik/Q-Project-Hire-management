<script setup>
import { ChevronUpDownIcon } from '@heroicons/vue/24/solid';
import draggable from 'vuedraggable';
import { Drawer } from 'flowbite';
import useGroup from '~/composables/grouping';

const { TABLE_DATA,headers,groupMap,headMap,changeGroup,tableRowMap} =defineProps(['TABLE_DATA','headers','groupMap','headMap','changeGroup','tableRowMap'])
const local_headers=ref([...headers])
const { grouped } = useGroup();
const { tableTdVisible } = useHideDropDown();

let byGrouped;
byGrouped = computed(() => {
  if (!grouped?.value.active) {
    return [];
  }
  return groupMap.get(grouped.value.groupedBy)(TABLE_DATA);
});

onMounted(() => {
  // setup available elements
  const $buttonElement = document.querySelectorAll('#button-open');
  const $drawerElement = document.querySelector('#drawer-right');
  const $closeButton = document.querySelector('#close-button');
  
  // set modal options

  const drawerOptions = {
    placement: 'right',
    backdrop: true,
    bodyScrolling: false,
    edge: false,
    edgeOffset: '',
    backdropClasses:
      'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
  };

  // create a new modal instance
  if ($drawerElement) {
    const drawer = new Drawer($drawerElement, drawerOptions);

    $buttonElement.forEach((el) => {
      el.addEventListener('click', () => drawer.toggle());
    });
  }
});
</script>
<template>
  <CandidatesDetails />

  <div class="relative overflow-x-auto rounded-md">
    <table
      class="w-full text-sm text-left text-gray-500 border-collapse dark:text-gray-400"
    >
      <thead
        v-if="!grouped.active"
        class="text-sm text-gray-800 bg-white shadow-sm"
      >
        <draggable v-model="local_headers" item-key="id" tag="tr">
          <template #header>
            <th scope="col" class="p-4 rounded-l-md">
              <div class="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  class="w-5 h-5 text-green-400 bg-gray-100 border-gray-300 focus:ring-white focus:ring-0"
                />
                <label for="checkbox-all-search" class="sr-only"
                  >checkbox</label
                >
              </div>
            </th>
            <th scope="col" class="px-3 py-3">
              <div class="flex items-center gap-1">
                <span>Candidate Name</span>
                <ChevronUpDownIcon class="w-4 h-4" />
              </div>
            </th>
          </template>
          <template #item="{ element: header }">
            <th
              v-if="tableTdVisible[headMap.get(header.name)]"
              scope="col"
              class="px-3 py-3 cursor-pointer"
            >
              <div class="flex items-center gap-1">
                <span>{{ header.name }}</span>
                <ChevronUpDownIcon class="w-4 h-4" />
              </div>
            </th>
          </template>
          <template #footer>
            <th scope="col" class="px-3 py-3 rounded-r-md">
              <div class="flex items-center gap-1">&nbsp;</div>
            </th>
          </template>
        </draggable>
      </thead>
      <thead v-else class="text-sm text-gray-800 bg-white shadow-sm">
        <tr>
          <draggable
            v-model="local_headers"
            item-key="id"
            tag="tr"
            class="flex items-center gap-8"
          >
            <template #header>
              <th scope="col" class="p-4 rounded-l-md">
                <div class="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-5 h-5 text-green-400 bg-gray-100 border-gray-300 focus:ring-white focus:ring-0"
                  />
                  <label for="checkbox-all-search" class="sr-only"
                    >checkbox</label
                  >
                </div>
              </th>
              <th scope="col" class="px-3 py-3">
                <div class="flex items-center gap-1">
                  <span>Candidate Name</span>
                  <ChevronUpDownIcon class="w-4 h-4" />
                </div>
              </th>
            </template>
            <template #item="{ element: header }">
              <th
                v-if="tableTdVisible[headMap.get(header.name)]"
                scope="col"
                class="px-3 py-3"
              >
                <div class="flex items-center gap-1">
                  <span>{{ header.name }}</span>
                  <ChevronUpDownIcon class="w-4 h-4" />
                </div>
              </th>
            </template>
            <template #footer>
              <th scope="col" class="px-3 py-3 rounded-r-md">
                <div class="flex items-center gap-1">&nbsp;</div>
              </th>
            </template>
          </draggable>
        </tr>
      </thead>
      <tbody v-if="!grouped.active" class="candidate-tbody">
        <tr
          class="text-base border-b cursor-pointer bg-gray-50 max-xl:text-sm"
          v-for="(data,index) in TABLE_DATA"
        >
          <CandidatesTableRow
            :key="data.id"
            :data="data"
            :tableRowMap="tableRowMap"
            :headers="local_headers"
          />
        </tr>
      </tbody>
      <tbody v-else>
        <template v-for="(candidates, group) in byGrouped" :key="group">
          <tr class="px-4 py-3">
            <td colspan="8">
              <div class="flex flex-col gap-2">
                <span class="">{{ grouped.groupedBy }}</span>
                <span class="text-lg font-bold">{{ group }}</span>
              </div>
            </td>
          </tr>
          <draggable
            :list="candidates"
            :group="{ name: 'candidates', pull: true, put: true }"
            itemKey="grouped"
            tag="tr"
            @change="changeGroup(candidates, $event,grouped.groupedBy)"
          >
            <template #item="{ element: data,index }">
              <tr class="text-base border-b cursor-grab bg-gray-50 max-xl:text-sm">
                <CandidatesTableRow
                  :key="data.id"
                  :data="data"
                  :tableRowMap="tableRowMap"
                  :headers="local_headers"
                />
              </tr>
            </template>
          </draggable>
        </template>
      </tbody>
    </table>
  </div>
</template>
