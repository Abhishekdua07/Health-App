
var ans = require('../app.js');

console.log(ans.getRooms());


// var { room, Room } = require('../server/models/rooms');

// getRooms = () => {
//     Room.find({}, null, { sort: { name: 1 } }).then((room) => {
//         var roomsJSON = {};
//         // rooms is an array with all rooms
//         for (var i = 0; i < room.length; ++i) {
//             roomsJSON[room[i].name] = room[i].availability;
//         }
//         var count = 0;
//         // console.log(roomsJSON);
//         // console.log(room);

//         // console.log(room[4].availability);
//         for (var j = 0; j < room.length; j++) {
//             if (room[j].availability == true) {
//                 count++;
//             }
//         }
//         console.log(count);
//         return count;
//     });
// }
// getRooms();


// console.log(val);
