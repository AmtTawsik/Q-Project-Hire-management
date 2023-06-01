const candidate=ref({})


export default function useCandidate(){
    function setCandidate(item){
        candidate.value=item
    }
    return [candidate,setCandidate]
}