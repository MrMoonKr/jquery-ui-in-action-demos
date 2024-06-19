import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui.js';
import 'jquery-ui-dist/jquery-ui.css';

const input = document.createElement('input');
input.id = 'datepicker';
document.body.appendChild( input );

$( "#datepicker").datepicker();

