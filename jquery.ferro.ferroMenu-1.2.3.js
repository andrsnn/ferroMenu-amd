(function (root, factory) {
    
    if (typeof window.CMSLoader !== "undefined" &&
        window.CMSLoader == true){
        define(function(){
            return factory;
        });
    }
    else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        root.amdWeb = factory(root.b);
    }
}(this, function($) {

	/**
 * @return {?}
 */
function isMobileOut() {
  if (navigator.userAgent.toLowerCase().indexOf("android") > -1 || (navigator.userAgent.toLowerCase().indexOf("blackberry9500") > -1 || (navigator.userAgent.toLowerCase().indexOf("blackberry9530") > -1 || (navigator.userAgent.toLowerCase().indexOf("cupcake") > -1 || (navigator.userAgent.toLowerCase().indexOf("dream") > -1 || (navigator.userAgent.toLowerCase().indexOf("incognito") > -1 || (navigator.userAgent.toLowerCase().indexOf("iphone") > -1 || (navigator.userAgent.toLowerCase().indexOf("ipod") > 
  -1 || (navigator.userAgent.toLowerCase().indexOf("ipad") > -1 || (navigator.userAgent.toLowerCase().indexOf("mini") > -1 || (navigator.userAgent.toLowerCase().indexOf("webos") > -1 || (navigator.userAgent.toLowerCase().indexOf("webmate") > -1 || (navigator.userAgent.toLowerCase().indexOf("2.0 mmp") > -1 || (navigator.userAgent.toLowerCase().indexOf("240\u00d7320") > -1 || (navigator.userAgent.toLowerCase().indexOf("asus") > -1 || (navigator.userAgent.toLowerCase().indexOf("au-mic") > -1 || (navigator.userAgent.toLowerCase().indexOf("alcatel") > 
  -1 || (navigator.userAgent.toLowerCase().indexOf("amoi") > -1 || (navigator.userAgent.toLowerCase().indexOf("audiovox") > -1 || (navigator.userAgent.toLowerCase().indexOf("avantgo") > -1 || (navigator.userAgent.toLowerCase().indexOf("benq") > -1 || (navigator.userAgent.toLowerCase().indexOf("bird") > -1 || (navigator.userAgent.toLowerCase().indexOf("blackberry") > -1 || (navigator.userAgent.toLowerCase().indexOf("blazer") > -1 || (navigator.userAgent.toLowerCase().indexOf("cdm") > -1 || (navigator.userAgent.toLowerCase().indexOf("cellphone") > 
  -1 || (navigator.userAgent.toLowerCase().indexOf("ddipocket") > -1 || (navigator.userAgent.toLowerCase().indexOf("danger") > -1 || (navigator.userAgent.toLowerCase().indexOf("docomo") > -1 || (navigator.userAgent.toLowerCase().indexOf("elaine/3.0") > -1 || (navigator.userAgent.toLowerCase().indexOf("ericsson") > -1 || (navigator.userAgent.toLowerCase().indexOf("eudoraweb") > -1 || (navigator.userAgent.toLowerCase().indexOf("fly") > -1 || (navigator.userAgent.toLowerCase().indexOf("hp.ipaq") > -1 || 
  (navigator.userAgent.toLowerCase().indexOf("haier") > -1 || (navigator.userAgent.toLowerCase().indexOf("huawei") > -1 || (navigator.userAgent.toLowerCase().indexOf("iemobile") > -1 || (navigator.userAgent.toLowerCase().indexOf("j-phone") > -1 || (navigator.userAgent.toLowerCase().indexOf("kddi") > -1 || (navigator.userAgent.toLowerCase().indexOf("konka") > -1 || (navigator.userAgent.toLowerCase().indexOf("kwc") > -1 || (navigator.userAgent.toLowerCase().indexOf("kyocera/wx310k") > -1 || (navigator.userAgent.toLowerCase().indexOf("lg") > 
  -1 || (navigator.userAgent.toLowerCase().indexOf("lg/u990") > -1 || (navigator.userAgent.toLowerCase().indexOf("lenovo") > -1 || (navigator.userAgent.toLowerCase().indexOf("midp-2.0") > -1 || (navigator.userAgent.toLowerCase().indexOf("mmef20") > -1 || (navigator.userAgent.toLowerCase().indexOf("mot-v") > -1 || (navigator.userAgent.toLowerCase().indexOf("mobilephone") > -1 || (navigator.userAgent.toLowerCase().indexOf("motorola") > -1 || (navigator.userAgent.toLowerCase().indexOf("newgen") > -1 || 
  (navigator.userAgent.toLowerCase().indexOf("netfront") > -1 || (navigator.userAgent.toLowerCase().indexOf("newt") > -1 || (navigator.userAgent.toLowerCase().indexOf("nintendo wii") > -1 || (navigator.userAgent.toLowerCase().indexOf("nitro") > -1 || (navigator.userAgent.toLowerCase().indexOf("nokia") > -1 || (navigator.userAgent.toLowerCase().indexOf("novarra") > -1 || (navigator.userAgent.toLowerCase().indexOf("o2") > -1 || (navigator.userAgent.toLowerCase().indexOf("opera mini") > -1 || (navigator.userAgent.toLowerCase().indexOf("opera.mobi") > 
  -1 || (navigator.userAgent.toLowerCase().indexOf("pantech") > -1 || (navigator.userAgent.toLowerCase().indexOf("pdxgw") > -1 || (navigator.userAgent.toLowerCase().indexOf("pg") > -1 || (navigator.userAgent.toLowerCase().indexOf("ppc") > -1 || (navigator.userAgent.toLowerCase().indexOf("pt") > -1 || (navigator.userAgent.toLowerCase().indexOf("palm") > -1 || (navigator.userAgent.toLowerCase().indexOf("panasonic") > -1 || (navigator.userAgent.toLowerCase().indexOf("philips") > -1 || (navigator.userAgent.toLowerCase().indexOf("playstation portable") > 
  -1 || (navigator.userAgent.toLowerCase().indexOf("proxinet") > -1 || (navigator.userAgent.toLowerCase().indexOf("proxinet") > -1 || (navigator.userAgent.toLowerCase().indexOf("qtek") > -1 || (navigator.userAgent.toLowerCase().indexOf("sch") > -1 || (navigator.userAgent.toLowerCase().indexOf("sec") > -1 || (navigator.userAgent.toLowerCase().indexOf("sgh") > -1 || (navigator.userAgent.toLowerCase().indexOf("sharp-tq-gx10") > -1 || (navigator.userAgent.toLowerCase().indexOf("sie") > -1 || (navigator.userAgent.toLowerCase().indexOf("sph") > 
  -1 || (navigator.userAgent.toLowerCase().indexOf("sagem") > -1 || (navigator.userAgent.toLowerCase().indexOf("samsung") > -1 || (navigator.userAgent.toLowerCase().indexOf("sanyo") > -1 || (navigator.userAgent.toLowerCase().indexOf("sendo") > -1 || (navigator.userAgent.toLowerCase().indexOf("sharp") > -1 || (navigator.userAgent.toLowerCase().indexOf("small") > -1 || (navigator.userAgent.toLowerCase().indexOf("smartphone") > -1 || (navigator.userAgent.toLowerCase().indexOf("softbank") > -1 || (navigator.userAgent.toLowerCase().indexOf("sonyericsson") > 
  -1 || (navigator.userAgent.toLowerCase().indexOf("symbian") > -1 || (navigator.userAgent.toLowerCase().indexOf("symbian os") > -1 || (navigator.userAgent.toLowerCase().indexOf("symbianos") > -1 || (navigator.userAgent.toLowerCase().indexOf("ts21i-10") > -1 || (navigator.userAgent.toLowerCase().indexOf("toshiba") > -1 || (navigator.userAgent.toLowerCase().indexOf("treo") > -1 || (navigator.userAgent.toLowerCase().indexOf("up.browser") > -1 || (navigator.userAgent.toLowerCase().indexOf("up.link") > 
  -1 || (navigator.userAgent.toLowerCase().indexOf("uts") > -1 || (navigator.userAgent.toLowerCase().indexOf("vertu") > -1 || (navigator.userAgent.toLowerCase().indexOf("willcome") > -1 || (navigator.userAgent.toLowerCase().indexOf("winwap") > -1 || (navigator.userAgent.toLowerCase().indexOf("windows ce") > -1 || (navigator.userAgent.toLowerCase().indexOf("windows.ce") > -1 || (navigator.userAgent.toLowerCase().indexOf("xda") > -1 || (navigator.userAgent.toLowerCase().indexOf("zte") > -1 || (navigator.userAgent.toLowerCase().indexOf("dopod") > 
  -1 || (navigator.userAgent.toLowerCase().indexOf("hiptop") > -1 || (navigator.userAgent.toLowerCase().indexOf("htc") > -1 || (navigator.userAgent.toLowerCase().indexOf("i-mobile") > -1 || (navigator.userAgent.toLowerCase().indexOf("nokia") > -1 || navigator.userAgent.toLowerCase().indexOf("portalmmm") > -1)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))) {
    if (navigator.platform.toLowerCase().indexOf("win32") == -1 && navigator.platform.toLowerCase().indexOf("win64") == -1) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
if (isMobileOut()) {
  $("head").append('<meta name="viewport" id="vpFerroMenu" content="width=device-width, minimum-scale = 1.0, maximum-scale = 1.0, initial-scale=1.0, user-scalable=no"/>');
}
  var parent = {
    /**
     * @param {?} opts
     * @return {undefined}
     */
    ferroMenuCreate : function(opts) {
      /**
       * @param {string} type
       * @param {Object} element
       * @param {Function} func
       * @return {undefined}
       */
      function addEvent(type, element, func) {
        if (element.addEventListener) {
          element.addEventListener(type, func, false);
        } else {
          if (element.attachEvent) {
            element.attachEvent("on" + type, func);
          } else {
            /** @type {Function} */
            element[type] = func;
          }
        }
      }
      /**
       * @param {number} depth
       * @return {undefined}
       */
      function pad(depth) {
        /** @type {boolean} */
        nodes[depth] = false;
      }
      /**
       * @param {Event} e
       * @return {undefined}
       */
      function dragStart(e) {
        if (e.which == 1 || e.type == "touchstart") {
          e.preventDefault();
          if (!$("#" + key).hasClass("open")) {
            /** @type {boolean} */
            changed = true;
            if (data.drag) {
              fireEvent("menudragstart");
            }
            if (!_isMobile) {
              e.preventDefault();
              try {
                startX = e.clientX;
                posx = e.clientX;
                startY = e.clientY;
                _startY = e.clientY;
              } catch (n) {
              }
            } else {
              try {
                startX = e.touches[0].pageX;
                posx = e.touches[0].pageX;
                startY = e.touches[0].pageY;
                _startY = e.touches[0].pageY;
              } catch (n) {
              }
            }
          }
        }
      }
      /**
       * @param {Object} e
       * @return {undefined}
       */
      function transform(e) {
        if (changed && data.drag) {
          if (!_isMobile) {
            e.preventDefault();
            try {
              /** @type {number} */
              deltaX = e.clientX - startX;
              /** @type {number} */
              deltaY = e.clientY - startY;
            } catch (n) {
            }
          } else {
            try {
              /** @type {number} */
              deltaX = e.touches[0].pageX - startX;
              /** @type {number} */
              deltaY = e.touches[0].pageY - startY;
            } catch (n) {
            }
          }
          /** @type {string} */
          $("#" + key).get(0).style.webkitTransform = "translate(" + deltaX + "px," + deltaY + "px)";
          /** @type {string} */
          $("#" + key).get(0).style.MozTransform = "translate(" + deltaX + "px," + deltaY + "px)";
          /** @type {string} */
          $("#" + key).get(0).style.msTransform = "translate(" + deltaX + "px," + deltaY + "px)";
          /** @type {string} */
          $("#" + key).get(0).style.OTransform = "translate(" + deltaX + "px," + deltaY + "px)";
          /** @type {string} */
          $("#" + key).get(0).style.transform = "translate(" + deltaX + "px," + deltaY + "px)";
          /** @type {boolean} */
          d = true;
          fireEvent("menudrag");
        }
      }

      //some weird problem with ul > li margin-bottom affecting correct top height subtracting 14 px from each...
      function RelativeCalc(){
        var elem = $(data.element);
        
        var calcs = {

          offset: elem.offset(),
          height: elem.outerHeight(),
          width: elem.width(),
          position: elem.position()
        };
        
        var allCalcs = {
          x: {
            //all relative left property positions
            left: calcs.position.left,
            center: (calcs.width / 2),
            right: calcs.width - $("#" + key).width() - data.margin
          },
          y: {
            //all relative top property positions
            top: (calcs.position.top),
            center: ((calcs.height / 2)),
            bottom: calcs.height - $("#" + key).height() - data.margin
          }
        };

        return allCalcs;
      }
      /**
       * @param {Event} event
       * @return {undefined}
       */
      function move(event) {
        if (event.which == 1 || event.type == "touchend") {
          event.preventDefault();
          /** @type {boolean} */
          changed = false;
          if (!d || !data.drag) {
            var failuresLink = $(event.target).parents(".ferromenu-controller").data("ferromenuitem");
            $.fn.ferroMenu.toggleMenu(failuresLink);
            /** @type {number} */
            startX = 0;
            /** @type {number} */
            posx = 0;
            /** @type {number} */
            startY = 0;
            /** @type {number} */
            _startY = 0;
          } else {
            /** @type {boolean} */
            d = false;

            var rsLeft = $("#" + key).offset().left;
            var pos = $("#" + key).offset().top;
            /** @type {string} */
            var x = "left";
            /** @type {string} */
            var y = "top";
            var p = {};

            var relativeCalc = new RelativeCalc();

            //left side of dash delimited position
            if (rsLeft >= $(window).width() / 3 && rsLeft < 2 * $(window).width() / 3) {
              /** @type {string} */
              x = "center";
              /** @type {number} */
              p.x = data.relative ? relativeCalc.x.center : $(window).width() / 2 - $("#" + key).width() / 2;
            } 
            else {
              if (rsLeft >= 2 * $(window).width() / 3) {
                /** @type {string} */
                x = "right";
                /** @type {number} */
                p.x = data.relative ? relativeCalc.x.right : $(window).width() - $("#" + key).outerWidth() - data.margin;
                
              } else {
                /** @type {string} */
                x = "left";
                p.x = data.relative ? relativeCalc.x.left : data.margin;
              }
            }

            //right side of dash delimited position
            if (pos >= $(window).height() / 3 && pos < 2 * $(window).height() / 3) {
              /** @type {string} */
              y = "center";
              /** @type {number} */
              p.y = data.relative ? relativeCalc.y.center : $(window).height() / 2 - $("#" + key).outerHeight() / 2;
            } 
            else {
              if (pos >= $(window).height() / 3) {
                /** @type {string} */
                y = "bottom";
                /** @type {number} */
                p.y = data.relative ? relativeCalc.y.bottom : $(window).height() - $("#" + key).outerWidth() - data.margin;
              } else {
                /** @type {string} */
                y = "top";
                p.y = data.relative ? relativeCalc.y.top : data.margin;

                
                
              }
            }

            /** @type {string} */
            position = x + "-" + y;
            
            /** @type {string} */
            $("#" + key).get(0).style.webkitTransition = "all 0.2s";
            /** @type {string} */
            $("#" + key).get(0).style.MozTransition = "all 0.2s";
            /** @type {string} */
            $("#" + key).get(0).style.msTransition = "all 0.2s";
            /** @type {string} */
            $("#" + key).get(0).style.OTransition = "all 0.2s";
            /** @type {string} */
            $("#" + key).get(0).style.transition = "all 0.2s";
            /** @type {number} */
            var m = p.x - $("#" + key).data("startingPosition").x;
            /** @type {number} */
            var g = p.y - $("#" + key).data("startingPosition").y;
            /** @type {string} */
            $("#" + key).get(0).style.webkitTransform = "translate(" + m + "px," + g + "px)";
            /** @type {string} */
            $("#" + key).get(0).style.MozTransform = "translate(" + m + "px," + g + "px)";
            /** @type {string} */
            $("#" + key).get(0).style.msTransform = "translate(" + m + "px," + g + "px)";
            /** @type {string} */
            $("#" + key).get(0).style.OTransform = "translate(" + m + "px," + g + "px)";
            /** @type {string} */
            $("#" + key).get(0).style.transform = "translate(" + m + "px," + g + "px)";
            setTimeout(function() {
              init();
            }, 210);
            if (data.drag) {
              fireEvent("menudragend");
            }
          }
        }
      }
      /**
       * @return {undefined}
       */
      function loaded() {
        $(s + " > li").each(function(depth) {
          /** @type {boolean} */
          nodes[depth] = true;
          var rsLeft = $(this).data("end").left;
          var elemTop = $(this).data("end").top;
          /** @type {number} */
          this.style.opacity = 1;
          /** @type {string} */
          this.style.webkitTransform = "translate(" + rsLeft + "px," + elemTop + "px)";
          /** @type {string} */
          this.style.MozTransform = "translate(" + rsLeft + "px," + elemTop + "px)";
          /** @type {string} */
          this.style.msTransform = "translate(" + rsLeft + "px," + elemTop + "px)";
          /** @type {string} */
          this.style.OTransform = "translate(" + rsLeft + "px," + elemTop + "px)";
          /** @type {string} */
          this.style.transform = "translate(" + rsLeft + "px," + elemTop + "px)";
          pad(depth);
        });
      }
      /**
       * @return {undefined}
       */
      function init() {
        $("#" + key).removeAttr("style");

          $("#" + key).css({
            "height": data.height,
            "width":data.width
          });

          
        var relativeCalc = new RelativeCalc();

        
        $(s + " > li").each(function(k) {
          $(this).css({
            display : "inline-block",
            position : "absolute",
            zIndex : 999            
          });
          
          
          /** @type {boolean} */
          nodes[k] = false;
          

          $("#" + key).removeClass("left-bottom center-bottom right-bottom left-top center-top right-top left-center right-center center-center");
          $("#" + key).addClass(position);
          $(this).addClass(activeClassName);
          if (data.relative){

          }
          
          
          switch(position) {
            case "left-bottom":

              $("#" + key).css({
                bottom: data.relative ? null : 0,
                top: data.relative ? relativeCalc.y.bottom : null,
                left : data.relative ? relativeCalc.x.left : 0,
                marginLeft : data.margin,
                marginBottom : data.margin,
                zIndex : 1E3
              });
              /** @type {number} */
              var theta2 = -Math.PI / 2 + k * (Math.PI / 2 / sides);
              /** @type {number} */
              var mouseY = data.radius * Math.sin(theta2);
              /** @type {number} */
              var newLeft = data.radius * Math.cos(theta2);
              break;
            case "center-bottom":
              $("#" + key).css({
                bottom : data.relative ? null : 0,
                top: data.relative ? relativeCalc.y.bottom : null,
                left : data.relative ? relativeCalc.x.center : "50%",
                marginLeft : -($("#" + key).width() / 2),
                marginBottom : data.margin,
                zIndex : 1E3
              });
              /** @type {number} */
              theta2 = Math.PI + k * (Math.PI / sides);
              /** @type {number} */
              mouseY = data.radius * Math.sin(theta2);
              /** @type {number} */
              newLeft = data.radius * Math.cos(theta2);
              break;
            case "right-bottom":
              $("#" + key).css({
                bottom : data.relative ? null : 0,
                top: data.relative ? relativeCalc.y.bottom : null,
                left: data.relative ? relativeCalc.x.right : null,
                right: data.relative ? null : 0,
                marginRight : data.margin,
                marginBottom : data.margin,
                zIndex : 1E3
              });
              /** @type {number} */
              theta2 = Math.PI + k * (Math.PI / 2 / sides);
              /** @type {number} */
              mouseY = data.radius * Math.sin(theta2);
              /** @type {number} */
              newLeft = data.radius * Math.cos(theta2);
              break;
            case "left-top":

              $("#" + key).css({
                top: data.relative ? relativeCalc.y.top : 0,                
                left : data.relative ? relativeCalc.x.left : 0,
                marginLeft : data.margin,
                marginTop : data.margin,
                zIndex : 1E3
              });

              /** @type {number} */
              theta2 = -Math.PI / 2 + k * (Math.PI / 2 / sides);
              /** @type {number} */
              mouseY = -data.radius * Math.sin(theta2);
              /** @type {number} */
              newLeft = data.radius * Math.cos(theta2);
              break;
            case "center-top":
              $("#" + key).css({
                top: data.relative ? relativeCalc.y.top : 0,
                left : data.relative ? relativeCalc.x.center : "50%",
                marginLeft : -($("#" + key).width() / 2),
                marginTop : data.margin,
                zIndex : 1E3
              });
              /** @type {number} */
              theta2 = Math.PI + k * (Math.PI / sides);
              /** @type {number} */
              mouseY = -data.radius * Math.sin(theta2);
              /** @type {number} */
              newLeft = data.radius * Math.cos(theta2);
              break;
            case "right-top":
              
              $("#" + key).css({
                top: data.relative ? relativeCalc.y.top : 0,
                right: data.relative ? null : 0,
                left : data.relative ? relativeCalc.x.right : null,
                marginRight : data.margin,
                marginTop : data.margin,
                zIndex : 1E3
              });
              /** @type {number} */
              theta2 = Math.PI + k * (Math.PI / 2 / sides);
              /** @type {number} */
              mouseY = -data.radius * Math.sin(theta2);
              /** @type {number} */
              newLeft = data.radius * Math.cos(theta2);
              break;
            case "left-center":
            
            
              $("#" + key).css({
                top: data.relative ? relativeCalc.y.center : "50%",
                left : data.relative ? relativeCalc.x.left : 0,
                marginTop : -($("#" + key).height() / 2),
                marginLeft : data.margin,
                zIndex : 1E3
              });
              /** @type {number} */
              theta2 = -Math.PI / 2 + k * (Math.PI / sides);
              /** @type {number} */
              mouseY = data.radius * Math.sin(theta2);
              /** @type {number} */
              newLeft = data.radius * Math.cos(theta2);
              break;
            case "right-center":
              $("#" + key).css({
                top: data.relative ? relativeCalc.y.center : "50%",
                right: data.relative ? null : 0,
                left : data.relative ? relativeCalc.x.right : null,
                marginTop : -($("#" + key).height() / 2),
                marginRight : data.margin,
                zIndex : 1E3
              });
              /** @type {number} */
              theta2 = -Math.PI / 2 + k * (Math.PI / sides);
              /** @type {number} */
              mouseY = data.radius * Math.sin(theta2);
              /** @type {number} */
              newLeft = -data.radius * Math.cos(theta2);
              break;
            case "center-center":
              
              $("#" + key).css({
                top : data.relative ? relativeCalc.y.center : "50%",
                left : data.relative ? relativeCalc.x.center : "50%",                
                marginTop : -($("#" + key).height() / 2),
                marginLeft : -($("#" + key).width() / 2),
                zIndex : 1E3
              });
              /** @type {number} */
              theta2 = -Math.PI / 2 + k * (Math.PI * 2 / $(s).find("li").length);
              /** @type {number} */
              mouseY = data.radius * Math.sin(theta2);
              /** @type {number} */
              newLeft = data.radius * Math.cos(theta2);
              
              break;
          }
         
          
          $("#" + key).data("startingPosition", {
            x : data.relative ? $("#" + key).position().left : $("#" + key).offset().left,
            y : data.relative ? $("#" + key).position().top : $("#" + key).offset().top
          });
          $(this).css({
            top : "10px",
            left : "10px"
          });
          if (mouseY <= 0.1 && mouseY >= -0.1) {
            /** @type {number} */
            mouseY = 0;
          }
          if (newLeft <= 0.1 && newLeft >= -0.1) {
            /** @type {number} */
            newLeft = 0;
          }
          $(this).data({
            end : {
              top : mouseY,
              left : newLeft
            }
          });

        });
    
      }
      /**
       * @param {string} eventName
       * @return {undefined}
       */
      function fireEvent(eventName) {
        var event_obj = {
          menuElement : s,
          position : position,
          opened : name
        };
        $.event.trigger({
          type : eventName,
          menustatus : event_obj
        });
      }
      /**
       * @return {?}
       */
      function _isMobile() {
        if (navigator.userAgent.toLowerCase().indexOf("android") > -1 || (navigator.userAgent.toLowerCase().indexOf("blackberry9500") > -1 || (navigator.userAgent.toLowerCase().indexOf("blackberry9530") > -1 || (navigator.userAgent.toLowerCase().indexOf("cupcake") > -1 || (navigator.userAgent.toLowerCase().indexOf("dream") > -1 || (navigator.userAgent.toLowerCase().indexOf("incognito") > -1 || (navigator.userAgent.toLowerCase().indexOf("iphone") > -1 || (navigator.userAgent.toLowerCase().indexOf("ipod") > 
        -1 || (navigator.userAgent.toLowerCase().indexOf("ipad") > -1 || (navigator.userAgent.toLowerCase().indexOf("mini") > -1 || (navigator.userAgent.toLowerCase().indexOf("webos") > -1 || (navigator.userAgent.toLowerCase().indexOf("webmate") > -1 || (navigator.userAgent.toLowerCase().indexOf("2.0 mmp") > -1 || (navigator.userAgent.toLowerCase().indexOf("240\u00d7320") > -1 || (navigator.userAgent.toLowerCase().indexOf("asus") > -1 || (navigator.userAgent.toLowerCase().indexOf("au-mic") > -1 || 
        (navigator.userAgent.toLowerCase().indexOf("alcatel") > -1 || (navigator.userAgent.toLowerCase().indexOf("amoi") > -1 || (navigator.userAgent.toLowerCase().indexOf("audiovox") > -1 || (navigator.userAgent.toLowerCase().indexOf("avantgo") > -1 || (navigator.userAgent.toLowerCase().indexOf("benq") > -1 || (navigator.userAgent.toLowerCase().indexOf("bird") > -1 || (navigator.userAgent.toLowerCase().indexOf("blackberry") > -1 || (navigator.userAgent.toLowerCase().indexOf("blazer") > -1 || (navigator.userAgent.toLowerCase().indexOf("cdm") > 
        -1 || (navigator.userAgent.toLowerCase().indexOf("cellphone") > -1 || (navigator.userAgent.toLowerCase().indexOf("ddipocket") > -1 || (navigator.userAgent.toLowerCase().indexOf("danger") > -1 || (navigator.userAgent.toLowerCase().indexOf("docomo") > -1 || (navigator.userAgent.toLowerCase().indexOf("elaine/3.0") > -1 || (navigator.userAgent.toLowerCase().indexOf("ericsson") > -1 || (navigator.userAgent.toLowerCase().indexOf("eudoraweb") > -1 || (navigator.userAgent.toLowerCase().indexOf("fly") > 
        -1 || (navigator.userAgent.toLowerCase().indexOf("hp.ipaq") > -1 || (navigator.userAgent.toLowerCase().indexOf("haier") > -1 || (navigator.userAgent.toLowerCase().indexOf("huawei") > -1 || (navigator.userAgent.toLowerCase().indexOf("iemobile") > -1 || (navigator.userAgent.toLowerCase().indexOf("j-phone") > -1 || (navigator.userAgent.toLowerCase().indexOf("kddi") > -1 || (navigator.userAgent.toLowerCase().indexOf("konka") > -1 || (navigator.userAgent.toLowerCase().indexOf("kwc") > -1 || (navigator.userAgent.toLowerCase().indexOf("kyocera/wx310k") > 
        -1 || (navigator.userAgent.toLowerCase().indexOf("lg") > -1 || (navigator.userAgent.toLowerCase().indexOf("lg/u990") > -1 || (navigator.userAgent.toLowerCase().indexOf("lenovo") > -1 || (navigator.userAgent.toLowerCase().indexOf("midp-2.0") > -1 || (navigator.userAgent.toLowerCase().indexOf("mmef20") > -1 || (navigator.userAgent.toLowerCase().indexOf("mot-v") > -1 || (navigator.userAgent.toLowerCase().indexOf("mobilephone") > -1 || (navigator.userAgent.toLowerCase().indexOf("motorola") > 
        -1 || (navigator.userAgent.toLowerCase().indexOf("newgen") > -1 || (navigator.userAgent.toLowerCase().indexOf("netfront") > -1 || (navigator.userAgent.toLowerCase().indexOf("newt") > -1 || (navigator.userAgent.toLowerCase().indexOf("nintendo wii") > -1 || (navigator.userAgent.toLowerCase().indexOf("nitro") > -1 || (navigator.userAgent.toLowerCase().indexOf("nokia") > -1 || (navigator.userAgent.toLowerCase().indexOf("novarra") > -1 || (navigator.userAgent.toLowerCase().indexOf("o2") > -1 || 
        (navigator.userAgent.toLowerCase().indexOf("opera mini") > -1 || (navigator.userAgent.toLowerCase().indexOf("opera.mobi") > -1 || (navigator.userAgent.toLowerCase().indexOf("pantech") > -1 || (navigator.userAgent.toLowerCase().indexOf("pdxgw") > -1 || (navigator.userAgent.toLowerCase().indexOf("pg") > -1 || (navigator.userAgent.toLowerCase().indexOf("ppc") > -1 || (navigator.userAgent.toLowerCase().indexOf("pt") > -1 || (navigator.userAgent.toLowerCase().indexOf("palm") > -1 || (navigator.userAgent.toLowerCase().indexOf("panasonic") > 
        -1 || (navigator.userAgent.toLowerCase().indexOf("philips") > -1 || (navigator.userAgent.toLowerCase().indexOf("playstation portable") > -1 || (navigator.userAgent.toLowerCase().indexOf("proxinet") > -1 || (navigator.userAgent.toLowerCase().indexOf("proxinet") > -1 || (navigator.userAgent.toLowerCase().indexOf("qtek") > -1 || (navigator.userAgent.toLowerCase().indexOf("sch") > -1 || (navigator.userAgent.toLowerCase().indexOf("sec") > -1 || (navigator.userAgent.toLowerCase().indexOf("sgh") > 
        -1 || (navigator.userAgent.toLowerCase().indexOf("sharp-tq-gx10") > -1 || (navigator.userAgent.toLowerCase().indexOf("sie") > -1 || (navigator.userAgent.toLowerCase().indexOf("sph") > -1 || (navigator.userAgent.toLowerCase().indexOf("sagem") > -1 || (navigator.userAgent.toLowerCase().indexOf("samsung") > -1 || (navigator.userAgent.toLowerCase().indexOf("sanyo") > -1 || (navigator.userAgent.toLowerCase().indexOf("sendo") > -1 || (navigator.userAgent.toLowerCase().indexOf("sharp") > -1 || (navigator.userAgent.toLowerCase().indexOf("small") > 
        -1 || (navigator.userAgent.toLowerCase().indexOf("smartphone") > -1 || (navigator.userAgent.toLowerCase().indexOf("softbank") > -1 || (navigator.userAgent.toLowerCase().indexOf("sonyericsson") > -1 || (navigator.userAgent.toLowerCase().indexOf("symbian") > -1 || (navigator.userAgent.toLowerCase().indexOf("symbian os") > -1 || (navigator.userAgent.toLowerCase().indexOf("symbianos") > -1 || (navigator.userAgent.toLowerCase().indexOf("ts21i-10") > -1 || (navigator.userAgent.toLowerCase().indexOf("toshiba") > 
        -1 || (navigator.userAgent.toLowerCase().indexOf("treo") > -1 || (navigator.userAgent.toLowerCase().indexOf("up.browser") > -1 || (navigator.userAgent.toLowerCase().indexOf("up.link") > -1 || (navigator.userAgent.toLowerCase().indexOf("uts") > -1 || (navigator.userAgent.toLowerCase().indexOf("vertu") > -1 || (navigator.userAgent.toLowerCase().indexOf("willcome") > -1 || (navigator.userAgent.toLowerCase().indexOf("winwap") > -1 || (navigator.userAgent.toLowerCase().indexOf("windows ce") > 
        -1 || (navigator.userAgent.toLowerCase().indexOf("windows.ce") > -1 || (navigator.userAgent.toLowerCase().indexOf("xda") > -1 || (navigator.userAgent.toLowerCase().indexOf("zte") > -1 || (navigator.userAgent.toLowerCase().indexOf("dopod") > -1 || (navigator.userAgent.toLowerCase().indexOf("hiptop") > -1 || (navigator.userAgent.toLowerCase().indexOf("htc") > -1 || (navigator.userAgent.toLowerCase().indexOf("i-mobile") > -1 || (navigator.userAgent.toLowerCase().indexOf("nokia") > -1 || navigator.userAgent.toLowerCase().indexOf("portalmmm") > 
        -1)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))) {
          if (navigator.platform.toLowerCase().indexOf("win32") == -1 && navigator.platform.toLowerCase().indexOf("win64") == -1) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
      var defaults = {
        closeTime : 500,
        delay : 0,
        drag : true,
        easing : "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
        margin : 10,
        position : "left-bottom",
        relative: false,
        wrapper: null,
        radius : 150,
        rotation : 0,
        opened : false,
        openTime : 500,
        height: "60px",
        width: "60px"
      };
      if (this.selector === ""){
        throw new Error("jquery id selectors are only supported at this time");
      }
      var s = this.selector;
      
      var data = $.extend({}, defaults, opts);

      

      data["element"] = data.wrapper ? data.wrapper : 
        $(s)[0].parentNode ? $(s)[0].parentNode : function() { throw new Error("Must supply wrapper option, or nav must have parentNode"); }() ;
        
      /** @type {Array} */
      var nodes = new Array;
      var position = data.position;
      var name = data.opened;

      var relative = data.relative;

      /** @type {boolean} */
      var changed = false;
      /** @type {number} */
      var startX = 0;
      /** @type {number} */
      var posx = 0;
      /** @type {number} */
      var startY = 0;
      /** @type {number} */
      var _startY = 0;
      _isMobile = _isMobile();
      /** @type {boolean} */
      var d = false;
      /** @type {number} */
      var deltaX = 0;
      /** @type {number} */
      var deltaY = 0;
      /** @type {string} */
      var activeClassName = _isMobile ? "mobile" : "desktop";
      /** @type {string} */
      var nameSuffix = name ? "open" : "";
      /** @type {number} */
      var sides = $(s).find("li").length - 1;
      /** @type {number} */
      var queueHooks = 0;
      $(".ferromenu-controller").each(function() {
        var buf = $(this).attr("id").split("-");
        /** @type {number} */
        queueHooks = parseInt(buf[buf.length - 1]) + 1;
      });
      var key = "ferromenu-controller-" + queueHooks;
      $("body").append("<a id='" + key + "' data-ferromenuitem='" + s + "' class='ferromenu-controller " + activeClassName + " " + nameSuffix + "' href='javascript:void(0);'></a>");
      $(s + " > li").css({
        opacity : 0
      });

      //remove list from current location due to css inconsistency, append to associated ferroMenu
      var list = $(s);
      list[0].parentNode.removeChild(list[0]);

      

      

      $("#" + key)[0].appendChild(list[0]);
      list.css({
        //position:"absolute",
        "margin":"0px",
        "padding":"0px",
        "width": "0px",
        "height": "0px",
        "background-color":"transparent"
       });
      list[0].className = "label";


      
      init();
      if (data.opened) {
        loaded();
      }
      addEvent("resize", window, init);
      addEvent("orientationchange", window, function() {
        /** @type {number} */
        var to = setTimeout(function() {
          init();
        }, 200);
      });
      /** @type {boolean} */
      var hasTouch = "ontouchstart" in window;
      /** @type {string} */
      var START_EV = hasTouch ? "touchstart" : "mousedown";
      /** @type {string} */
      var MOVE_EV = hasTouch ? "touchmove" : "mousemove";
      /** @type {string} */
      var END_EV = hasTouch ? "touchend" : "mouseup";
      addEvent(START_EV, $("#" + key).get(0), dragStart);
      addEvent(MOVE_EV, window, transform);
      addEvent(END_EV, $("#" + key).get(0), move);
      fireEvent("menuready");
      /**
       * @return {undefined}
       */
      $.fn.ferroMenu.refreshMenu = function() {
        init();
      };
      /**
       * @param {string} el
       * @return {undefined}
       */
      $.fn.ferroMenu.toggleMenu = function(el) {
        /** @type {boolean} */
        var n = true;
        /** @type {number} */
        var i = 0;
        for (;i < nodes.length;i++) {
          if (nodes[i]) {
            /** @type {boolean} */
            n = false;
          }
        }
        if (n) {
          /** @type {null} */
          var $dropdown = null;
          $(".ferromenu-controller").each(function() {
            if ($(this).data("ferromenuitem") == el) {
              $dropdown = $(this);
              $dropdown.toggleClass("open");
            }
          });
          if ($dropdown != null) {
            if ($dropdown.hasClass("open")) {
              $(el + " > li").each(function(x) {
                /** @type {boolean} */
                nodes[x] = true;
                var rsLeft = $(this).data("end").left;
                var elemTop = $(this).data("end").top;
                /** @type {string} */
                this.style.webkitTransition = "all " + data.openTime / 1E3 + "s " + data.easing + " " + x * data.delay / 1E3 + "s";
                /** @type {string} */
                this.style.MozTransition = "all " + data.openTime / 1E3 + "s " + data.easing + " " + x * data.delay / 1E3 + "s";
                /** @type {string} */
                this.style.msTransition = "all " + data.openTime / 1E3 + "s " + data.easing + " " + x * data.delay / 1E3 + "s";
                /** @type {string} */
                this.style.OTransition = "all " + data.openTime / 1E3 + "s " + data.easing + " " + x * data.delay / 1E3 + "s";
                /** @type {string} */
                this.style.transition = "all " + data.openTime / 1E3 + "s " + data.easing + " " + x * data.delay / 1E3 + "s";
                /** @type {number} */
                this.style.opacity = 1;
                /** @type {string} */
                this.style.webkitTransform = "translate(" + rsLeft + "px," + elemTop + "px) rotate(" + data.rotation + "deg)";
                /** @type {string} */
                this.style.MozTransform = "translate(" + rsLeft + "px," + elemTop + "px) rotate(" + data.rotation + "deg)";
                /** @type {string} */
                this.style.msTransform = "translate(" + rsLeft + "px," + elemTop + "px) rotate(" + data.rotation + "deg)";
                /** @type {string} */
                this.style.OTransform = "translate(" + rsLeft + "px," + elemTop + "px) rotate(" + data.rotation + "deg)";
                /** @type {string} */
                this.style.transform = "translate(" + rsLeft + "px," + elemTop + "px) rotate(" + data.rotation + "deg)";
                setTimeout(function() {
                  pad(x);
                }, data.openTime / 1E3);
              });
              fireEvent("menuopened");
            } else {
              $(el + " > li").each(function(depth) {
                /** @type {boolean} */
                nodes[depth] = true;
                /** @type {string} */
                this.style.webkitTransition = "all " + data.closeTime / 1E3 + "s " + data.easing + " " + ($(s + " > li").length - depth) * data.delay / 1E3 + "s";
                /** @type {string} */
                this.style.MozTransition = "all " + data.closeTime / 1E3 + "s " + data.easing + " " + ($(s + " > li").length - depth) * data.delay / 1E3 + "s";
                /** @type {string} */
                this.style.msTransition = "all " + data.closeTime / 1E3 + "s " + data.easing + " " + ($(s + " > li").length - depth) * data.delay / 1E3 + "s";
                /** @type {string} */
                this.style.OTransition = "all " + data.closeTime / 1E3 + "s " + data.easing + " " + ($(s + " > li").length - depth) * data.delay / 1E3 + "s";
                /** @type {string} */
                this.style.transition = "all " + data.closeTime / 1E3 + "s " + data.easing + " " + ($(s + " > li").length - depth) * data.delay / 1E3 + "s";
                /** @type {number} */
                this.style.opacity = 0;
                /** @type {string} */
                this.style.webkitTransform = "translate(0px,0px) rotate(-" + data.rotation + "deg)";
                /** @type {string} */
                this.style.MozTransform = "translate(0px,0px) rotate(-" + data.rotation + "deg)";
                /** @type {string} */
                this.style.msTransform = "translate(0px,0px) rotate(-" + data.rotation + "deg)";
                /** @type {string} */
                this.style.OTransform = "translate(0px,0px) rotate(-" + data.rotation + "deg)";
                /** @type {string} */
                this.style.transform = "translate(0px,0px) rotate(-" + data.rotation + "deg)";
                setTimeout(function() {
                  pad(depth);
                }, data.closeTime / 1E3);
              });
              fireEvent("menuclosed");
            }
          }
        }
      };
    }
  };
  /**
   * @param {?} mapper
   * @return {?}
   */
  $.fn.ferroMenu = function(mapper) {
    return parent.ferroMenuCreate.call(this, mapper);
  };
}));



