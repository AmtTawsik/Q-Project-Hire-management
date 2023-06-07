export default function useGroup(){
    const grouped=useState('group',()=>({
        active:false,
        groupedBy:null
    }))

    function setGroup(item){
        grouped.value=item 
    }
    return {grouped,setGroup}
}