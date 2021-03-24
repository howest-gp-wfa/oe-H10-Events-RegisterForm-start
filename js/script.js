"use strict";

//declare globals
var txtUsername,txtPassword,txtRepeatPassword;
var btnRegister;
var divFeedback;

//wait for load
window.addEventListener('load',Initialize);

function Initialize()
{
   BindElements();
   AddEventListeners();
    ResetUi();
}

function BindElements()
{
    txtUsername = document.querySelector('#txtUsername');
    txtPassword = document.querySelector('#pwbPassword');
    txtRepeatPassword = document.querySelector('#pwbRepeatPassword');
    btnRegister = document.querySelector('#btnRegister');
    divFeedback = document.querySelector('#divFeedback')
}

function AddEventListeners()
{
    
}

// FUNCTIONS


function ResetUi()
{
    //reset all inputs
    document.querySelectorAll('input').forEach(el => {el.value = ''});
    //disable button
    btnRegister.disabled = true;
    //empty feedback
    divFeedback.innerHTMl = '';
    //setfocus
    txtUsername.focus();
}

function ValidateForm()
{
   
}

function ValidatePasswords()
{
    
}

function ValidateEmail()
{
    
}

