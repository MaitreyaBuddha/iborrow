/**
 * Author: Kelly Johnson
 * Copyright 2015
 * This work is licenced under Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License
 * http://creativecommons.org/licenses/by-nc-sa/4.0/
 *
 * Tools for the borrow page
 */

/* global document, window */

'use strict';

var borrow = {
  text: {
    setItem: function(item) {
      borrow.text.item = document.getElementById(itemText).value;
    },
    setPerson: function(whom) {
      borrow.text.whom = document.getElementById(whomText).value;
    }
  },
  click: function() {
    console.log('Clicked with item ' + borrow.text.item + ' and whom ' + borrow.text.whom);
    var theyreSure = confirm('Are you sure?');
    if (theyreSure) {
      // Send to server
      network.borrow(borrow.text.item, borrow.text.whom);
    }
  }
};

var network = {
  borrow: function(item, whom) {
    // call network
    // It's good
    alert('Success!');
  }
};
