;// bundle: clientinstaller___3040f01a9e48326873a4c074771026f6_m
;// files: EventTracker.js, ClientInstaller.js, InstallationInstructions.js

;// EventTracker.js
EventTracker=new function(){var n=this;n.logMetrics=!1,n.transmitMetrics=!0,n.localEventLog=[];var t=new function(){var n={};this.get=function(t){return n[t]},this.set=function(t,i){n[t]=i},this.remove=function(t){delete n[t]}},r=function(){return(new Date).valueOf()},i=function(n,t){var i=r();$.each(n,function(n,r){u(r,t,i)})},u=function(i,r,u){var e=t.get(i),f,o;e?(t.remove(i),f=u-e,n.logMetrics&&console.log("[event]",i,r,f),n.transmitMetrics&&(o=i+"_"+r,$.ajax({type:"POST",timeout:5e4,url:"/game/report-stats?name="+o+"&value="+f,crossDomain:!0,xhrFields:{withCredentials:!0}}))):n.logMetrics&&console.log("[event]","ERROR: event not started -",i,r)};n.start=function(){var n=r();$.each(arguments,function(i,r){t.set(r,n)})},n.endSuccess=function(){i(arguments,"Success")},n.endCancel=function(){i(arguments,"Cancel")},n.endFailure=function(){i(arguments,"Failure")},n.fireEvent=function(){$.each(arguments,function(t,i){$.ajax({type:"POST",timeout:5e4,url:"/game/report-event?name="+i,crossDomain:!0,xhrFields:{withCredentials:!0}}),n.logMetrics&&console.log("[event]",i),n.localEventLog.push(i)})}};

;// ClientInstaller.js
typeof Roblox=="undefined"&&(Roblox={}),Roblox.Client={},Roblox.Client._installHost=null,Roblox.Client._installSuccess=null,Roblox.Client._CLSID=null,Roblox.Client._continuation=null,Roblox.Client._skip=null,Roblox.Client._isIDE=null,Roblox.Client._isRobloxBrowser=null,Roblox.Client._isPlaceLaunch=!1,Roblox.Client._silentModeEnabled=!1,Roblox.Client._bringAppToFrontEnabled=!1,Roblox.Client._numLocks=0,Roblox.Client._logTiming=!1,Roblox.Client._logStartTime=null,Roblox.Client._logEndTime=null,Roblox.Client._hiddenModeEnabled=!1,Roblox.Client._runInstallABTest=function(){},Roblox.Client._currentPluginVersion="",Roblox.Client._whyIsRobloxLauncherNotCreated=null,Roblox.Client._eventStreamLoggingEnabled=!1,Roblox.Client._launchMode="unknown",Roblox.Client.LauncherNotCreatedReasons={pluginNotInstalled:"pluginNotInstalled",pluginNotAllowed:"pluginNotAllowed",wrongInstallHost:"wrongInstallHost",wrongInstallHostAndPluginWasNotAllowed:"wrongInstallHostAndPluginWasNotAllowed",versionMismatch:"versionMismatch",unknownError:"unknownError"},Roblox.Client.ReleaseLauncher=function(n,t,i){if(t&&Roblox.Client._numLocks--,(i||Roblox.Client._numLocks<=0)&&(n!=null&&(document.getElementById("pluginObjDiv").innerHTML="",n=null),Roblox.Client._numLocks=0),Roblox.Client._logTiming){Roblox.Client._logEndTime=new Date;var r=Roblox.Client._logEndTime.getTime()-Roblox.Client._logStartTime.getTime()}},Roblox.Client.IsUpToDateVersion=function(n){var r=Roblox.Client._currentPluginVersion,i,t;if(r==null||r=="")return!0;try{if(i=n.Get_Version(),i=="-1"||i=="undefined")return!0}catch(o){return!1}if(r===i)return!0;var u=$.map(i.split(","),function(n){return parseInt(n,10)}),f=$.map(r.split(","),function(n){return parseInt(n,10)}),e=Math.min(f.length,u.length);for(t=0;t<e;t++){if(f[t]>u[t])return!1;if(f[t]<u[t])return!0}return u.length!==f.length?!1:!0},Roblox.Client.GetInstallHost=function(n){if(Roblox.Client.IsIE())return n.InstallHost;var t=n.Get_InstallHost();return t.match(/roblox.com$/)?t:t.substring(0,t.length-1)},Roblox.Client.IsIE=function(){try{return!!new ActiveXObject("htmlfile")}catch(n){return!1}},Roblox.Client.browserRequiresPluginActivation=function(){return/firefox/i.test(navigator.userAgent)||window.chrome||window.safari},Roblox.Client.CreateLauncher=function(n){var t,u,i,f,r;if(Roblox.Client._logTiming&&(Roblox.Client._logStartTime=new Date),n&&Roblox.Client._numLocks++,(Roblox.Client._installHost==null||Roblox.Client._CLSID==null)&&typeof initClientProps=="function"&&initClientProps(),t=document.getElementById("robloxpluginobj"),u=$("#pluginObjDiv"),t||(Roblox.Client._hiddenModeEnabled=!1,Roblox.Client.IsIE()?(i='<object classid="clsid:'+Roblox.Client._CLSID+'"',i+=' id="robloxpluginobj" type="application/x-vnd-roblox-launcher"',i+=' codebase="'+Roblox.Client._installHost+'"><p>Failed to INIT Plugin</p></object>',$(u).append(i)):(i='<object id="robloxpluginobj" type="application/x-vnd-roblox-launcher"><p>Please Install the plugin</p></object>',$(u).append(i)),t=document.getElementById("robloxpluginobj")),!t)return Roblox.Client.ReleaseLauncher(t,n,!1),Roblox.Client._whyIsRobloxLauncherNotCreated=Roblox.Client.LauncherNotCreatedReasons.unknownError,null;if($("#robloxpluginobj p").is(":visible"))return Roblox.Client.ReleaseLauncher(t,n,!1),Roblox.Client._whyIsRobloxLauncherNotCreated=Roblox.Client.LauncherNotCreatedReasons.pluginNotInstalled,null;try{t.Hello()}catch(e){return f=Roblox.Client.browserRequiresPluginActivation(),f&&!$("#robloxpluginobj p").is(":visible")?Roblox.Client._whyIsRobloxLauncherNotCreated=Roblox.Client.LauncherNotCreatedReasons.pluginNotAllowed:(Roblox.Client.ReleaseLauncher(),Roblox.Client._whyIsRobloxLauncherNotCreated=Roblox.Client.LauncherNotCreatedReasons.unknownError),null}try{if(r=Roblox.Client.GetInstallHost(t),!r||r!=Roblox.Client._installHost)throw new Error("wrong InstallHost: (plugins):  "+r+"  (servers):  "+Roblox.Client._installHost);}catch(e){switch(Roblox.Client._whyIsRobloxLauncherNotCreated){case Roblox.Client.LauncherNotCreatedReasons.pluginNotAllowed:Roblox.Client._whyIsRobloxLauncherNotCreated=Roblox.Client.LauncherNotCreatedReasons.wrongInstallHostAndPluginWasNotAllowed;break;case Roblox.Client.LauncherNotCreatedReasons.wrongInstallHostAndPluginWasNotAllowed:break;default:Roblox.Client._whyIsRobloxLauncherNotCreated=Roblox.Client.LauncherNotCreatedReasons.wrongInstallHost}return Roblox.Client.ReleaseLauncher(t,n,!1),null}return Roblox.Client.IsUpToDateVersion(t)?t:(Roblox.Client._whyIsRobloxLauncherNotCreated=Roblox.Client.LauncherNotCreatedReasons.versionMismatch,null)},Roblox.Client.whyIsRobloxLauncherNotCreated=function(){return Roblox.Client._whyIsRobloxLauncherNotCreated},Roblox.Client.isIDE=function(){if(Roblox.Client._isIDE==null&&(Roblox.Client._isIDE=!1,Roblox.Client._isRobloxBrowser=!1,window.external))try{window.external.IsRobloxAppIDE!==undefined&&(Roblox.Client._isIDE=window.external.IsRobloxAppIDE,Roblox.Client._isRobloxBrowser=!0)}catch(n){}return Roblox.Client._isIDE},Roblox.Client.isRobloxBrowser=function(){return Roblox.Client.isIDE(),Roblox.Client._isRobloxBrowser},Roblox.Client.robloxBrowserInstallHost=function(){if(window.external)try{return window.external.InstallHost}catch(n){}return""},Roblox.Client.IsRobloxProxyInstalled=function(){var n=Roblox.Client.CreateLauncher(!1),t=!1;return(n!=null&&(t=!0),Roblox.Client.ReleaseLauncher(n,!1,!1),t||Roblox.Client.isRobloxBrowser())?!0:!1},Roblox.Client.IsRobloxInstalled=function(){try{var t=Roblox.Client.CreateLauncher(!1),n=Roblox.Client.GetInstallHost(t);return Roblox.Client.ReleaseLauncher(t,!1,!1),n==Roblox.Client._installHost}catch(i){return Roblox.Client.isRobloxBrowser()?(n=Roblox.Client.robloxBrowserInstallHost(),n==Roblox.Client._installHost):!1}},Roblox.Client.SetStartInHiddenMode=function(n){try{var t=Roblox.Client.CreateLauncher(!1);if(t!==null)return t.SetStartInHiddenMode(n),Roblox.Client._hiddenModeEnabled=n,!0}catch(i){}return!1},Roblox.Client.UnhideApp=function(){try{if(Roblox.Client._hiddenModeEnabled){var n=Roblox.Client.CreateLauncher(!1);n.UnhideApp()}}catch(t){}},Roblox.Client.Update=function(){EventTracker&&EventTracker.start("UpdateClient");try{var n=Roblox.Client.CreateLauncher(!1);n.Update(),Roblox.Client.ReleaseLauncher(n,!1,!1)}catch(t){EventTracker&&EventTracker.endFailure("UpdateClient")}},Roblox.Client.WaitForRoblox=function(n){var t,i;return Roblox.Client._skip?(window.location=Roblox.Client._skip,!1):(Roblox.Client._continuation=n,Roblox.Client._cancelled=!1,t="Windows",navigator.appVersion.indexOf("Mac")!=-1&&(t="Mac"),Roblox.Client.IsRobloxProxyInstalled())?(Roblox.Client._continuation(),!1):(Roblox.Client._whyIsRobloxLauncherNotCreated==Roblox.Client.LauncherNotCreatedReasons.pluginNotAllowed?(Roblox.InstallationInstructions.show("activation"),GoogleAnalyticsEvents&&GoogleAnalyticsEvents.FireEvent(["Plugin","Activation Begin",t])):(EventTracker&&EventTracker.start("InstallClient"),Roblox.InstallationInstructions.show("installation"),Roblox.Client._runInstallABTest(),GoogleAnalyticsEvents&&GoogleAnalyticsEvents.FireEvent(["Plugin","Install Begin",t]),Roblox.Client._eventStreamLoggingEnabled&&typeof Roblox.GamePlayEvents!="undefined"&&Roblox.GamePlayEvents.SendInstallBegin(null,play_placeId),(window.chrome||window.safari)&&(window.location.hash="#chromeInstall",$.cookie("chromeInstall",n.toString().replace(/play_placeId/,play_placeId.toString())),Roblox.Client._eventStreamLoggingEnabled&&typeof Roblox.GamePlayEvents!="undefined"&&($.cookie("chromeInstallPlaceId",play_placeId),$.cookie("chromeInstallLaunchMode",Roblox.GamePlayEvents.lastContext))),i=document.getElementById("downloadInstallerIFrame"),i.src="/download/client"),window.setTimeout(function(){Roblox.Client._ontimer()},1e3),!0)},Roblox.Client.ResumeTimer=function(n){Roblox.Client._continuation=n,Roblox.Client._cancelled=!1,window.setTimeout(function(){Roblox.Client._ontimer()},0)},Roblox.Client.Refresh=function(){try{navigator.plugins.refresh(!1)}catch(n){}},Roblox.Client._onCancel=function(){return Roblox.InstallationInstructions.hide(),Roblox.Client._cancelled=!0,EventTracker&&EventTracker.endCancel("InstallClient"),!1},Roblox.Client._ontimer=function(){Roblox.Client._cancelled||(Roblox.Client.Refresh(),Roblox.Client.IsRobloxProxyInstalled()?(Roblox.InstallationInstructions.hide(),window.setTimeout(function(){(window.chrome||window.safari)&&window.location.hash=="#chromeInstall"&&(window.location.hash="",$.cookie("chromeInstall",null))},5e3),EventTracker&&EventTracker.endSuccess("InstallClient"),Roblox.Client._continuation(),Roblox.Client._installSuccess&&Roblox.Client._installSuccess()):Roblox.Client._whyIsRobloxLauncherNotCreated==Roblox.Client.LauncherNotCreatedReasons.pluginNotAllowed?(Roblox.InstallationInstructions.show("activation"),window.setTimeout(function(){Roblox.Client._ontimer()},1e3)):Roblox.Client._whyIsRobloxLauncherNotCreated==Roblox.Client.LauncherNotCreatedReasons.wrongInstallHostAndPluginWasNotAllowed?(Roblox.Client._whyIsRobloxLauncherNotCreated=null,Roblox.InstallationInstructions.hide(),Roblox.Client.WaitForRoblox(Roblox.Client._continuation)):window.setTimeout(function(){Roblox.Client._ontimer()},1e3))};

;// InstallationInstructions.js
typeof Roblox=="undefined"&&(Roblox={}),Roblox.InstallationInstructions=function(){function n(n){var t,r,u;typeof n=="undefined"&&(n="installation"),i(n),t=0,r=$(".InstallInstructionsImage"),r&&typeof $(r).data("modalwidth")!="undefined"&&(t=$(".InstallInstructionsImage").data("modalwidth")),t>0?(u=($(window).width()-(t-10))/2,$("#InstallationInstructions").modal({escClose:!0,opacity:80,minWidth:t,maxWidth:t,overlayCss:{backgroundColor:"#000"},position:[50,u],zIndex:1031})):$("#InstallationInstructions").modal({escClose:!0,opacity:80,maxWidth:$(window).width()/2,minWidth:$(window).width()/2,overlayCss:{backgroundColor:"#000"},position:[50,"25%"],zIndex:1031})}function t(){$.modal.close()}function i(n){var t=$(".InstallInstructionsImage"),i,r;navigator.userAgent.match(/Mac OS X 10[_|\.]5/)?(i=t.data("oldmacdelaysrc"),t&&typeof i!="undefined"&&(t.hasClass("src-replaced")?t.attr("src",i):t.attr("data-delaysrc",i))):(r=t.data("activationsrc"),n==="activation"&&r!==undefined&&(t.hasClass("src-replaced")?t.attr("src",r):t.attr("data-delaysrc",r)))}return{show:n,hide:t}}();

;//Bundle detector
Roblox && Roblox.BundleDetector && Roblox.BundleDetector.bundleDetected('clientinstaller');