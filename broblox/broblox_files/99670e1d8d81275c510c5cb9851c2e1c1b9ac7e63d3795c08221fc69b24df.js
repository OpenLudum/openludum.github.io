!function(){var n={779:function(e,t){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var i={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"==r||"number"==r)e.push(n);else if(Array.isArray(n)&&n.length){var a=s.apply(null,n);a&&e.push(a)}else if("object"==r)for(var o in n)i.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()}},r={};function dt(e){if(r[e])return r[e].exports;var t=r[e]={exports:{}};return n[e](t,t.exports,dt),t.exports}dt.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return dt.d(t,{a:t}),t},dt.d=function(e,t){for(var n in t)dt.o(t,n)&&!dt.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},dt.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";function c(e,n){return e.filter(function(e){var t;return(null===(t=e.presence)||void 0===t?void 0:t.universeId)===n&&(null===(e=e.presence)||void 0===e?void 0:e.userPresenceType)===g.Presence.PresenceTypes.InGame})}function n(e){return e.charAt(0).toUpperCase()+e.slice(1)}function t(n){return Object.keys(n).reduce(function(e,t){return"object"==typeof n[t]&&n[t]&&(e[t]=JSON.stringify(n[t])),"number"==typeof n[t]&&(e[t]=n[t]),"string"==typeof n[t]&&(e[t]=encodeURIComponent(n[t])),"boolean"==typeof n[t]&&(e[t]=n[t]?1:0),e},{})}function e(){return document.getElementById("place-list")}function u(e,t){return void 0===t&&(t={}),i.urlService.getUrlWithQueries(D(encodeURIComponent(e)),t)}function m(e){var t=(n=window.getComputedStyle(e)).marginLeft,n=n.marginRight;return e.getBoundingClientRect().width+(parseInt(t,10)||0)+(parseInt(n,10)||0)}function f(e){var e=(t=e.getBoundingClientRect()).top,t=t.height;return 0<e+t/2&&window.innerHeight>e+t/2}var d=React,p=dt.n(d),r=ReactDOM,i=CoreUtilities,v=ReactStyleGuide,a=ReactUtilities,g=Roblox,h=CoreRobloxUtilities,s=HeaderScripts,o=g.EnvironmentUrls.gamesApi,l={url:{getOmniRecommendations:function(e,t){return{url:o+"/v1/games/omni-recommendations?model.pageType="+e+(void 0!==t?"&model.sessionId="+t:""),withCredentials:!0}},getOmniRecommendationsMetadata:{url:o+"/v1/games/omni-recommendations-metadata",withCredentials:!0},getGameList:{url:o+"/v1/games/list",withCredentials:!0},getGamePasses:function(e,t){return{url:i.urlService.getAbsoluteUrl("/Games/GetGamePassesPaged?placeId="+e+"&startIndex=0&maxRows="+t),withCredentials:!0}},getGameRecommendations:function(e){return{url:o+"/v1/games/recommendations/game/"+e,withCredentials:!0}},getGameSorts:{url:o+"/v1/games/sorts",withCredentials:!0}},defaultCacheCriteria:{refreshCache:!1,expirationWindowMS:3e4,useCache:!0}},y=function(e,i,s,l){return new(s=s||Promise)(function(n,t){function r(e){try{o(l.next(e))}catch(e){t(e)}}function a(e){try{o(l.throw(e))}catch(e){t(e)}}function o(e){var t;e.done?n(e.value):((t=e.value)instanceof s?t:new s(function(e){e(t)})).then(r,a)}o((l=l.apply(e,i||[])).next())})},b=function(n,r){var a,o,i,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(a)throw new TypeError("Generator is already executing.");for(;s;)try{if(a=1,o&&(i=2&t[0]?o.return:t[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,t[1])).done)return i;switch(o=0,i&&(t=[2&t[0],i.value]),t[0]){case 0:case 1:i=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,o=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(i=0<(i=s.trys).length&&i[i.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!i||t[1]>i[0]&&t[1]<i[3])){s.label=t[1];break}if(6===t[0]&&s.label<i[1]){s.label=i[1],i=t;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(t);break}i[2]&&s.ops.pop(),s.trys.pop();continue}t=r.call(n,s)}catch(e){t=[6,e],o=0}finally{a=i=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}},E=l.defaultCacheCriteria,I=h.dataStores.gamesDataStore,w=h.dataStores.userDataStoreV2,P=function(){return w.getFriends({userId:null===s.authenticatedUser||void 0===s.authenticatedUser?void 0:s.authenticatedUser.id,isGuest:!1},E)},S=function(t,n){return y(void 0,void 0,Promise,function(){return b(this,function(e){switch(e.label){case 0:return[4,i.httpService.get(l.url.getOmniRecommendations(t,n))];case 1:return[2,e.sent().data]}})})},T=function(n){return y(void 0,void 0,Promise,function(){var t;return b(this,function(e){switch(e.label){case 0:return[4,I.getPlaceDetails([n])];case 1:return t=e.sent().data,[2,(void 0===t?[]:t)[0]]}})})},N=function(e,t){for(var n=0,r=t.length,a=e.length;n<r;n++,a++)e[a]=t[n];return e},x=(new g.Intl).getDateTimeFormatter(),L=i.urlService.parseQueryString,R=i.abbreviateNumber.getAbbreviatedValue,G=i.numberFormat.getNumberFormat,k={capitalize:n,humanizeCamelCase:function(e){var t=e.split(/([A-Z][a-z]*)/g);return 1===t.length?e:n(t.filter(function(e){return 0!==e.length}).join(" "))},parseEventParams:t,getInGameFriends:c,getVotePercentage:function(e,t){var n=0;if(!Number.isNaN(e)&&!Number.isNaN(t)){if(0===e&&0===t)return;n=0===e&&0!==t?0:0!==e&&0===t||100<(n=Math.floor(e/(e+t)*100))?100:n}return n+"%"},getGearIconName:function(e){return{PowerUps:"PowerUp",Music:"Musical",PersonalTransport:"Transport"}[e]||e},getNumberFormat:G,getAbbreviatedValue:R,dateTimeFormatter:x,parseQueryString:L,composeQueryString:function(e){e=i.urlService.composeQueryString(e);return e?"?"+e:""},calculateImpressedIndexes:function(e,n){if(void 0===e)return Array.from(new Array(n[1]-n[0]+1),function(e,t){return t+n[0]});var r=n[0]<e[0]?[n[0],e[0]]:void 0,a=n[1]>e[1]?[e[1],n[1]]:void 0,t=r?new Array(r[1]-r[0]).fill(0).map(function(e,t){return t+r[0]}):[],e=a?new Array(a[1]-a[0]).fill(0).map(function(e,t){return t+a[0]+1}):[];return N(N([],t),e)},splitArray:function(n,r){if(0===n.length||0===r)return[n];var e=Math.ceil(n.length/r);return new Array(e).fill(0).map(function(e,t){return n.slice(t*r,(t+1)*r)})}},O=RobloxThumbnails,D=function(e){return"games#/sortName/v2/"+e},C=u,A=function(e,t,n){return void 0===n&&(n={}),i.urlService.getUrlWithQueries(h.entityUrl.game.getRelativePath(e)+"/"+i.seoName.formatSeoName(t),n)},U={maxTilesPerCarouselPage:6},G={maxTilesInGameImpressionsEvent:25,numberOfInGameIcons:3,numberOfInGameNames:1,numberOfGameTilesPerLoad:60,numberOfGamePassesPerLoad:50,keyBoardEventCode:{enter:"Enter"}},M={LabelSponsoredAd:"Label.SponsoredAd",LabelNoSearchResults:"LabelNoSearchResults",LabelPlayingOnePlusUsersWithComma:"LabelPlayingOnePlusUsersWithComma",LabelPlayingOneUser:"LabelPlayingOneUser"},j={LabelApiError:"Label.ApiError",LabelGames:"Label.Games"},H={ActionSeeAll:"Action.SeeAll",LabelGenreExplorerName:"Label.GenreExplorerName"},R=PropTypes,F="Label.ContextMenuTitle",z="Action.ViewDetails",q="Action.JoinGame",V={goToProfileInPlacesList:{name:"goToProfileInPlacesList",ctx:"click"},openModalFromGameTile:{name:"openModalFromGameTile",ctx:"click"},goToChatInPlacesList:{name:"goToChatInPlacesList",ctx:"click"},joinGameInPlacesList:{name:"joinGameInPlacesList",ctx:"click"},goToGameDetailInPlacesList:{name:"goToGameDetailInPlacesList",ctx:"click"},gamePlayIntentInPlacesList:{ctx:"placesListInHomePage"}};function B(e){var t=e.game,n=e.translate,r=t.universeId,a=t.name,e=t.referralUrl,t=t.isPlayable,r=p().createElement(O.Thumbnail2d,{type:O.ThumbnailTypes.gameIcon,size:O.DefaultThumbnailSize,targetId:r,imgClassName:"game-card-thumb",format:O.ThumbnailFormat.jpeg});return p().createElement("div",{className:"border-bottom player-interaction-container"},p().createElement("span",{className:"cursor-pointer game-icon"},p().createElement(v.Link,{url:e,className:"game-card-link"},r)),p().createElement("span",{className:"game-info-container"},p().createElement(v.Link,{url:e,className:"game-name"},a),!t&&p().createElement(v.Link,{url:e,className:"btn-control-sm game-link"},n(z))))}B.propTypes={game:(x=dt.n(R))().shape({universeId:x().number,placeId:x().number,name:x().string,playerCount:x().number,isShowSponsoredLabel:x().bool,nativeAdData:x().string,imageUrl:x().string,referralUrl:x().string,isPlayable:x().bool}).isRequired,translate:x().func.isRequired};var W=B;function Q(e){var t=e.playerId,e=e.altName;return p().createElement("div",{className:"avatar-card-link"},p().createElement(O.Thumbnail2d,{type:O.ThumbnailTypes.avatarHeadshot,size:O.ThumbnailAvatarHeadshotSize.size48,targetId:t,imgClassName:"avatar-card-image",format:O.ThumbnailFormat.png,altName:e}))}Q.defaultProps={altName:""},Q.propTypes={playerId:x().number.isRequired,altName:x().string};var J=Q;function _(e){var t=e.playerData,o=e.dismissModal,n=e.isPlayable,r=e.translate,e=t.presence,i=e.rootPlaceId,s=e.placeId,l=e.gameId,c=t.id,t=t.nameForDisplay;return p().createElement("div",{className:"border-bottom player-info"},p().createElement("span",{className:"player-name"},t),p().createElement(v.Button,{className:"cursor-pointer btn-primary-sm player-action",onClick:function(e){var t={rootPlaceId:i,placeId:s},n=h.playGameService.buildPlayGameProperties(i,s,l,c),r=V.joinGameInPlacesList,a=V.gamePlayIntentInPlacesList,a={eventName:r.name,ctx:r.ctx,properties:t,gamePlayIntentEventCtx:a.ctx};h.playGameService.launchGame(n,a),o(e)},isDisabled:!n},r(q)))}_.propTypes={playerData:x().shape({presence:x().shape({rootPlaceId:x().number,placeId:x().number,gameId:x().string}),id:x().number,nameForDisplay:x().string}).isRequired,dismissModal:x().func.isRequired,isPlayable:x().bool.isRequired,translate:x().func.isRequired};var K=_;function X(e){var t=e.friendsData,n=e.friendsInGame,a=e.dismissModal,o=e.isPlayable,i=e.translate,s={};return t.forEach(function(e){s[e.id]=e}),p().createElement("div",{className:"interaction-container"},p().createElement("ul",{className:"interaction-list"},n.map(function(e,t){var n=e+t,r=s[e],t=r.id,e=r.nameForDisplay;return p().createElement("li",{key:n,className:"interaction-item","aria-hidden":"true"},p().createElement("span",{className:"avatar avatar-headshot avatar-headshot-sm player-avatar"},p().createElement(J,{playerId:t,altName:e})),p().createElement(K,{playerData:r,dismissModal:a,isPlayable:o,translate:i}))})))}X.propTypes={friendsData:x().arrayOf(x().shape({presense:x().shape({rootPlaceId:x().number,placeId:x().number,gameId:x().string}),id:x().number,nameForDisplay:x().string})).isRequired,friendsInGame:x().arrayOf(x().number).isRequired,dismissModal:x().func.isRequired,isPlayable:x().bool.isRequired,translate:x().func.isRequired};var Z=X;function Y(e){var t=e.friendsData,n=e.friendsInGame,r=e.game,a=e.dismissModal,o=e.translate,e=o(F);return p().createElement("div",{"data-testid":"game-players-player-interaction-modal"},p().createElement(v.Modal.Header,{title:e,onClose:a}),p().createElement(W,{game:r,translate:o}),p().createElement(Z,{friendsData:t,friendsInGame:n,dismissModal:a,isPlayable:r.isPlayable,translate:o}))}function $(e){var t=e.id,n=e.children,r=e.gameData,e=e.buildEventProperties;return p().createElement(v.Link,{url:A(r.placeId,r.name,e(r,t)),className:"game-card-link",id:r.universeId.toString()},p().createElement(O.Thumbnail2d,{type:O.ThumbnailTypes.gameIcon,size:O.ThumbnailGameIconSize.size150,targetId:r.universeId,containerClass:"game-card-thumb-container",format:O.ThumbnailFormat.jpeg,altName:r.name}),p().createElement("div",{className:"game-card-name game-name-title",title:r.name},r.name),n)}function ee(e){var t=e.totalDownVotes,n=e.totalUpVotes,e=e.playerCount,t=k.getVotePercentage(n,t),e=k.getAbbreviatedValue(e);return p().createElement("div",{className:"game-card-info","data-testid":"game-tile-stats"},p().createElement("span",{className:"info-label icon-votes-gray"}),t?p().createElement("span",{className:"info-label vote-percentage-label"},t):p().createElement("span",{className:"info-label no-vote"}),p().createElement("span",{className:"info-label icon-playing-counts-gray"}),p().createElement("span",{className:"info-label playing-counts-label"},e))}function te(e){var t=e.friendData,n=e.gameData,r=e.translate,a=(0,d.useState)(!1),e=a[0],o=a[1];if(0===t.length)throw new Error("friendData should not be empty");return p().createElement("div",{className:"game-card-friend-info game-card-info","data-testid":"game-tile-stats-friends"},p().createElement("div",{className:"info-avatar",style:{width:22*(t.slice(0,oe).length-1)+32+"px"}},t.slice(0,oe).map(function(e){return p().createElement("div",{className:"avatar-card",role:"button",tabIndex:0,key:e.displayName,onClick:function(e){e.stopPropagation(),e.preventDefault(),o(!0)},onKeyDown:function(e){e.code===ae.enter&&(e.stopPropagation(),e.preventDefault(),o(!0))}},p().createElement(O.Thumbnail2d,{type:O.ThumbnailTypes.avatarHeadshot,size:O.ThumbnailAvatarHeadshotSize.size48,targetId:e.id,containerClass:"avatar avatar-headshot avatar-headshot-xs",imgClassName:"avatar-card-image",format:O.ThumbnailFormat.png,altName:e.displayName}))})),r&&p().createElement("span",{className:"info-label text-overflow","data-testid":"game-tile-stats-info-label"},t.length>ie?r(M.LabelPlayingOnePlusUsersWithComma,{username:t[0].displayName,count:t.length-ie}):r(M.LabelPlayingOneUser,{user:t[0].displayName})),p().createElement(se,{friendsDataInGame:t,game:n,show:e,onHide:function(e){e.stopPropagation(),e.preventDefault(),o(!1)}}))}Y.propTypes={friendsData:x().arrayOf(x().shape({presense:x().shape({rootPlaceId:x().number,placeId:x().number,gameId:x().string}),id:x().number,nameForDisplay:x().string})).isRequired,friendsInGame:x().arrayOf(x().number).isRequired,game:x().shape({universeId:x().number,placeId:x().number,name:x().string,playerCount:x().number,isShowSponsoredLabel:x().bool,nativeAdData:x().string,imageUrl:x().string,referralUrl:x().string,isPlayable:x().bool}).isRequired,dismissModal:x().func.isRequired,translate:x().func.isRequired};var ne=Y,L={common:["Common.GameSorts"],feature:"Feature.PlacesList"},re=function(){return(re=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},ae=G.keyBoardEventCode,oe=G.numberOfInGameIcons,ie=G.numberOfInGameNames;te.defaultProps={translate:void 0};var se=(0,a.withTranslations)(function(e){var t=e.show,n=e.onHide,r=e.friendsDataInGame,a=e.game,e=e.translate;return p().createElement(v.Modal,{show:t,onHide:n,size:"lg"},p().createElement(ne,{friendsData:r.map(function(e){return re(re({},e),{nameForDisplay:e.displayName})}),friendsInGame:r.map(function(e){return e.id}),game:a,dismissModal:n,translate:e}))},L),le=function(e,i,s,l){return new(s=s||Promise)(function(n,t){function r(e){try{o(l.next(e))}catch(e){t(e)}}function a(e){try{o(l.throw(e))}catch(e){t(e)}}function o(e){var t;e.done?n(e.value):((t=e.value)instanceof s?t:new s(function(e){e(t)})).then(r,a)}o((l=l.apply(e,i||[])).next())})},ce=function(n,r){var a,o,i,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(a)throw new TypeError("Generator is already executing.");for(;s;)try{if(a=1,o&&(i=2&t[0]?o.return:t[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,t[1])).done)return i;switch(o=0,i&&(t=[2&t[0],i.value]),t[0]){case 0:case 1:i=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,o=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(i=0<(i=s.trys).length&&i[i.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!i||t[1]>i[0]&&t[1]<i[3])){s.label=t[1];break}if(6===t[0]&&s.label<i[1]){s.label=i[1],i=t;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(t);break}i[2]&&s.ops.pop(),s.trys.pop();continue}t=r.call(n,s)}catch(e){t=[6,e],o=0}finally{a=i=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}},ue=(0,d.forwardRef)(function(e,t){var n=e.id,r=e.buildEventProperties,a=e.gameData,e=e.friendData,o=void 0===e?[]:e,e=(0,d.useState)(),i=e[0],s=e[1],l=(0,d.useMemo)(function(){return c(o,a.universeId)},[o,a.universeId]);return(0,d.useEffect)(function(){void 0===i&&0<l.length&&le(void 0,void 0,void 0,function(){var t;return ce(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,T(a.placeId.toString())];case 1:return t=e.sent(),s(t),[3,3];case 2:return t=e.sent(),console.error(t),[3,3];case 3:return[2]}})})},[l,i]),p().createElement("div",{ref:t,className:"grid-item-container game-card-container","data-testid":"game-tile"},p().createElement($,{id:n,buildEventProperties:r,gameData:a},0<l.length&&i?p().createElement(te,{friendData:l,gameData:i}):p().createElement(ee,{totalUpVotes:a.totalUpVotes,totalDownVotes:a.totalDownVotes,playerCount:a.playerCount})))});ue.displayName="GameTile";var me=(0,d.forwardRef)(function(e,t){var n=e.gameData,r=e.buildEventProperties,a=e.translate,o=e.friendData,i=e.tileRef;return p().createElement("div",{"data-testid":"game-carousel",ref:t,className:"game-carousel"},n.map(function(e,t){return p().createElement(ue,{ref:i,key:t,id:t,gameData:e,translate:a,buildEventProperties:r,friendData:o})}))});function fe(e){e instanceof SyntaxError&&window.sessionStorage.removeItem(Le)}function de(n,r){void 0===r&&(r=!1);var e=(0,d.useState)(Ge([n])[n]),t=e[0],a=e[1];return(0,d.useEffect)(function(){var e,t;r&&(t=i.uuidService.generateRandomUuid(),Re(((e={})[n]=t,e)),a(t))},[]),t}function pe(n,r){var a;return void 0===r&&(r=300),[function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];clearTimeout(a),a=setTimeout(function(){n.apply(void 0,e)},r)},function(){clearTimeout(a)}]}function ve(e){var t=e.translate,n=e.friendsPresence,r=e.gameData,a=e.sort,o=e.positionId,i=(0,d.useRef)(null),e=(0,d.useRef)(null),s=de(Se);return De(i,e,r,{sortPos:o,gameSetTypeId:a.TopicId,page:Pe,homePageSessionInfo:s}),p().createElement(me,{ref:i,tileRef:e,gameData:r,friendData:n,buildEventProperties:function(e,t){return{placeId:e.placeId,universeId:e.universeId,isAd:e.isSponsored,position:t,sortPos:o,numberOfLoadedTiles:(r||[]).length,gameSetTypeId:a.TopicId,homePageSessionInfo:s,page:Pe}},translate:t})}function ge(e){var t=e.sorts,e=e.translate,n=de(Se);return(0,d.useEffect)(function(){var e=Ne({topics:t.map(function(e){return e.TopicId}),page:Pe,homePageSessionInfo:n});h.eventStreamService.sendEvent.apply(h.eventStreamService,e)},[]),p().createElement(p().Fragment,null,p().createElement("h3",{className:"font-header-1"},e(H.LabelGenreExplorerName)),p().createElement("div",{className:"game-home-page-genre-explorer"},t.map(function(e,t){return p().createElement(v.Link,{key:e.Topic,url:C(e.Topic,{position:t,sortId:e.TopicId,page:Pe,treatmentType:e.TreatmentType,homePageSessionInfo:n}),className:"game-home-page-genre"},p().createElement("span",{className:"text-overflow font-bold"},e.Topic))})))}me.displayName="GameCarousel";var he=function(){return(he=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},ye=function(e,t){var n={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},be=(R=h.eventStreamService.eventTypes).pageLoad,Ee=R.formInteraction,Ie="gameImpressions",we="genreExplorerRender",Pe="homePage",Se="homePageSessionInfo",Te=function(e){e=ye(e,[]);return[{name:Ie,type:Ie,context:Ee},t(he({},e))]},Ne=function(e){return[{name:we,type:we,context:be},t(he({},e))]},xe=function(){return(xe=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},Le="eventTracker",Re=function(e){try{var t=JSON.parse(window.sessionStorage.getItem(Le)||"{}"),t=xe(xe({},t),e);return window.sessionStorage.setItem(Le,JSON.stringify(t)),!0}catch(e){return fe(e),!1}},Ge=function(e){try{var n=JSON.parse(window.sessionStorage.getItem(Le)||"{}");return e.reduce(function(e,t){return e[t]=n[t],e},{})}catch(e){return fe(e),{}}},ke=de,Oe=function(){return(Oe=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},De=function(a,o,e,i){function t(){var t,e=[],n=!!(r=a.current)&&f(r),r=function(e,t){if(e&&t){var n=e.clientWidth,e=e.scrollLeft,t=m(t);return[Math.round(e/t),Math.round((e+n)/t)-1]}}(a.current,o.current);n&&r&&(e=k.calculateImpressedIndexes(l.current,r)),0!==e.length&&s.current&&(t=s.current,n=e.filter(function(e){return e<t.length}),r=n,void 0===l.current?l.current=[r[0],r[r.length-1]]:(e=(l.current[0]<r[0]?l.current:r)[0],r=l.current[1]>r[r.length-1]?l.current[1]:r[r.length-1],l.current=[e,r]),n=Te(Oe({rootPlaceIds:n.map(function(e){return t[e].placeId}),universeIds:n.map(function(e){return t[e].universeId}),absPositions:n},i)),h.eventStreamService.sendEvent.apply(h.eventStreamService,n))}function n(){u(),window.removeEventListener("scroll",c),window.removeEventListener("resize",c)}var s=(0,d.useRef)(e),l=(0,d.useRef)(void 0),r=pe(function(){t()}),c=r[0],u=r[1];(0,d.useEffect)(function(){return window.addEventListener("scroll",c),window.addEventListener("resize",c),n},[]),(0,d.useEffect)(function(){var e=a.current;return null!=e&&e.addEventListener("scroll",c),function(){null!=e&&e.removeEventListener("scroll",c)}},[a,c]),(0,d.useEffect)(function(){s.current=e,t()},[e])},Ce=function(){return(Ce=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},Ae=function(e,i,s,l){return new(s=s||Promise)(function(n,t){function r(e){try{o(l.next(e))}catch(e){t(e)}}function a(e){try{o(l.throw(e))}catch(e){t(e)}}function o(e){var t;e.done?n(e.value):((t=e.value)instanceof s?t:new s(function(e){e(t)})).then(r,a)}o((l=l.apply(e,i||[])).next())})},Ue=function(n,r){var a,o,i,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(a)throw new TypeError("Generator is already executing.");for(;s;)try{if(a=1,o&&(i=2&t[0]?o.return:t[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,t[1])).done)return i;switch(o=0,i&&(t=[2&t[0],i.value]),t[0]){case 0:case 1:i=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,o=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(i=0<(i=s.trys).length&&i[i.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!i||t[1]>i[0]&&t[1]<i[3])){s.label=t[1];break}if(6===t[0]&&s.label<i[1]){s.label=i[1],i=t;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(t);break}i[2]&&s.ops.pop(),s.trys.pop();continue}t=r.call(n,s)}catch(e){t=[6,e],o=0}finally{a=i=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}};function Me(){function r(e){(e.detail||[]).forEach(function(e){o.current[e.userId]&&(o.current[e.userId]=Ce(Ce({},o.current[e.userId]),{presence:e}))}),a(Ce({},o.current))}var e=this,t=(0,d.useState)({}),n=t[0],a=t[1],o=(0,d.useRef)(n);return(0,d.useEffect)(function(){return Ae(e,void 0,void 0,function(){var t,n;return Ue(this,function(e){switch(e.label){case 0:if((null==(t=s.deviceMeta.getDeviceMeta())?void 0:t.deviceType)!==s.deviceMeta.DeviceTypes.computer)return[3,4];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,P()];case 2:return n=e.sent().userData,n=(n||[]).reduce(function(e,t){return e[t.id]=t,e},{}),o.current=n,a(Ce({},o.current)),document.addEventListener("Roblox.Presence.Update",r),[3,4];case 3:return n=e.sent(),console.error("useFriendsPresence failed to initialized with the error",n),[3,4];case 4:return[2]}})}),function(){document.removeEventListener("Roblox.Presence.Update",r)}},[]),Object.values(n)}var x=dt(779),je=dt.n(x),He=v.Button.variants;function Fe(){return p().createElement("div",{className:"grid-item-container game-card-container game-card-loading"},p().createElement("div",{className:"game-card-thumb-container shimmer"}),p().createElement("div",{className:"game-card-name game-name-title shimmer"}),p().createElement("div",{className:"game-card-name game-name-title game-name-title-half shimmer"}))}(G=function(e){var t=e.errorMessage,n=e.onRefresh,e=e.className;return p().createElement("div",{"data-testid":"error-status",className:je()("game-error",e)},p().createElement("span",{className:"icon-spot-error-2xl"}),p().createElement("p",{className:"text-label error-text"},t),p().createElement(v.Button,{className:"refresh-button",variant:He.control,onClick:n},p().createElement("span",{className:"icon-common-refresh"})))}).defaultProps={className:""};var ze,qe,Ve=G;function Be(e){function t(){return _e(void 0,void 0,Promise,function(){var t;return Ke(this,function(e){switch(e.label){case 0:c(!1),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,S(ze.Home)];case 2:return t=e.sent(),n(t),[3,4];case 3:return e.sent(),c(!0),[3,4];case 4:return[2]}})})}var r=e.translate,a=e.homePageSessionInfo,o=e.avatarRecommendationIndex,i=Me(),s=(l=(0,d.useState)(void 0))[0],n=l[1],l=(e=(0,d.useState)(!1))[0],c=e[1],e=(0,d.useMemo)(function(){return null==s?void 0:s.Sorts.filter(function(e){return e.TreatmentType===qe.GenreExplorerLabel})},[s]);return(0,d.useEffect)(function(){t()},[]),l?p().createElement("div",{className:"game-home-page-container"},p().createElement("h3",null,r(j.LabelGames)),p().createElement(Ve,{errorMessage:r(j.LabelApiError),onRefresh:t})):void 0===s?p().createElement("div",{className:"game-home-page-container"},p().createElement("div",{className:"game-home-page-loading-title shimmer"}),p().createElement("div",{className:"game-home-page-loading-carousel"},Array.from({length:Xe},function(e,t){return p().createElement(Fe,{key:t})}))):p().createElement("div",{"data-testid":"game-home-page-container",className:"game-home-page-container"},e&&0<e.length&&p().createElement(ge,{translate:r,sorts:e}),s.Sorts.filter(function(e){return e.TreatmentType===qe.Carousel}).map(function(e,t){var n=e.RecommendationList.map(function(e){var t=e.ContentType,e=e.ContentId;return s.ContentMetadata[t][e]}).filter(function(e){return void 0!==e}).slice(0,Xe);return p().createElement(p().Fragment,{key:e.Topic},t+1===o&&p().createElement(g.AvatarShopHomepageRecommendations,null),p().createElement("div",{className:"game-home-page-carousel-title"},p().createElement(v.Link,{url:u(e.Topic,{position:t,sortId:e.TopicId,page:Pe,treatmentType:e.TreatmentType,homePageSessionInfo:a}),className:"font-header-1"},e.Topic),p().createElement(v.Link,{url:u(e.Topic,{position:t,sortId:e.TopicId,page:Pe,treatmentType:e.TreatmentType,homePageSessionInfo:a}),className:"see-all-link-icon"},r(H.ActionSeeAll))),p().createElement(ve,{sort:e,gameData:n,translate:r,positionId:t,friendsPresence:i}))}),o>s.Sorts.length&&p().createElement(g.AvatarShopHomepageRecommendations,null))}function We(e){var t=e.translate,n=e.friendsPresence,r=e.gameData,a=e.sort,o=e.positionId,i=(0,d.useRef)(null),e=(0,d.useRef)(null),s=de(Se);return De(i,e,r,{sortPos:o,gameSetTypeId:a.topicId,page:Pe,homePageSessionInfo:s}),p().createElement(me,{ref:i,tileRef:e,gameData:r,friendData:n,buildEventProperties:function(e,t){return{placeId:e.placeId,universeId:e.universeId,isAd:e.isShowSponsoredLabel,position:t,sortPos:o,numberOfLoadedTiles:(r||[]).length,gameSetTypeId:a.topicId,homePageSessionInfo:s,page:Pe}},translate:t})}function Qe(e){var t=e.sorts,e=e.translate,n=de(Se);return(0,d.useEffect)(function(){var e=Ne({topics:t.map(function(e){return e.topicId}),page:Pe,homePageSessionInfo:n});h.eventStreamService.sendEvent.apply(h.eventStreamService,e)},[]),p().createElement(p().Fragment,null,p().createElement("h3",{className:"font-header-1"},e(H.LabelGenreExplorerName)),p().createElement("div",{className:"game-home-page-genre-explorer"},t.map(function(e,t){return p().createElement(v.Link,{key:e.topic,url:C(e.topic,{position:t,sortId:e.topicId,page:Pe,treatmentType:e.treatmentType,homePageSessionInfo:n}),className:"game-home-page-genre"},p().createElement("span",{className:"text-overflow font-bold"},e.topic))})))}function Je(e){function t(){return ot(void 0,void 0,Promise,function(){var t;return it(this,function(e){switch(e.label){case 0:l(!1),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,at(ze.Home,a)];case 2:return t=e.sent(),n(t),[3,4];case 3:return e.sent(),l(!0),[3,4];case 4:return[2]}})})}var r=e.translate,a=e.homePageSessionInfo,o=Me(),i=(s=(0,d.useState)(void 0))[0],n=s[1],s=(e=(0,d.useState)(!1))[0],l=e[1],e=(0,d.useMemo)(function(){return null==i?void 0:i.sorts.filter(function(e){return e.treatmentType===qe.GenreExplorerLabel})},[i]);return(0,d.useEffect)(function(){t()},[]),s?p().createElement("div",{className:"game-home-page-container"},p().createElement("h3",null,r(j.LabelGames)),p().createElement(Ve,{errorMessage:r(j.LabelApiError),onRefresh:t})):void 0===i?p().createElement("div",{className:"game-home-page-container"},p().createElement("div",{className:"game-home-page-loading-title shimmer"}),p().createElement("div",{className:"game-home-page-loading-carousel"},Array.from({length:st},function(e,t){return p().createElement(Fe,{key:t})}))):p().createElement("div",{className:"game-home-page-container"},e&&0<e.length&&p().createElement(Qe,{translate:r,sorts:e}),i.sorts.filter(function(e){return e.treatmentType===qe.Carousel}).map(function(e,t){var n=e.recommendationList.map(function(e){var t=e.contentType,e=e.contentId;return i.contentMetadata[t][e]}).filter(function(e){return void 0!==e}).slice(0,st);return p().createElement(p().Fragment,{key:e.topic},p().createElement("div",{className:"game-home-page-carousel-title"},p().createElement(v.Link,{url:u(e.topic,{position:t,sortId:e.topicId,page:Pe,treatmentType:e.treatmentType,homePageSessionInfo:a}),className:"font-header-1"},e.topic),p().createElement(v.Link,{url:u(e.topic,{position:t,sortId:e.topicId,page:Pe,treatmentType:e.treatmentType,homePageSessionInfo:a}),className:"see-all-link-icon"},r(H.ActionSeeAll))),p().createElement(We,{sort:e,gameData:n,translate:r,positionId:t,friendsPresence:o}))}))}(R={}).Melee="Melee",R.Ranged="Ranged",R.Explosive="Explosive",R.PowerUps="PowerUps",R.Navigation="Navigation",R.Music="Music",R.Social="Social",R.Building="Building",R.PersonalTransport="PersonalTransport",(x=ze=ze||{}).Home="Home",x.Games="Games",(G={}).Games="Games",G.Game="Game",(R=qe=qe||{}).Carousel="Carousel",R.GenreExplorerLabel="GenreExplorerLabel",(x={}).Invalid="Invalid",x.HasLootBoxes="HasLootBoxes",x.HasInGameTrading="HasInGameTrading",x.IsUsingLootBoxApi="IsUsingLootBoxApi",x.IsUsingInGameTradingApi="IsUsingInGameTradingApi",x.HasAllowedExternalLinkReferences="HasAllowedExternalLinkReferences",x.IsUsingAllowedExternalLinkReferencesApi="IsUsingAllowedExternalLinkReferencesApi",(G={}).MorphToR6="MorphToR6",G.PlayerChoice="PlayerChoice",G.MorphToR15="MorphToR15";var _e=function(e,i,s,l){return new(s=s||Promise)(function(n,t){function r(e){try{o(l.next(e))}catch(e){t(e)}}function a(e){try{o(l.throw(e))}catch(e){t(e)}}function o(e){var t;e.done?n(e.value):((t=e.value)instanceof s?t:new s(function(e){e(t)})).then(r,a)}o((l=l.apply(e,i||[])).next())})},Ke=function(n,r){var a,o,i,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(a)throw new TypeError("Generator is already executing.");for(;s;)try{if(a=1,o&&(i=2&t[0]?o.return:t[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,t[1])).done)return i;switch(o=0,i&&(t=[2&t[0],i.value]),t[0]){case 0:case 1:i=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,o=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(i=0<(i=s.trys).length&&i[i.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!i||t[1]>i[0]&&t[1]<i[3])){s.label=t[1];break}if(6===t[0]&&s.label<i[1]){s.label=i[1],i=t;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(t);break}i[2]&&s.ops.pop(),s.trys.pop();continue}t=r.call(n,s)}catch(e){t=[6,e],o=0}finally{a=i=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}},Xe=U.maxTilesPerCarouselPage,Ze=g.EnvironmentUrls.apiGatewayUrl,Ye={getExperimentationValues:function(e,t,n){return{url:Ze+"/product-experimentation-platform/v1/projects/"+e+"/layers/"+t+"/values?parameters="+n.join(","),withCredentials:!0}}},R={homePage:{AvatarHomepageRecommendationsRowNum:0,IsDiscoveryApiEnabled:!1}},x={homePage:"PlayerApp.HomePage.UX"},$e={url:{getOmniRecommendations:{url:(G=g.EnvironmentUrls.apiGatewayUrl)+"/discovery-api/omni-recommendation",withCredentials:!0},getOmniRecommendationsMetadata:{url:G+"/discovery-api/omni-recommendation-metadata",withCredentials:!0}}},et=function(){return(et=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},tt=function(e,i,s,l){return new(s=s||Promise)(function(n,t){function r(e){try{o(l.next(e))}catch(e){t(e)}}function a(e){try{o(l.throw(e))}catch(e){t(e)}}function o(e){var t;e.done?n(e.value):((t=e.value)instanceof s?t:new s(function(e){e(t)})).then(r,a)}o((l=l.apply(e,i||[])).next())})},nt=function(n,r){var a,o,i,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(a)throw new TypeError("Generator is already executing.");for(;s;)try{if(a=1,o&&(i=2&t[0]?o.return:t[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,t[1])).done)return i;switch(o=0,i&&(t=[2&t[0],i.value]),t[0]){case 0:case 1:i=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,o=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(i=0<(i=s.trys).length&&i[i.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!i||t[1]>i[0]&&t[1]<i[3])){s.label=t[1];break}if(6===t[0]&&s.label<i[1]){s.label=i[1],i=t;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(t);break}i[2]&&s.ops.pop(),s.trys.pop();continue}t=r.call(n,s)}catch(e){t=[6,e],o=0}finally{a=i=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}},rt=function(r,a,o){return void 0===o&&(o=1),tt(void 0,void 0,Promise,function(){var n,t;return nt(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,i.httpService.get(Ye.getExperimentationValues(o,r,Object.keys(a)))];case 1:return n=e.sent().data,t=Object.keys(n).reduce(function(e,t){return null!==n[t]&&(e[t]=n[t]),e},{}),[2,et(et({},a),t)];case 2:return e.sent(),[2,a];case 3:return[2]}})})},at=function(r,a){return tt(void 0,void 0,Promise,function(){var t,n;return nt(this,function(e){switch(e.label){case 0:return t={pageType:r,sessionId:a||i.uuidService.generateRandomUuid()},[4,i.httpService.post($e.url.getOmniRecommendations,t)];case 1:return n=e.sent().data,Object.keys(n.contentMetadata.Game).forEach(function(e){e=n.contentMetadata.Game[e];e.placeId=e.rootPlaceId}),[2,n]}})})},ot=function(e,i,s,l){return new(s=s||Promise)(function(n,t){function r(e){try{o(l.next(e))}catch(e){t(e)}}function a(e){try{o(l.throw(e))}catch(e){t(e)}}function o(e){var t;e.done?n(e.value):((t=e.value)instanceof s?t:new s(function(e){e(t)})).then(r,a)}o((l=l.apply(e,i||[])).next())})},it=function(n,r){var a,o,i,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(a)throw new TypeError("Generator is already executing.");for(;s;)try{if(a=1,o&&(i=2&t[0]?o.return:t[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,t[1])).done)return i;switch(o=0,i&&(t=[2&t[0],i.value]),t[0]){case 0:case 1:i=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,o=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(i=0<(i=s.trys).length&&i[i.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!i||t[1]>i[0]&&t[1]<i[3])){s.label=t[1];break}if(6===t[0]&&s.label<i[1]){s.label=i[1],i=t;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(t);break}i[2]&&s.ops.pop(),s.trys.pop();continue}t=r.call(n,s)}catch(e){t=[6,e],o=0}finally{a=i=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}},st=U.maxTilesPerCarouselPage,lt=function(e,i,s,l){return new(s=s||Promise)(function(n,t){function r(e){try{o(l.next(e))}catch(e){t(e)}}function a(e){try{o(l.throw(e))}catch(e){t(e)}}function o(e){var t;e.done?n(e.value):((t=e.value)instanceof s?t:new s(function(e){e(t)})).then(r,a)}o((l=l.apply(e,i||[])).next())})},ct=function(n,r){var a,o,i,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(a)throw new TypeError("Generator is already executing.");for(;s;)try{if(a=1,o&&(i=2&t[0]?o.return:t[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,t[1])).done)return i;switch(o=0,i&&(t=[2&t[0],i.value]),t[0]){case 0:case 1:i=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,o=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(i=0<(i=s.trys).length&&i[i.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!i||t[1]>i[0]&&t[1]<i[3])){s.label=t[1];break}if(6===t[0]&&s.label<i[1]){s.label=i[1],i=t;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(t);break}i[2]&&s.ops.pop(),s.trys.pop();continue}t=r.call(n,s)}catch(e){t=[6,e],o=0}finally{a=i=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}},ut=x,mt=R,ft=(0,a.withTranslations)(function(e){var t=e.translate,n=ke(Se,!0),r=(0,d.useState)(void 0),e=r[0],a=r[1];return(0,d.useEffect)(function(){lt(void 0,void 0,void 0,function(){var t;return ct(this,function(e){switch(e.label){case 0:return[4,rt(ut.homePage,mt.homePage)];case 1:return t=e.sent(),a(t),[2]}})})},[]),!0===(null==e?void 0:e.IsDiscoveryApiEnabled)?p().createElement(Je,{homePageSessionInfo:n,translate:t}):!1===(null==e?void 0:e.IsDiscoveryApiEnabled)?p().createElement(Be,{avatarRecommendationIndex:e.AvatarHomepageRecommendationsRowNum,homePageSessionInfo:n,translate:t}):p().createElement(v.Loading,null)},L);(0,i.ready)(function(){e()&&(0,r.render)(p().createElement(ft,null),e())})}()}();
//# sourceMappingURL=https://js.rbxcdn.com/d41624cb5252a138f16c-placesList.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("PlacesList");