// // <----------------------- “typeof” and Type Guards

// // function foo(bar: string|number){
// //     // con este if detecta si el parametro bar es string o es number
// //         if(typeof bar === 'string'){
// //                 //STRING    
// //                 return bar.toUpperCase();        
// //         }
// //         if(typeof bar === 'number'){
// //                 //number
// //                 return bar.toFixed(2);
// //         }
// // }

// class Song{

//     constructor(public title: string, public duration: string| number) {}

// }

// function getSongDuration(item: Song){
// if(typeof item.duration === 'string'){
//     return item.duration;
// }

// const {duration}= item;

// const minutes = Math.floor(duration / 60000);
// const seconds = (duration/ 1000) % 60;
// return `${minutes}:${seconds}`

// }

// const songDurationFromString = getSongDuration(
//     new Song('Wonderful Wondergul', '05:31')
// );

// console.log(songDurationFromString)

// const songDurationFromMS = getSongDuration(
//     new Song('Wonderful Wondergul', 331000)
// );

// console.log(songDurationFromMS);

// // <----------------------- “instanceof” and Type Guards


// class Song {
//     constructor(public title: string, public duration: number){}
// }

// class PlayList {
//     constructor(public name: string, public songs: Song[]){}
// }

// function getItemName(item: Song | PlayList){
//     if(item instanceof Song){
//         return item.title;
//     }

//     return item.name;
// }


// const songName = getItemName(new Song('Wonderful Wonderful', 300000))

// console.log(`Name of the song: 
//                 ${songName}                
// `);

// const playListName = getItemName(
//     new PlayList('The Best Songs', [new Song('The man', 3000000)])
// ); 

// console.log(`PlayList name:  
//                 ${playListName}                
// `);

// // <----------------------- User Defined Type Guards


// class Song {
//     constructor(public title: string, public duration: number){}
// }

// class PlayList {
//     constructor(public name: string, public songs: Song[]){}
// }


// //esta nueva funcion solo puede regresar un boolean, esta funcion se usa para comprobar si el tem es de cirtto tipo, y si lo es manda un true
// function isSong(item: any): item is Song{
//     return item instanceof Song;
// }

// function getItemName(item: Song | PlayList){
//     if(isSong(item)){
//         return item.title;
//     }

//     return item.name;
// }

// const songName = getItemName(new Song('Wonderful Wonderful', 300000))

// console.log(`Name of the song: 
//                 ${songName}                
// `);

// const playListName = getItemName(
//     new PlayList('The Best Songs', [new Song('The man', 3000000)])
// ); 

// console.log(`PlayList name:  
//                 ${playListName}                
// `);


// <----------------------- Literal TypeGuards and "in" operator
class Song {
    kind:'song',
    constructor(public title: string, public duration: number, song){}
}

class PlayList {
    constructor(public name: string, public songs: Song[]){}
}

function isSong(item: any): item is Song{
    // "in" checa si la propiedad se encuentra en el objeto, regresa true si lo esta y false si no
    return 'title' in item ;
}

function getItemName(item: Song | PlayList){
    //if(isSong(item)){
      if(item.kind === 'song'){
        return item.title;
    }

    return item.name;
}

const songName = getItemName(new Song('Wonderful Wonderful', 300000))

console.log(`Name of the song: 
                ${songName}                
`);

const playListName = getItemName(
    new PlayList('The Best Songs', [new Song('The man', 3000000)])
); 

console.log(`PlayList name:  
                ${playListName}                
`);