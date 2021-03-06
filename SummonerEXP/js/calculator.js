
	/* 
		function calculate(): Just to calculate total EXP needed from the current level to reach goal level.
		
		The EXP formula for each level is pretty simple:
		BASE_EXP + (n - BASE_LV) * (NEXT_EXP - BASE_EXP) + ((n - (BASE_LV + 1) + 1) * (n - (BASE_LV + 1)) / 2) * INCREMENT
		Level 51-58 follows the same constants.
		Level 58-255 follows a different constants.
		Level 255 and above (until when, I didn't know) follows an even different constants.
			
		To calculate from level 51 to level 58 you just need the same set of constants (NEXT_EXP, BASE_EXP, INCREMENT, and BASE_LV). But to calculate beyond level 58 you need a different constants (a new NEXT_EXP, BASE_EXP, INCREMENT, and BASE_LV) otherwise the result will be incorrect. The same goes with level 58 to level 255. Beyond level 255, the calculation uses a new and different constants than before.
	*/

	function calculate() {
			
		var currentLevel = parseInt(document.getElementById("currentLevel").value);
		var currentEXP = parseInt(document.getElementById("currentEXP").value);
		var goalLevel = parseInt(document.getElementById("goalLevel").value);
		var questEXP = parseInt(document.getElementById("questEXP").value);
			
		if (currentLevel != "0" && goalLevel != "0" && questEXP != "0") {		
			
			if (goalLevel < currentLevel) {
				document.getElementById("result").innerHTML = "Invalid: You can't level down.";
			}
			else if (currentLevel < 51 || currentLevel > 998 || goalLevel < 51 || goalLevel > 999) {
				document.getElementById("result").innerHTML = "Can only calculate from level 51 to 999.";
			}		
			else {
				
				var above499EXP = [860883 , 864397 , 867415 , 869935 , 872208 , 874232 , 876007 , 877531 , 879007 , 880435 , 881815 , 883146 , 884429 , 885688 , 886924 , 888137 , 889326 , 890492 , 891634 , 892752 , 893846 , 894916 , 895962 , 896984 , 897982 , 898955 , 899904 , 900828 , 901727 , 902602 , 903452 , 904277 , 905077 , 905851 , 906600 , 907324 , 908022 , 908695 , 909342 , 909963 , 910558 , 911127 , 911670 , 912209 , 912743 , 913273 , 913798 , 914319 , 914835 , 915347 , 915854 , 916356 , 916854 , 917347 , 917835 , 918319 , 918798 , 919272 , 919742 , 920207 , 920667 , 921122 , 921572 , 922018 , 922459 , 922895 , 923326 , 923752 , 924173 , 924589 , 925000 , 925406 , 925807 , 926203 , 926594 , 926980 , 927361 , 927737 , 928108 , 928473 , 928833 , 929188 , 929538 , 929883 , 930222 , 930556 , 930885 , 931208 , 931526 , 931839 , 932146 , 932448 , 932745 , 933041 , 933337 , 933633 , 933929 , 934225 , 934521 , 934817 , 935113 , 935409 , 935704 , 935999 , 936294 , 936589 , 936884 , 937179 , 937474 , 937769 , 938064 , 938358 , 938652 , 938946 , 939240 , 939534 , 939828 , 940122 , 940415 , 940708 , 941001 , 941294 , 941587 , 941880 , 942173 , 942465 , 942757 , 943049 , 943341 , 943633 , 943925 , 944216 , 944507 , 944798 , 945089 , 945380 , 945670 , 945960 , 946250 , 946540 , 946830 , 947120 , 947409 , 947698 , 947987 , 948276 , 948565 , 948853 , 949141 , 949429 , 949717 , 950005 , 950292 , 950579 , 950866 , 951153 , 951439 , 951725 , 952011 , 952297 , 952583 , 952868 , 953153 , 953438 , 953723 , 954007 , 954291 , 954575 , 954859 , 955142 , 955425 , 955708 , 955991 , 956273 , 956555 , 956837 , 957119 , 957400 , 957681 , 957962 , 958243 , 958523 , 958803 , 959083 , 959362 , 959641 , 959920 , 960199 , 960477 , 960755 , 961033 , 961310 , 961587 , 961864 , 962141 , 962417 , 962693 , 962969 , 963244 , 963519 , 963794 , 964068 , 964342 , 964616 , 964890 , 965163 , 965436 , 965709 , 965981 , 966253 , 966525 , 966796 , 967067 , 967338 , 967608 , 967878 , 968148 , 968417 , 968686 , 968955 , 969223 , 969491 , 969759 , 970026 , 970293 , 970559 , 970825 , 971091 , 971356 , 971621 , 971886 , 972150 , 972414 , 972678 , 972941 , 973204 , 973466 , 973728 , 973990 , 974251 , 974512 , 974772 , 975032 , 975292 , 975551 , 975810 , 976068 , 976326 , 976584 , 976841 , 977098 , 977354 , 977610 , 977866 , 978121 , 978376 , 978630 , 978884 , 979138 , 979391 , 979644 , 979896 , 980148 , 980399 , 980650 , 980900 , 981150 , 981400 , 981649 , 981898 , 982146 , 982394 , 982641 , 982888 , 983134 , 983380 , 983626 , 983871 , 984116 , 984360 , 984604 , 984847 , 985090 , 985332 , 985574 , 985815 , 986056 , 986296 , 986536 , 986775 , 987014 , 987252 , 987490 , 987727 , 987964 , 988200 , 988436 , 988671 , 988906 , 989140 , 989374 , 989607 , 989840 , 990072 , 990304 , 990535 , 990766 , 990996 , 991226 , 991455 , 991684 , 991912 , 992140 , 992367 , 992594 , 992820 , 993045 , 993270 , 993494 , 993718 , 993941 , 994164 , 994386 , 994608 , 994829 , 995050 , 995270 , 995489 , 995708 , 995926 , 996144 , 996361 , 996578 , 996794 , 997009 , 997224 , 997438 , 997652 , 997865 , 998078 , 998290 , 998501 , 998712 , 998922 , 999132 , 999341 , 999549 , 999757 , 999964 , 1000171 , 1000377 , 1000582 , 1000787 , 1000991 , 1001194 , 1001397 , 1001599 , 1001801 , 1002002 , 1002202 , 1002402 , 1002601 , 1002799 , 1002997 , 1003194 , 1003391 , 1003587 , 1003782 , 1003977 , 1004171 , 1004364 , 1004557 , 1004749 , 1004940 , 1005131 , 1005321 , 1005510 , 1005699 , 1005887 , 1006074 , 1006261 , 1006447 , 1006632 , 1006817 , 1007001 , 1007184 , 1007367 , 1007549 , 1007730 , 1007911 , 1008091 , 1008270 , 1008449 , 1008627 , 1008804 , 1008981 , 1009157 , 1009332 , 1009506 , 1009680 , 1009853 , 1010025 , 1010197 , 1010368 , 1010538 , 1010707 , 1010876 , 1011044 , 1011211 , 1011378 , 1011544 , 1011709 , 1011873 , 1012037 , 1012200 , 1012362 , 1012523 , 1012684 , 1012844 , 1013003 , 1013161 , 1013319 , 1013476 , 1013632 , 1013787 , 1013942 , 1014096 , 1014249 , 1014401 , 1014553 , 1014704 , 1014854 , 1015003 , 1015152 , 1015300 , 1015447 , 1015593 , 1015738 , 1015883 , 1016027 , 1016170 , 1016312 , 1016453 , 1016594 , 1016734 , 1016873 , 1017011 , 1017148 , 1017285 , 1017421 , 1017556 , 1017690 , 1017823 , 1017956 , 1018088 , 1018219 , 1018349 , 1018478 , 1018607 , 1018735 , 1018862 , 1018988 , 1019113 , 1019237 , 1019361 , 1019484 , 1019606 , 1019727 , 1019847 , 1019966 , 1020084 , 1020202 , 1020319 , 1020435 , 1020550 , 1020664 , 1020777 , 1020889 , 1021001 , 1021112 , 1021222 , 1021331 , 1021439 , 1021546 , 1021652 , 1021758 , 1021863 , 1021967 , 1022070 , 1022172 , 1022273 , 1022373 , 1022472 , 1022570 , 1022668 , 1022765 , 1022861 , 1022956 , 1023050 , 1023143];
				
				function f(n) {
					if (n >= 51 && n < 58) {
						BASE_EXP = 19958;
						BASE_LV = 51;
						NEXT_EXP = 20636;
						INCREMENT = 6
						return BASE_EXP + (n - BASE_LV) * (NEXT_EXP - BASE_EXP) + ((n - (BASE_LV + 1) + 1) * (n - (BASE_LV + 1)) / 2) * INCREMENT
					}
					else if (n >= 58 && n < 255) {
						BASE_EXP = 24830
						BASE_LV = 58
						NEXT_EXP = 25580
						INCREMENT = 2
						return BASE_EXP + (n - BASE_LV) * (NEXT_EXP - BASE_EXP) + ((n - (BASE_LV + 1) + 1) * (n - (BASE_LV + 1)) / 2) * INCREMENT
					}
					else if (n >= 255 && n < 300){
						BASE_EXP = 212713
						BASE_LV = 255
						NEXT_EXP = 214114
						INCREMENT = 3
						return BASE_EXP + (n - BASE_LV) * (NEXT_EXP - BASE_EXP) + ((n - (BASE_LV + 1) + 1) * (n - (BASE_LV + 1)) / 2) * INCREMENT
					}
					else if (n >= 300 && n < 350) {
						BASE_EXP = 279029 
						BASE_LV = 300
						NEXT_EXP = 280867 
						INCREMENT = 4
						return BASE_EXP + (n - BASE_LV) * (NEXT_EXP - BASE_EXP) + ((n - (BASE_LV + 1) + 1) * (n - (BASE_LV + 1)) / 2) * INCREMENT
					}
					else if (n >= 350 && n < 400) {
						BASE_EXP = 376180 
						BASE_LV = 350
						NEXT_EXP = 378570 
						INCREMENT = 5
						return BASE_EXP + (n - BASE_LV) * (NEXT_EXP - BASE_EXP) + ((n - (BASE_LV + 1) + 1) * (n - (BASE_LV + 1)) / 2) * INCREMENT
					}
					else if (n >= 400 && n < 450) {
						BASE_EXP = 502206 
						BASE_LV = 400
						NEXT_EXP = 505248 
						INCREMENT = 6
						return BASE_EXP + (n - BASE_LV) * (NEXT_EXP - BASE_EXP) + ((n - (BASE_LV + 1) + 1) * (n - (BASE_LV + 1)) / 2) * INCREMENT
					}
					else if (n >= 450 && n < 500) {
						BASE_EXP = 662107 
						BASE_LV = 450
						NEXT_EXP = 665901 
						INCREMENT = 7
						return BASE_EXP + (n - BASE_LV) * (NEXT_EXP - BASE_EXP) + ((n - (BASE_LV + 1) + 1) * (n - (BASE_LV + 1)) / 2) * INCREMENT
					}
					else 
						return above499EXP[n-500];
				}
				
				goalEXP = 0;
				
				for (i = currentLevel; i < goalLevel; i++) {
					goalEXP = goalEXP + f(i);
				}			
				
				if (currentEXP == 0) {
					questCount = (goalEXP % questEXP == 0) ? Math.floor(goalEXP / questEXP) : Math.floor(goalEXP / questEXP)+ 1;
				}
				else {
					goalEXP = goalEXP - currentEXP;
					questCount = (goalEXP % questEXP == 0) ? Math.floor(goalEXP / questEXP) : Math.floor(goalEXP / questEXP)+ 1;
				}
                
                document.getElementById("result").innerHTML = "You have to run the quest<h3>" + questCount + "</h3>times " + " to reach level " + goalLevel + ".";
				
				document.getElementById("showEXPListButton").style.visibility = "visible";
				document.getElementById("nextStep").style.visibility = "visible";
				document.getElementById("goalEXPValue").value = goalEXP;
			}
		}
		
	}

	function showEXPTable() {
		var above499EXP = [860883 , 864397 , 867415 , 869935 , 872208 , 874232 , 876007 , 877531 , 879007 , 880435 , 881815 , 883146 , 884429 , 885688 , 886924 , 888137 , 889326 , 890492 , 891634 , 892752 , 893846 , 894916 , 895962 , 896984 , 897982 , 898955 , 899904 , 900828 , 901727 , 902602 , 903452 , 904277 , 905077 , 905851 , 906600 , 907324 , 908022 , 908695 , 909342 , 909963 , 910558 , 911127 , 911670 , 912209 , 912743 , 913273 , 913798 , 914319 , 914835 , 915347 , 915854 , 916356 , 916854 , 917347 , 917835 , 918319 , 918798 , 919272 , 919742 , 920207 , 920667 , 921122 , 921572 , 922018 , 922459 , 922895 , 923326 , 923752 , 924173 , 924589 , 925000 , 925406 , 925807 , 926203 , 926594 , 926980 , 927361 , 927737 , 928108 , 928473 , 928833 , 929188 , 929538 , 929883 , 930222 , 930556 , 930885 , 931208 , 931526 , 931839 , 932146 , 932448 , 932745 , 933041 , 933337 , 933633 , 933929 , 934225 , 934521 , 934817 , 935113 , 935409 , 935704 , 935999 , 936294 , 936589 , 936884 , 937179 , 937474 , 937769 , 938064 , 938358 , 938652 , 938946 , 939240 , 939534 , 939828 , 940122 , 940415 , 940708 , 941001 , 941294 , 941587 , 941880 , 942173 , 942465 , 942757 , 943049 , 943341 , 943633 , 943925 , 944216 , 944507 , 944798 , 945089 , 945380 , 945670 , 945960 , 946250 , 946540 , 946830 , 947120 , 947409 , 947698 , 947987 , 948276 , 948565 , 948853 , 949141 , 949429 , 949717 , 950005 , 950292 , 950579 , 950866 , 951153 , 951439 , 951725 , 952011 , 952297 , 952583 , 952868 , 953153 , 953438 , 953723 , 954007 , 954291 , 954575 , 954859 , 955142 , 955425 , 955708 , 955991 , 956273 , 956555 , 956837 , 957119 , 957400 , 957681 , 957962 , 958243 , 958523 , 958803 , 959083 , 959362 , 959641 , 959920 , 960199 , 960477 , 960755 , 961033 , 961310 , 961587 , 961864 , 962141 , 962417 , 962693 , 962969 , 963244 , 963519 , 963794 , 964068 , 964342 , 964616 , 964890 , 965163 , 965436 , 965709 , 965981 , 966253 , 966525 , 966796 , 967067 , 967338 , 967608 , 967878 , 968148 , 968417 , 968686 , 968955 , 969223 , 969491 , 969759 , 970026 , 970293 , 970559 , 970825 , 971091 , 971356 , 971621 , 971886 , 972150 , 972414 , 972678 , 972941 , 973204 , 973466 , 973728 , 973990 , 974251 , 974512 , 974772 , 975032 , 975292 , 975551 , 975810 , 976068 , 976326 , 976584 , 976841 , 977098 , 977354 , 977610 , 977866 , 978121 , 978376 , 978630 , 978884 , 979138 , 979391 , 979644 , 979896 , 980148 , 980399 , 980650 , 980900 , 981150 , 981400 , 981649 , 981898 , 982146 , 982394 , 982641 , 982888 , 983134 , 983380 , 983626 , 983871 , 984116 , 984360 , 984604 , 984847 , 985090 , 985332 , 985574 , 985815 , 986056 , 986296 , 986536 , 986775 , 987014 , 987252 , 987490 , 987727 , 987964 , 988200 , 988436 , 988671 , 988906 , 989140 , 989374 , 989607 , 989840 , 990072 , 990304 , 990535 , 990766 , 990996 , 991226 , 991455 , 991684 , 991912 , 992140 , 992367 , 992594 , 992820 , 993045 , 993270 , 993494 , 993718 , 993941 , 994164 , 994386 , 994608 , 994829 , 995050 , 995270 , 995489 , 995708 , 995926 , 996144 , 996361 , 996578 , 996794 , 997009 , 997224 , 997438 , 997652 , 997865 , 998078 , 998290 , 998501 , 998712 , 998922 , 999132 , 999341 , 999549 , 999757 , 999964 , 1000171 , 1000377 , 1000582 , 1000787 , 1000991 , 1001194 , 1001397 , 1001599 , 1001801 , 1002002 , 1002202 , 1002402 , 1002601 , 1002799 , 1002997 , 1003194 , 1003391 , 1003587 , 1003782 , 1003977 , 1004171 , 1004364 , 1004557 , 1004749 , 1004940 , 1005131 , 1005321 , 1005510 , 1005699 , 1005887 , 1006074 , 1006261 , 1006447 , 1006632 , 1006817 , 1007001 , 1007184 , 1007367 , 1007549 , 1007730 , 1007911 , 1008091 , 1008270 , 1008449 , 1008627 , 1008804 , 1008981 , 1009157 , 1009332 , 1009506 , 1009680 , 1009853 , 1010025 , 1010197 , 1010368 , 1010538 , 1010707 , 1010876 , 1011044 , 1011211 , 1011378 , 1011544 , 1011709 , 1011873 , 1012037 , 1012200 , 1012362 , 1012523 , 1012684 , 1012844 , 1013003 , 1013161 , 1013319 , 1013476 , 1013632 , 1013787 , 1013942 , 1014096 , 1014249 , 1014401 , 1014553 , 1014704 , 1014854 , 1015003 , 1015152 , 1015300 , 1015447 , 1015593 , 1015738 , 1015883 , 1016027 , 1016170 , 1016312 , 1016453 , 1016594 , 1016734 , 1016873 , 1017011 , 1017148 , 1017285 , 1017421 , 1017556 , 1017690 , 1017823 , 1017956 , 1018088 , 1018219 , 1018349 , 1018478 , 1018607 , 1018735 , 1018862 , 1018988 , 1019113 , 1019237 , 1019361 , 1019484 , 1019606 , 1019727 , 1019847 , 1019966 , 1020084 , 1020202 , 1020319 , 1020435 , 1020550 , 1020664 , 1020777 , 1020889 , 1021001 , 1021112 , 1021222 , 1021331 , 1021439 , 1021546 , 1021652 , 1021758 , 1021863 , 1021967 , 1022070 , 1022172 , 1022273 , 1022373 , 1022472 , 1022570 , 1022668 , 1022765 , 1022861 , 1022956 , 1023050 , 1023143];
				
		function f(n) {
			if (n >= 51 && n < 58) {
				BASE_EXP = 19958;
				BASE_LV = 51;
				NEXT_EXP = 20636;
				INCREMENT = 6
				return BASE_EXP + (n - BASE_LV) * (NEXT_EXP - BASE_EXP) + ((n - (BASE_LV + 1) + 1) * (n - (BASE_LV + 1)) / 2) * INCREMENT
			}
			else if (n >= 58 && n < 255) {
				BASE_EXP = 24830
				BASE_LV = 58
				NEXT_EXP = 25580
				INCREMENT = 2
				return BASE_EXP + (n - BASE_LV) * (NEXT_EXP - BASE_EXP) + ((n - (BASE_LV + 1) + 1) * (n - (BASE_LV + 1)) / 2) * INCREMENT
			}
			else if (n >= 255 && n < 300){
				BASE_EXP = 212713
				BASE_LV = 255
				NEXT_EXP = 214114
				INCREMENT = 3
				return BASE_EXP + (n - BASE_LV) * (NEXT_EXP - BASE_EXP) + ((n - (BASE_LV + 1) + 1) * (n - (BASE_LV + 1)) / 2) * INCREMENT
			}
			else if (n >= 300 && n < 350) {
				BASE_EXP = 279029 
				BASE_LV = 300
				NEXT_EXP = 280867 
				INCREMENT = 4
				return BASE_EXP + (n - BASE_LV) * (NEXT_EXP - BASE_EXP) + ((n - (BASE_LV + 1) + 1) * (n - (BASE_LV + 1)) / 2) * INCREMENT
			}
			else if (n >= 350 && n < 400) {
				BASE_EXP = 376180 
				BASE_LV = 350
				NEXT_EXP = 378570 
				INCREMENT = 5
				return BASE_EXP + (n - BASE_LV) * (NEXT_EXP - BASE_EXP) + ((n - (BASE_LV + 1) + 1) * (n - (BASE_LV + 1)) / 2) * INCREMENT
			}
			else if (n >= 400 && n < 450) {
				BASE_EXP = 502206 
				BASE_LV = 400
				NEXT_EXP = 505248 
				INCREMENT = 6
				return BASE_EXP + (n - BASE_LV) * (NEXT_EXP - BASE_EXP) + ((n - (BASE_LV + 1) + 1) * (n - (BASE_LV + 1)) / 2) * INCREMENT
			}
			else if (n >= 450 && n < 500) {
				BASE_EXP = 662107 
				BASE_LV = 450
				NEXT_EXP = 665901 
				INCREMENT = 7
				return BASE_EXP + (n - BASE_LV) * (NEXT_EXP - BASE_EXP) + ((n - (BASE_LV + 1) + 1) * (n - (BASE_LV + 1)) / 2) * INCREMENT
			}
			else 
				return above499EXP[n-500];
		}
		
		resultText = "";
		totalEXP = 0;
		
		var currentLevel = parseInt(document.getElementById("currentLevel").value);		
		var goalLevel = parseInt(document.getElementById("goalLevel").value);
		
		for (i = currentLevel; i < goalLevel; i++) {
			resultText = resultText + "Level " + i + ": " + f(i) + " EXP required to level up." + "<br>";
			totalEXP = parseInt(totalEXP) + f(i);
		}
		
		document.getElementById("EXPTable").innerHTML = resultText;
		document.getElementById("showEXPListButton").value = "Hide Details";
		document.getElementById("showEXPListButton").onclick = function() { hideEXPTable(); };
	}

	function hideEXPTable() {
		document.getElementById("EXPTable").innerHTML = "";
		document.getElementById("showEXPListButton").value = "Show Details";
		document.getElementById("showEXPListButton").onclick = function() { showEXPTable(); };
	}

	function calculateTime() {
	
		var currentLevel = parseInt(document.getElementById("currentLevel").value);
		var currentEXP = parseInt(document.getElementById("currentEXP").value);
		var goalLevel = parseInt(document.getElementById("goalLevel").value);
		var questEXP = parseInt(document.getElementById("questEXP").value);
		var questEnergy = parseInt(document.getElementById("questEnergy").value);
		var questTime = parseInt(document.getElementById("questTime").value);
	
		var above499EXP = [860883 , 864397 , 867415 , 869935 , 872208 , 874232 , 876007 , 877531 , 879007 , 880435 , 881815 , 883146 , 884429 , 885688 , 886924 , 888137 , 889326 , 890492 , 891634 , 892752 , 893846 , 894916 , 895962 , 896984 , 897982 , 898955 , 899904 , 900828 , 901727 , 902602 , 903452 , 904277 , 905077 , 905851 , 906600 , 907324 , 908022 , 908695 , 909342 , 909963 , 910558 , 911127 , 911670 , 912209 , 912743 , 913273 , 913798 , 914319 , 914835 , 915347 , 915854 , 916356 , 916854 , 917347 , 917835 , 918319 , 918798 , 919272 , 919742 , 920207 , 920667 , 921122 , 921572 , 922018 , 922459 , 922895 , 923326 , 923752 , 924173 , 924589 , 925000 , 925406 , 925807 , 926203 , 926594 , 926980 , 927361 , 927737 , 928108 , 928473 , 928833 , 929188 , 929538 , 929883 , 930222 , 930556 , 930885 , 931208 , 931526 , 931839 , 932146 , 932448 , 932745 , 933041 , 933337 , 933633 , 933929 , 934225 , 934521 , 934817 , 935113 , 935409 , 935704 , 935999 , 936294 , 936589 , 936884 , 937179 , 937474 , 937769 , 938064 , 938358 , 938652 , 938946 , 939240 , 939534 , 939828 , 940122 , 940415 , 940708 , 941001 , 941294 , 941587 , 941880 , 942173 , 942465 , 942757 , 943049 , 943341 , 943633 , 943925 , 944216 , 944507 , 944798 , 945089 , 945380 , 945670 , 945960 , 946250 , 946540 , 946830 , 947120 , 947409 , 947698 , 947987 , 948276 , 948565 , 948853 , 949141 , 949429 , 949717 , 950005 , 950292 , 950579 , 950866 , 951153 , 951439 , 951725 , 952011 , 952297 , 952583 , 952868 , 953153 , 953438 , 953723 , 954007 , 954291 , 954575 , 954859 , 955142 , 955425 , 955708 , 955991 , 956273 , 956555 , 956837 , 957119 , 957400 , 957681 , 957962 , 958243 , 958523 , 958803 , 959083 , 959362 , 959641 , 959920 , 960199 , 960477 , 960755 , 961033 , 961310 , 961587 , 961864 , 962141 , 962417 , 962693 , 962969 , 963244 , 963519 , 963794 , 964068 , 964342 , 964616 , 964890 , 965163 , 965436 , 965709 , 965981 , 966253 , 966525 , 966796 , 967067 , 967338 , 967608 , 967878 , 968148 , 968417 , 968686 , 968955 , 969223 , 969491 , 969759 , 970026 , 970293 , 970559 , 970825 , 971091 , 971356 , 971621 , 971886 , 972150 , 972414 , 972678 , 972941 , 973204 , 973466 , 973728 , 973990 , 974251 , 974512 , 974772 , 975032 , 975292 , 975551 , 975810 , 976068 , 976326 , 976584 , 976841 , 977098 , 977354 , 977610 , 977866 , 978121 , 978376 , 978630 , 978884 , 979138 , 979391 , 979644 , 979896 , 980148 , 980399 , 980650 , 980900 , 981150 , 981400 , 981649 , 981898 , 982146 , 982394 , 982641 , 982888 , 983134 , 983380 , 983626 , 983871 , 984116 , 984360 , 984604 , 984847 , 985090 , 985332 , 985574 , 985815 , 986056 , 986296 , 986536 , 986775 , 987014 , 987252 , 987490 , 987727 , 987964 , 988200 , 988436 , 988671 , 988906 , 989140 , 989374 , 989607 , 989840 , 990072 , 990304 , 990535 , 990766 , 990996 , 991226 , 991455 , 991684 , 991912 , 992140 , 992367 , 992594 , 992820 , 993045 , 993270 , 993494 , 993718 , 993941 , 994164 , 994386 , 994608 , 994829 , 995050 , 995270 , 995489 , 995708 , 995926 , 996144 , 996361 , 996578 , 996794 , 997009 , 997224 , 997438 , 997652 , 997865 , 998078 , 998290 , 998501 , 998712 , 998922 , 999132 , 999341 , 999549 , 999757 , 999964 , 1000171 , 1000377 , 1000582 , 1000787 , 1000991 , 1001194 , 1001397 , 1001599 , 1001801 , 1002002 , 1002202 , 1002402 , 1002601 , 1002799 , 1002997 , 1003194 , 1003391 , 1003587 , 1003782 , 1003977 , 1004171 , 1004364 , 1004557 , 1004749 , 1004940 , 1005131 , 1005321 , 1005510 , 1005699 , 1005887 , 1006074 , 1006261 , 1006447 , 1006632 , 1006817 , 1007001 , 1007184 , 1007367 , 1007549 , 1007730 , 1007911 , 1008091 , 1008270 , 1008449 , 1008627 , 1008804 , 1008981 , 1009157 , 1009332 , 1009506 , 1009680 , 1009853 , 1010025 , 1010197 , 1010368 , 1010538 , 1010707 , 1010876 , 1011044 , 1011211 , 1011378 , 1011544 , 1011709 , 1011873 , 1012037 , 1012200 , 1012362 , 1012523 , 1012684 , 1012844 , 1013003 , 1013161 , 1013319 , 1013476 , 1013632 , 1013787 , 1013942 , 1014096 , 1014249 , 1014401 , 1014553 , 1014704 , 1014854 , 1015003 , 1015152 , 1015300 , 1015447 , 1015593 , 1015738 , 1015883 , 1016027 , 1016170 , 1016312 , 1016453 , 1016594 , 1016734 , 1016873 , 1017011 , 1017148 , 1017285 , 1017421 , 1017556 , 1017690 , 1017823 , 1017956 , 1018088 , 1018219 , 1018349 , 1018478 , 1018607 , 1018735 , 1018862 , 1018988 , 1019113 , 1019237 , 1019361 , 1019484 , 1019606 , 1019727 , 1019847 , 1019966 , 1020084 , 1020202 , 1020319 , 1020435 , 1020550 , 1020664 , 1020777 , 1020889 , 1021001 , 1021112 , 1021222 , 1021331 , 1021439 , 1021546 , 1021652 , 1021758 , 1021863 , 1021967 , 1022070 , 1022172 , 1022273 , 1022373 , 1022472 , 1022570 , 1022668 , 1022765 , 1022861 , 1022956 , 1023050 , 1023143];
				
		function f(n) {
			if (n >= 51 && n < 58) {
				BASE_EXP = 19958;
				BASE_LV = 51;
				NEXT_EXP = 20636;
				INCREMENT = 6
				return BASE_EXP + (n - BASE_LV) * (NEXT_EXP - BASE_EXP) + ((n - (BASE_LV + 1) + 1) * (n - (BASE_LV + 1)) / 2) * INCREMENT
			}
			else if (n >= 58 && n < 255) {
				BASE_EXP = 24830
				BASE_LV = 58
				NEXT_EXP = 25580
				INCREMENT = 2
				return BASE_EXP + (n - BASE_LV) * (NEXT_EXP - BASE_EXP) + ((n - (BASE_LV + 1) + 1) * (n - (BASE_LV + 1)) / 2) * INCREMENT
			}
			else if (n >= 255 && n < 300){
				BASE_EXP = 212713
				BASE_LV = 255
				NEXT_EXP = 214114
				INCREMENT = 3
				return BASE_EXP + (n - BASE_LV) * (NEXT_EXP - BASE_EXP) + ((n - (BASE_LV + 1) + 1) * (n - (BASE_LV + 1)) / 2) * INCREMENT
			}
			else if (n >= 300 && n < 350) {
				BASE_EXP = 279029 
				BASE_LV = 300
				NEXT_EXP = 280867 
				INCREMENT = 4
				return BASE_EXP + (n - BASE_LV) * (NEXT_EXP - BASE_EXP) + ((n - (BASE_LV + 1) + 1) * (n - (BASE_LV + 1)) / 2) * INCREMENT
			}
			else if (n >= 350 && n < 400) {
				BASE_EXP = 376180 
				BASE_LV = 350
				NEXT_EXP = 378570 
				INCREMENT = 5
				return BASE_EXP + (n - BASE_LV) * (NEXT_EXP - BASE_EXP) + ((n - (BASE_LV + 1) + 1) * (n - (BASE_LV + 1)) / 2) * INCREMENT
			}
			else if (n >= 400 && n < 450) {
				BASE_EXP = 502206 
				BASE_LV = 400
				NEXT_EXP = 505248 
				INCREMENT = 6
				return BASE_EXP + (n - BASE_LV) * (NEXT_EXP - BASE_EXP) + ((n - (BASE_LV + 1) + 1) * (n - (BASE_LV + 1)) / 2) * INCREMENT
			}
			else if (n >= 450 && n < 500) {
				BASE_EXP = 662107 
				BASE_LV = 450
				NEXT_EXP = 665901 
				INCREMENT = 7
				return BASE_EXP + (n - BASE_LV) * (NEXT_EXP - BASE_EXP) + ((n - (BASE_LV + 1) + 1) * (n - (BASE_LV + 1)) / 2) * INCREMENT
			}
			else 
				return above499EXP[n-500];
		}
				
		function g(n) {
			if (n >= 51 && n < 83)
				return 52 + Math.floor((n - 51 + 1) / 3) + 5 * Math.floor((n - 46 + 1) / 10)
			if (n >= 83 && n < 101)
				return 78 + Math.floor((n - 83) / 2) + 5 * Math.floor((n - 83 + 8) / 10)
			if (n >= 101 && n < 152)
				return 97 + Math.floor((n - 101) / 3)
			if (n >= 152 && n < 251)
				return 115 + 2 * Math.floor((n - 152) / 3)
			if (n >= 251 && n < 501)
				return 180 + Math.floor((n - 251) / 3)
			else
				return 182 + Math.floor((n - 251) / 3)
		}		
		
		totalTime = 0;
		
		resultTextEnergy = "";
		
		for (i = currentLevel; i < goalLevel; i++) {		
			
			neededEXP                  = f(i) - currentEXP;		
			numberOfTimes              = Math.floor(neededEXP/questEXP) + 1;
			howManyQuestWithFullEnergy = Math.floor(g(i) / questEnergy);
			cutEXP                     = (questEXP * numberOfTimes) - neededEXP;
			
			runningQuestTime = 0;
			waitEnergyTime = 0;
			
			if (numberOfTimes - howManyQuestWithFullEnergy > 0) {
				
				waitEnergyTime = ((numberOfTimes - howManyQuestWithFullEnergy) * questEnergy - (g(i) % questEnergy)) * 3;
				
				waitTime = ((numberOfTimes - howManyQuestWithFullEnergy) * questEnergy - (g(i) % questEnergy)) * 3 - howManyQuestWithFullEnergy * questTime;
				
				if (waitTime > 0) {
					resultTextEnergy = resultTextEnergy + "Level " + i + " : " + g(i) + " energy with current EXP: " + currentEXP + " --- EXP to level up: " + neededEXP + ". You need to run the quest " + numberOfTimes + " times to level up. You can run the quest " + howManyQuestWithFullEnergy + " times (will take you " + (howManyQuestWithFullEnergy * questTime) + " minutes) before you have to wait a total of " + waitTime + " minutes to do " + (numberOfTimes - howManyQuestWithFullEnergy) + " more.<br>";
				}
				else {
					waitEnergyTime = 0;
					runningQuestTime = numberOfTimes * questTime;
					
					resultTextEnergy = resultTextEnergy + "Level " + i + " : " + g(i) + " energy with current EXP: " + currentEXP + " --- EXP to level up: " + neededEXP + ". You need to run the quest " + numberOfTimes + " times. You can run the quest " + Math.floor(g(i) / questEnergy) + " times with that full energy (will take you " + (howManyQuestWithFullEnergy * questTime) + " minutes) and when you're done, you will have regenerated " + Math.floor((howManyQuestWithFullEnergy * questTime)/3) + " more energy to run the quest " + (numberOfTimes - howManyQuestWithFullEnergy) + " more times to level up.<br>";
				}
				
			}
			else {				
				runningQuestTime = numberOfTimes * questTime;	
				resultTextEnergy = resultTextEnergy + "Level " + i + " : " + g(i) + " energy with current EXP: " + currentEXP + " --- EXP to level up: " + neededEXP + ". You need to run the quest " + numberOfTimes + " times to level up.<br>";
			}
			
			totalTime = totalTime + runningQuestTime + waitEnergyTime;
			
			currentEXP = cutEXP;
		}				
				
		totalTimeText = "";
		
		if (totalTime >= 1440) {
			totalTimeText = Math.floor(totalTime/1440) + " day(s)";
			totalTime = totalTime % 1440;
			if (totalTime >= 60) {
				totalTimeText = totalTimeText + ", " + Math.floor(totalTime/60) + " hour(s)";
				totalTime = totalTime % 60;
				if (totalTime > 0) {
					totalTimeText = totalTimeText + ", " + totalTime + " minute(s)";
				}
			}				
		}
		else if (totalTime >= 60) {
			totalTimeText = Math.floor(totalTime/60) + " hour(s)";
			totalTime = totalTime % 60;
			if (totalTime > 0) {
				totalTimeText = totalTimeText + ", " + totalTime + " minute(s)";
			}
		}
		else {
			totalTimeText = totalTime + " minutes";
		}
		
		document.getElementById("resultEnergy").innerHTML = "About " + totalTimeText + "<br>";
		document.getElementById("resultEnergyDetails").innerHTML = resultTextEnergy;
	}