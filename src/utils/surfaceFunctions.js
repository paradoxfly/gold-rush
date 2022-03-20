export function overlap(surfaceA, surfaceB){				//Tests whether two surfaces are overlapping.. returns boolean
	if((surfaceA[2] >= surfaceB[0])&&
		(surfaceA[2] <= (surfaceB[2] + surfaceA[2] - surfaceA[0]))&&
		(surfaceA[3] <= surfaceB[5])&&
		(surfaceA[3] >= (surfaceB[1] + surfaceA[3] - surfaceA[5]))){
			return true;
		}
		else return false;
}

export function generateSurface(x, y, width, height){		//Generates a surface from coordinates for a rectangle
	let x1 = x;
	let y1 = y;
	let x2 = x1 + width - 1;
	let y2 = y1;
	let x3 = x2;
	let y3 = y1 + height - 1;
	return [x1, y1, x2, y2, x3, y3];
}

export function checkOverlap(surfaceA, ...surfaces){		//Tests whether surfaceA overlaps with any group of surfaces
	for(let surfaceB of surfaces){
		if(overlap(surfaceA, surfaceB)){
			return true
		}
	}
	return false
}