(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{15:function(e,t,a){e.exports={ImageGalleryItem:"imageGalleryItem_ImageGalleryItem__2nKCI",ImageGalleryItemImage:"imageGalleryItem_ImageGalleryItemImage__1cGqL"}},16:function(e,t,a){e.exports={Button:"button_Button__l6X__",wrapper:"button_wrapper__rlc1T"}},17:function(e,t,a){e.exports={Overlay:"modal_Overlay__2PQZK",Modal:"modal_Modal__3qVwQ"}},27:function(e,t,a){e.exports={ImageGallery:"imageGallery_ImageGallery__8fzdc"}},33:function(e,t,a){},5:function(e,t,a){e.exports={Searchbar:"searchBar_Searchbar__3_jQr",SearchForm:"searchBar_SearchForm__3Q7Mk",SearchFormButton:"searchBar_SearchFormButton__DR4AK",SearchFormButtonLabel:"searchBar_SearchFormButtonLabel__2AedN",SearchFormInput:"searchBar_SearchFormInput__BxTWb"}},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),i=(a(33),a(4)),s=a.n(i),l=a(18),u=a(7),m=a(8),h=a(9),g=a(11),d=a(10),p=a(12),b=(a(35),a(14)),j=a.n(b);j.a.defaults.baseURL="https://pixabay.com/api/";var f=function(){var e=Object(u.a)(s.a.mark((function e(t,a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"21770963-1545f2c5612889ab40ecea89f",e.next=3,j.a.get("?image_type=photo&orientation=horizontal&q=".concat(t,"&page=").concat(a,"&per_page=12&key=").concat("21770963-1545f2c5612889ab40ecea89f"));case 3:return n=e.sent,e.abrupt("return",n.data.hits);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),v=a(5),x=a.n(v),O=a(1),_=function(e){var t=e.onSubmit;return Object(O.jsx)("header",{className:x.a.Searchbar,children:Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(e.target.elements.inputValue.value)},className:x.a.SearchForm,children:[Object(O.jsx)("button",{type:"submit",className:x.a.SearchFormButton,children:Object(O.jsx)("span",{className:x.a.SearchFormButtonLabel,children:"Search"})}),Object(O.jsx)("input",{name:"inputValue",className:x.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},I=a(27),y=a.n(I),S=a(15),w=a.n(S);function k(e){var t=e.imgSrc,a=e.tags,n=e.onImgClick,r=e.largeImageURL;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("li",{className:w.a.ImageGalleryItem,children:Object(O.jsx)("img",{src:t,alt:a,className:w.a.ImageGalleryItemImage,onClick:function(e){n(r)}})})})}function F(e){var t=e.images,a=e.onImgClick;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("ul",{className:y.a.ImageGallery,children:t.map((function(e){var t=e.webformatURL,n=e.id,r=e.tags,c=e.largeImageURL;return Object(O.jsx)(k,{imgSrc:t,id:n,tags:r,onImgClick:a,largeImageURL:c},n)}))})})}var B=a(16),C=a.n(B);function N(e){var t=e.onLoadMore;return Object(O.jsx)("div",{className:C.a.wrapper,children:Object(O.jsx)("button",{className:C.a.Button,type:"button","data-action":"load-more",onClick:function(e){return t(e)},children:"load-more"})})}a(55);var G=a(28),L=a.n(G);function M(){return Object(O.jsx)("div",{className:"wrapper",children:Object(O.jsx)(L.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:300,timeout:3e4})})}var U=a(17),P=a.n(U),q=function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.closeModal()},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this;return Object(O.jsx)("div",{className:P.a.Overlay,onClick:function(t){t.currentTarget===t.target&&e.props.closeModal()},children:Object(O.jsx)("div",{className:P.a.Modal,children:this.props.children})})}}]),a}(n.Component),D=function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:null,images:[],reqStatus:"idle",imagePage:1,openImgUrl:null},e.handleFormSubmit=function(t){e.setState({inputValue:t,imagePage:1,images:[]})},e.onImageClick=function(t){e.setState({openImgUrl:t})},e.increseImagePage=function(){e.setState((function(e){return{imagePage:e.imagePage+1}}))},e.closeModal=function(){e.setState({openImgUrl:null})},e}return Object(h.a)(a,[{key:"componentDidUpdate",value:function(){var e=Object(u.a)(s.a.mark((function e(t,a){var n,r,c,o,i,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.state,r=n.inputValue,c=n.imagePage,o=n.images,a.inputValue===r&&a.imagePage===c){e.next=18;break}return this.setState({reqStatus:"loading"}),e.prev=3,e.next=6,f(r,c);case 6:if(0!==(i=e.sent).length){e.next=9;break}throw new Error;case 9:u=[].concat(Object(l.a)(o),Object(l.a)(i)),this.setState({images:u,reqStatus:"idle"}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),p.b.error("There are not such images"),this.setState({reqStatus:"rejected"});case 18:case"end":return e.stop()}}),e,this,[[3,14]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.images,a=e.reqStatus,n=e.openImgUrl,r="idle"===a&&t.length>0;return Object(O.jsxs)("div",{children:[Object(O.jsx)(p.a,{autoClose:2e3}),"loading"===a&&Object(O.jsx)(M,{}),Object(O.jsx)(_,{onSubmit:this.handleFormSubmit}),Object(O.jsx)(F,{images:t,onImgClick:this.onImageClick}),r&&Object(O.jsx)(N,{onLoadMore:this.increseImagePage}),n&&Object(O.jsx)(q,{closeModal:this.closeModal,children:Object(O.jsx)("img",{src:n,alt:""})})]})}}]),a}(n.Component);o.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(D,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.77792595.chunk.js.map