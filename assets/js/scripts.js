 
// loader
$(window).on("load", function () {
	$("#preloader").fadeOut();
	$("#preloader").delay(500).fadeOut("slow");
	$("body").delay(500).css({ overflow: "visible" });
  });
 

// scrollup
$(window).on('scroll', function() { if ($(this).scrollTop() > 500) { $('.scrollup').fadeIn(); } else { $('.scrollup').fadeOut(); } }); $('.scrollup').on("click", function() { $("html, body").animate({ scrollTop: 0 }, 800); return false; }); 
function myFunction(x) {
	x.classList.toggle("change");
  }

$('.sk_multipole_radio_item').hide();

$(document).on('click','.child_class_item',function(){ 
	$(this).find('.sk_multipole_radio_item').show(); 
});

$(document).on('click','.sk_cst_radio',function(){
	var sk_val = ($(this).attr('value'));
	if(sk_val == 1){ 
		$('.custom_sk_one').fadeIn();
		$('.custom_no_one').fadeOut();
	} else if(sk_val == 2){ 
		$('.custom_sk_one').fadeOut(); 
		$('.custom_no_one').fadeIn();
	}
	else{
		$('.custom_sk_one').fadeOut(); 
		$('.custom_no_one').fadeOut();
	}
});


$(document).on('click','.sk_cst_radio_two',function(){
	var sk_val2 = ($(this).attr('value'));
	if(sk_val2 == 1){ 
		$('.custom_sk_two').fadeIn();
		$('.custom_no_two').fadeOut();
	} else if(sk_val2 == 2){ 
		$('.custom_sk_two').fadeOut(); 
		$('.custom_no_two').fadeIn();
	}
	else{
		$('.custom_sk_two').fadeOut(); 
		$('.custom_no_two').fadeOut();
	}
});

$(document).on('click','.sk_cst_radio_three',function(){
	var sk_val2 = ($(this).attr('value'));
	if(sk_val2 == 1){ 
		$('.custom_sk_three').fadeIn();
		$('.custom_no_three').fadeOut();
	} else if(sk_val2 == 2){ 
		$('.custom_sk_three').fadeOut();
		$('.custom_no_three').fadeIn();
	}
	else{
		$('.custom_sk_three').fadeOut(); 
		$('.custom_no_three').fadeOut();
	}
});

$(document).on('click','.sk_cst_radio_four',function(){
	var sk_val2 = ($(this).attr('value'));
	if(sk_val2 == 1){ 
		$('.custom_sk_four').fadeIn();
		$('.custom_no_four').fadeOut();
	}else if(sk_val2 == 2){ 
		$('.custom_sk_four').fadeOut();
		$('.custom_no_four').fadeIn();
	} 
	else{
		$('.custom_sk_four').fadeOut(); 
		$('.custom_no_four').fadeOut();
	}
});

$(document).on('click','.sk_cst_radio_5',function(){
	var sk_val2 = ($(this).attr('value'));
	if(sk_val2 == 1){ 
		$('.custom_sk_five').fadeIn();
		$('.custom_no_five').fadeOut();
	}else if(sk_val2 == 2){ 
		$('.custom_sk_five').fadeOut();
		$('.custom_no_five').fadeIn();
	} 
	else{
		$('.custom_sk_five').fadeOut(); 
		$('.custom_no_five').fadeOut();
	}
});

$(document).on('click','.sk_cst_radio_6',function(){
	var sk_val2 = ($(this).attr('value'));
	if(sk_val2 == 1){ 
		$('.custom_sk_six').fadeIn();
		$('.custom_no_six').fadeOut();
	}else if(sk_val2 == 2){ 
		$('.custom_sk_six').fadeOut();
		$('.custom_no_six').fadeIn();
	} 
	else{
		$('.custom_sk_six').fadeOut(); 
		$('.custom_no_six').fadeOut();
	}
});

$(document).on('click','.sk_cst_radio_7',function(){
	var sk_val2 = ($(this).attr('value'));
	if(sk_val2 == 1){ 
		$('.custom_sk_seven').fadeIn();
		$('.custom_no_seven').fadeOut();
	}else if(sk_val2 == 2){ 
		$('.custom_sk_seven').fadeOut();
		$('.custom_no_seven').fadeIn();
	} 
	else{
		$('.custom_sk_seven').fadeOut(); 
		$('.custom_no_seven').fadeOut();
	}
});

$(document).on('click','.sk_report_click',function(){
	var report_details = ($(this).attr('data_id'));
	$('.sk_report_click').css({'background':'#fff'});
	$(this).css({'background':'var(--gradient, linear-gradient(89deg, #03B2FF 2.64%, #04FBCD 98.06%))'}); 
	if(report_details == 3){ 
		$('.sk_report_content_tab').fadeIn(); 
	} 
	else{ 
		$('.sk_report_content_tab').fadeOut(); 
	}
	

	return false
});

var proveide_count = 1;

$(document).on('click','.provide_add_more',function(){ 
	proveide_count = proveide_count + 1;
	if(proveide_count < 4){
		var appendData = `<div class="sk_custom_group mb-3">
			<span>Please provide details of any medical history including details of previous vaccination reactions</span>
			<div class="input_box">
				<textarea name="" id="" cols="30" rows="10"></textarea> 
			</div> 
		</div> `;
	} 

	$('.sk_app_data').append(appendData);

	return false;
});

var describe_count = 1;

$(document).on('click','.describe_btn',function(){
	describe_count = describe_count + 1;
	if(describe_count < 4){ 
		var appendData = `<div class="sk_append_text_two mb-3">
			<span>Please describe the events, including timeline of occurrences:</span>
			<div class="input_box">
				<textarea name="" id="" cols="30" rows="10"></textarea> 
			</div> 
		</div>`;
	
	}

	$('.sk_append_data_two').append(appendData);

	return false;
});

var medcate_count = 1 ;

$(document).on('click','.medcate_about_btn',function(){
	medcate_count = medcate_count + 1;
	if(medcate_count < 4){ 
		var appendData = ` <div class="sk_append_text_three mb-3">
			<span>Please tell us about the medications and/or vaccines the person has had in the last 4 weeks.</span>
			<div class="input_box">
				<textarea name="" id="" cols="30" rows="10"></textarea> 
			</div> 
		</div>`;
	} 

	$('.sk_append_data_three').append(appendData);

	return false;
});

var count = 2;

$(document).on('click','.details_append_btn',function(){

	count = count + 1;

	if(count  < 6){
		var appendData = ` <div class="vaccine_details_item">
		<div class="vaccine_list_number">
			<p>`+count+`</p>
		</div>
		<div class="vaccine_details_input_area">
                                                    <div class="input_box max_input">
                                                        <input type="text" placeholder="Vaccine ( Brand Name)">
                                                    </div>
                                                    <div class="input_box">
                                                        <input type="text" placeholder="Dose No">
                                                    </div>
                                                    <div class="input_box">
                                                        <input type="text" placeholder="Batch No">
                                                    </div>
                                                    <div class="input_box">
                                                        <input type="text" placeholder="Date Given">
                                                    </div>
                                                    <div class="input_box">
                                                        <input type="text" placeholder="Time">
                                                    </div>
                                                    <div class="input_box">
                                                        <input type="text" placeholder="Route">
                                                    </div>
                                                    <div class="input_box">
                                                        <input type="text" placeholder="Site">
                                                    </div>
                                                </div>
	</div>`;
	}


	$('.append_data_details').append(appendData);

	return false;
});