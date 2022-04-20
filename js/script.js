const randomFolks = document.querySelector(".random-peeps");
// empty div
const selectUserNumber = document.querySelector("select");
// select element


const getData = async function (numUsers) {
	const usersRequest = await fetch (`https://randomuser.me/api?results=${numUsers}`);
	// fetches an array of objects from another application
	const data = await usersRequest.json();
	// converts array of objects to JSON
	const userResults = data.results;
	// targets the .results property (array) from the fetched object array

	//console.log(userResults);

	displayUsers(userResults);
	// pass the function the userResults array 
};

getData(1);
// runs the function to constrain results to 1 random user when page initializes

const displayUsers = function (userResults) {
	randomFolks.innerHTML = "";
	// empties div element so new data can be passed each time the function runs
	for (let user of userResults) {
	// for each object in the userResults array
		let country = user.location.country;
		let name = user.name.first;
		let imageUrl = user.picture.medium;
		// targets specific properties for each object that loops through
		let userDiv = document.createElement("div");
		userDiv.innerHTML = `
			<h3>${name}<h3>
			<p>${country}</p>
			<img src=${imageUrl} alt="User Avatar"/>
		`;
		// create a div element and assign data to HTML elements in the div

		randomFolks.append(userDiv);
		// add each div to the randomFolks empty div
	}
};

selectUserNumber.addEventListener("change", function (e) {
	const numUsers = e.target.value;
	// capture the value of "change" event
	getData(numUsers);
	// runs the async function to constrain results to value of select element
});