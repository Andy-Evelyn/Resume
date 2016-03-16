$(document).ready(
function() {
	var year = new Date().getFullYear();// 取得系统年份
	for (var i = 0; i < 5; i++) {
		$("#yearList").append("<div class='item' data-value='"+(year-i)+"'>"+(year-i)+"</div>");
		}
		$.ajax({
			url : "/stuenroll/specialty/searchAll",
			data : {},
			success : function(response) {
				var list = response.list;
				for (var i = 0; i < list.length; i++) {
					var one = list[i];
					var id = one.id;
					var name = one.name;
					$("#specialtyList").append(
							"<div class='item' data-value='"+id+"'>"+name+"</div>");
					}
				}
			});
		$.ajax({
			url : "/stuenroll/orgnization/searchAll",
			data : {},
			success : function(response) {
				var list = response.list;
				for (var i = 0; i < list.length; i++) {
					var one = list[i];
					var id = one.id;
					var name = one.name;
					$("#orgnizationList").append("<div class='item' data-value='"+id+"'>"+name+"</div>");
					}
				}
			});
		$("#down").click(function(){
			$('.ui.modal')
			  .modal('show');
		});
		$(".ui.dropdown").dropdown(); // 激活下拉列表的选项
		
		$("#submit").click(function(){	
			var pid = $("#copid").val();
			var regPid = new RegExp("^\\d{18}$");
			var rsPid = regPid.test(pid);
			if (rsPid == false) {
				alert("请填写身份证号");
			} else {
				$.ajax({
					url : "/stuenroll/enroll/searchPid",
					data : {
						"pid" : pid,
					},
					async : false,
					success : function(response) {
						rsPid = response.result;
						if (rsPid == false) {
							$.ajax({
								url : "/stuenroll/welcome/DownExcel",
								data : {
									"pid" : pid,
								},
								success : function() {
								
								}
							});
						}else{
							alert("不存在身份证号")
						}
					}
				});
				
			}
		});
		$("#save").click(function() {
			var name = $("#name").val();
			var regName = new RegExp("^[\\u4e00-\\u9fa5]{2,8}$");
			var rsName = regName.test(name);
			if (rsName == false) {
				$("#name").css("color", "red");
				alert("姓名填写错误");
			} else {
				$("#name").css("color", "black");
			}
			var sex = $("#sex").val();
			var rsSex = (sex != null && sex != "");
			if (rsSex == false) {
				alert("请选择性别");
			}
			var nation = $("#nation").val();
			var rsNation = (nation != null && nation != "");
			if (rsNation == false) {
				alert("请选择民族");
			}
			var graduate_school = $("#graduate_school").val();
			var regGraduate_school = new RegExp("^[\\u4e00-\\u9fa5]{4,20}$");
			var rsGraduate_school = regGraduate_school.test(graduate_school);
			if (rsGraduate_school == false) {
				alert("请正确填写毕业学校");
			}
	
			var graduate_year = $("#graduate_year").val();
			var rsGraduate_year = (graduate_year != null && graduate_year != "");
			if (rsGraduate_year == false) {
				alert("请填写毕业年份");
			}
	
			var graduate_date = $("#graduate_date").val();
			var regGraduate_date = new RegExp("^\\d{4}-\\d{1,2}-\\d{1,2}$");
			var rsGraduate_date = regGraduate_date.test(graduate_date);
			if (rsGraduate_date == false) {
				alert("请填写毕业日期");
			} else {
				var temp = graduate_date.substring(0, 4);
				if (!(temp == graduate_year)) {
					alert("毕业日期与毕业年份不符")
					rsGraduate_date == false;
				}
			}
	
			var graduate_specialty = $("#graduate_specialty").val();
			var rsGraduate_specialty = (graduate_specialty != null && graduate_specialty != "");
			if (rsGraduate_specialty == false) {
				alert("请填写毕业专业");
			}
	
			var education = $("#education").val();
			var rsEducation = (education != null && education != "");
			if (rsEducation == false) {
				alert("请填写毕业学历");
			}
	
			var healthy = $("#healthy").val();
			var rsHealthy = (healthy != null && healthy != "");
			if (rsHealthy == false) {
				alert("请填写健康状况");
			}
	
			var politics = $("#politics").val();
			var rsPolitics = (politics != null && politics != "");
			if (rsPolitics == false) {
				alert("请填写政治面貌");
			}
	
			var birthday = $("#birthday").val();
			var regBirthday = new RegExp("^\\d{4}-\\d{1,2}-\\d{1,2}$");
			var rsBirthday = regBirthday.test(birthday);
			if (rsBirthday == false) {
				alert("请填写出生日期");
			}
	
			var address = $("#address").val();
			var regAddress = new RegExp("^[\\u4e00-\\u9fa5]{2,10}$");
			var rsAddress = regAddress.test(address);
			if (rsAddress == false) {
				alert("请填写现居地址");
			}
	
			var household_address = $("#household_address").val();
			var regHousehold_address = new RegExp("^[\\u4e00-\\u9fa5]{2,10}$");
			var rsHousehold_address = regHousehold_address.test(household_address);
			if (rsHousehold_address == false) {
				alert("请填写户籍地址");
			}
	
			var home_address = $("#home_address").val();
			var rsHome_address = (home_address != null && home_address != "");
			if (rsHome_address == false) {
				alert("请填写家庭地址");
			}
	
			var tel = $("#tel").val();
			var regTel = new RegExp("^(13[0-9]|14[5,7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$");
			var rsTel = regTel.test(tel);
			if (rsTel == false) {
				alert("请正确填写移动电话");
			}
	
			var home_tel = $("#home_tel").val();
			var regHome_tel = new RegExp("^\\d{3,4}-\\d{7,8}$");
			var rsHome_tel = regHome_tel.test(home_tel);
			if (rsHome_tel == false) {
				alert("请填写家庭电话");
			}
	
			var email = $("#email").val();
			var regEmail = new RegExp("^([a-z|A-Z|0-9|_|\.|\-])+\@(([a-z|A-Z|0-9|\-])+\.)+([a-z|A-Z|0-9]{2,4})+$");
			var rsEmail = regEmail.test(email);
			if (rsEmail == false) {
				alert("请正确填写电子邮箱");
			}
			var specialty_id = $("#specialty_id").val();
			var rsSpecialty_id = (specialty_id != null && specialty_id !="");
			if(rsSpecialty_id == false) {
				alert("请选择申报专业");
			}
			var place = $("#place").val();
			var rsPlace = (place != null && place != "");
			if (rsPlace == false) {
				alert("请填写培训地点");
			}
			var orgnization_id = $("#orgnization_id").val();
			var rsOrgnization_id = (orgnization_id != null && orgnization_id != "");
			if (rsOrgnization_id == false) {
				alert("请填写培训机构");
			}
	
			var pid = $("#pid").val();
			var regPid = new RegExp("^\\d{18}$");
			var rsPid = regPid.test(pid);
			if (rsPid == false) {
				alert("请填写身份证号");
			} else {
				$.ajax({
					url : "/stuenroll/enroll/searchPid",
					data : {
						"pid" : pid,
					},
					async : false,
					success : function(response) {
						rsPid = response.result;
						if (rsPid == false) {
							alert("身份证号已存在");
						}
					}
				});
			}
			
			if (rsName && rsSex && rsPid
					&& rsNation
					&& rsGraduate_school
					&& rsGraduate_year
					&& rsGraduate_date
					&& rsGraduate_specialty
					&& rsEducation && rsHealthy
					&& rsPolitics && rsBirthday
					&& rsAddress
					&& rsHousehold_address
					&& rsHome_address && rsTel
					&& rsHome_tel && rsEmail
					&& rsSpecialty_id && rsPlace && rsOrgnization_id) {
				var date = new Date();
				var create_time = date.getFullYear()+'-'+(date.getMonth()+1)+'-'
				+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
				create_time.replace(/([\-\:])(\d{1})(?!\d)/g,'$10$2');
				$.ajax({
					url : "/stuenroll/enroll/register",
					data : {
						"name" : name,
						"sex" : sex,
						"pid" : pid,
						"nation" : nation,
						"graduate_school" : graduate_school,
						"graduate_year" : graduate_year,
						"graduate_date" : graduate_date,
						"graduate_specialty" : graduate_specialty,
						"education" : education,
						"healthy" : healthy,
						"politics" : politics,
						"birthday" : birthday,
						"address" : address,
						"household_address" : household_address,
						"home_address" : home_address,
						"tel" : tel,
						"home_tel" : home_tel,
						"email" : email,
						"specialty_id" : specialty_id,
						"place" : place,
						"orgnization_id" : orgnization_id,
						"create_time" : create_time,
						"year" : date.getFullYear()
					},
					success : function(response) {
						alert("报名成功")
					}
				});
			}
	
		});
	})