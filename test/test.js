var expect = require('chai').expect;
var request = require('supertest');
var express = require('express');
var app = express();

describe('Basic Functionality', function() 
{
	describe('Server.js', function()
	{
		it('Handles a GET request', function() 
  		{
    		request(app).get('/').expect('');
  		})
  		it('Handles a POST request', function() 
  		{
    		request(app).post('/').expect('');
  		})
  	})
	describe('Index.js', function()
	{
		it('Handles a GET request', function()
		{
			request(app).get('/index').expect('');
		})
		it('Handles a POST request', function() 
  		{
    		request(app).post('/index').expect('');
  		})
	})
	describe('Matches.js', function()
	{
		it('Handles a GET request', function()
		{
			request(app).get('/matches').expect('');
		})
		it('Handles a POST request', function() 
  		{
    		request(app).post('/matches').expect('');
  		})
	})
	describe('Profile.js', function()
	{
		it('Handles a GET request', function()
		{
			request(app).get('/profile').expect('');
		})
		it('Handles a POST request', function() 
  		{
    		request(app).post('/profile').expect('');
  		})
	})
	describe('Login.js', function()
	{
		it('Handles a GET request', function()
		{
			request(app).get('/login').expect('');
		})
		it('Handles a POST request', function() 
  		{
    		request(app).post('/login').expect('');
  		})
	})
	describe('Questionnaire.js', function()
	{
		it('Handles a GET request', function()
		{
			request(app).get('/questionnaire').expect('');
		})
		it('Handles a POST request', function() 
  		{
    		request(app).post('/questionnaire').expect('');
  		})
	})

});