(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{190:function(e,t,a){},193:function(e,t,a){},195:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(91),s=a.n(r),l=a(197),c=a(94),i=a(32),u=a(22),m=a(23),h=a(25),f=a(24),d=a(26),b=a(199),p=a(198),v="https://reactnd-books-api.udacity.com",k=localStorage.token;k||(k=localStorage.token=Math.random().toString(36).substr(-8));var E={Accept:"application/json",Authorization:k},y=function(e,t){return fetch("".concat(v,"/books/").concat(e.id),{method:"PUT",headers:Object(i.a)({},E,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},S=function(e,t){return fetch("".concat(v,"/search"),{method:"POST",headers:Object(i.a)({},E,{"Content-Type":"application/json"}),body:JSON.stringify({query:e,maxResults:t})}).then(function(e){return e.json()}).then(function(e){return e.books})},T=a(196),g=a(1),j=a.n(g),N=a(92);function R(e){return n.a.createElement("div",{className:"bookshelf"},n.a.createElement("h2",{className:"bookshelf-title"},e.shelfTitle),n.a.createElement("div",{className:"bookshelf-books"},n.a.createElement("ol",{className:"books-grid"},0===e.books.length&&n.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83d\ude15 No Books Found \ud83d\ude15"),e.books&&e.books.map(function(t,a){return n.a.createElement("li",{key:a},n.a.createElement("div",{className:"book"},n.a.createElement("div",{className:"book-top"},n.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(t.imageLinks?t.imageLinks.thumbnail:"https://i.imgur.com/grqWttv.jpg?1",")")}}),n.a.createElement("div",{className:"book-shelf-changer"},n.a.createElement("select",{value:t.shelf,onChange:function(a){return e.moveToShelf(t,a.target.value)}},n.a.createElement("option",{value:"move",disabled:!0},"Move to..."),n.a.createElement("option",{value:"none"},"None"),n.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),n.a.createElement("option",{value:"wantToRead"},"Want to Read"),n.a.createElement("option",{value:"read"},"Read")))),n.a.createElement("div",{className:"book-title"},t.title),n.a.createElement("div",{className:"book-authors"},t.authors?t.authors.join(", "):"Unknown")))}))))}R.PropTypes={books:j.a.array.isRequired,moveToShelf:j.a.func.isRequired};var O=R,w=function(e){function t(){var e,a;Object(u.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(n)))).state={searchResult:[]},a.handleQuery=function(e){var t=e.target.value;""!==t?S(t).then(function(e){e&&!e.error||a.setState({searchedBooks:[]});var t=e.map(function(e){return a.props.books.forEach(function(t){t.id===e.id&&(e.shelf=t.shelf)}),e});a.setState({searchResult:t})}):a.setState({searchResult:[]})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"search-books"},n.a.createElement("div",{className:"search-books-bar"},n.a.createElement(T.a,{to:"/",className:"close-search"},"Close"),n.a.createElement("div",{className:"search-books-input-wrapper"},n.a.createElement(N.DebounceInput,{type:"text",debounceTimeout:600,value:this.props.books.string,onChange:this.handleQuery,placeholder:"Search by title or author"}))),n.a.createElement("div",{className:"search-books-results"},n.a.createElement(O,{moveToShelf:this.props.moveToShelf,shelfTitle:"Search Results",books:this.state.searchResult})))}}]),t}(o.Component);w.PropTypes={books:j.a.array.isRequired,searchResult:j.a.array.isRequired,moveToShelf:j.a.func.isRequired};var C=w,q=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"list-books"},n.a.createElement("div",{className:"list-books-title"},n.a.createElement("h1",null,"MyReads")),n.a.createElement("div",{className:"list-books-content"},n.a.createElement("div",null,n.a.createElement(O,{books:this.props.books.filter(function(e){return"currentlyReading"===e.shelf}),shelfTitle:"Currently Reading",moveToShelf:this.props.moveToShelf}),n.a.createElement(O,{books:this.props.books.filter(function(e){return"wantToRead"===e.shelf}),shelfTitle:"Want To Read",moveToShelf:this.props.moveToShelf}),n.a.createElement(O,{books:this.props.books.filter(function(e){return"read"===e.shelf}),shelfTitle:"Read",moveToShelf:this.props.moveToShelf}))),n.a.createElement("div",{className:"open-search"},n.a.createElement(T.a,{to:"/add",className:"add-book"},"Add a book")))}}]),t}(o.Component);q.PropTypes={books:j.a.array.isRequired,moveToShelf:j.a.func.isRequired};var A=q,P=(a(190),function(e){var t=e.location;return n.a.createElement("div",null,n.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83d\ude15 Erorr 404!! \ud83d\ude15",n.a.createElement("br",null),n.a.createElement("br",null),"No match for",n.a.createElement("br",null),n.a.createElement("code",null,t.pathname)))}),x=function(e){function t(){var e,a;Object(u.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(n)))).state={books:[]},a.moveToShelf=function(e,t){e.shelf!==t&&y(e,t).then(function(){var o=a.state.books,n=o.map(function(e){return e.id}),r=[];"none"===t&&a.setState(function(t){return{books:t.books.filter(function(t){return t.id!==e.id})}}),n.includes(e.id)?a.setState(function(a){r=o.map(function(a){return a.id===e.id?Object(i.a)({},a,{shelf:t}):a})}):a.setState(function(a){e.shelf=t,r=[].concat(Object(c.a)(o),[e])}),a.setState({books:r})})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(v,"/books"),{headers:E}).then(function(e){return e.json()}).then(function(e){return e.books}).then(function(t){e.setState({books:t})})}},{key:"render",value:function(){var e=this;return n.a.createElement(l.a,null,n.a.createElement("div",{className:"app"},n.a.createElement(b.a,null,n.a.createElement(p.a,{exact:!0,path:"/",render:function(){return n.a.createElement(A,{moveToShelf:e.moveToShelf,books:e.state.books})}}),n.a.createElement(p.a,{path:"/add",render:function(){return n.a.createElement(C,{books:e.state.books,moveToShelf:e.moveToShelf})}}),n.a.createElement(p.a,{component:P}))))}}]),t}(o.Component);a(193);s.a.render(n.a.createElement(l.a,null,n.a.createElement(x,null)),document.getElementById("root"))},95:function(e,t,a){e.exports=a(195)}},[[95,2,1]]]);
//# sourceMappingURL=main.dac48681.chunk.js.map