import { generateSurface } from "../utils/surfaceFunctions"
import { drawStage, clearCanvas } from "../redux/utils/draw"

export default class StageTwo{					//Contains information about Stage One
	constructor(dispatch){
		this.dispatch = dispatch
		this.surface = []
		this.lava = generateSurface(50, 45, 15, 7)
		this.content = [
			[42, 1, 2, 12, "white"],	//suspended vertical beam
			[42, 25, 2, 12, "white"],	//bottom fence
			[1, 1, 41, 1, "white"],	//roof at left side of stage

			[27, 19, 10, 2, "white"],	//lower beam
			[25, 12, 2, 9, "white"],	//vault
			[1, 11, 26, 2, "white"],	//upper beam
			[1, 37, 45, 5, "white"],	//first beam from left
			[45, 37, 5, 20, "white"],	//left side of lava pit
			[49, 52, 20, 5, "white"],	//bottom of lava pit
			[65, 37, 5, 20, "white"],	//right side of lava pit
			[70, 37, 16, 5, "white"],	//beam after right side of pit
			[86, 32, 16, 10, "white"],	//platform on which lava falls
			[102, 37, 11, 5, "white"],	//first beam from right
			[6, 25, 18, 4, "white"],	//suspended platform
			
			[86, 1, 3, 7, "white"],	//overhead lava container left prop
			[89, 4, 3, 7, "white"],	//left funnel
			[99, 1, 3, 7, "white"],	//right prop
			[96, 4, 3, 7, "white"],	//right funnel

			[89, 1, 10, 3, "red"],		//harmless overhead lava
			[92, 4, 4, 3, "red"]	//harmless overhead lava	
		]
		this.lavaContent = [50, 45, 15, 7, "red"]
		this.options = {
			player: { x: 108, y: 31},
			lava: [ { x: 13, y: 13 }, { x: 27, y: 2 }, {x: 57, y: 1, distance: 42}, {x: 93, y: 7 }],
			gold: [ { x: 11, y: 20 }, {x: 16, y: 20}, {x: 5, y: 5 } ]
		}
	}
	drawStage(){
		clearCanvas(this.dispatch)

		for(let solid of this.content){
			this.surface.push(generateSurface(...solid))
		}

		this.content.push(this.lavaContent)
		setTimeout(() => {
			drawStage(this.content, this.dispatch)
		}, 200);
	}
}