<template>
    <!-- GROUP Dropdown -->
    <button id="groupDropDownBtn" data-dropdown-toggle="groupDropDownMenu"
        class="flex items-center gap-1 px-3 py-2 ml-4 text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-400 hover:text-white max-xl:px-4 max-sm:p-2">
        <RectangleGroupIcon class="w-6 h-6 max-xl:w-5 max-xl:h-5 max-sm:w-6 max-sm:h-6" />
    </button>
    <!--GROUP Dropdown menu -->
    <div id="groupDropDownMenu"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700">
        <div v-if="grouped.active" class="text-sm px-3 py-1.5 font-semibold flex items-center justify-between">
            <div class="flex items-center gap-2">
                <UserGroupIcon class="w-4 h-4 max-xl:w-5 max-xl:h-5 max-sm:w-6 max-sm:h-6" />
                {{ grouped.groupedBy }}
            </div>
            <button type="button" @click="setGroup({
                    active: false,
                    groupedBy: null
                })">
                <XMarkIcon class="w-4 h-4 max-xl:w-5 max-xl:h-5 max-sm:w-6 max-sm:h-6" />
            </button>
        </div>

        <ul class="flex flex-col items-start w-full py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="groupDropDownBtn">
            <li>
                <button type="button" @click="setGroup({
                    active: true,
                    groupedBy: 'Rating'
                })"
                    class="flex items-center w-full gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <UserGroupIcon class="w-5 h-5 max-xl:w-5 max-xl:h-5 max-sm:w-6 max-sm:h-6" />
                    Rating
                </button>
            </li>
            <li>
                <button type="button" @click="setGroup({
                    active: true,
                    groupedBy: 'Stages'
                })"
                    class="flex items-center w-full gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <UserGroupIcon class="w-5 h-5 max-xl:w-5 max-xl:h-5 max-sm:w-6 max-sm:h-6" /> Stages
                </button>
            </li>
            <li>
                <button typ="button" @click="setGroup({
                    active: true,
                    groupedBy: 'Team'
                })"
                    class="flex items-center w-full gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <UserGroupIcon class="w-5 h-5 max-xl:w-5 max-xl:h-5 max-sm:w-6 max-sm:h-6" /> Team
                </button>
            </li>
            <li>
                <button type="button" @click="setGroup({
                    active: true,
                    groupedBy: 'Owner'
                })"
                    class="flex items-center w-full gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <UserGroupIcon class="w-5 h-5 max-xl:w-5 max-xl:h-5 max-sm:w-6 max-sm:h-6" /> Owner
                </button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { RectangleGroupIcon,UserGroupIcon,XMarkIcon } from '@heroicons/vue/24/outline';
import { Dropdown } from 'flowbite';
import useGroup from '~/composables/grouping';

const { grouped, setGroup } = useGroup()
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