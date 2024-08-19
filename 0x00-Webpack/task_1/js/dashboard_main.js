import $ from "jquery";
var _ = require('lodash');

let count = 0;
function updateCounter() {
  count++;
  $("p#count").text(`${count} clicks on the button`);
};


$('document').ready(()=> {
  $('body').append(`<p>Holberton Dashboard</p>`);
  $('body').append(`<p>Dashboard data for the students</p>`);
  $('body').append(`<button>Click here to get started</button>`);
  $('body').append(`<p id='count'></p>`);
  $('body').append(`<p>Copyright - Holberton School</p>`);


  $('button').click(_.debounce(updateCounter, 200));
});


