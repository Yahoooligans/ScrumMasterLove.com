var expect = require('chai').expect;
var request = require('supertest');
var express = require('express');
var app = express();

describe('Unit Test For ScrumMasterLove', function() 
{
	describe('Testing - Server.js', function()
	{
		it('Should respond with hello world', function() 
  		{
    		request(app).get('/').expect('hello world');

  		});
	});
});