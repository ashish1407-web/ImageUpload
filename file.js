function addShows(arr){
let map=new Map();
for(let el of arr){
    if(map.has(el)){
    console.log(el)
map.set(el,(map.get(el))+1)
}else{
map.set(el,1)
}
}
console.log(map,"mapppppppppppppp")
}
let arr=[4,3,2,2,2,2,6,7]
addShows(arr);




// function reverseAlphaBhat(yy) {
//     let map = {};
//     let oo = '';
//     let pop = yy.split('');
//     let ff = pop.sort();
//     console.log(ff)

//     for (let el of pop) {
//         let charCode1 = el.charCodeAt(el);
//         map[charCode1] = (map[charCode1] || 0) + 1;
//     }
//     console.log(map)
//     for (let tot in map) {
//         console.log(tot)
//         let yy = String.fromCharCode(tot);
//         oo += yy.repeat(map[tot]);
//     }
//     return oo;
// }
// let rr = 'qooaaBy';
// let ll = reverseAlphaBhat(rr)
// console.log(ll)





// function addDetails(rr12345) {
//     let map = new Map();

//     for (let i = 0; i < rr12345.length; i++) {
//         if (!map.has(rr12345[i].name)) {
//             map.set(rr12345[i].name, {
//                 name: rr12345[i].name,
//                 gender: rr12345[i].gender,
//                 percentage: rr12345[i].percentage
//             })
//         } else {
//             continue;
//         }
//     }
//     console.log(map.values())
//     let ggg = Array.from(map.values());

//     console.log(ggg)
// }
// let rr12345 = [
//     { "name": "ashish1234", "gender": "male", "percentage": "44.7" },
//     { "name": "anamika", "gender": "female", "percentage": "46.7" },
//     { "name": "anamika", "gender": "female", "percentage": "90.7" },
//     { "name": "kush", "gender": "male", "percentage": "49.7" },
//     { "name": "ashish1234", "gender": "male", "percentage": "49.7" },
//     { "name": "ashish1234", "gender": "male", "percentage": "89.7" },
//     { "name": "Ritu", "gender": "female", "percentage": "45.7" }
// ];
// addDetails(rr12345)


















