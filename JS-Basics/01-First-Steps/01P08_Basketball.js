function basketballEquipment(yearTax) {


	let sneakersPrice = yearTax - (yearTax * 0.4);
	let clothesPrice = sneakersPrice - (sneakersPrice * 0.2);
	let ballPrice = clothesPrice / 4;
	let accessoriesPrice = ballPrice / 5;

	let totalExpences = sneakersPrice + clothesPrice + ballPrice + accessoriesPrice + yearTax;

	console.log(totalExpences)

}

basketballEquipment (415);