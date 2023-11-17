 
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


$(document).on('click','.sk_cst_radio',function(){
	var sk_val = ($(this).val());
	if(sk_val == 1){ 
		$('.custom_sk_one').fadeIn();
	} else{
		$('.custom_sk_one').fadeOut(); 
	}
});


$(document).on('click','.sk_cst_radio_two',function(){
	var sk_val2 = ($(this).val());
	if(sk_val2 == 1){ 
		$('.custom_sk_two').fadeIn();
	} else{
		$('.custom_sk_two').fadeOut(); 
	}
});

$(document).on('click','.sk_cst_radio_three',function(){
	var sk_val2 = ($(this).val());
	if(sk_val2 == 1){ 
		$('.custom_sk_three').fadeIn();
	} else{
		$('.custom_sk_three').fadeOut(); 
	}
});

$(document).on('click','.sk_cst_radio_four',function(){
	var sk_val2 = ($(this).val());
	if(sk_val2 == 1){ 
		$('.custom_sk_four').fadeIn();
	} else{
		$('.custom_sk_four').fadeOut(); 
	}
});

$(document).on('click','.provide_add_more',function(){
	
	var appendData = `<div class="sk_custom_group mb-3">
	<span>Please provide details of any medical history including details of previous vaccination reactions</span>
	<textarea name="" id="" cols="30" rows="10"></textarea> 
</div> `;

	$('.sk_app_data').append(appendData);

	return false;
});

$(document).on('click','.describe_btn',function(){
	
	var appendData = `<div class="sk_append_text_two mb-3">
	<span>Please describe the events, including timeline of occurrences:</span>
	<textarea name="" id="" cols="30" rows="10"></textarea>
</div>`;

	$('.sk_append_data_two').append(appendData);

	return false;
});

$(document).on('click','.medcate_about_btn',function(){
	
	var appendData = ` <div class="sk_append_text_three mb-3">
	<span>Please tell us about the medications and/or vaccines the person has had in the last 4 weeks.</span>
	<textarea name="" id="" cols="30" rows="10"></textarea>
</div>`;

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
			<input type="text" placeholder="Vaccine ( Brand Name)">
			<input type="text" placeholder="Dose No">
			<input type="text" placeholder="Batch No">
			<input type="text" placeholder="Date Given">
			<input type="text" placeholder="Time">
			<input type="text" placeholder="Route">
			<input type="text" placeholder="Site">
		</div>
	</div>`;
	}


	$('.append_data_details').append(appendData);

	return false;
});