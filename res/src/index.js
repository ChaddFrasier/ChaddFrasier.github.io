
'use strict';

/**
 * News Line Data:
 * ---------------
 *      This JSON object will be updated whenever a new headline is added to the homepage.
 *      There should not be two of the same dates ever so that is why they are the keys
 */
const NewsData = {
    '06/28/2021': "Presenting at Planet Data 2021 for PIE.",
    '06/01/2021': "<i>Planetary Image Editor</i> abstract accepted to Planet Data 2021 for presentation.",
    '04/16/2021': "Submitted abstract for the <i>Planetary Image Editor</i> possible publication.",
    '10/22/2020': "Contract Extension Awarded for Student Contractor position at the USGS.",
    '08/17/2019': "Started drafting research methods for Machine Learning Techniques Applied to Lunar Surface Data with Dr. Kestay at the USGS.",
    '07/03/2019': "First day at the USGS as a Student Software Contractor.",
    '06/12/2019': "Graduated from Northern Arizona University with a Bachelor's of Science in Computer Science.",
};

// Function executes when the page loads fully
document.addEventListener( "DOMContentLoaded", ( e ) => {

    const NewsContainerBox = document.getElementById("NewContainerBox");
    
    // Write the news headlines
    Object.keys(NewsData).forEach( dateKey => {
        writeHeadline( NewsContainerBox, dateKey, NewsData[dateKey]);
    });
});

/**
 * @function writeHeadline
 * @param {Object} obj <ul> object to add the new <li>
 * @param {string} date the date string in MM/DD/YYYY
 * @param {string} line the news headline
 * @description creates a headline in the obj that was given to it
 */
function writeHeadline( obj, date, line ) {
    var li = document.createElement("li"),
        datei = document.createElement("i");

    // set the styles & innerHTML
    li.setAttribute("class", "news-li");
    datei.innerHTML = date;
    li.innerHTML = `${datei.outerHTML}: ${line}`;
    
    // append the new list item
    obj.appendChild(li);
}