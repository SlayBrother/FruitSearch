const fruit = ['Apple', 'Apricot', 'Avocado ', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

const inputSection = document.querySelector('#searchBox');
const suggestions = document.querySelector('.suggestions ul');

function search() {
	let result = [];
	let input = inputSection.value;
	if (input.length){
		result = fruit.filter((fruitLetter) =>{
			return fruitLetter.toLowerCase().includes(input.toLowerCase())
		})
		console.log(result)
	}
	showSuggestions(result)
}
inputSection.addEventListener('input',search)

function showSuggestions(results) {
	const fruitListLetters = results.map((liMapping)=> {
		return "<li onclick = useSuggestion(this)>" + liMapping + "</li>"
	})
	suggestions.innerHTML = "<ul>" + fruitListLetters.join('') + "</ul> "
}

function useSuggestion(liMapping) {
	inputSection.value = liMapping.innerHTML 
	suggestions.innerHTML = ''
}

