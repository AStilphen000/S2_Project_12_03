"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 3

   Author:  Angelina Stilphen
   Date:   3.5.19
   
   Filename: ah_report.js
   
   Functions:
   
   calcSum(donorAmt)
      A callback function that adds the current donation amount in the array to the donationTotal variable
   
   findMajorDonors(donorAmt)
      A callback function that returns the value true only if the current donation amount in the array
      is greater than or equal to 1000
      
   donorSortDescending(a, b)
      A callback function used to sort the donation amounts from the array in descending order
      
   writeDonorRow(value)
      A callback function that writes the HTML code for each table row that provides the contact
      information for the donor
      
*/

// created a variable for the donation total equal to the initail value of 0. 
var donationTotal = 0;

// added a variable to effect the donors for each. Method to the donors array, using the callback function calcSum(). This statement will calculate the donation total.
donors.forEach(calcSum);

// created a variable named summarytable storing the text below. Where donors is the length of the donors.array, and total is the value of the donationTotal variable, preceded by a $.Applied the toLocaleString() method to the donationTotal variable so that the total amount of donations is displayed with a thousands separator in the report 
var summaryTable = "<table> <tr><th>Donors</th><td>" + donors.length + "</td></tr> <tr><th>Total Donations</th><td>$ " + donationTotal.toLocaleString() + "</td></tr> </table>";

//  Set the innerHTML property of the div element with the ID donationSummary to the value of the summaryTable variable.
document.getElementById("donationSummary").innerHTML = summaryTable;

// Added to the report to show a list of the donors who contributed $1000 or more to Appalachian House. Using the filter() method with the callback function findMajorDonors(), then created an array named majorDonors.
var majorDonors = donors.filter(findMajorDonors);

// Added the major donors list sorted in descending order. Apply the sort() method to the majorDonors variable using the callback function donorSortDescending().
majorDonors.sort(donorSortDescending);

//  created a variable named donortable that will store the HTML code for the table of major donors. Then set the initial value of the variable to the text string below.
var donorTable = "<table> <caption>Major Donors</caption> <tr><th>Donation</th><th>Donor ID</th> <th>Date</th><th>Name</th><th>Address</th> <th>Phone</th><th>E-mail</th></tr>";

// Created the HTML code for each donor row by applying the forEach() method to the majorDonors variable, using writeDonorRow() as the callback function.
majorDonors.forEach(writeDonorRow);

// Added the text string </table> to the value of the donorTable variable.
donorTable += "<table/>";

//  Set the innerHTML property of the div element with the ID donorTable to the value of the donorTable variable.
document.getElementById("donorTable").innerHTML = donorTable; 



function calcSum(donorAmt) {
   donationTotal += donorAmt[9];
}

function findMajorDonors(donorAmt) {
   return donorAmt[9] >= 1000;
}

function donorSortDescending(a, b) {
   return b[9] - a[9];
}

function writeDonorRow(value) {
   donorTable += "<tr>";
   donorTable += "<td>$" + value[9].toLocaleString() + "</td>";   
   donorTable += "<td>" + value[0] + "</td>";
   donorTable += "<td>" + value[10] + "</td>";   
   donorTable += "<td>" + value[2] + ", " + value[1] + "</td>";  
   donorTable += "<td>" + value[3] + "<br />" + value[4] + ", " + value[5] + " " + value[6]  + "</td>";    
   donorTable += "<td>" + value[7] + "</td>";   
   donorTable += "<td>" + value[8] + "</td>";         
   donorTable += "</tr>";
}

