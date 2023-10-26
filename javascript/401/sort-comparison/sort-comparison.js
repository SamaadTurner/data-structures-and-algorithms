'use strict';

function sortYear(arr) {
  return arr.sort(compareYear);
}


function compareYear(a, b) {
  return b.year - a.year;
}

function sortTitle(arr) {
  return arr.sort(compareTitle);
}


function compareTitle(a,b) {
  let regex = /^(?:The|A|An)\s+/g;
  let titleA = a.title.replace(regex, '');
  let titleB = b.title.replace(regex, '');
  return titleA.localeCompare(titleB);
}

module.exports = {sortYear, compareYear, sortTitle, compareTitle};
