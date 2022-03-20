import Object from "./Object"

export default class Gold extends Object{
	constructor(dispatch, x, y, color='gold'){
		super()
		this.dispatch =  dispatch
		this.defaultX = x
		this.defaultY = y
		this.x = x
		this.y = y
		this.width = 1
		this.height = 1
		this.color = color
		this.surface = []
	}

	initialize(){
		this.draw()
	}
}