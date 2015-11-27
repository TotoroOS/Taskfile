<!DOCTYPE html>
<html lang="zh-cn">
<head>
  
  <meta charset="UTF-8">
  <title></title>
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  
  <meta name="HandheldFriendly" content="true">
  <meta name="MobileOptimized" content="width">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui"/>
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="applicable-device" content="mobile">
  <meta name="format-detection" content="telephone=no">
  
  <link rel="icon" href="http://website.wannar.com/images/logo/wannar_16.ico" type="image/ico">
  <link rel="shortcut icon" href="http://website.wannar.com/images/logo/wannar_16.ico">
  
  <link rel="stylesheet" href="http://m.wannar.com/css/header_footer.css">

	
	<style type="text/css">
		body{ padding: 0; margin: 0;}
		/* 背景遮盖 */ 
		.background-cover{display: none; position: fixed; top: 0; left: 0; z-index: 2; width: 100%; height: 100%; background-color: #000; filter: alpha(opacity=80);-moz-opacity: 0.8;opacity: 0.8;}
		.select-menu{display: none; position: fixed; left: 0; bottom: 0; z-index: 3; width: 100%; height: 450px; background-color: #fafbfd; font-size: 20px; color: grey;}
		.sort-menu{display: none; position: fixed; left: 0; bottom: 0; z-index: 3; width: 100%; height: 200px; background-color: #fafbfd; text-align: center; font-size: 20px; color: grey;}
		/* 产品列表 */   
		.product-tips{height: 280px; text-align: center; margin: 0 10px 10px 10px ; background-color: white;}

		.product-pic-tag{position:absolute; top:0; right:15px;}
		.product-pic-tag img{width: 70%; height: 70%;}
		.product-pic-label-cover, .product-pic-label-uncover{height: 35px; position: absolute; left:0; width:100%; bottom: 0;}
		.product-pic-label-cover{background-color:#8f8f92; filter:alpha(opacity=50);-moz-opacity:0.5;opacity:0.5;}
		.product-pic-label-uncover{background-color:transparent;}
		.pic-words span{color: white;}
		.pic-words-left{padding: 12px 0 10px 10px; float: left; font-size: 12px;}
		.pic-words-right{padding: 10px 10px 10px 0; float: right; font-size: 14px;}
		
		.product-title{height: 30px; margin: 5px; border-bottom: 1px solid #d3d3dd;line-height:30px;font-size:14px;text-align: left;}
		
		.product-info{height: 70px; padding-bottom: 2px; display: table;}
		.product-price-left, .tour-price, .tour-unit{height: 50px; line-height:50px; text-align: center; color:#ff3573; width: 39%; float: left; border-right: 2px solid #d3d3dd; display: table-cell;}
		.tour-price{font-size: 24px;}
		.tour-unit{font-size: 10px;}
		.product-price-right{height: 60px; width: 60%; float: right; text-align: left;}
		.product-price-right div{padding:2px 8px;}
		.tour-service-tag[color=purple]{font-size: 10px; border: 1px solid #a462ff; color: #a462ff; padding: 3px 6px; margin-bottom: 6px; display:inline-block;}
		.tour-service-tag[color=yellow]{font-size: 10px; border: 1px solid #ffac62; color: #ffac62; padding: 3px 6px; margin-bottom: 6px; display:inline-block;}
		
		/* 底部透明按钮 */ 
		.menu-cover, .menu-uncover{height: 40px; position: fixed; left: 0; width: 100%; bottom: 0;}
		.menu-cover{background-color: #ff3573; filter:alpha(opacity=80);-moz-opacity:0.8;opacity:0.8;}
		.menu-uncover{background-color: transparent;}
		.button{height: 40px; line-height: 40px; color: white; font-size: 18px; text-align: center;}
		.button[for=select]{width: 50%; float: left;  border-right: 2px white solid;}
		.button[for=sort]{width: 49%; float: right;}

		/* 排序菜单 */  
		.sort-button, .sort-button-selected{height:50px; border-bottom: 1px solid grey; line-height: 50px; font-size: 18px;}
		.sort-button-selected{background-color: #ebebf0;}		

		/* 选择菜单 */ 
		.select-menu-top{height: 50px; border-bottom: 1px solid grey;}
		.select-menu-top table{width: 100%; font-size: 18px; padding: 0 10px;}
		#select-cancle{height: 48px; width: 30%;}
		#select-reset{height: 48px; width: 40%; text-align: center;}
		#select-reset img{height: 15px; width: 15px;}
		#select-submit{height: 48px; width: 30%; text-align: right; color: #ff3573;}
		.tabs-img{height: 70px; width: 70px;}
		.tab-container{width: 80%; float: right; font-size: 18px;}
		.tab-content{height: 370px; padding: 15px;}
		.select-line{height: 45px; line-height: 45px;}
		.select-line-radio{float: right;}
		.select-line-radio input{width: 20px; size: 20px;}
		  
		ul.tabs{width: 20%; float: left; list-style: none; padding: 0; height: 400px; margin:0; text-align: center;}
		ul.tabs li.normal, ul.tabs li.active{height: 100px; width: 100%;}
		ul.tabs li.normal{background-color: #f9fbfc;}
		ul.tabs li.active{background-color: #ebebf0;}
						
	</style>
  
  
</head>

<body>

  <!-- 头部和搜索框 -->  
  <div class="layer header">
    <a href="/city-select.php" target="_self"><div class="current-city">纽约</div></a>
    <div class="sidebar-btn"></div>
    <div class="search-bar">
      <div class="search-btn"></div>
      <div class="search-input"><input type="text" placeholder="城市、景点、团号"></div>
    </div>
  </div>
  
  <!-- 面包屑导航 --> 
  <div class="layer bread-crumb-layer">
    <ol class="list-unstyled bread-crumb" vocab="http://schema.org/" typeof="BreadcrumbList">
      <li property="itemListElement" typeof="ListItem">
        <a property="item" typeof="WebPage" href="/">
          <span property="name">首页</span> 
        </a>
        <meta property="position" content="1">
      </li>
      <li>›</li>
      <li property="itemListElement" typeof="ListItem">
        <a property="item" typeof="WebPage" href="/city-select.php">
          <span property="name">城市列表</span> 
        </a>
        <meta property="position" content="2">
      </li>
      <li>›</li>
      <li property="itemListElement" typeof="ListItem">
        <a property="item" typeof="WebPage" href="/city/new-york.php">
          <span property="name">纽约</span> 
        </a>
        <meta property="position" content="3"> 
      </li>
    </ol>
  </div>

	<!-- 以下是我的任务 -->   
	<div class="content">

		<div class="product-list"></div>
  
  		<!-- 底部的筛选排序按钮 -->
		<div class="menu-bottom">
			<div class="menu-cover"></div>
			<div class="menu-uncover">
				<div class="menu-button">
					<div class="button" for="select">筛选</div>
					<div class="button" for="sort">排序</div>
				</div>
			</div>
		</div>
		<!-- 底部的筛选排序按钮结束 -->  
	
		<div class="background-cover"></div>
		<!-- 排序的菜单栏 -->  
		<div class="sort-menu">			
			<div class="sort-button sort-button-selected">天数从低到高</div>
			<div class="sort-button">天数从高到低</div>  
			<div class="sort-button">价格从低到高</div>
			<div class="sort-button">价格从高到低</div>  			
		</div>
		<!-- 排序的菜单栏结束 -->  		

		<!-- 选择菜单栏 --> 
		<div class="select-menu">	
			<div class="select-menu-top" style="">
				<table style="">
					<tr>
						<td id="select-cancle">取消</td>   
						<td id="select-reset"><img src="../img/task/reload.png">重置</td>
						<td id="select-submit">确定</td>   
					</tr>
				</table>
			</div><!-- select-menu-top END -->
				
			<div class="container" style="overflow: auto;">	
				<ul class="tabs">
					<li class="active"><a href="#tab-days"><img class="tabs-img" src="../img/task/days.png"></a></li>
					<li class="normal"><a href="#tab-time"><img class="tabs-img" src="../img/task/time.png"></a></li>
					<li class="normal"><a href="#tab-service"><img class="tabs-img" src="../img/task/service.png"></a></li>
					<li class="normal"><a href="#tab-discount"><img class="tabs-img" src="../img/task/discount.png"></a></li>
				</ul>
					
				<div class="tab-container">							
					<div id="tab-days" class="tab-content">
						<div class="select-line">
							不限<div class="select-line-radio"><input type="radio" name="daysCheck" value="不限" checked="checked"></div>  
						</div> 
						<div class="select-line">
							一天<div class="select-line-radio"><input type="radio" name="daysCheck" value="一天"></div> 
						</div>  
						<div class="select-line">
							两天<div class="select-line-radio"><input type="radio" name="daysCheck" value="两天"></div>  
						</div> 
						<div class="select-line">
							三天<div class="select-line-radio"><input type="radio" name="daysCheck" value="三天"></div>   
						</div> 
						<div class="select-line">
							四天<div class="select-line-radio"><input type="radio" name="daysCheck" value="四天"></div>  
						</div>  
						<div class="select-line">
							五天<div class="select-line-radio"><input type="radio" name="daysCheck" value="五天"></div>  
						</div> 
						<div class="select-line">
							六天<div class="select-line-radio"><input type="radio" name="daysCheck" value="六天"></div>  
						</div> 
						<div class="select-line">
							天数区间<div class="select-line-radio"><input type="text" name="fday">  -  <input type="text" name="lday"></div>   
						</div> 
					</div><!-- tab-days END -->
						
					<div id="tab-time" class="tab-content">
						<div class="select-line">
							不限<div class="select-line-radio"><input type="radio" name="timeCheck" value="不限"></div>    
						</div> 
						<div class="select-line">
							星期一<div class="select-line-radio"><input type="radio" name="timeCheck" value="星期一"></div>   
						</div> 
						<div class="select-line">
							星期二<div class="select-line-radio"><input type="radio" name="timeCheck" value="星期二"></div>    
						</div> 
						<div class="select-line">
							星期三<div class="select-line-radio"><input type="radio" name="timeCheck" value="星期三"></div>   
						</div> 
						<div class="select-line">
							星期四<div class="select-line-radio"><input type="radio" name="timeCheck" value="星期四"></div> 
						</div> 
						<div class="select-line">
							星期五<div class="select-line-radio"><input type="radio" name="timeCheck" value="星期五"></div>    
						</div> 
						<div class="select-line"> 
							星期六<div class="select-line-radio"><input type="radio" name="timeCheck" value="星期六"></div>   
						</div> 
						<div class="select-line">
							天数区间<div class="select-line-radio"><input type="text" name="ftime">  -  <input type="text" name="ltime"></div>   
						</div> 
					</div><!-- tab-time END -->
						
					<div id="tab-service" class="tab-content">
						<div class="select-line">
							不限<div class="select-line-radio"><input type="radio" name="serviceCheck" value="不限"></div>    
						</div> 
						<div class="select-line">
							接机参团<div class="select-line-radio"><input type="radio" name="serviceCheck" value="接机参团"></div>    
						</div> 
						<div class="select-line">
							本地出发<div class="select-line-radio"><input type="radio" name="serviceCheck" value="本地出发"></div> 
						</div> 
						<div class="select-line">
							加订酒店<div class="select-line-radio"><input type="radio" name="serviceCheck" value="加订酒店"></div> 
						</div>  
						<div class="select-line">
							配房服务<div class="select-line-radio"><input type="radio" name="serviceCheck" value="配房程度"></div>   
						</div>  
					</div><!-- tab-service END -->
						
					<div id="tab-discount" class="tab-content">
						<div class="select-line">
							不限<div class="select-line-radio"><input type="radio" name="discountCheck" value="不限"></div>     
						</div> 
						<div class="select-line">
							买二送一<div class="select-line-radio"><input type="radio" name="discountCheck" value="买二送一"></div> 
						</div>  
						<div class="select-line">
							买二送二<div class="select-line-radio"><input type="radio" name="discountCheck" value="买二送二"></div> 
						</div> 
						<div class="select-line">
							满额返点<div class="select-line-radio"><input type="radio" name="discountCheck" value="满额返点"></div> 
						</div>  
						<div class="select-line">
							积分返点<div class="select-line-radio"><input type="radio" name="discountCheck" value="积分返点"></div> 
						</div> 
						<div class="select-line">
							积分兑换<div class="select-line-radio"><input type="radio" name="discountCheck" value="积分兑换"></div> 
						</div> 
						<div class="select-line"> 
							VIP特价<div class="select-line-radio"><input type="radio" name="discountCheck" value="VIP特价"></div>    
						</div> 
					</div><!-- tab-discount END -->	
				</div><!-- tab-container END -->
			</div><!-- container END -->				
		</div> 
		<!-- 选择菜单栏结束 -->

	</div>	  
	<!-- 以上是我的任务 -->   
  <?php require_once( "../component/download.php" ); ?>
  
  <?php require_once( "../component/sidebar.php" ); ?>
  
  <script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
  <script src="/javascript/header_footer.js"></script>

	<script type="text/javascript">
		$(document).ready(function() {

			var SMALL = $( window ).width() <= 320;

			function createTips(tour) {

				var a = DC("a").attr("href", "/" + tour["tour_url"] + "-" + tour["tour_id"] + ".html").attr( {"target": "_blank"} ).appendTo( $(".product-list") );

				var product_tips = DC("div").addClass("product-tips").appendTo( a );

				var tour_pic = DC("div").addClass("product-pic")
						.css( { "height" : "180px", "background" : "url(http://website.wannar.com/images/app/city_list/46_m.jpg) no-repeat", "background-size" : "cover", "position" : "relative" } )
						.appendTo( product_tips );

				var tour_tag = DC("div").addClass("product-pic-tag")
						.append( DC( "img").attr( "src", "http://website.wannar.com/images/gui/discount_90.png" ) )
						.appendTo(tour_pic);

				var tour_pic_label_cover = DC("div").addClass("product-pic-label-cover").appendTo(tour_pic);

				var tour_pic_label_uncover = DC("div").addClass("product-pic-label-uncover").appendTo(tour_pic);

				var pic_words = DC("div").addClass("pic-words").appendTo("tour_pic_label_uncover");

				var tour_code = DC("span").addClass("pic-words-left").appendTo(pic_words);

				var weekday = [];

				if (tour["tour_monday"] == 1) {
					weekday.push("一");
				}
				if (tour["tour_tuesday"] == 1) {
					weekday.push("二");
				}
				if (tour["tour_wednesday"] == 1) {
					weekday.push("三");
				}
				if (tour["tour_thursday"] == 1) {
					weekday.push("四");
				}
				if (tour["tour_friday"] == 1) {
					weekday.push("五");
				}
				if (tour["tour_saturday"] == 1) {
					weekday.push("六");
				}
				if (tour["tour_sunday"] == 1) {
					weekday.push("日");
				}
				if (weekday.length == 7) {
					DC("span").addClass("pic-words-left").text("每天都发团").appendTo(pic_words);
				}
				else if (weekday.length == 0) {
					DC("span").addClass("pic-words-left").text("点击查看详情").appendTo(pic_words);
				}
				else {
					DC("span").addClass("pic-words-left").text("周" + weekday.join("、") + "发团").appendTo(pic_words);
				}

				var tour_departure = DC("span").addClass("pic-words-right").text(tour["tour_departure"] + "出发").appendTo(pic_words);

				var tour_title = DC("div").addClass("product-title").text(tour["tour_title"]).appendTo(a);

				var tour_info = DC("div").addClass("product-info").appendTo(a);

				var tour_price_left = DC("div").addClass("product-price-left").appendTo(tour_info);

				DC("span").addClass("tour-price").text("$" + tour["tour_display_price"]).appendTo(tour_price_left);

				DC("span").addClass("tour-unit").text("人/起").appendTo(tour_price_left);

				var tour_price_right = DC("div").addClass("product-price-right").appendTo(tour_info);

				var tag_arr = [];

				if (tour["tour_buy2get1"] == 1 && tag_arr.length < 5) {
					tag_arr.push("<div class='product-service-tag' color='purple'>2送1</div>")
				}
				if (tour["tour_buy2get2"] == 1 && tag_arr.length < 5) {
					tag_arr.push("<div class='product-service-tag' color='purple'>2送2</div>")
				}
				if (tour["tour_extradiscount"] == 1 && tag_arr.length < 5) {
					tag_arr.push("<span class='product-service-tag' color='purple'>满返</span>");
				}
				if (tour["tour_getpoints"] == 1 && tag_arr.length < 5) {
					tag_arr.push("<span class='product-service-tag' color='purple'>返点</span>");
				}
				if (tour["tour_usepoints"] == 1 && tag_arr.length < 5) {
					tag_arr.push("<span class='product-service-tag' color='purple'>兑换</span>");
				}
				if (tour["tour_vipdiscount"] == 1 && tag_arr.length < 5) {
					tag_arr.push("<span class='product-service-tag' color='purple'>VIP</span>");
				}
				if (tour["tour_airport"] == 1 && tag_arr.length < 5) {
					tag_arr.push("<span class='product-service-tag' color='purple'>接机参团</span>");
				}
				if (tour["tour_pickup"] == 1 && tag_arr.length < 5) {
					tag_arr.push("<span class='product-service-tag' color='purple'>本地出发</span>");
				}
				if (tour["tour_hotel"] == 1 && tag_arr.length < 5) {
					tag_arr.push("<span class='product-service-tag' color='purple'>加订酒店</span>");
				}
				if (tour["tour_share"] == 1 && tag_arr.length < 5) {
					tag_arr.push("<span class='product-service-tag' color='purple'>可配房</span>");
				}
			};

			var tour = [];

			tour["tour_url"] = "wjedw";
			tour["tour_id"] = "xsaxsacxascxs";
			tour["tour_code"] = 111111111111;
			tour["tour_main_picture"] = "/tours/central/NY/WoodburyCommonPremiumOutlets_b.jpg";
			tour["tour_monday"] = 1;
			tour["tour_departure"] = 111111;
			tour["tour_title"] = "wwdfewfw";
			tour["tour_display_price"] =3533;


			createTips( tour );

		//................................

			$(".menu-button .button").click( function(){
				$(".menu-bottom").hide();
				$(".background-cover").fadeIn(200);
				if($(this).attr("for") == "sort") {
					$(".sort-menu").fadeIn(400);
				} else {
					$(".select-menu").fadeIn(400);
				}
			});

			$("#select-cancle, #select-submit, .background-cover").click( function (){

				$(".background-cover").fadeOut(400);
				$(".select-menu, .sort-menu").fadeOut(400);
				$(".menu-bottom").show();
			});

			$(".sort-menu .sort-button").click( function() {
				$( this ).siblings().removeClass("sort-button-selected").addClass("sort-button");
				$( this ).removeClass("sort-button").addClass("sort-button-selected");
				$(".sort-menu").fadeOut(200);
				$(".background-cover").fadeOut(200);
				$(".menu-bottom").show();
			});

			$(".tab-content").hide();
			$("ul.tabs li:first").addClass("active").show();
			$(".tab-content:first").show();


			$("ul.tabs li").click(function() {

				$( this ).siblings().removeClass("active").addClass( "normal" );
				$( this ).removeClass("normal").addClass("active");
				$(".tab-content").hide();

				var activeTab = $(this).find("a").attr("href");
				$(activeTab).fadeIn();
			});
		});

	</script>
</body>

</html>