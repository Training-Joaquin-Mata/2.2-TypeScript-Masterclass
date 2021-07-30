// <----------------------- “typeof” and Type Guards

// function foo(bar: string|number){
//     // con este if detecta si el parametro bar es string o es number
//         if(typeof bar === 'string'){
//                 //STRING    
//                 return bar.toUpperCase();        
//         }
//         if(typeof bar === 'number'){
//                 //number
//                 return bar.toFixed(2);
//         }
// }

class Song{

    constructor(public title: string, public duration: string| number) {}

}

function getSongDuration(item: Song){
if(typeof item.duration === 'string'){
    return item.duration;
}

const {duration}= item;

const minutes = Math.floor(duration / 60000);
const seconds = (duration/ 1000) % 60;
return `${minutes}:${seconds}`

}

const songDurationFromString = getSongDuration(
    new Song('Wonderful Wondergul', '05:31')
);

console.log(songDurationFromString)

const songDurationFromMS = getSongDuration(
    new Song('Wonderful Wondergul', 331000)
);

console.log(songDurationFromMS);