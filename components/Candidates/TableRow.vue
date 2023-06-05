<script setup>
import {
  ChevronDownIcon,
  EllipsisHorizontalIcon,
  StarIcon as SolidStartIcon,
} from '@heroicons/vue/24/solid';
import { StarIcon } from '@heroicons/vue/24/outline';

const { id, candidate, rating, stages, team, appliedDate, owner } = defineProps(
  ['id', 'candidate', 'rating', 'stages', 'team', 'appliedDate', 'owner']
);

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

const getDateFormat = (date) => {
  const month =
    date.getMonth() < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
  const format = `${date.getDate()}/${month}/${date.getFullYear()}`;
  return format;
};
</script>

<template>
  <tr class="text-base bg-gray-50 border-b max-xl:text-sm">
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
      class="flex items-center px-3 py-5 text-gray-900 cursor-pointer"
    >
      <img
        class="w-10 h-10 rounded-full"
        :src="candidate.image"
        alt="Jese image"
      />

      <p class="pl-3 truncate">{{ candidate.name }}</p>
    </td>
    <td v-if="tableTdVisible.isRatingVisible" scope="row" class="px-3 py-4">
      <button
        class="flex items-center gap-1 border px-2 py-[.05rem] rounded-full"
      >
        <SolidStartIcon v-if="rating > 0" class="text-yellow-300 w-4 h-4" />
        <StarIcon v-else class="text-gray-300 w-4 h-4" />
        <span
          :class="`${
            rating > 0 ? 'text-gray-800 font-semibold' : 'text-gray-500'
          } text-sm`"
          >{{ rating }}.0</span
        >
      </button>
    </td>
    <td v-if="tableTdVisible.isStagesVisible" scope="row" class="px-3 py-4">
      <div>
        <div class="flex items-center">
          <button class="flex items-center gap-1">
            <span class="text-black">{{ stages.state }}</span>
            <ChevronDownIcon class="w-4 h-4 text-black font-semibold" />
          </button>
        </div>

        <div v-if="stages.value <= 6" class="flex items-center gap-1 mt-1">
          <div
            v-for="n in stages.value"
            :key="n"
            :class="`${stages.color} w-7 flex items-center justify-center text-sm text-white font-medium rounded-sm`"
          >
            {{ n }}
          </div>

          <div
            v-for="n in 6 - stages.value"
            :key="n"
            class="bg-gray-200 w-7 flex items-center justify-center text-sm text-white font-medium rounded-sm"
          >
            &nbsp;
          </div>
        </div>
      </div>
    </td>

    <td v-if="tableTdVisible.isTeamVisible" scope="row" class="px-3 py-4">
      <p class="text-black truncate">{{ team.self }}</p>
      <p class="text-sm">{{ team.team }}</p>
    </td>

    <td v-if="tableTdVisible.isDateVisible" scope="row" class="px-3 py-4">
      <div class="text-black">{{ getDateFormat(appliedDate) }}</div>
    </td>

    <td v-if="tableTdVisible.isOwnerVisible" scope="row" class="px-3 py-5">
      <div class="flex items-center text-gray-900">
        <img
          class="w-10 h-10 rounded-full"
          :src="owner.image"
          alt="Jese image"
        />
        <p class="pl-3 truncate">{{ owner.name }}</p>
      </div>
    </td>

    <td class="px-3 py-4 rounded-tr-md">
      <button>
        <EllipsisHorizontalIcon class="w-6 h-6" />
      </button>
    </td>
  </tr>
</template>
