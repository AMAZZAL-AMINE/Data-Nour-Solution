;(function($){
   //创建构造函数
   var Carousel=function(element,options){
      this.$element=$(element);
      this.options=options;
      this.carwidth=this.options.carsize.carwidth;
      this.carheight=this.options.carsize.carheight;
      this.type=this.options.type;
      this.initType=this.options.type;
      this.items=this.$element.children('.item');
      this.carNum=this.items.length;
      this.carIndex=1;
      this.carTimer;
   }
   //初始化轮播器
   Carousel.prototype.init=function(){
      this.$element.css({'width':this.carwidth,'height':this.carheight,'overflow':'hidden','position':'relative'});
      this.items.css({'position':'absolute','zIndex':1,'width':this.carwidth,'height':this.carheight,'cursor':'pointer'});
      this.items.eq(0).addClass('select');
      this.setInit();     //轮播器初始化
      this.setArrow();    //添加箭头
      this.setCircle();   //添加圆点
      this.autoCarousel();//自动轮播器
      this.handCircle();  //手动轮播器(圆圈)
      this.handArrow();   //手动轮播器(箭头)
      this.handTouch();   //鼠标拖动滑动轮播
   };
   //设置初始化效果
   Carousel.prototype.setInit=function(){
     if(this.type.indexOf('opac')!=-1){
       this.items.css({'top':0,'left':0});
       this.items.hide();
       this.items.eq(0).show();
     }else if(this.type.indexOf('slidex')!=-1){
       for(var i=0;i<this.carNum;i++){
         this.items.eq(i).css({'top':0,'left':this.carwidth*i});
       }
     }else if(this.type.indexOf('slidey')!=-1){
       for(var i=0;i<this.carNum;i++){
         this.items.eq(i).css({'top':this.carheight*i,'left':0});
       }
     }
   };
   //设置箭头
   Carousel.prototype.setArrow=function(){
      if(this.options.arrow.isshow){
        this.$element.append('<div class="carArrow"></div>');
        var $carArrow=this.$element.children('.carArrow');
        $carArrow.css({'width':this.carwidth,'height':this.carheight,'position':'absolute','zIndex':3,'cursor':'pointer'});
        if(this.type.indexOf('slidex')!=-1 || this.type=='opacx'){
           $carArrow.append('<div class="arrow left">《</div>');
           $carArrow.append('<div class="arrow right">》</div>');
           $carArrow.find('.arrow').css({'width':35,'height':60,'line-height':'60px','fontSize':this.options.arrow.arrowsize,'color':'#999','background':'black','opacity':0.3,'position':'relative','top':(this.carheight-60)/2,'zIndex':4});
           this.$element.find('.left').css({'float':'left','text-align':'left'});
           this.$element.find('.right').css({'float':'right','text-align':'right'});
        }else if(this.type.indexOf('slidey')!=-1 || this.type=='opacy'){
           $carArrow.append('<div class="arrow left">︽</div>');
           $carArrow.append('<div class="arrow right">︾</div>');
           $carArrow.find('.arrow').css({'width':60,'height':35,'textAlign':'center','fontSize':this.options.arrow.arrowsize,'color':'#999','background':'black','opacity':0.3,'margin':'0 auto','position':'relative','zIndex':4});
           this.$element.find('.left').css({'line-height':'25px'});
           this.$element.find('.right').css({'line-height':'40px','top':this.carheight-35*2});
        }
      }
   };
   //设置小圆点
   Carousel.prototype.setCircle=function(){
      if(this.options.circle.isshow){
        this.$element.append('<div class="carCircle"></div>');
        var $carCircle=this.$element.children('.carCircle');
        for(var i=0;i<this.carNum;i++){
          $carCircle.append('<div class="circle"></div>');
        }
        $carCircle.css({'position':'absolute','zIndex':4});
        $carCircle.find('.circle').css({'width': this.options.circle.cird,'height': this.options.circle.cird,'background':'#999','border-radius':'50%','cursor':'pointer'});
        if(this.type.indexOf('slidex')!=-1 || this.type=='opacx'){//圆点在底边
          $carCircle.find('.circle').css({'margin':'7px 3px','float':'left'});
          $carCircle.css({
            'top':this.carheight-(14+this.options.circle.cird),
            'left':(this.carwidth-this.carNum*(this.options.circle.cird+6))/2
          });
        }else if(this.type.indexOf('slidey')!=-1 || this.type=='opacy'){//圆点在右边
          $carCircle.find('.circle').css({'margin':'3px 7px'});
          $carCircle.css({
            'top':(this.carheight-this.carNum*(this.options.circle.cird+6))/2,
            'left':this.carwidth-(14+this.options.circle.cird)
          });
        }
        this.$element.find('.circle').eq(0).css('background','#333');
      }
   };
   //自动轮播器
   Carousel.prototype.autoCarousel=function(){
      if(this.options.auto.isauto){
        this.carTimer=setInterval(this.setCarousel_auto.bind(this),this.options.auto.interval);
      }
   };
   Carousel.prototype.setCarousel_auto=function(){
      if(this.carIndex>=this.carNum){
         this.carIndex=0;
      }
      this.setCarousel(this.carIndex,this.carIndex==0?this.carNum-1:this.carIndex-1,0);
      this.carIndex++;
   };
   //轮播器轮播方法
   Carousel.prototype.setCarousel=function(current,prev,x){//current表示当前所指的小圆圈DOM对象，prev指的是当前元素对象的前一个索引值
      this.$element.find('.circle').css('background','#999');
      this.$element.find('.circle').eq(current).css('background','#333');
      this.items.removeClass('select');
      this.items.eq(current).addClass('select');
      if(this.type.indexOf('opac')!=-1){
         this.items.eq(prev).fadeOut(1000).css('zIndex',1);
         this.items.eq(current).fadeIn(1000).css('zIndex',2);
      }else if(this.type=='slidex-left'){
         this.items.eq(prev).css('left',x).animate({'left':-this.carwidth});
         this.items.eq(current).css('left',this.carwidth+x).animate({'left':0});
      }else if(this.type=='slidex-right'){
         this.items.eq(prev).css('left',x).animate({'left':this.carwidth});
         this.items.eq(current).css('left',-this.carwidth+x).animate({'left':0});
      }else if(this.type=='slidey-up'){
         this.items.eq(prev).css('top',x).animate({'top':-this.carheight});
         this.items.eq(current).css('top',this.carheight+x).animate({'top':0});
      }else if(this.type=='slidey-down'){
         this.items.eq(prev).css('top',x).animate({'top':this.carheight});
         this.items.eq(current).css('top',-this.carheight+x).animate({'top':0});
      }
   };
   //手动轮播器,hover圆圈
   Carousel.prototype.handCircle=function(){
      var _this=this;
      _this.$element.find('.circle').hover(function(){
        clearInterval(_this.carTimer);
        if($(this).index()!=_this.nowIndex()){
           _this.setCarousel($(this).index(),_this.nowIndex(),0);
        }
      },function(){
        _this.carIndex=_this.nowIndex()==_this.carNum-1?0:_this.nowIndex()+1;
        _this.autoCarousel();
      });
   };
   //手动轮播器,点击箭头
   Carousel.prototype.handArrow=function(){
      var _this=this;
      _this.$element.find('.arrow').hide();
      _this.$element.children('.carArrow').hover(function(){
         $(this).find('.arrow').show();
         clearInterval(_this.carTimer);
      },function(){
         $(this).find('.arrow').hide();
         _this.carIndex=_this.nowIndex()==_this.carNum-1?0:_this.nowIndex()+1;
         _this.autoCarousel();
      });
      _this.$element.find('.left').click(function(e){
         _this.carPrev(0);
      });
      _this.$element.find('.right').click(function(e){
         _this.carNext(0);
      });
   };
   //鼠标拖动轮播
   Carousel.prototype.handTouch=function(){
      if(this.options.istouch){
        var _this=this;
        if(!_this.options.arrow.isshow){
           _this.$element.append('<div class="carTouch"></div>');
           _this.$element.children('.carTouch').css({'width':this.carwidth,'height':this.carheight,'position':'absolute','zIndex':3,'cursor':'pointer'});
           _this.$element.children('.carTouch').hover(function(){
              clearInterval(_this.carTimer);
           },function(){
              _this.carIndex=_this.nowIndex()==_this.carNum-1?0:_this.nowIndex()+1;
              _this.autoCarousel();
           });
        }
        _this.$element.mousedown(function(e){
           var x1=0;
           var x2=0;
           var x3=0;
           if(_this.type.indexOf('slidex')!=-1 || _this.type=='opacx'){
              x1=e.pageX;
           }else if(_this.type.indexOf('slidey')!=-1 || _this.type=='opacy'){
              x1=e.pageY;
           }
           $(document).on('mousemove',function(e){
               if(_this.type.indexOf('slidex')!=-1 || _this.type=='opacx'){
                  x2=e.pageX;
               }else if(_this.type.indexOf('slidey')!=-1 || _this.type=='opacy'){
                  x2=e.pageY;
               }
               x1 && _this.translate(x2-x1);
           });
          $(document).on('mouseup',function(e){
               if(_this.type.indexOf('slidex')!=-1 || _this.type=='opacx'){
                  x3=e.pageX;
               }else if(_this.type.indexOf('slidey')!=-1 || _this.type=='opacy'){
                  x3=e.pageY;
               }
              _this.translateEnd(x3-x1);
              $(document).off('mousemove');
              $(document).off('mouseup');
          });
        });
      }
   }
   //鼠标正在拖动图片
   Carousel.prototype.translate=function(x){
      if(x>0){
        if(this.type.indexOf('slidex')!=-1){
           this.items.eq(this.nowIndex()).css('left',x);
           this.items.eq(this.nowIndex()==this.carNum-1?0:this.nowIndex()+1).css('left',-this.carwidth+x);
        }else if(this.type.indexOf('slidey')!=-1){
           this.items.eq(this.nowIndex()).css('top',x);
           this.items.eq(this.nowIndex()==this.carNum-1?0:this.nowIndex()+1).css('top',-this.carheight+x);
        }
      }
      if(x<0){
        if(this.type.indexOf('slidex')!=-1){
           this.items.eq(this.nowIndex()).css('left',x);
           this.items.eq(this.nowIndex()==0?this.carNum-1:this.nowIndex()-1).css('left',this.carwidth+x);
        }else if(this.type.indexOf('slidey')!=-1){
           this.items.eq(this.nowIndex()).css('top',x);
           this.items.eq(this.nowIndex()==0?this.carNum-1:this.nowIndex()-1).css('top',this.carheight+x);
        }
      }
   }
   //鼠标拖动图片停止
   Carousel.prototype.translateEnd=function(x){
      if(x>40){
         this.carNext(x);
      }
      if(x<-40){
         this.carPrev(x);
      }
      if(x>=-40 && x<=40){
         this.carReturn(x);
      }
   }
   //切换到下一张轮播图片
   Carousel.prototype.carNext=function(x){
      if(this.type.indexOf('slidex')!=-1){
          this.type='slidex-right';
        }else if(this.type.indexOf('slidey')!=-1){
          this.type='slidey-down';
      }
      this.setCarousel(this.nowIndex()==this.carNum-1?0:this.nowIndex()+1,this.nowIndex(),x);
      this.type=this.initType;
   }
   //切换到前一张轮播图片
   Carousel.prototype.carPrev=function(x){
      if(this.type.indexOf('slidex')!=-1){
          this.type='slidex-left';
      }else if(this.type.indexOf('slidey')!=-1){
          this.type='slidey-up';
      }
      this.setCarousel(this.nowIndex()==0?this.carNum-1:this.nowIndex()-1,this.nowIndex(),x);
      this.type=this.initType;
   }
   //拖动不足40px，则返回上个轮播页
   Carousel.prototype.carReturn=function(x){
      if(x>0){
        if(this.type.indexOf('slidex')!=-1){
            this.items.eq(this.nowIndex()).css('left',0);
            this.items.eq(this.nowIndex()==this.carNum-1?0:this.nowIndex()+1).css('left',-this.carwidth);
        }else if(this.type.indexOf('slidey')!=-1){
            this.items.eq(this.nowIndex()).css('top',0);
            this.items.eq(this.nowIndex()==this.carNum-1?0:this.nowIndex()+1).css('top',-this.carheight);
        }
      }
      if(x<0){
        if(this.type.indexOf('slidex')!=-1){
           this.items.eq(this.nowIndex()).css('left',0);
           this.items.eq(this.nowIndex()==0?this.carNum-1:this.nowIndex()-1).css('left',this.carwidth);
        }else if(this.type.indexOf('slidey')!=-1){
           this.items.eq(this.nowIndex()).css('top',0);
           this.items.eq(this.nowIndex()==0?this.carNum-1:this.nowIndex()-1).css('top',this.carheight);
        }
      }
   }
   //获取当前索引
   Carousel.prototype.nowIndex=function(){
      for(var i=0;i<this.carNum;i++){
        if(this.items.eq(i).hasClass('select')){
          return i;
        }
      }
   }
   //将插件函数绑定到$.fn上，来实现扩展
   $.fn.jCarousel=function(option){
      return this.each(function(){
        var options=$.extend({},$.fn.jCarousel.default,option);
        var c=new Carousel(this,options);
        c.init();
        c.options.onchanging();
      });
   };
   //插件默认配置值
   $.fn.jCarousel.default={
      type: 'slidex-right',
      auto: {isauto:true,interval:2000},
      istouch:true,
      circle: {isshow:true,cird:15},
      arrow: {isshow:true,arrowsize:24},
      carsize: {carwidth:750,carheight:450},
      onchanging: function(){}
/*
      type：轮播类型
         透明度渐变轮播：水平方向opacx，垂直方向opacy
         水平方向轮播：左滑动slidex-left，右滑动slidex-right
         垂直方向轮播：上滑动slidey-up，下滑动slidey-down
      auto：是否自动轮播,自动轮播时间间隔
         自动轮播isauto:true，不自动轮播isauto:false
         自动轮播时间间隔设置interval属性
      istouch：是否支持触屏滑动
         支持触屏滑动true，不支持触屏滑动false
      circle：是否显示圆圈列表，圆圈直径大小
         显示圆圈列表isshow:true，不显示圆圈列表isshow:false
         圆圈直径大小设置cird属性
      arrow：是否显示滑动箭头，箭头大小
         显示滑动箭头isshow:true，不显示滑动箭头isshow:false
         箭头大小设置arrowsize属性
      carsize：设置轮播器大小尺寸
         轮播器宽度设置carwidth属性，轮播器高度设置carheight属性
      onchanging：执行完轮播的回调函数
*/
   };
})(jQuery);
