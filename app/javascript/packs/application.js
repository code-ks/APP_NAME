import "bootstrap";
import { editTrixToolbar } from './edit_trix_toolbar';
editTrixToolbar();

function setCustomAttributes() {
  let attributes = Trix.config.blockAttributes
  attributes["h2"] = {tagName: "h2"}
  attributes["h3"] = {tagName: "h3"}
  // attributes["definitionList"] = {tagName: "dl", parse: false}
  // attributes["definitionTitle"] = {
  //   tagName: "dt",
  //   listAttribute: "definitionList",
  //   test: function (element) { Trix.tagName(element.parentNode) === attributes[this.listAttribute].tagName }
  // }
  // attributes["definition"] = {
  //   tagName: "dd",
  //   listAttribute: "definitionList",
  //   test: function (element) { Trix.tagName(element.parentNode) === attributes[this.listAttribute].tagName }
  // }
  Trix.config.blockAttributes = attributes

  attributes = Trix.config.textAttributes
  // attributes["para_number"] = {tagName: "span"}
  attributes["href"] = {
    groupTagName: "a"
      // parser: (element) ->
      // {attachmentSelector} = Trix.AttachmentView
      // matchingSelector = "a:not(#{attachmentSelector})"
      // if link = Trix.findClosestElementFromNode(element, {matchingSelector})
      // link.getAttribute("href")
  }
  Trix.config.textAttributes = attributes
}

document.addEventListener('trix-before-initialize', setCustomAttributes())

// window.onload = setCustomAttributes()
