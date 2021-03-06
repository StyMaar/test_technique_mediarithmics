import axios from 'axios';

const EMPTY_CHEST = "This chest is empty :/ Try another one!";

const alreadyVisitedRooms = new Set();
const foundTreasures : Array<String> = [];

const NUMBER_RETRY = 5;

const ROOT_URL = "http://castles.poulpi.fr";

interface Chest{
  id: String,
  status: String,
}

function isChestEmpty(chest:any) { // should probably be a method
  return chest.status !== EMPTY_CHEST;
}

interface Room {
  id: String,
  rooms: Array<String>,
  chests: Array<String>,
}

async function makeRequest(url: String, failures : number = 0): Promise<any> {
  try {
    let response = await axios({
        method: 'get',
        url: `${ROOT_URL}${url}`,
    });
    return response.data;
  }catch(e){
    failures++;
    if(failures > NUMBER_RETRY){
      throw e;
    }else{
      makeRequest(url, failures);
    }
  }
}


function checkAndVisitRoom(roomUrl: String) : Promise<Room> | null {
  if (alreadyVisitedRooms.has(roomUrl)) {
    return null;
  }
  alreadyVisitedRooms.add(roomUrl)
  return makeRequest(roomUrl);
}


async function openChest(chestUrl: String) {
  let chest : Chest = await makeRequest(chestUrl);

  if (isChestEmpty(chest)) {
    foundTreasures.push(`http://castles.poulpi.fr/castles/1/chests/${chest.id}`);
  }
}

async function recursivelyExploreCastle(roomUrl: String){
  // we can recursively explore the castle without fearing a stackoverflow because since the exploration is asynchronous, all the function calls won't be in the stack together
  let room = checkAndVisitRoom(roomUrl);

  if(room === null){
    return;
  }

  let { rooms, chests } = await room;

  await Promise.all(chests.map( (url: String) => openChest(url)));

  await Promise.all(rooms.map( (url: String) => recursivelyExploreCastle(url)));
  // the function won't return until every room has been explored
}

async function main(){
  try {
    await recursivelyExploreCastle("/castles/1/rooms/entry");
    console.log(foundTreasures);
  } catch (e){
    console.log("an error occured", e);
  }
}


main().then(()=> console.log("task done"));
