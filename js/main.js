import $ from 'jquery';
import Router from './router';
import './ajax_setup';

var appElement = document.querySelector('.app');

new Router(appElement).start();


console.log('Hello, World');