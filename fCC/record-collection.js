// Setup
var recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
};
  
  // Only change code below this line
function updateRecords(records, id, prop, value) {
    if (!value) delete records[id][prop];
    else (prop == "tracks") ? (records[id].hasOwnProperty("tracks") ? records[id][prop].push(value) : records[id][prop] = [value]) : (records[id][prop] = value);
    return records;
}

updateRecords(recordCollection, 1245, "albumTitle", "Riptide");
console.log(recordCollection);