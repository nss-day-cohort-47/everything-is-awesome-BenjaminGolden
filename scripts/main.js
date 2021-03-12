console.log("hello beautiful")
import { loadLegos, useLegos } from './legos/LegoData.js'
import { makeLegoList } from './legos/LegoList.js';

const navElement = document.querySelector("nav");

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showRed") {
		filterLegos("Red")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showGreen") {
		filterLegos("Green")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})

navElement.addEventListener("change", (event) => {
	console.log("brick material")
	if (event.target.id === "brickMaterial") {
		filterMaterial(event.target.value)
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})

const filterLegos = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.LegoName.includes(whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}

const filterMaterial = (whatMaterial) => {
	
	const materialArray = useLegos().filter(legoMaterial => {
		if (legoMaterial.Material.includes(whatMaterial)){
			return legoMaterial;
		}
	})
	makeLegoList(materialArray);
}



const startEIA = () => {
	loadLegos()
	.then(legoArray => {
		makeLegoList(legoArray)				
	})

}

startEIA();