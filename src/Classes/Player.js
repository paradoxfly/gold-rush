import { drawRect} from "../redux/utils/draw"
import { overlap } from "../utils/surfaceFunctions"
import Object from "./Object"

export default class Player extends Object{     //Default starting coordinates (108,31)
	constructor(dispatch, x, y, color = "yellow"){
		super()
		this.gravID = null
		this.dispatch = dispatch
		this.defaultX = x
		this.defaultY = y
		this.x = x
		this.y = y
		this.width = 1
		this.height = 5
		this.color = color
		this.surface = []
		this.stageSurface = []
		this.controller = this.controller.bind(this)
		this.blink = this.blink.bind(this)
		this.jump = this.jump.bind(this)
	}

	blink(){
		let n = 6
		setInterval(() => {
			if(n > 2){
				if (n%2 === 0){
					drawRect(this.x, this.y, this.width, this.height, "red", this.dispatch)
				}
				else {
					drawRect(this.x, this.y, this.width, this.height, this.color, this.dispatch)
				}
			}
			else{
				clearInterval()
			}
			n--
		}, 600);
	}

	jump(){
		let surface = this.stageSurface
		let jumpHeight = 18
		let holder1 = 0
		for (let j = 0; j < surface.length; j++){
			if((!overlap(surface[j], this.checkSurface(this.x, this.y+1)))){
				holder1++
			}
		}
		if (holder1 !== surface.length){
			setInterval(() => {
				let holder = 0
				for (let i = 0; i < surface.length; i++){
					if((!overlap(surface[i], this.checkSurface(this.x, this.y-1)))){
						holder++
					}
				}
				if(jumpHeight>0){
					if(holder === surface.length){
						this.move(this.x, this.y-1)
					}
				}
				else{
					clearInterval()
				}
				jumpHeight--
			}, 18);
		}
	}

	diagonalJump(direction){
		let surface = this.stageSurface
		let jumpHeight = 18
		let holder1 = 0
		for (let j = 0; j < surface.length; j++){
			if( (!overlap(surface[j], this.checkSurface(this.x, this.y+1))) ){
				holder1++
			}
		}
		if (holder1 !== surface.length){
			setInterval(() => {
				let holder = 0
				for (let i = 0; i < surface.length; i++){
					if((!overlap(surface[i], this.checkSurface(this.x, this.y-1)))){
						holder++
					}
				}
				if(jumpHeight>0){
					if(holder === surface.length){
						this.move(this.x, this.y-1)
						this.moveHorizontal(direction)
						this.moveHorizontal(direction)
					}
				}
				else{
					clearInterval()
				}
				jumpHeight--
			}, 18);
		}
	}

	moveHorizontal(direction){ //surface conscious, one step
		const xDirection = direction === "right" ? this.x + 1 : direction === "left" ?  this.x - 1 : null;
		this.setSurface(xDirection, this.y)
		let counter = 0
		for(let i = 0; i < this.stageSurface.length; i++){
			if (!overlap(this.surface, this.stageSurface[i])&&!this.outOfBounds(xDirection, this.y)){
				counter++;
			}
		}
		if (counter === this.stageSurface.length){
			this.move(xDirection, this.y)
		}
		else{
			this.setSurface(this.x,this.y)
		}
	}

	controller(event){
		if ((event.key === "w")||(event.key===" ")){
			this.jump()
		}
		else if(event.key === "s"){
			this.setSurface(this.x, this.y+1)
			let counter = 0
			for(let i = 0; i < this.stageSurface.length; i++){
				if (!overlap(this.surface, this.stageSurface[i])&&!this.outOfBounds(this.x, this.y+1)){
					counter++;
				}
			}
			if (counter === this.stageSurface.length){
				this.move(this.x, this.y+1)
			}
			else{
				this.setSurface(this.x,this.y)
			}
		}
		else if((event.key === "a")||(event.key === "ArrowLeft")){
			this.moveHorizontal("left")
		}
		else if((event.key === "d")||(event.key === "ArrowRight")){
			this.moveHorizontal("right")
		}
		else if((event.key === "q")){
			this.diagonalJump("left")
		}
		else if((event.key === "e")){
			this.diagonalJump("right")
		}
	}
}	