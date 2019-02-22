angular.module('tccui', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  //common nav
  $stateProvider.state('tcc', {
          abstract: true,
          url: '',
          //templateUrl: 'tpls/platform/nav/left.html'
          templateUrl: 'tpls/load.html'
      })
      .state('tcc.rightContent', {
          url: '/content',
          views: {
              'load-content': {
                  templateUrl: 'tpls/load.html',
              }
          }
      })
      //dashboard
      .state('tcc.dashboard', {
          url: '/',
          templateUrl: 'tpls/platform/dashboard/list.html'
      })
      //document
      .state('tcc.document', {
          url: '/document',
          templateUrl: 'tpls/platform/document/document.html'
      })

      .state('tcc.components', {
          url: '/components',
          templateUrl: 'tpls/platform/dashboard/components.html'
      })

      .state('tcc.card', {
          url: '/card',
          templateUrl: 'tpls/components/card/card.html'
      })

      .state('tcc.avatar', {
          url: '/avatar',
          templateUrl: 'tpls/components/avatar/avatar.html'
      })

      .state('tcc.button', {
          url: '/button',
          templateUrl: 'tpls/components/button/button.html'
      })

      .state('tcc.badge', {
          url: '/badge',
          templateUrl: 'tpls/components/badge/badge.html'
      })

      .state('tcc.box', {
          url: '/box',
          templateUrl: 'tpls/components/box/box.html'
      })

      .state('tcc.breadcrumb', {
          url: '/breadcrumb',
          templateUrl: 'tpls/components/breadcrumb/breadcrumb.html'
      })

      .state('tcc.datepicker', {
          url: '/datepicker',
          templateUrl: 'tpls/components/datepicker/datepicker.html'
      })

      .state('tcc.draganddrop', {
          url: '/draganddrop',
          templateUrl: 'tpls/components/draganddrop/draganddrop.html'
      })

      .state('tcc.fonticon', {
          url: '/fonticon',
          templateUrl: 'tpls/components/fonticon/fonticon.html'
      })

      .state('tcc.flex', {
          url: '/flex',
          templateUrl: 'tpls/components/flex/flex.html'
      })

      .state('tcc.definition', {
          url: '/definition',
          templateUrl: 'tpls/components/definition/definition.html'
      })

      .state('tcc.form', {
          url: '/form',
          templateUrl: 'tpls/components/form/form.html'
      })

      .state('tcc.switch', {
          url: '/switch',
          templateUrl: 'tpls/components/switch/switch.html'
      })

      .state('tcc.search', {
          url: '/search',
          templateUrl: 'tpls/components/search/search.html'
      })

      .state('tcc.heading', {
          url: '/heading',
          templateUrl: 'tpls/components/heading/heading.html'
      })

      .state('tcc.iconbadge', {
          url: '/iconbadge',
          templateUrl: 'tpls/components/iconbadge/iconbadge.html'
      })

      .state('tcc.toolbar', {
          url: '/toolbar',
          templateUrl: 'tpls/components/toolbar/toolbar.html'
      })

      .state('tcc.toolTips', {
          url: '/toolTips',
          templateUrl: 'tpls/components/tooltips/tooltips.html'
      })

      .state('tcc.progress', {
          url: '/progress',
          templateUrl: 'tpls/components/progress/progress.html'
      })

      .state('tcc.grid', {
          url: '/grid',
          templateUrl: 'tpls/components/grid/grid.html'
      })

      .state('tcc.table', {
          url: '/table',
          templateUrl: 'tpls/components/table/table.html'
      })

      .state('tcc.toggle', {
          url: '/toggle',
          templateUrl: 'tpls/components/toggle/toggle.html'
      })

      .state('tcc.text-label', {
          url: '/text-label',
          templateUrl: 'tpls/components/text/text.html'
      })

      .state('tcc.tabs', {
          url: '/tabs',
          templateUrl: 'tpls/components/tabs/tabs.html'
      })

      .state('tcc.messages', {
          url: '/messages',
          templateUrl: 'tpls/components/messages/messages.html'
      })

      .state('tcc.loading', {
          url: '/loading',
          templateUrl: 'tpls/components/loading/loading.html'
      })

      .state('tcc.dropDown', {
          url: '/dropDown',
          templateUrl: 'tpls/components/dropDown/dropDown.html'
      })

      .state('tcc.pagination', {
          url: '/pagination',
          templateUrl: 'tpls/components/pagination/pagination.html'
      })

      .state('tcc.modal', {
          url: '/modal',
          templateUrl: 'tpls/components/modal/modal.html'
      })

      .state('tcc.chat', {
          url: '/chat',
          templateUrl: 'tpls/components/chat/chat.html'
      })

      .state('tcc.popover', {
          url: '/popover',
          templateUrl: 'tpls/components/popover/popover.html'
      })

      .state('tcc.list', {
          url: '/list',
          templateUrl: 'tpls/components/list/list.html'
      })

      .state('tcc.datalist', {
          url: '/datalist',
          templateUrl: 'tpls/components/datalist/datalist.html'
      })

      .state('tcc.note', {
          url: '/note',
          templateUrl: 'tpls/components/note/note.html'
      })

      .state('tcc.space', {
          url: '/space',
          templateUrl: 'tpls/components/space/space.html'
      })

      .state('tcc.aside', {
          url: '/aside',
          templateUrl: 'tpls/components/aside/aside.html'
      })

      .state('tcc.separator', {
          url: '/separator',
          templateUrl: 'tpls/components/separator/separator.html'
      })

      ///////////////////////////////////////////////////////////
      //layout
      .state('tcc.layout', {
          url: '/layout',
          templateUrl: 'tpls/layout/layout.html'
      })
      //structure
      .state('tcc.structure', {
          url: '/structure',
          templateUrl: 'tpls/layout/structure/structure.html'
      })
      //section
      .state('tcc.section', {
          url: '/section',
          templateUrl: 'tpls/layout/section/section.html'
      })
      //panel
      .state('tcc.panel', {
          url: '/panel',
          templateUrl: 'tpls/layout/panel/panel.html'
      })
      ///////////////////////////////////////////////////////////
      .state('tcc.icons', {
          url: '/icons',
          templateUrl: 'tpls/icons/icons.html'
      })
      .state('tcc.icons-faq', {
          url: '/icons-faq',
          templateUrl: 'tpls/icons/icons-faq.html'
      })
      ///////////////////////////////////////////////////////////
      .state('tcc.practice', {
          url: '/practice',
          templateUrl: 'tpls/practice/practice.html'
      })
      .state('tcc.activities', {
          url: '/activities',
          templateUrl: 'tpls/practice/coursework/activities.html'
      })
      .state('tcc.students', {
          url: '/students',
          templateUrl: 'tpls/practice/coursework/students.html'
      })
      .state('tcc.announcementSet', {
          url: '/announcement-set',
          templateUrl: 'tpls/practice/announcement/set.html'
      })
      .state('tcc.announcementManage', {
          url: '/announcement-manage',
          templateUrl: 'tpls/practice/announcement/manage.html'
      })
      .state('tcc.announcementAdd', {
          url: '/announcement-add',
          templateUrl: 'tpls/practice/announcement/add.html'
      })
      .state('tcc.announcementDetail', {
          url: '/announcement-detail',
          templateUrl: 'tpls/practice/announcement/detail.html'
      })
      .state('tcc.bmK-card', {
          url: '/bmk-card',
          templateUrl: 'tpls/practice/bookmark/card.html'
      })
      .state('tcc.bmK-tile', {
          url: '/bmk-tile',
          templateUrl: 'tpls/practice/bookmark/tile.html'
      })
      .state('tcc.bmk-list', {
          url: '/bmk-list',
          templateUrl: 'tpls/practice/bookmark/list.html'
      })
      ///////////////////////////////////////////////////////////
      .state('tcc.js-plugin', {
          url: '/js-plugin',
          templateUrl: 'tpls/construction.html'
      })
      .state('tcc.jsAlert', {
          url: '/js/alert',
          templateUrl: 'tpls/javascript/alert.html'
      })
}]);

var CC={};
(function(){
  var _z=2000;
  var _CC={
    zIndex:function(){return ++_z+1}
  }
  CC=_CC;
})();
(function($) {
  if(typeof($.fn.ccAslide) == "undefined") {
    var CCASLIDE_INSTANCES = {};
    var BACKDROP_TPL = '<div class="cc-aside-backdrop"></div>';
    var CCAslide=function(aslideEL,option){
      this.EL = aslideEL;
      this.selector=aslideEL.selector;
      this.options = option;
      this.init();
    }
    function _slideOut(obj){
      var placement = obj.options.placement;
      var className = placement+" cc-aside-"+placement;
      obj.EL.addClass(className);
      var zIndex = obj.EL.css("zIndex");
      if(!zIndex || zIndex < 1000){zIndex = CC.zIndex()}
      var css={"zIndex":zIndex}; 
      css[placement]=(0 - obj.options.width) + "px";
      obj.EL.css(css).show();
      var ani={};
      ani[placement]=0;
      obj.EL.animate(ani, 500);
      obj.isShown=true;
    }
    function _event(o){
      o.EL.find("[data-cc-dismiss='aside']").on("click",function(e){o.hide();e.preventDefault()});
    }
    CCAslide.prototype={
      init:function(){
        var that = this;
        if(this.options.backdrop){
          if($(".cc-aside-backdrop").length==0){
            $("body").append(BACKDROP_TPL);
            if(this.options.clickBackDropClose){
              $(".cc-aside-backdrop").on("click",$.proxy(this.hide,this));
            }
          }
        }
        if(this.options.templateUrl){
          var _callback = function(txt){
            that.EL.html(txt);
            if(that.options.onShow && typeof that.options.onShow=='function'){
              that.options.onShow();
            }
            _slideOut(that);_event(that);
          }
          CC.ajax({url:this.options.templateUrl,success:_callback});
        } else {
          if(that.options.onShow && typeof that.options.onShow=='function'){
            that.options.onShow();
          }
          _slideOut(that);_event(that);
        }
      },
      show:function(){
        function _load() {
          var _callback = function(txt){
            that.EL.html(txt);
            if(that.options.onShow && typeof that.options.onShow=='function'){that.options.onShow()}
            _event(that);
          }
          that.EL.find(".cc-aside-body").css("backgroundColor","rgba(215,215,215,0.5)");
          CC.ajax({url:that.options.templateUrl,success:_callback});
        }
        if(!this.isShown || this.options.reload){
          var that = this;
          if(this.options.templateUrl){_load()}
          this.EL.css({"zIndex":CC.zIndex()});
          if(!this.isShown){_slideOut(this)}else{_event(this)}
        } else {this.EL.css({"zIndex":CC.zIndex()});_event(this)}
      },
      hide:function(){
        var self=this;
        if(self.options.onClose && typeof self.options.onClose=='function'){
          self.options.onClose();
        }
        if(self.options.reload){delete CCASLIDE_INSTANCES[self.selector]}
        $(".cc-aside-backdrop").hide();
        if (self.options.placement == "left") {
          self.EL.animate({left : (0 - self.options.width) + "px"}, 500,function(){self.EL.hide()});
        } else {
          self.EL.animate({right : (0 - self.options.width) + "px"}, 500,function(){self.EL.hide()});
        }
        self.isShown=false
      }
    };
    CCAslide.default={
      placement:'left',
      reload:true,
      templateUrl:null,
      onShow:null,
      onClose:null,
      backdrop:true,
      clickBackDropClose:true,
      width:340
    }
    $.fn.ccAslide = function(option) {
      if(this.length==0){throw new Error("Aside target element is not exist.")}
      var aslide=CCASLIDE_INSTANCES[this.selector],options= $.extend({},CCAslide.default,option);
      if(aslide){
        if(typeof option == 'string'){aslide[option]()}else{aslide.show()}
      }else if(typeof option == 'object'){
        var body=$('body');
        if(this.parent()[0]!=body[0]){body.append(this)}
        CCASLIDE_INSTANCES[this.selector]=(aslide=new CCAslide(this,options));
      }
    }
  }
})(jQuery);

/*
 * Info:
 * Author:Fred;
 * @copyright campuscruiser 4/8/2017;
 * options:Extend Options;
 * version:1.0;
 * Plugin name
 * 1. ccAlert;
 * 2. ccConfirm;
 */
;
(function($, window, document) {
    var ccPlugin = function(element, options) {
        this.cfg = options;
        this.$element = $(element);
        this.cfg = {
            width: 300,
            height: 200,
            header: true,
            title: 'Title',
            content: '',
            hasMask: true,
            zIndex: 99,
            btnText: 'Ok',
            btnConfirmText: 'Ok',
            btnCancelText: 'Cancel',
            hasCloseBtn: true,
            handlerAlertOk: null,
            handlerAlertClose: null,
            handlerConfirmClose: null,
            handlerConfirmOk: null,
            handlerEsc: true,
            skinClassName: null,
            eventResize: true

        };
        this.handlers = {};

    }
    ccPlugin.prototype = {
        init: function(cfg) {
            var CFG = $.extend({}, this.cfg, cfg);
            switch (CFG.winType) {
                case 'alert':
                    footerContent = '<button class="cc-btn cc-btn-primary cc-callback cc-btn-alert">' + CFG.btnConfirmText + '</button>';
                    break;
                case 'confirm':
                    footerContent = '<button class="cc-btn cc-btn-cancel cc-btn-default">' + CFG.btnCancelText + '</button>' +
                        '<button class="cc-btn cc-btn-primary cc-callback cc-btn-alert">' + CFG.btnConfirmText + '</button>';
                    break;
            };
            var alertBox = $(
                '<div class="cc-alert-box">' +
                '<div class="cc-alert-body">' + CFG.content + '</div>' +
                '<div class="cc-alert-footer">' + footerContent + '</div>' +
                '</div>');

            var mask = null;
            var that = this;
            if (CFG.hasMask) {
                mask = $('<div class="cc-alert-maskBg"></div>');
                mask.appendTo('body');
            }
            if (CFG.header) {
                var alertHeader = $('<div class="cc-alert-header">' + CFG.title + '</div>');
                var alertBody = alertBox.find('.cc-alert-body');
                alertHeader.insertBefore(alertBody);
            }
            alertBox.appendTo('body');
            // footer buttons add callback
            $('.cc-alert-footer').find('.cc-btn-cancel').click(function() {
                alertBox.remove();
                mask && mask.remove();
            });
            $('.cc-alert-footer').find('.cc-callback').click(function() {
                alertBox.remove();
                mask && mask.remove();
                that.addTrigger('alert');
            });
            //close btn true or false
            if (CFG.hasCloseBtn) {
                var closeBtn = $('<span class="close">X</span>');
                closeBtn.appendTo(alertHeader);
                closeBtn.click(function() {
                    alertBox.remove();
                    mask && mask.remove();
                    that.addTrigger('close');
                });
            };
            // Init box style
            alertBox.css({
                width: CFG.width + 'px',
                height: CFG.height + 'px',
                left: (CFG.x || (window.innerWidth - CFG.width) / 2) + 'px',
                top: (CFG.y || (window.innerHeight - CFG.height) / 2) + 'px',
                zIndex: CFG.zIndex

            });
            //Custom SkinClass
            if (CFG.skinClassName) {
                alertBox.addClass(CFG.skinClassName)
            };
            // Esc Event
            if (CFG.handlerEsc) {
                $(document).keyup(function(event) {
                    var event = event || window.event;
                    switch (event.keyCode) {
                        case 27:
                            alertBox.remove();
                            mask && mask.remove();
                    }
                });
            };
            if (CFG.eventResize) {
                //  console.log(alertBox);

                $(window).on("resize", function() {
                    alertBox.css({

                        left: (CFG.x || ($(this).width() - CFG.width) / 2) + 'px',
                        top: (CFG.y || ($(this).height() - CFG.height) / 2) + 'px',
                        zIndex: CFG.zIndex

                    });

                });
            }
            if (CFG.handlerAlertBtn) {
                that.addListener('alert', CFG.handlerAlertBtn)
            };
            if (CFG.handlerCloseBtn) {
                that.addListener('close', CFG.handlerCloseBtn)
            };
            return this;

        },

        // Used for binding to monitor an event
        addListener: function(eventName, handler) {
            if (typeof this.handlers[eventName] == 'undefined') {
                this.handlers[eventName] = [];
            };
            this.handlers[eventName].push(handler);

        },


        // Trigger custom event
        addTrigger: function(eventName, func) {
            if (this.handlers[eventName] instanceof Array) {
                var handlers = this.handlers[eventName];
                for (var i = 0, len = handlers.length; i < len; i++) {
                    handlers[i](func);
                }
            }

        }
    }
    $.fn.extend({
        ccAlert: function(cfg) {
            var alertCase = new ccPlugin();
            var $cfg = $.extend({}, this.cfg, cfg, { winType: 'alert' });
            return alertCase.init($cfg);
        },
        ccConfirm: function(cfg) {
            var alertCase = new ccPlugin();
            var $cfg = $.extend({}, this.cfg, cfg, { winType: 'confirm' });
            return alertCase.init($cfg);

        }
    })

})(jQuery, window, document)

/**
 * Created by admin on 2017/2/21.
 */
$(function () {
  // var codeBar = $('.cc-code-bar');
  // codeBar.each(function (index, obj) {
  //   var _this = $(this);
  //   var preBox = _this.next();
  //   _this.on('click', function () {
  //     preBox.slideToggle();
  //     $(this).toggleClass('bgColor')
  //   })
  //
  // });
})
requirejs.config({
  paths:{
    jquery:'/static/lib/js/jquery/jquery.min',
    validate:'/static/lib/js/jquery/jquery.validate.min',
    bootstrap:'/static/lib/bootstrap-3.3.5/js/bootstrap.min'
  },
  shim : {
    "bootstrap" : { "deps" :['jquery'] }
  }
});
requirejs(['jquery','bootstrap'])
$(document).ready(function(){
console.log("ready");
  /*
  $("#tccui-body").on("click","#tccui-full-menu",function(){
    $("#tccui-aside").ccAslide({
      placement:"right",
      backdrop:false,
      clickBackDropClose:true,
    });
  });
  */
});
$(function() {
  $("#tccui-full-menu").on("click",function(){
    $("#tccui-aside").addClass("cc-aside").ccAslide({
      placement:"left",
      backdrop:false,
      clickBackDropClose:true,
    });
  });
  $(window).on('resize',function(){
      if ($(window).width()>768){
        var $obj=$("#tccui-aside").removeClass("cc-aside").detach();
        $("#tccui-aside-container").append($obj);
        $("#tccui-aside").css({display:"block",left:"auto"});
      }
    }
  );
})
