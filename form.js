class Form {
  constructor(){
    this.input = createInput("nome")
    this.button = createButton("play")
    this.cumprimento = createElement("h3")
  }
  display(){
      var title = createElement("h2")
      title.html("red line")
      title.position(displayWidth/2,0)
      this.input.position(displayWidth/2,displayHeight/2 - 190);
      this.button.position(displayWidth/2,displayHeight/2 - 150)
      this.button.mousePressed(
          ()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount += 1
            player.index = playerCount
            player.update()  
            player.updateCount(playerCount)
            this.cumprimento.html("Welcome to red line were u can die racing "+player.name)
            this.cumprimento.position(displayWidth/2 - 150,200) 
          }
      )
    }
  hide(){
    this.cuprimento.hide()
    this.input.hide()
    this.button.hide()
  }
}