"use strict";

//declare globals
let inpUsername,inpPassword,inpRepeatPassword;
let btnRegister;
let divFeedback;

//wait for load
window.addEventListener('load',Initialize);

function Initialize()
{
   bindElements();
   addEventListeners();
   resetUi();
}

function bindElements()
{
    inpUsername = document.querySelector('#inpUsername');
    inpPassword = document.querySelector('#pwbPassword');
    inpRepeatPassword = document.querySelector('#pwbRepeatPassword');
    btnRegister = document.querySelector('#btnRegister');
    divFeedback = document.querySelector('#divFeedback')
}

function addEventListeners()
{
    
}

// FUNCTIONS


function resetUi()
{
    //reset all inputs
    document.querySelectorAll('input').forEach(el => {el.value = ''});
    //disable button
    btnRegister.disabled = true;
    //empty feedback
    divFeedback.innerHTML = '';
    //setfocus
    inpUsername.focus();
}

function validateForm()
{
   
}

function validatePasswords()
{
    
}

function validateEmail()
{
    
}

