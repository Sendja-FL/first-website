const tabs = document.querySelectorAll(".tabs__tab")

const tabsSmartBar = document.querySelector(".tabs__smart-bar")

tabsSmartBar.style.width = `${tabs[0].scrollWidth}px`

tabs.forEach((tab) => tab.addEventListener("click", handelTabSwitch))

function handelTabSwitch(e) {
  console.log(e)
  tabsSmartBar.style.width = `${e.target.scrollWidth}px`
  tabsSmartBar.style.transform = `translateX(${e.target.offsetLeft}px)`
}

// Test commit 2
