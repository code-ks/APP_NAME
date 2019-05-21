const toolbar = document.getElementById('trix-toolbar-1');
const toolbarRow = toolbar.childNodes[0]
const toolbarElement = toolbarRow.childNodes[1]
const blockButtonGroup = toolbarElement.nextElementSibling
const switchButton = blockButtonGroup.lastChild

function editTrixToolbar() {
  // moveLinkButton();
  addHeaderButtons();
  // headerToggles();
  // h1Toggle();
  // h2Toggle();
}

function moveLinkButton() {
  const linkButton = toolbarElement.childNodes[7]
  const codeButton = blockButtonGroup.childNodes[5]
  toolbarElement.removeChild(linkButton)
  blockButtonGroup.replaceChild(linkButton, codeButton)
}

function addHeaderButtons() {
  var header_num;
  for (header_num = 1; header_num < 4; header_num++) {
    const headerButton = document.createElement('button')
    headerButton.classList.add("trix-button","trix-button--icon",`h${header_num}-btn`)
    blockButtonGroup.appendChild(headerButton)
    addtHtmlHeaderMarkup(`${header_num}`)
  };
}


function addtHtmlHeaderMarkup(header_num) {
  const normalView = document.querySelector("trix-editor")
  document.querySelector(`.h${header_num}-btn`).addEventListener('click', function(e) {
    e.preventDefault();
    const normalView = document.querySelector("trix-editor")
    const selectedTextRange = normalView.editor.getSelectedRange()
    const selectedTextString = normalView.editor.getDocument().getStringAtRange(selectedTextRange)
    const header = `h${header_num}`
    console.log(header)
    const foo = `<${header}><strong>${selectedTextString}</strong></${header}>`
    normalView.editor.insertHTML(foo)
  })
}

// function h2Toggle() {
//   const normalView = document.querySelector("trix-editor")
//   document.querySelector('.h2-btn').addEventListener('click', function(e) {
//     e.preventDefault();
//     const normalView = document.querySelector("trix-editor")
//     const selectedText = normalView.editor.getSelectedRange()
//     const setSelectedText = normalView.editor.setSelectedRange(selectedText)
//     normalView.editor.activateAttribute('heading2')
//     normalView.editor.activateAttribute('bold')
//     // normalView.editor.insertHTML("<strong></strong>")
//   })
// }

  // normalView.classList.add('d-none');
  // document.querySelector('.h1-btn').addEventListener('click', function(e) {
  //   e.preventDefault();
  //   const htmlView = document.getElementById("post_body")
  //   const normalView = document.querySelector("trix-editor")
  //   if (normalView.classList.contains('d-none')) {
  //     htmlView.classList.toggle('d-block');
  //   }
  // })


// function toggleView() {
//   const normalView = document.querySelector("trix-editor")
//   normalView.classList.add('d-none');
//   document.querySelector('.h1-btn').addEventListener('click', function(e) {
//     e.preventDefault();
//     const htmlView = document.getElementById("post_body")
//     const normalView = document.querySelector("trix-editor")
//     if (normalView.classList.contains('d-none')) {
//       htmlView.classList.toggle('d-block');
//     }
//   })
// }


export { editTrixToolbar };
