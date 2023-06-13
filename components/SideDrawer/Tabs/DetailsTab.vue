<script setup>
import { PencilSquareIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="rounded border border-slate-300">
      <div
        class="flex justify-between items-center px-4 py-2 border-b border-b-slate-300"
      >
        <h3 class="text-sm font-semibold">Basic Information</h3>
        <div class="flex gap-1 items-center">
          <PencilSquareIcon class="w-6 h-6 text-slate-700" />
          <span class="text-sm text-slate-700 font-normal max-lg:hidden"
            >Edit Info</span
          >
        </div>
      </div>

      <div class="p-4 grid grid-cols-[40fr_60fr] gap-y-4 max-lg:grid-cols-1">
        <div>
          <span class="text-slate-500 text-sm font-medium">Name</span>
          <p class="text-sm font-semibold text-gray-700">Cody Fisher</p>
        </div>
        <div>
          <span class="text-slate-500 text-sm font-medium">Email</span>
          <p class="text-sm font-semibold text-gray-700">example@email.com</p>
        </div>
        <div>
          <span class="text-slate-500 text-sm font-medium">Origin</span>
          <p class="text-sm font-semibold text-gray-700">Sourced</p>
        </div>
        <div>
          <span class="text-slate-500 text-sm font-medium">Phone</span>
          <p class="text-sm font-semibold text-gray-700">+62 7583-9749</p>
        </div>
        <div>
          <span class="text-slate-500 text-sm font-medium">Candidate ID</span>
          <p class="text-sm font-semibold text-gray-700">TM_3_CFP</p>
        </div>
        <div>
          <span class="text-slate-500 text-sm font-medium">Website</span>
          <p class="text-sm font-semibold text-gray-700">www.example.com</p>
        </div>
        <div>
          <span class="text-slate-500 text-sm font-medium">Address</span>
          <p class="text-sm font-semibold text-gray-700">abc Street, 12347</p>
        </div>
      </div>
    </div>

    <div class="rounded border border-slate-300">
      <div
        class="flex justify-between items-center px-4 py-2 border-b border-b-slate-300"
      >
        <h3 class="text-sm font-semibold">Professional Details</h3>
        <div class="flex gap-1 items-center">
          <PencilSquareIcon class="w-6 h-6 text-slate-700" />
          <span class="text-sm text-slate-700 font-normal max-lg:hidden"
            >Edit Info</span
          >
        </div>
      </div>

      <div class="p-4 grid grid-cols-[40fr_60fr] gap-y-4 max-lg:grid-cols-1">
        <div>
          <span class="text-slate-500 text-sm font-medium"
            >Current Job Title</span
          >
          <p class="text-sm font-semibold text-gray-700">UI/UX Designer</p>
        </div>
        <div>
          <span class="text-slate-500 text-sm font-medium"
            >Highest Qualification Held</span
          >
          <p class="text-sm font-semibold text-gray-700">
            Bachelors in Engineering
          </p>
        </div>
        <div>
          <span class="text-slate-500 text-sm font-medium"
            >Expected Sallery</span
          >
          <p class="text-sm font-semibold text-gray-700">-</p>
        </div>
        <div>
          <span class="text-slate-500 text-sm font-medium"
            >Current Sallery</span
          >
          <p class="text-sm font-semibold text-gray-700">-</p>
        </div>
        <div>
          <span class="text-slate-500 text-sm font-medium"
            >Experience in Years</span
          >
          <p class="text-sm font-semibold text-gray-700">3 Year</p>
        </div>
        <div>
          <span class="text-slate-500 text-sm font-medium">Skype ID</span>
          <p class="text-sm font-semibold text-gray-700">cody_fisher</p>
        </div>
        <div>
          <span class="text-slate-500 text-sm font-medium">Address Info</span>
          <p class="text-sm font-semibold text-gray-700">abc Street, 12347</p>
        </div>
        <div>
          <span class="text-slate-500 text-sm font-medium">Skill Set</span>

          <div class="flex items-center gap-2">
            <div class="bg-blue-300 rounded-full">
              <p class="text-xs font-medium py-[.15rem] px-2 text-gray-800">
                Html
              </p>
            </div>
            <div class="bg-blue-300 rounded-full">
              <p class="text-xs font-medium py-[.15rem] px-2 text-gray-800">
                Css
              </p>
            </div>
            <div class="bg-blue-300 rounded-full">
              <p class="text-xs font-medium py-[.15rem] px-2 text-gray-800">
                Sketching
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
