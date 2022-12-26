import { generateSurface } from "../utils/surfaceFunctions"
import { overlap } from "../utils/surfaceFunctions"

export default class Object{
	constructor(dispatch, x, y, color = "white"){
		this.gravID = null
		this.dispatch = dispatch
		this.defaultX = x
		this.defaultY = y
		this.x = x
		this.y = y
		this.width = 2
		this.height = 2
		this.color = color
		this.surface = []
		this.stageSurface = []
	}

	initialize(surface){
		this.stageSurface = [...surface]
		this.draw()
		this.gravity(this.stageSurface)
	}

	draw(){
		this.x = this.defaultX
		this.y = this.defaultY
		this.dispatch.drawRectangle(this.x, this.y, this.width, this.height, this.color)
		this.surface = generateSurface(this.x, this.y, this.width, this.height)
	}

	clear(){
		this.dispatch.clearRectangle(this.x, this.y, this.width, this.height)
		this.surface = []
	}

	outOfBounds(x, y){			//Tests if coordinates x and y would put object out of bounds
		if((x>0)&&(x<=112)&&((x+this.width-1)<=112)&&(y>0)&&(y<=63)&&((y+this.height-1)<=63)){
			return false
		} else{
			return true
		}
	}

	setSurface(x,y){
		this.surface = generateSurface(x, y, this.width, this.height)
	}

	checkSurface(x,y){
		return generateSurface(x, y, this.width, this.height)
	}

	move(x, y){				
			this.dispatch.clearRectangle(this.x, this.y, this.width, this.height)
			this.x = x
			this.y = y
			this.dispatch.drawRectangle(this.x, this.y, this.width, this.height, this.color)
			this.setSurface(this.x, this.y)  //x and y are new coordinates
	}
  
	gravity(...surface){					//Takes surfaces.. Returns false when surface is encountered and loop terminates
		this.gravID = setInterval(() => {
			let holder = 0
			for (let i = 0; i < surface[0].length; i++){
				if(!overlap(surface[0][i], this.checkSurface(this.x, this.y+1))){
					holder++
				}
			}
			if(holder === surface[0].length){
				this.move(this.x, this.y+1)
			}
			else {
				return false
			}
		}, 70);
	}
}