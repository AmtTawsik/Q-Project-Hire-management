<template>
    <SideDrawer />
    <main class="mb-8">
        <header
            class="flex items-center justify-between mx-6 mt-6 max-md:flex-col max-md:items-start max-md:gap-4 max-md:mt-8">
            <div>
                <h2 class="text-xl font-semibold capitalize">
                    senior product designer
                </h2>
                <p class="text-sm text-gray-600">Purwokerto. Full time</p>
            </div>
            <div>
                <button type="button"
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Share and Promote
                </button>
                <button type="button"
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Published
                </button>
            </div>
        </header>
        <div class="flex items-center justify-between mx-6 mt-6 max-md:flex-col max-md:items-start max-md:gap-4">
            <h3 class="text-base font-medium capitalize">
                total candidates:
                <span class="p-1 ml-1 font-semibold text-white bg-green-700 rounded-sm">
                    22</span>
            </h3>

            <div class="flex p-1 bg-gray-400 rounded-md">
                <button class="px-3 py-1 font-semibold bg-white rounded-md">
                    Pipeline view
                </button>
                <button class="px-3 py-1 font-semibold rounded-md">Table view</button>
            </div>
        </div>

        <section class="grid grid-cols-4 gap-8 mx-6 mt-6 max-lg:grid-cols-2 max-lg:gap-y-12 max-md:grid-cols-1 max-md:mt-8">
            <div v-for="(candidates, group) in byGrouped" class="flex flex-col gap-4">
                <CandCardHead :border="`${candidates[0].stages.border}`" :title="group" :count="candidates.length" />
                <draggable :list="candidates" group="kanban" itemKey="grouped"
                    @change="changeGroup(candidates, $event, 'stages')" class="flex flex-col gap-4">
                    <template #item="{ element: data, index }">
                        <CandCardBody :content="data" class="cursor-grab" 
                        @click="() => { 
                            detailsHandler({ ...data }) 
                            drawer.toggle()
                            console.log(drawer)
                            }" />
                    </template>
                </draggable>
            </div>
        </section>
    </main>
</template>
  
<script setup>
import draggable from 'vuedraggable'
const { DUMMY_DATA } = useTableData()
const { candidateData } = useCandidateData()

const byGrouped = computed(() => {
    return arrangeByStages(candidateData.value, 'stages.state');
});


function arrangeByStages(data, queryString) {
    const keys = queryString.split('.')
    return data?.reduce((acc, user) => {
        let fieldValue = user
        for (const key of keys) {
            if (fieldValue && fieldValue.hasOwnProperty(key)) {
                fieldValue = fieldValue[key]
            }
            else {
                fieldValue = undefined
                break
            }
        }
        (acc[fieldValue] ||= []).push(user);
        return acc;
    }, {})
}

function changeGroup(list, evt, key) {
    if (evt.added !== undefined) {
        let currentElement = list[evt.added.newIndex]
        let nextElement = list[(evt.added.newIndex + 1) % list.length]
        currentElement[key] = { ...nextElement[key], value: currentElement[key].value }
    }
}

const { currCandidate, getCurrentCandInfo } = useCandidate()
const detailsHandler = (rowData) => {
    getCurrentCandInfo(rowData);
};

const drawer=useState('drawer')
</script>