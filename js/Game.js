AFRAME .registerComponent("game-play",{
    schema:{
        elementid:{type:"string",default:"#ring1"}
    },
    update:function(){
        this.iscollided(this.data.elementid)
    },
    iscollided:function(elementid){
        const Element=document.querySelector(elementid)
        Element.addEventListener("collide",e=>{
            if(elementid.includes("#ring")){
                console.log(elementid+"collision")
            }
            else if(elementid.includes("#hurdle")){
                console.log(elementid+"collision")
            }
        })
    }
})