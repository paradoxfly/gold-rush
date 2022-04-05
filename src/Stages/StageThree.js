import { generateSurface } from "../utils/surfaceFunctions"
import StageTwo from "../Stages/StageTwo"

export default class StageThree extends StageTwo{					//Contains information about Stage Three
	constructor(dispatch){
		super()
		this.dispatch = dispatch
		this.surface = []
		this.lava = generateSurface(3, 45, 62, 7)
		this.content = [
			[1, 61, 45, 3, "white"],	//bottom left corner beam
			[46, 63, 70, 1, "white"],	//bottom right corner beam
			[3, 52, 62, 2, "white"],	//bottom of lava pit
			[65, 37, 5, 17, "white"],	//right side of lava pit
			[55, 33, 1, 1, "white"], //small floating platform (first from right)
			[38, 36, 1, 1, "white"],	//small flaoting platform (second from right)
			[30, 32, 1, 1, "white"],	//small flaoting platform (third from right)
			[70, 37, 16, 5, "white"],	//beam after right side of pit
			[86, 32, 16, 10, "white"],	//platform on which lava falls
			[102, 37, 11, 5, "white"],	//first beam from right
			[8, 25, 18, 4, "white"],	//suspended platform
			
		]
		this.lavaContent = [3, 45, 62, 7, "red"]
		this.options = {
			player: { x: 108, y: 31},
			lava: [ { x: 1, y: 25 }, {x: 71, y: 42}, {x: 79, y: 42}, {x: 86, y: 42}],
			gold: [ { x: 55, y: 28 }, {x: 38, y: 31}, {x: 30, y: 27}, {x: 110, y: 59} ]
		}
	}
}