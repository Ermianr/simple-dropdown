const dropDown = document.querySelector('.dropdown')
const buttonDropDown = dropDown.querySelector('button')
const buttonDropDownWitdh = buttonDropDown.offsetWidth
const dropDownContainerAnchors = document.querySelector('.dropdown-anchors')
const allAnchors = dropDownContainerAnchors.querySelectorAll('a')
dropDownContainerAnchors.style.display = 'flex'
dropDownContainerAnchors.style.gap = '5px'
dropDownContainerAnchors.style.flexDirection = 'column'
dropDownContainerAnchors.style.alignItems = 'center'
dropDownContainerAnchors.style.padding = '10px 0'
dropDownContainerAnchors.style.width = `${buttonDropDownWitdh}px`

manipulateAnchors()

function manipulateAnchors (display = 'none') {
  allAnchors.forEach((item) => {
    item.style.display = display
  })
}

dropDown.addEventListener('mouseover', () => {
  manipulateAnchors('block')
})

dropDown.addEventListener('mouseout', () => {
  manipulateAnchors('none')
})
