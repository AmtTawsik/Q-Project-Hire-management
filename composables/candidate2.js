import p1 from '@/assets/images/pp-1.jpg';
import p2 from '@/assets/images/pp-2.jpg';
import p3 from '@/assets/images/pp-3.jpg';
import p4 from '@/assets/images/pp-4.jpg';
import p5 from '@/assets/images/pp-5.jpg';

export function useCandidateData(){
    const candidateRawData=[
        {
          id: 1,
          candidate: {
            name: 'Darlene Robertson',
            image: p1,
          },
          rating: 0,
          stages: {
            state: 'Screening',
            value: 2,
            color: 'bg-green-800',
            border:'border-t-green-800'
          },
          team: {
            self: 'Junior UI Designer',
            team: 'Design Team',
          },
          days:1
        },
        {
          id: 1,
          candidate: {
            name: 'Darlene Robertson 2',
            image: p5,
          },
          rating: 0,
          stages: {
            state: 'Screening',
            value: 2,
            color: 'bg-green-800',
            border:'border-t-green-800'
          },
          team: {
            self: 'Junior UI Designer ',
            team: 'Design Team',
          },
          days:2
        },
        {
          id: 2,
          candidate: {
            name: 'Cody Fisher',
            image: p3,
          },
          rating: 2,
          stages: {
            state: 'New Applied',
            value: 1,
            color: 'bg-emerald-400',
            border:'border-t-emerald-400'
          },
          team: {
            self: 'Junior UX Designer',
            team: 'Design Team',
          },
          days:1
        },
        {
          id: 3,
          candidate: {
            name: 'Jenny Wilson',
            image: p4,
          },
          rating: 3,
          stages: {
            state: 'Design Challange',
            value: 3,
            color: 'bg-orange-400',
            border:'border-t-orange-400'
          },
          team: {
            self: 'UX Researcher',
            team: 'Design Team',
          },
          days:1
        },
        {
          id: 4,
          candidate: {
            name: 'Diana Jane',
            image: p5,
          },
          rating: 4,
          stages: {
            state: 'Interview',
            value: 4,
            color: 'bg-violet-400',
            border:'border-t-violet-400'
          },
          team: {
            self: 'UX Researcher',
            team: 'Developer Team',
          },
          days:1
        },
      ];
    const candidateData=useState('candidate',()=>candidateRawData)

    return {candidateData}
}