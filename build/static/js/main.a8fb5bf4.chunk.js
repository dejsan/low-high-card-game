(this["webpackJsonphigh-low-card-game"]=this["webpackJsonphigh-low-card-game"]||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/click.311e0376.mp3"},25:function(e,t,a){e.exports=a.p+"static/media/music.7ae8136d.mp3"},27:function(e,t,a){e.exports=a.p+"static/media/table_background.49dc56c3.jpg"},29:function(e,t,a){e.exports=a(58)},41:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(13),i=a.n(c),s=a(10),d=a(1),l=a(19),o=a(23),u=a.n(o),p=a(2),b=a(28),m="game/DRAW_CARD",h="game/NEXT_ROUND",C="game/PLACE_BET_MONEY",g="game/PLACE_BET",k="game/SHOW_MESSAGE",f="game/NEW_GAME",v="game/RESET_GAME",y="game/GAME_OVER",O="game/PLAY_SOUND_CLICK",w="game/TOGGLE_BACKGROUND_MUSIC",j="hi",B="lo",E="betWin",x="betLose",M="gameWin",T="resetGame",G=626,A=362,S="assets/spritesheets/cards.json",L=["BackBlue_1.png","BackBlue_2.png","BackGrey_1.png","BackGrey_2.png","BackRed_1.png","BackRed_2.png"],_=["Clubs_","Diamond_","Hearts_","Spades_"],D={enableBet:!0,balance:100,bet:10,betType:null,deck:[1,2,3,4,5,6,7,8,9,10,11,12,13],currentCard:null,drawnCards:[],messageType:null,disableResetGame:!1,disableBetLoHi:!1,disablePlaceBetMoney:!1,disableNewGame:!0},N=Object(d.c)({game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:var a=e.deck,r=e.drawnCards,n=a?a[Math.floor(Math.random()*a.length)]:null,c=e.currentCard?[].concat(Object(b.a)(r),[e.currentCard]):e.drawnCards,i=n?a.filter((function(e){return e!==n})):e.deck;return Object(p.a)(Object(p.a)({},e),{},{deck:i,currentCard:n,drawnCards:c});case h:return Object(p.a)(Object(p.a)({},e),{},{bet:2*e.bet,messageType:null,betType:null,disableBetLoHi:!1,disableNewGame:!1});case C:return Object(p.a)(Object(p.a)({},e),{},{bet:t.data.bet});case g:var s=!1===e.disablePlaceBetMoney,d=s?e.balance-e.bet:e.balance;return Object(p.a)(Object(p.a)({},e),{},{betType:t.data.betType,disableBetLoHi:!0,balance:d,disablePlaceBetMoney:!0,disableNewGame:!0});case k:return Object(p.a)(Object(p.a)({},e),{},{messageType:t.data.messageType});case f:return Object(p.a)(Object(p.a)({},D),{},{balance:e.balance+e.bet});case v:return D;case y:return Object(p.a)(Object(p.a)({},D),{},{balance:e.balance});default:return e}}}),R={},F={key:"root",storage:u.a},P=Object(l.a)(F,N),H=d.d.apply(void 0,[d.a.apply(void 0,[])].concat([])),I=(a(41),a(3)),U=a(4),W=a(6),z=a(5),J=a(24),K=a.n(J),V=a(25),Y=new Audio(a.n(V).a);Y.loop=!0,Y.volume=.5;var q=function(){return{type:m}},X=function(){return{type:h}},Q=function(e){return{type:C,data:{bet:e}}},Z=function(e){return{type:g,data:{betType:e}}},$=function(e){return{type:k,data:{messageType:e}}},ee=function(){return{type:f}},te=function(){return{type:v}},ae=function(){return{type:y}},re=function(){return new Audio(K.a).play(),{type:O}},ne=function(){return Y.paused?Y.play():Y.pause(),{type:w}},ce=a(9),ie=(a(51),a(27)),se=a.n(ie),de=function(e){Object(W.a)(a,e);var t=Object(z.a)(a);function a(e){var r;return Object(I.a)(this,a),(r=t.call(this,e)).setup=function(){r.pickCardsColor(),r.app.loader.add("images/tableBackground",se.a).add(S).load(r.initialize)},r.initialize=function(){r.setState({resourcesLoaded:!0}),r.drawTableBackground(),r.drawCurrentCard(),r.drawDeck(),r.drawDrawnCards()},r.pickCardsColor=function(){var e=r.props.currentCard,t=r.sprites.currentCard,a=r.sprites.deck;if(r.currentCardBack=r.cardBack[Math.floor(Math.random()*r.cardBack.length)],r.currentCardFront=r.cardFront[Math.floor(Math.random()*r.cardFront.length)],t){var n=r.currentCardFront+e+".png";r.sprites.currentCard.texture=ce.d.from(n)}a&&(r.sprites.deck.texture=ce.d.from(r.currentCardFront))},r.drawTableBackground=function(){r.sprites.tableBackground=new ce.c(r.app.loader.resources["images/tableBackground"].texture),r.app.stage.addChild(r.sprites.tableBackground)},r.drawCurrentCard=function(){var e=r.props.currentCard,t=r.currentCardFront+e+".png";r.sprites.currentCard=new ce.c(r.app.loader.resources[S].spritesheet.textures[t]),r.sprites.currentCard.anchor.set(.5),r.sprites.currentCard.x=.572*r.app.screen.width,r.sprites.currentCard.y=.62*r.app.screen.height,r.app.stage.addChild(r.sprites.currentCard)},r.drawDeck=function(){r.sprites.deck=new ce.c(r.app.loader.resources[S].spritesheet.textures[r.currentCardBack]),r.sprites.deck.anchor.set(.5),r.sprites.deck.x=.82*r.app.screen.width,r.sprites.deck.y=.25*r.app.screen.height,r.app.stage.addChild(r.sprites.deck)},r.drawDrawnCards=function(){var e=r.props.drawnCards,t=.18*r.app.screen.width,a=.25*r.app.screen.height;r.sprites.drawnCardsContainer||(r.sprites.drawnCardsContainer=new ce.b,r.app.stage.addChild(r.sprites.drawnCardsContainer)),e.forEach((function(e,n){var c=r.currentCardFront+e+".png",i=new ce.c(r.app.loader.resources[S].spritesheet.textures[c]);i.anchor.set(.5),i.x=t+20*n,i.y=a,r.sprites.drawnCardsContainer.addChild(i)}))},r.removeFromCanvas=function(e,t){r.app.stage.removeChild(e),delete r.sprites[t]},r.updateCurrentCard=function(){var e=r.props.currentCard,t=r.currentCardFront+e+".png";r.sprites.currentCard.texture=ce.d.from(t)},r.state={resourcesLoaded:!1},r.pixiRef=n.a.createRef(),r.pixiElement=null,r.app=new ce.a({width:G,height:A,transparent:!0}),r.sprites={},r.cardBack=L,r.cardFront=_,r.currentCardBack="",r.currentCardFront="",r}return Object(U.a)(a,[{key:"componentDidMount",value:function(){this.pixiElement=this.pixiRef.current,this.pixiElement.appendChild(this.app.view),this.setup()}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.deck,r=t.currentCard,n=t.drawnCards,c=this.state.resourcesLoaded,i=this.sprites.currentCard,s=this.sprites.deck,d=0===a.length&&a!==e.deck,l=n.length>0&&n!==e.drawnCards,o=0===n.length&&e.drawnCards.length>0&&n!==e.drawnCards;c&&(i&&r&&r!==e.currentCard&&(this.updateCurrentCard(),s||(this.pickCardsColor(),this.drawDeck())),s&&d&&this.removeFromCanvas(this.sprites.deck,"deck"),o&&this.removeFromCanvas(this.sprites.drawnCardsContainer,"drawnCardsContainer"),l&&this.drawDrawnCards())}},{key:"render",value:function(){return n.a.createElement("div",{id:"canvas-container",ref:this.pixiRef})}}]),a}(n.a.Component),le=Object(s.b)((function(e){var t=e.game;return{deck:t.deck,currentCard:t.currentCard,drawnCards:t.drawnCards}}))(de),oe=a(7),ue=(a(52),function(e){Object(W.a)(a,e);var t=Object(z.a)(a);function a(e){var r;return Object(I.a)(this,a),(r=t.call(this,e)).handleClick=r.handleClick.bind(Object(oe.a)(r)),r}return Object(U.a)(a,[{key:"handleClick",value:function(e){e.preventDefault();var t=this.props,a=t.clickSound,r=t.clickAction,n=!t.disabled;n&&a&&a(),n&&r&&r()}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.text,r="button";return e.disabled&&(r+=" disabled"),n.a.createElement("div",{className:r,id:t,onClick:this.handleClick},n.a.createElement("span",null,a))}}]),a}(n.a.Component)),pe=(a(53),function(e){Object(W.a)(a,e);var t=Object(z.a)(a);function a(e){var r;return Object(I.a)(this,a),(r=t.call(this,e)).maxLengthCheck=function(e){var t=r.props,a=t.text;if(!t.readOnly)switch(a){case"Bet":var n=e.target.value.length,c=e.target.maxLength;n>c&&(e.target.value=e.target.value.slice(0,c))}},r.handleBlur=function(e){var t=r.props,a=t.text,n=t.clickAction;if(!t.readOnly)switch(a){case"Bet":var c=parseInt(e.target.min),i=parseInt(e.target.max),s=parseInt(e.target.value);s<c?(e.target.value=c,s=c):s>i&&(e.target.value=i,s=i),n(parseInt(s))}},r.handleChange=r.handleChange.bind(Object(oe.a)(r)),r.maxLengthCheck=r.maxLengthCheck.bind(Object(oe.a)(r)),r.handleBlur=r.handleBlur.bind(Object(oe.a)(r)),r}return Object(U.a)(a,[{key:"handleChange",value:function(e){e.preventDefault();var t=this.props,a=t.clickSound,r=t.clickAction,n=t.text,c=t.readOnly,i=e.target.value;if(!c&&(a&&a(),r))switch(n){case"Bet":r(parseInt(i));break;default:r()}}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.text,r=e.name,c=e.value,i=void 0===c?1:c,s=e.min,d=void 0===s?1:s,l=e.max,o=void 0===l?1e4:l,u=e.step,p=void 0===u?1:u,b=e.readOnly,m=e.maxLength;return n.a.createElement("div",{id:t},n.a.createElement("span",null,a),n.a.createElement("br",null),n.a.createElement("input",{type:"number",name:r,min:d,max:o,step:p,value:i,readOnly:b,maxLength:m,onChange:this.handleChange,onInput:this.maxLengthCheck,onBlur:this.handleBlur}))}}]),a}(n.a.Component)),be=(a(54),function(e){Object(W.a)(a,e);var t=Object(z.a)(a);function a(e){var r;return Object(I.a)(this,a),(r=t.call(this,e)).handleClick=r.handleClick.bind(Object(oe.a)(r)),r}return Object(U.a)(a,[{key:"handleClick",value:function(e){e.preventDefault();var t=this.props,a=t.playSound,r=t.clickAction;a&&a(),r&&r()}},{key:"render",value:function(){var e=this.props,t=e.text,a=e.color,r="message-content";return a&&"red"===a?r+=" message-color-red":a&&"green"===a&&(r+=" message-color-green"),n.a.createElement("div",{className:"message",onClick:this.handleClick},n.a.createElement("div",{className:r},n.a.createElement("p",null,t),n.a.createElement("span",null,"Click to continue...")))}}]),a}(n.a.Component)),me=(a(55),function(e){Object(W.a)(a,e);var t=Object(z.a)(a);function a(e){var r;return Object(I.a)(this,a),(r=t.call(this,e)).renderMessage=r.renderMessage.bind(Object(oe.a)(r)),r}return Object(U.a)(a,[{key:"renderMessage",value:function(){var e=this.props,t=e.messageType,a=e.playSoundClick,r=e.gameOver,c=e.nextRound,i=e.newGame,s=e.resetGame;switch(t){case x:return n.a.createElement(be,{text:"Bad luck",clickSound:a,clickAction:r,color:"red"});case E:return n.a.createElement(be,{text:"Great job",clickSound:a,clickAction:c,color:"green"});case M:return n.a.createElement(be,{text:"Victory! Play again!",clickSound:a,clickAction:i,color:"green"});case T:return n.a.createElement(be,{text:"Bad luck + Balance reseted",clickSound:a,clickAction:s,color:"red"});default:return n.a.createElement(be,{text:"Default Message",clickSound:a,clickAction:s,color:"red"})}}},{key:"render",value:function(){var e=this.props,t=e.balance,a=e.bet,r=e.messageType,c=e.disableResetGame,i=e.disableBetLoHi,s=e.disablePlaceBetMoney,d=e.disableNewGame,l=e.newGame,o=e.resetGame,u=e.placeBetMoney,p=e.placeBet,b=e.playSoundClick,m=e.toggleBackgroundMusic,h=r;return n.a.createElement("div",{id:"gui"},h&&this.renderMessage(),n.a.createElement("div",{className:"gui-group"},n.a.createElement(ue,{text:"Music",id:"music",clickSound:b,clickAction:m}),n.a.createElement(ue,{text:"Reset",id:"reset",clickSound:b,clickAction:o,disabled:c}),n.a.createElement(pe,{id:"balance",text:"Balance",name:"balance",value:t,readOnly:!0})),n.a.createElement("div",{className:"gui-group"},n.a.createElement(ue,{text:"Low",clickSound:b,clickAction:function(){return p(B)},disabled:i}),n.a.createElement(pe,{text:"Bet",id:"bet-input",name:"bet",value:a,min:"10",max:"100",step:"5",maxLength:"3",clickSound:b,clickAction:u,readOnly:s}),n.a.createElement(ue,{text:"High",clickSound:b,clickAction:function(){return p(j)},disabled:i})),n.a.createElement("div",{className:"gui-group"},n.a.createElement(ue,{text:"New",clickSound:b,clickAction:l,disabled:d})))}}]),a}(n.a.Component)),he=Object(s.b)((function(e){var t=e.game;return{balance:t.balance,bet:t.bet,messageType:t.messageType,disableResetGame:t.disableResetGame,disableBetLoHi:t.disableBetLoHi,disablePlaceBetMoney:t.disablePlaceBetMoney,disableNewGame:t.disableNewGame}}),(function(e){return Object(d.b)({newGame:ee,resetGame:te,placeBetMoney:Q,placeBet:Z,gameOver:ae,nextRound:X,playSoundClick:re,toggleBackgroundMusic:ne},e)}))(me),Ce=(a(56),function(e){Object(W.a)(a,e);var t=Object(z.a)(a);function a(){return Object(I.a)(this,a),t.apply(this,arguments)}return Object(U.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.betType,a=e.currentCard,r=e.drawCard;a||t||r()}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.balance,r=t.betType,n=t.deck,c=t.currentCard,i=t.showMessage,s=t.drawCard,d=r&&r!==e.betType||!c,l=c!==e.currentCard&&r,o=a<=0,u=0===n.length,p=r===j&&c>e.currentCard||r===B&&c<e.currentCard;d&&s(),l&&(p?u?setTimeout((function(){i(M)}),500):setTimeout((function(){i(E)}),500):setTimeout((function(){i(x)}),500)),o&&setTimeout((function(){i(T)}),500)}},{key:"render",value:function(){return n.a.createElement("div",{id:"game"},n.a.createElement(le,null),n.a.createElement(he,null))}}]),a}(n.a.Component)),ge=Object(s.b)((function(e){var t=e.game;return{balance:t.balance,betType:t.betType,deck:t.deck,currentCard:t.currentCard}}),(function(e){return Object(d.b)({drawCard:q,showMessage:$,resetGame:te},e)}))(Ce),ke=(a(57),function(e){Object(W.a)(a,e);var t=Object(z.a)(a);function a(){return Object(I.a)(this,a),t.apply(this,arguments)}return Object(U.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{id:"app"},n.a.createElement(ge,null))}}]),a}(n.a.Component)),fe=function(){var e=Object(d.e)(P,R,H);return{store:e,persistor:Object(l.b)(e)}}().store,ve=document.querySelector("#root");i.a.render(n.a.createElement(s.a,{store:fe},n.a.createElement(n.a.StrictMode,null,n.a.createElement(ke,null))),ve)}},[[29,1,2]]]);
//# sourceMappingURL=main.a8fb5bf4.chunk.js.map