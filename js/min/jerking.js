function todaysPorn(t){$("#TitleCount").text(pornTitles.length),console.log(pornTitles);var a=pornData[t];console.log("there are "+a.length+" titles"),$("#PornTitles").empty(),$.each(a,(function(t){$("#PornTitles").append('<tr><td class="rank">'+(t+1)+'</td><td class="title">'+a[t].title+'</td><td class="gross"><span class="s">$</span>'+numberWithCommas(a[t].take)+'</td><td class="change '+a[t].change+'"> </td></tr>')})),$("#TheDay").text(currentDay.verbose)}$("header .logo").click((function(){$("header").toggleClass("expanded")})),$("header .logo").hover((function(){$("header .fist").addClass("shaking")}),(function(){$("header .fist").removeClass("shaking")})),$(".top-porn").on("click","td.title",(function(){var t=$(this).text(),a=$(this).siblings(".rank").text(),e="https://twitter.com/intent/tweet?text="+encodeURI("Number "+a+" for "+currentDay.short+": "+t)+"%0ahttp://jerking.online";sendEvent("share title","Twitter",t),window.open(e,"popupWindow","width=550,height=340")}));var currentDay={raw:moment().subtract(1,"days"),verbose:"",short:"",utc:0};function formatDay(t){currentDay.raw=moment(t),currentDay.verbose=moment(t).format("dddd, MMMM Do YYYY"),currentDay.short=moment(t).format("MMM D"),currentDay.utc=parseInt(moment(t).format("YYYYMMDD"))}function checkArrows(){pornData[currentDay.utc]&&moment().subtract(1,"days").diff(moment(currentDay.raw),"days")<7?$(".prev-day").show():$(".prev-day").hide(),parseInt(currentDay.raw.format("YYYYMMDD"))<parseInt(moment().subtract(1,"days").format("YYYYMMDD"))?$(".next-day").show():$(".next-day").hide()}formatDay(currentDay.raw),$(document).ready((function(){todaysPorn(currentDay.utc),checkArrows()})),$(".prev-day").click((function(){formatDay(moment(currentDay.raw).subtract(1,"days")),todaysPorn(currentDay.utc),checkArrows()})),$(".next-day").click((function(){formatDay(moment(currentDay.raw).add(1,"days")),todaysPorn(currentDay.utc),checkArrows()})),$("button[data-opens]").click((function(){var t=$(this).attr("data-opens");$('[data-drawer="'+t+'"]').addClass("visible"),$('[data-open="'+t+'"]').addClass("invisible"),$('[data-closes="'+t+'"]').removeClass("invisible"),"casting"==t&&$(".maker-steps").addClass("visible")})),$("button[data-closes]").click((function(){var t=$(this).attr("data-closes");$('[data-drawer="'+t+'"]').removeClass("visible"),$('[data-closes="'+t+'"]').addClass("invisible"),$('[data-opens="'+t+'"]').removeClass("invisible"),"casting"==t&&$(".maker-steps").removeClass("visible")}));