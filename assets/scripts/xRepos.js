/**Provides details on completed repo projects on Github. */
let repos = [
	{"name": "workOrderWebApp", "description": "a simple work order overview interface", "tags": ["webapp", "angular", ".net core", "typescript", "css"], "link": "https://github.com/binghamxsolutions/workOrderWebApp"},
	{"name": "qreate", "description": "an offline qr code generator", "tags": ["mobile app", "flutter", "dart", "android", "play store"], "link" : "https://github.com/binghamxsolutions/qreate"},
	{"name": "epoch (private)", "description": "a simple stopwatch app", "tags": ["mobile app", "flutter", "dart", "android", "kotlin"], "link" : null},
	{"name" : "reversion", "description" : "a release note update utility", "tags": ["desktop app", "flutter", "dart", "sqflite"], "link" : "https://github.com/binghamxsolutions/reversion"}
];

/**Creates a table with the `repo` details */
function createTable() {
	var table = document.getElementById("repo_table");
	var row_data = "";

	for (i = 0; i < repos.length; i++) {
		if (repos[i]["link"] != null) {
			row_data += '<tr><td><a href="' + repos[i]["link"] +  '">' + repos[i]["name"] + '</td><td>' + repos[i]["description"] + '</a></td><td><ul class="tags">';
		} else {
			row_data += '<tr><td>' + repos[i]["name"] + '</td><td>' + repos[i]["description"] + '</td><td><ul class="tags">';
		}

		for (j = 0; j < repos[i]["tags"].length; j++) {
			row_data += '<li class="tag">' + repos[i]["tags"][j] + '</li>';
		}

		row_data += '</ul></td></tr>';
	}
	table.innerHTML += row_data;
}

/**Shows a detailed list of the `repos`.*/
function showList() {
	var detailed_list = document.getElementById("repo_list");
	var list_data = "";

	for (i = 0; i < repos.length; i++) {
		if (repos[i]["link"] != null) {
			list_data += '<dt><a href="' + repos[i]["link"] +  '">' + repos[i]["name"] + '</a></dt><dd>' + repos[i]["description"] + '</a></dd><dd><ul class="tags">';
		} else {
			list_data += '<dt>' + repos[i]["name"] + '</dt><dd>' + repos[i]["description"] + '</dd><dd><ul class="tags">';
		}

		for (j = 0; j < repos[i]["tags"].length; j++) {
			list_data += '<li class="tag">' + repos[i]["tags"][j] + '</li>';
		}

		list_data += "</ul></dd>";
	}
	list_data += "";

	detailed_list.innerHTML += list_data;
}

createTable();
showList();