//couldn't find any models so this is best I could do.

AFRAME.registerComponent("terrain-moving", {
    schema:{
        speedOfPosition:{type: "number", default: 0}
    },

    init: function(){
        window.addEventListener("keydown", (e)=>{
            this.data.speedOfPosition = this.el.getAttribute("position")
            terrainPosition = this.data.speedOfPosition
            if (e.key === "ArrowLeft") {
                if (terrainPosition.x > -5){
                    terrainPosition.x = terrainPosition.x - 0.1
                    this.el.setAttribute("position", terrainPosition)
                }
            }

            if (e.key === "ArrowRight") {
                if (terrainPosition.x < 5){
                    terrainPosition.x = terrainPosition.x + 0.1
                    this.el.setAttribute("position", terrainPosition)
                }
            }

            if (e.key === "ArrowDown") {
                if (terrainPosition.y > -2.5){
                    terrainPosition.y = terrainPosition.y - 0.1
                    this.el.setAttribute("position", terrainPosition)
                }
            }

            if (e.key === "ArrowUp") {
                if (terrainPosition.y < 2.5) {
                    terrainPosition.y = terrainPosition.y + 0.1
                    this.el.setAttribute("position", terrainPosition)
                }
            }
        })
    }
})