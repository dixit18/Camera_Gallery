// Open DB
// create objectStore
// make tranjection
let db;
let openRequest = indexedDB.open("myDataBase");
openRequest.addEventListener("success",(e)=>{
console.log("db open");
db = openRequest.result;
})
openRequest.addEventListener("error",(e)=>{
    console.log("db erro");
})
openRequest.addEventListener("upgradeneeded",(e)=>{
    console.log("db upgrade and also for initial DB creation");
    db = openRequest.result;

    // objectStore only be created in upgradeneeded event

    db.createObjectStore("video", {keyPath: "id" });
    db.createObjectStore("image", {keyPath: "id" });

})