(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{145:function(e,t,a){e.exports={primaryColor:"#ef5b4c",centerDirection:"0 auto",paragraph3:"12px",errorText:"ErrorValidation_errorText__AgGNX"}},146:function(e,t,a){e.exports={headingMobile:"30px",headingTablet:"40px",headingDesktop:"50px",paragraph1:"16px",paragraph2:"14px",paragraph3:"12px",primaryColor:"#ef5b4c",secondaryColor:"#007bff",hoverPrimaryColor:"#c94031",inputColor:"#cecece",focusValidColor:"#64aefd",focusValidColorShadow:"rgba(173, 222, 255, 0.5)",focusInvalidColorShadow:"rgba(253, 171, 194, 0.5)",marginForComponents:"40px",transitionDuration:"400ms",centerDirection:"0 auto",whiteText:"#fff",blackText:"#000",backgroundColor3:"rgb(238, 237, 230)",registerFormWrapper:"SignUp_registerFormWrapper__1JKSg",registerFormTitle:"SignUp_registerFormTitle__31ezH",registerFormContent:"SignUp_registerFormContent__zq8iA",registerFormText:"SignUp_registerFormText__1x9rY",registrationForm:"SignUp_registrationForm__3xTFS",label:"SignUp_label__uhRfY",labelTitle:"SignUp_labelTitle__2sZ1i",labelPhoneTitle:"SignUp_labelPhoneTitle__2-XgF",inputSection:"SignUp_inputSection__1IGI6",inputSectionValid:"SignUp_inputSectionValid__3tIth SignUp_inputSection__1IGI6",inputSectionInvalid:"SignUp_inputSectionInvalid__33dZa SignUp_inputSection__1IGI6",inputNumberSection:"SignUp_inputNumberSection__sbTtV SignUp_inputSection__1IGI6",inputNumberSectionValid:"SignUp_inputNumberSectionValid__EJkOi SignUp_inputNumberSection__sbTtV SignUp_inputSection__1IGI6",inputNumberSectionInvalid:"SignUp_inputNumberSectionInvalid__ZoQSR SignUp_inputNumberSection__sbTtV SignUp_inputSection__1IGI6",inputNumberFormat:"SignUp_inputNumberFormat__3bSBD",positionsSection:"SignUp_positionsSection__3jMgg",selectLabelTitle:"SignUp_selectLabelTitle__ZjigN",labelContainer:"SignUp_labelContainer__2ei8m",radioLabel:"SignUp_radioLabel__3hgyK",inputRadioLabel:"SignUp_inputRadioLabel__1RKuD",radioLabelTitle:"SignUp_radioLabelTitle__1XH9y",photoLabelTitle:"SignUp_photoLabelTitle__DKeOn",photoInput:"SignUp_photoInput__2N6PG",labelPhotoInput:"SignUp_labelPhotoInput__3DQy9",labelPhotoInputValid:"SignUp_labelPhotoInputValid__1YW61 SignUp_labelPhotoInput__3DQy9",labelPhotoInputInvalid:"SignUp_labelPhotoInputInvalid__11yzA SignUp_labelPhotoInput__3DQy9",leftLabelPhotoInputBlack:"SignUp_leftLabelPhotoInputBlack__2WMex",leftLabelPhotoInputGrey:"SignUp_leftLabelPhotoInputGrey__1chHF SignUp_leftLabelPhotoInputBlack__2WMex",rightLabelPhotoInput:"SignUp_rightLabelPhotoInput__2Omel",signUpButton:"SignUp_signUpButton__rfrMV",firstClonePhotoInputBlack:"SignUp_firstClonePhotoInputBlack__1ndSM",secondClonePhotoInput:"SignUp_secondClonePhotoInput__1_Izz"}},212:function(e,t,a){"use strict";a.r(t);var n=a(147),i=a(30),o=a(31),l=a(34),r=a(32),p=a(35),s=a(0),c=a.n(s),u=a(148),m=a(15),h=a(3),_=a(33),d=a(145),g=a.n(d),b=function(e){var t=e.text;return c.a.createElement("div",null,c.a.createElement("p",{className:g.a.errorText},t))},S=a(146),f=a.n(S);a.d(t,"default",function(){return U});var I={name:"required|string|min:3",email:"required|email",phone:"required|number",position:"required",photo:"required"},E={"name.required":"Please choose a unique username for your account","name.min":"Your name is too short","email.required":"Enter a valid email address","email.email":"Email is invalid","phone.required":"Enter a valid phone number","phone.number":"Please write down only the numbers","position.required":"Please choose your position","photo.required":"Please upload your photo"},U=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,p=new Array(o),s=0;s<o;s++)p[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(p)))).state={name:"",email:"",phone:null,position:"",photo:null,positions:[],token:"",isLoading:!1,error:null,errors:null},a.handleChange=function(e){var t=e.target,i=t.name,o=t.value;a.setState(Object(n.a)({},i,o))},a.handleSubmit=function(e){e.preventDefault(),a.setState({isLoading:!0});var t=a.state,n=t.name,i=t.email,o=t.phone,l=t.position,r=t.photo,p=t.token,s=a.props.onSubmit;Object(u.validateAll)({name:n,email:i,phone:o,position:l,photo:r},I,E).then(function(){var e=new FormData,t=document.querySelector('input[type="file"]');e.append("position_id",2),e.append("name",n),e.append("email",i),e.append("phone",o),e.append("photo",t.files[0]),fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users",{method:"POST",body:e,headers:{Token:p}}).then(function(e){return e.json()}).then(function(e){if(!1===e.success){var t={};t.doubleUser=e.message,a.setState({errors:t})}else s(),a.reset()}).catch(function(e){a.setState({error:e})})}).catch(function(e){var t={};e.forEach(function(e){t[e.field]=e.message}),a.setState({errors:t})}).finally(function(){return a.setState({isLoading:!1})})},a.reset=function(){a.setState({name:"",email:"",phone:null,position:"",photo:null,errors:null})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),m.b().then(function(t){return e.setState({token:t.data.token})}).catch(function(t){return e.setState({error:t})}),m.a().then(function(t){return e.setState({positions:t.data.positions})}).catch(function(t){return e.setState({error:t})}).finally(function(){return e.setState({isLoading:!1})})}},{key:"render",value:function(){var e,t,a=this,n=this.state,i=n.name,o=n.email,l=n.phone,r=n.position,p=n.photo,s=n.positions,u=n.isLoading,m=n.error,d=n.errors;return c.a.createElement("div",null,u&&c.a.createElement(h.a,null),c.a.createElement("div",{className:f.a.registerFormWrapper},c.a.createElement("h2",{className:f.a.registerFormTitle},"Register to get a work"),c.a.createElement("div",{className:f.a.registerFormContent},c.a.createElement("p",{className:f.a.registerFormText},"Attention! After successful registration and alert, update the list of users in the block from the top"),m&&c.a.createElement(_.a,{text:m.message}),d&&c.a.createElement(b,{text:d.doubleUser}),c.a.createElement("form",{onSubmit:this.handleSubmit,encType:"multipart/form-data",method:"post",className:f.a.registrationForm},c.a.createElement("section",{className:f.a.labelContainer},c.a.createElement("label",{className:f.a.label},c.a.createElement("p",{className:f.a.labelTitle},"Name"),c.a.createElement("input",{type:"text",value:i,onChange:this.handleChange,name:"name",placeholder:"Your name",className:d&&d.name?f.a.inputSectionInvalid:f.a.inputSectionValid}),d&&c.a.createElement(b,{text:d.name})),c.a.createElement("label",{className:f.a.label},c.a.createElement("p",{className:f.a.labelTitle},"Email"),c.a.createElement("input",{type:"email",value:o,onChange:this.handleChange,name:"email",placeholder:"Your email",className:d&&d.email?f.a.inputSectionInvalid:f.a.inputSectionValid}),d&&c.a.createElement(b,{text:d.email})),c.a.createElement("label",{className:f.a.label},c.a.createElement("p",{className:f.a.labelPhoneTitle},"Phone number"),c.a.createElement("input",{type:"tel",value:l,onChange:this.handleChange,name:"phone",placeholder:"+380 XX  XXX  XX XX",className:d&&d.phone?f.a.inputNumberSectionInvalid:f.a.inputNumberSectionValid}),c.a.createElement("p",{className:f.a.inputNumberFormat},"Enter phone number in open format"),d&&c.a.createElement(b,{text:d.phone}))),c.a.createElement("section",{className:f.a.positionsSection},c.a.createElement("p",{className:f.a.selectLabelTitle},"Select your position"),c.a.createElement("div",{className:f.a.labelContainer},s.map(function(e){return c.a.createElement("label",{className:f.a.radioLabel,key:e.id},c.a.createElement("input",{type:"radio",checked:r===e.name,name:"position",value:e.name,onChange:a.handleChange,className:f.a.inputRadioLabel}),c.a.createElement("span",{className:f.a.radioLabelTitle},e.name))})),d&&c.a.createElement(b,{text:d.position})),c.a.createElement("section",{className:f.a.photoSection},c.a.createElement("p",{className:f.a.photoLabelTitle},"Photo"),c.a.createElement("input",{id:"file",type:"file",value:p,onChange:this.handleChange,name:"photo",className:f.a.photoInput,"data-multiple-caption":"{count} files selected",multiple:!0}),c.a.createElement("label",{htmlFor:"file",className:d&&d.photo?f.a.labelPhotoInputInvalid:f.a.labelPhotoInputValid},c.a.createElement("div",{className:p?f.a.leftLabelPhotoInputBlack:f.a.leftLabelPhotoInputGrey},p?(e=p.slice(12),t=25,String(e).length>t?e.slice(0,t).concat("..."):e):"Upload your photo"),c.a.createElement("div",{className:f.a.rightLabelPhotoInput},"Browse")),d&&c.a.createElement(b,{text:d.photo})),c.a.createElement("button",{type:"submit",className:f.a.signUpButton},"Sign up now")))))}}]),t}(s.Component)}}]);
//# sourceMappingURL=sign-up.05f46191.chunk.js.map