import $ from "jquery";

$(document).ready(()=> {
	['Holberton Dashboard', 'Dashboard data for the students', 'Copyright - Holberton School']
		.forEach((item)=> {
		$('body').append(`<p>${item}</p>`);
	});
});
