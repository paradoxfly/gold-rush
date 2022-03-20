import { overlap } from "../utils/surfaceFunctions"
import Object from "./Object"

export default class Lava extends Object{		//Default starting coordinates = (92,7)
	constructor(dispatch, x,y, distance = 0){
		super()
		this.dispatch = dispatch
		this.gravID = null
		this.defaultX = x
		this.defaultY = y
		this.x = x
		this.y = y
		this.distance = distance
		this.width = 2
		this.height = 2
		this.color = "red"
		this.surface = []
		this.stageSurface = []
	}
	
	gravity(...surface){					//Takes surfaces.. Returns false when surface is encountered and loop terminates
		this.gravID = setInterval(() => {
			if((this.distance!==0)&&(this.x===this.defaultX)&&(this.y===this.defaultY + this.distance)){
				this.move(this.defaultX, this.defaultY)
			} else{
				let holder = 0
				for (let i = 0; i < surface[0].length; i++){
					if(!overlap(surface[0][i], this.checkSurface(this.x, this.y+1))){
						holder++
					}
				}
				if(holder === surface[0].length){
					this.move(this.x, this.y+1)
				}
				else{		//resets when it meets an obstacle
					this.move(this.defaultX, this.defaultY)
				}
			}
			
		}, 70);
	}
}