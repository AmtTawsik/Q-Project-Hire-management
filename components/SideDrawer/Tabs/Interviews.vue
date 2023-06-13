<script setup>
import { PlusCircleIcon } from '@heroicons/vue/24/solid';
import {
  PencilSquareIcon,
  TrashIcon,
  HandThumbUpIcon,
} from '@heroicons/vue/24/outline';
</script>

<template>
  <div>
    <header class="flex items-center justify-between">
      <h4 class="text-sm font-semibold">Interview List</h4>
      <button class="flex gap-1 items-center">
        <PlusCircleIcon class="w-5 h-5 text-green-700" />
        <span class="capitalize text-xs font-semibold text-green-500"
          >Add schedule interview</span
        >
      </button>
    </header>

    <div class="mt-6 flex flex-col gap-6">
      <div>
        <header class="flex justify-between mb-2">
          <p class="text-xs font-medium text-gray-600">
            Mar 18, 2021(Thursday)
          </p>
          <div class="flex items-center gap-1">
            <button>
              <PencilSquareIcon class="w-5 h-5 text-gray-500" />
            </button>
            <button>
              <TrashIcon class="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </header>

        <div
          class="border border-slate-200 rounded-md px-3 py-4 border-l-4 border-l-cyan-500 shadow-sm"
        >
          <div
            class="items-center grid grid-cols-[30fr_20fr_30fr_20fr] gap-x-2 max-xl:grid-cols-[35fr_20fr_30fr_15fr] max-lg:grid-cols-1 max-lg:gap-y-4"
          >
            <div
              class="flex items-center gap-2 max-lg:flex-col max-lg:items-start"
            >
              <img
                class="w-8 h-8 rounded-full"
                src="@/assets/images/pp-1.jpg"
                alt="pp-1"
              />

              <div class="text-xs">
                <p class="font-semibold">Bagus Fakri</p>
                <p class="text-gray-600">Written Test - Onsite</p>
              </div>
            </div>

            <div class="text-xs">
              <p class="font-semibold">3:30 - 4:30PM</p>
              <p class="text-gray-600">1 Hour Interview</p>
            </div>

            <div class="text-xs">
              <p class="font-semibold">Townhall Room 12</p>
              <p class="text-gray-600">
                Scheduled by

                <span class="font-medium text-gray-800">Qualyval</span>
              </p>
            </div>

            <button
              class="text-green-700 text-xs font-semibold border border-green-700 px-3 py-2 rounded-md w-fit justify-self-end max-xl:p-2"
            >
              <span class="max-xl:hidden"> Submit Feedback </span>
              <HandThumbUpIcon class="w-5 h-5 hidden max-xl:inline-block" />
            </button>
          </div>
        </div>
      </div>

      <div>
        <header class="flex justify-between mb-2">
          <p class="text-xs font-medium text-gray-600">
            Mar 18, 2021(Thursday)
          </p>
          <div class="flex items-center gap-1">
            <button>
              <PencilSquareIcon class="w-5 h-5 text-gray-500" />
            </button>
            <button>
              <TrashIcon class="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </header>

        <div
          class="border border-slate-200 rounded-md px-3 py-4 border-l-4 border-l-yellow-400 shadow-sm"
        >
          <div
            class="items-center grid grid-cols-[30fr_20fr_30fr_20fr] gap-x-2 max-xl:grid-cols-[35fr_20fr_30fr_15fr] max-lg:grid-cols-1 max-lg:gap-y-4"
          >
            <div
              class="flex items-center gap-2 max-lg:flex-col max-lg:items-start"
            >
              <img
                class="w-8 h-8 rounded-full"
                src="@/assets/images/pp-2.jpg"
                alt="pp-1"
              />

              <div class="text-xs">
                <p class="font-semibold">Andri R. Herdi</p>
                <p class="text-gray-600">Tec Round - Onsite</p>
              </div>
            </div>

            <div class="text-xs">
              <p class="font-semibold">2:30 - 3:00PM</p>
              <p class="text-gray-600">1 Hour Interview</p>
            </div>

            <div class="text-xs">
              <p class="font-semibold">Townhall Room 12</p>
              <p class="text-gray-600">
                Scheduled by

                <span class="font-medium text-gray-800">Qualyval</span>
              </p>
            </div>

            <button
              class="text-green-700 text-xs font-semibold border border-green-700 px-3 py-2 rounded-md w-fit justify-self-end max-xl:p-2"
            >
              <span class="max-xl:hidden"> Submit Feedback </span>
              <HandThumbUpIcon class="w-5 h-5 hidden max-xl:inline-block" />
            </button>
          </div>
        </div>
      </div>

      <div>
        <header class="flex justify-between mb-2">
          <p class="text-xs font-medium text-gray-600">
            Mar 18, 2021(Thursday)
          </p>
          <div class="flex items-center gap-1">
            <button>
              <PencilSquareIcon class="w-5 h-5 text-gray-500" />
            </button>
            <button>
              <TrashIcon class="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </header>

        <div
          class="border border-slate-200 rounded-md px-3 py-4 border-l-4 border-l-cyan-500 shadow-sm"
        >
          <div
            class="items-center grid grid-cols-[30fr_20fr_30fr_20fr] gap-x-2 max-xl:grid-cols-[35fr_20fr_30fr_15fr] max-lg:grid-cols-1 max-lg:gap-y-4"
          >
            <div
              class="flex items-center gap-2 max-lg:flex-col max-lg:items-start"
            >
              <img
                class="w-8 h-8 rounded-full"
                src="@/assets/images/pp-3.jpg"
                alt="pp-1"
              />

              <div class="text-xs">
                <p class="font-semibold">Bagus Fakri</p>
                <p class="text-gray-600">Culture Round - Onsite</p>
              </div>
            </div>

            <div class="text-xs">
              <p class="font-semibold">3:30 - 4:30PM</p>
              <p class="text-gray-600">1 Hour Interview</p>
            </div>

            <div class="text-xs">
              <p class="font-semibold">Link Room Meet</p>
              <p class="text-gray-600">
                Scheduled by

                <span class="font-medium text-gray-800">Qualyval </span>
              </p>
            </div>

            <button
              class="text-green-700 text-xs font-semibold border border-green-700 px-3 py-2 rounded-md w-fit justify-self-end max-xl:p-2"
            >
              <span class="max-xl:hidden"> Submit Feedback </span>
              <HandThumbUpIcon class="w-5 h-5 hidden max-xl:inline-block" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
