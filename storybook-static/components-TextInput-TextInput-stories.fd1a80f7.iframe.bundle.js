"use strict";(self.webpackChunkdesign_system_engineer_challenge=self.webpackChunkdesign_system_engineer_challenge||[]).push([[488],{"./src/components/Label/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return components_Label}});var _templateObject,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),StyledLabel=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.label(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n    display: block;\n    margin-top: var(--md-margin-vertical);\n    font-size: var(--md-font-size-small);\n    line-height: var(--md-line-height-small);\n    font-family: var(--md-font-family);\n"]))),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Label=function Label(_ref){var label=_ref.label,htmlFor=_ref.htmlFor;return(0,jsx_runtime.jsx)(StyledLabel,{htmlFor:htmlFor,children:label})},components_Label=Label;try{FunctionComponent.displayName="Label",FunctionComponent.__docgenInfo={description:"",displayName:"Label",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Label/index.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/components/Label/index.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Message/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return components_Message}});var _templateObject,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),StyledMessage=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.span(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n    font-size: var(--md-font-size-small);\n    line-height: var(--md-line-height-small);\n    font-family: var(--md-font-family);\n    margin-top: var(--md-margin-vertical);\n    color: ",";\n"])),(function(_ref){return _ref.isError?"var(--md-color-error)":"var(--md-color-grey-bright)"})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Message=function Message(_ref){var text=_ref.text,_ref$isError=_ref.isError,isError=void 0!==_ref$isError&&_ref$isError;return(0,jsx_runtime.jsx)(StyledMessage,{isError:isError,children:text})},components_Message=Message;try{FunctionComponent.displayName="Message",FunctionComponent.__docgenInfo={description:"",displayName:"Message",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},isError:{defaultValue:{value:"false"},description:"",name:"isError",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Message/index.tsx#Message"]={docgenInfo:Message.__docgenInfo,name:"Message",path:"src/components/Message/index.tsx#Message"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TextInput/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return components_TextInput}});var _templateObject,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),StyledInput=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.input(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n    display: block;\n    width: 100%;\n    padding: var(--md-padding-vertical) var(--md-padding-horizontal);\n    font-size: var(--md-font-size-medium);\n    line-height: var(--md-line-height-medium);\n    font-family: var(--md-font-family);\n    color: var(--md-color-grey-bright);\n    border: 1px solid ",";\n    border-radius: var(--md-border-radius-regular);\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    box-sizing: border-box;\n\n    &:focus {\n        outline: none;\n        border-color: ",";\n        box-shadow: ",";\n    }\n"])),(function(_ref){return _ref.hasError?"var(--md-color-error)":"var(--md-color-grey-light)"}),(function(_ref2){return _ref2.hasError?"var(--md-color-error)":"var(--md-color-grey-light)"}),(function(_ref3){return _ref3.hasError?"0 0 0 0.2rem rgba(220, 53, 69, 0.25)":"0 0 0 0.2rem rgba(0, 123, 255, 0.25)"})),Message=__webpack_require__("./src/components/Message/index.tsx"),Label=__webpack_require__("./src/components/Label/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),TextInput=function TextInput(_ref){var id=_ref.id,value=_ref.value,onChange=_ref.onChange,placeholder=_ref.placeholder,_ref$type=_ref.type,type=void 0===_ref$type?"text":_ref$type,_ref$error=_ref.error,error=void 0===_ref$error?null:_ref$error,_ref$label=_ref.label,label=void 0===_ref$label?"":_ref$label;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Label.Z,{label:label,htmlFor:id}),(0,jsx_runtime.jsx)(StyledInput,{id:id,value:value,onChange:onChange,placeholder:placeholder,type:type,hasError:null!==error}),error&&(0,jsx_runtime.jsx)(Message.Z,{isError:!0,text:error})]})},components_TextInput=TextInput;try{FunctionComponent.displayName="TextInput",FunctionComponent.__docgenInfo={description:"",displayName:"TextInput",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"password"'},{value:'"email"'}]}},error:{defaultValue:{value:"null"},description:"",name:"error",required:!1,type:{name:"string | null"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextInput/index.tsx#TextInput"]={docgenInfo:TextInput.__docgenInfo,name:"TextInput",path:"src/components/TextInput/index.tsx#TextInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TextInput/TextInput.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Regualr:function(){return Regualr},WithError:function(){return WithError},WithLabel:function(){return WithLabel},WithPlaceholder:function(){return WithPlaceholder},__namedExportsOrder:function(){return __namedExportsOrder}});var meta={title:"Components/TextInput",component:__webpack_require__("./src/components/TextInput/index.tsx").Z,tags:["autodocs"],args:{id:"id-3",value:"This is some text input content"}};__webpack_exports__.default=meta;var Regualr={args:{id:"id-3",value:"This is some text input content"}},WithError={args:{id:"id-4",value:"This is some text input content",error:"This is an error"}},WithLabel={args:{id:"id-5",label:"This is a label",value:"This is some text input content"}},WithPlaceholder={args:{id:"id-6",label:"This is a label",value:"",placeholder:"This is a placeholder"}},__namedExportsOrder=["Regualr","WithError","WithLabel","WithPlaceholder"];Regualr.parameters={...Regualr.parameters,docs:{...Regualr.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'id-3',\n    value: 'This is some text input content'\n  }\n}",...Regualr.parameters?.docs?.source}}},WithError.parameters={...WithError.parameters,docs:{...WithError.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'id-4',\n    value: 'This is some text input content',\n    error: 'This is an error'\n  }\n}",...WithError.parameters?.docs?.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'id-5',\n    label: 'This is a label',\n    value: 'This is some text input content'\n  }\n}",...WithLabel.parameters?.docs?.source}}},WithPlaceholder.parameters={...WithPlaceholder.parameters,docs:{...WithPlaceholder.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'id-6',\n    label: 'This is a label',\n    value: '',\n    placeholder: 'This is a placeholder'\n  }\n}",...WithPlaceholder.parameters?.docs?.source}}}}}]);