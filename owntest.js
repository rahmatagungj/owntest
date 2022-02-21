// utilities
const get = function (selector, scope) {
  scope = scope ? scope : document;
  return scope.querySelector(selector);
};

const getAll = function (selector, scope) {
  scope = scope ? scope : document;
  return scope.querySelectorAll(selector);
};

// setup typewriter effect in the terminal demo
if (document.getElementsByClassName('demo').length > 0) {
  const txt = `node owntest.js

  OwnTest v0.0.4
  
  <span style="background-color:#98C379"><b> PASS </b></span><b> &nbsp; __tests__/dev.test.js</b>
  ❖ Development Test
    &nbsp; <font color="#98C379"><b>✔</b></font> should be able to run a test
  
  <span style="background-color:#98C379"><b> PASS </b></span><b> &nbsp; __tests__/math.test.js</b>
  ❖ Sum Math Testing
    &nbsp; <font color="#98C379"><b>✔</b></font> should return the sum of two numbers
  ❖ Returned Math Testing
    &nbsp; <font color="#98C379"><b>✔</b></font> Function isEven should be have returned boolean
    &nbsp; <font color="#98C379"><b>✔</b></font> Function isEven should be not throwing an error
    &nbsp; <font color="#98C379"><b>✔</b></font> 2 from isEven Function should be even and boolean
  ❖ Function Math Testing
    &nbsp; <font color="#98C379"><b>✔</b></font> Function isEven should be exist to call
  
  <span style="background-color:#98C379"><b> PASS </b></span><b> &nbsp; __tests__/owner.test.js</b>
  ❖ Owner Permission Testing
    &nbsp; <font color="#98C379"><b>✔</b></font> isOwner should be boolean type
    &nbsp; <font color="#98C379"><b>✔</b></font> isOwner should be true for accessing system
    &nbsp; <font color="#98C379"><b>✔</b></font> if not isOwner should be showing: Permission Denied
  
  <span style="background-color:#98C379"><b> PASS </b></span><b> &nbsp; __tests__/palindrome.test.js</b>
  ❖ Palindrome Check
    &nbsp; <font color="#98C379"><b>✔</b></font> should be called
    &nbsp; <font color="#98C379"><b>✔</b></font> should be returned boolean type
    &nbsp; <font color="#98C379"><b>✔</b></font> should be not throwing an error
    &nbsp; <font color="#98C379"><b>✔</b></font> &quot;aba&quot; should be true palindrome
    &nbsp; <font color="#98C379"><b>✔</b></font> &quot;ab&quot; should be false palindrome
    &nbsp; <font color="#98C379"><b>✔</b></font> checking more palindrome word
  
  <b>Test Suites : </b> <font color="#E06C75"><b>0 failed</b></font> , 6 total
  <b>Tests       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </b> <font color="#98C379"><b>15 passed</b></font> , 15 total

            `;
  document.getElementsByClassName('demo')[0].innerHTML += txt;
}

// toggle tabs on codeblock
window.addEventListener("load", function() {
  // get all tab_containers in the document
  const tabContainers = getAll(".tab__container");

  // bind click event to each tab container
  for (let i = 0; i < tabContainers.length; i++) {
    get('.tab__menu', tabContainers[i]).addEventListener("click", tabClick);
  }

  // each click event is scoped to the tab_container
  function tabClick (event) {
    const scope = event.currentTarget.parentNode;
    const clickedTab = event.target;
    const tabs = getAll('.tab', scope);
    const panes = getAll('.tab__pane', scope);
    const activePane = get(`.${clickedTab.getAttribute('data-tab')}`, scope);

    // remove all active tab classes
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
    }

    // remove all active pane classes
    for (let i = 0; i < panes.length; i++) {
      panes[i].classList.remove('active');
    }

    // apply active classes on desired tab and pane
    clickedTab.classList.add('active');
    activePane.classList.add('active');
  }
});

//in page scrolling for documentaiton page
const btns = getAll('.js-btn');
const sections = getAll('.js-section');

function setActiveLink(event) {
  // remove all active tab classes
  for (let i = 0; i < btns.length; i++) {
    btns[i].classList.remove('selected');
  }

  event.target.classList.add('selected');
}

function smoothScrollTo(i, event) {
  const element = sections[i];
  setActiveLink(event);

  window.scrollTo({
    'behavior': 'smooth',
    'top': element.offsetTop - 20,
    'left': 0
  });
}

if (btns.length && sections.length > 0) {
  for (let i = 0; i<btns.length; i++) {
    btns[i].addEventListener('click', smoothScrollTo.bind(this,i));
  }
}

// fix menu to page-top once user starts scrolling
window.addEventListener('scroll', function () {
  const docNav = get('.doc__nav > ul');

  if( docNav) {
    if (window.pageYOffset > 63) {
      docNav.classList.add('fixed');
    } else {
      docNav.classList.remove('fixed');
    }
  }
});

// responsive navigation
const topNav = get('.menu');
const icon = get('.toggle');

window.addEventListener('load', function(){
  function showNav() {
    if (topNav.className === 'menu') {
      topNav.className += ' responsive';
      icon.className += ' open';
    } else {
      topNav.className = 'menu';
      icon.classList.remove('open');
    }
  }
  icon.addEventListener('click', showNav);
});

