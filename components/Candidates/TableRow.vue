<script setup>
import {
  EllipsisHorizontalIcon,
} from '@heroicons/vue/24/solid';

const { id, candidate, rating, stages, team, appliedDate, owner, headers } = defineProps(
  ['id', 'candidate', 'rating', 'stages', 'team', 'appliedDate', 'owner', 'headers']
);

const dataMap = new Map([
  ['Rating', { property: 'rating', visilibility: 'isRatingVisible', component: resolveComponent('CandidatesTableDataRating') }],
  ['Stages', { property: 'stages', visilibility: 'isStagesVisible', component: resolveComponent('CandidatesTableDataStages') }],
  ['Team', { property: 'team', visilibility: 'isTeamVisible', component: resolveComponent('CandidatesTableDataTeam') }],
  ['Applied Date', { property: 'appliedDate', visilibility: 'isDateVisible', component: resolveComponent('CandidatesTableDataDate') }],
  ['Owner', { property: 'owner', visilibility: 'isOwnerVisible', component: resolveComponent('CandidatesTableDataOwner') }],
])
const rowData = {
  id,
  candidate,
  rating,
  stages,
  team,
  appliedDate,
  owner,
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
        <input id="checkbox-table-search-1" type="checkbox"
          class="w-5 h-5 text-green-400 bg-gray-100 border-gray-300 focus:ring-white focus:ring-0" />
        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
      </div>
    </td>
    <td id="button-open" @click="detailsHandler(rowData)" scope="row"
      class="flex items-center px-3 py-5 text-gray-900 w-[210px]">
      <img class="w-10 h-10 rounded-full" :src="candidate.image" alt="Jese image" />

      <p class="pl-3 truncate">{{ candidate.name }}</p>
    </td>
    <template v-for="(header, i)  in headers" :key="i">
      <td v-if="tableTdVisible[dataMap.get(header).visilibility]">
        <component :is="dataMap.get(header)?.component" :content="rowData[dataMap.get(header).property]"></component>
      </td>
    </template>
    <td class="px-3 py-4 rounded-tr-md">
      <button>
        <EllipsisHorizontalIcon class="w-6 h-6" />
      </button>
    </td>
</template>
