import $ from "jquery";
import _ from "lodash";





/* $('body').append(`<p>Holberton Dashboard</p>`);
$('body').append(`<p>Dashboard data for the students</p>`);
$('body').append(`<button>Click here to get started</button>`);
$('body').append(`<p id='count'></p>`);
$('body').append(`<p>Copyright - Holberton School</p>`);

let count = 0;
function updateCounter() {
  count++;
  $("p#count").text(`${count} clicks on the button`);
};

$('button').click(_.debounce(updateCounter, 200));
 */

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - Holberton School</p>');

const updateCounter = () => {
	let times = $('#count').html() || 0;
	$('button').on('click', () => {
		times++;
		$('#count').html(`${times} clicks on the button`);
	});
};

_.debounce(updateCounter, 500);
updateCounter();


