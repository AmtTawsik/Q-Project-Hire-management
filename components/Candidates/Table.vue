<script setup>
import { ChevronUpDownIcon } from '@heroicons/vue/24/solid';
import draggable from 'vuedraggable';
import { Drawer } from 'flowbite';
import useGroup from '~/composables/grouping';

const { TABLE_DATA, headers, queryMap, tableRowMap, groupMap } = defineProps([
  'TABLE_DATA',
  'headers',
  'queryMap',
  'tableRowMap',
  'groupMap',
]);

const { grouped } = useGroup();
const { tableTdVisible } = useHideDropDown();
const draggable_local_headers = ref(headers.filter((item) => !item.primaryKey));
const non_draggable_local_headers = ref(
  headers.filter((item) => item.primaryKey)
);
const local_headers = computed(() => {
  return [
    ...non_draggable_local_headers.value,
    ...draggable_local_headers.value,
  ];
});

const byGrouped = computed(() => {
  if (!grouped?.value.active) {
    return [];
  }
  return arrangeByProperty(TABLE_DATA, queryMap.get(grouped?.value.groupedBy));
});

//an universal grouping function whichs groups data depending on the queryString ,[ queryString ex. - 'team.team' , 'stages.state' . queryString is normally that string which we use to access the value in nested objects]
function arrangeByProperty(data, queryString) {
  const keys = queryString.split('.');
  return data.reduce((acc, user) => {
    let fieldValue = user;
    for (const key of keys) {
      if (fieldValue && fieldValue.hasOwnProperty(key)) {
        fieldValue = fieldValue[key];
      } else {
        fieldValue = undefined;
        break;
      }
    }
    (acc[fieldValue] ||= []).push(user);
    return acc;
  }, {});
}

//this change group function which takes the queryString which is coming from groupMap and change the grouping property with as same as its sibling elements
function changeGroup(list, evt, queryString) {
  if (evt.added !== undefined) {
    const keys = queryString.split('.');
    const lastKey = keys.at(-1);
    const nestedkeys = keys.slice(0, keys.length - 1);
    let currentElement = list[evt.added.newIndex];
    let nextElement = list[(evt.added.newIndex + 1) % list.length];
    for (const key of nestedkeys) {
      if (currentElement && currentElement.hasOwnProperty(key)) {
        currentElement = currentElement[key];
        nextElement = nextElement[key];
      } else {
        currentElement = undefined;
        break;
      }
    }
    currentElement[lastKey] = nextElement[lastKey];
  }
}

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
  <SideDrawer />
  <div class="relative overflow-x-auto rounded-md">
    <table
      class="w-full text-sm text-left text-gray-500 border-collapse dark:text-gray-400"
    >
      <thead
        v-if="!grouped.active"
        class="text-sm text-gray-800 bg-white shadow-sm"
      >
        <draggable v-model="draggable_local_headers" item-key="id" tag="tr">
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
            <th
              scope="col"
              v-for="(header, index) in non_draggable_local_headers"
              class="px-3 py-3"
            >
              <div class="flex items-center gap-1">
                <span>{{ header.displayName }}</span>
                <ChevronUpDownIcon class="w-4 h-4" />
              </div>
            </th>
          </template>
          <template #item="{ element: header }">
            <th
              v-if="
                tableRowMap.get(header.name).visilibility === undefined
                  ? true
                  : tableTdVisible[tableRowMap.get(header.name).visilibility]
              "
              scope="col"
              class="px-3 py-3 cursor-pointer"
            >
              v-if="tableRowMap.get(header.name).visibility === undefined ? true
              : tableTdVisible[tableRowMap.get(header.name).visibility]"
              scope="col" class="px-3 py-3 cursor-pointer">
              <div class="flex items-center gap-1">
                <span>{{ header.displayName }}</span>
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
            v-model="draggable_local_headers"
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
              <th
                scope="col"
                v-for="(header, index) in non_draggable_local_headers"
                class="px-3 py-3"
              >
                <div class="flex items-center gap-1">
                  <span>{{ header.displayName }}</span>
                  <ChevronUpDownIcon class="w-4 h-4" />
                </div>
              </th>
            </template>
            <template #item="{ element: header }">
              <th
                v-if="
                  tableRowMap.get(header.name).visilibility === undefined
                    ? true
                    : tableTdVisible[tableRowMap.get(header.name).visilibility]
                "
                scope="col"
                class="px-3 py-3"
              >
                <div class="flex items-center gap-1">
                  <span>{{ header.displayName }}</span>
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
          v-for="(data, index) in TABLE_DATA"
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
            @change="
              changeGroup(candidates, $event, groupMap.get(grouped.groupedBy))
            "
          >
            <template #item="{ element: data, index }">
              <tr
                class="text-base border-b cursor-grab bg-gray-50 max-xl:text-sm"
              >
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
