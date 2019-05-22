import "bootstrap";
import { editTrixToolbar } from './edit_trix_toolbar';


function trixDefined(){
  var element = document.querySelector("trix-editor")
  console.log(element.editor)
}

function setCustomAttributes() {
  // trixDefined()

  let attributes = Trix.config.blockAttributes
  attributes["heading2"] = {tagName: "h2"}
  attributes["heading3"] = {tagName: "h3"}
  Trix.config.blockAttributes = attributes

  // attributes = Trix.config.textAttributes
  // attributes["para_number"] = {tagName: "span"}
  // attributes["href"] = {
  //   groupTagName: "a"
  //     // parser: (element) ->
  //     // {attachmentSelector} = Trix.AttachmentView
  //     // matchingSelector = "a:not(#{attachmentSelector})"
  //     // if link = Trix.findClosestElementFromNode(element, {matchingSelector})
  //     // link.getAttribute("href")
  // }
  // Trix.config.textAttributes = attributes
  // console.log(trix initialize)
  // trixDefined()
}

// document.addEventListener('trix-before-initialize', setCustomAttributes())
window.onload = setCustomAttributes()


var trix = document.createElement('trix-editor');
trix.setAttribute('input', 'post_body');

/* Toolbar can be overridden with toolbar attribute */
trix.setAttribute('toolbar', 'trix-toolbar-kristian');
document.getElementById('trix-anchor').appendChild(trix);
editTrixToolbar();

