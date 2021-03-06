<?php
session_start();
ob_start();

if ( isset( $_REQUEST["id"] ) && isset( $_REQUEST["auth"] ) ) {

	include_once(dirname(__FILE__) . "/../phputil/SHOPCART.class.php");
	$shopcart = new SHOPCART();

	$order = $shopcart->get_shopcart($_REQUEST['id']);

	if ($order && $order["shopcart_certificate_auth"] == $_REQUEST["auth"]) {
		?>

		<!DOCTYPE html>
		<html lang="zh-cn">
		<head>

			<meta charset="UTF-8">
			<title>电子出行凭证</title>
			<meta name="keywords" content=""/>
			<meta name="description" content=""/>

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
			<link rel="stylesheet" href="http://m.wannar.com/css/electronic-certificates.css">


			<style type="text/css">

				body {
					margin: 0;
					padding: 0;
				}

				/* 第一个标签 */
				.certificates-title {
					border-radius: 5px;
					margin: 10px;
					padding: 5px 5px 15px 5px;
					background-color: white;
				}
				.detail-title{
					margin-bottom: 10px;
					font-weight: 900;
				}
				.font-14{
					font-size: 14px;
				}

				/* 出行人员 */
				.certificates-travel-people {
					border-radius: 5px;
					margin: 10px;
					padding: 5px 5px 15px 5px;
					background-color: white;
					font-size: 14px;
				}

				.certificates-travel-people div {
					padding: 5px;
				}

				/* 行程内容 */
				.certificates-scheduling-routing {
					border-radius: 5px;
					margin: 10px;
					padding: 5px 5px 15px 5px;
					background-color: white;
				}

				.certificates-scheduling-routing div {
					padding: 5px;
				}

				/* 其他 */
				.certificates-travel-remarks {
					border-radius: 5px;
					margin: 10px;
					padding: 15px 5px;
					background-color: white;
				}

				.certificates-travel-remarks div {
					padding: 5px;
					line-height: 30px;
					font-size: 14px;
				}

				/* 最下方的表格 */
				.certificates-table {
					margin: 10px;
					text-align: center;
				}

				.certificates-table table {
					width: 100%;
					border: 0 solid grey;
				}

				#table-th {
					background-color: #e9edf6;
				}

				#table-td {
					background-color: white;
				}

				.slogan {
					width: 60%;
					margin: 0 auto;
					padding: 0 15px 15px 15px;
				}

				.slogan div {
					height: 100px;
					background: url(../img/task/slogan.png) no-repeat;
					background-size: contain;
					position: relative
				}

			</style>

		</head>

		<body>

		<div class="electronic-certificates">
			<div class="certificates-title">
				<!-- 行程标题 -->
				<h3><?= $order['tour_title'] ?></h3>
				<hr>
				<div>

					<div>
						<div class="detail-title">出发时间:</div>
						<div class="font-14"><?=$order['shopcart_departure_date']?></div>
					</div><br>
					<div>
						<div class="detail-title">地接公司:</div>
						<div class="font-14"><?=$order['col_agent_name']?></div>
					</div><br>
					<?php
					$saved_certificate = explode( "|", $order["shopcart_certificate"] );
					if ( $order["tour_pickup_location"] )
					{
						?>
						<div>
							<div class="detail-title">上车地点:</div>
							<div class="font-14"><?=unescape($saved_certificate[1])?></div>
						</div>
						<?php
					}
					?>

				</div>
			</div>
			<div class="certificates-travel-people">
				<h3>出行人员</h3>
				<hr>
				<div>
					<table>
						<tr>
							<td>成人/Adult:</td>
							<td><?=$order['shopcart_total_adult']?></td>
							<td>儿童/Adult:</td>
							<td><?=$order['shopcart_total_children']?></td>
						</tr>
					</table>
				</div><br>
				<div>
					<strong><?=unescape( $order['shopcart_member'] )?></strong>
				</div>
			</div>
			<div class="certificates-scheduling-routing">
				<h3>行程内容</h3>
				<hr>
				<div>

					<?php
					$day = array("第一天","第二天","第三天","第四天","第五天","第六天","第七天","第八天","第九天","第十天","第十一天","第十二天", "第十三天", "第十四天", "第十五天", "第十六天", "第十七天", "第十八天", "第十九天", "第二十天", "第二十一天", "第二十二天");
					$saved_certificate = explode( "|", $order["shopcart_certificate"] );
					$save_days = explode( ";", $saved_certificate[0] );

					if ( $order["tour_activity"] )
					{
						for ( $i = 0, $ilen = count( $save_days ); $i < $ilen; $i++ )
						{
							$oneday_saved = explode( ",", $save_days[$i] );
							echo "<p><span style='font-weight:bold; line-height:28px;'>确认函：</span>" . unescape( $oneday_saved[0] ) . "</p>";
							echo "<p>" . unescape( $oneday_saved[1] ) . "</p>";
						}
					}
					else
					{
						$details = explode( "@", $order["tour_details"] );
						for ( $i = 0, $ilen = count( $save_days ); $i < $ilen; $i++ )
						{
							$oneday = explode( "|", $details[$i] );
							$oneday_saved = explode( ",", $save_days[$i] );
							echo "<p><span style='font-weight:bold; line-height:28px;'>" . $day[$i] . "：</span>" . unescape( $oneday_saved[0] ) . "</p>";
							echo "<p>" . unescape( $oneday_saved[1] ) . "</p>";

							if ( $oneday[1] )
							{
								echo "<p style='font-size:14px;'>集合：" .  unescape( $oneday[1] ) . "</p>";
							}

							if ( $oneday[3] )
							{
								echo "<p style='font-size:14px;'>返程：" .  unescape( $oneday[3] ) . "</p>";
							}

						}
					}
					?>
				</div>

			</div>
			<div class="certificates-travel-remarks">
				<h3>紧急联系方式</h3>
				<hr>
				<div>
					<?=unescape($order['col_agent_urgent'])?>
				</div>
				<h4>本地接送条款</h4>
				<hr>
				<div>
					<?=unescape($order['col_agent_buspick'])?>
				</div>
			</div>
			<div class="certificates-table">
				<table>
					<tr id="table-th">
						<th>订单号码</th>
						<th>订购时间</th>
					<tr id="table-td">
						<td><?=$order['order_tracking']?></td>
						<td><?=$order['shopcart_paid']?></td>
					</tr>
				</table>
			</div>
			<div class="slogan">
				<div></div>
			</div>
		</div>


		<?php require_once("component/download.php"); ?>

		<?php require_once("component/sidebar.php"); ?>

		<script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
		<script src="/javascript/header_footer.js"></script>

		</body>

		</html>
		<?php
	}
}
?>