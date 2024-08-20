const $ = require('jquery');
const _ = require('lodash');
import './body.css';


const updateCounter = () => {
	let times = $('#count').html() || 0;
	$('button').on('click', () => {
		times++;
		$('#count').html(`${times} clicks on the button`);
	});
};


$('document').ready(()=>{
	$('body').append('<button>Click here to get started</button>');
  $('body').append("<p id='count'></p>");
	
	_.debounce(updateCounter, 500);
	updateCounter();
});