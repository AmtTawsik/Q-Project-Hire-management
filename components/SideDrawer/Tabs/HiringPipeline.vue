<script setup>
import { ChevronDownIcon, PlusCircleIcon } from '@heroicons/vue/24/solid';
import {
  ChatBubbleBottomCenterTextIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/vue/24/outline';
</script>

<template>
  <div>
    <div class="flex gap-2 items-center text-sm mb-4">
      <span class="text-gray-600">Stage of:</span>
      <p class="text-gray-800 font-medium">Design Team - UI Designer</p>
    </div>

    <ol
      class="flex items-center justify-between flex-wrap w-full text-sm font-medium text-center text-gray-500 bg-white rounded-md gap-4 border border-slate-200 px-3 py-2 max-lg:justify-normal"
    >
      <li class="flex items-center text-gray-600 max-lg:p-[.1rem]">
        <span>Screening</span>
        <ChevronDoubleRightIcon class="w-4 h-4 ml-2 sm:ml-4" />
      </li>
      <li class="flex items-center max-lg:p-[.1rem]">
        <span class="">Design Challange</span>
        <ChevronDoubleRightIcon class="w-4 h-4 ml-2 sm:ml-4" />
      </li>
      <li class="flex items-center text-orange-400 max-lg:p-[.1rem]">
        <span>Interview</span>
        <ChevronDoubleRightIcon class="w-4 h-4 ml-2 sm:ml-4" />
      </li>
      <li class="flex items-center max-lg:p-[.1rem]">
        <span>Test</span>
        <ChevronDoubleRightIcon class="w-4 h-4 ml-2 sm:ml-4" />
      </li>
      <li class="flex items-center max-lg:p-[.1rem]">
        <span>Hired</span>
        <ChevronDoubleRightIcon class="w-4 h-4 ml-2 sm:ml-4" />
      </li>
    </ol>

    <div class="rounded border border-slate-300 mt-4">
      <div class="px-4 py-3 border-b border-b-slate-300">
        <h3 class="text-sm font-semibold">Detail</h3>
      </div>

      <div class="p-4 grid grid-cols-[40fr_60fr] gap-y-4 max-lg:grid-cols-1">
        <div>
          <span class="text-slate-500 text-sm font-medium">Current Status</span>
          <div class="flex items-center gap-2">
            <div
              class="uppercase bg-green-900 rounded-full px-2 py-[.1rem] w-fit text-white flex items-center justify-center"
            >
              <span class="text-[.6rem] font-medium">Active</span>
            </div>

            <button class="text-xs text-green-500 font-medium">
              (View Workflow)
            </button>
          </div>
        </div>
        <div>
          <span class="text-slate-500 text-sm font-medium">Assignee</span>
          <div
            class="flex gap-2 items-center max-lg:flex-col max-lg:items-start max-lg:gap-1 max-lg:mt-1"
          >
            <img
              src="@/assets/images/pp-2.jpg "
              alt="owner-image"
              class="w-7 h-7 rounded-full"
            />

            <p class="text-xs text-gray-700 font-medium">Andri R. Hemington</p>
          </div>
        </div>
        <div>
          <span class="text-slate-500 text-sm font-medium">Stage</span>
          <p class="text-sm font-semibold text-gray-700">Interview</p>
        </div>
        <div>
          <span class="text-slate-500 text-sm font-medium">Owner</span>
          <div
            class="flex gap-2 items-center max-lg:flex-col max-lg:items-start max-lg:gap-1 max-lg:mt-1"
          >
            <img
              src="@/assets/images/pp-3.jpg"
              alt="owner-image"
              class="w-7 h-7 rounded-full"
            />

            <p class="text-xs text-gray-700 font-medium">Qualyval</p>
          </div>
        </div>
        <div>
          <div>
            <span class="text-slate-500 text-sm font-medium">Date</span>
            <p class="text-sm font-semibold text-gray-700">14 - 16 Mar 2021</p>
          </div>
        </div>

        <div class="self-center justify-self-end">
          <button
            class="capitalize text-xs border border-green-700 rounded-md px-3 py-2 text-green-700 font-semibold"
          >
            move next status
          </button>
        </div>
      </div>
    </div>

    <div class="rounded border border-slate-300 mt-4">
      <div
        class="px-4 py-3 border-b border-b-slate-300 flex justify-between items-center"
      >
        <h3 class="text-sm font-semibold">Notes</h3>
        <div>
          <button class="flex items-center gap-1">
            <span class="text-sm font-medium text-slate-600">Recent First</span>
            <ChevronDownIcon class="w-4 h-4" />
          </button>
        </div>
      </div>

      <div class="px-4 py-6 pr-0">
        <header>
          <button class="flex items-center gap-1 ml-10">
            <PlusCircleIcon class="w-5 h-5 text-green-700" />
            <span class="text-green-500 font-semibold text-xs">Add Note</span>
          </button>
        </header>

        <div class="flex gap-2 mt-4 border-b border-b-slate-200 pb-4">
          <img
            src="@/assets/images/pp-4.jpg"
            alt="people image"
            class="w-8 h-8 rounded-full"
          />

          <div>
            <div class="flex text-xs items-center gap-2">
              <p class="font-semibold text-gray-600">Qualyval</p>
              <span class="text-gray-700">13 Mar 2021 - 04:23 PM</span>
            </div>

            <p class="text-xs text-gray-600 font-medium">
              Candidate Successfully Interviewed for this stage
            </p>

            <button class="text-green-400 font-medium text-xs">2 Reply</button>
          </div>
          <ChatBubbleBottomCenterTextIcon
            class="w-5 h-5 text-gray-500 ml-auto mr-6"
          />
        </div>

        <div class="flex gap-2 mt-4">
          <img
            src="@/assets/images/pp-2.jpg"
            alt="people image"
            class="w-8 h-8 rounded-full"
          />

          <div>
            <div class="flex text-xs items-center gap-2">
              <p class="font-semibold text-gray-600">Andri R. Hemi</p>
              <span class="text-gray-700">13 Mar 2021 - 04:23 PM</span>
            </div>

            <p class="text-xs text-gray-600 font-medium">
              Submitted for client review
            </p>

            <button class="text-green-400 font-medium text-xs">2 Reply</button>
          </div>
          <ChatBubbleBottomCenterTextIcon
            class="w-5 h-5 text-gray-500 ml-auto mr-6"
          />
        </div>
      </div>
    </div>
  </div>
</template>
