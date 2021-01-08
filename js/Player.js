class Player{
    constructor(){

    }
    getCount(){
        var playerCountref=database.ref('PlayerCount')
        playerCountref.on("value",function(data){
            PlayerCount=data.val()
        })
    }
    updateCount(count){
        database.ref('/').update({
            PlayerCount:count
        })
    }
    update(name){
       var playerIndex="Player"+PlayerCount
       database.ref(playerIndex).set({
           Name:name
       })
    }
}