'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var compressed = true;
var categories = [
	{
		id: "people",
		name: "Smileys & People",
		emojis: [
			"grinning",
			"smiley",
			"smile",
			"grin",
			"laughing",
			"sweat_smile",
			"rolling_on_the_floor_laughing",
			"joy",
			"slightly_smiling_face",
			"upside_down_face",
			"wink",
			"blush",
			"innocent",
			"smiling_face_with_3_hearts",
			"heart_eyes",
			"star-struck",
			"kissing_heart",
			"kissing",
			"relaxed",
			"kissing_closed_eyes",
			"kissing_smiling_eyes",
			"yum",
			"stuck_out_tongue",
			"stuck_out_tongue_winking_eye",
			"zany_face",
			"stuck_out_tongue_closed_eyes",
			"money_mouth_face",
			"hugging_face",
			"face_with_hand_over_mouth",
			"shushing_face",
			"thinking_face",
			"zipper_mouth_face",
			"face_with_raised_eyebrow",
			"neutral_face",
			"expressionless",
			"no_mouth",
			"smirk",
			"unamused",
			"face_with_rolling_eyes",
			"grimacing",
			"lying_face",
			"relieved",
			"pensive",
			"sleepy",
			"drooling_face",
			"sleeping",
			"mask",
			"face_with_thermometer",
			"face_with_head_bandage",
			"nauseated_face",
			"face_vomiting",
			"sneezing_face",
			"hot_face",
			"cold_face",
			"woozy_face",
			"dizzy_face",
			"exploding_head",
			"face_with_cowboy_hat",
			"partying_face",
			"sunglasses",
			"nerd_face",
			"face_with_monocle",
			"confused",
			"worried",
			"slightly_frowning_face",
			"white_frowning_face",
			"open_mouth",
			"hushed",
			"astonished",
			"flushed",
			"pleading_face",
			"frowning",
			"anguished",
			"fearful",
			"cold_sweat",
			"disappointed_relieved",
			"cry",
			"sob",
			"scream",
			"confounded",
			"persevere",
			"disappointed",
			"sweat",
			"weary",
			"tired_face",
			"yawning_face",
			"triumph",
			"rage",
			"angry",
			"face_with_symbols_on_mouth",
			"smiling_imp",
			"imp",
			"skull",
			"skull_and_crossbones",
			"hankey",
			"clown_face",
			"japanese_ogre",
			"japanese_goblin",
			"ghost",
			"alien",
			"space_invader",
			"robot_face",
			"smiley_cat",
			"smile_cat",
			"joy_cat",
			"heart_eyes_cat",
			"smirk_cat",
			"kissing_cat",
			"scream_cat",
			"crying_cat_face",
			"pouting_cat",
			"see_no_evil",
			"hear_no_evil",
			"speak_no_evil",
			"wave",
			"raised_back_of_hand",
			"raised_hand_with_fingers_splayed",
			"hand",
			"spock-hand",
			"ok_hand",
			"pinching_hand",
			"v",
			"crossed_fingers",
			"i_love_you_hand_sign",
			"the_horns",
			"call_me_hand",
			"point_left",
			"point_right",
			"point_up_2",
			"middle_finger",
			"point_down",
			"point_up",
			"+1",
			"-1",
			"fist",
			"facepunch",
			"left-facing_fist",
			"right-facing_fist",
			"clap",
			"raised_hands",
			"open_hands",
			"palms_up_together",
			"handshake",
			"pray",
			"writing_hand",
			"nail_care",
			"selfie",
			"muscle",
			"mechanical_arm",
			"mechanical_leg",
			"leg",
			"foot",
			"ear",
			"ear_with_hearing_aid",
			"nose",
			"brain",
			"tooth",
			"bone",
			"eyes",
			"eye",
			"tongue",
			"lips",
			"baby",
			"child",
			"boy",
			"girl",
			"adult",
			"person_with_blond_hair",
			"man",
			"bearded_person",
			"red_haired_man",
			"curly_haired_man",
			"white_haired_man",
			"bald_man",
			"woman",
			"red_haired_woman",
			"curly_haired_woman",
			"white_haired_woman",
			"bald_woman",
			"blond-haired-woman",
			"blond-haired-man",
			"older_adult",
			"older_man",
			"older_woman",
			"person_frowning",
			"man-frowning",
			"woman-frowning",
			"person_with_pouting_face",
			"man-pouting",
			"woman-pouting",
			"no_good",
			"man-gesturing-no",
			"woman-gesturing-no",
			"ok_woman",
			"man-gesturing-ok",
			"woman-gesturing-ok",
			"information_desk_person",
			"man-tipping-hand",
			"woman-tipping-hand",
			"raising_hand",
			"man-raising-hand",
			"woman-raising-hand",
			"deaf_person",
			"deaf_man",
			"deaf_woman",
			"bow",
			"man-bowing",
			"woman-bowing",
			"face_palm",
			"man-facepalming",
			"woman-facepalming",
			"shrug",
			"man-shrugging",
			"woman-shrugging",
			"male-doctor",
			"female-doctor",
			"male-student",
			"female-student",
			"male-teacher",
			"female-teacher",
			"male-judge",
			"female-judge",
			"male-farmer",
			"female-farmer",
			"male-cook",
			"female-cook",
			"male-mechanic",
			"female-mechanic",
			"male-factory-worker",
			"female-factory-worker",
			"male-office-worker",
			"female-office-worker",
			"male-scientist",
			"female-scientist",
			"male-technologist",
			"female-technologist",
			"male-singer",
			"female-singer",
			"male-artist",
			"female-artist",
			"male-pilot",
			"female-pilot",
			"male-astronaut",
			"female-astronaut",
			"male-firefighter",
			"female-firefighter",
			"cop",
			"male-police-officer",
			"female-police-officer",
			"sleuth_or_spy",
			"male-detective",
			"female-detective",
			"guardsman",
			"male-guard",
			"female-guard",
			"construction_worker",
			"male-construction-worker",
			"female-construction-worker",
			"prince",
			"princess",
			"man_with_turban",
			"man-wearing-turban",
			"woman-wearing-turban",
			"man_with_gua_pi_mao",
			"person_with_headscarf",
			"man_in_tuxedo",
			"bride_with_veil",
			"pregnant_woman",
			"breast-feeding",
			"angel",
			"santa",
			"mrs_claus",
			"superhero",
			"male_superhero",
			"female_superhero",
			"supervillain",
			"male_supervillain",
			"female_supervillain",
			"mage",
			"male_mage",
			"female_mage",
			"fairy",
			"male_fairy",
			"female_fairy",
			"vampire",
			"male_vampire",
			"female_vampire",
			"merperson",
			"merman",
			"mermaid",
			"elf",
			"male_elf",
			"female_elf",
			"genie",
			"male_genie",
			"female_genie",
			"zombie",
			"male_zombie",
			"female_zombie",
			"massage",
			"man-getting-massage",
			"woman-getting-massage",
			"haircut",
			"man-getting-haircut",
			"woman-getting-haircut",
			"walking",
			"man-walking",
			"woman-walking",
			"standing_person",
			"man_standing",
			"woman_standing",
			"kneeling_person",
			"man_kneeling",
			"woman_kneeling",
			"man_with_probing_cane",
			"woman_with_probing_cane",
			"man_in_motorized_wheelchair",
			"woman_in_motorized_wheelchair",
			"man_in_manual_wheelchair",
			"woman_in_manual_wheelchair",
			"runner",
			"man-running",
			"woman-running",
			"dancer",
			"man_dancing",
			"man_in_business_suit_levitating",
			"dancers",
			"man-with-bunny-ears-partying",
			"woman-with-bunny-ears-partying",
			"person_in_steamy_room",
			"man_in_steamy_room",
			"woman_in_steamy_room",
			"person_climbing",
			"man_climbing",
			"woman_climbing",
			"fencer",
			"horse_racing",
			"skier",
			"snowboarder",
			"golfer",
			"man-golfing",
			"woman-golfing",
			"surfer",
			"man-surfing",
			"woman-surfing",
			"rowboat",
			"man-rowing-boat",
			"woman-rowing-boat",
			"swimmer",
			"man-swimming",
			"woman-swimming",
			"person_with_ball",
			"man-bouncing-ball",
			"woman-bouncing-ball",
			"weight_lifter",
			"man-lifting-weights",
			"woman-lifting-weights",
			"bicyclist",
			"man-biking",
			"woman-biking",
			"mountain_bicyclist",
			"man-mountain-biking",
			"woman-mountain-biking",
			"person_doing_cartwheel",
			"man-cartwheeling",
			"woman-cartwheeling",
			"wrestlers",
			"man-wrestling",
			"woman-wrestling",
			"water_polo",
			"man-playing-water-polo",
			"woman-playing-water-polo",
			"handball",
			"man-playing-handball",
			"woman-playing-handball",
			"juggling",
			"man-juggling",
			"woman-juggling",
			"person_in_lotus_position",
			"man_in_lotus_position",
			"woman_in_lotus_position",
			"bath",
			"sleeping_accommodation",
			"people_holding_hands",
			"two_women_holding_hands",
			"couple",
			"two_men_holding_hands",
			"couplekiss",
			"woman-kiss-man",
			"man-kiss-man",
			"woman-kiss-woman",
			"couple_with_heart",
			"woman-heart-man",
			"man-heart-man",
			"woman-heart-woman",
			"family",
			"man-woman-boy",
			"man-woman-girl",
			"man-woman-girl-boy",
			"man-woman-boy-boy",
			"man-woman-girl-girl",
			"man-man-boy",
			"man-man-girl",
			"man-man-girl-boy",
			"man-man-boy-boy",
			"man-man-girl-girl",
			"woman-woman-boy",
			"woman-woman-girl",
			"woman-woman-girl-boy",
			"woman-woman-boy-boy",
			"woman-woman-girl-girl",
			"man-boy",
			"man-boy-boy",
			"man-girl",
			"man-girl-boy",
			"man-girl-girl",
			"woman-boy",
			"woman-boy-boy",
			"woman-girl",
			"woman-girl-boy",
			"woman-girl-girl",
			"speaking_head_in_silhouette",
			"bust_in_silhouette",
			"busts_in_silhouette",
			"footprints",
			"kiss",
			"love_letter",
			"cupid",
			"gift_heart",
			"sparkling_heart",
			"heartpulse",
			"heartbeat",
			"revolving_hearts",
			"two_hearts",
			"heart_decoration",
			"heavy_heart_exclamation_mark_ornament",
			"broken_heart",
			"heart",
			"orange_heart",
			"yellow_heart",
			"green_heart",
			"blue_heart",
			"purple_heart",
			"brown_heart",
			"black_heart",
			"white_heart",
			"100",
			"anger",
			"boom",
			"dizzy",
			"sweat_drops",
			"dash",
			"hole",
			"bomb",
			"speech_balloon",
			"eye-in-speech-bubble",
			"left_speech_bubble",
			"right_anger_bubble",
			"thought_balloon",
			"zzz"
		]
	},
	{
		id: "nature",
		name: "Animals & Nature",
		emojis: [
			"monkey_face",
			"monkey",
			"gorilla",
			"orangutan",
			"dog",
			"dog2",
			"guide_dog",
			"service_dog",
			"poodle",
			"wolf",
			"fox_face",
			"raccoon",
			"cat",
			"cat2",
			"lion_face",
			"tiger",
			"tiger2",
			"leopard",
			"horse",
			"racehorse",
			"unicorn_face",
			"zebra_face",
			"deer",
			"cow",
			"ox",
			"water_buffalo",
			"cow2",
			"pig",
			"pig2",
			"boar",
			"pig_nose",
			"ram",
			"sheep",
			"goat",
			"dromedary_camel",
			"camel",
			"llama",
			"giraffe_face",
			"elephant",
			"rhinoceros",
			"hippopotamus",
			"mouse",
			"mouse2",
			"rat",
			"hamster",
			"rabbit",
			"rabbit2",
			"chipmunk",
			"hedgehog",
			"bat",
			"bear",
			"koala",
			"panda_face",
			"sloth",
			"otter",
			"skunk",
			"kangaroo",
			"badger",
			"feet",
			"turkey",
			"chicken",
			"rooster",
			"hatching_chick",
			"baby_chick",
			"hatched_chick",
			"bird",
			"penguin",
			"dove_of_peace",
			"eagle",
			"duck",
			"swan",
			"owl",
			"flamingo",
			"peacock",
			"parrot",
			"frog",
			"crocodile",
			"turtle",
			"lizard",
			"snake",
			"dragon_face",
			"dragon",
			"sauropod",
			"t-rex",
			"whale",
			"whale2",
			"dolphin",
			"fish",
			"tropical_fish",
			"blowfish",
			"shark",
			"octopus",
			"shell",
			"snail",
			"butterfly",
			"bug",
			"ant",
			"bee",
			"beetle",
			"cricket",
			"spider",
			"spider_web",
			"scorpion",
			"mosquito",
			"microbe",
			"bouquet",
			"cherry_blossom",
			"white_flower",
			"rosette",
			"rose",
			"wilted_flower",
			"hibiscus",
			"sunflower",
			"blossom",
			"tulip",
			"seedling",
			"evergreen_tree",
			"deciduous_tree",
			"palm_tree",
			"cactus",
			"ear_of_rice",
			"herb",
			"shamrock",
			"four_leaf_clover",
			"maple_leaf",
			"fallen_leaf",
			"leaves"
		]
	},
	{
		id: "foods",
		name: "Food & Drink",
		emojis: [
			"grapes",
			"melon",
			"watermelon",
			"tangerine",
			"lemon",
			"banana",
			"pineapple",
			"mango",
			"apple",
			"green_apple",
			"pear",
			"peach",
			"cherries",
			"strawberry",
			"kiwifruit",
			"tomato",
			"coconut",
			"avocado",
			"eggplant",
			"potato",
			"carrot",
			"corn",
			"hot_pepper",
			"cucumber",
			"leafy_green",
			"broccoli",
			"garlic",
			"onion",
			"mushroom",
			"peanuts",
			"chestnut",
			"bread",
			"croissant",
			"baguette_bread",
			"pretzel",
			"bagel",
			"pancakes",
			"waffle",
			"cheese_wedge",
			"meat_on_bone",
			"poultry_leg",
			"cut_of_meat",
			"bacon",
			"hamburger",
			"fries",
			"pizza",
			"hotdog",
			"sandwich",
			"taco",
			"burrito",
			"stuffed_flatbread",
			"falafel",
			"egg",
			"fried_egg",
			"shallow_pan_of_food",
			"stew",
			"bowl_with_spoon",
			"green_salad",
			"popcorn",
			"butter",
			"salt",
			"canned_food",
			"bento",
			"rice_cracker",
			"rice_ball",
			"rice",
			"curry",
			"ramen",
			"spaghetti",
			"sweet_potato",
			"oden",
			"sushi",
			"fried_shrimp",
			"fish_cake",
			"moon_cake",
			"dango",
			"dumpling",
			"fortune_cookie",
			"takeout_box",
			"crab",
			"lobster",
			"shrimp",
			"squid",
			"oyster",
			"icecream",
			"shaved_ice",
			"ice_cream",
			"doughnut",
			"cookie",
			"birthday",
			"cake",
			"cupcake",
			"pie",
			"chocolate_bar",
			"candy",
			"lollipop",
			"custard",
			"honey_pot",
			"baby_bottle",
			"glass_of_milk",
			"coffee",
			"tea",
			"sake",
			"champagne",
			"wine_glass",
			"cocktail",
			"tropical_drink",
			"beer",
			"beers",
			"clinking_glasses",
			"tumbler_glass",
			"cup_with_straw",
			"beverage_box",
			"mate_drink",
			"ice_cube",
			"chopsticks",
			"knife_fork_plate",
			"fork_and_knife",
			"spoon",
			"hocho",
			"amphora"
		]
	},
	{
		id: "activity",
		name: "Activities",
		emojis: [
			"jack_o_lantern",
			"christmas_tree",
			"fireworks",
			"sparkler",
			"firecracker",
			"sparkles",
			"balloon",
			"tada",
			"confetti_ball",
			"tanabata_tree",
			"bamboo",
			"dolls",
			"flags",
			"wind_chime",
			"rice_scene",
			"red_envelope",
			"ribbon",
			"gift",
			"reminder_ribbon",
			"admission_tickets",
			"ticket",
			"medal",
			"trophy",
			"sports_medal",
			"first_place_medal",
			"second_place_medal",
			"third_place_medal",
			"soccer",
			"baseball",
			"softball",
			"basketball",
			"volleyball",
			"football",
			"rugby_football",
			"tennis",
			"flying_disc",
			"bowling",
			"cricket_bat_and_ball",
			"field_hockey_stick_and_ball",
			"ice_hockey_stick_and_puck",
			"lacrosse",
			"table_tennis_paddle_and_ball",
			"badminton_racquet_and_shuttlecock",
			"boxing_glove",
			"martial_arts_uniform",
			"goal_net",
			"golf",
			"ice_skate",
			"fishing_pole_and_fish",
			"diving_mask",
			"running_shirt_with_sash",
			"ski",
			"sled",
			"curling_stone",
			"dart",
			"yo-yo",
			"kite",
			"8ball",
			"crystal_ball",
			"nazar_amulet",
			"video_game",
			"joystick",
			"slot_machine",
			"game_die",
			"jigsaw",
			"teddy_bear",
			"spades",
			"hearts",
			"diamonds",
			"clubs",
			"chess_pawn",
			"black_joker",
			"mahjong",
			"flower_playing_cards",
			"performing_arts",
			"frame_with_picture",
			"art",
			"thread",
			"yarn"
		]
	},
	{
		id: "places",
		name: "Travel & Places",
		emojis: [
			"earth_africa",
			"earth_americas",
			"earth_asia",
			"globe_with_meridians",
			"world_map",
			"japan",
			"compass",
			"snow_capped_mountain",
			"mountain",
			"volcano",
			"mount_fuji",
			"camping",
			"beach_with_umbrella",
			"desert",
			"desert_island",
			"national_park",
			"stadium",
			"classical_building",
			"building_construction",
			"bricks",
			"house_buildings",
			"derelict_house_building",
			"house",
			"house_with_garden",
			"office",
			"post_office",
			"european_post_office",
			"hospital",
			"bank",
			"hotel",
			"love_hotel",
			"convenience_store",
			"school",
			"department_store",
			"factory",
			"japanese_castle",
			"european_castle",
			"wedding",
			"tokyo_tower",
			"statue_of_liberty",
			"church",
			"mosque",
			"hindu_temple",
			"synagogue",
			"shinto_shrine",
			"kaaba",
			"fountain",
			"tent",
			"foggy",
			"night_with_stars",
			"cityscape",
			"sunrise_over_mountains",
			"sunrise",
			"city_sunset",
			"city_sunrise",
			"bridge_at_night",
			"hotsprings",
			"carousel_horse",
			"ferris_wheel",
			"roller_coaster",
			"barber",
			"circus_tent",
			"steam_locomotive",
			"railway_car",
			"bullettrain_side",
			"bullettrain_front",
			"train2",
			"metro",
			"light_rail",
			"station",
			"tram",
			"monorail",
			"mountain_railway",
			"train",
			"bus",
			"oncoming_bus",
			"trolleybus",
			"minibus",
			"ambulance",
			"fire_engine",
			"police_car",
			"oncoming_police_car",
			"taxi",
			"oncoming_taxi",
			"car",
			"oncoming_automobile",
			"blue_car",
			"truck",
			"articulated_lorry",
			"tractor",
			"racing_car",
			"racing_motorcycle",
			"motor_scooter",
			"manual_wheelchair",
			"motorized_wheelchair",
			"auto_rickshaw",
			"bike",
			"scooter",
			"skateboard",
			"busstop",
			"motorway",
			"railway_track",
			"oil_drum",
			"fuelpump",
			"rotating_light",
			"traffic_light",
			"vertical_traffic_light",
			"octagonal_sign",
			"construction",
			"anchor",
			"boat",
			"canoe",
			"speedboat",
			"passenger_ship",
			"ferry",
			"motor_boat",
			"ship",
			"airplane",
			"small_airplane",
			"airplane_departure",
			"airplane_arriving",
			"parachute",
			"seat",
			"helicopter",
			"suspension_railway",
			"mountain_cableway",
			"aerial_tramway",
			"satellite",
			"rocket",
			"flying_saucer",
			"bellhop_bell",
			"luggage",
			"hourglass",
			"hourglass_flowing_sand",
			"watch",
			"alarm_clock",
			"stopwatch",
			"timer_clock",
			"mantelpiece_clock",
			"clock12",
			"clock1230",
			"clock1",
			"clock130",
			"clock2",
			"clock230",
			"clock3",
			"clock330",
			"clock4",
			"clock430",
			"clock5",
			"clock530",
			"clock6",
			"clock630",
			"clock7",
			"clock730",
			"clock8",
			"clock830",
			"clock9",
			"clock930",
			"clock10",
			"clock1030",
			"clock11",
			"clock1130",
			"new_moon",
			"waxing_crescent_moon",
			"first_quarter_moon",
			"moon",
			"full_moon",
			"waning_gibbous_moon",
			"last_quarter_moon",
			"waning_crescent_moon",
			"crescent_moon",
			"new_moon_with_face",
			"first_quarter_moon_with_face",
			"last_quarter_moon_with_face",
			"thermometer",
			"sunny",
			"full_moon_with_face",
			"sun_with_face",
			"ringed_planet",
			"star",
			"star2",
			"stars",
			"milky_way",
			"cloud",
			"partly_sunny",
			"thunder_cloud_and_rain",
			"mostly_sunny",
			"barely_sunny",
			"partly_sunny_rain",
			"rain_cloud",
			"snow_cloud",
			"lightning",
			"tornado",
			"fog",
			"wind_blowing_face",
			"cyclone",
			"rainbow",
			"closed_umbrella",
			"umbrella",
			"umbrella_with_rain_drops",
			"umbrella_on_ground",
			"zap",
			"snowflake",
			"snowman",
			"snowman_without_snow",
			"comet",
			"fire",
			"droplet",
			"ocean"
		]
	},
	{
		id: "objects",
		name: "Objects",
		emojis: [
			"eyeglasses",
			"dark_sunglasses",
			"goggles",
			"lab_coat",
			"safety_vest",
			"necktie",
			"shirt",
			"jeans",
			"scarf",
			"gloves",
			"coat",
			"socks",
			"dress",
			"kimono",
			"sari",
			"one-piece_swimsuit",
			"briefs",
			"shorts",
			"bikini",
			"womans_clothes",
			"purse",
			"handbag",
			"pouch",
			"shopping_bags",
			"school_satchel",
			"mans_shoe",
			"athletic_shoe",
			"hiking_boot",
			"womans_flat_shoe",
			"high_heel",
			"sandal",
			"ballet_shoes",
			"boot",
			"crown",
			"womans_hat",
			"tophat",
			"mortar_board",
			"billed_cap",
			"helmet_with_white_cross",
			"prayer_beads",
			"lipstick",
			"ring",
			"gem",
			"mute",
			"speaker",
			"sound",
			"loud_sound",
			"loudspeaker",
			"mega",
			"postal_horn",
			"bell",
			"no_bell",
			"musical_score",
			"musical_note",
			"notes",
			"studio_microphone",
			"level_slider",
			"control_knobs",
			"microphone",
			"headphones",
			"radio",
			"saxophone",
			"guitar",
			"musical_keyboard",
			"trumpet",
			"violin",
			"banjo",
			"drum_with_drumsticks",
			"iphone",
			"calling",
			"phone",
			"telephone_receiver",
			"pager",
			"fax",
			"battery",
			"electric_plug",
			"computer",
			"desktop_computer",
			"printer",
			"keyboard",
			"three_button_mouse",
			"trackball",
			"minidisc",
			"floppy_disk",
			"cd",
			"dvd",
			"abacus",
			"movie_camera",
			"film_frames",
			"film_projector",
			"clapper",
			"tv",
			"camera",
			"camera_with_flash",
			"video_camera",
			"vhs",
			"mag",
			"mag_right",
			"candle",
			"bulb",
			"flashlight",
			"izakaya_lantern",
			"diya_lamp",
			"notebook_with_decorative_cover",
			"closed_book",
			"book",
			"green_book",
			"blue_book",
			"orange_book",
			"books",
			"notebook",
			"ledger",
			"page_with_curl",
			"scroll",
			"page_facing_up",
			"newspaper",
			"rolled_up_newspaper",
			"bookmark_tabs",
			"bookmark",
			"label",
			"moneybag",
			"yen",
			"dollar",
			"euro",
			"pound",
			"money_with_wings",
			"credit_card",
			"receipt",
			"chart",
			"currency_exchange",
			"heavy_dollar_sign",
			"email",
			"e-mail",
			"incoming_envelope",
			"envelope_with_arrow",
			"outbox_tray",
			"inbox_tray",
			"package",
			"mailbox",
			"mailbox_closed",
			"mailbox_with_mail",
			"mailbox_with_no_mail",
			"postbox",
			"ballot_box_with_ballot",
			"pencil2",
			"black_nib",
			"lower_left_fountain_pen",
			"lower_left_ballpoint_pen",
			"lower_left_paintbrush",
			"lower_left_crayon",
			"memo",
			"briefcase",
			"file_folder",
			"open_file_folder",
			"card_index_dividers",
			"date",
			"calendar",
			"spiral_note_pad",
			"spiral_calendar_pad",
			"card_index",
			"chart_with_upwards_trend",
			"chart_with_downwards_trend",
			"bar_chart",
			"clipboard",
			"pushpin",
			"round_pushpin",
			"paperclip",
			"linked_paperclips",
			"straight_ruler",
			"triangular_ruler",
			"scissors",
			"card_file_box",
			"file_cabinet",
			"wastebasket",
			"lock",
			"unlock",
			"lock_with_ink_pen",
			"closed_lock_with_key",
			"key",
			"old_key",
			"hammer",
			"axe",
			"pick",
			"hammer_and_pick",
			"hammer_and_wrench",
			"dagger_knife",
			"crossed_swords",
			"gun",
			"bow_and_arrow",
			"shield",
			"wrench",
			"nut_and_bolt",
			"gear",
			"compression",
			"scales",
			"probing_cane",
			"link",
			"chains",
			"toolbox",
			"magnet",
			"alembic",
			"test_tube",
			"petri_dish",
			"dna",
			"microscope",
			"telescope",
			"satellite_antenna",
			"syringe",
			"drop_of_blood",
			"pill",
			"adhesive_bandage",
			"stethoscope",
			"door",
			"bed",
			"couch_and_lamp",
			"chair",
			"toilet",
			"shower",
			"bathtub",
			"razor",
			"lotion_bottle",
			"safety_pin",
			"broom",
			"basket",
			"roll_of_paper",
			"soap",
			"sponge",
			"fire_extinguisher",
			"shopping_trolley",
			"smoking",
			"coffin",
			"funeral_urn",
			"moyai"
		]
	},
	{
		id: "symbols",
		name: "Symbols",
		emojis: [
			"atm",
			"put_litter_in_its_place",
			"potable_water",
			"wheelchair",
			"mens",
			"womens",
			"restroom",
			"baby_symbol",
			"wc",
			"passport_control",
			"customs",
			"baggage_claim",
			"left_luggage",
			"warning",
			"children_crossing",
			"no_entry",
			"no_entry_sign",
			"no_bicycles",
			"no_smoking",
			"do_not_litter",
			"non-potable_water",
			"no_pedestrians",
			"no_mobile_phones",
			"underage",
			"radioactive_sign",
			"biohazard_sign",
			"arrow_up",
			"arrow_upper_right",
			"arrow_right",
			"arrow_lower_right",
			"arrow_down",
			"arrow_lower_left",
			"arrow_left",
			"arrow_upper_left",
			"arrow_up_down",
			"left_right_arrow",
			"leftwards_arrow_with_hook",
			"arrow_right_hook",
			"arrow_heading_up",
			"arrow_heading_down",
			"arrows_clockwise",
			"arrows_counterclockwise",
			"back",
			"end",
			"on",
			"soon",
			"top",
			"place_of_worship",
			"atom_symbol",
			"om_symbol",
			"star_of_david",
			"wheel_of_dharma",
			"yin_yang",
			"latin_cross",
			"orthodox_cross",
			"star_and_crescent",
			"peace_symbol",
			"menorah_with_nine_branches",
			"six_pointed_star",
			"aries",
			"taurus",
			"gemini",
			"cancer",
			"leo",
			"virgo",
			"libra",
			"scorpius",
			"sagittarius",
			"capricorn",
			"aquarius",
			"pisces",
			"ophiuchus",
			"twisted_rightwards_arrows",
			"repeat",
			"repeat_one",
			"arrow_forward",
			"fast_forward",
			"black_right_pointing_double_triangle_with_vertical_bar",
			"black_right_pointing_triangle_with_double_vertical_bar",
			"arrow_backward",
			"rewind",
			"black_left_pointing_double_triangle_with_vertical_bar",
			"arrow_up_small",
			"arrow_double_up",
			"arrow_down_small",
			"arrow_double_down",
			"double_vertical_bar",
			"black_square_for_stop",
			"black_circle_for_record",
			"eject",
			"cinema",
			"low_brightness",
			"high_brightness",
			"signal_strength",
			"vibration_mode",
			"mobile_phone_off",
			"female_sign",
			"male_sign",
			"medical_symbol",
			"infinity",
			"recycle",
			"fleur_de_lis",
			"trident",
			"name_badge",
			"beginner",
			"o",
			"white_check_mark",
			"ballot_box_with_check",
			"heavy_check_mark",
			"heavy_multiplication_x",
			"x",
			"negative_squared_cross_mark",
			"heavy_plus_sign",
			"heavy_minus_sign",
			"heavy_division_sign",
			"curly_loop",
			"loop",
			"part_alternation_mark",
			"eight_spoked_asterisk",
			"eight_pointed_black_star",
			"sparkle",
			"bangbang",
			"interrobang",
			"question",
			"grey_question",
			"grey_exclamation",
			"exclamation",
			"wavy_dash",
			"copyright",
			"registered",
			"tm",
			"hash",
			"keycap_star",
			"zero",
			"one",
			"two",
			"three",
			"four",
			"five",
			"six",
			"seven",
			"eight",
			"nine",
			"keycap_ten",
			"capital_abcd",
			"abcd",
			"1234",
			"symbols",
			"abc",
			"a",
			"ab",
			"b",
			"cl",
			"cool",
			"free",
			"information_source",
			"id",
			"m",
			"new",
			"ng",
			"o2",
			"ok",
			"parking",
			"sos",
			"up",
			"vs",
			"koko",
			"sa",
			"u6708",
			"u6709",
			"u6307",
			"ideograph_advantage",
			"u5272",
			"u7121",
			"u7981",
			"accept",
			"u7533",
			"u5408",
			"u7a7a",
			"congratulations",
			"secret",
			"u55b6",
			"u6e80",
			"red_circle",
			"large_orange_circle",
			"large_yellow_circle",
			"large_green_circle",
			"large_blue_circle",
			"large_purple_circle",
			"large_brown_circle",
			"black_circle",
			"white_circle",
			"large_red_square",
			"large_orange_square",
			"large_yellow_square",
			"large_green_square",
			"large_blue_square",
			"large_purple_square",
			"large_brown_square",
			"black_large_square",
			"white_large_square",
			"black_medium_square",
			"white_medium_square",
			"black_medium_small_square",
			"white_medium_small_square",
			"black_small_square",
			"white_small_square",
			"large_orange_diamond",
			"large_blue_diamond",
			"small_orange_diamond",
			"small_blue_diamond",
			"small_red_triangle",
			"small_red_triangle_down",
			"diamond_shape_with_a_dot_inside",
			"radio_button",
			"white_square_button",
			"black_square_button"
		]
	},
	{
		id: "flags",
		name: "Flags",
		emojis: [
			"checkered_flag",
			"cn",
			"crossed_flags",
			"de",
			"es",
			"flag-ac",
			"flag-ad",
			"flag-ae",
			"flag-af",
			"flag-ag",
			"flag-ai",
			"flag-al",
			"flag-am",
			"flag-ao",
			"flag-aq",
			"flag-ar",
			"flag-as",
			"flag-at",
			"flag-au",
			"flag-aw",
			"flag-ax",
			"flag-az",
			"flag-ba",
			"flag-bb",
			"flag-bd",
			"flag-be",
			"flag-bf",
			"flag-bg",
			"flag-bh",
			"flag-bi",
			"flag-bj",
			"flag-bl",
			"flag-bm",
			"flag-bn",
			"flag-bo",
			"flag-bq",
			"flag-br",
			"flag-bs",
			"flag-bt",
			"flag-bv",
			"flag-bw",
			"flag-by",
			"flag-bz",
			"flag-ca",
			"flag-cc",
			"flag-cd",
			"flag-cf",
			"flag-cg",
			"flag-ch",
			"flag-ci",
			"flag-ck",
			"flag-cl",
			"flag-cm",
			"flag-co",
			"flag-cp",
			"flag-cr",
			"flag-cu",
			"flag-cv",
			"flag-cw",
			"flag-cx",
			"flag-cy",
			"flag-cz",
			"flag-dg",
			"flag-dj",
			"flag-dk",
			"flag-dm",
			"flag-do",
			"flag-dz",
			"flag-ea",
			"flag-ec",
			"flag-ee",
			"flag-eg",
			"flag-eh",
			"flag-england",
			"flag-er",
			"flag-et",
			"flag-eu",
			"flag-fi",
			"flag-fj",
			"flag-fk",
			"flag-fm",
			"flag-fo",
			"flag-ga",
			"flag-gd",
			"flag-ge",
			"flag-gf",
			"flag-gg",
			"flag-gh",
			"flag-gi",
			"flag-gl",
			"flag-gm",
			"flag-gn",
			"flag-gp",
			"flag-gq",
			"flag-gr",
			"flag-gs",
			"flag-gt",
			"flag-gu",
			"flag-gw",
			"flag-gy",
			"flag-hk",
			"flag-hm",
			"flag-hn",
			"flag-hr",
			"flag-ht",
			"flag-hu",
			"flag-ic",
			"flag-id",
			"flag-ie",
			"flag-il",
			"flag-im",
			"flag-in",
			"flag-io",
			"flag-iq",
			"flag-ir",
			"flag-is",
			"flag-je",
			"flag-jm",
			"flag-jo",
			"flag-ke",
			"flag-kg",
			"flag-kh",
			"flag-ki",
			"flag-km",
			"flag-kn",
			"flag-kp",
			"flag-kw",
			"flag-ky",
			"flag-kz",
			"flag-la",
			"flag-lb",
			"flag-lc",
			"flag-li",
			"flag-lk",
			"flag-lr",
			"flag-ls",
			"flag-lt",
			"flag-lu",
			"flag-lv",
			"flag-ly",
			"flag-ma",
			"flag-mc",
			"flag-md",
			"flag-me",
			"flag-mf",
			"flag-mg",
			"flag-mh",
			"flag-mk",
			"flag-ml",
			"flag-mm",
			"flag-mn",
			"flag-mo",
			"flag-mp",
			"flag-mq",
			"flag-mr",
			"flag-ms",
			"flag-mt",
			"flag-mu",
			"flag-mv",
			"flag-mw",
			"flag-mx",
			"flag-my",
			"flag-mz",
			"flag-na",
			"flag-nc",
			"flag-ne",
			"flag-nf",
			"flag-ng",
			"flag-ni",
			"flag-nl",
			"flag-no",
			"flag-np",
			"flag-nr",
			"flag-nu",
			"flag-nz",
			"flag-om",
			"flag-pa",
			"flag-pe",
			"flag-pf",
			"flag-pg",
			"flag-ph",
			"flag-pk",
			"flag-pl",
			"flag-pm",
			"flag-pn",
			"flag-pr",
			"flag-ps",
			"flag-pt",
			"flag-pw",
			"flag-py",
			"flag-qa",
			"flag-re",
			"flag-ro",
			"flag-rs",
			"flag-rw",
			"flag-sa",
			"flag-sb",
			"flag-sc",
			"flag-scotland",
			"flag-sd",
			"flag-se",
			"flag-sg",
			"flag-sh",
			"flag-si",
			"flag-sj",
			"flag-sk",
			"flag-sl",
			"flag-sm",
			"flag-sn",
			"flag-so",
			"flag-sr",
			"flag-ss",
			"flag-st",
			"flag-sv",
			"flag-sx",
			"flag-sy",
			"flag-sz",
			"flag-ta",
			"flag-tc",
			"flag-td",
			"flag-tf",
			"flag-tg",
			"flag-th",
			"flag-tj",
			"flag-tk",
			"flag-tl",
			"flag-tm",
			"flag-tn",
			"flag-to",
			"flag-tr",
			"flag-tt",
			"flag-tv",
			"flag-tw",
			"flag-tz",
			"flag-ua",
			"flag-ug",
			"flag-um",
			"flag-uy",
			"flag-uz",
			"flag-va",
			"flag-vc",
			"flag-ve",
			"flag-vg",
			"flag-vi",
			"flag-vn",
			"flag-vu",
			"flag-wales",
			"flag-wf",
			"flag-ws",
			"flag-xk",
			"flag-ye",
			"flag-yt",
			"flag-za",
			"flag-zm",
			"flag-zw",
			"fr",
			"gb",
			"it",
			"jp",
			"kr",
			"pirate_flag",
			"rainbow-flag",
			"ru",
			"triangular_flag_on_post",
			"us",
			"waving_black_flag",
			"waving_white_flag"
		]
	}
];
var emojis = {
	"100": {
		a: "Hundred Points Symbol",
		b: "1F4AF",
		j: [
			"score",
			"perfect",
			"numbers",
			"century",
			"exam",
			"quiz",
			"test",
			"pass",
			"hundred"
		],
		k: [
			26,
			5
		],
		o: 2
	},
	"1234": {
		a: "Input Symbol for Numbers",
		b: "1F522",
		j: [
			"numbers",
			"blue-square"
		],
		k: [
			28,
			5
		],
		o: 2
	},
	grinning: {
		a: "Grinning Face",
		b: "1F600",
		j: [
			"face",
			"smile",
			"happy",
			"joy",
			":D",
			"grin"
		],
		k: [
			30,
			35
		],
		m: ":D",
		o: 2
	},
	monkey_face: {
		a: "Monkey Face",
		b: "1F435",
		j: [
			"animal",
			"nature",
			"circus"
		],
		k: [
			12,
			25
		],
		l: [
			":o)"
		],
		o: 2
	},
	grapes: {
		a: "Grapes",
		b: "1F347",
		j: [
			"fruit",
			"food",
			"wine"
		],
		k: [
			6,
			31
		],
		o: 2
	},
	eyeglasses: {
		a: "Eyeglasses",
		b: "1F453",
		j: [
			"fashion",
			"accessories",
			"eyesight",
			"nerdy",
			"dork",
			"geek"
		],
		k: [
			14,
			7
		],
		o: 2
	},
	checkered_flag: {
		a: "Chequered Flag",
		b: "1F3C1",
		j: [
			"contest",
			"finishline",
			"race",
			"gokart"
		],
		k: [
			8,
			39
		],
		o: 2
	},
	jack_o_lantern: {
		a: "Jack-O-Lantern",
		b: "1F383",
		j: [
			"halloween",
			"light",
			"pumpkin",
			"creepy",
			"fall"
		],
		k: [
			7,
			34
		],
		o: 2
	},
	wave: {
		skin_variations: {
			"1F3FB": {
				unified: "1F44B-1F3FB",
				non_qualified: null,
				image: "1f44b-1f3fb.png",
				sheet_x: 13,
				sheet_y: 27,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F44B-1F3FC",
				non_qualified: null,
				image: "1f44b-1f3fc.png",
				sheet_x: 13,
				sheet_y: 28,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F44B-1F3FD",
				non_qualified: null,
				image: "1f44b-1f3fd.png",
				sheet_x: 13,
				sheet_y: 29,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F44B-1F3FE",
				non_qualified: null,
				image: "1f44b-1f3fe.png",
				sheet_x: 13,
				sheet_y: 30,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F44B-1F3FF",
				non_qualified: null,
				image: "1f44b-1f3ff.png",
				sheet_x: 13,
				sheet_y: 31,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Waving Hand Sign",
		b: "1F44B",
		j: [
			"hands",
			"gesture",
			"goodbye",
			"solong",
			"farewell",
			"hello",
			"hi",
			"palm"
		],
		k: [
			13,
			26
		],
		o: 2
	},
	earth_africa: {
		a: "Earth Globe Europe-Africa",
		b: "1F30D",
		j: [
			"globe",
			"world",
			"international"
		],
		k: [
			5,
			32
		],
		o: 2
	},
	atm: {
		a: "Automated Teller Machine",
		b: "1F3E7",
		j: [
			"money",
			"sales",
			"cash",
			"blue-square",
			"payment",
			"bank"
		],
		k: [
			11,
			1
		],
		o: 2
	},
	melon: {
		a: "Melon",
		b: "1F348",
		j: [
			"fruit",
			"nature",
			"food"
		],
		k: [
			6,
			32
		],
		o: 2
	},
	triangular_flag_on_post: {
		a: "Triangular Flag on Post",
		b: "1F6A9",
		j: [
			"mark",
			"milestone",
			"place"
		],
		k: [
			35,
			0
		],
		o: 2
	},
	put_litter_in_its_place: {
		a: "Put Litter in Its Place Symbol",
		b: "1F6AE",
		j: [
			"blue-square",
			"sign",
			"human",
			"info"
		],
		k: [
			35,
			5
		],
		o: 2
	},
	christmas_tree: {
		a: "Christmas Tree",
		b: "1F384",
		j: [
			"festival",
			"vacation",
			"december",
			"xmas",
			"celebration"
		],
		k: [
			7,
			35
		],
		o: 2
	},
	monkey: {
		a: "Monkey",
		b: "1F412",
		j: [
			"animal",
			"nature",
			"banana",
			"circus"
		],
		k: [
			11,
			46
		],
		o: 2
	},
	earth_americas: {
		a: "Earth Globe Americas",
		b: "1F30E",
		j: [
			"globe",
			"world",
			"USA",
			"international"
		],
		k: [
			5,
			33
		],
		o: 2
	},
	dark_sunglasses: {
		a: "Dark Sunglasses",
		b: "1F576-FE0F",
		c: "1F576",
		j: [
			"face",
			"cool",
			"accessories"
		],
		k: [
			29,
			33
		],
		o: 2
	},
	raised_back_of_hand: {
		skin_variations: {
			"1F3FB": {
				unified: "1F91A-1F3FB",
				non_qualified: null,
				image: "1f91a-1f3fb.png",
				sheet_x: 37,
				sheet_y: 44,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F91A-1F3FC",
				non_qualified: null,
				image: "1f91a-1f3fc.png",
				sheet_x: 37,
				sheet_y: 45,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F91A-1F3FD",
				non_qualified: null,
				image: "1f91a-1f3fd.png",
				sheet_x: 37,
				sheet_y: 46,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F91A-1F3FE",
				non_qualified: null,
				image: "1f91a-1f3fe.png",
				sheet_x: 37,
				sheet_y: 47,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F91A-1F3FF",
				non_qualified: null,
				image: "1f91a-1f3ff.png",
				sheet_x: 37,
				sheet_y: 48,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Raised Back of Hand",
		b: "1F91A",
		j: [
			"fingers",
			"raised",
			"backhand"
		],
		k: [
			37,
			43
		],
		o: 4
	},
	smiley: {
		a: "Smiling Face with Open Mouth",
		b: "1F603",
		j: [
			"face",
			"happy",
			"joy",
			"haha",
			":D",
			":)",
			"smile",
			"funny"
		],
		k: [
			30,
			38
		],
		l: [
			"=)",
			"=-)"
		],
		m: ":)",
		o: 2
	},
	earth_asia: {
		a: "Earth Globe Asia-Australia",
		b: "1F30F",
		j: [
			"globe",
			"world",
			"east",
			"international"
		],
		k: [
			5,
			34
		],
		o: 2
	},
	crossed_flags: {
		a: "Crossed Flags",
		b: "1F38C",
		j: [
			"japanese",
			"nation",
			"country",
			"border"
		],
		k: [
			7,
			48
		],
		o: 2
	},
	watermelon: {
		a: "Watermelon",
		b: "1F349",
		j: [
			"fruit",
			"food",
			"picnic",
			"summer"
		],
		k: [
			6,
			33
		],
		o: 2
	},
	goggles: {
		a: "Goggles",
		b: "1F97D",
		k: [
			42,
			15
		],
		o: 11
	},
	raised_hand_with_fingers_splayed: {
		skin_variations: {
			"1F3FB": {
				unified: "1F590-1F3FB",
				non_qualified: null,
				image: "1f590-1f3fb.png",
				sheet_x: 29,
				sheet_y: 49,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F590-1F3FC",
				non_qualified: null,
				image: "1f590-1f3fc.png",
				sheet_x: 29,
				sheet_y: 50,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F590-1F3FD",
				non_qualified: null,
				image: "1f590-1f3fd.png",
				sheet_x: 29,
				sheet_y: 51,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F590-1F3FE",
				non_qualified: null,
				image: "1f590-1f3fe.png",
				sheet_x: 29,
				sheet_y: 52,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F590-1F3FF",
				non_qualified: null,
				image: "1f590-1f3ff.png",
				sheet_x: 29,
				sheet_y: 53,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Raised Hand with Fingers Splayed",
		b: "1F590-FE0F",
		c: "1F590",
		j: [
			"hand",
			"fingers",
			"palm"
		],
		k: [
			29,
			48
		],
		o: 2
	},
	smile: {
		a: "Smiling Face with Open Mouth and Smiling Eyes",
		b: "1F604",
		j: [
			"face",
			"happy",
			"joy",
			"funny",
			"haha",
			"laugh",
			"like",
			":D",
			":)"
		],
		k: [
			30,
			39
		],
		l: [
			"C:",
			"c:",
			":D",
			":-D"
		],
		m: ":)",
		o: 2
	},
	potable_water: {
		a: "Potable Water Symbol",
		b: "1F6B0",
		j: [
			"blue-square",
			"liquid",
			"restroom",
			"cleaning",
			"faucet"
		],
		k: [
			35,
			7
		],
		o: 2
	},
	fireworks: {
		a: "Fireworks",
		b: "1F386",
		j: [
			"photo",
			"festival",
			"carnival",
			"congratulations"
		],
		k: [
			7,
			42
		],
		o: 2
	},
	gorilla: {
		a: "Gorilla",
		b: "1F98D",
		j: [
			"animal",
			"nature",
			"circus"
		],
		k: [
			42,
			31
		],
		o: 4
	},
	lab_coat: {
		a: "Lab Coat",
		b: "1F97C",
		k: [
			42,
			14
		],
		o: 11
	},
	tangerine: {
		a: "Tangerine",
		b: "1F34A",
		j: [
			"food",
			"fruit",
			"nature",
			"orange"
		],
		k: [
			6,
			34
		],
		o: 2
	},
	wheelchair: {
		a: "Wheelchair Symbol",
		b: "267F",
		j: [
			"blue-square",
			"disabled",
			"a11y",
			"accessibility"
		],
		k: [
			53,
			40
		],
		o: 2
	},
	waving_black_flag: {
		a: "Waving Black Flag",
		b: "1F3F4",
		k: [
			11,
			17
		],
		o: 2
	},
	orangutan: {
		a: "Orangutan",
		b: "1F9A7",
		k: [
			42,
			55
		],
		o: 12
	},
	sparkler: {
		a: "Firework Sparkler",
		b: "1F387",
		j: [
			"stars",
			"night",
			"shine"
		],
		k: [
			7,
			43
		],
		o: 2
	},
	globe_with_meridians: {
		a: "Globe with Meridians",
		b: "1F310",
		j: [
			"earth",
			"international",
			"world",
			"internet",
			"interweb",
			"i18n"
		],
		k: [
			5,
			35
		],
		o: 2
	},
	grin: {
		a: "Grinning Face with Smiling Eyes",
		b: "1F601",
		j: [
			"face",
			"happy",
			"smile",
			"joy",
			"kawaii"
		],
		k: [
			30,
			36
		],
		o: 2
	},
	hand: {
		skin_variations: {
			"1F3FB": {
				unified: "270B-1F3FB",
				non_qualified: null,
				image: "270b-1f3fb.png",
				sheet_x: 54,
				sheet_y: 50,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "270B-1F3FC",
				non_qualified: null,
				image: "270b-1f3fc.png",
				sheet_x: 54,
				sheet_y: 51,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "270B-1F3FD",
				non_qualified: null,
				image: "270b-1f3fd.png",
				sheet_x: 54,
				sheet_y: 52,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "270B-1F3FE",
				non_qualified: null,
				image: "270b-1f3fe.png",
				sheet_x: 54,
				sheet_y: 53,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "270B-1F3FF",
				non_qualified: null,
				image: "270b-1f3ff.png",
				sheet_x: 54,
				sheet_y: 54,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Raised Hand",
		b: "270B",
		k: [
			54,
			49
		],
		n: [
			"raised_hand"
		],
		o: 2
	},
	firecracker: {
		a: "Firecracker",
		b: "1F9E8",
		k: [
			51,
			27
		],
		o: 11
	},
	lemon: {
		a: "Lemon",
		b: "1F34B",
		j: [
			"fruit",
			"nature"
		],
		k: [
			6,
			35
		],
		o: 2
	},
	dog: {
		a: "Dog Face",
		b: "1F436",
		j: [
			"animal",
			"friend",
			"nature",
			"woof",
			"puppy",
			"pet",
			"faithful"
		],
		k: [
			12,
			26
		],
		o: 2
	},
	mens: {
		a: "Mens Symbol",
		b: "1F6B9",
		j: [
			"toilet",
			"restroom",
			"wc",
			"blue-square",
			"gender",
			"male"
		],
		k: [
			36,
			10
		],
		o: 2
	},
	"spock-hand": {
		skin_variations: {
			"1F3FB": {
				unified: "1F596-1F3FB",
				non_qualified: null,
				image: "1f596-1f3fb.png",
				sheet_x: 30,
				sheet_y: 4,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F596-1F3FC",
				non_qualified: null,
				image: "1f596-1f3fc.png",
				sheet_x: 30,
				sheet_y: 5,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F596-1F3FD",
				non_qualified: null,
				image: "1f596-1f3fd.png",
				sheet_x: 30,
				sheet_y: 6,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F596-1F3FE",
				non_qualified: null,
				image: "1f596-1f3fe.png",
				sheet_x: 30,
				sheet_y: 7,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F596-1F3FF",
				non_qualified: null,
				image: "1f596-1f3ff.png",
				sheet_x: 30,
				sheet_y: 8,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Raised Hand with Part Between Middle and Ring Fingers",
		b: "1F596",
		k: [
			30,
			3
		],
		o: 2
	},
	world_map: {
		a: "World Map",
		b: "1F5FA-FE0F",
		c: "1F5FA",
		j: [
			"location",
			"direction"
		],
		k: [
			30,
			29
		],
		o: 2
	},
	laughing: {
		a: "Smiling Face with Open Mouth and Tightly-Closed Eyes",
		b: "1F606",
		j: [
			"happy",
			"joy",
			"lol",
			"satisfied",
			"haha",
			"face",
			"glad",
			"XD",
			"laugh"
		],
		k: [
			30,
			41
		],
		l: [
			":>",
			":->"
		],
		n: [
			"satisfied"
		],
		o: 2
	},
	waving_white_flag: {
		a: "Waving White Flag",
		b: "1F3F3-FE0F",
		c: "1F3F3",
		k: [
			11,
			12
		],
		o: 2
	},
	safety_vest: {
		a: "Safety Vest",
		b: "1F9BA",
		k: [
			43,
			54
		],
		o: 12
	},
	sweat_smile: {
		a: "Smiling Face with Open Mouth and Cold Sweat",
		b: "1F605",
		j: [
			"face",
			"hot",
			"happy",
			"laugh",
			"sweat",
			"smile",
			"relief"
		],
		k: [
			30,
			40
		],
		o: 2
	},
	sparkles: {
		a: "Sparkles",
		b: "2728",
		j: [
			"stars",
			"shine",
			"shiny",
			"cool",
			"awesome",
			"good",
			"magic"
		],
		k: [
			55,
			16
		],
		o: 2
	},
	banana: {
		a: "Banana",
		b: "1F34C",
		j: [
			"fruit",
			"food",
			"monkey"
		],
		k: [
			6,
			36
		],
		o: 2
	},
	"rainbow-flag": {
		a: "Rainbow Flag",
		b: "1F3F3-FE0F-200D-1F308",
		c: "1F3F3-200D-1F308",
		k: [
			11,
			11
		],
		o: 4
	},
	ok_hand: {
		skin_variations: {
			"1F3FB": {
				unified: "1F44C-1F3FB",
				non_qualified: null,
				image: "1f44c-1f3fb.png",
				sheet_x: 13,
				sheet_y: 33,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F44C-1F3FC",
				non_qualified: null,
				image: "1f44c-1f3fc.png",
				sheet_x: 13,
				sheet_y: 34,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F44C-1F3FD",
				non_qualified: null,
				image: "1f44c-1f3fd.png",
				sheet_x: 13,
				sheet_y: 35,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F44C-1F3FE",
				non_qualified: null,
				image: "1f44c-1f3fe.png",
				sheet_x: 13,
				sheet_y: 36,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F44C-1F3FF",
				non_qualified: null,
				image: "1f44c-1f3ff.png",
				sheet_x: 13,
				sheet_y: 37,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Ok Hand Sign",
		b: "1F44C",
		j: [
			"fingers",
			"limbs",
			"perfect",
			"ok",
			"okay"
		],
		k: [
			13,
			32
		],
		o: 2
	},
	japan: {
		a: "Silhouette of Japan",
		b: "1F5FE",
		j: [
			"nation",
			"country",
			"japanese",
			"asia"
		],
		k: [
			30,
			33
		],
		o: 2
	},
	dog2: {
		a: "Dog",
		b: "1F415",
		j: [
			"animal",
			"nature",
			"friend",
			"doge",
			"pet",
			"faithful"
		],
		k: [
			11,
			50
		],
		o: 2
	},
	womens: {
		a: "Womens Symbol",
		b: "1F6BA",
		j: [
			"purple-square",
			"woman",
			"female",
			"toilet",
			"loo",
			"restroom",
			"gender"
		],
		k: [
			36,
			11
		],
		o: 2
	},
	necktie: {
		a: "Necktie",
		b: "1F454",
		j: [
			"shirt",
			"suitup",
			"formal",
			"fashion",
			"cloth",
			"business"
		],
		k: [
			14,
			8
		],
		o: 2
	},
	pirate_flag: {
		a: "Pirate Flag",
		b: "1F3F4-200D-2620-FE0F",
		c: "1F3F4-200D-2620",
		k: [
			11,
			13
		],
		o: 11
	},
	guide_dog: {
		a: "Guide Dog",
		b: "1F9AE",
		k: [
			43,
			2
		],
		o: 12
	},
	restroom: {
		a: "Restroom",
		b: "1F6BB",
		j: [
			"blue-square",
			"toilet",
			"refresh",
			"wc",
			"gender"
		],
		k: [
			36,
			12
		],
		o: 2
	},
	compass: {
		a: "Compass",
		b: "1F9ED",
		k: [
			51,
			32
		],
		o: 11
	},
	rolling_on_the_floor_laughing: {
		a: "Rolling on the Floor Laughing",
		b: "1F923",
		k: [
			38,
			20
		],
		o: 4
	},
	balloon: {
		a: "Balloon",
		b: "1F388",
		j: [
			"party",
			"celebration",
			"birthday",
			"circus"
		],
		k: [
			7,
			44
		],
		o: 2
	},
	pinching_hand: {
		skin_variations: {
			"1F3FB": {
				unified: "1F90F-1F3FB",
				non_qualified: null,
				image: "1f90f-1f3fb.png",
				sheet_x: 37,
				sheet_y: 18,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F90F-1F3FC",
				non_qualified: null,
				image: "1f90f-1f3fc.png",
				sheet_x: 37,
				sheet_y: 19,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F90F-1F3FD",
				non_qualified: null,
				image: "1f90f-1f3fd.png",
				sheet_x: 37,
				sheet_y: 20,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F90F-1F3FE",
				non_qualified: null,
				image: "1f90f-1f3fe.png",
				sheet_x: 37,
				sheet_y: 21,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F90F-1F3FF",
				non_qualified: null,
				image: "1f90f-1f3ff.png",
				sheet_x: 37,
				sheet_y: 22,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Pinching Hand",
		b: "1F90F",
		k: [
			37,
			17
		],
		o: 12
	},
	pineapple: {
		a: "Pineapple",
		b: "1F34D",
		j: [
			"fruit",
			"nature",
			"food"
		],
		k: [
			6,
			37
		],
		o: 2
	},
	shirt: {
		a: "T-Shirt",
		b: "1F455",
		k: [
			14,
			9
		],
		n: [
			"tshirt"
		],
		o: 2
	},
	service_dog: {
		a: "Service Dog",
		b: "1F415-200D-1F9BA",
		k: [
			11,
			49
		],
		o: 12
	},
	baby_symbol: {
		a: "Baby Symbol",
		b: "1F6BC",
		j: [
			"orange-square",
			"child"
		],
		k: [
			36,
			13
		],
		o: 2
	},
	joy: {
		a: "Face with Tears of Joy",
		b: "1F602",
		j: [
			"face",
			"cry",
			"tears",
			"weep",
			"happy",
			"happytears",
			"haha"
		],
		k: [
			30,
			37
		],
		o: 2
	},
	tada: {
		a: "Party Popper",
		b: "1F389",
		j: [
			"party",
			"congratulations",
			"birthday",
			"magic",
			"circus",
			"celebration"
		],
		k: [
			7,
			45
		],
		o: 2
	},
	mango: {
		a: "Mango",
		b: "1F96D",
		k: [
			42,
			3
		],
		o: 11
	},
	v: {
		skin_variations: {
			"1F3FB": {
				unified: "270C-1F3FB",
				non_qualified: null,
				image: "270c-1f3fb.png",
				sheet_x: 54,
				sheet_y: 56,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "270C-1F3FC",
				non_qualified: null,
				image: "270c-1f3fc.png",
				sheet_x: 55,
				sheet_y: 0,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "270C-1F3FD",
				non_qualified: null,
				image: "270c-1f3fd.png",
				sheet_x: 55,
				sheet_y: 1,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "270C-1F3FE",
				non_qualified: null,
				image: "270c-1f3fe.png",
				sheet_x: 55,
				sheet_y: 2,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "270C-1F3FF",
				non_qualified: null,
				image: "270c-1f3ff.png",
				sheet_x: 55,
				sheet_y: 3,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Victory Hand",
		b: "270C-FE0F",
		c: "270C",
		j: [
			"fingers",
			"ohyeah",
			"hand",
			"peace",
			"victory",
			"two"
		],
		k: [
			54,
			55
		],
		o: 2
	},
	snow_capped_mountain: {
		a: "Snow Capped Mountain",
		b: "1F3D4-FE0F",
		c: "1F3D4",
		k: [
			10,
			39
		],
		o: 2
	},
	"flag-ac": {
		a: "Ascension Island Flag",
		b: "1F1E6-1F1E8",
		k: [
			0,
			31
		],
		o: 2
	},
	jeans: {
		a: "Jeans",
		b: "1F456",
		j: [
			"fashion",
			"shopping"
		],
		k: [
			14,
			10
		],
		o: 2
	},
	poodle: {
		a: "Poodle",
		b: "1F429",
		j: [
			"dog",
			"animal",
			"101",
			"nature",
			"pet"
		],
		k: [
			12,
			13
		],
		o: 2
	},
	crossed_fingers: {
		skin_variations: {
			"1F3FB": {
				unified: "1F91E-1F3FB",
				non_qualified: null,
				image: "1f91e-1f3fb.png",
				sheet_x: 38,
				sheet_y: 6,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F91E-1F3FC",
				non_qualified: null,
				image: "1f91e-1f3fc.png",
				sheet_x: 38,
				sheet_y: 7,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F91E-1F3FD",
				non_qualified: null,
				image: "1f91e-1f3fd.png",
				sheet_x: 38,
				sheet_y: 8,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F91E-1F3FE",
				non_qualified: null,
				image: "1f91e-1f3fe.png",
				sheet_x: 38,
				sheet_y: 9,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F91E-1F3FF",
				non_qualified: null,
				image: "1f91e-1f3ff.png",
				sheet_x: 38,
				sheet_y: 10,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Hand with Index and Middle Fingers Crossed",
		b: "1F91E",
		j: [
			"good",
			"lucky"
		],
		k: [
			38,
			5
		],
		n: [
			"hand_with_index_and_middle_fingers_crossed"
		],
		o: 4
	},
	"flag-ad": {
		a: "Andorra Flag",
		b: "1F1E6-1F1E9",
		k: [
			0,
			32
		],
		o: 2
	},
	slightly_smiling_face: {
		a: "Slightly Smiling Face",
		b: "1F642",
		j: [
			"face",
			"smile"
		],
		k: [
			31,
			44
		],
		l: [
			":)",
			"(:",
			":-)"
		],
		o: 2
	},
	apple: {
		a: "Red Apple",
		b: "1F34E",
		j: [
			"fruit",
			"mac",
			"school"
		],
		k: [
			6,
			38
		],
		o: 2
	},
	wc: {
		a: "Water Closet",
		b: "1F6BE",
		j: [
			"toilet",
			"restroom",
			"blue-square"
		],
		k: [
			36,
			15
		],
		o: 2
	},
	scarf: {
		a: "Scarf",
		b: "1F9E3",
		k: [
			51,
			22
		],
		o: 5
	},
	mountain: {
		a: "Mountain",
		b: "26F0-FE0F",
		c: "26F0",
		j: [
			"photo",
			"nature",
			"environment"
		],
		k: [
			54,
			11
		],
		o: 2
	},
	confetti_ball: {
		a: "Confetti Ball",
		b: "1F38A",
		j: [
			"festival",
			"party",
			"birthday",
			"circus"
		],
		k: [
			7,
			46
		],
		o: 2
	},
	i_love_you_hand_sign: {
		skin_variations: {
			"1F3FB": {
				unified: "1F91F-1F3FB",
				non_qualified: null,
				image: "1f91f-1f3fb.png",
				sheet_x: 38,
				sheet_y: 12,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F91F-1F3FC",
				non_qualified: null,
				image: "1f91f-1f3fc.png",
				sheet_x: 38,
				sheet_y: 13,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F91F-1F3FD",
				non_qualified: null,
				image: "1f91f-1f3fd.png",
				sheet_x: 38,
				sheet_y: 14,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F91F-1F3FE",
				non_qualified: null,
				image: "1f91f-1f3fe.png",
				sheet_x: 38,
				sheet_y: 15,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F91F-1F3FF",
				non_qualified: null,
				image: "1f91f-1f3ff.png",
				sheet_x: 38,
				sheet_y: 16,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "I Love You Hand Sign",
		b: "1F91F",
		k: [
			38,
			11
		],
		o: 5
	},
	wolf: {
		a: "Wolf Face",
		b: "1F43A",
		j: [
			"animal",
			"nature",
			"wild"
		],
		k: [
			12,
			30
		],
		o: 2
	},
	gloves: {
		a: "Gloves",
		b: "1F9E4",
		k: [
			51,
			23
		],
		o: 5
	},
	"flag-ae": {
		a: "United Arab Emirates Flag",
		b: "1F1E6-1F1EA",
		k: [
			0,
			33
		],
		o: 2
	},
	upside_down_face: {
		a: "Upside-Down Face",
		b: "1F643",
		j: [
			"face",
			"flipped",
			"silly",
			"smile"
		],
		k: [
			31,
			45
		],
		o: 2
	},
	green_apple: {
		a: "Green Apple",
		b: "1F34F",
		j: [
			"fruit",
			"nature"
		],
		k: [
			6,
			39
		],
		o: 2
	},
	passport_control: {
		a: "Passport Control",
		b: "1F6C2",
		j: [
			"custom",
			"blue-square"
		],
		k: [
			36,
			24
		],
		o: 2
	},
	volcano: {
		a: "Volcano",
		b: "1F30B",
		j: [
			"photo",
			"nature",
			"disaster"
		],
		k: [
			5,
			30
		],
		o: 2
	},
	tanabata_tree: {
		a: "Tanabata Tree",
		b: "1F38B",
		j: [
			"plant",
			"nature",
			"branch",
			"summer"
		],
		k: [
			7,
			47
		],
		o: 2
	},
	customs: {
		a: "Customs",
		b: "1F6C3",
		j: [
			"passport",
			"border",
			"blue-square"
		],
		k: [
			36,
			25
		],
		o: 2
	},
	coat: {
		a: "Coat",
		b: "1F9E5",
		k: [
			51,
			24
		],
		o: 5
	},
	wink: {
		a: "Winking Face",
		b: "1F609",
		j: [
			"face",
			"happy",
			"mischievous",
			"secret",
			";)",
			"smile",
			"eye"
		],
		k: [
			30,
			44
		],
		l: [
			";)",
			";-)"
		],
		m: ";)",
		o: 2
	},
	bamboo: {
		a: "Pine Decoration",
		b: "1F38D",
		j: [
			"plant",
			"nature",
			"vegetable",
			"panda",
			"pine_decoration"
		],
		k: [
			7,
			49
		],
		o: 2
	},
	"flag-af": {
		a: "Afghanistan Flag",
		b: "1F1E6-1F1EB",
		k: [
			0,
			34
		],
		o: 2
	},
	fox_face: {
		a: "Fox Face",
		b: "1F98A",
		j: [
			"animal",
			"nature",
			"face"
		],
		k: [
			42,
			28
		],
		o: 4
	},
	pear: {
		a: "Pear",
		b: "1F350",
		j: [
			"fruit",
			"nature",
			"food"
		],
		k: [
			6,
			40
		],
		o: 2
	},
	mount_fuji: {
		a: "Mount Fuji",
		b: "1F5FB",
		j: [
			"photo",
			"mountain",
			"nature",
			"japanese"
		],
		k: [
			30,
			30
		],
		o: 2
	},
	the_horns: {
		skin_variations: {
			"1F3FB": {
				unified: "1F918-1F3FB",
				non_qualified: null,
				image: "1f918-1f3fb.png",
				sheet_x: 37,
				sheet_y: 32,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F918-1F3FC",
				non_qualified: null,
				image: "1f918-1f3fc.png",
				sheet_x: 37,
				sheet_y: 33,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F918-1F3FD",
				non_qualified: null,
				image: "1f918-1f3fd.png",
				sheet_x: 37,
				sheet_y: 34,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F918-1F3FE",
				non_qualified: null,
				image: "1f918-1f3fe.png",
				sheet_x: 37,
				sheet_y: 35,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F918-1F3FF",
				non_qualified: null,
				image: "1f918-1f3ff.png",
				sheet_x: 37,
				sheet_y: 36,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Sign of the Horns",
		b: "1F918",
		k: [
			37,
			31
		],
		n: [
			"sign_of_the_horns"
		],
		o: 2
	},
	call_me_hand: {
		skin_variations: {
			"1F3FB": {
				unified: "1F919-1F3FB",
				non_qualified: null,
				image: "1f919-1f3fb.png",
				sheet_x: 37,
				sheet_y: 38,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F919-1F3FC",
				non_qualified: null,
				image: "1f919-1f3fc.png",
				sheet_x: 37,
				sheet_y: 39,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F919-1F3FD",
				non_qualified: null,
				image: "1f919-1f3fd.png",
				sheet_x: 37,
				sheet_y: 40,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F919-1F3FE",
				non_qualified: null,
				image: "1f919-1f3fe.png",
				sheet_x: 37,
				sheet_y: 41,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F919-1F3FF",
				non_qualified: null,
				image: "1f919-1f3ff.png",
				sheet_x: 37,
				sheet_y: 42,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Call Me Hand",
		b: "1F919",
		j: [
			"hands",
			"gesture"
		],
		k: [
			37,
			37
		],
		o: 4
	},
	"flag-ag": {
		a: "Antigua & Barbuda Flag",
		b: "1F1E6-1F1EC",
		k: [
			0,
			35
		],
		o: 2
	},
	raccoon: {
		a: "Raccoon",
		b: "1F99D",
		k: [
			42,
			47
		],
		o: 11
	},
	dolls: {
		a: "Japanese Dolls",
		b: "1F38E",
		j: [
			"japanese",
			"toy",
			"kimono"
		],
		k: [
			7,
			50
		],
		o: 2
	},
	blush: {
		a: "Smiling Face with Smiling Eyes",
		b: "1F60A",
		j: [
			"face",
			"smile",
			"happy",
			"flushed",
			"crush",
			"embarrassed",
			"shy",
			"joy"
		],
		k: [
			30,
			45
		],
		m: ":)",
		o: 2
	},
	peach: {
		a: "Peach",
		b: "1F351",
		j: [
			"fruit",
			"nature",
			"food"
		],
		k: [
			6,
			41
		],
		o: 2
	},
	baggage_claim: {
		a: "Baggage Claim",
		b: "1F6C4",
		j: [
			"blue-square",
			"airport",
			"transport"
		],
		k: [
			36,
			26
		],
		o: 2
	},
	socks: {
		a: "Socks",
		b: "1F9E6",
		k: [
			51,
			25
		],
		o: 5
	},
	camping: {
		a: "Camping",
		b: "1F3D5-FE0F",
		c: "1F3D5",
		j: [
			"photo",
			"outdoors",
			"tent"
		],
		k: [
			10,
			40
		],
		o: 2
	},
	dress: {
		a: "Dress",
		b: "1F457",
		j: [
			"clothes",
			"fashion",
			"shopping"
		],
		k: [
			14,
			11
		],
		o: 2
	},
	beach_with_umbrella: {
		a: "Beach with Umbrella",
		b: "1F3D6-FE0F",
		c: "1F3D6",
		k: [
			10,
			41
		],
		o: 2
	},
	cherries: {
		a: "Cherries",
		b: "1F352",
		j: [
			"food",
			"fruit"
		],
		k: [
			6,
			42
		],
		o: 2
	},
	cat: {
		a: "Cat Face",
		b: "1F431",
		j: [
			"animal",
			"meow",
			"nature",
			"pet",
			"kitten"
		],
		k: [
			12,
			21
		],
		o: 2
	},
	point_left: {
		skin_variations: {
			"1F3FB": {
				unified: "1F448-1F3FB",
				non_qualified: null,
				image: "1f448-1f3fb.png",
				sheet_x: 13,
				sheet_y: 9,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F448-1F3FC",
				non_qualified: null,
				image: "1f448-1f3fc.png",
				sheet_x: 13,
				sheet_y: 10,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F448-1F3FD",
				non_qualified: null,
				image: "1f448-1f3fd.png",
				sheet_x: 13,
				sheet_y: 11,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F448-1F3FE",
				non_qualified: null,
				image: "1f448-1f3fe.png",
				sheet_x: 13,
				sheet_y: 12,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F448-1F3FF",
				non_qualified: null,
				image: "1f448-1f3ff.png",
				sheet_x: 13,
				sheet_y: 13,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "White Left Pointing Backhand Index",
		b: "1F448",
		j: [
			"direction",
			"fingers",
			"hand",
			"left"
		],
		k: [
			13,
			8
		],
		o: 2
	},
	left_luggage: {
		a: "Left Luggage",
		b: "1F6C5",
		j: [
			"blue-square",
			"travel"
		],
		k: [
			36,
			27
		],
		o: 2
	},
	"flag-ai": {
		a: "Anguilla Flag",
		b: "1F1E6-1F1EE",
		k: [
			0,
			36
		],
		o: 2
	},
	innocent: {
		a: "Smiling Face with Halo",
		b: "1F607",
		j: [
			"face",
			"angel",
			"heaven",
			"halo"
		],
		k: [
			30,
			42
		],
		o: 2
	},
	flags: {
		a: "Carp Streamer",
		b: "1F38F",
		j: [
			"fish",
			"japanese",
			"koinobori",
			"carp",
			"banner"
		],
		k: [
			7,
			51
		],
		o: 2
	},
	warning: {
		a: "Warning Sign",
		b: "26A0-FE0F",
		c: "26A0",
		j: [
			"exclamation",
			"wip",
			"alert",
			"error",
			"problem",
			"issue"
		],
		k: [
			53,
			50
		],
		o: 2
	},
	strawberry: {
		a: "Strawberry",
		b: "1F353",
		j: [
			"fruit",
			"food",
			"nature"
		],
		k: [
			6,
			43
		],
		o: 2
	},
	point_right: {
		skin_variations: {
			"1F3FB": {
				unified: "1F449-1F3FB",
				non_qualified: null,
				image: "1f449-1f3fb.png",
				sheet_x: 13,
				sheet_y: 15,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F449-1F3FC",
				non_qualified: null,
				image: "1f449-1f3fc.png",
				sheet_x: 13,
				sheet_y: 16,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F449-1F3FD",
				non_qualified: null,
				image: "1f449-1f3fd.png",
				sheet_x: 13,
				sheet_y: 17,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F449-1F3FE",
				non_qualified: null,
				image: "1f449-1f3fe.png",
				sheet_x: 13,
				sheet_y: 18,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F449-1F3FF",
				non_qualified: null,
				image: "1f449-1f3ff.png",
				sheet_x: 13,
				sheet_y: 19,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "White Right Pointing Backhand Index",
		b: "1F449",
		j: [
			"fingers",
			"hand",
			"direction",
			"right"
		],
		k: [
			13,
			14
		],
		o: 2
	},
	desert: {
		a: "Desert",
		b: "1F3DC-FE0F",
		c: "1F3DC",
		j: [
			"photo",
			"warm",
			"saharah"
		],
		k: [
			10,
			47
		],
		o: 2
	},
	kimono: {
		a: "Kimono",
		b: "1F458",
		j: [
			"dress",
			"fashion",
			"women",
			"female",
			"japanese"
		],
		k: [
			14,
			12
		],
		o: 2
	},
	"flag-al": {
		a: "Albania Flag",
		b: "1F1E6-1F1F1",
		k: [
			0,
			37
		],
		o: 2
	},
	wind_chime: {
		a: "Wind Chime",
		b: "1F390",
		j: [
			"nature",
			"ding",
			"spring",
			"bell"
		],
		k: [
			7,
			52
		],
		o: 2
	},
	smiling_face_with_3_hearts: {
		a: "Smiling Face with Smiling Eyes and Three Hearts",
		b: "1F970",
		k: [
			42,
			6
		],
		o: 11
	},
	cat2: {
		a: "Cat",
		b: "1F408",
		j: [
			"animal",
			"meow",
			"pet",
			"cats"
		],
		k: [
			11,
			36
		],
		o: 2
	},
	rice_scene: {
		a: "Moon Viewing Ceremony",
		b: "1F391",
		j: [
			"photo",
			"japan",
			"asia",
			"tsukimi"
		],
		k: [
			7,
			53
		],
		o: 2
	},
	heart_eyes: {
		a: "Smiling Face with Heart-Shaped Eyes",
		b: "1F60D",
		j: [
			"face",
			"love",
			"like",
			"affection",
			"valentines",
			"infatuation",
			"crush",
			"heart"
		],
		k: [
			30,
			48
		],
		o: 2
	},
	sari: {
		a: "Sari",
		b: "1F97B",
		k: [
			42,
			13
		],
		o: 12
	},
	"flag-am": {
		a: "Armenia Flag",
		b: "1F1E6-1F1F2",
		k: [
			0,
			38
		],
		o: 2
	},
	lion_face: {
		a: "Lion Face",
		b: "1F981",
		k: [
			42,
			19
		],
		o: 2
	},
	desert_island: {
		a: "Desert Island",
		b: "1F3DD-FE0F",
		c: "1F3DD",
		j: [
			"photo",
			"tropical",
			"mojito"
		],
		k: [
			10,
			48
		],
		o: 2
	},
	point_up_2: {
		skin_variations: {
			"1F3FB": {
				unified: "1F446-1F3FB",
				non_qualified: null,
				image: "1f446-1f3fb.png",
				sheet_x: 12,
				sheet_y: 54,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F446-1F3FC",
				non_qualified: null,
				image: "1f446-1f3fc.png",
				sheet_x: 12,
				sheet_y: 55,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F446-1F3FD",
				non_qualified: null,
				image: "1f446-1f3fd.png",
				sheet_x: 12,
				sheet_y: 56,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F446-1F3FE",
				non_qualified: null,
				image: "1f446-1f3fe.png",
				sheet_x: 13,
				sheet_y: 0,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F446-1F3FF",
				non_qualified: null,
				image: "1f446-1f3ff.png",
				sheet_x: 13,
				sheet_y: 1,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "White Up Pointing Backhand Index",
		b: "1F446",
		j: [
			"fingers",
			"hand",
			"direction",
			"up"
		],
		k: [
			12,
			53
		],
		o: 2
	},
	kiwifruit: {
		a: "Kiwifruit",
		b: "1F95D",
		k: [
			41,
			44
		],
		o: 4
	},
	children_crossing: {
		a: "Children Crossing",
		b: "1F6B8",
		j: [
			"school",
			"warning",
			"danger",
			"sign",
			"driving",
			"yellow-diamond"
		],
		k: [
			36,
			9
		],
		o: 2
	},
	national_park: {
		a: "National Park",
		b: "1F3DE-FE0F",
		c: "1F3DE",
		j: [
			"photo",
			"environment",
			"nature"
		],
		k: [
			10,
			49
		],
		o: 2
	},
	no_entry: {
		a: "No Entry",
		b: "26D4",
		j: [
			"limit",
			"security",
			"privacy",
			"bad",
			"denied",
			"stop",
			"circle"
		],
		k: [
			54,
			8
		],
		o: 2
	},
	"one-piece_swimsuit": {
		a: "One-Piece Swimsuit",
		b: "1FA71",
		k: [
			51,
			52
		],
		o: 12
	},
	tiger: {
		a: "Tiger Face",
		b: "1F42F",
		j: [
			"animal",
			"cat",
			"danger",
			"wild",
			"nature",
			"roar"
		],
		k: [
			12,
			19
		],
		o: 2
	},
	red_envelope: {
		a: "Red Gift Envelope",
		b: "1F9E7",
		k: [
			51,
			26
		],
		o: 11
	},
	"star-struck": {
		a: "Grinning Face with Star Eyes",
		b: "1F929",
		k: [
			38,
			43
		],
		n: [
			"grinning_face_with_star_eyes"
		],
		o: 5
	},
	middle_finger: {
		skin_variations: {
			"1F3FB": {
				unified: "1F595-1F3FB",
				non_qualified: null,
				image: "1f595-1f3fb.png",
				sheet_x: 29,
				sheet_y: 55,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F595-1F3FC",
				non_qualified: null,
				image: "1f595-1f3fc.png",
				sheet_x: 29,
				sheet_y: 56,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F595-1F3FD",
				non_qualified: null,
				image: "1f595-1f3fd.png",
				sheet_x: 30,
				sheet_y: 0,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F595-1F3FE",
				non_qualified: null,
				image: "1f595-1f3fe.png",
				sheet_x: 30,
				sheet_y: 1,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F595-1F3FF",
				non_qualified: null,
				image: "1f595-1f3ff.png",
				sheet_x: 30,
				sheet_y: 2,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Reversed Hand with Middle Finger Extended",
		b: "1F595",
		k: [
			29,
			54
		],
		n: [
			"reversed_hand_with_middle_finger_extended"
		],
		o: 2
	},
	"flag-ao": {
		a: "Angola Flag",
		b: "1F1E6-1F1F4",
		k: [
			0,
			39
		],
		o: 2
	},
	tomato: {
		a: "Tomato",
		b: "1F345",
		j: [
			"fruit",
			"vegetable",
			"nature",
			"food"
		],
		k: [
			6,
			29
		],
		o: 2
	},
	coconut: {
		a: "Coconut",
		b: "1F965",
		k: [
			41,
			52
		],
		o: 5
	},
	ribbon: {
		a: "Ribbon",
		b: "1F380",
		j: [
			"decoration",
			"pink",
			"girl",
			"bowtie"
		],
		k: [
			7,
			31
		],
		o: 2
	},
	no_entry_sign: {
		a: "No Entry Sign",
		b: "1F6AB",
		j: [
			"forbid",
			"stop",
			"limit",
			"denied",
			"disallow",
			"circle"
		],
		k: [
			35,
			2
		],
		o: 2
	},
	point_down: {
		skin_variations: {
			"1F3FB": {
				unified: "1F447-1F3FB",
				non_qualified: null,
				image: "1f447-1f3fb.png",
				sheet_x: 13,
				sheet_y: 3,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F447-1F3FC",
				non_qualified: null,
				image: "1f447-1f3fc.png",
				sheet_x: 13,
				sheet_y: 4,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F447-1F3FD",
				non_qualified: null,
				image: "1f447-1f3fd.png",
				sheet_x: 13,
				sheet_y: 5,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F447-1F3FE",
				non_qualified: null,
				image: "1f447-1f3fe.png",
				sheet_x: 13,
				sheet_y: 6,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F447-1F3FF",
				non_qualified: null,
				image: "1f447-1f3ff.png",
				sheet_x: 13,
				sheet_y: 7,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "White Down Pointing Backhand Index",
		b: "1F447",
		j: [
			"fingers",
			"hand",
			"direction",
			"down"
		],
		k: [
			13,
			2
		],
		o: 2
	},
	"flag-aq": {
		a: "Antarctica Flag",
		b: "1F1E6-1F1F6",
		k: [
			0,
			40
		],
		o: 2
	},
	briefs: {
		a: "Briefs",
		b: "1FA72",
		k: [
			51,
			53
		],
		o: 12
	},
	kissing_heart: {
		a: "Face Throwing a Kiss",
		b: "1F618",
		j: [
			"face",
			"love",
			"like",
			"affection",
			"valentines",
			"infatuation",
			"kiss"
		],
		k: [
			31,
			2
		],
		l: [
			":*",
			":-*"
		],
		o: 2
	},
	tiger2: {
		a: "Tiger",
		b: "1F405",
		j: [
			"animal",
			"nature",
			"roar"
		],
		k: [
			11,
			33
		],
		o: 2
	},
	stadium: {
		a: "Stadium",
		b: "1F3DF-FE0F",
		c: "1F3DF",
		j: [
			"photo",
			"place",
			"sports",
			"concert",
			"venue"
		],
		k: [
			10,
			50
		],
		o: 2
	},
	leopard: {
		a: "Leopard",
		b: "1F406",
		j: [
			"animal",
			"nature"
		],
		k: [
			11,
			34
		],
		o: 2
	},
	no_bicycles: {
		a: "No Bicycles",
		b: "1F6B3",
		j: [
			"cyclist",
			"prohibited",
			"circle"
		],
		k: [
			35,
			10
		],
		o: 2
	},
	kissing: {
		a: "Kissing Face",
		b: "1F617",
		j: [
			"love",
			"like",
			"face",
			"3",
			"valentines",
			"infatuation",
			"kiss"
		],
		k: [
			31,
			1
		],
		o: 2
	},
	"flag-ar": {
		a: "Argentina Flag",
		b: "1F1E6-1F1F7",
		k: [
			0,
			41
		],
		o: 2
	},
	avocado: {
		a: "Avocado",
		b: "1F951",
		j: [
			"fruit",
			"food"
		],
		k: [
			41,
			32
		],
		o: 4
	},
	point_up: {
		skin_variations: {
			"1F3FB": {
				unified: "261D-1F3FB",
				non_qualified: null,
				image: "261d-1f3fb.png",
				sheet_x: 53,
				sheet_y: 3,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "261D-1F3FC",
				non_qualified: null,
				image: "261d-1f3fc.png",
				sheet_x: 53,
				sheet_y: 4,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "261D-1F3FD",
				non_qualified: null,
				image: "261d-1f3fd.png",
				sheet_x: 53,
				sheet_y: 5,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "261D-1F3FE",
				non_qualified: null,
				image: "261d-1f3fe.png",
				sheet_x: 53,
				sheet_y: 6,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "261D-1F3FF",
				non_qualified: null,
				image: "261d-1f3ff.png",
				sheet_x: 53,
				sheet_y: 7,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "White Up Pointing Index",
		b: "261D-FE0F",
		c: "261D",
		j: [
			"hand",
			"fingers",
			"direction",
			"up"
		],
		k: [
			53,
			2
		],
		o: 2
	},
	gift: {
		a: "Wrapped Present",
		b: "1F381",
		j: [
			"present",
			"birthday",
			"christmas",
			"xmas"
		],
		k: [
			7,
			32
		],
		o: 2
	},
	classical_building: {
		a: "Classical Building",
		b: "1F3DB-FE0F",
		c: "1F3DB",
		j: [
			"art",
			"culture",
			"history"
		],
		k: [
			10,
			46
		],
		o: 2
	},
	shorts: {
		a: "Shorts",
		b: "1FA73",
		k: [
			51,
			54
		],
		o: 12
	},
	"+1": {
		skin_variations: {
			"1F3FB": {
				unified: "1F44D-1F3FB",
				non_qualified: null,
				image: "1f44d-1f3fb.png",
				sheet_x: 13,
				sheet_y: 39,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F44D-1F3FC",
				non_qualified: null,
				image: "1f44d-1f3fc.png",
				sheet_x: 13,
				sheet_y: 40,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F44D-1F3FD",
				non_qualified: null,
				image: "1f44d-1f3fd.png",
				sheet_x: 13,
				sheet_y: 41,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F44D-1F3FE",
				non_qualified: null,
				image: "1f44d-1f3fe.png",
				sheet_x: 13,
				sheet_y: 42,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F44D-1F3FF",
				non_qualified: null,
				image: "1f44d-1f3ff.png",
				sheet_x: 13,
				sheet_y: 43,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Thumbs Up Sign",
		b: "1F44D",
		j: [
			"thumbsup",
			"yes",
			"awesome",
			"good",
			"agree",
			"accept",
			"cool",
			"hand",
			"like"
		],
		k: [
			13,
			38
		],
		n: [
			"thumbsup"
		],
		o: 2
	},
	horse: {
		a: "Horse Face",
		b: "1F434",
		j: [
			"animal",
			"brown",
			"nature"
		],
		k: [
			12,
			24
		],
		o: 2
	},
	bikini: {
		a: "Bikini",
		b: "1F459",
		j: [
			"swimming",
			"female",
			"woman",
			"girl",
			"fashion",
			"beach",
			"summer"
		],
		k: [
			14,
			13
		],
		o: 2
	},
	no_smoking: {
		a: "No Smoking Symbol",
		b: "1F6AD",
		j: [
			"cigarette",
			"blue-square",
			"smell",
			"smoke"
		],
		k: [
			35,
			4
		],
		o: 2
	},
	eggplant: {
		a: "Aubergine",
		b: "1F346",
		j: [
			"vegetable",
			"nature",
			"food",
			"aubergine"
		],
		k: [
			6,
			30
		],
		o: 2
	},
	"flag-as": {
		a: "American Samoa Flag",
		b: "1F1E6-1F1F8",
		k: [
			0,
			42
		],
		o: 2
	},
	reminder_ribbon: {
		a: "Reminder Ribbon",
		b: "1F397-FE0F",
		c: "1F397",
		j: [
			"sports",
			"cause",
			"support",
			"awareness"
		],
		k: [
			8,
			0
		],
		o: 2
	},
	building_construction: {
		a: "Building Construction",
		b: "1F3D7-FE0F",
		c: "1F3D7",
		j: [
			"wip",
			"working",
			"progress"
		],
		k: [
			10,
			42
		],
		o: 2
	},
	relaxed: {
		a: "White Smiling Face",
		b: "263A-FE0F",
		c: "263A",
		j: [
			"face",
			"blush",
			"massage",
			"happiness"
		],
		k: [
			53,
			17
		],
		o: 2
	},
	kissing_closed_eyes: {
		a: "Kissing Face with Closed Eyes",
		b: "1F61A",
		j: [
			"face",
			"love",
			"like",
			"affection",
			"valentines",
			"infatuation",
			"kiss"
		],
		k: [
			31,
			4
		],
		o: 2
	},
	"-1": {
		skin_variations: {
			"1F3FB": {
				unified: "1F44E-1F3FB",
				non_qualified: null,
				image: "1f44e-1f3fb.png",
				sheet_x: 13,
				sheet_y: 45,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F44E-1F3FC",
				non_qualified: null,
				image: "1f44e-1f3fc.png",
				sheet_x: 13,
				sheet_y: 46,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F44E-1F3FD",
				non_qualified: null,
				image: "1f44e-1f3fd.png",
				sheet_x: 13,
				sheet_y: 47,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F44E-1F3FE",
				non_qualified: null,
				image: "1f44e-1f3fe.png",
				sheet_x: 13,
				sheet_y: 48,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F44E-1F3FF",
				non_qualified: null,
				image: "1f44e-1f3ff.png",
				sheet_x: 13,
				sheet_y: 49,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Thumbs Down Sign",
		b: "1F44E",
		j: [
			"thumbsdown",
			"no",
			"dislike",
			"hand"
		],
		k: [
			13,
			44
		],
		n: [
			"thumbsdown"
		],
		o: 2
	},
	admission_tickets: {
		a: "Admission Tickets",
		b: "1F39F-FE0F",
		c: "1F39F",
		k: [
			8,
			5
		],
		o: 2
	},
	"flag-at": {
		a: "Austria Flag",
		b: "1F1E6-1F1F9",
		k: [
			0,
			43
		],
		o: 2
	},
	womans_clothes: {
		a: "Womans Clothes",
		b: "1F45A",
		j: [
			"fashion",
			"shopping_bags",
			"female"
		],
		k: [
			14,
			14
		],
		o: 2
	},
	do_not_litter: {
		a: "Do Not Litter Symbol",
		b: "1F6AF",
		j: [
			"trash",
			"bin",
			"garbage",
			"circle"
		],
		k: [
			35,
			6
		],
		o: 2
	},
	potato: {
		a: "Potato",
		b: "1F954",
		j: [
			"food",
			"tuber",
			"vegatable",
			"starch"
		],
		k: [
			41,
			35
		],
		o: 4
	},
	racehorse: {
		a: "Horse",
		b: "1F40E",
		j: [
			"animal",
			"gamble",
			"luck"
		],
		k: [
			11,
			42
		],
		o: 2
	},
	bricks: {
		a: "Brick",
		b: "1F9F1",
		k: [
			51,
			36
		],
		o: 11
	},
	fist: {
		skin_variations: {
			"1F3FB": {
				unified: "270A-1F3FB",
				non_qualified: null,
				image: "270a-1f3fb.png",
				sheet_x: 54,
				sheet_y: 44,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "270A-1F3FC",
				non_qualified: null,
				image: "270a-1f3fc.png",
				sheet_x: 54,
				sheet_y: 45,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "270A-1F3FD",
				non_qualified: null,
				image: "270a-1f3fd.png",
				sheet_x: 54,
				sheet_y: 46,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "270A-1F3FE",
				non_qualified: null,
				image: "270a-1f3fe.png",
				sheet_x: 54,
				sheet_y: 47,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "270A-1F3FF",
				non_qualified: null,
				image: "270a-1f3ff.png",
				sheet_x: 54,
				sheet_y: 48,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Raised Fist",
		b: "270A",
		j: [
			"fingers",
			"hand",
			"grasp"
		],
		k: [
			54,
			43
		],
		o: 2
	},
	house_buildings: {
		a: "House Buildings",
		b: "1F3D8-FE0F",
		c: "1F3D8",
		k: [
			10,
			43
		],
		o: 2
	},
	carrot: {
		a: "Carrot",
		b: "1F955",
		j: [
			"vegetable",
			"food",
			"orange"
		],
		k: [
			41,
			36
		],
		o: 4
	},
	ticket: {
		a: "Ticket",
		b: "1F3AB",
		j: [
			"event",
			"concert",
			"pass"
		],
		k: [
			8,
			17
		],
		o: 2
	},
	"flag-au": {
		a: "Australia Flag",
		b: "1F1E6-1F1FA",
		k: [
			0,
			44
		],
		o: 2
	},
	"non-potable_water": {
		a: "Non-Potable Water Symbol",
		b: "1F6B1",
		j: [
			"drink",
			"faucet",
			"tap",
			"circle"
		],
		k: [
			35,
			8
		],
		o: 2
	},
	purse: {
		a: "Purse",
		b: "1F45B",
		j: [
			"fashion",
			"accessories",
			"money",
			"sales",
			"shopping"
		],
		k: [
			14,
			15
		],
		o: 2
	},
	unicorn_face: {
		a: "Unicorn Face",
		b: "1F984",
		k: [
			42,
			22
		],
		o: 2
	},
	kissing_smiling_eyes: {
		a: "Kissing Face with Smiling Eyes",
		b: "1F619",
		j: [
			"face",
			"affection",
			"valentines",
			"infatuation",
			"kiss"
		],
		k: [
			31,
			3
		],
		o: 2
	},
	facepunch: {
		skin_variations: {
			"1F3FB": {
				unified: "1F44A-1F3FB",
				non_qualified: null,
				image: "1f44a-1f3fb.png",
				sheet_x: 13,
				sheet_y: 21,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F44A-1F3FC",
				non_qualified: null,
				image: "1f44a-1f3fc.png",
				sheet_x: 13,
				sheet_y: 22,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F44A-1F3FD",
				non_qualified: null,
				image: "1f44a-1f3fd.png",
				sheet_x: 13,
				sheet_y: 23,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F44A-1F3FE",
				non_qualified: null,
				image: "1f44a-1f3fe.png",
				sheet_x: 13,
				sheet_y: 24,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F44A-1F3FF",
				non_qualified: null,
				image: "1f44a-1f3ff.png",
				sheet_x: 13,
				sheet_y: 25,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Fisted Hand Sign",
		b: "1F44A",
		j: [
			"angry",
			"violence",
			"fist",
			"hit",
			"attack",
			"hand"
		],
		k: [
			13,
			20
		],
		n: [
			"punch"
		],
		o: 2
	},
	medal: {
		a: "Medal",
		b: "1F396-FE0F",
		c: "1F396",
		k: [
			7,
			56
		],
		o: 2
	},
	zebra_face: {
		a: "Zebra Face",
		b: "1F993",
		k: [
			42,
			37
		],
		o: 5
	},
	handbag: {
		a: "Handbag",
		b: "1F45C",
		j: [
			"fashion",
			"accessory",
			"accessories",
			"shopping"
		],
		k: [
			14,
			16
		],
		o: 2
	},
	derelict_house_building: {
		a: "Derelict House Building",
		b: "1F3DA-FE0F",
		c: "1F3DA",
		k: [
			10,
			45
		],
		o: 2
	},
	yum: {
		a: "Face Savouring Delicious Food",
		b: "1F60B",
		j: [
			"happy",
			"joy",
			"tongue",
			"smile",
			"face",
			"silly",
			"yummy",
			"nom",
			"delicious",
			"savouring"
		],
		k: [
			30,
			46
		],
		o: 2
	},
	corn: {
		a: "Ear of Maize",
		b: "1F33D",
		j: [
			"food",
			"vegetable",
			"plant"
		],
		k: [
			6,
			21
		],
		o: 2
	},
	"flag-aw": {
		a: "Aruba Flag",
		b: "1F1E6-1F1FC",
		k: [
			0,
			45
		],
		o: 2
	},
	no_pedestrians: {
		a: "No Pedestrians",
		b: "1F6B7",
		j: [
			"rules",
			"crossing",
			"walking",
			"circle"
		],
		k: [
			36,
			8
		],
		o: 2
	},
	house: {
		a: "House Building",
		b: "1F3E0",
		j: [
			"building",
			"home"
		],
		k: [
			10,
			51
		],
		o: 2
	},
	hot_pepper: {
		a: "Hot Pepper",
		b: "1F336-FE0F",
		c: "1F336",
		j: [
			"food",
			"spicy",
			"chilli",
			"chili"
		],
		k: [
			6,
			14
		],
		o: 2
	},
	"flag-ax": {
		a: "Åland Islands Flag",
		b: "1F1E6-1F1FD",
		k: [
			0,
			46
		],
		o: 2
	},
	trophy: {
		a: "Trophy",
		b: "1F3C6",
		j: [
			"win",
			"award",
			"contest",
			"place",
			"ftw",
			"ceremony"
		],
		k: [
			9,
			26
		],
		o: 2
	},
	deer: {
		a: "Deer",
		b: "1F98C",
		j: [
			"animal",
			"nature",
			"horns",
			"venison"
		],
		k: [
			42,
			30
		],
		o: 4
	},
	"left-facing_fist": {
		skin_variations: {
			"1F3FB": {
				unified: "1F91B-1F3FB",
				non_qualified: null,
				image: "1f91b-1f3fb.png",
				sheet_x: 37,
				sheet_y: 50,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F91B-1F3FC",
				non_qualified: null,
				image: "1f91b-1f3fc.png",
				sheet_x: 37,
				sheet_y: 51,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F91B-1F3FD",
				non_qualified: null,
				image: "1f91b-1f3fd.png",
				sheet_x: 37,
				sheet_y: 52,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F91B-1F3FE",
				non_qualified: null,
				image: "1f91b-1f3fe.png",
				sheet_x: 37,
				sheet_y: 53,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F91B-1F3FF",
				non_qualified: null,
				image: "1f91b-1f3ff.png",
				sheet_x: 37,
				sheet_y: 54,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Left-Facing Fist",
		b: "1F91B",
		k: [
			37,
			49
		],
		o: 4
	},
	stuck_out_tongue: {
		a: "Face with Stuck-out Tongue",
		b: "1F61B",
		j: [
			"face",
			"prank",
			"childish",
			"playful",
			"mischievous",
			"smile",
			"tongue"
		],
		k: [
			31,
			5
		],
		l: [
			":p",
			":-p",
			":P",
			":-P",
			":b",
			":-b"
		],
		m: ":p",
		o: 2
	},
	pouch: {
		a: "Pouch",
		b: "1F45D",
		j: [
			"bag",
			"accessories",
			"shopping"
		],
		k: [
			14,
			17
		],
		o: 2
	},
	no_mobile_phones: {
		a: "No Mobile Phones",
		b: "1F4F5",
		j: [
			"iphone",
			"mute",
			"circle"
		],
		k: [
			27,
			18
		],
		o: 2
	},
	stuck_out_tongue_winking_eye: {
		a: "Face with Stuck-out Tongue and Winking Eye",
		b: "1F61C",
		j: [
			"face",
			"prank",
			"childish",
			"playful",
			"mischievous",
			"smile",
			"wink",
			"tongue"
		],
		k: [
			31,
			6
		],
		l: [
			";p",
			";-p",
			";b",
			";-b",
			";P",
			";-P"
		],
		m: ";p",
		o: 2
	},
	sports_medal: {
		a: "Sports Medal",
		b: "1F3C5",
		k: [
			9,
			25
		],
		o: 2
	},
	cucumber: {
		a: "Cucumber",
		b: "1F952",
		j: [
			"fruit",
			"food",
			"pickle"
		],
		k: [
			41,
			33
		],
		o: 4
	},
	cow: {
		a: "Cow Face",
		b: "1F42E",
		j: [
			"beef",
			"ox",
			"animal",
			"nature",
			"moo",
			"milk"
		],
		k: [
			12,
			18
		],
		o: 2
	},
	underage: {
		a: "No One Under Eighteen Symbol",
		b: "1F51E",
		j: [
			"18",
			"drink",
			"pub",
			"night",
			"minor",
			"circle"
		],
		k: [
			28,
			1
		],
		o: 2
	},
	"flag-az": {
		a: "Azerbaijan Flag",
		b: "1F1E6-1F1FF",
		k: [
			0,
			47
		],
		o: 2
	},
	shopping_bags: {
		a: "Shopping Bags",
		b: "1F6CD-FE0F",
		c: "1F6CD",
		k: [
			36,
			35
		],
		o: 2
	},
	"right-facing_fist": {
		skin_variations: {
			"1F3FB": {
				unified: "1F91C-1F3FB",
				non_qualified: null,
				image: "1f91c-1f3fb.png",
				sheet_x: 37,
				sheet_y: 56,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F91C-1F3FC",
				non_qualified: null,
				image: "1f91c-1f3fc.png",
				sheet_x: 38,
				sheet_y: 0,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F91C-1F3FD",
				non_qualified: null,
				image: "1f91c-1f3fd.png",
				sheet_x: 38,
				sheet_y: 1,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F91C-1F3FE",
				non_qualified: null,
				image: "1f91c-1f3fe.png",
				sheet_x: 38,
				sheet_y: 2,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F91C-1F3FF",
				non_qualified: null,
				image: "1f91c-1f3ff.png",
				sheet_x: 38,
				sheet_y: 3,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Right-Facing Fist",
		b: "1F91C",
		k: [
			37,
			55
		],
		o: 4
	},
	house_with_garden: {
		a: "House with Garden",
		b: "1F3E1",
		j: [
			"home",
			"plant",
			"nature"
		],
		k: [
			10,
			52
		],
		o: 2
	},
	clap: {
		skin_variations: {
			"1F3FB": {
				unified: "1F44F-1F3FB",
				non_qualified: null,
				image: "1f44f-1f3fb.png",
				sheet_x: 13,
				sheet_y: 51,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F44F-1F3FC",
				non_qualified: null,
				image: "1f44f-1f3fc.png",
				sheet_x: 13,
				sheet_y: 52,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F44F-1F3FD",
				non_qualified: null,
				image: "1f44f-1f3fd.png",
				sheet_x: 13,
				sheet_y: 53,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F44F-1F3FE",
				non_qualified: null,
				image: "1f44f-1f3fe.png",
				sheet_x: 13,
				sheet_y: 54,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F44F-1F3FF",
				non_qualified: null,
				image: "1f44f-1f3ff.png",
				sheet_x: 13,
				sheet_y: 55,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Clapping Hands Sign",
		b: "1F44F",
		j: [
			"hands",
			"praise",
			"applause",
			"congrats",
			"yay"
		],
		k: [
			13,
			50
		],
		o: 2
	},
	leafy_green: {
		a: "Leafy Green",
		b: "1F96C",
		k: [
			42,
			2
		],
		o: 11
	},
	office: {
		a: "Office Building",
		b: "1F3E2",
		j: [
			"building",
			"bureau",
			"work"
		],
		k: [
			10,
			53
		],
		o: 2
	},
	"flag-ba": {
		a: "Bosnia & Herzegovina Flag",
		b: "1F1E7-1F1E6",
		k: [
			0,
			48
		],
		o: 2
	},
	zany_face: {
		a: "Grinning Face with One Large and One Small Eye",
		b: "1F92A",
		k: [
			38,
			44
		],
		n: [
			"grinning_face_with_one_large_and_one_small_eye"
		],
		o: 5
	},
	first_place_medal: {
		a: "First Place Medal",
		b: "1F947",
		k: [
			41,
			22
		],
		o: 4
	},
	ox: {
		a: "Ox",
		b: "1F402",
		j: [
			"animal",
			"cow",
			"beef"
		],
		k: [
			11,
			30
		],
		o: 2
	},
	school_satchel: {
		a: "School Satchel",
		b: "1F392",
		j: [
			"student",
			"education",
			"bag",
			"backpack"
		],
		k: [
			7,
			54
		],
		o: 2
	},
	radioactive_sign: {
		a: "Radioactive Sign",
		b: "2622-FE0F",
		c: "2622",
		k: [
			53,
			9
		],
		o: 2
	},
	second_place_medal: {
		a: "Second Place Medal",
		b: "1F948",
		k: [
			41,
			23
		],
		o: 4
	},
	stuck_out_tongue_closed_eyes: {
		a: "Face with Stuck-out Tongue and Tightly-Closed Eyes",
		b: "1F61D",
		j: [
			"face",
			"prank",
			"playful",
			"mischievous",
			"smile",
			"tongue"
		],
		k: [
			31,
			7
		],
		o: 2
	},
	broccoli: {
		a: "Broccoli",
		b: "1F966",
		k: [
			41,
			53
		],
		o: 5
	},
	biohazard_sign: {
		a: "Biohazard Sign",
		b: "2623-FE0F",
		c: "2623",
		k: [
			53,
			10
		],
		o: 2
	},
	mans_shoe: {
		a: "Mans Shoe",
		b: "1F45E",
		j: [
			"fashion",
			"male"
		],
		k: [
			14,
			18
		],
		n: [
			"shoe"
		],
		o: 2
	},
	raised_hands: {
		skin_variations: {
			"1F3FB": {
				unified: "1F64C-1F3FB",
				non_qualified: null,
				image: "1f64c-1f3fb.png",
				sheet_x: 33,
				sheet_y: 9,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F64C-1F3FC",
				non_qualified: null,
				image: "1f64c-1f3fc.png",
				sheet_x: 33,
				sheet_y: 10,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F64C-1F3FD",
				non_qualified: null,
				image: "1f64c-1f3fd.png",
				sheet_x: 33,
				sheet_y: 11,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F64C-1F3FE",
				non_qualified: null,
				image: "1f64c-1f3fe.png",
				sheet_x: 33,
				sheet_y: 12,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F64C-1F3FF",
				non_qualified: null,
				image: "1f64c-1f3ff.png",
				sheet_x: 33,
				sheet_y: 13,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Person Raising Both Hands in Celebration",
		b: "1F64C",
		j: [
			"gesture",
			"hooray",
			"yea",
			"celebration",
			"hands"
		],
		k: [
			33,
			8
		],
		o: 2
	},
	post_office: {
		a: "Japanese Post Office",
		b: "1F3E3",
		j: [
			"building",
			"envelope",
			"communication"
		],
		k: [
			10,
			54
		],
		o: 2
	},
	"flag-bb": {
		a: "Barbados Flag",
		b: "1F1E7-1F1E7",
		k: [
			0,
			49
		],
		o: 2
	},
	water_buffalo: {
		a: "Water Buffalo",
		b: "1F403",
		j: [
			"animal",
			"nature",
			"ox",
			"cow"
		],
		k: [
			11,
			31
		],
		o: 2
	},
	third_place_medal: {
		a: "Third Place Medal",
		b: "1F949",
		k: [
			41,
			24
		],
		o: 4
	},
	european_post_office: {
		a: "European Post Office",
		b: "1F3E4",
		j: [
			"building",
			"email"
		],
		k: [
			10,
			55
		],
		o: 2
	},
	athletic_shoe: {
		a: "Athletic Shoe",
		b: "1F45F",
		j: [
			"shoes",
			"sports",
			"sneakers"
		],
		k: [
			14,
			19
		],
		o: 2
	},
	arrow_up: {
		a: "Upwards Black Arrow",
		b: "2B06-FE0F",
		c: "2B06",
		j: [
			"blue-square",
			"continue",
			"top",
			"direction"
		],
		k: [
			55,
			38
		],
		o: 2
	},
	cow2: {
		a: "Cow",
		b: "1F404",
		j: [
			"beef",
			"ox",
			"animal",
			"nature",
			"moo",
			"milk"
		],
		k: [
			11,
			32
		],
		o: 2
	},
	open_hands: {
		skin_variations: {
			"1F3FB": {
				unified: "1F450-1F3FB",
				non_qualified: null,
				image: "1f450-1f3fb.png",
				sheet_x: 14,
				sheet_y: 0,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F450-1F3FC",
				non_qualified: null,
				image: "1f450-1f3fc.png",
				sheet_x: 14,
				sheet_y: 1,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F450-1F3FD",
				non_qualified: null,
				image: "1f450-1f3fd.png",
				sheet_x: 14,
				sheet_y: 2,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F450-1F3FE",
				non_qualified: null,
				image: "1f450-1f3fe.png",
				sheet_x: 14,
				sheet_y: 3,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F450-1F3FF",
				non_qualified: null,
				image: "1f450-1f3ff.png",
				sheet_x: 14,
				sheet_y: 4,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Open Hands Sign",
		b: "1F450",
		j: [
			"fingers",
			"butterfly",
			"hands",
			"open"
		],
		k: [
			13,
			56
		],
		o: 2
	},
	garlic: {
		a: "Garlic",
		b: "1F9C4",
		k: [
			44,
			12
		],
		o: 12
	},
	money_mouth_face: {
		a: "Money-Mouth Face",
		b: "1F911",
		j: [
			"face",
			"rich",
			"dollar",
			"money"
		],
		k: [
			37,
			24
		],
		o: 2
	},
	"flag-bd": {
		a: "Bangladesh Flag",
		b: "1F1E7-1F1E9",
		k: [
			0,
			50
		],
		o: 2
	},
	soccer: {
		a: "Soccer Ball",
		b: "26BD",
		j: [
			"sports",
			"football"
		],
		k: [
			53,
			56
		],
		o: 2
	},
	hugging_face: {
		a: "Hugging Face",
		b: "1F917",
		k: [
			37,
			30
		],
		o: 2
	},
	onion: {
		a: "Onion",
		b: "1F9C5",
		k: [
			44,
			13
		],
		o: 12
	},
	arrow_upper_right: {
		a: "North East Arrow",
		b: "2197-FE0F",
		c: "2197",
		j: [
			"blue-square",
			"point",
			"direction",
			"diagonal",
			"northeast"
		],
		k: [
			52,
			17
		],
		o: 2
	},
	palms_up_together: {
		skin_variations: {
			"1F3FB": {
				unified: "1F932-1F3FB",
				non_qualified: null,
				image: "1f932-1f3fb.png",
				sheet_x: 39,
				sheet_y: 6,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F932-1F3FC",
				non_qualified: null,
				image: "1f932-1f3fc.png",
				sheet_x: 39,
				sheet_y: 7,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F932-1F3FD",
				non_qualified: null,
				image: "1f932-1f3fd.png",
				sheet_x: 39,
				sheet_y: 8,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F932-1F3FE",
				non_qualified: null,
				image: "1f932-1f3fe.png",
				sheet_x: 39,
				sheet_y: 9,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F932-1F3FF",
				non_qualified: null,
				image: "1f932-1f3ff.png",
				sheet_x: 39,
				sheet_y: 10,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Palms Up Together",
		b: "1F932",
		k: [
			39,
			5
		],
		o: 5
	},
	pig: {
		a: "Pig Face",
		b: "1F437",
		j: [
			"animal",
			"oink",
			"nature"
		],
		k: [
			12,
			27
		],
		o: 2
	},
	hospital: {
		a: "Hospital",
		b: "1F3E5",
		j: [
			"building",
			"health",
			"surgery",
			"doctor"
		],
		k: [
			10,
			56
		],
		o: 2
	},
	hiking_boot: {
		a: "Hiking Boot",
		b: "1F97E",
		k: [
			42,
			16
		],
		o: 11
	},
	"flag-be": {
		a: "Belgium Flag",
		b: "1F1E7-1F1EA",
		k: [
			0,
			51
		],
		o: 2
	},
	"flag-bf": {
		a: "Burkina Faso Flag",
		b: "1F1E7-1F1EB",
		k: [
			0,
			52
		],
		o: 2
	},
	mushroom: {
		a: "Mushroom",
		b: "1F344",
		j: [
			"plant",
			"vegetable"
		],
		k: [
			6,
			28
		],
		o: 2
	},
	pig2: {
		a: "Pig",
		b: "1F416",
		j: [
			"animal",
			"nature"
		],
		k: [
			11,
			51
		],
		o: 2
	},
	baseball: {
		a: "Baseball",
		b: "26BE",
		j: [
			"sports",
			"balls"
		],
		k: [
			54,
			0
		],
		o: 2
	},
	face_with_hand_over_mouth: {
		a: "Smiling Face with Smiling Eyes and Hand Covering Mouth",
		b: "1F92D",
		k: [
			38,
			47
		],
		n: [
			"smiling_face_with_smiling_eyes_and_hand_covering_mouth"
		],
		o: 5
	},
	handshake: {
		a: "Handshake",
		b: "1F91D",
		j: [
			"agreement",
			"shake"
		],
		k: [
			38,
			4
		],
		o: 4
	},
	womans_flat_shoe: {
		a: "Flat Shoe",
		b: "1F97F",
		k: [
			42,
			17
		],
		o: 11
	},
	bank: {
		a: "Bank",
		b: "1F3E6",
		j: [
			"building",
			"money",
			"sales",
			"cash",
			"business",
			"enterprise"
		],
		k: [
			11,
			0
		],
		o: 2
	},
	arrow_right: {
		a: "Black Rightwards Arrow",
		b: "27A1-FE0F",
		c: "27A1",
		j: [
			"blue-square",
			"next"
		],
		k: [
			55,
			32
		],
		o: 2
	},
	peanuts: {
		a: "Peanuts",
		b: "1F95C",
		j: [
			"food",
			"nut"
		],
		k: [
			41,
			43
		],
		o: 4
	},
	shushing_face: {
		a: "Face with Finger Covering Closed Lips",
		b: "1F92B",
		k: [
			38,
			45
		],
		n: [
			"face_with_finger_covering_closed_lips"
		],
		o: 5
	},
	pray: {
		skin_variations: {
			"1F3FB": {
				unified: "1F64F-1F3FB",
				non_qualified: null,
				image: "1f64f-1f3fb.png",
				sheet_x: 33,
				sheet_y: 51,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F64F-1F3FC",
				non_qualified: null,
				image: "1f64f-1f3fc.png",
				sheet_x: 33,
				sheet_y: 52,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F64F-1F3FD",
				non_qualified: null,
				image: "1f64f-1f3fd.png",
				sheet_x: 33,
				sheet_y: 53,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F64F-1F3FE",
				non_qualified: null,
				image: "1f64f-1f3fe.png",
				sheet_x: 33,
				sheet_y: 54,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F64F-1F3FF",
				non_qualified: null,
				image: "1f64f-1f3ff.png",
				sheet_x: 33,
				sheet_y: 55,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Person with Folded Hands",
		b: "1F64F",
		j: [
			"please",
			"hope",
			"wish",
			"namaste",
			"highfive"
		],
		k: [
			33,
			50
		],
		o: 2
	},
	softball: {
		a: "Softball",
		b: "1F94E",
		k: [
			41,
			29
		],
		o: 11
	},
	high_heel: {
		a: "High-Heeled Shoe",
		b: "1F460",
		j: [
			"fashion",
			"shoes",
			"female",
			"pumps",
			"stiletto"
		],
		k: [
			14,
			20
		],
		o: 2
	},
	"flag-bg": {
		a: "Bulgaria Flag",
		b: "1F1E7-1F1EC",
		k: [
			0,
			53
		],
		o: 2
	},
	arrow_lower_right: {
		a: "South East Arrow",
		b: "2198-FE0F",
		c: "2198",
		j: [
			"blue-square",
			"direction",
			"diagonal",
			"southeast"
		],
		k: [
			52,
			18
		],
		o: 2
	},
	hotel: {
		a: "Hotel",
		b: "1F3E8",
		j: [
			"building",
			"accomodation",
			"checkin"
		],
		k: [
			11,
			2
		],
		o: 2
	},
	boar: {
		a: "Boar",
		b: "1F417",
		j: [
			"animal",
			"nature"
		],
		k: [
			11,
			52
		],
		o: 2
	},
	sandal: {
		a: "Womans Sandal",
		b: "1F461",
		j: [
			"shoes",
			"fashion",
			"flip flops"
		],
		k: [
			14,
			21
		],
		o: 2
	},
	"flag-bh": {
		a: "Bahrain Flag",
		b: "1F1E7-1F1ED",
		k: [
			0,
			54
		],
		o: 2
	},
	arrow_down: {
		a: "Downwards Black Arrow",
		b: "2B07-FE0F",
		c: "2B07",
		j: [
			"blue-square",
			"direction",
			"bottom"
		],
		k: [
			55,
			39
		],
		o: 2
	},
	thinking_face: {
		a: "Thinking Face",
		b: "1F914",
		k: [
			37,
			27
		],
		o: 2
	},
	writing_hand: {
		skin_variations: {
			"1F3FB": {
				unified: "270D-1F3FB",
				non_qualified: null,
				image: "270d-1f3fb.png",
				sheet_x: 55,
				sheet_y: 5,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "270D-1F3FC",
				non_qualified: null,
				image: "270d-1f3fc.png",
				sheet_x: 55,
				sheet_y: 6,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "270D-1F3FD",
				non_qualified: null,
				image: "270d-1f3fd.png",
				sheet_x: 55,
				sheet_y: 7,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "270D-1F3FE",
				non_qualified: null,
				image: "270d-1f3fe.png",
				sheet_x: 55,
				sheet_y: 8,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "270D-1F3FF",
				non_qualified: null,
				image: "270d-1f3ff.png",
				sheet_x: 55,
				sheet_y: 9,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Writing Hand",
		b: "270D-FE0F",
		c: "270D",
		j: [
			"lower_left_ballpoint_pen",
			"stationery",
			"write",
			"compose"
		],
		k: [
			55,
			4
		],
		o: 2
	},
	chestnut: {
		a: "Chestnut",
		b: "1F330",
		j: [
			"food",
			"squirrel"
		],
		k: [
			6,
			8
		],
		o: 2
	},
	basketball: {
		a: "Basketball and Hoop",
		b: "1F3C0",
		j: [
			"sports",
			"balls",
			"NBA"
		],
		k: [
			8,
			38
		],
		o: 2
	},
	pig_nose: {
		a: "Pig Nose",
		b: "1F43D",
		j: [
			"animal",
			"oink"
		],
		k: [
			12,
			33
		],
		o: 2
	},
	love_hotel: {
		a: "Love Hotel",
		b: "1F3E9",
		j: [
			"like",
			"affection",
			"dating"
		],
		k: [
			11,
			3
		],
		o: 2
	},
	nail_care: {
		skin_variations: {
			"1F3FB": {
				unified: "1F485-1F3FB",
				non_qualified: null,
				image: "1f485-1f3fb.png",
				sheet_x: 24,
				sheet_y: 34,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F485-1F3FC",
				non_qualified: null,
				image: "1f485-1f3fc.png",
				sheet_x: 24,
				sheet_y: 35,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F485-1F3FD",
				non_qualified: null,
				image: "1f485-1f3fd.png",
				sheet_x: 24,
				sheet_y: 36,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F485-1F3FE",
				non_qualified: null,
				image: "1f485-1f3fe.png",
				sheet_x: 24,
				sheet_y: 37,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F485-1F3FF",
				non_qualified: null,
				image: "1f485-1f3ff.png",
				sheet_x: 24,
				sheet_y: 38,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Nail Polish",
		b: "1F485",
		j: [
			"beauty",
			"manicure",
			"finger",
			"fashion",
			"nail"
		],
		k: [
			24,
			33
		],
		o: 2
	},
	volleyball: {
		a: "Volleyball",
		b: "1F3D0",
		j: [
			"sports",
			"balls"
		],
		k: [
			10,
			35
		],
		o: 2
	},
	"flag-bi": {
		a: "Burundi Flag",
		b: "1F1E7-1F1EE",
		k: [
			0,
			55
		],
		o: 2
	},
	arrow_lower_left: {
		a: "South West Arrow",
		b: "2199-FE0F",
		c: "2199",
		j: [
			"blue-square",
			"direction",
			"diagonal",
			"southwest"
		],
		k: [
			52,
			19
		],
		o: 2
	},
	ram: {
		a: "Ram",
		b: "1F40F",
		j: [
			"animal",
			"sheep",
			"nature"
		],
		k: [
			11,
			43
		],
		o: 2
	},
	ballet_shoes: {
		a: "Ballet Shoes",
		b: "1FA70",
		k: [
			51,
			51
		],
		o: 12
	},
	zipper_mouth_face: {
		a: "Zipper-Mouth Face",
		b: "1F910",
		j: [
			"face",
			"sealed",
			"zipper",
			"secret"
		],
		k: [
			37,
			23
		],
		o: 2
	},
	bread: {
		a: "Bread",
		b: "1F35E",
		j: [
			"food",
			"wheat",
			"breakfast",
			"toast"
		],
		k: [
			6,
			54
		],
		o: 2
	},
	convenience_store: {
		a: "Convenience Store",
		b: "1F3EA",
		j: [
			"building",
			"shopping",
			"groceries"
		],
		k: [
			11,
			4
		],
		o: 2
	},
	boot: {
		a: "Womans Boots",
		b: "1F462",
		j: [
			"shoes",
			"fashion"
		],
		k: [
			14,
			22
		],
		o: 2
	},
	sheep: {
		a: "Sheep",
		b: "1F411",
		j: [
			"animal",
			"nature",
			"wool",
			"shipit"
		],
		k: [
			11,
			45
		],
		o: 2
	},
	face_with_raised_eyebrow: {
		a: "Face with One Eyebrow Raised",
		b: "1F928",
		k: [
			38,
			42
		],
		n: [
			"face_with_one_eyebrow_raised"
		],
		o: 5
	},
	"flag-bj": {
		a: "Benin Flag",
		b: "1F1E7-1F1EF",
		k: [
			0,
			56
		],
		o: 2
	},
	arrow_left: {
		a: "Leftwards Black Arrow",
		b: "2B05-FE0F",
		c: "2B05",
		j: [
			"blue-square",
			"previous",
			"back"
		],
		k: [
			55,
			37
		],
		o: 2
	},
	selfie: {
		skin_variations: {
			"1F3FB": {
				unified: "1F933-1F3FB",
				non_qualified: null,
				image: "1f933-1f3fb.png",
				sheet_x: 39,
				sheet_y: 12,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F933-1F3FC",
				non_qualified: null,
				image: "1f933-1f3fc.png",
				sheet_x: 39,
				sheet_y: 13,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F933-1F3FD",
				non_qualified: null,
				image: "1f933-1f3fd.png",
				sheet_x: 39,
				sheet_y: 14,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F933-1F3FE",
				non_qualified: null,
				image: "1f933-1f3fe.png",
				sheet_x: 39,
				sheet_y: 15,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F933-1F3FF",
				non_qualified: null,
				image: "1f933-1f3ff.png",
				sheet_x: 39,
				sheet_y: 16,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Selfie",
		b: "1F933",
		j: [
			"camera",
			"phone"
		],
		k: [
			39,
			11
		],
		o: 4
	},
	croissant: {
		a: "Croissant",
		b: "1F950",
		j: [
			"food",
			"bread",
			"french"
		],
		k: [
			41,
			31
		],
		o: 4
	},
	school: {
		a: "School",
		b: "1F3EB",
		j: [
			"building",
			"student",
			"education",
			"learn",
			"teach"
		],
		k: [
			11,
			5
		],
		o: 2
	},
	football: {
		a: "American Football",
		b: "1F3C8",
		j: [
			"sports",
			"balls",
			"NFL"
		],
		k: [
			9,
			33
		],
		o: 2
	},
	goat: {
		a: "Goat",
		b: "1F410",
		j: [
			"animal",
			"nature"
		],
		k: [
			11,
			44
		],
		o: 2
	},
	department_store: {
		a: "Department Store",
		b: "1F3EC",
		j: [
			"building",
			"shopping",
			"mall"
		],
		k: [
			11,
			6
		],
		o: 2
	},
	"flag-bl": {
		a: "St. Barthélemy Flag",
		b: "1F1E7-1F1F1",
		k: [
			1,
			0
		],
		o: 2
	},
	crown: {
		a: "Crown",
		b: "1F451",
		j: [
			"king",
			"kod",
			"leader",
			"royalty",
			"lord"
		],
		k: [
			14,
			5
		],
		o: 2
	},
	arrow_upper_left: {
		a: "North West Arrow",
		b: "2196-FE0F",
		c: "2196",
		j: [
			"blue-square",
			"point",
			"direction",
			"diagonal",
			"northwest"
		],
		k: [
			52,
			16
		],
		o: 2
	},
	neutral_face: {
		a: "Neutral Face",
		b: "1F610",
		j: [
			"indifference",
			"meh",
			":|",
			"neutral"
		],
		k: [
			30,
			51
		],
		l: [
			":|",
			":-|"
		],
		o: 2
	},
	rugby_football: {
		a: "Rugby Football",
		b: "1F3C9",
		j: [
			"sports",
			"team"
		],
		k: [
			9,
			34
		],
		o: 2
	},
	muscle: {
		skin_variations: {
			"1F3FB": {
				unified: "1F4AA-1F3FB",
				non_qualified: null,
				image: "1f4aa-1f3fb.png",
				sheet_x: 25,
				sheet_y: 53,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F4AA-1F3FC",
				non_qualified: null,
				image: "1f4aa-1f3fc.png",
				sheet_x: 25,
				sheet_y: 54,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F4AA-1F3FD",
				non_qualified: null,
				image: "1f4aa-1f3fd.png",
				sheet_x: 25,
				sheet_y: 55,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F4AA-1F3FE",
				non_qualified: null,
				image: "1f4aa-1f3fe.png",
				sheet_x: 25,
				sheet_y: 56,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F4AA-1F3FF",
				non_qualified: null,
				image: "1f4aa-1f3ff.png",
				sheet_x: 26,
				sheet_y: 0,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Flexed Biceps",
		b: "1F4AA",
		j: [
			"arm",
			"flex",
			"hand",
			"summer",
			"strong",
			"biceps"
		],
		k: [
			25,
			52
		],
		o: 2
	},
	baguette_bread: {
		a: "Baguette Bread",
		b: "1F956",
		j: [
			"food",
			"bread",
			"french"
		],
		k: [
			41,
			37
		],
		o: 4
	},
	expressionless: {
		a: "Expressionless Face",
		b: "1F611",
		j: [
			"face",
			"indifferent",
			"-_-",
			"meh",
			"deadpan"
		],
		k: [
			30,
			52
		],
		o: 2
	},
	womans_hat: {
		a: "Womans Hat",
		b: "1F452",
		j: [
			"fashion",
			"accessories",
			"female",
			"lady",
			"spring"
		],
		k: [
			14,
			6
		],
		o: 2
	},
	pretzel: {
		a: "Pretzel",
		b: "1F968",
		k: [
			41,
			55
		],
		o: 5
	},
	mechanical_arm: {
		a: "Mechanical Arm",
		b: "1F9BE",
		k: [
			44,
			6
		],
		o: 12
	},
	arrow_up_down: {
		a: "Up Down Arrow",
		b: "2195-FE0F",
		c: "2195",
		j: [
			"blue-square",
			"direction",
			"way",
			"vertical"
		],
		k: [
			52,
			15
		],
		o: 2
	},
	dromedary_camel: {
		a: "Dromedary Camel",
		b: "1F42A",
		j: [
			"animal",
			"hot",
			"desert",
			"hump"
		],
		k: [
			12,
			14
		],
		o: 2
	},
	tennis: {
		a: "Tennis Racquet and Ball",
		b: "1F3BE",
		j: [
			"sports",
			"balls",
			"green"
		],
		k: [
			8,
			36
		],
		o: 2
	},
	"flag-bm": {
		a: "Bermuda Flag",
		b: "1F1E7-1F1F2",
		k: [
			1,
			1
		],
		o: 2
	},
	factory: {
		a: "Factory",
		b: "1F3ED",
		j: [
			"building",
			"industry",
			"pollution",
			"smoke"
		],
		k: [
			11,
			7
		],
		o: 2
	},
	japanese_castle: {
		a: "Japanese Castle",
		b: "1F3EF",
		j: [
			"photo",
			"building"
		],
		k: [
			11,
			9
		],
		o: 2
	},
	no_mouth: {
		a: "Face Without Mouth",
		b: "1F636",
		j: [
			"face",
			"hellokitty"
		],
		k: [
			31,
			32
		],
		o: 2
	},
	mechanical_leg: {
		a: "Mechanical Leg",
		b: "1F9BF",
		k: [
			44,
			7
		],
		o: 12
	},
	bagel: {
		a: "Bagel",
		b: "1F96F",
		k: [
			42,
			5
		],
		o: 11
	},
	camel: {
		a: "Bactrian Camel",
		b: "1F42B",
		j: [
			"animal",
			"nature",
			"hot",
			"desert",
			"hump"
		],
		k: [
			12,
			15
		],
		o: 2
	},
	tophat: {
		a: "Top Hat",
		b: "1F3A9",
		j: [
			"magic",
			"gentleman",
			"classy",
			"circus"
		],
		k: [
			8,
			15
		],
		o: 2
	},
	left_right_arrow: {
		a: "Left Right Arrow",
		b: "2194-FE0F",
		c: "2194",
		j: [
			"shape",
			"direction",
			"horizontal",
			"sideways"
		],
		k: [
			52,
			14
		],
		o: 2
	},
	"flag-bn": {
		a: "Brunei Flag",
		b: "1F1E7-1F1F3",
		k: [
			1,
			2
		],
		o: 2
	},
	flying_disc: {
		a: "Flying Disc",
		b: "1F94F",
		k: [
			41,
			30
		],
		o: 11
	},
	smirk: {
		a: "Smirking Face",
		b: "1F60F",
		j: [
			"face",
			"smile",
			"mean",
			"prank",
			"smug",
			"sarcasm"
		],
		k: [
			30,
			50
		],
		o: 2
	},
	mortar_board: {
		a: "Graduation Cap",
		b: "1F393",
		j: [
			"school",
			"college",
			"degree",
			"university",
			"graduation",
			"cap",
			"hat",
			"legal",
			"learn",
			"education"
		],
		k: [
			7,
			55
		],
		o: 2
	},
	european_castle: {
		a: "European Castle",
		b: "1F3F0",
		j: [
			"building",
			"royalty",
			"history"
		],
		k: [
			11,
			10
		],
		o: 2
	},
	leg: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9B5-1F3FB",
				non_qualified: null,
				image: "1f9b5-1f3fb.png",
				sheet_x: 43,
				sheet_y: 6,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9B5-1F3FC",
				non_qualified: null,
				image: "1f9b5-1f3fc.png",
				sheet_x: 43,
				sheet_y: 7,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9B5-1F3FD",
				non_qualified: null,
				image: "1f9b5-1f3fd.png",
				sheet_x: 43,
				sheet_y: 8,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9B5-1F3FE",
				non_qualified: null,
				image: "1f9b5-1f3fe.png",
				sheet_x: 43,
				sheet_y: 9,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9B5-1F3FF",
				non_qualified: null,
				image: "1f9b5-1f3ff.png",
				sheet_x: 43,
				sheet_y: 10,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Leg",
		b: "1F9B5",
		k: [
			43,
			5
		],
		o: 11
	},
	pancakes: {
		a: "Pancakes",
		b: "1F95E",
		j: [
			"food",
			"breakfast",
			"flapjacks",
			"hotcakes"
		],
		k: [
			41,
			45
		],
		o: 4
	},
	leftwards_arrow_with_hook: {
		a: "Leftwards Arrow with Hook",
		b: "21A9-FE0F",
		c: "21A9",
		j: [
			"back",
			"return",
			"blue-square",
			"undo",
			"enter"
		],
		k: [
			52,
			20
		],
		o: 2
	},
	"flag-bo": {
		a: "Bolivia Flag",
		b: "1F1E7-1F1F4",
		k: [
			1,
			3
		],
		o: 2
	},
	bowling: {
		a: "Bowling",
		b: "1F3B3",
		j: [
			"sports",
			"fun",
			"play"
		],
		k: [
			8,
			25
		],
		o: 2
	},
	llama: {
		a: "Llama",
		b: "1F999",
		k: [
			42,
			43
		],
		o: 11
	},
	arrow_right_hook: {
		a: "Rightwards Arrow with Hook",
		b: "21AA-FE0F",
		c: "21AA",
		j: [
			"blue-square",
			"return",
			"rotate",
			"direction"
		],
		k: [
			52,
			21
		],
		o: 2
	},
	wedding: {
		a: "Wedding",
		b: "1F492",
		j: [
			"love",
			"like",
			"affection",
			"couple",
			"marriage",
			"bride",
			"groom"
		],
		k: [
			25,
			28
		],
		o: 2
	},
	"flag-bq": {
		a: "Caribbean Netherlands Flag",
		b: "1F1E7-1F1F6",
		k: [
			1,
			4
		],
		o: 2
	},
	foot: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9B6-1F3FB",
				non_qualified: null,
				image: "1f9b6-1f3fb.png",
				sheet_x: 43,
				sheet_y: 12,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9B6-1F3FC",
				non_qualified: null,
				image: "1f9b6-1f3fc.png",
				sheet_x: 43,
				sheet_y: 13,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9B6-1F3FD",
				non_qualified: null,
				image: "1f9b6-1f3fd.png",
				sheet_x: 43,
				sheet_y: 14,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9B6-1F3FE",
				non_qualified: null,
				image: "1f9b6-1f3fe.png",
				sheet_x: 43,
				sheet_y: 15,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9B6-1F3FF",
				non_qualified: null,
				image: "1f9b6-1f3ff.png",
				sheet_x: 43,
				sheet_y: 16,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Foot",
		b: "1F9B6",
		k: [
			43,
			11
		],
		o: 11
	},
	giraffe_face: {
		a: "Giraffe Face",
		b: "1F992",
		k: [
			42,
			36
		],
		o: 5
	},
	unamused: {
		a: "Unamused Face",
		b: "1F612",
		j: [
			"indifference",
			"bored",
			"straight face",
			"serious",
			"sarcasm"
		],
		k: [
			30,
			53
		],
		m: ":(",
		o: 2
	},
	billed_cap: {
		a: "Billed Cap",
		b: "1F9E2",
		k: [
			51,
			21
		],
		o: 5
	},
	waffle: {
		a: "Waffle",
		b: "1F9C7",
		k: [
			44,
			15
		],
		o: 12
	},
	cricket_bat_and_ball: {
		a: "Cricket Bat and Ball",
		b: "1F3CF",
		k: [
			10,
			34
		],
		o: 2
	},
	helmet_with_white_cross: {
		a: "Helmet with White Cross",
		b: "26D1-FE0F",
		c: "26D1",
		k: [
			54,
			6
		],
		o: 2
	},
	ear: {
		skin_variations: {
			"1F3FB": {
				unified: "1F442-1F3FB",
				non_qualified: null,
				image: "1f442-1f3fb.png",
				sheet_x: 12,
				sheet_y: 40,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F442-1F3FC",
				non_qualified: null,
				image: "1f442-1f3fc.png",
				sheet_x: 12,
				sheet_y: 41,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F442-1F3FD",
				non_qualified: null,
				image: "1f442-1f3fd.png",
				sheet_x: 12,
				sheet_y: 42,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F442-1F3FE",
				non_qualified: null,
				image: "1f442-1f3fe.png",
				sheet_x: 12,
				sheet_y: 43,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F442-1F3FF",
				non_qualified: null,
				image: "1f442-1f3ff.png",
				sheet_x: 12,
				sheet_y: 44,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Ear",
		b: "1F442",
		j: [
			"face",
			"hear",
			"sound",
			"listen"
		],
		k: [
			12,
			39
		],
		o: 2
	},
	elephant: {
		a: "Elephant",
		b: "1F418",
		j: [
			"animal",
			"nature",
			"nose",
			"th",
			"circus"
		],
		k: [
			11,
			53
		],
		o: 2
	},
	cheese_wedge: {
		a: "Cheese Wedge",
		b: "1F9C0",
		k: [
			44,
			8
		],
		o: 2
	},
	tokyo_tower: {
		a: "Tokyo Tower",
		b: "1F5FC",
		j: [
			"photo",
			"japanese"
		],
		k: [
			30,
			31
		],
		o: 2
	},
	arrow_heading_up: {
		a: "Arrow Pointing Rightwards Then Curving Upwards",
		b: "2934-FE0F",
		c: "2934",
		j: [
			"blue-square",
			"direction",
			"top"
		],
		k: [
			55,
			35
		],
		o: 2
	},
	field_hockey_stick_and_ball: {
		a: "Field Hockey Stick and Ball",
		b: "1F3D1",
		k: [
			10,
			36
		],
		o: 2
	},
	"flag-br": {
		a: "Brazil Flag",
		b: "1F1E7-1F1F7",
		k: [
			1,
			5
		],
		o: 2
	},
	face_with_rolling_eyes: {
		a: "Face with Rolling Eyes",
		b: "1F644",
		k: [
			31,
			46
		],
		o: 2
	},
	ear_with_hearing_aid: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9BB-1F3FB",
				non_qualified: null,
				image: "1f9bb-1f3fb.png",
				sheet_x: 43,
				sheet_y: 56,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9BB-1F3FC",
				non_qualified: null,
				image: "1f9bb-1f3fc.png",
				sheet_x: 44,
				sheet_y: 0,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9BB-1F3FD",
				non_qualified: null,
				image: "1f9bb-1f3fd.png",
				sheet_x: 44,
				sheet_y: 1,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9BB-1F3FE",
				non_qualified: null,
				image: "1f9bb-1f3fe.png",
				sheet_x: 44,
				sheet_y: 2,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9BB-1F3FF",
				non_qualified: null,
				image: "1f9bb-1f3ff.png",
				sheet_x: 44,
				sheet_y: 3,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Ear with Hearing Aid",
		b: "1F9BB",
		k: [
			43,
			55
		],
		o: 12
	},
	arrow_heading_down: {
		a: "Arrow Pointing Rightwards Then Curving Downwards",
		b: "2935-FE0F",
		c: "2935",
		j: [
			"blue-square",
			"direction",
			"bottom"
		],
		k: [
			55,
			36
		],
		o: 2
	},
	ice_hockey_stick_and_puck: {
		a: "Ice Hockey Stick and Puck",
		b: "1F3D2",
		k: [
			10,
			37
		],
		o: 2
	},
	meat_on_bone: {
		a: "Meat on Bone",
		b: "1F356",
		j: [
			"good",
			"food",
			"drumstick"
		],
		k: [
			6,
			46
		],
		o: 2
	},
	prayer_beads: {
		a: "Prayer Beads",
		b: "1F4FF",
		j: [
			"dhikr",
			"religious"
		],
		k: [
			27,
			27
		],
		o: 2
	},
	statue_of_liberty: {
		a: "Statue of Liberty",
		b: "1F5FD",
		j: [
			"american",
			"newyork"
		],
		k: [
			30,
			32
		],
		o: 2
	},
	grimacing: {
		a: "Grimacing Face",
		b: "1F62C",
		j: [
			"face",
			"grimace",
			"teeth"
		],
		k: [
			31,
			22
		],
		o: 2
	},
	"flag-bs": {
		a: "Bahamas Flag",
		b: "1F1E7-1F1F8",
		k: [
			1,
			6
		],
		o: 2
	},
	rhinoceros: {
		a: "Rhinoceros",
		b: "1F98F",
		j: [
			"animal",
			"nature",
			"horn"
		],
		k: [
			42,
			33
		],
		o: 4
	},
	lacrosse: {
		a: "Lacrosse Stick and Ball",
		b: "1F94D",
		k: [
			41,
			28
		],
		o: 11
	},
	poultry_leg: {
		a: "Poultry Leg",
		b: "1F357",
		j: [
			"food",
			"meat",
			"drumstick",
			"bird",
			"chicken",
			"turkey"
		],
		k: [
			6,
			47
		],
		o: 2
	},
	hippopotamus: {
		a: "Hippopotamus",
		b: "1F99B",
		k: [
			42,
			45
		],
		o: 11
	},
	nose: {
		skin_variations: {
			"1F3FB": {
				unified: "1F443-1F3FB",
				non_qualified: null,
				image: "1f443-1f3fb.png",
				sheet_x: 12,
				sheet_y: 46,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F443-1F3FC",
				non_qualified: null,
				image: "1f443-1f3fc.png",
				sheet_x: 12,
				sheet_y: 47,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F443-1F3FD",
				non_qualified: null,
				image: "1f443-1f3fd.png",
				sheet_x: 12,
				sheet_y: 48,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F443-1F3FE",
				non_qualified: null,
				image: "1f443-1f3fe.png",
				sheet_x: 12,
				sheet_y: 49,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F443-1F3FF",
				non_qualified: null,
				image: "1f443-1f3ff.png",
				sheet_x: 12,
				sheet_y: 50,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Nose",
		b: "1F443",
		j: [
			"smell",
			"sniff"
		],
		k: [
			12,
			45
		],
		o: 2
	},
	arrows_clockwise: {
		a: "Clockwise Downwards and Upwards Open Circle Arrows",
		b: "1F503",
		j: [
			"sync",
			"cycle",
			"round",
			"repeat"
		],
		k: [
			27,
			31
		],
		o: 2
	},
	"flag-bt": {
		a: "Bhutan Flag",
		b: "1F1E7-1F1F9",
		k: [
			1,
			7
		],
		o: 2
	},
	church: {
		a: "Church",
		b: "26EA",
		j: [
			"building",
			"religion",
			"christ"
		],
		k: [
			54,
			10
		],
		o: 2
	},
	lipstick: {
		a: "Lipstick",
		b: "1F484",
		j: [
			"female",
			"girl",
			"fashion",
			"woman"
		],
		k: [
			24,
			32
		],
		o: 2
	},
	lying_face: {
		a: "Lying Face",
		b: "1F925",
		j: [
			"face",
			"lie",
			"pinocchio"
		],
		k: [
			38,
			22
		],
		o: 4
	},
	arrows_counterclockwise: {
		a: "Anticlockwise Downwards and Upwards Open Circle Arrows",
		b: "1F504",
		j: [
			"blue-square",
			"sync",
			"cycle"
		],
		k: [
			27,
			32
		],
		o: 2
	},
	"flag-bv": {
		a: "Bouvet Island Flag",
		b: "1F1E7-1F1FB",
		k: [
			1,
			8
		],
		o: 2
	},
	cut_of_meat: {
		a: "Cut of Meat",
		b: "1F969",
		k: [
			41,
			56
		],
		o: 5
	},
	mosque: {
		a: "Mosque",
		b: "1F54C",
		j: [
			"islam",
			"worship",
			"minaret"
		],
		k: [
			28,
			36
		],
		o: 2
	},
	ring: {
		a: "Ring",
		b: "1F48D",
		j: [
			"wedding",
			"propose",
			"marriage",
			"valentines",
			"diamond",
			"fashion",
			"jewelry",
			"gem",
			"engagement"
		],
		k: [
			25,
			23
		],
		o: 2
	},
	brain: {
		a: "Brain",
		b: "1F9E0",
		k: [
			51,
			19
		],
		o: 5
	},
	table_tennis_paddle_and_ball: {
		a: "Table Tennis Paddle and Ball",
		b: "1F3D3",
		k: [
			10,
			38
		],
		o: 2
	},
	relieved: {
		a: "Relieved Face",
		b: "1F60C",
		j: [
			"face",
			"relaxed",
			"phew",
			"massage",
			"happiness"
		],
		k: [
			30,
			47
		],
		o: 2
	},
	mouse: {
		a: "Mouse Face",
		b: "1F42D",
		j: [
			"animal",
			"nature",
			"cheese_wedge",
			"rodent"
		],
		k: [
			12,
			17
		],
		o: 2
	},
	hindu_temple: {
		a: "Hindu Temple",
		b: "1F6D5",
		k: [
			36,
			41
		],
		o: 12
	},
	back: {
		a: "Back with Leftwards Arrow Above",
		b: "1F519",
		j: [
			"arrow",
			"words",
			"return"
		],
		k: [
			27,
			53
		],
		o: 2
	},
	gem: {
		a: "Gem Stone",
		b: "1F48E",
		j: [
			"blue",
			"ruby",
			"diamond",
			"jewelry"
		],
		k: [
			25,
			24
		],
		o: 2
	},
	pensive: {
		a: "Pensive Face",
		b: "1F614",
		j: [
			"face",
			"sad",
			"depressed",
			"upset"
		],
		k: [
			30,
			55
		],
		o: 2
	},
	"flag-bw": {
		a: "Botswana Flag",
		b: "1F1E7-1F1FC",
		k: [
			1,
			9
		],
		o: 2
	},
	mouse2: {
		a: "Mouse",
		b: "1F401",
		j: [
			"animal",
			"nature",
			"rodent"
		],
		k: [
			11,
			29
		],
		o: 2
	},
	bacon: {
		a: "Bacon",
		b: "1F953",
		j: [
			"food",
			"breakfast",
			"pork",
			"pig",
			"meat"
		],
		k: [
			41,
			34
		],
		o: 4
	},
	tooth: {
		a: "Tooth",
		b: "1F9B7",
		k: [
			43,
			17
		],
		o: 11
	},
	badminton_racquet_and_shuttlecock: {
		a: "Badminton Racquet and Shuttlecock",
		b: "1F3F8",
		k: [
			11,
			20
		],
		o: 2
	},
	rat: {
		a: "Rat",
		b: "1F400",
		j: [
			"animal",
			"mouse",
			"rodent"
		],
		k: [
			11,
			28
		],
		o: 2
	},
	synagogue: {
		a: "Synagogue",
		b: "1F54D",
		j: [
			"judaism",
			"worship",
			"temple",
			"jewish"
		],
		k: [
			28,
			37
		],
		o: 2
	},
	end: {
		a: "End with Leftwards Arrow Above",
		b: "1F51A",
		j: [
			"words",
			"arrow"
		],
		k: [
			27,
			54
		],
		o: 2
	},
	bone: {
		a: "Bone",
		b: "1F9B4",
		k: [
			43,
			4
		],
		o: 11
	},
	boxing_glove: {
		a: "Boxing Glove",
		b: "1F94A",
		j: [
			"sports",
			"fighting"
		],
		k: [
			41,
			25
		],
		o: 4
	},
	mute: {
		a: "Speaker with Cancellation Stroke",
		b: "1F507",
		j: [
			"sound",
			"volume",
			"silence",
			"quiet"
		],
		k: [
			27,
			35
		],
		o: 2
	},
	hamburger: {
		a: "Hamburger",
		b: "1F354",
		j: [
			"meat",
			"fast food",
			"beef",
			"cheeseburger",
			"mcdonalds",
			"burger king"
		],
		k: [
			6,
			44
		],
		o: 2
	},
	"flag-by": {
		a: "Belarus Flag",
		b: "1F1E7-1F1FE",
		k: [
			1,
			10
		],
		o: 2
	},
	sleepy: {
		a: "Sleepy Face",
		b: "1F62A",
		j: [
			"face",
			"tired",
			"rest",
			"nap"
		],
		k: [
			31,
			20
		],
		o: 2
	},
	on: {
		a: "On with Exclamation Mark with Left Right Arrow Above",
		b: "1F51B",
		j: [
			"arrow",
			"words"
		],
		k: [
			27,
			55
		],
		o: 2
	},
	martial_arts_uniform: {
		a: "Martial Arts Uniform",
		b: "1F94B",
		j: [
			"judo",
			"karate",
			"taekwondo"
		],
		k: [
			41,
			26
		],
		o: 4
	},
	speaker: {
		a: "Speaker",
		b: "1F508",
		j: [
			"sound",
			"volume",
			"silence",
			"broadcast"
		],
		k: [
			27,
			36
		],
		o: 2
	},
	drooling_face: {
		a: "Drooling Face",
		b: "1F924",
		j: [
			"face"
		],
		k: [
			38,
			21
		],
		o: 4
	},
	eyes: {
		a: "Eyes",
		b: "1F440",
		j: [
			"look",
			"watch",
			"stalk",
			"peek",
			"see"
		],
		k: [
			12,
			36
		],
		o: 2
	},
	"flag-bz": {
		a: "Belize Flag",
		b: "1F1E7-1F1FF",
		k: [
			1,
			11
		],
		o: 2
	},
	hamster: {
		a: "Hamster Face",
		b: "1F439",
		j: [
			"animal",
			"nature"
		],
		k: [
			12,
			29
		],
		o: 2
	},
	shinto_shrine: {
		a: "Shinto Shrine",
		b: "26E9-FE0F",
		c: "26E9",
		j: [
			"temple",
			"japan",
			"kyoto"
		],
		k: [
			54,
			9
		],
		o: 2
	},
	fries: {
		a: "French Fries",
		b: "1F35F",
		j: [
			"chips",
			"snack",
			"fast food"
		],
		k: [
			6,
			55
		],
		o: 2
	},
	goal_net: {
		a: "Goal Net",
		b: "1F945",
		j: [
			"sports"
		],
		k: [
			41,
			21
		],
		o: 4
	},
	kaaba: {
		a: "Kaaba",
		b: "1F54B",
		j: [
			"mecca",
			"mosque",
			"islam"
		],
		k: [
			28,
			35
		],
		o: 2
	},
	soon: {
		a: "Soon with Rightwards Arrow Above",
		b: "1F51C",
		j: [
			"arrow",
			"words"
		],
		k: [
			27,
			56
		],
		o: 2
	},
	"flag-ca": {
		a: "Canada Flag",
		b: "1F1E8-1F1E6",
		k: [
			1,
			12
		],
		o: 2
	},
	rabbit: {
		a: "Rabbit Face",
		b: "1F430",
		j: [
			"animal",
			"nature",
			"pet",
			"spring",
			"magic",
			"bunny"
		],
		k: [
			12,
			20
		],
		o: 2
	},
	eye: {
		a: "Eye",
		b: "1F441-FE0F",
		c: "1F441",
		j: [
			"face",
			"look",
			"see",
			"watch",
			"stare"
		],
		k: [
			12,
			38
		],
		o: 2
	},
	sleeping: {
		a: "Sleeping Face",
		b: "1F634",
		j: [
			"face",
			"tired",
			"sleepy",
			"night",
			"zzz"
		],
		k: [
			31,
			30
		],
		o: 2
	},
	pizza: {
		a: "Slice of Pizza",
		b: "1F355",
		j: [
			"food",
			"party"
		],
		k: [
			6,
			45
		],
		o: 2
	},
	sound: {
		a: "Speaker with One Sound Wave",
		b: "1F509",
		j: [
			"volume",
			"speaker",
			"broadcast"
		],
		k: [
			27,
			37
		],
		o: 2
	},
	rabbit2: {
		a: "Rabbit",
		b: "1F407",
		j: [
			"animal",
			"nature",
			"pet",
			"magic",
			"spring"
		],
		k: [
			11,
			35
		],
		o: 2
	},
	fountain: {
		a: "Fountain",
		b: "26F2",
		j: [
			"photo",
			"summer",
			"water",
			"fresh"
		],
		k: [
			54,
			13
		],
		o: 2
	},
	golf: {
		a: "Flag in Hole",
		b: "26F3",
		j: [
			"sports",
			"business",
			"flag",
			"hole",
			"summer"
		],
		k: [
			54,
			14
		],
		o: 2
	},
	top: {
		a: "Top with Upwards Arrow Above",
		b: "1F51D",
		j: [
			"words",
			"blue-square"
		],
		k: [
			28,
			0
		],
		o: 2
	},
	mask: {
		a: "Face with Medical Mask",
		b: "1F637",
		j: [
			"face",
			"sick",
			"ill",
			"disease"
		],
		k: [
			31,
			33
		],
		o: 2
	},
	"flag-cc": {
		a: "Cocos (keeling) Islands Flag",
		b: "1F1E8-1F1E8",
		k: [
			1,
			13
		],
		o: 2
	},
	hotdog: {
		a: "Hot Dog",
		b: "1F32D",
		j: [
			"food",
			"frankfurter"
		],
		k: [
			6,
			5
		],
		o: 2
	},
	loud_sound: {
		a: "Speaker with Three Sound Waves",
		b: "1F50A",
		j: [
			"volume",
			"noise",
			"noisy",
			"speaker",
			"broadcast"
		],
		k: [
			27,
			38
		],
		o: 2
	},
	tongue: {
		a: "Tongue",
		b: "1F445",
		j: [
			"mouth",
			"playful"
		],
		k: [
			12,
			52
		],
		o: 2
	},
	place_of_worship: {
		a: "Place of Worship",
		b: "1F6D0",
		j: [
			"religion",
			"church",
			"temple",
			"prayer"
		],
		k: [
			36,
			38
		],
		o: 2
	},
	ice_skate: {
		a: "Ice Skate",
		b: "26F8-FE0F",
		c: "26F8",
		j: [
			"sports"
		],
		k: [
			54,
			18
		],
		o: 2
	},
	sandwich: {
		a: "Sandwich",
		b: "1F96A",
		k: [
			42,
			0
		],
		o: 5
	},
	chipmunk: {
		a: "Chipmunk",
		b: "1F43F-FE0F",
		c: "1F43F",
		j: [
			"animal",
			"nature",
			"rodent",
			"squirrel"
		],
		k: [
			12,
			35
		],
		o: 2
	},
	loudspeaker: {
		a: "Public Address Loudspeaker",
		b: "1F4E2",
		j: [
			"volume",
			"sound"
		],
		k: [
			26,
			56
		],
		o: 2
	},
	lips: {
		a: "Mouth",
		b: "1F444",
		j: [
			"mouth",
			"kiss"
		],
		k: [
			12,
			51
		],
		o: 2
	},
	"flag-cd": {
		a: "Congo - Kinshasa Flag",
		b: "1F1E8-1F1E9",
		k: [
			1,
			14
		],
		o: 2
	},
	tent: {
		a: "Tent",
		b: "26FA",
		j: [
			"photo",
			"camping",
			"outdoors"
		],
		k: [
			54,
			37
		],
		o: 2
	},
	face_with_thermometer: {
		a: "Face with Thermometer",
		b: "1F912",
		j: [
			"sick",
			"temperature",
			"thermometer",
			"cold",
			"fever"
		],
		k: [
			37,
			25
		],
		o: 2
	},
	taco: {
		a: "Taco",
		b: "1F32E",
		j: [
			"food",
			"mexican"
		],
		k: [
			6,
			6
		],
		o: 2
	},
	foggy: {
		a: "Foggy",
		b: "1F301",
		j: [
			"photo",
			"mountain"
		],
		k: [
			5,
			20
		],
		o: 2
	},
	"flag-cf": {
		a: "Central African Republic Flag",
		b: "1F1E8-1F1EB",
		k: [
			1,
			15
		],
		o: 2
	},
	baby: {
		skin_variations: {
			"1F3FB": {
				unified: "1F476-1F3FB",
				non_qualified: null,
				image: "1f476-1f3fb.png",
				sheet_x: 23,
				sheet_y: 5,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F476-1F3FC",
				non_qualified: null,
				image: "1f476-1f3fc.png",
				sheet_x: 23,
				sheet_y: 6,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F476-1F3FD",
				non_qualified: null,
				image: "1f476-1f3fd.png",
				sheet_x: 23,
				sheet_y: 7,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F476-1F3FE",
				non_qualified: null,
				image: "1f476-1f3fe.png",
				sheet_x: 23,
				sheet_y: 8,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F476-1F3FF",
				non_qualified: null,
				image: "1f476-1f3ff.png",
				sheet_x: 23,
				sheet_y: 9,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Baby",
		b: "1F476",
		j: [
			"child",
			"boy",
			"girl",
			"toddler"
		],
		k: [
			23,
			4
		],
		o: 2
	},
	atom_symbol: {
		a: "Atom Symbol",
		b: "269B-FE0F",
		c: "269B",
		j: [
			"science",
			"physics",
			"chemistry"
		],
		k: [
			53,
			48
		],
		o: 2
	},
	fishing_pole_and_fish: {
		a: "Fishing Pole and Fish",
		b: "1F3A3",
		j: [
			"food",
			"hobby",
			"summer"
		],
		k: [
			8,
			9
		],
		o: 2
	},
	hedgehog: {
		a: "Hedgehog",
		b: "1F994",
		k: [
			42,
			38
		],
		o: 5
	},
	face_with_head_bandage: {
		a: "Face with Head-Bandage",
		b: "1F915",
		j: [
			"injured",
			"clumsy",
			"bandage",
			"hurt"
		],
		k: [
			37,
			28
		],
		o: 2
	},
	mega: {
		a: "Cheering Megaphone",
		b: "1F4E3",
		j: [
			"sound",
			"speaker",
			"volume"
		],
		k: [
			27,
			0
		],
		o: 2
	},
	nauseated_face: {
		a: "Nauseated Face",
		b: "1F922",
		j: [
			"face",
			"vomit",
			"gross",
			"green",
			"sick",
			"throw up",
			"ill"
		],
		k: [
			38,
			19
		],
		o: 4
	},
	child: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D2-1F3FB",
				non_qualified: null,
				image: "1f9d2-1f3fb.png",
				sheet_x: 48,
				sheet_y: 17,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9D2-1F3FC",
				non_qualified: null,
				image: "1f9d2-1f3fc.png",
				sheet_x: 48,
				sheet_y: 18,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9D2-1F3FD",
				non_qualified: null,
				image: "1f9d2-1f3fd.png",
				sheet_x: 48,
				sheet_y: 19,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9D2-1F3FE",
				non_qualified: null,
				image: "1f9d2-1f3fe.png",
				sheet_x: 48,
				sheet_y: 20,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9D2-1F3FF",
				non_qualified: null,
				image: "1f9d2-1f3ff.png",
				sheet_x: 48,
				sheet_y: 21,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Child",
		b: "1F9D2",
		k: [
			48,
			16
		],
		o: 5
	},
	"flag-cg": {
		a: "Congo - Brazzaville Flag",
		b: "1F1E8-1F1EC",
		k: [
			1,
			16
		],
		o: 2
	},
	bat: {
		a: "Bat",
		b: "1F987",
		j: [
			"animal",
			"nature",
			"blind",
			"vampire"
		],
		k: [
			42,
			25
		],
		o: 4
	},
	diving_mask: {
		a: "Diving Mask",
		b: "1F93F",
		k: [
			41,
			15
		],
		o: 12
	},
	burrito: {
		a: "Burrito",
		b: "1F32F",
		j: [
			"food",
			"mexican"
		],
		k: [
			6,
			7
		],
		o: 2
	},
	postal_horn: {
		a: "Postal Horn",
		b: "1F4EF",
		j: [
			"instrument",
			"music"
		],
		k: [
			27,
			12
		],
		o: 2
	},
	night_with_stars: {
		a: "Night with Stars",
		b: "1F303",
		j: [
			"evening",
			"city",
			"downtown"
		],
		k: [
			5,
			22
		],
		o: 2
	},
	om_symbol: {
		a: "Om Symbol",
		b: "1F549-FE0F",
		c: "1F549",
		k: [
			28,
			33
		],
		o: 2
	},
	star_of_david: {
		a: "Star of David",
		b: "2721-FE0F",
		c: "2721",
		j: [
			"judaism"
		],
		k: [
			55,
			15
		],
		o: 2
	},
	boy: {
		skin_variations: {
			"1F3FB": {
				unified: "1F466-1F3FB",
				non_qualified: null,
				image: "1f466-1f3fb.png",
				sheet_x: 14,
				sheet_y: 27,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F466-1F3FC",
				non_qualified: null,
				image: "1f466-1f3fc.png",
				sheet_x: 14,
				sheet_y: 28,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F466-1F3FD",
				non_qualified: null,
				image: "1f466-1f3fd.png",
				sheet_x: 14,
				sheet_y: 29,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F466-1F3FE",
				non_qualified: null,
				image: "1f466-1f3fe.png",
				sheet_x: 14,
				sheet_y: 30,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F466-1F3FF",
				non_qualified: null,
				image: "1f466-1f3ff.png",
				sheet_x: 14,
				sheet_y: 31,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Boy",
		b: "1F466",
		j: [
			"man",
			"male",
			"guy",
			"teenager"
		],
		k: [
			14,
			26
		],
		o: 2
	},
	bell: {
		a: "Bell",
		b: "1F514",
		j: [
			"sound",
			"notification",
			"christmas",
			"xmas",
			"chime"
		],
		k: [
			27,
			48
		],
		o: 2
	},
	"flag-ch": {
		a: "Switzerland Flag",
		b: "1F1E8-1F1ED",
		k: [
			1,
			17
		],
		o: 2
	},
	running_shirt_with_sash: {
		a: "Running Shirt with Sash",
		b: "1F3BD",
		j: [
			"play",
			"pageant"
		],
		k: [
			8,
			35
		],
		o: 2
	},
	stuffed_flatbread: {
		a: "Stuffed Flatbread",
		b: "1F959",
		j: [
			"food",
			"flatbread",
			"stuffed",
			"gyro"
		],
		k: [
			41,
			40
		],
		o: 4
	},
	bear: {
		a: "Bear Face",
		b: "1F43B",
		j: [
			"animal",
			"nature",
			"wild"
		],
		k: [
			12,
			31
		],
		o: 2
	},
	cityscape: {
		a: "Cityscape",
		b: "1F3D9-FE0F",
		c: "1F3D9",
		j: [
			"photo",
			"night life",
			"urban"
		],
		k: [
			10,
			44
		],
		o: 2
	},
	face_vomiting: {
		a: "Face with Open Mouth Vomiting",
		b: "1F92E",
		k: [
			38,
			48
		],
		n: [
			"face_with_open_mouth_vomiting"
		],
		o: 5
	},
	wheel_of_dharma: {
		a: "Wheel of Dharma",
		b: "2638-FE0F",
		c: "2638",
		j: [
			"hinduism",
			"buddhism",
			"sikhism",
			"jainism"
		],
		k: [
			53,
			15
		],
		o: 2
	},
	ski: {
		a: "Ski and Ski Boot",
		b: "1F3BF",
		j: [
			"sports",
			"winter",
			"cold",
			"snow"
		],
		k: [
			8,
			37
		],
		o: 2
	},
	girl: {
		skin_variations: {
			"1F3FB": {
				unified: "1F467-1F3FB",
				non_qualified: null,
				image: "1f467-1f3fb.png",
				sheet_x: 14,
				sheet_y: 33,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F467-1F3FC",
				non_qualified: null,
				image: "1f467-1f3fc.png",
				sheet_x: 14,
				sheet_y: 34,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F467-1F3FD",
				non_qualified: null,
				image: "1f467-1f3fd.png",
				sheet_x: 14,
				sheet_y: 35,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F467-1F3FE",
				non_qualified: null,
				image: "1f467-1f3fe.png",
				sheet_x: 14,
				sheet_y: 36,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F467-1F3FF",
				non_qualified: null,
				image: "1f467-1f3ff.png",
				sheet_x: 14,
				sheet_y: 37,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Girl",
		b: "1F467",
		j: [
			"female",
			"woman",
			"teenager"
		],
		k: [
			14,
			32
		],
		o: 2
	},
	falafel: {
		a: "Falafel",
		b: "1F9C6",
		k: [
			44,
			14
		],
		o: 12
	},
	sneezing_face: {
		a: "Sneezing Face",
		b: "1F927",
		j: [
			"face",
			"gesundheit",
			"sneeze",
			"sick",
			"allergy"
		],
		k: [
			38,
			41
		],
		o: 4
	},
	no_bell: {
		a: "Bell with Cancellation Stroke",
		b: "1F515",
		j: [
			"sound",
			"volume",
			"mute",
			"quiet",
			"silent"
		],
		k: [
			27,
			49
		],
		o: 2
	},
	koala: {
		a: "Koala",
		b: "1F428",
		j: [
			"animal",
			"nature"
		],
		k: [
			12,
			12
		],
		o: 2
	},
	sunrise_over_mountains: {
		a: "Sunrise over Mountains",
		b: "1F304",
		j: [
			"view",
			"vacation",
			"photo"
		],
		k: [
			5,
			23
		],
		o: 2
	},
	"flag-ci": {
		a: "Côte D’ivoire Flag",
		b: "1F1E8-1F1EE",
		k: [
			1,
			18
		],
		o: 2
	},
	sunrise: {
		a: "Sunrise",
		b: "1F305",
		j: [
			"morning",
			"view",
			"vacation",
			"photo"
		],
		k: [
			5,
			24
		],
		o: 2
	},
	yin_yang: {
		a: "Yin Yang",
		b: "262F-FE0F",
		c: "262F",
		j: [
			"balance"
		],
		k: [
			53,
			14
		],
		o: 2
	},
	adult: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D1-1F3FB",
				non_qualified: null,
				image: "1f9d1-1f3fb.png",
				sheet_x: 48,
				sheet_y: 11,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9D1-1F3FC",
				non_qualified: null,
				image: "1f9d1-1f3fc.png",
				sheet_x: 48,
				sheet_y: 12,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9D1-1F3FD",
				non_qualified: null,
				image: "1f9d1-1f3fd.png",
				sheet_x: 48,
				sheet_y: 13,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9D1-1F3FE",
				non_qualified: null,
				image: "1f9d1-1f3fe.png",
				sheet_x: 48,
				sheet_y: 14,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9D1-1F3FF",
				non_qualified: null,
				image: "1f9d1-1f3ff.png",
				sheet_x: 48,
				sheet_y: 15,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Adult",
		b: "1F9D1",
		k: [
			48,
			10
		],
		o: 5
	},
	hot_face: {
		a: "Overheated Face",
		b: "1F975",
		k: [
			42,
			10
		],
		o: 11
	},
	musical_score: {
		a: "Musical Score",
		b: "1F3BC",
		j: [
			"treble",
			"clef",
			"compose"
		],
		k: [
			8,
			34
		],
		o: 2
	},
	sled: {
		a: "Sled",
		b: "1F6F7",
		k: [
			36,
			56
		],
		o: 5
	},
	egg: {
		a: "Egg",
		b: "1F95A",
		j: [
			"food",
			"chicken",
			"breakfast"
		],
		k: [
			41,
			41
		],
		o: 4
	},
	panda_face: {
		a: "Panda Face",
		b: "1F43C",
		j: [
			"animal",
			"nature",
			"panda"
		],
		k: [
			12,
			32
		],
		o: 2
	},
	"flag-ck": {
		a: "Cook Islands Flag",
		b: "1F1E8-1F1F0",
		k: [
			1,
			19
		],
		o: 2
	},
	"flag-cl": {
		a: "Chile Flag",
		b: "1F1E8-1F1F1",
		k: [
			1,
			20
		],
		o: 2
	},
	person_with_blond_hair: {
		skin_variations: {
			"1F3FB": {
				unified: "1F471-1F3FB",
				non_qualified: null,
				image: "1f471-1f3fb.png",
				sheet_x: 22,
				sheet_y: 20,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F471-1F3FC",
				non_qualified: null,
				image: "1f471-1f3fc.png",
				sheet_x: 22,
				sheet_y: 21,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F471-1F3FD",
				non_qualified: null,
				image: "1f471-1f3fd.png",
				sheet_x: 22,
				sheet_y: 22,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F471-1F3FE",
				non_qualified: null,
				image: "1f471-1f3fe.png",
				sheet_x: 22,
				sheet_y: 23,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F471-1F3FF",
				non_qualified: null,
				image: "1f471-1f3ff.png",
				sheet_x: 22,
				sheet_y: 24,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F471-200D-2642-FE0F",
		a: "Person with Blond Hair",
		b: "1F471",
		k: [
			22,
			19
		],
		o: 2
	},
	sloth: {
		a: "Sloth",
		b: "1F9A5",
		k: [
			42,
			53
		],
		o: 12
	},
	latin_cross: {
		a: "Latin Cross",
		b: "271D-FE0F",
		c: "271D",
		j: [
			"christianity"
		],
		k: [
			55,
			14
		],
		o: 2
	},
	curling_stone: {
		a: "Curling Stone",
		b: "1F94C",
		k: [
			41,
			27
		],
		o: 5
	},
	cold_face: {
		a: "Freezing Face",
		b: "1F976",
		k: [
			42,
			11
		],
		o: 11
	},
	fried_egg: {
		a: "Cooking",
		b: "1F373",
		j: [
			"food",
			"breakfast",
			"kitchen",
			"egg"
		],
		k: [
			7,
			18
		],
		n: [
			"cooking"
		],
		o: 2
	},
	city_sunset: {
		a: "Cityscape at Dusk",
		b: "1F306",
		j: [
			"photo",
			"evening",
			"sky",
			"buildings"
		],
		k: [
			5,
			25
		],
		o: 2
	},
	musical_note: {
		a: "Musical Note",
		b: "1F3B5",
		j: [
			"score",
			"tone",
			"sound"
		],
		k: [
			8,
			27
		],
		o: 2
	},
	"flag-cm": {
		a: "Cameroon Flag",
		b: "1F1E8-1F1F2",
		k: [
			1,
			21
		],
		o: 2
	},
	notes: {
		a: "Multiple Musical Notes",
		b: "1F3B6",
		j: [
			"music",
			"score"
		],
		k: [
			8,
			28
		],
		o: 2
	},
	woozy_face: {
		a: "Face with Uneven Eyes and Wavy Mouth",
		b: "1F974",
		k: [
			42,
			9
		],
		o: 11
	},
	dart: {
		a: "Direct Hit",
		b: "1F3AF",
		j: [
			"game",
			"play",
			"bar"
		],
		k: [
			8,
			21
		],
		o: 2
	},
	orthodox_cross: {
		a: "Orthodox Cross",
		b: "2626-FE0F",
		c: "2626",
		j: [
			"suppedaneum",
			"religion"
		],
		k: [
			53,
			11
		],
		o: 2
	},
	shallow_pan_of_food: {
		a: "Shallow Pan of Food",
		b: "1F958",
		j: [
			"food",
			"cooking",
			"casserole",
			"paella"
		],
		k: [
			41,
			39
		],
		o: 4
	},
	otter: {
		a: "Otter",
		b: "1F9A6",
		k: [
			42,
			54
		],
		o: 12
	},
	man: {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB",
				non_qualified: null,
				image: "1f468-1f3fb.png",
				sheet_x: 17,
				sheet_y: 23,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC",
				non_qualified: null,
				image: "1f468-1f3fc.png",
				sheet_x: 17,
				sheet_y: 24,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD",
				non_qualified: null,
				image: "1f468-1f3fd.png",
				sheet_x: 17,
				sheet_y: 25,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE",
				non_qualified: null,
				image: "1f468-1f3fe.png",
				sheet_x: 17,
				sheet_y: 26,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF",
				non_qualified: null,
				image: "1f468-1f3ff.png",
				sheet_x: 17,
				sheet_y: 27,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man",
		b: "1F468",
		j: [
			"mustache",
			"father",
			"dad",
			"guy",
			"classy",
			"sir",
			"moustache"
		],
		k: [
			17,
			22
		],
		o: 2
	},
	city_sunrise: {
		a: "Sunset over Buildings",
		b: "1F307",
		j: [
			"photo",
			"good morning",
			"dawn"
		],
		k: [
			5,
			26
		],
		o: 2
	},
	bearded_person: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D4-1F3FB",
				non_qualified: null,
				image: "1f9d4-1f3fb.png",
				sheet_x: 48,
				sheet_y: 29,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9D4-1F3FC",
				non_qualified: null,
				image: "1f9d4-1f3fc.png",
				sheet_x: 48,
				sheet_y: 30,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9D4-1F3FD",
				non_qualified: null,
				image: "1f9d4-1f3fd.png",
				sheet_x: 48,
				sheet_y: 31,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9D4-1F3FE",
				non_qualified: null,
				image: "1f9d4-1f3fe.png",
				sheet_x: 48,
				sheet_y: 32,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9D4-1F3FF",
				non_qualified: null,
				image: "1f9d4-1f3ff.png",
				sheet_x: 48,
				sheet_y: 33,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Bearded Person",
		b: "1F9D4",
		k: [
			48,
			28
		],
		o: 5
	},
	skunk: {
		a: "Skunk",
		b: "1F9A8",
		k: [
			42,
			56
		],
		o: 12
	},
	stew: {
		a: "Pot of Food",
		b: "1F372",
		j: [
			"food",
			"meat",
			"soup"
		],
		k: [
			7,
			17
		],
		o: 2
	},
	cn: {
		a: "China Flag",
		b: "1F1E8-1F1F3",
		j: [
			"china",
			"chinese",
			"prc",
			"flag",
			"country",
			"nation",
			"banner"
		],
		k: [
			1,
			22
		],
		n: [
			"flag-cn"
		],
		o: 2
	},
	studio_microphone: {
		a: "Studio Microphone",
		b: "1F399-FE0F",
		c: "1F399",
		j: [
			"sing",
			"recording",
			"artist",
			"talkshow"
		],
		k: [
			8,
			1
		],
		o: 2
	},
	star_and_crescent: {
		a: "Star and Crescent",
		b: "262A-FE0F",
		c: "262A",
		j: [
			"islam"
		],
		k: [
			53,
			12
		],
		o: 2
	},
	"yo-yo": {
		a: "Yo-Yo",
		b: "1FA80",
		k: [
			52,
			1
		],
		o: 12
	},
	bridge_at_night: {
		a: "Bridge at Night",
		b: "1F309",
		j: [
			"photo",
			"sanfrancisco"
		],
		k: [
			5,
			28
		],
		o: 2
	},
	dizzy_face: {
		a: "Dizzy Face",
		b: "1F635",
		j: [
			"spent",
			"unconscious",
			"xox",
			"dizzy"
		],
		k: [
			31,
			31
		],
		o: 2
	},
	red_haired_man: {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F9B0",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f9b0.png",
				sheet_x: 16,
				sheet_y: 24,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F9B0",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f9b0.png",
				sheet_x: 16,
				sheet_y: 25,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F9B0",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f9b0.png",
				sheet_x: 16,
				sheet_y: 26,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F9B0",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f9b0.png",
				sheet_x: 16,
				sheet_y: 27,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F9B0",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f9b0.png",
				sheet_x: 16,
				sheet_y: 28,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Red Haired Man",
		b: "1F468-200D-1F9B0",
		k: [
			16,
			23
		],
		o: 11
	},
	kite: {
		a: "Kite",
		b: "1FA81",
		k: [
			52,
			2
		],
		o: 12
	},
	bowl_with_spoon: {
		a: "Bowl with Spoon",
		b: "1F963",
		k: [
			41,
			50
		],
		o: 5
	},
	"flag-co": {
		a: "Colombia Flag",
		b: "1F1E8-1F1F4",
		k: [
			1,
			23
		],
		o: 2
	},
	peace_symbol: {
		a: "Peace Symbol",
		b: "262E-FE0F",
		c: "262E",
		j: [
			"hippie"
		],
		k: [
			53,
			13
		],
		o: 2
	},
	kangaroo: {
		a: "Kangaroo",
		b: "1F998",
		k: [
			42,
			42
		],
		o: 11
	},
	hotsprings: {
		a: "Hot Springs",
		b: "2668-FE0F",
		c: "2668",
		j: [
			"bath",
			"warm",
			"relax"
		],
		k: [
			53,
			37
		],
		o: 2
	},
	exploding_head: {
		a: "Shocked Face with Exploding Head",
		b: "1F92F",
		k: [
			38,
			49
		],
		n: [
			"shocked_face_with_exploding_head"
		],
		o: 5
	},
	level_slider: {
		a: "Level Slider",
		b: "1F39A-FE0F",
		c: "1F39A",
		j: [
			"scale"
		],
		k: [
			8,
			2
		],
		o: 2
	},
	badger: {
		a: "Badger",
		b: "1F9A1",
		k: [
			42,
			51
		],
		o: 11
	},
	"8ball": {
		a: "Billiards",
		b: "1F3B1",
		j: [
			"pool",
			"hobby",
			"game",
			"luck",
			"magic"
		],
		k: [
			8,
			23
		],
		o: 2
	},
	curly_haired_man: {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F9B1",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f9b1.png",
				sheet_x: 16,
				sheet_y: 30,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F9B1",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f9b1.png",
				sheet_x: 16,
				sheet_y: 31,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F9B1",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f9b1.png",
				sheet_x: 16,
				sheet_y: 32,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F9B1",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f9b1.png",
				sheet_x: 16,
				sheet_y: 33,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F9B1",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f9b1.png",
				sheet_x: 16,
				sheet_y: 34,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Curly Haired Man",
		b: "1F468-200D-1F9B1",
		k: [
			16,
			29
		],
		o: 11
	},
	"flag-cp": {
		a: "Clipperton Island Flag",
		b: "1F1E8-1F1F5",
		k: [
			1,
			24
		],
		o: 2
	},
	carousel_horse: {
		a: "Carousel Horse",
		b: "1F3A0",
		j: [
			"photo",
			"carnival"
		],
		k: [
			8,
			6
		],
		o: 2
	},
	face_with_cowboy_hat: {
		a: "Face with Cowboy Hat",
		b: "1F920",
		k: [
			38,
			17
		],
		o: 4
	},
	menorah_with_nine_branches: {
		a: "Menorah with Nine Branches",
		b: "1F54E",
		k: [
			28,
			38
		],
		o: 2
	},
	green_salad: {
		a: "Green Salad",
		b: "1F957",
		j: [
			"food",
			"healthy",
			"lettuce"
		],
		k: [
			41,
			38
		],
		o: 4
	},
	control_knobs: {
		a: "Control Knobs",
		b: "1F39B-FE0F",
		c: "1F39B",
		j: [
			"dial"
		],
		k: [
			8,
			3
		],
		o: 2
	},
	popcorn: {
		a: "Popcorn",
		b: "1F37F",
		j: [
			"food",
			"movie theater",
			"films",
			"snack"
		],
		k: [
			7,
			30
		],
		o: 2
	},
	six_pointed_star: {
		a: "Six Pointed Star with Middle Dot",
		b: "1F52F",
		j: [
			"purple-square",
			"religion",
			"jewish",
			"hexagram"
		],
		k: [
			28,
			18
		],
		o: 2
	},
	feet: {
		a: "Paw Prints",
		b: "1F43E",
		k: [
			12,
			34
		],
		n: [
			"paw_prints"
		],
		o: 2
	},
	ferris_wheel: {
		a: "Ferris Wheel",
		b: "1F3A1",
		j: [
			"photo",
			"carnival",
			"londoneye"
		],
		k: [
			8,
			7
		],
		o: 2
	},
	microphone: {
		a: "Microphone",
		b: "1F3A4",
		j: [
			"sound",
			"music",
			"PA",
			"sing",
			"talkshow"
		],
		k: [
			8,
			10
		],
		o: 2
	},
	crystal_ball: {
		a: "Crystal Ball",
		b: "1F52E",
		j: [
			"disco",
			"party",
			"magic",
			"circus",
			"fortune_teller"
		],
		k: [
			28,
			17
		],
		o: 2
	},
	partying_face: {
		a: "Face with Party Horn and Party Hat",
		b: "1F973",
		k: [
			42,
			8
		],
		o: 11
	},
	"flag-cr": {
		a: "Costa Rica Flag",
		b: "1F1E8-1F1F7",
		k: [
			1,
			25
		],
		o: 2
	},
	white_haired_man: {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F9B3",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f9b3.png",
				sheet_x: 16,
				sheet_y: 42,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F9B3",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f9b3.png",
				sheet_x: 16,
				sheet_y: 43,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F9B3",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f9b3.png",
				sheet_x: 16,
				sheet_y: 44,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F9B3",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f9b3.png",
				sheet_x: 16,
				sheet_y: 45,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F9B3",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f9b3.png",
				sheet_x: 16,
				sheet_y: 46,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "White Haired Man",
		b: "1F468-200D-1F9B3",
		k: [
			16,
			41
		],
		o: 11
	},
	headphones: {
		a: "Headphone",
		b: "1F3A7",
		j: [
			"music",
			"score",
			"gadgets"
		],
		k: [
			8,
			13
		],
		o: 2
	},
	bald_man: {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F9B2",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f9b2.png",
				sheet_x: 16,
				sheet_y: 36,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F9B2",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f9b2.png",
				sheet_x: 16,
				sheet_y: 37,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F9B2",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f9b2.png",
				sheet_x: 16,
				sheet_y: 38,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F9B2",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f9b2.png",
				sheet_x: 16,
				sheet_y: 39,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F9B2",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f9b2.png",
				sheet_x: 16,
				sheet_y: 40,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Bald Man",
		b: "1F468-200D-1F9B2",
		k: [
			16,
			35
		],
		o: 11
	},
	sunglasses: {
		a: "Smiling Face with Sunglasses",
		b: "1F60E",
		j: [
			"face",
			"cool",
			"smile",
			"summer",
			"beach",
			"sunglass"
		],
		k: [
			30,
			49
		],
		l: [
			"8)"
		],
		o: 2
	},
	butter: {
		a: "Butter",
		b: "1F9C8",
		k: [
			44,
			16
		],
		o: 12
	},
	roller_coaster: {
		a: "Roller Coaster",
		b: "1F3A2",
		j: [
			"carnival",
			"playground",
			"photo",
			"fun"
		],
		k: [
			8,
			8
		],
		o: 2
	},
	turkey: {
		a: "Turkey",
		b: "1F983",
		j: [
			"animal",
			"bird"
		],
		k: [
			42,
			21
		],
		o: 2
	},
	nazar_amulet: {
		a: "Nazar Amulet",
		b: "1F9FF",
		k: [
			51,
			50
		],
		o: 11
	},
	"flag-cu": {
		a: "Cuba Flag",
		b: "1F1E8-1F1FA",
		k: [
			1,
			26
		],
		o: 2
	},
	aries: {
		a: "Aries",
		b: "2648",
		j: [
			"sign",
			"purple-square",
			"zodiac",
			"astrology"
		],
		k: [
			53,
			20
		],
		o: 2
	},
	"flag-cv": {
		a: "Cape Verde Flag",
		b: "1F1E8-1F1FB",
		k: [
			1,
			27
		],
		o: 2
	},
	barber: {
		a: "Barber Pole",
		b: "1F488",
		j: [
			"hair",
			"salon",
			"style"
		],
		k: [
			25,
			18
		],
		o: 2
	},
	taurus: {
		a: "Taurus",
		b: "2649",
		j: [
			"purple-square",
			"sign",
			"zodiac",
			"astrology"
		],
		k: [
			53,
			21
		],
		o: 2
	},
	salt: {
		a: "Salt Shaker",
		b: "1F9C2",
		k: [
			44,
			10
		],
		o: 11
	},
	woman: {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB",
				non_qualified: null,
				image: "1f469-1f3fb.png",
				sheet_x: 20,
				sheet_y: 10,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC",
				non_qualified: null,
				image: "1f469-1f3fc.png",
				sheet_x: 20,
				sheet_y: 11,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD",
				non_qualified: null,
				image: "1f469-1f3fd.png",
				sheet_x: 20,
				sheet_y: 12,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE",
				non_qualified: null,
				image: "1f469-1f3fe.png",
				sheet_x: 20,
				sheet_y: 13,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF",
				non_qualified: null,
				image: "1f469-1f3ff.png",
				sheet_x: 20,
				sheet_y: 14,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman",
		b: "1F469",
		j: [
			"female",
			"girls",
			"lady"
		],
		k: [
			20,
			9
		],
		o: 2
	},
	video_game: {
		a: "Video Game",
		b: "1F3AE",
		j: [
			"play",
			"console",
			"PS4",
			"controller"
		],
		k: [
			8,
			20
		],
		o: 2
	},
	chicken: {
		a: "Chicken",
		b: "1F414",
		j: [
			"animal",
			"cluck",
			"nature",
			"bird"
		],
		k: [
			11,
			48
		],
		o: 2
	},
	radio: {
		a: "Radio",
		b: "1F4FB",
		j: [
			"communication",
			"music",
			"podcast",
			"program"
		],
		k: [
			27,
			24
		],
		o: 2
	},
	nerd_face: {
		a: "Nerd Face",
		b: "1F913",
		j: [
			"face",
			"nerdy",
			"geek",
			"dork"
		],
		k: [
			37,
			26
		],
		o: 2
	},
	red_haired_woman: {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F9B0",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f9b0.png",
				sheet_x: 19,
				sheet_y: 9,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F9B0",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f9b0.png",
				sheet_x: 19,
				sheet_y: 10,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F9B0",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f9b0.png",
				sheet_x: 19,
				sheet_y: 11,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F9B0",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f9b0.png",
				sheet_x: 19,
				sheet_y: 12,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F9B0",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f9b0.png",
				sheet_x: 19,
				sheet_y: 13,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Red Haired Woman",
		b: "1F469-200D-1F9B0",
		k: [
			19,
			8
		],
		o: 11
	},
	circus_tent: {
		a: "Circus Tent",
		b: "1F3AA",
		j: [
			"festival",
			"carnival",
			"party"
		],
		k: [
			8,
			16
		],
		o: 2
	},
	face_with_monocle: {
		a: "Face with Monocle",
		b: "1F9D0",
		k: [
			45,
			16
		],
		o: 5
	},
	canned_food: {
		a: "Canned Food",
		b: "1F96B",
		k: [
			42,
			1
		],
		o: 5
	},
	"flag-cw": {
		a: "Curaçao Flag",
		b: "1F1E8-1F1FC",
		k: [
			1,
			28
		],
		o: 2
	},
	gemini: {
		a: "Gemini",
		b: "264A",
		j: [
			"sign",
			"zodiac",
			"purple-square",
			"astrology"
		],
		k: [
			53,
			22
		],
		o: 2
	},
	saxophone: {
		a: "Saxophone",
		b: "1F3B7",
		j: [
			"music",
			"instrument",
			"jazz",
			"blues"
		],
		k: [
			8,
			29
		],
		o: 2
	},
	rooster: {
		a: "Rooster",
		b: "1F413",
		j: [
			"animal",
			"nature",
			"chicken"
		],
		k: [
			11,
			47
		],
		o: 2
	},
	joystick: {
		a: "Joystick",
		b: "1F579-FE0F",
		c: "1F579",
		j: [
			"game",
			"play"
		],
		k: [
			29,
			36
		],
		o: 2
	},
	guitar: {
		a: "Guitar",
		b: "1F3B8",
		j: [
			"music",
			"instrument"
		],
		k: [
			8,
			30
		],
		o: 2
	},
	slot_machine: {
		a: "Slot Machine",
		b: "1F3B0",
		j: [
			"bet",
			"gamble",
			"vegas",
			"fruit machine",
			"luck",
			"casino"
		],
		k: [
			8,
			22
		],
		o: 2
	},
	bento: {
		a: "Bento Box",
		b: "1F371",
		j: [
			"food",
			"japanese",
			"box"
		],
		k: [
			7,
			16
		],
		o: 2
	},
	steam_locomotive: {
		a: "Steam Locomotive",
		b: "1F682",
		j: [
			"transportation",
			"vehicle",
			"train"
		],
		k: [
			34,
			1
		],
		o: 2
	},
	confused: {
		a: "Confused Face",
		b: "1F615",
		j: [
			"face",
			"indifference",
			"huh",
			"weird",
			"hmmm",
			":/"
		],
		k: [
			30,
			56
		],
		l: [
			":\\",
			":-\\",
			":/",
			":-/"
		],
		o: 2
	},
	"flag-cx": {
		a: "Christmas Island Flag",
		b: "1F1E8-1F1FD",
		k: [
			1,
			29
		],
		o: 2
	},
	hatching_chick: {
		a: "Hatching Chick",
		b: "1F423",
		j: [
			"animal",
			"chicken",
			"egg",
			"born",
			"baby",
			"bird"
		],
		k: [
			12,
			7
		],
		o: 2
	},
	cancer: {
		a: "Cancer",
		b: "264B",
		j: [
			"sign",
			"zodiac",
			"purple-square",
			"astrology"
		],
		k: [
			53,
			23
		],
		o: 2
	},
	"flag-cy": {
		a: "Cyprus Flag",
		b: "1F1E8-1F1FE",
		k: [
			1,
			30
		],
		o: 2
	},
	worried: {
		a: "Worried Face",
		b: "1F61F",
		j: [
			"face",
			"concern",
			"nervous",
			":("
		],
		k: [
			31,
			9
		],
		o: 2
	},
	railway_car: {
		a: "Railway Car",
		b: "1F683",
		j: [
			"transportation",
			"vehicle"
		],
		k: [
			34,
			2
		],
		o: 2
	},
	leo: {
		a: "Leo",
		b: "264C",
		j: [
			"sign",
			"purple-square",
			"zodiac",
			"astrology"
		],
		k: [
			53,
			24
		],
		o: 2
	},
	curly_haired_woman: {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F9B1",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f9b1.png",
				sheet_x: 19,
				sheet_y: 15,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F9B1",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f9b1.png",
				sheet_x: 19,
				sheet_y: 16,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F9B1",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f9b1.png",
				sheet_x: 19,
				sheet_y: 17,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F9B1",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f9b1.png",
				sheet_x: 19,
				sheet_y: 18,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F9B1",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f9b1.png",
				sheet_x: 19,
				sheet_y: 19,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Curly Haired Woman",
		b: "1F469-200D-1F9B1",
		k: [
			19,
			14
		],
		o: 11
	},
	baby_chick: {
		a: "Baby Chick",
		b: "1F424",
		j: [
			"animal",
			"chicken",
			"bird"
		],
		k: [
			12,
			8
		],
		o: 2
	},
	musical_keyboard: {
		a: "Musical Keyboard",
		b: "1F3B9",
		j: [
			"piano",
			"instrument",
			"compose"
		],
		k: [
			8,
			31
		],
		o: 2
	},
	game_die: {
		a: "Game Die",
		b: "1F3B2",
		j: [
			"dice",
			"random",
			"tabletop",
			"play",
			"luck"
		],
		k: [
			8,
			24
		],
		o: 2
	},
	rice_cracker: {
		a: "Rice Cracker",
		b: "1F358",
		j: [
			"food",
			"japanese"
		],
		k: [
			6,
			48
		],
		o: 2
	},
	virgo: {
		a: "Virgo",
		b: "264D",
		j: [
			"sign",
			"zodiac",
			"purple-square",
			"astrology"
		],
		k: [
			53,
			25
		],
		o: 2
	},
	"flag-cz": {
		a: "Czechia Flag",
		b: "1F1E8-1F1FF",
		k: [
			1,
			31
		],
		o: 2
	},
	rice_ball: {
		a: "Rice Ball",
		b: "1F359",
		j: [
			"food",
			"japanese"
		],
		k: [
			6,
			49
		],
		o: 2
	},
	hatched_chick: {
		a: "Front-Facing Baby Chick",
		b: "1F425",
		j: [
			"animal",
			"chicken",
			"baby",
			"bird"
		],
		k: [
			12,
			9
		],
		o: 2
	},
	jigsaw: {
		a: "Jigsaw Puzzle Piece",
		b: "1F9E9",
		k: [
			51,
			28
		],
		o: 11
	},
	trumpet: {
		a: "Trumpet",
		b: "1F3BA",
		j: [
			"music",
			"brass"
		],
		k: [
			8,
			32
		],
		o: 2
	},
	slightly_frowning_face: {
		a: "Slightly Frowning Face",
		b: "1F641",
		j: [
			"face",
			"frowning",
			"disappointed",
			"sad",
			"upset"
		],
		k: [
			31,
			43
		],
		o: 2
	},
	bullettrain_side: {
		a: "High-Speed Train",
		b: "1F684",
		j: [
			"transportation",
			"vehicle"
		],
		k: [
			34,
			3
		],
		o: 2
	},
	libra: {
		a: "Libra",
		b: "264E",
		j: [
			"sign",
			"purple-square",
			"zodiac",
			"astrology"
		],
		k: [
			53,
			26
		],
		o: 2
	},
	de: {
		a: "Germany Flag",
		b: "1F1E9-1F1EA",
		j: [
			"german",
			"nation",
			"flag",
			"country",
			"banner"
		],
		k: [
			1,
			32
		],
		n: [
			"flag-de"
		],
		o: 2
	},
	rice: {
		a: "Cooked Rice",
		b: "1F35A",
		j: [
			"food",
			"china",
			"asian"
		],
		k: [
			6,
			50
		],
		o: 2
	},
	violin: {
		a: "Violin",
		b: "1F3BB",
		j: [
			"music",
			"instrument",
			"orchestra",
			"symphony"
		],
		k: [
			8,
			33
		],
		o: 2
	},
	white_haired_woman: {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F9B3",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f9b3.png",
				sheet_x: 19,
				sheet_y: 27,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F9B3",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f9b3.png",
				sheet_x: 19,
				sheet_y: 28,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F9B3",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f9b3.png",
				sheet_x: 19,
				sheet_y: 29,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F9B3",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f9b3.png",
				sheet_x: 19,
				sheet_y: 30,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F9B3",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f9b3.png",
				sheet_x: 19,
				sheet_y: 31,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "White Haired Woman",
		b: "1F469-200D-1F9B3",
		k: [
			19,
			26
		],
		o: 11
	},
	bird: {
		a: "Bird",
		b: "1F426",
		j: [
			"animal",
			"nature",
			"fly",
			"tweet",
			"spring"
		],
		k: [
			12,
			10
		],
		o: 2
	},
	white_frowning_face: {
		a: "White Frowning Face",
		b: "2639-FE0F",
		c: "2639",
		k: [
			53,
			16
		],
		o: 2
	},
	bullettrain_front: {
		a: "High-Speed Train with Bullet Nose",
		b: "1F685",
		j: [
			"transportation",
			"vehicle",
			"speed",
			"fast",
			"public",
			"travel"
		],
		k: [
			34,
			4
		],
		o: 2
	},
	teddy_bear: {
		a: "Teddy Bear",
		b: "1F9F8",
		k: [
			51,
			43
		],
		o: 11
	},
	spades: {
		a: "Black Spade Suit",
		b: "2660-FE0F",
		c: "2660",
		j: [
			"poker",
			"cards",
			"suits",
			"magic"
		],
		k: [
			53,
			33
		],
		o: 2
	},
	banjo: {
		a: "Banjo",
		b: "1FA95",
		k: [
			52,
			9
		],
		o: 12
	},
	train2: {
		a: "Train",
		b: "1F686",
		j: [
			"transportation",
			"vehicle"
		],
		k: [
			34,
			5
		],
		o: 2
	},
	scorpius: {
		a: "Scorpius",
		b: "264F",
		j: [
			"sign",
			"zodiac",
			"purple-square",
			"astrology",
			"scorpio"
		],
		k: [
			53,
			27
		],
		o: 2
	},
	curry: {
		a: "Curry and Rice",
		b: "1F35B",
		j: [
			"food",
			"spicy",
			"hot",
			"indian"
		],
		k: [
			6,
			51
		],
		o: 2
	},
	open_mouth: {
		a: "Face with Open Mouth",
		b: "1F62E",
		j: [
			"face",
			"surprise",
			"impressed",
			"wow",
			"whoa",
			":O"
		],
		k: [
			31,
			24
		],
		l: [
			":o",
			":-o",
			":O",
			":-O"
		],
		o: 2
	},
	"flag-dg": {
		a: "Diego Garcia Flag",
		b: "1F1E9-1F1EC",
		k: [
			1,
			33
		],
		o: 2
	},
	penguin: {
		a: "Penguin",
		b: "1F427",
		j: [
			"animal",
			"nature"
		],
		k: [
			12,
			11
		],
		o: 2
	},
	hearts: {
		a: "Black Heart Suit",
		b: "2665-FE0F",
		c: "2665",
		j: [
			"poker",
			"cards",
			"magic",
			"suits"
		],
		k: [
			53,
			35
		],
		o: 2
	},
	ramen: {
		a: "Steaming Bowl",
		b: "1F35C",
		j: [
			"food",
			"japanese",
			"noodle",
			"chopsticks"
		],
		k: [
			6,
			52
		],
		o: 2
	},
	sagittarius: {
		a: "Sagittarius",
		b: "2650",
		j: [
			"sign",
			"zodiac",
			"purple-square",
			"astrology"
		],
		k: [
			53,
			28
		],
		o: 2
	},
	bald_woman: {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F9B2",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f9b2.png",
				sheet_x: 19,
				sheet_y: 21,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F9B2",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f9b2.png",
				sheet_x: 19,
				sheet_y: 22,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F9B2",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f9b2.png",
				sheet_x: 19,
				sheet_y: 23,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F9B2",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f9b2.png",
				sheet_x: 19,
				sheet_y: 24,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F9B2",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f9b2.png",
				sheet_x: 19,
				sheet_y: 25,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Bald Woman",
		b: "1F469-200D-1F9B2",
		k: [
			19,
			20
		],
		o: 11
	},
	dove_of_peace: {
		a: "Dove of Peace",
		b: "1F54A-FE0F",
		c: "1F54A",
		k: [
			28,
			34
		],
		o: 2
	},
	hushed: {
		a: "Hushed Face",
		b: "1F62F",
		j: [
			"face",
			"woo",
			"shh"
		],
		k: [
			31,
			25
		],
		o: 2
	},
	metro: {
		a: "Metro",
		b: "1F687",
		j: [
			"transportation",
			"blue-square",
			"mrt",
			"underground",
			"tube"
		],
		k: [
			34,
			6
		],
		o: 2
	},
	"flag-dj": {
		a: "Djibouti Flag",
		b: "1F1E9-1F1EF",
		k: [
			1,
			34
		],
		o: 2
	},
	drum_with_drumsticks: {
		a: "Drum with Drumsticks",
		b: "1F941",
		k: [
			41,
			17
		],
		o: 4
	},
	spaghetti: {
		a: "Spaghetti",
		b: "1F35D",
		j: [
			"food",
			"italian",
			"noodle"
		],
		k: [
			6,
			53
		],
		o: 2
	},
	eagle: {
		a: "Eagle",
		b: "1F985",
		j: [
			"animal",
			"nature",
			"bird"
		],
		k: [
			42,
			23
		],
		o: 4
	},
	astonished: {
		a: "Astonished Face",
		b: "1F632",
		j: [
			"face",
			"xox",
			"surprised",
			"poisoned"
		],
		k: [
			31,
			28
		],
		o: 2
	},
	capricorn: {
		a: "Capricorn",
		b: "2651",
		j: [
			"sign",
			"zodiac",
			"purple-square",
			"astrology"
		],
		k: [
			53,
			29
		],
		o: 2
	},
	light_rail: {
		a: "Light Rail",
		b: "1F688",
		j: [
			"transportation",
			"vehicle"
		],
		k: [
			34,
			7
		],
		o: 2
	},
	"flag-dk": {
		a: "Denmark Flag",
		b: "1F1E9-1F1F0",
		k: [
			1,
			35
		],
		o: 2
	},
	iphone: {
		a: "Mobile Phone",
		b: "1F4F1",
		j: [
			"technology",
			"apple",
			"gadgets",
			"dial"
		],
		k: [
			27,
			14
		],
		o: 2
	},
	diamonds: {
		a: "Black Diamond Suit",
		b: "2666-FE0F",
		c: "2666",
		j: [
			"poker",
			"cards",
			"magic",
			"suits"
		],
		k: [
			53,
			36
		],
		o: 2
	},
	clubs: {
		a: "Black Club Suit",
		b: "2663-FE0F",
		c: "2663",
		j: [
			"poker",
			"cards",
			"magic",
			"suits"
		],
		k: [
			53,
			34
		],
		o: 2
	},
	aquarius: {
		a: "Aquarius",
		b: "2652",
		j: [
			"sign",
			"purple-square",
			"zodiac",
			"astrology"
		],
		k: [
			53,
			30
		],
		o: 2
	},
	sweet_potato: {
		a: "Roasted Sweet Potato",
		b: "1F360",
		j: [
			"food",
			"nature"
		],
		k: [
			6,
			56
		],
		o: 2
	},
	"flag-dm": {
		a: "Dominica Flag",
		b: "1F1E9-1F1F2",
		k: [
			1,
			36
		],
		o: 2
	},
	duck: {
		a: "Duck",
		b: "1F986",
		j: [
			"animal",
			"nature",
			"bird",
			"mallard"
		],
		k: [
			42,
			24
		],
		o: 4
	},
	calling: {
		a: "Mobile Phone with Rightwards Arrow at Left",
		b: "1F4F2",
		j: [
			"iphone",
			"incoming"
		],
		k: [
			27,
			15
		],
		o: 2
	},
	station: {
		a: "Station",
		b: "1F689",
		j: [
			"transportation",
			"vehicle",
			"public"
		],
		k: [
			34,
			8
		],
		o: 2
	},
	"blond-haired-woman": {
		skin_variations: {
			"1F3FB": {
				unified: "1F471-1F3FB-200D-2640-FE0F",
				non_qualified: "1F471-1F3FB-200D-2640",
				image: "1f471-1f3fb-200d-2640-fe0f.png",
				sheet_x: 22,
				sheet_y: 8,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F471-1F3FC-200D-2640-FE0F",
				non_qualified: "1F471-1F3FC-200D-2640",
				image: "1f471-1f3fc-200d-2640-fe0f.png",
				sheet_x: 22,
				sheet_y: 9,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F471-1F3FD-200D-2640-FE0F",
				non_qualified: "1F471-1F3FD-200D-2640",
				image: "1f471-1f3fd-200d-2640-fe0f.png",
				sheet_x: 22,
				sheet_y: 10,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F471-1F3FE-200D-2640-FE0F",
				non_qualified: "1F471-1F3FE-200D-2640",
				image: "1f471-1f3fe-200d-2640-fe0f.png",
				sheet_x: 22,
				sheet_y: 11,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F471-1F3FF-200D-2640-FE0F",
				non_qualified: "1F471-1F3FF-200D-2640",
				image: "1f471-1f3ff-200d-2640-fe0f.png",
				sheet_x: 22,
				sheet_y: 12,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Blond Haired Woman",
		b: "1F471-200D-2640-FE0F",
		c: "1F471-200D-2640",
		k: [
			22,
			7
		],
		o: 4
	},
	flushed: {
		a: "Flushed Face",
		b: "1F633",
		j: [
			"face",
			"blush",
			"shy",
			"flattered"
		],
		k: [
			31,
			29
		],
		o: 2
	},
	pisces: {
		a: "Pisces",
		b: "2653",
		j: [
			"purple-square",
			"sign",
			"zodiac",
			"astrology"
		],
		k: [
			53,
			31
		],
		o: 2
	},
	chess_pawn: {
		a: "Chess Pawn",
		b: "265F-FE0F",
		c: "265F",
		k: [
			53,
			32
		],
		o: 11
	},
	"blond-haired-man": {
		skin_variations: {
			"1F3FB": {
				unified: "1F471-1F3FB-200D-2642-FE0F",
				non_qualified: "1F471-1F3FB-200D-2642",
				image: "1f471-1f3fb-200d-2642-fe0f.png",
				sheet_x: 22,
				sheet_y: 14,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F471-1F3FC-200D-2642-FE0F",
				non_qualified: "1F471-1F3FC-200D-2642",
				image: "1f471-1f3fc-200d-2642-fe0f.png",
				sheet_x: 22,
				sheet_y: 15,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F471-1F3FD-200D-2642-FE0F",
				non_qualified: "1F471-1F3FD-200D-2642",
				image: "1f471-1f3fd-200d-2642-fe0f.png",
				sheet_x: 22,
				sheet_y: 16,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F471-1F3FE-200D-2642-FE0F",
				non_qualified: "1F471-1F3FE-200D-2642",
				image: "1f471-1f3fe-200d-2642-fe0f.png",
				sheet_x: 22,
				sheet_y: 17,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F471-1F3FF-200D-2642-FE0F",
				non_qualified: "1F471-1F3FF-200D-2642",
				image: "1f471-1f3ff-200d-2642-fe0f.png",
				sheet_x: 22,
				sheet_y: 18,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F471",
		a: "Blond Haired Man",
		b: "1F471-200D-2642-FE0F",
		c: "1F471-200D-2642",
		k: [
			22,
			13
		],
		o: 4
	},
	phone: {
		a: "Black Telephone",
		b: "260E-FE0F",
		c: "260E",
		j: [
			"technology",
			"communication",
			"dial",
			"telephone"
		],
		k: [
			52,
			54
		],
		n: [
			"telephone"
		],
		o: 2
	},
	oden: {
		a: "Oden",
		b: "1F362",
		j: [
			"food",
			"japanese"
		],
		k: [
			7,
			1
		],
		o: 2
	},
	"flag-do": {
		a: "Dominican Republic Flag",
		b: "1F1E9-1F1F4",
		k: [
			1,
			37
		],
		o: 2
	},
	tram: {
		a: "Tram",
		b: "1F68A",
		j: [
			"transportation",
			"vehicle"
		],
		k: [
			34,
			9
		],
		o: 2
	},
	swan: {
		a: "Swan",
		b: "1F9A2",
		k: [
			42,
			52
		],
		o: 11
	},
	pleading_face: {
		a: "Face with Pleading Eyes",
		b: "1F97A",
		k: [
			42,
			12
		],
		o: 11
	},
	"flag-dz": {
		a: "Algeria Flag",
		b: "1F1E9-1F1FF",
		k: [
			1,
			38
		],
		o: 2
	},
	monorail: {
		a: "Monorail",
		b: "1F69D",
		j: [
			"transportation",
			"vehicle"
		],
		k: [
			34,
			28
		],
		o: 2
	},
	owl: {
		a: "Owl",
		b: "1F989",
		j: [
			"animal",
			"nature",
			"bird",
			"hoot"
		],
		k: [
			42,
			27
		],
		o: 4
	},
	sushi: {
		a: "Sushi",
		b: "1F363",
		j: [
			"food",
			"fish",
			"japanese",
			"rice"
		],
		k: [
			7,
			2
		],
		o: 2
	},
	telephone_receiver: {
		a: "Telephone Receiver",
		b: "1F4DE",
		j: [
			"technology",
			"communication",
			"dial"
		],
		k: [
			26,
			52
		],
		o: 2
	},
	black_joker: {
		a: "Playing Card Black Joker",
		b: "1F0CF",
		j: [
			"poker",
			"cards",
			"game",
			"play",
			"magic"
		],
		k: [
			0,
			15
		],
		o: 2
	},
	ophiuchus: {
		a: "Ophiuchus",
		b: "26CE",
		j: [
			"sign",
			"purple-square",
			"constellation",
			"astrology"
		],
		k: [
			54,
			4
		],
		o: 2
	},
	frowning: {
		a: "Frowning Face with Open Mouth",
		b: "1F626",
		j: [
			"face",
			"aw",
			"what"
		],
		k: [
			31,
			16
		],
		o: 2
	},
	older_adult: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D3-1F3FB",
				non_qualified: null,
				image: "1f9d3-1f3fb.png",
				sheet_x: 48,
				sheet_y: 23,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9D3-1F3FC",
				non_qualified: null,
				image: "1f9d3-1f3fc.png",
				sheet_x: 48,
				sheet_y: 24,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9D3-1F3FD",
				non_qualified: null,
				image: "1f9d3-1f3fd.png",
				sheet_x: 48,
				sheet_y: 25,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9D3-1F3FE",
				non_qualified: null,
				image: "1f9d3-1f3fe.png",
				sheet_x: 48,
				sheet_y: 26,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9D3-1F3FF",
				non_qualified: null,
				image: "1f9d3-1f3ff.png",
				sheet_x: 48,
				sheet_y: 27,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Older Adult",
		b: "1F9D3",
		k: [
			48,
			22
		],
		o: 5
	},
	"flag-ea": {
		a: "Ceuta & Melilla Flag",
		b: "1F1EA-1F1E6",
		k: [
			1,
			39
		],
		o: 2
	},
	flamingo: {
		a: "Flamingo",
		b: "1F9A9",
		k: [
			43,
			0
		],
		o: 12
	},
	pager: {
		a: "Pager",
		b: "1F4DF",
		j: [
			"bbcall",
			"oldschool",
			"90s"
		],
		k: [
			26,
			53
		],
		o: 2
	},
	mountain_railway: {
		a: "Mountain Railway",
		b: "1F69E",
		j: [
			"transportation",
			"vehicle"
		],
		k: [
			34,
			29
		],
		o: 2
	},
	mahjong: {
		a: "Mahjong Tile Red Dragon",
		b: "1F004",
		j: [
			"game",
			"play",
			"chinese",
			"kanji"
		],
		k: [
			0,
			14
		],
		o: 2
	},
	older_man: {
		skin_variations: {
			"1F3FB": {
				unified: "1F474-1F3FB",
				non_qualified: null,
				image: "1f474-1f3fb.png",
				sheet_x: 22,
				sheet_y: 50,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F474-1F3FC",
				non_qualified: null,
				image: "1f474-1f3fc.png",
				sheet_x: 22,
				sheet_y: 51,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F474-1F3FD",
				non_qualified: null,
				image: "1f474-1f3fd.png",
				sheet_x: 22,
				sheet_y: 52,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F474-1F3FE",
				non_qualified: null,
				image: "1f474-1f3fe.png",
				sheet_x: 22,
				sheet_y: 53,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F474-1F3FF",
				non_qualified: null,
				image: "1f474-1f3ff.png",
				sheet_x: 22,
				sheet_y: 54,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Older Man",
		b: "1F474",
		j: [
			"human",
			"male",
			"men",
			"old",
			"elder",
			"senior"
		],
		k: [
			22,
			49
		],
		o: 2
	},
	twisted_rightwards_arrows: {
		a: "Twisted Rightwards Arrows",
		b: "1F500",
		j: [
			"blue-square",
			"shuffle",
			"music",
			"random"
		],
		k: [
			27,
			28
		],
		o: 2
	},
	fried_shrimp: {
		a: "Fried Shrimp",
		b: "1F364",
		j: [
			"food",
			"animal",
			"appetizer",
			"summer"
		],
		k: [
			7,
			3
		],
		o: 2
	},
	anguished: {
		a: "Anguished Face",
		b: "1F627",
		j: [
			"face",
			"stunned",
			"nervous"
		],
		k: [
			31,
			17
		],
		l: [
			"D:"
		],
		o: 2
	},
	repeat: {
		a: "Clockwise Rightwards and Leftwards Open Circle Arrows",
		b: "1F501",
		j: [
			"loop",
			"record"
		],
		k: [
			27,
			29
		],
		o: 2
	},
	fish_cake: {
		a: "Fish Cake with Swirl Design",
		b: "1F365",
		j: [
			"food",
			"japan",
			"sea",
			"beach",
			"narutomaki",
			"pink",
			"swirl",
			"kamaboko",
			"surimi",
			"ramen"
		],
		k: [
			7,
			4
		],
		o: 2
	},
	fax: {
		a: "Fax Machine",
		b: "1F4E0",
		j: [
			"communication",
			"technology"
		],
		k: [
			26,
			54
		],
		o: 2
	},
	older_woman: {
		skin_variations: {
			"1F3FB": {
				unified: "1F475-1F3FB",
				non_qualified: null,
				image: "1f475-1f3fb.png",
				sheet_x: 22,
				sheet_y: 56,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F475-1F3FC",
				non_qualified: null,
				image: "1f475-1f3fc.png",
				sheet_x: 23,
				sheet_y: 0,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F475-1F3FD",
				non_qualified: null,
				image: "1f475-1f3fd.png",
				sheet_x: 23,
				sheet_y: 1,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F475-1F3FE",
				non_qualified: null,
				image: "1f475-1f3fe.png",
				sheet_x: 23,
				sheet_y: 2,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F475-1F3FF",
				non_qualified: null,
				image: "1f475-1f3ff.png",
				sheet_x: 23,
				sheet_y: 3,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Older Woman",
		b: "1F475",
		j: [
			"human",
			"female",
			"women",
			"lady",
			"old",
			"elder",
			"senior"
		],
		k: [
			22,
			55
		],
		o: 2
	},
	"flag-ec": {
		a: "Ecuador Flag",
		b: "1F1EA-1F1E8",
		k: [
			1,
			40
		],
		o: 2
	},
	peacock: {
		a: "Peacock",
		b: "1F99A",
		k: [
			42,
			44
		],
		o: 11
	},
	fearful: {
		a: "Fearful Face",
		b: "1F628",
		j: [
			"face",
			"scared",
			"terrified",
			"nervous",
			"oops",
			"huh"
		],
		k: [
			31,
			18
		],
		o: 2
	},
	train: {
		a: "Tram Car",
		b: "1F68B",
		j: [
			"transportation",
			"vehicle",
			"carriage",
			"public",
			"travel"
		],
		k: [
			34,
			10
		],
		o: 2
	},
	flower_playing_cards: {
		a: "Flower Playing Cards",
		b: "1F3B4",
		j: [
			"game",
			"sunset",
			"red"
		],
		k: [
			8,
			26
		],
		o: 2
	},
	repeat_one: {
		a: "Clockwise Rightwards and Leftwards Open Circle Arrows with Circled One Overlay",
		b: "1F502",
		j: [
			"blue-square",
			"loop"
		],
		k: [
			27,
			30
		],
		o: 2
	},
	moon_cake: {
		a: "Moon Cake",
		b: "1F96E",
		k: [
			42,
			4
		],
		o: 11
	},
	performing_arts: {
		a: "Performing Arts",
		b: "1F3AD",
		j: [
			"acting",
			"theater",
			"drama"
		],
		k: [
			8,
			19
		],
		o: 2
	},
	cold_sweat: {
		a: "Face with Open Mouth and Cold Sweat",
		b: "1F630",
		j: [
			"face",
			"nervous",
			"sweat"
		],
		k: [
			31,
			26
		],
		o: 2
	},
	person_frowning: {
		skin_variations: {
			"1F3FB": {
				unified: "1F64D-1F3FB",
				non_qualified: null,
				image: "1f64d-1f3fb.png",
				sheet_x: 33,
				sheet_y: 27,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F64D-1F3FC",
				non_qualified: null,
				image: "1f64d-1f3fc.png",
				sheet_x: 33,
				sheet_y: 28,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F64D-1F3FD",
				non_qualified: null,
				image: "1f64d-1f3fd.png",
				sheet_x: 33,
				sheet_y: 29,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F64D-1F3FE",
				non_qualified: null,
				image: "1f64d-1f3fe.png",
				sheet_x: 33,
				sheet_y: 30,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F64D-1F3FF",
				non_qualified: null,
				image: "1f64d-1f3ff.png",
				sheet_x: 33,
				sheet_y: 31,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F64D-200D-2640-FE0F",
		a: "Person Frowning",
		b: "1F64D",
		k: [
			33,
			26
		],
		o: 2
	},
	"flag-ee": {
		a: "Estonia Flag",
		b: "1F1EA-1F1EA",
		k: [
			1,
			41
		],
		o: 2
	},
	battery: {
		a: "Battery",
		b: "1F50B",
		j: [
			"power",
			"energy",
			"sustain"
		],
		k: [
			27,
			39
		],
		o: 2
	},
	parrot: {
		a: "Parrot",
		b: "1F99C",
		k: [
			42,
			46
		],
		o: 11
	},
	bus: {
		a: "Bus",
		b: "1F68C",
		j: [
			"car",
			"vehicle",
			"transportation"
		],
		k: [
			34,
			11
		],
		o: 2
	},
	"flag-eg": {
		a: "Egypt Flag",
		b: "1F1EA-1F1EC",
		k: [
			1,
			42
		],
		o: 2
	},
	arrow_forward: {
		a: "Black Right-Pointing Triangle",
		b: "25B6-FE0F",
		c: "25B6",
		j: [
			"blue-square",
			"right",
			"direction",
			"play"
		],
		k: [
			52,
			43
		],
		o: 2
	},
	"man-frowning": {
		skin_variations: {
			"1F3FB": {
				unified: "1F64D-1F3FB-200D-2642-FE0F",
				non_qualified: "1F64D-1F3FB-200D-2642",
				image: "1f64d-1f3fb-200d-2642-fe0f.png",
				sheet_x: 33,
				sheet_y: 21,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F64D-1F3FC-200D-2642-FE0F",
				non_qualified: "1F64D-1F3FC-200D-2642",
				image: "1f64d-1f3fc-200d-2642-fe0f.png",
				sheet_x: 33,
				sheet_y: 22,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F64D-1F3FD-200D-2642-FE0F",
				non_qualified: "1F64D-1F3FD-200D-2642",
				image: "1f64d-1f3fd-200d-2642-fe0f.png",
				sheet_x: 33,
				sheet_y: 23,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F64D-1F3FE-200D-2642-FE0F",
				non_qualified: "1F64D-1F3FE-200D-2642",
				image: "1f64d-1f3fe-200d-2642-fe0f.png",
				sheet_x: 33,
				sheet_y: 24,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F64D-1F3FF-200D-2642-FE0F",
				non_qualified: "1F64D-1F3FF-200D-2642",
				image: "1f64d-1f3ff-200d-2642-fe0f.png",
				sheet_x: 33,
				sheet_y: 25,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Frowning",
		b: "1F64D-200D-2642-FE0F",
		c: "1F64D-200D-2642",
		k: [
			33,
			20
		],
		o: 4
	},
	disappointed_relieved: {
		a: "Disappointed but Relieved Face",
		b: "1F625",
		j: [
			"face",
			"phew",
			"sweat",
			"nervous"
		],
		k: [
			31,
			15
		],
		o: 2
	},
	electric_plug: {
		a: "Electric Plug",
		b: "1F50C",
		j: [
			"charger",
			"power"
		],
		k: [
			27,
			40
		],
		o: 2
	},
	frame_with_picture: {
		a: "Frame with Picture",
		b: "1F5BC-FE0F",
		c: "1F5BC",
		k: [
			30,
			14
		],
		o: 2
	},
	oncoming_bus: {
		a: "Oncoming Bus",
		b: "1F68D",
		j: [
			"vehicle",
			"transportation"
		],
		k: [
			34,
			12
		],
		o: 2
	},
	dango: {
		a: "Dango",
		b: "1F361",
		j: [
			"food",
			"dessert",
			"sweet",
			"japanese",
			"barbecue",
			"meat"
		],
		k: [
			7,
			0
		],
		o: 2
	},
	frog: {
		a: "Frog Face",
		b: "1F438",
		j: [
			"animal",
			"nature",
			"croak",
			"toad"
		],
		k: [
			12,
			28
		],
		o: 2
	},
	computer: {
		a: "Personal Computer",
		b: "1F4BB",
		j: [
			"technology",
			"laptop",
			"screen",
			"display",
			"monitor"
		],
		k: [
			26,
			17
		],
		o: 2
	},
	art: {
		a: "Artist Palette",
		b: "1F3A8",
		j: [
			"design",
			"paint",
			"draw",
			"colors"
		],
		k: [
			8,
			14
		],
		o: 2
	},
	"flag-eh": {
		a: "Western Sahara Flag",
		b: "1F1EA-1F1ED",
		k: [
			1,
			43
		],
		o: 2
	},
	fast_forward: {
		a: "Black Right-Pointing Double Triangle",
		b: "23E9",
		j: [
			"blue-square",
			"play",
			"speed",
			"continue"
		],
		k: [
			52,
			26
		],
		o: 2
	},
	cry: {
		a: "Crying Face",
		b: "1F622",
		j: [
			"face",
			"tears",
			"sad",
			"depressed",
			"upset",
			":'("
		],
		k: [
			31,
			12
		],
		l: [
			":'("
		],
		m: ":'(",
		o: 2
	},
	"woman-frowning": {
		skin_variations: {
			"1F3FB": {
				unified: "1F64D-1F3FB-200D-2640-FE0F",
				non_qualified: "1F64D-1F3FB-200D-2640",
				image: "1f64d-1f3fb-200d-2640-fe0f.png",
				sheet_x: 33,
				sheet_y: 15,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F64D-1F3FC-200D-2640-FE0F",
				non_qualified: "1F64D-1F3FC-200D-2640",
				image: "1f64d-1f3fc-200d-2640-fe0f.png",
				sheet_x: 33,
				sheet_y: 16,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F64D-1F3FD-200D-2640-FE0F",
				non_qualified: "1F64D-1F3FD-200D-2640",
				image: "1f64d-1f3fd-200d-2640-fe0f.png",
				sheet_x: 33,
				sheet_y: 17,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F64D-1F3FE-200D-2640-FE0F",
				non_qualified: "1F64D-1F3FE-200D-2640",
				image: "1f64d-1f3fe-200d-2640-fe0f.png",
				sheet_x: 33,
				sheet_y: 18,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F64D-1F3FF-200D-2640-FE0F",
				non_qualified: "1F64D-1F3FF-200D-2640",
				image: "1f64d-1f3ff-200d-2640-fe0f.png",
				sheet_x: 33,
				sheet_y: 19,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F64D",
		a: "Woman Frowning",
		b: "1F64D-200D-2640-FE0F",
		c: "1F64D-200D-2640",
		k: [
			33,
			14
		],
		o: 4
	},
	trolleybus: {
		a: "Trolleybus",
		b: "1F68E",
		j: [
			"bart",
			"transportation",
			"vehicle"
		],
		k: [
			34,
			13
		],
		o: 2
	},
	crocodile: {
		a: "Crocodile",
		b: "1F40A",
		j: [
			"animal",
			"nature",
			"reptile",
			"lizard",
			"alligator"
		],
		k: [
			11,
			38
		],
		o: 2
	},
	dumpling: {
		a: "Dumpling",
		b: "1F95F",
		k: [
			41,
			46
		],
		o: 5
	},
	black_right_pointing_double_triangle_with_vertical_bar: {
		a: "Black Right Pointing Double Triangle with Vertical Bar",
		b: "23ED-FE0F",
		c: "23ED",
		k: [
			52,
			30
		],
		o: 2
	},
	desktop_computer: {
		a: "Desktop Computer",
		b: "1F5A5-FE0F",
		c: "1F5A5",
		j: [
			"technology",
			"computing",
			"screen"
		],
		k: [
			30,
			10
		],
		o: 2
	},
	person_with_pouting_face: {
		skin_variations: {
			"1F3FB": {
				unified: "1F64E-1F3FB",
				non_qualified: null,
				image: "1f64e-1f3fb.png",
				sheet_x: 33,
				sheet_y: 45,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F64E-1F3FC",
				non_qualified: null,
				image: "1f64e-1f3fc.png",
				sheet_x: 33,
				sheet_y: 46,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F64E-1F3FD",
				non_qualified: null,
				image: "1f64e-1f3fd.png",
				sheet_x: 33,
				sheet_y: 47,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F64E-1F3FE",
				non_qualified: null,
				image: "1f64e-1f3fe.png",
				sheet_x: 33,
				sheet_y: 48,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F64E-1F3FF",
				non_qualified: null,
				image: "1f64e-1f3ff.png",
				sheet_x: 33,
				sheet_y: 49,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F64E-200D-2640-FE0F",
		a: "Person with Pouting Face",
		b: "1F64E",
		k: [
			33,
			44
		],
		o: 2
	},
	turtle: {
		a: "Turtle",
		b: "1F422",
		j: [
			"animal",
			"slow",
			"nature",
			"tortoise"
		],
		k: [
			12,
			6
		],
		o: 2
	},
	sob: {
		a: "Loudly Crying Face",
		b: "1F62D",
		j: [
			"face",
			"cry",
			"tears",
			"sad",
			"upset",
			"depressed"
		],
		k: [
			31,
			23
		],
		m: ":'(",
		o: 2
	},
	"flag-er": {
		a: "Eritrea Flag",
		b: "1F1EA-1F1F7",
		k: [
			1,
			44
		],
		o: 2
	},
	thread: {
		a: "Spool of Thread",
		b: "1F9F5",
		k: [
			51,
			40
		],
		o: 11
	},
	minibus: {
		a: "Minibus",
		b: "1F690",
		j: [
			"vehicle",
			"car",
			"transportation"
		],
		k: [
			34,
			15
		],
		o: 2
	},
	fortune_cookie: {
		a: "Fortune Cookie",
		b: "1F960",
		k: [
			41,
			47
		],
		o: 5
	},
	yarn: {
		a: "Ball of Yarn",
		b: "1F9F6",
		k: [
			51,
			41
		],
		o: 11
	},
	takeout_box: {
		a: "Takeout Box",
		b: "1F961",
		k: [
			41,
			48
		],
		o: 5
	},
	"man-pouting": {
		skin_variations: {
			"1F3FB": {
				unified: "1F64E-1F3FB-200D-2642-FE0F",
				non_qualified: "1F64E-1F3FB-200D-2642",
				image: "1f64e-1f3fb-200d-2642-fe0f.png",
				sheet_x: 33,
				sheet_y: 39,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F64E-1F3FC-200D-2642-FE0F",
				non_qualified: "1F64E-1F3FC-200D-2642",
				image: "1f64e-1f3fc-200d-2642-fe0f.png",
				sheet_x: 33,
				sheet_y: 40,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F64E-1F3FD-200D-2642-FE0F",
				non_qualified: "1F64E-1F3FD-200D-2642",
				image: "1f64e-1f3fd-200d-2642-fe0f.png",
				sheet_x: 33,
				sheet_y: 41,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F64E-1F3FE-200D-2642-FE0F",
				non_qualified: "1F64E-1F3FE-200D-2642",
				image: "1f64e-1f3fe-200d-2642-fe0f.png",
				sheet_x: 33,
				sheet_y: 42,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F64E-1F3FF-200D-2642-FE0F",
				non_qualified: "1F64E-1F3FF-200D-2642",
				image: "1f64e-1f3ff-200d-2642-fe0f.png",
				sheet_x: 33,
				sheet_y: 43,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Pouting",
		b: "1F64E-200D-2642-FE0F",
		c: "1F64E-200D-2642",
		k: [
			33,
			38
		],
		o: 4
	},
	printer: {
		a: "Printer",
		b: "1F5A8-FE0F",
		c: "1F5A8",
		j: [
			"paper",
			"ink"
		],
		k: [
			30,
			11
		],
		o: 2
	},
	scream: {
		a: "Face Screaming in Fear",
		b: "1F631",
		j: [
			"face",
			"munch",
			"scared",
			"omg"
		],
		k: [
			31,
			27
		],
		o: 2
	},
	es: {
		a: "Spain Flag",
		b: "1F1EA-1F1F8",
		j: [
			"spain",
			"flag",
			"nation",
			"country",
			"banner"
		],
		k: [
			1,
			45
		],
		n: [
			"flag-es"
		],
		o: 2
	},
	ambulance: {
		a: "Ambulance",
		b: "1F691",
		j: [
			"health",
			"911",
			"hospital"
		],
		k: [
			34,
			16
		],
		o: 2
	},
	black_right_pointing_triangle_with_double_vertical_bar: {
		a: "Black Right Pointing Triangle with Double Vertical Bar",
		b: "23EF-FE0F",
		c: "23EF",
		k: [
			52,
			32
		],
		o: 2
	},
	lizard: {
		a: "Lizard",
		b: "1F98E",
		j: [
			"animal",
			"nature",
			"reptile"
		],
		k: [
			42,
			32
		],
		o: 4
	},
	"flag-et": {
		a: "Ethiopia Flag",
		b: "1F1EA-1F1F9",
		k: [
			1,
			46
		],
		o: 2
	},
	keyboard: {
		a: "Keyboard",
		b: "2328-FE0F",
		c: "2328",
		j: [
			"technology",
			"computer",
			"type",
			"input",
			"text"
		],
		k: [
			52,
			24
		],
		o: 2
	},
	crab: {
		a: "Crab",
		b: "1F980",
		j: [
			"animal",
			"crustacean"
		],
		k: [
			42,
			18
		],
		o: 2
	},
	confounded: {
		a: "Confounded Face",
		b: "1F616",
		j: [
			"face",
			"confused",
			"sick",
			"unwell",
			"oops",
			":S"
		],
		k: [
			31,
			0
		],
		o: 2
	},
	snake: {
		a: "Snake",
		b: "1F40D",
		j: [
			"animal",
			"evil",
			"nature",
			"hiss",
			"python"
		],
		k: [
			11,
			41
		],
		o: 2
	},
	"woman-pouting": {
		skin_variations: {
			"1F3FB": {
				unified: "1F64E-1F3FB-200D-2640-FE0F",
				non_qualified: "1F64E-1F3FB-200D-2640",
				image: "1f64e-1f3fb-200d-2640-fe0f.png",
				sheet_x: 33,
				sheet_y: 33,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F64E-1F3FC-200D-2640-FE0F",
				non_qualified: "1F64E-1F3FC-200D-2640",
				image: "1f64e-1f3fc-200d-2640-fe0f.png",
				sheet_x: 33,
				sheet_y: 34,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F64E-1F3FD-200D-2640-FE0F",
				non_qualified: "1F64E-1F3FD-200D-2640",
				image: "1f64e-1f3fd-200d-2640-fe0f.png",
				sheet_x: 33,
				sheet_y: 35,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F64E-1F3FE-200D-2640-FE0F",
				non_qualified: "1F64E-1F3FE-200D-2640",
				image: "1f64e-1f3fe-200d-2640-fe0f.png",
				sheet_x: 33,
				sheet_y: 36,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F64E-1F3FF-200D-2640-FE0F",
				non_qualified: "1F64E-1F3FF-200D-2640",
				image: "1f64e-1f3ff-200d-2640-fe0f.png",
				sheet_x: 33,
				sheet_y: 37,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F64E",
		a: "Woman Pouting",
		b: "1F64E-200D-2640-FE0F",
		c: "1F64E-200D-2640",
		k: [
			33,
			32
		],
		o: 4
	},
	arrow_backward: {
		a: "Black Left-Pointing Triangle",
		b: "25C0-FE0F",
		c: "25C0",
		j: [
			"blue-square",
			"left",
			"direction"
		],
		k: [
			52,
			44
		],
		o: 2
	},
	fire_engine: {
		a: "Fire Engine",
		b: "1F692",
		j: [
			"transportation",
			"cars",
			"vehicle"
		],
		k: [
			34,
			17
		],
		o: 2
	},
	rewind: {
		a: "Black Left-Pointing Double Triangle",
		b: "23EA",
		j: [
			"play",
			"blue-square"
		],
		k: [
			52,
			27
		],
		o: 2
	},
	three_button_mouse: {
		a: "Three Button Mouse",
		b: "1F5B1-FE0F",
		c: "1F5B1",
		k: [
			30,
			12
		],
		o: 2
	},
	no_good: {
		skin_variations: {
			"1F3FB": {
				unified: "1F645-1F3FB",
				non_qualified: null,
				image: "1f645-1f3fb.png",
				sheet_x: 32,
				sheet_y: 3,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F645-1F3FC",
				non_qualified: null,
				image: "1f645-1f3fc.png",
				sheet_x: 32,
				sheet_y: 4,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F645-1F3FD",
				non_qualified: null,
				image: "1f645-1f3fd.png",
				sheet_x: 32,
				sheet_y: 5,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F645-1F3FE",
				non_qualified: null,
				image: "1f645-1f3fe.png",
				sheet_x: 32,
				sheet_y: 6,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F645-1F3FF",
				non_qualified: null,
				image: "1f645-1f3ff.png",
				sheet_x: 32,
				sheet_y: 7,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F645-200D-2640-FE0F",
		a: "Face with No Good Gesture",
		b: "1F645",
		k: [
			32,
			2
		],
		o: 2
	},
	police_car: {
		a: "Police Car",
		b: "1F693",
		j: [
			"vehicle",
			"cars",
			"transportation",
			"law",
			"legal",
			"enforcement"
		],
		k: [
			34,
			18
		],
		o: 2
	},
	dragon_face: {
		a: "Dragon Face",
		b: "1F432",
		j: [
			"animal",
			"myth",
			"nature",
			"chinese",
			"green"
		],
		k: [
			12,
			22
		],
		o: 2
	},
	persevere: {
		a: "Persevering Face",
		b: "1F623",
		j: [
			"face",
			"sick",
			"no",
			"upset",
			"oops"
		],
		k: [
			31,
			13
		],
		o: 2
	},
	lobster: {
		a: "Lobster",
		b: "1F99E",
		k: [
			42,
			48
		],
		o: 11
	},
	"flag-eu": {
		a: "European Union Flag",
		b: "1F1EA-1F1FA",
		k: [
			1,
			47
		],
		o: 2
	},
	disappointed: {
		a: "Disappointed Face",
		b: "1F61E",
		j: [
			"face",
			"sad",
			"upset",
			"depressed",
			":("
		],
		k: [
			31,
			8
		],
		l: [
			"):",
			":(",
			":-("
		],
		m: ":(",
		o: 2
	},
	shrimp: {
		a: "Shrimp",
		b: "1F990",
		j: [
			"animal",
			"ocean",
			"nature",
			"seafood"
		],
		k: [
			42,
			34
		],
		o: 4
	},
	dragon: {
		a: "Dragon",
		b: "1F409",
		j: [
			"animal",
			"myth",
			"nature",
			"chinese",
			"green"
		],
		k: [
			11,
			37
		],
		o: 2
	},
	"man-gesturing-no": {
		skin_variations: {
			"1F3FB": {
				unified: "1F645-1F3FB-200D-2642-FE0F",
				non_qualified: "1F645-1F3FB-200D-2642",
				image: "1f645-1f3fb-200d-2642-fe0f.png",
				sheet_x: 31,
				sheet_y: 54,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F645-1F3FC-200D-2642-FE0F",
				non_qualified: "1F645-1F3FC-200D-2642",
				image: "1f645-1f3fc-200d-2642-fe0f.png",
				sheet_x: 31,
				sheet_y: 55,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F645-1F3FD-200D-2642-FE0F",
				non_qualified: "1F645-1F3FD-200D-2642",
				image: "1f645-1f3fd-200d-2642-fe0f.png",
				sheet_x: 31,
				sheet_y: 56,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F645-1F3FE-200D-2642-FE0F",
				non_qualified: "1F645-1F3FE-200D-2642",
				image: "1f645-1f3fe-200d-2642-fe0f.png",
				sheet_x: 32,
				sheet_y: 0,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F645-1F3FF-200D-2642-FE0F",
				non_qualified: "1F645-1F3FF-200D-2642",
				image: "1f645-1f3ff-200d-2642-fe0f.png",
				sheet_x: 32,
				sheet_y: 1,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Gesturing No",
		b: "1F645-200D-2642-FE0F",
		c: "1F645-200D-2642",
		k: [
			31,
			53
		],
		o: 4
	},
	"flag-fi": {
		a: "Finland Flag",
		b: "1F1EB-1F1EE",
		k: [
			1,
			48
		],
		o: 2
	},
	trackball: {
		a: "Trackball",
		b: "1F5B2-FE0F",
		c: "1F5B2",
		j: [
			"technology",
			"trackpad"
		],
		k: [
			30,
			13
		],
		o: 2
	},
	black_left_pointing_double_triangle_with_vertical_bar: {
		a: "Black Left Pointing Double Triangle with Vertical Bar",
		b: "23EE-FE0F",
		c: "23EE",
		k: [
			52,
			31
		],
		o: 2
	},
	oncoming_police_car: {
		a: "Oncoming Police Car",
		b: "1F694",
		j: [
			"vehicle",
			"law",
			"legal",
			"enforcement",
			"911"
		],
		k: [
			34,
			19
		],
		o: 2
	},
	minidisc: {
		a: "Minidisc",
		b: "1F4BD",
		j: [
			"technology",
			"record",
			"data",
			"disk",
			"90s"
		],
		k: [
			26,
			19
		],
		o: 2
	},
	sweat: {
		a: "Face with Cold Sweat",
		b: "1F613",
		j: [
			"face",
			"hot",
			"sad",
			"tired",
			"exercise"
		],
		k: [
			30,
			54
		],
		o: 2
	},
	squid: {
		a: "Squid",
		b: "1F991",
		j: [
			"animal",
			"nature",
			"ocean",
			"sea"
		],
		k: [
			42,
			35
		],
		o: 4
	},
	sauropod: {
		a: "Sauropod",
		b: "1F995",
		k: [
			42,
			39
		],
		o: 5
	},
	arrow_up_small: {
		a: "Up-Pointing Small Red Triangle",
		b: "1F53C",
		j: [
			"blue-square",
			"triangle",
			"direction",
			"point",
			"forward",
			"top"
		],
		k: [
			28,
			31
		],
		o: 2
	},
	"flag-fj": {
		a: "Fiji Flag",
		b: "1F1EB-1F1EF",
		k: [
			1,
			49
		],
		o: 2
	},
	"woman-gesturing-no": {
		skin_variations: {
			"1F3FB": {
				unified: "1F645-1F3FB-200D-2640-FE0F",
				non_qualified: "1F645-1F3FB-200D-2640",
				image: "1f645-1f3fb-200d-2640-fe0f.png",
				sheet_x: 31,
				sheet_y: 48,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F645-1F3FC-200D-2640-FE0F",
				non_qualified: "1F645-1F3FC-200D-2640",
				image: "1f645-1f3fc-200d-2640-fe0f.png",
				sheet_x: 31,
				sheet_y: 49,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F645-1F3FD-200D-2640-FE0F",
				non_qualified: "1F645-1F3FD-200D-2640",
				image: "1f645-1f3fd-200d-2640-fe0f.png",
				sheet_x: 31,
				sheet_y: 50,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F645-1F3FE-200D-2640-FE0F",
				non_qualified: "1F645-1F3FE-200D-2640",
				image: "1f645-1f3fe-200d-2640-fe0f.png",
				sheet_x: 31,
				sheet_y: 51,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F645-1F3FF-200D-2640-FE0F",
				non_qualified: "1F645-1F3FF-200D-2640",
				image: "1f645-1f3ff-200d-2640-fe0f.png",
				sheet_x: 31,
				sheet_y: 52,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F645",
		a: "Woman Gesturing No",
		b: "1F645-200D-2640-FE0F",
		c: "1F645-200D-2640",
		k: [
			31,
			47
		],
		o: 4
	},
	taxi: {
		a: "Taxi",
		b: "1F695",
		j: [
			"uber",
			"vehicle",
			"cars",
			"transportation"
		],
		k: [
			34,
			20
		],
		o: 2
	},
	"flag-fk": {
		a: "Falkland Islands Flag",
		b: "1F1EB-1F1F0",
		k: [
			1,
			50
		],
		o: 2
	},
	floppy_disk: {
		a: "Floppy Disk",
		b: "1F4BE",
		j: [
			"oldschool",
			"technology",
			"save",
			"90s",
			"80s"
		],
		k: [
			26,
			20
		],
		o: 2
	},
	"t-rex": {
		a: "T-Rex",
		b: "1F996",
		k: [
			42,
			40
		],
		o: 5
	},
	oyster: {
		a: "Oyster",
		b: "1F9AA",
		k: [
			43,
			1
		],
		o: 12
	},
	arrow_double_up: {
		a: "Black Up-Pointing Double Triangle",
		b: "23EB",
		j: [
			"blue-square",
			"direction",
			"top"
		],
		k: [
			52,
			28
		],
		o: 2
	},
	oncoming_taxi: {
		a: "Oncoming Taxi",
		b: "1F696",
		j: [
			"vehicle",
			"cars",
			"uber"
		],
		k: [
			34,
			21
		],
		o: 2
	},
	ok_woman: {
		skin_variations: {
			"1F3FB": {
				unified: "1F646-1F3FB",
				non_qualified: null,
				image: "1f646-1f3fb.png",
				sheet_x: 32,
				sheet_y: 21,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F646-1F3FC",
				non_qualified: null,
				image: "1f646-1f3fc.png",
				sheet_x: 32,
				sheet_y: 22,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F646-1F3FD",
				non_qualified: null,
				image: "1f646-1f3fd.png",
				sheet_x: 32,
				sheet_y: 23,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F646-1F3FE",
				non_qualified: null,
				image: "1f646-1f3fe.png",
				sheet_x: 32,
				sheet_y: 24,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F646-1F3FF",
				non_qualified: null,
				image: "1f646-1f3ff.png",
				sheet_x: 32,
				sheet_y: 25,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F646-200D-2640-FE0F",
		a: "Face with Ok Gesture",
		b: "1F646",
		j: [
			"women",
			"girl",
			"female",
			"pink",
			"human",
			"woman"
		],
		k: [
			32,
			20
		],
		o: 2
	},
	weary: {
		a: "Weary Face",
		b: "1F629",
		j: [
			"face",
			"tired",
			"sleepy",
			"sad",
			"frustrated",
			"upset"
		],
		k: [
			31,
			19
		],
		o: 2
	},
	"man-gesturing-ok": {
		skin_variations: {
			"1F3FB": {
				unified: "1F646-1F3FB-200D-2642-FE0F",
				non_qualified: "1F646-1F3FB-200D-2642",
				image: "1f646-1f3fb-200d-2642-fe0f.png",
				sheet_x: 32,
				sheet_y: 15,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F646-1F3FC-200D-2642-FE0F",
				non_qualified: "1F646-1F3FC-200D-2642",
				image: "1f646-1f3fc-200d-2642-fe0f.png",
				sheet_x: 32,
				sheet_y: 16,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F646-1F3FD-200D-2642-FE0F",
				non_qualified: "1F646-1F3FD-200D-2642",
				image: "1f646-1f3fd-200d-2642-fe0f.png",
				sheet_x: 32,
				sheet_y: 17,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F646-1F3FE-200D-2642-FE0F",
				non_qualified: "1F646-1F3FE-200D-2642",
				image: "1f646-1f3fe-200d-2642-fe0f.png",
				sheet_x: 32,
				sheet_y: 18,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F646-1F3FF-200D-2642-FE0F",
				non_qualified: "1F646-1F3FF-200D-2642",
				image: "1f646-1f3ff-200d-2642-fe0f.png",
				sheet_x: 32,
				sheet_y: 19,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Gesturing Ok",
		b: "1F646-200D-2642-FE0F",
		c: "1F646-200D-2642",
		k: [
			32,
			14
		],
		o: 4
	},
	arrow_down_small: {
		a: "Down-Pointing Small Red Triangle",
		b: "1F53D",
		j: [
			"blue-square",
			"direction",
			"bottom"
		],
		k: [
			28,
			32
		],
		o: 2
	},
	tired_face: {
		a: "Tired Face",
		b: "1F62B",
		j: [
			"sick",
			"whine",
			"upset",
			"frustrated"
		],
		k: [
			31,
			21
		],
		o: 2
	},
	car: {
		a: "Automobile",
		b: "1F697",
		k: [
			34,
			22
		],
		n: [
			"red_car"
		],
		o: 2
	},
	icecream: {
		a: "Soft Ice Cream",
		b: "1F366",
		j: [
			"food",
			"hot",
			"dessert",
			"summer"
		],
		k: [
			7,
			5
		],
		o: 2
	},
	cd: {
		a: "Optical Disc",
		b: "1F4BF",
		j: [
			"technology",
			"dvd",
			"disk",
			"disc",
			"90s"
		],
		k: [
			26,
			21
		],
		o: 2
	},
	whale: {
		a: "Spouting Whale",
		b: "1F433",
		j: [
			"animal",
			"nature",
			"sea",
			"ocean"
		],
		k: [
			12,
			23
		],
		o: 2
	},
	"flag-fm": {
		a: "Micronesia Flag",
		b: "1F1EB-1F1F2",
		k: [
			1,
			51
		],
		o: 2
	},
	oncoming_automobile: {
		a: "Oncoming Automobile",
		b: "1F698",
		j: [
			"car",
			"vehicle",
			"transportation"
		],
		k: [
			34,
			23
		],
		o: 2
	},
	arrow_double_down: {
		a: "Black Down-Pointing Double Triangle",
		b: "23EC",
		j: [
			"blue-square",
			"direction",
			"bottom"
		],
		k: [
			52,
			29
		],
		o: 2
	},
	"woman-gesturing-ok": {
		skin_variations: {
			"1F3FB": {
				unified: "1F646-1F3FB-200D-2640-FE0F",
				non_qualified: "1F646-1F3FB-200D-2640",
				image: "1f646-1f3fb-200d-2640-fe0f.png",
				sheet_x: 32,
				sheet_y: 9,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F646-1F3FC-200D-2640-FE0F",
				non_qualified: "1F646-1F3FC-200D-2640",
				image: "1f646-1f3fc-200d-2640-fe0f.png",
				sheet_x: 32,
				sheet_y: 10,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F646-1F3FD-200D-2640-FE0F",
				non_qualified: "1F646-1F3FD-200D-2640",
				image: "1f646-1f3fd-200d-2640-fe0f.png",
				sheet_x: 32,
				sheet_y: 11,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F646-1F3FE-200D-2640-FE0F",
				non_qualified: "1F646-1F3FE-200D-2640",
				image: "1f646-1f3fe-200d-2640-fe0f.png",
				sheet_x: 32,
				sheet_y: 12,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F646-1F3FF-200D-2640-FE0F",
				non_qualified: "1F646-1F3FF-200D-2640",
				image: "1f646-1f3ff-200d-2640-fe0f.png",
				sheet_x: 32,
				sheet_y: 13,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F646",
		a: "Woman Gesturing Ok",
		b: "1F646-200D-2640-FE0F",
		c: "1F646-200D-2640",
		k: [
			32,
			8
		],
		o: 4
	},
	yawning_face: {
		a: "Yawning Face",
		b: "1F971",
		k: [
			42,
			7
		],
		o: 12
	},
	dvd: {
		a: "Dvd",
		b: "1F4C0",
		j: [
			"cd",
			"disk",
			"disc"
		],
		k: [
			26,
			22
		],
		o: 2
	},
	whale2: {
		a: "Whale",
		b: "1F40B",
		j: [
			"animal",
			"nature",
			"sea",
			"ocean"
		],
		k: [
			11,
			39
		],
		o: 2
	},
	"flag-fo": {
		a: "Faroe Islands Flag",
		b: "1F1EB-1F1F4",
		k: [
			1,
			52
		],
		o: 2
	},
	shaved_ice: {
		a: "Shaved Ice",
		b: "1F367",
		j: [
			"hot",
			"dessert",
			"summer"
		],
		k: [
			7,
			6
		],
		o: 2
	},
	double_vertical_bar: {
		a: "Double Vertical Bar",
		b: "23F8-FE0F",
		c: "23F8",
		k: [
			52,
			37
		],
		o: 2
	},
	information_desk_person: {
		skin_variations: {
			"1F3FB": {
				unified: "1F481-1F3FB",
				non_qualified: null,
				image: "1f481-1f3fb.png",
				sheet_x: 24,
				sheet_y: 3,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F481-1F3FC",
				non_qualified: null,
				image: "1f481-1f3fc.png",
				sheet_x: 24,
				sheet_y: 4,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F481-1F3FD",
				non_qualified: null,
				image: "1f481-1f3fd.png",
				sheet_x: 24,
				sheet_y: 5,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F481-1F3FE",
				non_qualified: null,
				image: "1f481-1f3fe.png",
				sheet_x: 24,
				sheet_y: 6,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F481-1F3FF",
				non_qualified: null,
				image: "1f481-1f3ff.png",
				sheet_x: 24,
				sheet_y: 7,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F481-200D-2640-FE0F",
		a: "Information Desk Person",
		b: "1F481",
		k: [
			24,
			2
		],
		o: 2
	},
	dolphin: {
		a: "Dolphin",
		b: "1F42C",
		j: [
			"animal",
			"nature",
			"fish",
			"sea",
			"ocean",
			"flipper",
			"fins",
			"beach"
		],
		k: [
			12,
			16
		],
		n: [
			"flipper"
		],
		o: 2
	},
	blue_car: {
		a: "Recreational Vehicle",
		b: "1F699",
		j: [
			"transportation",
			"vehicle"
		],
		k: [
			34,
			24
		],
		o: 2
	},
	ice_cream: {
		a: "Ice Cream",
		b: "1F368",
		j: [
			"food",
			"hot",
			"dessert"
		],
		k: [
			7,
			7
		],
		o: 2
	},
	fr: {
		a: "France Flag",
		b: "1F1EB-1F1F7",
		j: [
			"banner",
			"flag",
			"nation",
			"france",
			"french",
			"country"
		],
		k: [
			1,
			53
		],
		n: [
			"flag-fr"
		],
		o: 2
	},
	triumph: {
		a: "Face with Look of Triumph",
		b: "1F624",
		j: [
			"face",
			"gas",
			"phew",
			"proud",
			"pride"
		],
		k: [
			31,
			14
		],
		o: 2
	},
	abacus: {
		a: "Abacus",
		b: "1F9EE",
		k: [
			51,
			33
		],
		o: 11
	},
	"man-tipping-hand": {
		skin_variations: {
			"1F3FB": {
				unified: "1F481-1F3FB-200D-2642-FE0F",
				non_qualified: "1F481-1F3FB-200D-2642",
				image: "1f481-1f3fb-200d-2642-fe0f.png",
				sheet_x: 23,
				sheet_y: 54,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F481-1F3FC-200D-2642-FE0F",
				non_qualified: "1F481-1F3FC-200D-2642",
				image: "1f481-1f3fc-200d-2642-fe0f.png",
				sheet_x: 23,
				sheet_y: 55,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F481-1F3FD-200D-2642-FE0F",
				non_qualified: "1F481-1F3FD-200D-2642",
				image: "1f481-1f3fd-200d-2642-fe0f.png",
				sheet_x: 23,
				sheet_y: 56,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F481-1F3FE-200D-2642-FE0F",
				non_qualified: "1F481-1F3FE-200D-2642",
				image: "1f481-1f3fe-200d-2642-fe0f.png",
				sheet_x: 24,
				sheet_y: 0,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F481-1F3FF-200D-2642-FE0F",
				non_qualified: "1F481-1F3FF-200D-2642",
				image: "1f481-1f3ff-200d-2642-fe0f.png",
				sheet_x: 24,
				sheet_y: 1,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Tipping Hand",
		b: "1F481-200D-2642-FE0F",
		c: "1F481-200D-2642",
		k: [
			23,
			53
		],
		o: 4
	},
	doughnut: {
		a: "Doughnut",
		b: "1F369",
		j: [
			"food",
			"dessert",
			"snack",
			"sweet",
			"donut"
		],
		k: [
			7,
			8
		],
		o: 2
	},
	fish: {
		a: "Fish",
		b: "1F41F",
		j: [
			"animal",
			"food",
			"nature"
		],
		k: [
			12,
			3
		],
		o: 2
	},
	truck: {
		a: "Delivery Truck",
		b: "1F69A",
		j: [
			"cars",
			"transportation"
		],
		k: [
			34,
			25
		],
		o: 2
	},
	movie_camera: {
		a: "Movie Camera",
		b: "1F3A5",
		j: [
			"film",
			"record"
		],
		k: [
			8,
			11
		],
		o: 2
	},
	"flag-ga": {
		a: "Gabon Flag",
		b: "1F1EC-1F1E6",
		k: [
			1,
			54
		],
		o: 2
	},
	rage: {
		a: "Pouting Face",
		b: "1F621",
		j: [
			"angry",
			"mad",
			"hate",
			"despise"
		],
		k: [
			31,
			11
		],
		o: 2
	},
	black_square_for_stop: {
		a: "Black Square for Stop",
		b: "23F9-FE0F",
		c: "23F9",
		k: [
			52,
			38
		],
		o: 2
	},
	articulated_lorry: {
		a: "Articulated Lorry",
		b: "1F69B",
		j: [
			"vehicle",
			"cars",
			"transportation",
			"express"
		],
		k: [
			34,
			26
		],
		o: 2
	},
	angry: {
		a: "Angry Face",
		b: "1F620",
		j: [
			"mad",
			"face",
			"annoyed",
			"frustrated"
		],
		k: [
			31,
			10
		],
		l: [
			">:(",
			">:-("
		],
		o: 2
	},
	cookie: {
		a: "Cookie",
		b: "1F36A",
		j: [
			"food",
			"snack",
			"oreo",
			"chocolate",
			"sweet",
			"dessert"
		],
		k: [
			7,
			9
		],
		o: 2
	},
	gb: {
		a: "United Kingdom Flag",
		b: "1F1EC-1F1E7",
		k: [
			1,
			55
		],
		n: [
			"uk",
			"flag-gb"
		],
		o: 2
	},
	tropical_fish: {
		a: "Tropical Fish",
		b: "1F420",
		j: [
			"animal",
			"swim",
			"ocean",
			"beach",
			"nemo"
		],
		k: [
			12,
			4
		],
		o: 2
	},
	"woman-tipping-hand": {
		skin_variations: {
			"1F3FB": {
				unified: "1F481-1F3FB-200D-2640-FE0F",
				non_qualified: "1F481-1F3FB-200D-2640",
				image: "1f481-1f3fb-200d-2640-fe0f.png",
				sheet_x: 23,
				sheet_y: 48,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F481-1F3FC-200D-2640-FE0F",
				non_qualified: "1F481-1F3FC-200D-2640",
				image: "1f481-1f3fc-200d-2640-fe0f.png",
				sheet_x: 23,
				sheet_y: 49,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F481-1F3FD-200D-2640-FE0F",
				non_qualified: "1F481-1F3FD-200D-2640",
				image: "1f481-1f3fd-200d-2640-fe0f.png",
				sheet_x: 23,
				sheet_y: 50,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F481-1F3FE-200D-2640-FE0F",
				non_qualified: "1F481-1F3FE-200D-2640",
				image: "1f481-1f3fe-200d-2640-fe0f.png",
				sheet_x: 23,
				sheet_y: 51,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F481-1F3FF-200D-2640-FE0F",
				non_qualified: "1F481-1F3FF-200D-2640",
				image: "1f481-1f3ff-200d-2640-fe0f.png",
				sheet_x: 23,
				sheet_y: 52,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F481",
		a: "Woman Tipping Hand",
		b: "1F481-200D-2640-FE0F",
		c: "1F481-200D-2640",
		k: [
			23,
			47
		],
		o: 4
	},
	black_circle_for_record: {
		a: "Black Circle for Record",
		b: "23FA-FE0F",
		c: "23FA",
		k: [
			52,
			39
		],
		o: 2
	},
	film_frames: {
		a: "Film Frames",
		b: "1F39E-FE0F",
		c: "1F39E",
		k: [
			8,
			4
		],
		o: 2
	},
	film_projector: {
		a: "Film Projector",
		b: "1F4FD-FE0F",
		c: "1F4FD",
		j: [
			"video",
			"tape",
			"record",
			"movie"
		],
		k: [
			27,
			26
		],
		o: 2
	},
	"flag-gd": {
		a: "Grenada Flag",
		b: "1F1EC-1F1E9",
		k: [
			1,
			56
		],
		o: 2
	},
	blowfish: {
		a: "Blowfish",
		b: "1F421",
		j: [
			"animal",
			"nature",
			"food",
			"sea",
			"ocean"
		],
		k: [
			12,
			5
		],
		o: 2
	},
	face_with_symbols_on_mouth: {
		a: "Serious Face with Symbols Covering Mouth",
		b: "1F92C",
		k: [
			38,
			46
		],
		n: [
			"serious_face_with_symbols_covering_mouth"
		],
		o: 5
	},
	birthday: {
		a: "Birthday Cake",
		b: "1F382",
		j: [
			"food",
			"dessert",
			"cake"
		],
		k: [
			7,
			33
		],
		o: 2
	},
	eject: {
		a: "Eject",
		b: "23CF-FE0F",
		c: "23CF",
		k: [
			52,
			25
		],
		o: 2
	},
	raising_hand: {
		skin_variations: {
			"1F3FB": {
				unified: "1F64B-1F3FB",
				non_qualified: null,
				image: "1f64b-1f3fb.png",
				sheet_x: 33,
				sheet_y: 3,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F64B-1F3FC",
				non_qualified: null,
				image: "1f64b-1f3fc.png",
				sheet_x: 33,
				sheet_y: 4,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F64B-1F3FD",
				non_qualified: null,
				image: "1f64b-1f3fd.png",
				sheet_x: 33,
				sheet_y: 5,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F64B-1F3FE",
				non_qualified: null,
				image: "1f64b-1f3fe.png",
				sheet_x: 33,
				sheet_y: 6,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F64B-1F3FF",
				non_qualified: null,
				image: "1f64b-1f3ff.png",
				sheet_x: 33,
				sheet_y: 7,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F64B-200D-2640-FE0F",
		a: "Happy Person Raising One Hand",
		b: "1F64B",
		k: [
			33,
			2
		],
		o: 2
	},
	tractor: {
		a: "Tractor",
		b: "1F69C",
		j: [
			"vehicle",
			"car",
			"farming",
			"agriculture"
		],
		k: [
			34,
			27
		],
		o: 2
	},
	"flag-ge": {
		a: "Georgia Flag",
		b: "1F1EC-1F1EA",
		k: [
			2,
			0
		],
		o: 2
	},
	smiling_imp: {
		a: "Smiling Face with Horns",
		b: "1F608",
		j: [
			"devil",
			"horns"
		],
		k: [
			30,
			43
		],
		o: 2
	},
	racing_car: {
		a: "Racing Car",
		b: "1F3CE-FE0F",
		c: "1F3CE",
		j: [
			"sports",
			"race",
			"fast",
			"formula",
			"f1"
		],
		k: [
			10,
			33
		],
		o: 2
	},
	cinema: {
		a: "Cinema",
		b: "1F3A6",
		j: [
			"blue-square",
			"record",
			"film",
			"movie",
			"curtain",
			"stage",
			"theater"
		],
		k: [
			8,
			12
		],
		o: 2
	},
	clapper: {
		a: "Clapper Board",
		b: "1F3AC",
		j: [
			"movie",
			"film",
			"record"
		],
		k: [
			8,
			18
		],
		o: 2
	},
	shark: {
		a: "Shark",
		b: "1F988",
		j: [
			"animal",
			"nature",
			"fish",
			"sea",
			"ocean",
			"jaws",
			"fins",
			"beach"
		],
		k: [
			42,
			26
		],
		o: 4
	},
	cake: {
		a: "Shortcake",
		b: "1F370",
		j: [
			"food",
			"dessert"
		],
		k: [
			7,
			15
		],
		o: 2
	},
	"man-raising-hand": {
		skin_variations: {
			"1F3FB": {
				unified: "1F64B-1F3FB-200D-2642-FE0F",
				non_qualified: "1F64B-1F3FB-200D-2642",
				image: "1f64b-1f3fb-200d-2642-fe0f.png",
				sheet_x: 32,
				sheet_y: 54,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F64B-1F3FC-200D-2642-FE0F",
				non_qualified: "1F64B-1F3FC-200D-2642",
				image: "1f64b-1f3fc-200d-2642-fe0f.png",
				sheet_x: 32,
				sheet_y: 55,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F64B-1F3FD-200D-2642-FE0F",
				non_qualified: "1F64B-1F3FD-200D-2642",
				image: "1f64b-1f3fd-200d-2642-fe0f.png",
				sheet_x: 32,
				sheet_y: 56,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F64B-1F3FE-200D-2642-FE0F",
				non_qualified: "1F64B-1F3FE-200D-2642",
				image: "1f64b-1f3fe-200d-2642-fe0f.png",
				sheet_x: 33,
				sheet_y: 0,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F64B-1F3FF-200D-2642-FE0F",
				non_qualified: "1F64B-1F3FF-200D-2642",
				image: "1f64b-1f3ff-200d-2642-fe0f.png",
				sheet_x: 33,
				sheet_y: 1,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Raising Hand",
		b: "1F64B-200D-2642-FE0F",
		c: "1F64B-200D-2642",
		k: [
			32,
			53
		],
		o: 4
	},
	octopus: {
		a: "Octopus",
		b: "1F419",
		j: [
			"animal",
			"creature",
			"ocean",
			"sea",
			"nature",
			"beach"
		],
		k: [
			11,
			54
		],
		o: 2
	},
	"woman-raising-hand": {
		skin_variations: {
			"1F3FB": {
				unified: "1F64B-1F3FB-200D-2640-FE0F",
				non_qualified: "1F64B-1F3FB-200D-2640",
				image: "1f64b-1f3fb-200d-2640-fe0f.png",
				sheet_x: 32,
				sheet_y: 48,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F64B-1F3FC-200D-2640-FE0F",
				non_qualified: "1F64B-1F3FC-200D-2640",
				image: "1f64b-1f3fc-200d-2640-fe0f.png",
				sheet_x: 32,
				sheet_y: 49,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F64B-1F3FD-200D-2640-FE0F",
				non_qualified: "1F64B-1F3FD-200D-2640",
				image: "1f64b-1f3fd-200d-2640-fe0f.png",
				sheet_x: 32,
				sheet_y: 50,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F64B-1F3FE-200D-2640-FE0F",
				non_qualified: "1F64B-1F3FE-200D-2640",
				image: "1f64b-1f3fe-200d-2640-fe0f.png",
				sheet_x: 32,
				sheet_y: 51,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F64B-1F3FF-200D-2640-FE0F",
				non_qualified: "1F64B-1F3FF-200D-2640",
				image: "1f64b-1f3ff-200d-2640-fe0f.png",
				sheet_x: 32,
				sheet_y: 52,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F64B",
		a: "Woman Raising Hand",
		b: "1F64B-200D-2640-FE0F",
		c: "1F64B-200D-2640",
		k: [
			32,
			47
		],
		o: 4
	},
	"flag-gf": {
		a: "French Guiana Flag",
		b: "1F1EC-1F1EB",
		k: [
			2,
			1
		],
		o: 2
	},
	tv: {
		a: "Television",
		b: "1F4FA",
		j: [
			"technology",
			"program",
			"oldschool",
			"show",
			"television"
		],
		k: [
			27,
			23
		],
		o: 2
	},
	imp: {
		a: "Imp",
		b: "1F47F",
		j: [
			"devil",
			"angry",
			"horns"
		],
		k: [
			23,
			45
		],
		o: 2
	},
	cupcake: {
		a: "Cupcake",
		b: "1F9C1",
		k: [
			44,
			9
		],
		o: 11
	},
	racing_motorcycle: {
		a: "Racing Motorcycle",
		b: "1F3CD-FE0F",
		c: "1F3CD",
		k: [
			10,
			32
		],
		o: 2
	},
	low_brightness: {
		a: "Low Brightness Symbol",
		b: "1F505",
		j: [
			"sun",
			"afternoon",
			"warm",
			"summer"
		],
		k: [
			27,
			33
		],
		o: 2
	},
	shell: {
		a: "Spiral Shell",
		b: "1F41A",
		j: [
			"nature",
			"sea",
			"beach"
		],
		k: [
			11,
			55
		],
		o: 2
	},
	"flag-gg": {
		a: "Guernsey Flag",
		b: "1F1EC-1F1EC",
		k: [
			2,
			2
		],
		o: 2
	},
	high_brightness: {
		a: "High Brightness Symbol",
		b: "1F506",
		j: [
			"sun",
			"light"
		],
		k: [
			27,
			34
		],
		o: 2
	},
	deaf_person: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9CF-1F3FB",
				non_qualified: null,
				image: "1f9cf-1f3fb.png",
				sheet_x: 45,
				sheet_y: 11,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9CF-1F3FC",
				non_qualified: null,
				image: "1f9cf-1f3fc.png",
				sheet_x: 45,
				sheet_y: 12,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9CF-1F3FD",
				non_qualified: null,
				image: "1f9cf-1f3fd.png",
				sheet_x: 45,
				sheet_y: 13,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9CF-1F3FE",
				non_qualified: null,
				image: "1f9cf-1f3fe.png",
				sheet_x: 45,
				sheet_y: 14,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9CF-1F3FF",
				non_qualified: null,
				image: "1f9cf-1f3ff.png",
				sheet_x: 45,
				sheet_y: 15,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Deaf Person",
		b: "1F9CF",
		k: [
			45,
			10
		],
		o: 12
	},
	skull: {
		a: "Skull",
		b: "1F480",
		j: [
			"dead",
			"skeleton",
			"creepy",
			"death"
		],
		k: [
			23,
			46
		],
		o: 2
	},
	motor_scooter: {
		a: "Motor Scooter",
		b: "1F6F5",
		j: [
			"vehicle",
			"vespa",
			"sasha"
		],
		k: [
			36,
			54
		],
		o: 4
	},
	camera: {
		a: "Camera",
		b: "1F4F7",
		j: [
			"gadgets",
			"photography"
		],
		k: [
			27,
			20
		],
		o: 2
	},
	pie: {
		a: "Pie",
		b: "1F967",
		k: [
			41,
			54
		],
		o: 5
	},
	"flag-gh": {
		a: "Ghana Flag",
		b: "1F1EC-1F1ED",
		k: [
			2,
			3
		],
		o: 2
	},
	deaf_man: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9CF-1F3FB-200D-2642-FE0F",
				non_qualified: "1F9CF-1F3FB-200D-2642",
				image: "1f9cf-1f3fb-200d-2642-fe0f.png",
				sheet_x: 45,
				sheet_y: 5,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9CF-1F3FC-200D-2642-FE0F",
				non_qualified: "1F9CF-1F3FC-200D-2642",
				image: "1f9cf-1f3fc-200d-2642-fe0f.png",
				sheet_x: 45,
				sheet_y: 6,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9CF-1F3FD-200D-2642-FE0F",
				non_qualified: "1F9CF-1F3FD-200D-2642",
				image: "1f9cf-1f3fd-200d-2642-fe0f.png",
				sheet_x: 45,
				sheet_y: 7,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9CF-1F3FE-200D-2642-FE0F",
				non_qualified: "1F9CF-1F3FE-200D-2642",
				image: "1f9cf-1f3fe-200d-2642-fe0f.png",
				sheet_x: 45,
				sheet_y: 8,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9CF-1F3FF-200D-2642-FE0F",
				non_qualified: "1F9CF-1F3FF-200D-2642",
				image: "1f9cf-1f3ff-200d-2642-fe0f.png",
				sheet_x: 45,
				sheet_y: 9,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Deaf Man",
		b: "1F9CF-200D-2642-FE0F",
		c: "1F9CF-200D-2642",
		k: [
			45,
			4
		],
		o: 12
	},
	skull_and_crossbones: {
		a: "Skull and Crossbones",
		b: "2620-FE0F",
		c: "2620",
		j: [
			"poison",
			"danger",
			"deadly",
			"scary",
			"death",
			"pirate",
			"evil"
		],
		k: [
			53,
			8
		],
		o: 2
	},
	camera_with_flash: {
		a: "Camera with Flash",
		b: "1F4F8",
		k: [
			27,
			21
		],
		o: 2
	},
	signal_strength: {
		a: "Antenna with Bars",
		b: "1F4F6",
		j: [
			"blue-square",
			"reception",
			"phone",
			"internet",
			"connection",
			"wifi",
			"bluetooth",
			"bars"
		],
		k: [
			27,
			19
		],
		o: 2
	},
	chocolate_bar: {
		a: "Chocolate Bar",
		b: "1F36B",
		j: [
			"food",
			"snack",
			"dessert",
			"sweet"
		],
		k: [
			7,
			10
		],
		o: 2
	},
	manual_wheelchair: {
		a: "Manual Wheelchair",
		b: "1F9BD",
		k: [
			44,
			5
		],
		o: 12
	},
	snail: {
		a: "Snail",
		b: "1F40C",
		j: [
			"slow",
			"animal",
			"shell"
		],
		k: [
			11,
			40
		],
		o: 2
	},
	motorized_wheelchair: {
		a: "Motorized Wheelchair",
		b: "1F9BC",
		k: [
			44,
			4
		],
		o: 12
	},
	"flag-gi": {
		a: "Gibraltar Flag",
		b: "1F1EC-1F1EE",
		k: [
			2,
			4
		],
		o: 2
	},
	hankey: {
		a: "Pile of Poo",
		b: "1F4A9",
		k: [
			25,
			51
		],
		n: [
			"poop",
			"shit"
		],
		o: 2
	},
	vibration_mode: {
		a: "Vibration Mode",
		b: "1F4F3",
		j: [
			"orange-square",
			"phone"
		],
		k: [
			27,
			16
		],
		o: 2
	},
	deaf_woman: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9CF-1F3FB-200D-2640-FE0F",
				non_qualified: "1F9CF-1F3FB-200D-2640",
				image: "1f9cf-1f3fb-200d-2640-fe0f.png",
				sheet_x: 44,
				sheet_y: 56,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9CF-1F3FC-200D-2640-FE0F",
				non_qualified: "1F9CF-1F3FC-200D-2640",
				image: "1f9cf-1f3fc-200d-2640-fe0f.png",
				sheet_x: 45,
				sheet_y: 0,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9CF-1F3FD-200D-2640-FE0F",
				non_qualified: "1F9CF-1F3FD-200D-2640",
				image: "1f9cf-1f3fd-200d-2640-fe0f.png",
				sheet_x: 45,
				sheet_y: 1,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9CF-1F3FE-200D-2640-FE0F",
				non_qualified: "1F9CF-1F3FE-200D-2640",
				image: "1f9cf-1f3fe-200d-2640-fe0f.png",
				sheet_x: 45,
				sheet_y: 2,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9CF-1F3FF-200D-2640-FE0F",
				non_qualified: "1F9CF-1F3FF-200D-2640",
				image: "1f9cf-1f3ff-200d-2640-fe0f.png",
				sheet_x: 45,
				sheet_y: 3,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Deaf Woman",
		b: "1F9CF-200D-2640-FE0F",
		c: "1F9CF-200D-2640",
		k: [
			44,
			55
		],
		o: 12
	},
	butterfly: {
		a: "Butterfly",
		b: "1F98B",
		j: [
			"animal",
			"insect",
			"nature",
			"caterpillar"
		],
		k: [
			42,
			29
		],
		o: 4
	},
	video_camera: {
		a: "Video Camera",
		b: "1F4F9",
		j: [
			"film",
			"record"
		],
		k: [
			27,
			22
		],
		o: 2
	},
	candy: {
		a: "Candy",
		b: "1F36C",
		j: [
			"snack",
			"dessert",
			"sweet",
			"lolly"
		],
		k: [
			7,
			11
		],
		o: 2
	},
	auto_rickshaw: {
		a: "Auto Rickshaw",
		b: "1F6FA",
		k: [
			37,
			2
		],
		o: 12
	},
	bow: {
		skin_variations: {
			"1F3FB": {
				unified: "1F647-1F3FB",
				non_qualified: null,
				image: "1f647-1f3fb.png",
				sheet_x: 32,
				sheet_y: 39,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F647-1F3FC",
				non_qualified: null,
				image: "1f647-1f3fc.png",
				sheet_x: 32,
				sheet_y: 40,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F647-1F3FD",
				non_qualified: null,
				image: "1f647-1f3fd.png",
				sheet_x: 32,
				sheet_y: 41,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F647-1F3FE",
				non_qualified: null,
				image: "1f647-1f3fe.png",
				sheet_x: 32,
				sheet_y: 42,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F647-1F3FF",
				non_qualified: null,
				image: "1f647-1f3ff.png",
				sheet_x: 32,
				sheet_y: 43,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F647-200D-2642-FE0F",
		a: "Person Bowing Deeply",
		b: "1F647",
		k: [
			32,
			38
		],
		o: 2
	},
	mobile_phone_off: {
		a: "Mobile Phone off",
		b: "1F4F4",
		j: [
			"mute",
			"orange-square",
			"silence",
			"quiet"
		],
		k: [
			27,
			17
		],
		o: 2
	},
	clown_face: {
		a: "Clown Face",
		b: "1F921",
		j: [
			"face"
		],
		k: [
			38,
			18
		],
		o: 4
	},
	lollipop: {
		a: "Lollipop",
		b: "1F36D",
		j: [
			"food",
			"snack",
			"candy",
			"sweet"
		],
		k: [
			7,
			12
		],
		o: 2
	},
	"flag-gl": {
		a: "Greenland Flag",
		b: "1F1EC-1F1F1",
		k: [
			2,
			5
		],
		o: 2
	},
	vhs: {
		a: "Videocassette",
		b: "1F4FC",
		j: [
			"record",
			"video",
			"oldschool",
			"90s",
			"80s"
		],
		k: [
			27,
			25
		],
		o: 2
	},
	bug: {
		a: "Bug",
		b: "1F41B",
		j: [
			"animal",
			"insect",
			"nature",
			"worm"
		],
		k: [
			11,
			56
		],
		o: 2
	},
	bike: {
		a: "Bicycle",
		b: "1F6B2",
		j: [
			"sports",
			"bicycle",
			"exercise",
			"hipster"
		],
		k: [
			35,
			9
		],
		o: 2
	},
	"man-bowing": {
		skin_variations: {
			"1F3FB": {
				unified: "1F647-1F3FB-200D-2642-FE0F",
				non_qualified: "1F647-1F3FB-200D-2642",
				image: "1f647-1f3fb-200d-2642-fe0f.png",
				sheet_x: 32,
				sheet_y: 33,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F647-1F3FC-200D-2642-FE0F",
				non_qualified: "1F647-1F3FC-200D-2642",
				image: "1f647-1f3fc-200d-2642-fe0f.png",
				sheet_x: 32,
				sheet_y: 34,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F647-1F3FD-200D-2642-FE0F",
				non_qualified: "1F647-1F3FD-200D-2642",
				image: "1f647-1f3fd-200d-2642-fe0f.png",
				sheet_x: 32,
				sheet_y: 35,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F647-1F3FE-200D-2642-FE0F",
				non_qualified: "1F647-1F3FE-200D-2642",
				image: "1f647-1f3fe-200d-2642-fe0f.png",
				sheet_x: 32,
				sheet_y: 36,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F647-1F3FF-200D-2642-FE0F",
				non_qualified: "1F647-1F3FF-200D-2642",
				image: "1f647-1f3ff-200d-2642-fe0f.png",
				sheet_x: 32,
				sheet_y: 37,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F647",
		a: "Man Bowing",
		b: "1F647-200D-2642-FE0F",
		c: "1F647-200D-2642",
		k: [
			32,
			32
		],
		o: 4
	},
	female_sign: {
		a: "Female Sign",
		b: "2640-FE0F",
		c: "2640",
		k: [
			53,
			18
		],
		o: 4
	},
	japanese_ogre: {
		a: "Japanese Ogre",
		b: "1F479",
		j: [
			"monster",
			"red",
			"mask",
			"halloween",
			"scary",
			"creepy",
			"devil",
			"demon",
			"japanese",
			"ogre"
		],
		k: [
			23,
			34
		],
		o: 2
	},
	custard: {
		a: "Custard",
		b: "1F36E",
		j: [
			"dessert",
			"food"
		],
		k: [
			7,
			13
		],
		o: 2
	},
	ant: {
		a: "Ant",
		b: "1F41C",
		j: [
			"animal",
			"insect",
			"nature",
			"bug"
		],
		k: [
			12,
			0
		],
		o: 2
	},
	mag: {
		a: "Left-Pointing Magnifying Glass",
		b: "1F50D",
		j: [
			"search",
			"zoom",
			"find",
			"detective"
		],
		k: [
			27,
			41
		],
		o: 2
	},
	"flag-gm": {
		a: "Gambia Flag",
		b: "1F1EC-1F1F2",
		k: [
			2,
			6
		],
		o: 2
	},
	honey_pot: {
		a: "Honey Pot",
		b: "1F36F",
		j: [
			"bees",
			"sweet",
			"kitchen"
		],
		k: [
			7,
			14
		],
		o: 2
	},
	"woman-bowing": {
		skin_variations: {
			"1F3FB": {
				unified: "1F647-1F3FB-200D-2640-FE0F",
				non_qualified: "1F647-1F3FB-200D-2640",
				image: "1f647-1f3fb-200d-2640-fe0f.png",
				sheet_x: 32,
				sheet_y: 27,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F647-1F3FC-200D-2640-FE0F",
				non_qualified: "1F647-1F3FC-200D-2640",
				image: "1f647-1f3fc-200d-2640-fe0f.png",
				sheet_x: 32,
				sheet_y: 28,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F647-1F3FD-200D-2640-FE0F",
				non_qualified: "1F647-1F3FD-200D-2640",
				image: "1f647-1f3fd-200d-2640-fe0f.png",
				sheet_x: 32,
				sheet_y: 29,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F647-1F3FE-200D-2640-FE0F",
				non_qualified: "1F647-1F3FE-200D-2640",
				image: "1f647-1f3fe-200d-2640-fe0f.png",
				sheet_x: 32,
				sheet_y: 30,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F647-1F3FF-200D-2640-FE0F",
				non_qualified: "1F647-1F3FF-200D-2640",
				image: "1f647-1f3ff-200d-2640-fe0f.png",
				sheet_x: 32,
				sheet_y: 31,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Bowing",
		b: "1F647-200D-2640-FE0F",
		c: "1F647-200D-2640",
		k: [
			32,
			26
		],
		o: 4
	},
	male_sign: {
		a: "Male Sign",
		b: "2642-FE0F",
		c: "2642",
		k: [
			53,
			19
		],
		o: 4
	},
	mag_right: {
		a: "Right-Pointing Magnifying Glass",
		b: "1F50E",
		j: [
			"search",
			"zoom",
			"find",
			"detective"
		],
		k: [
			27,
			42
		],
		o: 2
	},
	japanese_goblin: {
		a: "Japanese Goblin",
		b: "1F47A",
		j: [
			"red",
			"evil",
			"mask",
			"monster",
			"scary",
			"creepy",
			"japanese",
			"goblin"
		],
		k: [
			23,
			35
		],
		o: 2
	},
	scooter: {
		a: "Scooter",
		b: "1F6F4",
		k: [
			36,
			53
		],
		o: 4
	},
	bee: {
		a: "Honeybee",
		b: "1F41D",
		k: [
			12,
			1
		],
		n: [
			"honeybee"
		],
		o: 2
	},
	"flag-gn": {
		a: "Guinea Flag",
		b: "1F1EC-1F1F3",
		k: [
			2,
			7
		],
		o: 2
	},
	candle: {
		a: "Candle",
		b: "1F56F-FE0F",
		c: "1F56F",
		j: [
			"fire",
			"wax"
		],
		k: [
			29,
			6
		],
		o: 2
	},
	skateboard: {
		a: "Skateboard",
		b: "1F6F9",
		k: [
			37,
			1
		],
		o: 11
	},
	medical_symbol: {
		a: "Medical Symbol",
		b: "2695-FE0F",
		c: "2695",
		k: [
			53,
			44
		],
		n: [
			"staff_of_aesculapius"
		],
		o: 4
	},
	ghost: {
		a: "Ghost",
		b: "1F47B",
		j: [
			"halloween",
			"spooky",
			"scary"
		],
		k: [
			23,
			36
		],
		o: 2
	},
	beetle: {
		a: "Lady Beetle",
		b: "1F41E",
		j: [
			"animal",
			"insect",
			"nature",
			"ladybug"
		],
		k: [
			12,
			2
		],
		o: 2
	},
	face_palm: {
		skin_variations: {
			"1F3FB": {
				unified: "1F926-1F3FB",
				non_qualified: null,
				image: "1f926-1f3fb.png",
				sheet_x: 38,
				sheet_y: 36,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F926-1F3FC",
				non_qualified: null,
				image: "1f926-1f3fc.png",
				sheet_x: 38,
				sheet_y: 37,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F926-1F3FD",
				non_qualified: null,
				image: "1f926-1f3fd.png",
				sheet_x: 38,
				sheet_y: 38,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F926-1F3FE",
				non_qualified: null,
				image: "1f926-1f3fe.png",
				sheet_x: 38,
				sheet_y: 39,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F926-1F3FF",
				non_qualified: null,
				image: "1f926-1f3ff.png",
				sheet_x: 38,
				sheet_y: 40,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		a: "Face Palm",
		b: "1F926",
		k: [
			38,
			35
		],
		o: 4
	},
	"flag-gp": {
		a: "Guadeloupe Flag",
		b: "1F1EC-1F1F5",
		k: [
			2,
			8
		],
		o: 2
	},
	baby_bottle: {
		a: "Baby Bottle",
		b: "1F37C",
		j: [
			"food",
			"container",
			"milk"
		],
		k: [
			7,
			27
		],
		o: 2
	},
	infinity: {
		a: "Infinity",
		b: "267E-FE0F",
		c: "267E",
		k: [
			53,
			39
		],
		o: 11
	},
	glass_of_milk: {
		a: "Glass of Milk",
		b: "1F95B",
		k: [
			41,
			42
		],
		o: 4
	},
	"man-facepalming": {
		skin_variations: {
			"1F3FB": {
				unified: "1F926-1F3FB-200D-2642-FE0F",
				non_qualified: "1F926-1F3FB-200D-2642",
				image: "1f926-1f3fb-200d-2642-fe0f.png",
				sheet_x: 38,
				sheet_y: 30,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F926-1F3FC-200D-2642-FE0F",
				non_qualified: "1F926-1F3FC-200D-2642",
				image: "1f926-1f3fc-200d-2642-fe0f.png",
				sheet_x: 38,
				sheet_y: 31,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F926-1F3FD-200D-2642-FE0F",
				non_qualified: "1F926-1F3FD-200D-2642",
				image: "1f926-1f3fd-200d-2642-fe0f.png",
				sheet_x: 38,
				sheet_y: 32,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F926-1F3FE-200D-2642-FE0F",
				non_qualified: "1F926-1F3FE-200D-2642",
				image: "1f926-1f3fe-200d-2642-fe0f.png",
				sheet_x: 38,
				sheet_y: 33,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F926-1F3FF-200D-2642-FE0F",
				non_qualified: "1F926-1F3FF-200D-2642",
				image: "1f926-1f3ff-200d-2642-fe0f.png",
				sheet_x: 38,
				sheet_y: 34,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Facepalming",
		b: "1F926-200D-2642-FE0F",
		c: "1F926-200D-2642",
		k: [
			38,
			29
		],
		o: 4
	},
	cricket: {
		a: "Cricket",
		b: "1F997",
		j: [
			"sports"
		],
		k: [
			42,
			41
		],
		o: 5
	},
	busstop: {
		a: "Bus Stop",
		b: "1F68F",
		j: [
			"transportation",
			"wait"
		],
		k: [
			34,
			14
		],
		o: 2
	},
	"flag-gq": {
		a: "Equatorial Guinea Flag",
		b: "1F1EC-1F1F6",
		k: [
			2,
			9
		],
		o: 2
	},
	alien: {
		a: "Extraterrestrial Alien",
		b: "1F47D",
		j: [
			"UFO",
			"paul",
			"weird",
			"outer_space"
		],
		k: [
			23,
			43
		],
		o: 2
	},
	bulb: {
		a: "Electric Light Bulb",
		b: "1F4A1",
		j: [
			"light",
			"electricity",
			"idea"
		],
		k: [
			25,
			43
		],
		o: 2
	},
	"woman-facepalming": {
		skin_variations: {
			"1F3FB": {
				unified: "1F926-1F3FB-200D-2640-FE0F",
				non_qualified: "1F926-1F3FB-200D-2640",
				image: "1f926-1f3fb-200d-2640-fe0f.png",
				sheet_x: 38,
				sheet_y: 24,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F926-1F3FC-200D-2640-FE0F",
				non_qualified: "1F926-1F3FC-200D-2640",
				image: "1f926-1f3fc-200d-2640-fe0f.png",
				sheet_x: 38,
				sheet_y: 25,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F926-1F3FD-200D-2640-FE0F",
				non_qualified: "1F926-1F3FD-200D-2640",
				image: "1f926-1f3fd-200d-2640-fe0f.png",
				sheet_x: 38,
				sheet_y: 26,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F926-1F3FE-200D-2640-FE0F",
				non_qualified: "1F926-1F3FE-200D-2640",
				image: "1f926-1f3fe-200d-2640-fe0f.png",
				sheet_x: 38,
				sheet_y: 27,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F926-1F3FF-200D-2640-FE0F",
				non_qualified: "1F926-1F3FF-200D-2640",
				image: "1f926-1f3ff-200d-2640-fe0f.png",
				sheet_x: 38,
				sheet_y: 28,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Facepalming",
		b: "1F926-200D-2640-FE0F",
		c: "1F926-200D-2640",
		k: [
			38,
			23
		],
		o: 4
	},
	spider: {
		a: "Spider",
		b: "1F577-FE0F",
		c: "1F577",
		j: [
			"animal",
			"arachnid"
		],
		k: [
			29,
			34
		],
		o: 2
	},
	space_invader: {
		a: "Alien Monster",
		b: "1F47E",
		j: [
			"game",
			"arcade",
			"play"
		],
		k: [
			23,
			44
		],
		o: 2
	},
	motorway: {
		a: "Motorway",
		b: "1F6E3-FE0F",
		c: "1F6E3",
		j: [
			"road",
			"cupertino",
			"interstate",
			"highway"
		],
		k: [
			36,
			45
		],
		o: 2
	},
	"flag-gr": {
		a: "Greece Flag",
		b: "1F1EC-1F1F7",
		k: [
			2,
			10
		],
		o: 2
	},
	recycle: {
		a: "Black Universal Recycling Symbol",
		b: "267B-FE0F",
		c: "267B",
		j: [
			"arrow",
			"environment",
			"garbage",
			"trash"
		],
		k: [
			53,
			38
		],
		o: 2
	},
	coffee: {
		a: "Hot Beverage",
		b: "2615",
		j: [
			"beverage",
			"caffeine",
			"latte",
			"espresso"
		],
		k: [
			53,
			0
		],
		o: 2
	},
	flashlight: {
		a: "Electric Torch",
		b: "1F526",
		j: [
			"dark",
			"camping",
			"sight",
			"night"
		],
		k: [
			28,
			9
		],
		o: 2
	},
	spider_web: {
		a: "Spider Web",
		b: "1F578-FE0F",
		c: "1F578",
		j: [
			"animal",
			"insect",
			"arachnid",
			"silk"
		],
		k: [
			29,
			35
		],
		o: 2
	},
	izakaya_lantern: {
		a: "Izakaya Lantern",
		b: "1F3EE",
		j: [
			"light",
			"paper",
			"halloween",
			"spooky"
		],
		k: [
			11,
			8
		],
		n: [
			"lantern"
		],
		o: 2
	},
	"flag-gs": {
		a: "South Georgia & South Sandwich Islands Flag",
		b: "1F1EC-1F1F8",
		k: [
			2,
			11
		],
		o: 2
	},
	shrug: {
		skin_variations: {
			"1F3FB": {
				unified: "1F937-1F3FB",
				non_qualified: null,
				image: "1f937-1f3fb.png",
				sheet_x: 39,
				sheet_y: 48,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F937-1F3FC",
				non_qualified: null,
				image: "1f937-1f3fc.png",
				sheet_x: 39,
				sheet_y: 49,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F937-1F3FD",
				non_qualified: null,
				image: "1f937-1f3fd.png",
				sheet_x: 39,
				sheet_y: 50,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F937-1F3FE",
				non_qualified: null,
				image: "1f937-1f3fe.png",
				sheet_x: 39,
				sheet_y: 51,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F937-1F3FF",
				non_qualified: null,
				image: "1f937-1f3ff.png",
				sheet_x: 39,
				sheet_y: 52,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		a: "Shrug",
		b: "1F937",
		k: [
			39,
			47
		],
		o: 4
	},
	fleur_de_lis: {
		a: "Fleur De Lis",
		b: "269C-FE0F",
		c: "269C",
		j: [
			"decorative",
			"scout"
		],
		k: [
			53,
			49
		],
		o: 2
	},
	robot_face: {
		a: "Robot Face",
		b: "1F916",
		k: [
			37,
			29
		],
		o: 2
	},
	railway_track: {
		a: "Railway Track",
		b: "1F6E4-FE0F",
		c: "1F6E4",
		j: [
			"train",
			"transportation"
		],
		k: [
			36,
			46
		],
		o: 2
	},
	tea: {
		a: "Teacup Without Handle",
		b: "1F375",
		j: [
			"drink",
			"bowl",
			"breakfast",
			"green",
			"british"
		],
		k: [
			7,
			20
		],
		o: 2
	},
	"flag-gt": {
		a: "Guatemala Flag",
		b: "1F1EC-1F1F9",
		k: [
			2,
			12
		],
		o: 2
	},
	oil_drum: {
		a: "Oil Drum",
		b: "1F6E2-FE0F",
		c: "1F6E2",
		j: [
			"barrell"
		],
		k: [
			36,
			44
		],
		o: 2
	},
	diya_lamp: {
		a: "Diya Lamp",
		b: "1FA94",
		k: [
			52,
			8
		],
		o: 12
	},
	sake: {
		a: "Sake Bottle and Cup",
		b: "1F376",
		j: [
			"wine",
			"drink",
			"drunk",
			"beverage",
			"japanese",
			"alcohol",
			"booze"
		],
		k: [
			7,
			21
		],
		o: 2
	},
	trident: {
		a: "Trident Emblem",
		b: "1F531",
		j: [
			"weapon",
			"spear"
		],
		k: [
			28,
			20
		],
		o: 2
	},
	"man-shrugging": {
		skin_variations: {
			"1F3FB": {
				unified: "1F937-1F3FB-200D-2642-FE0F",
				non_qualified: "1F937-1F3FB-200D-2642",
				image: "1f937-1f3fb-200d-2642-fe0f.png",
				sheet_x: 39,
				sheet_y: 42,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F937-1F3FC-200D-2642-FE0F",
				non_qualified: "1F937-1F3FC-200D-2642",
				image: "1f937-1f3fc-200d-2642-fe0f.png",
				sheet_x: 39,
				sheet_y: 43,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F937-1F3FD-200D-2642-FE0F",
				non_qualified: "1F937-1F3FD-200D-2642",
				image: "1f937-1f3fd-200d-2642-fe0f.png",
				sheet_x: 39,
				sheet_y: 44,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F937-1F3FE-200D-2642-FE0F",
				non_qualified: "1F937-1F3FE-200D-2642",
				image: "1f937-1f3fe-200d-2642-fe0f.png",
				sheet_x: 39,
				sheet_y: 45,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F937-1F3FF-200D-2642-FE0F",
				non_qualified: "1F937-1F3FF-200D-2642",
				image: "1f937-1f3ff-200d-2642-fe0f.png",
				sheet_x: 39,
				sheet_y: 46,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Shrugging",
		b: "1F937-200D-2642-FE0F",
		c: "1F937-200D-2642",
		k: [
			39,
			41
		],
		o: 4
	},
	smiley_cat: {
		a: "Smiling Cat Face with Open Mouth",
		b: "1F63A",
		j: [
			"animal",
			"cats",
			"happy",
			"smile"
		],
		k: [
			31,
			36
		],
		o: 2
	},
	scorpion: {
		a: "Scorpion",
		b: "1F982",
		j: [
			"animal",
			"arachnid"
		],
		k: [
			42,
			20
		],
		o: 2
	},
	"woman-shrugging": {
		skin_variations: {
			"1F3FB": {
				unified: "1F937-1F3FB-200D-2640-FE0F",
				non_qualified: "1F937-1F3FB-200D-2640",
				image: "1f937-1f3fb-200d-2640-fe0f.png",
				sheet_x: 39,
				sheet_y: 36,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F937-1F3FC-200D-2640-FE0F",
				non_qualified: "1F937-1F3FC-200D-2640",
				image: "1f937-1f3fc-200d-2640-fe0f.png",
				sheet_x: 39,
				sheet_y: 37,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F937-1F3FD-200D-2640-FE0F",
				non_qualified: "1F937-1F3FD-200D-2640",
				image: "1f937-1f3fd-200d-2640-fe0f.png",
				sheet_x: 39,
				sheet_y: 38,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F937-1F3FE-200D-2640-FE0F",
				non_qualified: "1F937-1F3FE-200D-2640",
				image: "1f937-1f3fe-200d-2640-fe0f.png",
				sheet_x: 39,
				sheet_y: 39,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F937-1F3FF-200D-2640-FE0F",
				non_qualified: "1F937-1F3FF-200D-2640",
				image: "1f937-1f3ff-200d-2640-fe0f.png",
				sheet_x: 39,
				sheet_y: 40,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Shrugging",
		b: "1F937-200D-2640-FE0F",
		c: "1F937-200D-2640",
		k: [
			39,
			35
		],
		o: 4
	},
	notebook_with_decorative_cover: {
		a: "Notebook with Decorative Cover",
		b: "1F4D4",
		j: [
			"classroom",
			"notes",
			"record",
			"paper",
			"study"
		],
		k: [
			26,
			42
		],
		o: 2
	},
	fuelpump: {
		a: "Fuel Pump",
		b: "26FD",
		j: [
			"gas station",
			"petroleum"
		],
		k: [
			54,
			38
		],
		o: 2
	},
	name_badge: {
		a: "Name Badge",
		b: "1F4DB",
		j: [
			"fire",
			"forbid"
		],
		k: [
			26,
			49
		],
		o: 2
	},
	mosquito: {
		a: "Mosquito",
		b: "1F99F",
		k: [
			42,
			49
		],
		o: 11
	},
	"flag-gu": {
		a: "Guam Flag",
		b: "1F1EC-1F1FA",
		k: [
			2,
			13
		],
		o: 2
	},
	smile_cat: {
		a: "Grinning Cat Face with Smiling Eyes",
		b: "1F638",
		j: [
			"animal",
			"cats",
			"smile"
		],
		k: [
			31,
			34
		],
		o: 2
	},
	champagne: {
		a: "Bottle with Popping Cork",
		b: "1F37E",
		j: [
			"drink",
			"wine",
			"bottle",
			"celebration"
		],
		k: [
			7,
			29
		],
		o: 2
	},
	joy_cat: {
		a: "Cat Face with Tears of Joy",
		b: "1F639",
		j: [
			"animal",
			"cats",
			"haha",
			"happy",
			"tears"
		],
		k: [
			31,
			35
		],
		o: 2
	},
	closed_book: {
		a: "Closed Book",
		b: "1F4D5",
		j: [
			"read",
			"library",
			"knowledge",
			"textbook",
			"learn"
		],
		k: [
			26,
			43
		],
		o: 2
	},
	rotating_light: {
		a: "Police Cars Revolving Light",
		b: "1F6A8",
		j: [
			"police",
			"ambulance",
			"911",
			"emergency",
			"alert",
			"error",
			"pinged",
			"law",
			"legal"
		],
		k: [
			34,
			56
		],
		o: 2
	},
	microbe: {
		a: "Microbe",
		b: "1F9A0",
		k: [
			42,
			50
		],
		o: 11
	},
	"flag-gw": {
		a: "Guinea-Bissau Flag",
		b: "1F1EC-1F1FC",
		k: [
			2,
			14
		],
		o: 2
	},
	wine_glass: {
		a: "Wine Glass",
		b: "1F377",
		j: [
			"drink",
			"beverage",
			"drunk",
			"alcohol",
			"booze"
		],
		k: [
			7,
			22
		],
		o: 2
	},
	beginner: {
		a: "Japanese Symbol for Beginner",
		b: "1F530",
		j: [
			"badge",
			"shield"
		],
		k: [
			28,
			19
		],
		o: 2
	},
	bouquet: {
		a: "Bouquet",
		b: "1F490",
		j: [
			"flowers",
			"nature",
			"spring"
		],
		k: [
			25,
			26
		],
		o: 2
	},
	heart_eyes_cat: {
		a: "Smiling Cat Face with Heart-Shaped Eyes",
		b: "1F63B",
		j: [
			"animal",
			"love",
			"like",
			"affection",
			"cats",
			"valentines",
			"heart"
		],
		k: [
			31,
			37
		],
		o: 2
	},
	"male-doctor": {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-2695-FE0F",
				non_qualified: "1F468-1F3FB-200D-2695",
				image: "1f468-1f3fb-200d-2695-fe0f.png",
				sheet_x: 17,
				sheet_y: 3,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-2695-FE0F",
				non_qualified: "1F468-1F3FC-200D-2695",
				image: "1f468-1f3fc-200d-2695-fe0f.png",
				sheet_x: 17,
				sheet_y: 4,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-2695-FE0F",
				non_qualified: "1F468-1F3FD-200D-2695",
				image: "1f468-1f3fd-200d-2695-fe0f.png",
				sheet_x: 17,
				sheet_y: 5,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-2695-FE0F",
				non_qualified: "1F468-1F3FE-200D-2695",
				image: "1f468-1f3fe-200d-2695-fe0f.png",
				sheet_x: 17,
				sheet_y: 6,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-2695-FE0F",
				non_qualified: "1F468-1F3FF-200D-2695",
				image: "1f468-1f3ff-200d-2695-fe0f.png",
				sheet_x: 17,
				sheet_y: 7,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Doctor",
		b: "1F468-200D-2695-FE0F",
		c: "1F468-200D-2695",
		k: [
			17,
			2
		],
		o: 4
	},
	book: {
		a: "Open Book",
		b: "1F4D6",
		k: [
			26,
			44
		],
		n: [
			"open_book"
		],
		o: 2
	},
	traffic_light: {
		a: "Horizontal Traffic Light",
		b: "1F6A5",
		j: [
			"transportation",
			"signal"
		],
		k: [
			34,
			53
		],
		o: 2
	},
	cocktail: {
		a: "Cocktail Glass",
		b: "1F378",
		j: [
			"drink",
			"drunk",
			"alcohol",
			"beverage",
			"booze",
			"mojito"
		],
		k: [
			7,
			23
		],
		o: 2
	},
	o: {
		a: "Heavy Large Circle",
		b: "2B55",
		j: [
			"circle",
			"round"
		],
		k: [
			55,
			43
		],
		o: 2
	},
	"flag-gy": {
		a: "Guyana Flag",
		b: "1F1EC-1F1FE",
		k: [
			2,
			15
		],
		o: 2
	},
	"female-doctor": {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-2695-FE0F",
				non_qualified: "1F469-1F3FB-200D-2695",
				image: "1f469-1f3fb-200d-2695-fe0f.png",
				sheet_x: 19,
				sheet_y: 45,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-2695-FE0F",
				non_qualified: "1F469-1F3FC-200D-2695",
				image: "1f469-1f3fc-200d-2695-fe0f.png",
				sheet_x: 19,
				sheet_y: 46,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-2695-FE0F",
				non_qualified: "1F469-1F3FD-200D-2695",
				image: "1f469-1f3fd-200d-2695-fe0f.png",
				sheet_x: 19,
				sheet_y: 47,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-2695-FE0F",
				non_qualified: "1F469-1F3FE-200D-2695",
				image: "1f469-1f3fe-200d-2695-fe0f.png",
				sheet_x: 19,
				sheet_y: 48,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-2695-FE0F",
				non_qualified: "1F469-1F3FF-200D-2695",
				image: "1f469-1f3ff-200d-2695-fe0f.png",
				sheet_x: 19,
				sheet_y: 49,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Doctor",
		b: "1F469-200D-2695-FE0F",
		c: "1F469-200D-2695",
		k: [
			19,
			44
		],
		o: 4
	},
	smirk_cat: {
		a: "Cat Face with Wry Smile",
		b: "1F63C",
		j: [
			"animal",
			"cats",
			"smirk"
		],
		k: [
			31,
			38
		],
		o: 2
	},
	green_book: {
		a: "Green Book",
		b: "1F4D7",
		j: [
			"read",
			"library",
			"knowledge",
			"study"
		],
		k: [
			26,
			45
		],
		o: 2
	},
	cherry_blossom: {
		a: "Cherry Blossom",
		b: "1F338",
		j: [
			"nature",
			"plant",
			"spring",
			"flower"
		],
		k: [
			6,
			16
		],
		o: 2
	},
	"flag-hk": {
		a: "Hong Kong Sar China Flag",
		b: "1F1ED-1F1F0",
		k: [
			2,
			16
		],
		o: 2
	},
	vertical_traffic_light: {
		a: "Vertical Traffic Light",
		b: "1F6A6",
		j: [
			"transportation",
			"driving"
		],
		k: [
			34,
			54
		],
		o: 2
	},
	white_check_mark: {
		a: "White Heavy Check Mark",
		b: "2705",
		j: [
			"green-square",
			"ok",
			"agree",
			"vote",
			"election",
			"answer",
			"tick"
		],
		k: [
			54,
			40
		],
		o: 2
	},
	tropical_drink: {
		a: "Tropical Drink",
		b: "1F379",
		j: [
			"beverage",
			"cocktail",
			"summer",
			"beach",
			"alcohol",
			"booze",
			"mojito"
		],
		k: [
			7,
			24
		],
		o: 2
	},
	kissing_cat: {
		a: "Kissing Cat Face with Closed Eyes",
		b: "1F63D",
		j: [
			"animal",
			"cats",
			"kiss"
		],
		k: [
			31,
			39
		],
		o: 2
	},
	"flag-hm": {
		a: "Heard & Mcdonald Islands Flag",
		b: "1F1ED-1F1F2",
		k: [
			2,
			17
		],
		o: 2
	},
	octagonal_sign: {
		a: "Octagonal Sign",
		b: "1F6D1",
		k: [
			36,
			39
		],
		o: 4
	},
	white_flower: {
		a: "White Flower",
		b: "1F4AE",
		j: [
			"japanese",
			"spring"
		],
		k: [
			26,
			4
		],
		o: 2
	},
	ballot_box_with_check: {
		a: "Ballot Box with Check",
		b: "2611-FE0F",
		c: "2611",
		j: [
			"ok",
			"agree",
			"confirm",
			"black-square",
			"vote",
			"election",
			"yes",
			"tick"
		],
		k: [
			52,
			55
		],
		o: 2
	},
	blue_book: {
		a: "Blue Book",
		b: "1F4D8",
		j: [
			"read",
			"library",
			"knowledge",
			"learn",
			"study"
		],
		k: [
			26,
			46
		],
		o: 2
	},
	beer: {
		a: "Beer Mug",
		b: "1F37A",
		j: [
			"relax",
			"beverage",
			"drink",
			"drunk",
			"party",
			"pub",
			"summer",
			"alcohol",
			"booze"
		],
		k: [
			7,
			25
		],
		o: 2
	},
	construction: {
		a: "Construction Sign",
		b: "1F6A7",
		j: [
			"wip",
			"progress",
			"caution",
			"warning"
		],
		k: [
			34,
			55
		],
		o: 2
	},
	rosette: {
		a: "Rosette",
		b: "1F3F5-FE0F",
		c: "1F3F5",
		j: [
			"flower",
			"decoration",
			"military"
		],
		k: [
			11,
			18
		],
		o: 2
	},
	heavy_check_mark: {
		a: "Heavy Check Mark",
		b: "2714-FE0F",
		c: "2714",
		j: [
			"ok",
			"nike",
			"answer",
			"yes",
			"tick"
		],
		k: [
			55,
			12
		],
		o: 2
	},
	scream_cat: {
		a: "Weary Cat Face",
		b: "1F640",
		j: [
			"animal",
			"cats",
			"munch",
			"scared",
			"scream"
		],
		k: [
			31,
			42
		],
		o: 2
	},
	orange_book: {
		a: "Orange Book",
		b: "1F4D9",
		j: [
			"read",
			"library",
			"knowledge",
			"textbook",
			"study"
		],
		k: [
			26,
			47
		],
		o: 2
	},
	beers: {
		a: "Clinking Beer Mugs",
		b: "1F37B",
		j: [
			"relax",
			"beverage",
			"drink",
			"drunk",
			"party",
			"pub",
			"summer",
			"alcohol",
			"booze"
		],
		k: [
			7,
			26
		],
		o: 2
	},
	"male-student": {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F393",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f393.png",
				sheet_x: 14,
				sheet_y: 51,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F393",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f393.png",
				sheet_x: 14,
				sheet_y: 52,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F393",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f393.png",
				sheet_x: 14,
				sheet_y: 53,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F393",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f393.png",
				sheet_x: 14,
				sheet_y: 54,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F393",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f393.png",
				sheet_x: 14,
				sheet_y: 55,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Student",
		b: "1F468-200D-1F393",
		k: [
			14,
			50
		],
		o: 4
	},
	"flag-hn": {
		a: "Honduras Flag",
		b: "1F1ED-1F1F3",
		k: [
			2,
			18
		],
		o: 2
	},
	crying_cat_face: {
		a: "Crying Cat Face",
		b: "1F63F",
		j: [
			"animal",
			"tears",
			"weep",
			"sad",
			"cats",
			"upset",
			"cry"
		],
		k: [
			31,
			41
		],
		o: 2
	},
	anchor: {
		a: "Anchor",
		b: "2693",
		j: [
			"ship",
			"ferry",
			"sea",
			"boat"
		],
		k: [
			53,
			42
		],
		o: 2
	},
	"flag-hr": {
		a: "Croatia Flag",
		b: "1F1ED-1F1F7",
		k: [
			2,
			19
		],
		o: 2
	},
	heavy_multiplication_x: {
		a: "Heavy Multiplication X",
		b: "2716-FE0F",
		c: "2716",
		j: [
			"math",
			"calculation"
		],
		k: [
			55,
			13
		],
		o: 2
	},
	"female-student": {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F393",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f393.png",
				sheet_x: 17,
				sheet_y: 41,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F393",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f393.png",
				sheet_x: 17,
				sheet_y: 42,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F393",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f393.png",
				sheet_x: 17,
				sheet_y: 43,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F393",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f393.png",
				sheet_x: 17,
				sheet_y: 44,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F393",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f393.png",
				sheet_x: 17,
				sheet_y: 45,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Student",
		b: "1F469-200D-1F393",
		k: [
			17,
			40
		],
		o: 4
	},
	rose: {
		a: "Rose",
		b: "1F339",
		j: [
			"flowers",
			"valentines",
			"love",
			"spring"
		],
		k: [
			6,
			17
		],
		o: 2
	},
	books: {
		a: "Books",
		b: "1F4DA",
		j: [
			"literature",
			"library",
			"study"
		],
		k: [
			26,
			48
		],
		o: 2
	},
	clinking_glasses: {
		a: "Clinking Glasses",
		b: "1F942",
		j: [
			"beverage",
			"drink",
			"party",
			"alcohol",
			"celebrate",
			"cheers"
		],
		k: [
			41,
			18
		],
		o: 4
	},
	x: {
		a: "Cross Mark",
		b: "274C",
		j: [
			"no",
			"delete",
			"remove",
			"cancel"
		],
		k: [
			55,
			21
		],
		o: 2
	},
	pouting_cat: {
		a: "Pouting Cat Face",
		b: "1F63E",
		j: [
			"animal",
			"cats"
		],
		k: [
			31,
			40
		],
		o: 2
	},
	wilted_flower: {
		a: "Wilted Flower",
		b: "1F940",
		j: [
			"plant",
			"nature",
			"flower"
		],
		k: [
			41,
			16
		],
		o: 4
	},
	boat: {
		a: "Sailboat",
		b: "26F5",
		k: [
			54,
			16
		],
		n: [
			"sailboat"
		],
		o: 2
	},
	"flag-ht": {
		a: "Haiti Flag",
		b: "1F1ED-1F1F9",
		k: [
			2,
			20
		],
		o: 2
	},
	tumbler_glass: {
		a: "Tumbler Glass",
		b: "1F943",
		j: [
			"drink",
			"beverage",
			"drunk",
			"alcohol",
			"liquor",
			"booze",
			"bourbon",
			"scotch",
			"whisky",
			"glass",
			"shot"
		],
		k: [
			41,
			19
		],
		o: 4
	},
	notebook: {
		a: "Notebook",
		b: "1F4D3",
		j: [
			"stationery",
			"record",
			"notes",
			"paper",
			"study"
		],
		k: [
			26,
			41
		],
		o: 2
	},
	"male-teacher": {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F3EB",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f3eb.png",
				sheet_x: 15,
				sheet_y: 12,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F3EB",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f3eb.png",
				sheet_x: 15,
				sheet_y: 13,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F3EB",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f3eb.png",
				sheet_x: 15,
				sheet_y: 14,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F3EB",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f3eb.png",
				sheet_x: 15,
				sheet_y: 15,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F3EB",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f3eb.png",
				sheet_x: 15,
				sheet_y: 16,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Teacher",
		b: "1F468-200D-1F3EB",
		k: [
			15,
			11
		],
		o: 4
	},
	ledger: {
		a: "Ledger",
		b: "1F4D2",
		j: [
			"notes",
			"paper"
		],
		k: [
			26,
			40
		],
		o: 2
	},
	"flag-hu": {
		a: "Hungary Flag",
		b: "1F1ED-1F1FA",
		k: [
			2,
			21
		],
		o: 2
	},
	cup_with_straw: {
		a: "Cup with Straw",
		b: "1F964",
		k: [
			41,
			51
		],
		o: 5
	},
	hibiscus: {
		a: "Hibiscus",
		b: "1F33A",
		j: [
			"plant",
			"vegetable",
			"flowers",
			"beach"
		],
		k: [
			6,
			18
		],
		o: 2
	},
	see_no_evil: {
		a: "See-No-Evil Monkey",
		b: "1F648",
		j: [
			"monkey",
			"animal",
			"nature",
			"haha"
		],
		k: [
			32,
			44
		],
		o: 2
	},
	canoe: {
		a: "Canoe",
		b: "1F6F6",
		j: [
			"boat",
			"paddle",
			"water",
			"ship"
		],
		k: [
			36,
			55
		],
		o: 4
	},
	negative_squared_cross_mark: {
		a: "Negative Squared Cross Mark",
		b: "274E",
		j: [
			"x",
			"green-square",
			"no",
			"deny"
		],
		k: [
			55,
			22
		],
		o: 2
	},
	"flag-ic": {
		a: "Canary Islands Flag",
		b: "1F1EE-1F1E8",
		k: [
			2,
			22
		],
		o: 2
	},
	beverage_box: {
		a: "Beverage Box",
		b: "1F9C3",
		k: [
			44,
			11
		],
		o: 12
	},
	speedboat: {
		a: "Speedboat",
		b: "1F6A4",
		j: [
			"ship",
			"transportation",
			"vehicle",
			"summer"
		],
		k: [
			34,
			52
		],
		o: 2
	},
	heavy_plus_sign: {
		a: "Heavy Plus Sign",
		b: "2795",
		j: [
			"math",
			"calculation",
			"addition",
			"more",
			"increase"
		],
		k: [
			55,
			29
		],
		o: 2
	},
	sunflower: {
		a: "Sunflower",
		b: "1F33B",
		j: [
			"nature",
			"plant",
			"fall"
		],
		k: [
			6,
			19
		],
		o: 2
	},
	page_with_curl: {
		a: "Page with Curl",
		b: "1F4C3",
		j: [
			"documents",
			"office",
			"paper"
		],
		k: [
			26,
			25
		],
		o: 2
	},
	"female-teacher": {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F3EB",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f3eb.png",
				sheet_x: 18,
				sheet_y: 2,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F3EB",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f3eb.png",
				sheet_x: 18,
				sheet_y: 3,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F3EB",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f3eb.png",
				sheet_x: 18,
				sheet_y: 4,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F3EB",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f3eb.png",
				sheet_x: 18,
				sheet_y: 5,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F3EB",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f3eb.png",
				sheet_x: 18,
				sheet_y: 6,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Teacher",
		b: "1F469-200D-1F3EB",
		k: [
			18,
			1
		],
		o: 4
	},
	hear_no_evil: {
		a: "Hear-No-Evil Monkey",
		b: "1F649",
		j: [
			"animal",
			"monkey",
			"nature"
		],
		k: [
			32,
			45
		],
		o: 2
	},
	mate_drink: {
		a: "Mate Drink",
		b: "1F9C9",
		k: [
			44,
			17
		],
		o: 12
	},
	passenger_ship: {
		a: "Passenger Ship",
		b: "1F6F3-FE0F",
		c: "1F6F3",
		j: [
			"yacht",
			"cruise",
			"ferry"
		],
		k: [
			36,
			52
		],
		o: 2
	},
	scroll: {
		a: "Scroll",
		b: "1F4DC",
		j: [
			"documents",
			"ancient",
			"history",
			"paper"
		],
		k: [
			26,
			50
		],
		o: 2
	},
	blossom: {
		a: "Blossom",
		b: "1F33C",
		j: [
			"nature",
			"flowers",
			"yellow"
		],
		k: [
			6,
			20
		],
		o: 2
	},
	"flag-id": {
		a: "Indonesia Flag",
		b: "1F1EE-1F1E9",
		k: [
			2,
			23
		],
		o: 2
	},
	speak_no_evil: {
		a: "Speak-No-Evil Monkey",
		b: "1F64A",
		j: [
			"monkey",
			"animal",
			"nature",
			"omg"
		],
		k: [
			32,
			46
		],
		o: 2
	},
	heavy_minus_sign: {
		a: "Heavy Minus Sign",
		b: "2796",
		j: [
			"math",
			"calculation",
			"subtract",
			"less"
		],
		k: [
			55,
			30
		],
		o: 2
	},
	"flag-ie": {
		a: "Ireland Flag",
		b: "1F1EE-1F1EA",
		k: [
			2,
			24
		],
		o: 2
	},
	ice_cube: {
		a: "Ice Cube",
		b: "1F9CA",
		k: [
			44,
			18
		],
		o: 12
	},
	page_facing_up: {
		a: "Page Facing Up",
		b: "1F4C4",
		j: [
			"documents",
			"office",
			"paper",
			"information"
		],
		k: [
			26,
			26
		],
		o: 2
	},
	"male-judge": {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-2696-FE0F",
				non_qualified: "1F468-1F3FB-200D-2696",
				image: "1f468-1f3fb-200d-2696-fe0f.png",
				sheet_x: 17,
				sheet_y: 9,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-2696-FE0F",
				non_qualified: "1F468-1F3FC-200D-2696",
				image: "1f468-1f3fc-200d-2696-fe0f.png",
				sheet_x: 17,
				sheet_y: 10,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-2696-FE0F",
				non_qualified: "1F468-1F3FD-200D-2696",
				image: "1f468-1f3fd-200d-2696-fe0f.png",
				sheet_x: 17,
				sheet_y: 11,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-2696-FE0F",
				non_qualified: "1F468-1F3FE-200D-2696",
				image: "1f468-1f3fe-200d-2696-fe0f.png",
				sheet_x: 17,
				sheet_y: 12,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-2696-FE0F",
				non_qualified: "1F468-1F3FF-200D-2696",
				image: "1f468-1f3ff-200d-2696-fe0f.png",
				sheet_x: 17,
				sheet_y: 13,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Judge",
		b: "1F468-200D-2696-FE0F",
		c: "1F468-200D-2696",
		k: [
			17,
			8
		],
		o: 4
	},
	tulip: {
		a: "Tulip",
		b: "1F337",
		j: [
			"flowers",
			"plant",
			"nature",
			"summer",
			"spring"
		],
		k: [
			6,
			15
		],
		o: 2
	},
	ferry: {
		a: "Ferry",
		b: "26F4-FE0F",
		c: "26F4",
		j: [
			"boat",
			"ship",
			"yacht"
		],
		k: [
			54,
			15
		],
		o: 2
	},
	kiss: {
		a: "Kiss Mark",
		b: "1F48B",
		j: [
			"face",
			"lips",
			"love",
			"like",
			"affection",
			"valentines"
		],
		k: [
			25,
			21
		],
		o: 2
	},
	heavy_division_sign: {
		a: "Heavy Division Sign",
		b: "2797",
		j: [
			"divide",
			"math",
			"calculation"
		],
		k: [
			55,
			31
		],
		o: 2
	},
	newspaper: {
		a: "Newspaper",
		b: "1F4F0",
		j: [
			"press",
			"headline"
		],
		k: [
			27,
			13
		],
		o: 2
	},
	"female-judge": {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-2696-FE0F",
				non_qualified: "1F469-1F3FB-200D-2696",
				image: "1f469-1f3fb-200d-2696-fe0f.png",
				sheet_x: 19,
				sheet_y: 51,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-2696-FE0F",
				non_qualified: "1F469-1F3FC-200D-2696",
				image: "1f469-1f3fc-200d-2696-fe0f.png",
				sheet_x: 19,
				sheet_y: 52,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-2696-FE0F",
				non_qualified: "1F469-1F3FD-200D-2696",
				image: "1f469-1f3fd-200d-2696-fe0f.png",
				sheet_x: 19,
				sheet_y: 53,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-2696-FE0F",
				non_qualified: "1F469-1F3FE-200D-2696",
				image: "1f469-1f3fe-200d-2696-fe0f.png",
				sheet_x: 19,
				sheet_y: 54,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-2696-FE0F",
				non_qualified: "1F469-1F3FF-200D-2696",
				image: "1f469-1f3ff-200d-2696-fe0f.png",
				sheet_x: 19,
				sheet_y: 55,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Judge",
		b: "1F469-200D-2696-FE0F",
		c: "1F469-200D-2696",
		k: [
			19,
			50
		],
		o: 4
	},
	seedling: {
		a: "Seedling",
		b: "1F331",
		j: [
			"plant",
			"nature",
			"grass",
			"lawn",
			"spring"
		],
		k: [
			6,
			9
		],
		o: 2
	},
	love_letter: {
		a: "Love Letter",
		b: "1F48C",
		j: [
			"email",
			"like",
			"affection",
			"envelope",
			"valentines"
		],
		k: [
			25,
			22
		],
		o: 2
	},
	chopsticks: {
		a: "Chopsticks",
		b: "1F962",
		k: [
			41,
			49
		],
		o: 5
	},
	motor_boat: {
		a: "Motor Boat",
		b: "1F6E5-FE0F",
		c: "1F6E5",
		j: [
			"ship"
		],
		k: [
			36,
			47
		],
		o: 2
	},
	"flag-il": {
		a: "Israel Flag",
		b: "1F1EE-1F1F1",
		k: [
			2,
			25
		],
		o: 2
	},
	curly_loop: {
		a: "Curly Loop",
		b: "27B0",
		j: [
			"scribble",
			"draw",
			"shape",
			"squiggle"
		],
		k: [
			55,
			33
		],
		o: 2
	},
	"flag-im": {
		a: "Isle of Man Flag",
		b: "1F1EE-1F1F2",
		k: [
			2,
			26
		],
		o: 2
	},
	evergreen_tree: {
		a: "Evergreen Tree",
		b: "1F332",
		j: [
			"plant",
			"nature"
		],
		k: [
			6,
			10
		],
		o: 2
	},
	cupid: {
		a: "Heart with Arrow",
		b: "1F498",
		j: [
			"love",
			"like",
			"heart",
			"affection",
			"valentines"
		],
		k: [
			25,
			34
		],
		o: 2
	},
	loop: {
		a: "Double Curly Loop",
		b: "27BF",
		j: [
			"tape",
			"cassette"
		],
		k: [
			55,
			34
		],
		o: 2
	},
	ship: {
		a: "Ship",
		b: "1F6A2",
		j: [
			"transportation",
			"titanic",
			"deploy"
		],
		k: [
			34,
			33
		],
		o: 2
	},
	rolled_up_newspaper: {
		a: "Rolled Up Newspaper",
		b: "1F5DE-FE0F",
		c: "1F5DE",
		k: [
			30,
			23
		],
		o: 2
	},
	knife_fork_plate: {
		a: "Knife Fork Plate",
		b: "1F37D-FE0F",
		c: "1F37D",
		k: [
			7,
			28
		],
		o: 2
	},
	fork_and_knife: {
		a: "Fork and Knife",
		b: "1F374",
		j: [
			"cutlery",
			"kitchen"
		],
		k: [
			7,
			19
		],
		o: 2
	},
	"male-farmer": {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F33E",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f33e.png",
				sheet_x: 14,
				sheet_y: 39,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F33E",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f33e.png",
				sheet_x: 14,
				sheet_y: 40,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F33E",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f33e.png",
				sheet_x: 14,
				sheet_y: 41,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F33E",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f33e.png",
				sheet_x: 14,
				sheet_y: 42,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F33E",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f33e.png",
				sheet_x: 14,
				sheet_y: 43,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Farmer",
		b: "1F468-200D-1F33E",
		k: [
			14,
			38
		],
		o: 4
	},
	bookmark_tabs: {
		a: "Bookmark Tabs",
		b: "1F4D1",
		j: [
			"favorite",
			"save",
			"order",
			"tidy"
		],
		k: [
			26,
			39
		],
		o: 2
	},
	part_alternation_mark: {
		a: "Part Alternation Mark",
		b: "303D-FE0F",
		c: "303D",
		j: [
			"graph",
			"presentation",
			"stats",
			"business",
			"economics",
			"bad"
		],
		k: [
			55,
			45
		],
		o: 2
	},
	"flag-in": {
		a: "India Flag",
		b: "1F1EE-1F1F3",
		k: [
			2,
			27
		],
		o: 2
	},
	gift_heart: {
		a: "Heart with Ribbon",
		b: "1F49D",
		j: [
			"love",
			"valentines"
		],
		k: [
			25,
			39
		],
		o: 2
	},
	airplane: {
		a: "Airplane",
		b: "2708-FE0F",
		c: "2708",
		j: [
			"vehicle",
			"transportation",
			"flight",
			"fly"
		],
		k: [
			54,
			41
		],
		o: 2
	},
	deciduous_tree: {
		a: "Deciduous Tree",
		b: "1F333",
		j: [
			"plant",
			"nature"
		],
		k: [
			6,
			11
		],
		o: 2
	},
	spoon: {
		a: "Spoon",
		b: "1F944",
		j: [
			"cutlery",
			"kitchen",
			"tableware"
		],
		k: [
			41,
			20
		],
		o: 4
	},
	"flag-io": {
		a: "British Indian Ocean Territory Flag",
		b: "1F1EE-1F1F4",
		k: [
			2,
			28
		],
		o: 2
	},
	palm_tree: {
		a: "Palm Tree",
		b: "1F334",
		j: [
			"plant",
			"vegetable",
			"nature",
			"summer",
			"beach",
			"mojito",
			"tropical"
		],
		k: [
			6,
			12
		],
		o: 2
	},
	sparkling_heart: {
		a: "Sparkling Heart",
		b: "1F496",
		j: [
			"love",
			"like",
			"affection",
			"valentines"
		],
		k: [
			25,
			32
		],
		o: 2
	},
	"female-farmer": {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F33E",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f33e.png",
				sheet_x: 17,
				sheet_y: 29,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F33E",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f33e.png",
				sheet_x: 17,
				sheet_y: 30,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F33E",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f33e.png",
				sheet_x: 17,
				sheet_y: 31,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F33E",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f33e.png",
				sheet_x: 17,
				sheet_y: 32,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F33E",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f33e.png",
				sheet_x: 17,
				sheet_y: 33,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Farmer",
		b: "1F469-200D-1F33E",
		k: [
			17,
			28
		],
		o: 4
	},
	eight_spoked_asterisk: {
		a: "Eight Spoked Asterisk",
		b: "2733-FE0F",
		c: "2733",
		j: [
			"star",
			"sparkle",
			"green-square"
		],
		k: [
			55,
			17
		],
		o: 2
	},
	small_airplane: {
		a: "Small Airplane",
		b: "1F6E9-FE0F",
		c: "1F6E9",
		j: [
			"flight",
			"transportation",
			"fly",
			"vehicle"
		],
		k: [
			36,
			48
		],
		o: 2
	},
	bookmark: {
		a: "Bookmark",
		b: "1F516",
		j: [
			"favorite",
			"label",
			"save"
		],
		k: [
			27,
			50
		],
		o: 2
	},
	eight_pointed_black_star: {
		a: "Eight Pointed Black Star",
		b: "2734-FE0F",
		c: "2734",
		j: [
			"orange-square",
			"shape",
			"polygon"
		],
		k: [
			55,
			18
		],
		o: 2
	},
	heartpulse: {
		a: "Growing Heart",
		b: "1F497",
		j: [
			"like",
			"love",
			"affection",
			"valentines",
			"pink"
		],
		k: [
			25,
			33
		],
		o: 2
	},
	label: {
		a: "Label",
		b: "1F3F7-FE0F",
		c: "1F3F7",
		j: [
			"sale",
			"tag"
		],
		k: [
			11,
			19
		],
		o: 2
	},
	"flag-iq": {
		a: "Iraq Flag",
		b: "1F1EE-1F1F6",
		k: [
			2,
			29
		],
		o: 2
	},
	hocho: {
		a: "Hocho",
		b: "1F52A",
		j: [
			"knife",
			"blade",
			"cutlery",
			"kitchen",
			"weapon"
		],
		k: [
			28,
			13
		],
		n: [
			"knife"
		],
		o: 2
	},
	cactus: {
		a: "Cactus",
		b: "1F335",
		j: [
			"vegetable",
			"plant",
			"nature"
		],
		k: [
			6,
			13
		],
		o: 2
	},
	airplane_departure: {
		a: "Airplane Departure",
		b: "1F6EB",
		k: [
			36,
			49
		],
		o: 2
	},
	airplane_arriving: {
		a: "Airplane Arriving",
		b: "1F6EC",
		k: [
			36,
			50
		],
		o: 2
	},
	ear_of_rice: {
		a: "Ear of Rice",
		b: "1F33E",
		j: [
			"nature",
			"plant"
		],
		k: [
			6,
			22
		],
		o: 2
	},
	"flag-ir": {
		a: "Iran Flag",
		b: "1F1EE-1F1F7",
		k: [
			2,
			30
		],
		o: 2
	},
	moneybag: {
		a: "Money Bag",
		b: "1F4B0",
		j: [
			"dollar",
			"payment",
			"coins",
			"sale"
		],
		k: [
			26,
			6
		],
		o: 2
	},
	"male-cook": {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F373",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f373.png",
				sheet_x: 14,
				sheet_y: 45,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F373",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f373.png",
				sheet_x: 14,
				sheet_y: 46,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F373",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f373.png",
				sheet_x: 14,
				sheet_y: 47,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F373",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f373.png",
				sheet_x: 14,
				sheet_y: 48,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F373",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f373.png",
				sheet_x: 14,
				sheet_y: 49,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Cook",
		b: "1F468-200D-1F373",
		k: [
			14,
			44
		],
		o: 4
	},
	heartbeat: {
		a: "Beating Heart",
		b: "1F493",
		j: [
			"love",
			"like",
			"affection",
			"valentines",
			"pink",
			"heart"
		],
		k: [
			25,
			29
		],
		o: 2
	},
	sparkle: {
		a: "Sparkle",
		b: "2747-FE0F",
		c: "2747",
		j: [
			"stars",
			"green-square",
			"awesome",
			"good",
			"fireworks"
		],
		k: [
			55,
			20
		],
		o: 2
	},
	amphora: {
		a: "Amphora",
		b: "1F3FA",
		j: [
			"vase",
			"jar"
		],
		k: [
			11,
			22
		],
		o: 2
	},
	yen: {
		a: "Banknote with Yen Sign",
		b: "1F4B4",
		j: [
			"money",
			"sales",
			"japanese",
			"dollar",
			"currency"
		],
		k: [
			26,
			10
		],
		o: 2
	},
	revolving_hearts: {
		a: "Revolving Hearts",
		b: "1F49E",
		j: [
			"love",
			"like",
			"affection",
			"valentines"
		],
		k: [
			25,
			40
		],
		o: 2
	},
	bangbang: {
		a: "Double Exclamation Mark",
		b: "203C-FE0F",
		c: "203C",
		j: [
			"exclamation",
			"surprise"
		],
		k: [
			52,
			10
		],
		o: 2
	},
	parachute: {
		a: "Parachute",
		b: "1FA82",
		k: [
			52,
			3
		],
		o: 12
	},
	herb: {
		a: "Herb",
		b: "1F33F",
		j: [
			"vegetable",
			"plant",
			"medicine",
			"weed",
			"grass",
			"lawn"
		],
		k: [
			6,
			23
		],
		o: 2
	},
	"flag-is": {
		a: "Iceland Flag",
		b: "1F1EE-1F1F8",
		k: [
			2,
			31
		],
		o: 2
	},
	"female-cook": {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F373",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f373.png",
				sheet_x: 17,
				sheet_y: 35,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F373",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f373.png",
				sheet_x: 17,
				sheet_y: 36,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F373",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f373.png",
				sheet_x: 17,
				sheet_y: 37,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F373",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f373.png",
				sheet_x: 17,
				sheet_y: 38,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F373",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f373.png",
				sheet_x: 17,
				sheet_y: 39,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Cook",
		b: "1F469-200D-1F373",
		k: [
			17,
			34
		],
		o: 4
	},
	interrobang: {
		a: "Exclamation Question Mark",
		b: "2049-FE0F",
		c: "2049",
		j: [
			"wat",
			"punctuation",
			"surprise"
		],
		k: [
			52,
			11
		],
		o: 2
	},
	seat: {
		a: "Seat",
		b: "1F4BA",
		j: [
			"sit",
			"airplane",
			"transport",
			"bus",
			"flight",
			"fly"
		],
		k: [
			26,
			16
		],
		o: 2
	},
	dollar: {
		a: "Banknote with Dollar Sign",
		b: "1F4B5",
		j: [
			"money",
			"sales",
			"bill",
			"currency"
		],
		k: [
			26,
			11
		],
		o: 2
	},
	two_hearts: {
		a: "Two Hearts",
		b: "1F495",
		j: [
			"love",
			"like",
			"affection",
			"valentines",
			"heart"
		],
		k: [
			25,
			31
		],
		o: 2
	},
	it: {
		a: "Italy Flag",
		b: "1F1EE-1F1F9",
		j: [
			"italy",
			"flag",
			"nation",
			"country",
			"banner"
		],
		k: [
			2,
			32
		],
		n: [
			"flag-it"
		],
		o: 2
	},
	shamrock: {
		a: "Shamrock",
		b: "2618-FE0F",
		c: "2618",
		j: [
			"vegetable",
			"plant",
			"nature",
			"irish",
			"clover"
		],
		k: [
			53,
			1
		],
		o: 2
	},
	four_leaf_clover: {
		a: "Four Leaf Clover",
		b: "1F340",
		j: [
			"vegetable",
			"plant",
			"nature",
			"lucky",
			"irish"
		],
		k: [
			6,
			24
		],
		o: 2
	},
	euro: {
		a: "Banknote with Euro Sign",
		b: "1F4B6",
		j: [
			"money",
			"sales",
			"dollar",
			"currency"
		],
		k: [
			26,
			12
		],
		o: 2
	},
	question: {
		a: "Black Question Mark Ornament",
		b: "2753",
		j: [
			"doubt",
			"confused"
		],
		k: [
			55,
			23
		],
		o: 2
	},
	helicopter: {
		a: "Helicopter",
		b: "1F681",
		j: [
			"transportation",
			"vehicle",
			"fly"
		],
		k: [
			34,
			0
		],
		o: 2
	},
	heart_decoration: {
		a: "Heart Decoration",
		b: "1F49F",
		j: [
			"purple-square",
			"love",
			"like"
		],
		k: [
			25,
			41
		],
		o: 2
	},
	"flag-je": {
		a: "Jersey Flag",
		b: "1F1EF-1F1EA",
		k: [
			2,
			33
		],
		o: 2
	},
	"male-mechanic": {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F527",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f527.png",
				sheet_x: 15,
				sheet_y: 51,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F527",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f527.png",
				sheet_x: 15,
				sheet_y: 52,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F527",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f527.png",
				sheet_x: 15,
				sheet_y: 53,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F527",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f527.png",
				sheet_x: 15,
				sheet_y: 54,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F527",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f527.png",
				sheet_x: 15,
				sheet_y: 55,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Mechanic",
		b: "1F468-200D-1F527",
		k: [
			15,
			50
		],
		o: 4
	},
	suspension_railway: {
		a: "Suspension Railway",
		b: "1F69F",
		j: [
			"vehicle",
			"transportation"
		],
		k: [
			34,
			30
		],
		o: 2
	},
	heavy_heart_exclamation_mark_ornament: {
		a: "Heavy Heart Exclamation Mark Ornament",
		b: "2763-FE0F",
		c: "2763",
		k: [
			55,
			27
		],
		o: 2
	},
	"female-mechanic": {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F527",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f527.png",
				sheet_x: 18,
				sheet_y: 36,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F527",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f527.png",
				sheet_x: 18,
				sheet_y: 37,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F527",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f527.png",
				sheet_x: 18,
				sheet_y: 38,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F527",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f527.png",
				sheet_x: 18,
				sheet_y: 39,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F527",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f527.png",
				sheet_x: 18,
				sheet_y: 40,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Mechanic",
		b: "1F469-200D-1F527",
		k: [
			18,
			35
		],
		o: 4
	},
	"flag-jm": {
		a: "Jamaica Flag",
		b: "1F1EF-1F1F2",
		k: [
			2,
			34
		],
		o: 2
	},
	grey_question: {
		a: "White Question Mark Ornament",
		b: "2754",
		j: [
			"doubts",
			"gray",
			"huh",
			"confused"
		],
		k: [
			55,
			24
		],
		o: 2
	},
	maple_leaf: {
		a: "Maple Leaf",
		b: "1F341",
		j: [
			"nature",
			"plant",
			"vegetable",
			"ca",
			"fall"
		],
		k: [
			6,
			25
		],
		o: 2
	},
	pound: {
		a: "Banknote with Pound Sign",
		b: "1F4B7",
		j: [
			"british",
			"sterling",
			"money",
			"sales",
			"bills",
			"uk",
			"england",
			"currency"
		],
		k: [
			26,
			13
		],
		o: 2
	},
	money_with_wings: {
		a: "Money with Wings",
		b: "1F4B8",
		j: [
			"dollar",
			"bills",
			"payment",
			"sale"
		],
		k: [
			26,
			14
		],
		o: 2
	},
	"flag-jo": {
		a: "Jordan Flag",
		b: "1F1EF-1F1F4",
		k: [
			2,
			35
		],
		o: 2
	},
	fallen_leaf: {
		a: "Fallen Leaf",
		b: "1F342",
		j: [
			"nature",
			"plant",
			"vegetable",
			"leaves"
		],
		k: [
			6,
			26
		],
		o: 2
	},
	broken_heart: {
		a: "Broken Heart",
		b: "1F494",
		j: [
			"sad",
			"sorry",
			"break",
			"heart",
			"heartbreak"
		],
		k: [
			25,
			30
		],
		l: [
			"</3"
		],
		m: "</3",
		o: 2
	},
	grey_exclamation: {
		a: "White Exclamation Mark Ornament",
		b: "2755",
		j: [
			"surprise",
			"punctuation",
			"gray",
			"wow",
			"warning"
		],
		k: [
			55,
			25
		],
		o: 2
	},
	mountain_cableway: {
		a: "Mountain Cableway",
		b: "1F6A0",
		j: [
			"transportation",
			"vehicle",
			"ski"
		],
		k: [
			34,
			31
		],
		o: 2
	},
	exclamation: {
		a: "Heavy Exclamation Mark Symbol",
		b: "2757",
		j: [
			"heavy_exclamation_mark",
			"danger",
			"surprise",
			"punctuation",
			"wow",
			"warning"
		],
		k: [
			55,
			26
		],
		n: [
			"heavy_exclamation_mark"
		],
		o: 2
	},
	leaves: {
		a: "Leaf Fluttering in Wind",
		b: "1F343",
		j: [
			"nature",
			"plant",
			"tree",
			"vegetable",
			"grass",
			"lawn",
			"spring"
		],
		k: [
			6,
			27
		],
		o: 2
	},
	heart: {
		a: "Heavy Black Heart",
		b: "2764-FE0F",
		c: "2764",
		j: [
			"love",
			"like",
			"valentines"
		],
		k: [
			55,
			28
		],
		l: [
			"<3"
		],
		m: "<3",
		o: 2
	},
	jp: {
		a: "Japan Flag",
		b: "1F1EF-1F1F5",
		j: [
			"japanese",
			"nation",
			"flag",
			"country",
			"banner"
		],
		k: [
			2,
			36
		],
		n: [
			"flag-jp"
		],
		o: 2
	},
	"male-factory-worker": {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F3ED",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f3ed.png",
				sheet_x: 15,
				sheet_y: 18,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F3ED",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f3ed.png",
				sheet_x: 15,
				sheet_y: 19,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F3ED",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f3ed.png",
				sheet_x: 15,
				sheet_y: 20,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F3ED",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f3ed.png",
				sheet_x: 15,
				sheet_y: 21,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F3ED",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f3ed.png",
				sheet_x: 15,
				sheet_y: 22,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Factory Worker",
		b: "1F468-200D-1F3ED",
		k: [
			15,
			17
		],
		o: 4
	},
	credit_card: {
		a: "Credit Card",
		b: "1F4B3",
		j: [
			"money",
			"sales",
			"dollar",
			"bill",
			"payment",
			"shopping"
		],
		k: [
			26,
			9
		],
		o: 2
	},
	aerial_tramway: {
		a: "Aerial Tramway",
		b: "1F6A1",
		j: [
			"transportation",
			"vehicle",
			"ski"
		],
		k: [
			34,
			32
		],
		o: 2
	},
	"female-factory-worker": {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F3ED",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f3ed.png",
				sheet_x: 18,
				sheet_y: 8,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F3ED",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f3ed.png",
				sheet_x: 18,
				sheet_y: 9,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F3ED",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f3ed.png",
				sheet_x: 18,
				sheet_y: 10,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F3ED",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f3ed.png",
				sheet_x: 18,
				sheet_y: 11,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F3ED",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f3ed.png",
				sheet_x: 18,
				sheet_y: 12,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Factory Worker",
		b: "1F469-200D-1F3ED",
		k: [
			18,
			7
		],
		o: 4
	},
	receipt: {
		a: "Receipt",
		b: "1F9FE",
		k: [
			51,
			49
		],
		o: 11
	},
	wavy_dash: {
		a: "Wavy Dash",
		b: "3030-FE0F",
		c: "3030",
		j: [
			"draw",
			"line",
			"moustache",
			"mustache",
			"squiggle",
			"scribble"
		],
		k: [
			55,
			44
		],
		o: 2
	},
	"flag-ke": {
		a: "Kenya Flag",
		b: "1F1F0-1F1EA",
		k: [
			2,
			37
		],
		o: 2
	},
	satellite: {
		a: "Satellite",
		b: "1F6F0-FE0F",
		c: "1F6F0",
		j: [
			"communication",
			"future",
			"radio",
			"space"
		],
		k: [
			36,
			51
		],
		o: 2
	},
	orange_heart: {
		a: "Orange Heart",
		b: "1F9E1",
		k: [
			51,
			20
		],
		o: 5
	},
	yellow_heart: {
		a: "Yellow Heart",
		b: "1F49B",
		j: [
			"love",
			"like",
			"affection",
			"valentines"
		],
		k: [
			25,
			37
		],
		m: "<3",
		o: 2
	},
	copyright: {
		a: "Copyright Sign",
		b: "00A9-FE0F",
		c: "00A9",
		j: [
			"ip",
			"license",
			"circle",
			"law",
			"legal"
		],
		k: [
			0,
			12
		],
		o: 2
	},
	rocket: {
		a: "Rocket",
		b: "1F680",
		j: [
			"launch",
			"ship",
			"staffmode",
			"NASA",
			"outer space",
			"outer_space",
			"fly"
		],
		k: [
			33,
			56
		],
		o: 2
	},
	chart: {
		a: "Chart with Upwards Trend and Yen Sign",
		b: "1F4B9",
		j: [
			"green-square",
			"graph",
			"presentation",
			"stats"
		],
		k: [
			26,
			15
		],
		o: 2
	},
	"flag-kg": {
		a: "Kyrgyzstan Flag",
		b: "1F1F0-1F1EC",
		k: [
			2,
			38
		],
		o: 2
	},
	currency_exchange: {
		a: "Currency Exchange",
		b: "1F4B1",
		j: [
			"money",
			"sales",
			"dollar",
			"travel"
		],
		k: [
			26,
			7
		],
		o: 2
	},
	registered: {
		a: "Registered Sign",
		b: "00AE-FE0F",
		c: "00AE",
		j: [
			"alphabet",
			"circle"
		],
		k: [
			0,
			13
		],
		o: 2
	},
	green_heart: {
		a: "Green Heart",
		b: "1F49A",
		j: [
			"love",
			"like",
			"affection",
			"valentines"
		],
		k: [
			25,
			36
		],
		m: "<3",
		o: 2
	},
	flying_saucer: {
		a: "Flying Saucer",
		b: "1F6F8",
		k: [
			37,
			0
		],
		o: 5
	},
	"flag-kh": {
		a: "Cambodia Flag",
		b: "1F1F0-1F1ED",
		k: [
			2,
			39
		],
		o: 2
	},
	"male-office-worker": {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F4BC",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f4bc.png",
				sheet_x: 15,
				sheet_y: 45,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F4BC",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f4bc.png",
				sheet_x: 15,
				sheet_y: 46,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F4BC",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f4bc.png",
				sheet_x: 15,
				sheet_y: 47,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F4BC",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f4bc.png",
				sheet_x: 15,
				sheet_y: 48,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F4BC",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f4bc.png",
				sheet_x: 15,
				sheet_y: 49,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Office Worker",
		b: "1F468-200D-1F4BC",
		k: [
			15,
			44
		],
		o: 4
	},
	tm: {
		a: "Trade Mark Sign",
		b: "2122-FE0F",
		c: "2122",
		j: [
			"trademark",
			"brand",
			"law",
			"legal"
		],
		k: [
			52,
			12
		],
		o: 2
	},
	bellhop_bell: {
		a: "Bellhop Bell",
		b: "1F6CE-FE0F",
		c: "1F6CE",
		j: [
			"service"
		],
		k: [
			36,
			36
		],
		o: 2
	},
	blue_heart: {
		a: "Blue Heart",
		b: "1F499",
		j: [
			"love",
			"like",
			"affection",
			"valentines"
		],
		k: [
			25,
			35
		],
		m: "<3",
		o: 2
	},
	"flag-ki": {
		a: "Kiribati Flag",
		b: "1F1F0-1F1EE",
		k: [
			2,
			40
		],
		o: 2
	},
	heavy_dollar_sign: {
		a: "Heavy Dollar Sign",
		b: "1F4B2",
		j: [
			"money",
			"sales",
			"payment",
			"currency",
			"buck"
		],
		k: [
			26,
			8
		],
		o: 2
	},
	"female-office-worker": {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F4BC",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f4bc.png",
				sheet_x: 18,
				sheet_y: 30,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F4BC",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f4bc.png",
				sheet_x: 18,
				sheet_y: 31,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F4BC",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f4bc.png",
				sheet_x: 18,
				sheet_y: 32,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F4BC",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f4bc.png",
				sheet_x: 18,
				sheet_y: 33,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F4BC",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f4bc.png",
				sheet_x: 18,
				sheet_y: 34,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Office Worker",
		b: "1F469-200D-1F4BC",
		k: [
			18,
			29
		],
		o: 4
	},
	purple_heart: {
		a: "Purple Heart",
		b: "1F49C",
		j: [
			"love",
			"like",
			"affection",
			"valentines"
		],
		k: [
			25,
			38
		],
		m: "<3",
		o: 2
	},
	luggage: {
		a: "Luggage",
		b: "1F9F3",
		k: [
			51,
			38
		],
		o: 11
	},
	hash: {
		a: "Hash Key",
		b: "0023-FE0F-20E3",
		c: "0023-20E3",
		j: [
			"symbol",
			"blue-square",
			"twitter"
		],
		k: [
			0,
			0
		],
		o: 0
	},
	"flag-km": {
		a: "Comoros Flag",
		b: "1F1F0-1F1F2",
		k: [
			2,
			41
		],
		o: 2
	},
	email: {
		a: "Envelope",
		b: "2709-FE0F",
		c: "2709",
		j: [
			"letter",
			"postal",
			"inbox",
			"communication"
		],
		k: [
			54,
			42
		],
		n: [
			"envelope"
		],
		o: 2
	},
	"e-mail": {
		a: "E-Mail Symbol",
		b: "1F4E7",
		j: [
			"communication",
			"inbox"
		],
		k: [
			27,
			4
		],
		o: 2
	},
	keycap_star: {
		a: "Keycap Star",
		b: "002A-FE0F-20E3",
		c: "002A-20E3",
		k: [
			0,
			1
		],
		o: 0
	},
	"flag-kn": {
		a: "St. Kitts & Nevis Flag",
		b: "1F1F0-1F1F3",
		k: [
			2,
			42
		],
		o: 2
	},
	hourglass: {
		a: "Hourglass",
		b: "231B",
		j: [
			"time",
			"clock",
			"oldschool",
			"limit",
			"exam",
			"quiz",
			"test"
		],
		k: [
			52,
			23
		],
		o: 2
	},
	brown_heart: {
		a: "Brown Heart",
		b: "1F90E",
		k: [
			37,
			16
		],
		o: 12
	},
	"male-scientist": {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F52C",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f52c.png",
				sheet_x: 16,
				sheet_y: 0,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F52C",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f52c.png",
				sheet_x: 16,
				sheet_y: 1,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F52C",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f52c.png",
				sheet_x: 16,
				sheet_y: 2,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F52C",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f52c.png",
				sheet_x: 16,
				sheet_y: 3,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F52C",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f52c.png",
				sheet_x: 16,
				sheet_y: 4,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Scientist",
		b: "1F468-200D-1F52C",
		k: [
			15,
			56
		],
		o: 4
	},
	hourglass_flowing_sand: {
		a: "Hourglass with Flowing Sand",
		b: "23F3",
		j: [
			"oldschool",
			"time",
			"countdown"
		],
		k: [
			52,
			36
		],
		o: 2
	},
	black_heart: {
		a: "Black Heart",
		b: "1F5A4",
		j: [
			"evil"
		],
		k: [
			30,
			9
		],
		o: 4
	},
	zero: {
		a: "Keycap 0",
		b: "0030-FE0F-20E3",
		c: "0030-20E3",
		j: [
			"0",
			"numbers",
			"blue-square",
			"null"
		],
		k: [
			0,
			2
		],
		o: 0
	},
	incoming_envelope: {
		a: "Incoming Envelope",
		b: "1F4E8",
		j: [
			"email",
			"inbox"
		],
		k: [
			27,
			5
		],
		o: 2
	},
	"flag-kp": {
		a: "North Korea Flag",
		b: "1F1F0-1F1F5",
		k: [
			2,
			43
		],
		o: 2
	},
	"female-scientist": {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F52C",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f52c.png",
				sheet_x: 18,
				sheet_y: 42,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F52C",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f52c.png",
				sheet_x: 18,
				sheet_y: 43,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F52C",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f52c.png",
				sheet_x: 18,
				sheet_y: 44,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F52C",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f52c.png",
				sheet_x: 18,
				sheet_y: 45,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F52C",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f52c.png",
				sheet_x: 18,
				sheet_y: 46,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Scientist",
		b: "1F469-200D-1F52C",
		k: [
			18,
			41
		],
		o: 4
	},
	watch: {
		a: "Watch",
		b: "231A",
		j: [
			"time",
			"accessories"
		],
		k: [
			52,
			22
		],
		o: 2
	},
	white_heart: {
		a: "White Heart",
		b: "1F90D",
		k: [
			37,
			15
		],
		o: 12
	},
	one: {
		a: "Keycap 1",
		b: "0031-FE0F-20E3",
		c: "0031-20E3",
		j: [
			"blue-square",
			"numbers",
			"1"
		],
		k: [
			0,
			3
		],
		o: 0
	},
	kr: {
		a: "South Korea Flag",
		b: "1F1F0-1F1F7",
		j: [
			"south",
			"korea",
			"nation",
			"flag",
			"country",
			"banner"
		],
		k: [
			2,
			44
		],
		n: [
			"flag-kr"
		],
		o: 2
	},
	envelope_with_arrow: {
		a: "Envelope with Downwards Arrow Above",
		b: "1F4E9",
		j: [
			"email",
			"communication"
		],
		k: [
			27,
			6
		],
		o: 2
	},
	outbox_tray: {
		a: "Outbox Tray",
		b: "1F4E4",
		j: [
			"inbox",
			"email"
		],
		k: [
			27,
			1
		],
		o: 2
	},
	"male-technologist": {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F4BB",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f4bb.png",
				sheet_x: 15,
				sheet_y: 39,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F4BB",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f4bb.png",
				sheet_x: 15,
				sheet_y: 40,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F4BB",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f4bb.png",
				sheet_x: 15,
				sheet_y: 41,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F4BB",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f4bb.png",
				sheet_x: 15,
				sheet_y: 42,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F4BB",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f4bb.png",
				sheet_x: 15,
				sheet_y: 43,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Technologist",
		b: "1F468-200D-1F4BB",
		k: [
			15,
			38
		],
		o: 4
	},
	alarm_clock: {
		a: "Alarm Clock",
		b: "23F0",
		j: [
			"time",
			"wake"
		],
		k: [
			52,
			33
		],
		o: 2
	},
	"flag-kw": {
		a: "Kuwait Flag",
		b: "1F1F0-1F1FC",
		k: [
			2,
			45
		],
		o: 2
	},
	two: {
		a: "Keycap 2",
		b: "0032-FE0F-20E3",
		c: "0032-20E3",
		j: [
			"numbers",
			"2",
			"prime",
			"blue-square"
		],
		k: [
			0,
			4
		],
		o: 0
	},
	anger: {
		a: "Anger Symbol",
		b: "1F4A2",
		j: [
			"angry",
			"mad"
		],
		k: [
			25,
			44
		],
		o: 2
	},
	inbox_tray: {
		a: "Inbox Tray",
		b: "1F4E5",
		j: [
			"email",
			"documents"
		],
		k: [
			27,
			2
		],
		o: 2
	},
	three: {
		a: "Keycap 3",
		b: "0033-FE0F-20E3",
		c: "0033-20E3",
		j: [
			"3",
			"numbers",
			"prime",
			"blue-square"
		],
		k: [
			0,
			5
		],
		o: 0
	},
	"flag-ky": {
		a: "Cayman Islands Flag",
		b: "1F1F0-1F1FE",
		k: [
			2,
			46
		],
		o: 2
	},
	stopwatch: {
		a: "Stopwatch",
		b: "23F1-FE0F",
		c: "23F1",
		j: [
			"time",
			"deadline"
		],
		k: [
			52,
			34
		],
		o: 2
	},
	"female-technologist": {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F4BB",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f4bb.png",
				sheet_x: 18,
				sheet_y: 24,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F4BB",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f4bb.png",
				sheet_x: 18,
				sheet_y: 25,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F4BB",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f4bb.png",
				sheet_x: 18,
				sheet_y: 26,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F4BB",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f4bb.png",
				sheet_x: 18,
				sheet_y: 27,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F4BB",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f4bb.png",
				sheet_x: 18,
				sheet_y: 28,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Technologist",
		b: "1F469-200D-1F4BB",
		k: [
			18,
			23
		],
		o: 4
	},
	boom: {
		a: "Collision Symbol",
		b: "1F4A5",
		j: [
			"bomb",
			"explode",
			"explosion",
			"collision",
			"blown"
		],
		k: [
			25,
			47
		],
		n: [
			"collision"
		],
		o: 2
	},
	"flag-kz": {
		a: "Kazakhstan Flag",
		b: "1F1F0-1F1FF",
		k: [
			2,
			47
		],
		o: 2
	},
	four: {
		a: "Keycap 4",
		b: "0034-FE0F-20E3",
		c: "0034-20E3",
		j: [
			"4",
			"numbers",
			"blue-square"
		],
		k: [
			0,
			6
		],
		o: 0
	},
	timer_clock: {
		a: "Timer Clock",
		b: "23F2-FE0F",
		c: "23F2",
		j: [
			"alarm"
		],
		k: [
			52,
			35
		],
		o: 2
	},
	"package": {
		a: "Package",
		b: "1F4E6",
		j: [
			"mail",
			"gift",
			"cardboard",
			"box",
			"moving"
		],
		k: [
			27,
			3
		],
		o: 2
	},
	mailbox: {
		a: "Closed Mailbox with Raised Flag",
		b: "1F4EB",
		j: [
			"email",
			"inbox",
			"communication"
		],
		k: [
			27,
			8
		],
		o: 2
	},
	"flag-la": {
		a: "Laos Flag",
		b: "1F1F1-1F1E6",
		k: [
			2,
			48
		],
		o: 2
	},
	dizzy: {
		a: "Dizzy Symbol",
		b: "1F4AB",
		j: [
			"star",
			"sparkle",
			"shoot",
			"magic"
		],
		k: [
			26,
			1
		],
		o: 2
	},
	five: {
		a: "Keycap 5",
		b: "0035-FE0F-20E3",
		c: "0035-20E3",
		j: [
			"5",
			"numbers",
			"blue-square",
			"prime"
		],
		k: [
			0,
			7
		],
		o: 0
	},
	"male-singer": {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F3A4",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f3a4.png",
				sheet_x: 15,
				sheet_y: 0,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F3A4",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f3a4.png",
				sheet_x: 15,
				sheet_y: 1,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F3A4",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f3a4.png",
				sheet_x: 15,
				sheet_y: 2,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F3A4",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f3a4.png",
				sheet_x: 15,
				sheet_y: 3,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F3A4",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f3a4.png",
				sheet_x: 15,
				sheet_y: 4,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Singer",
		b: "1F468-200D-1F3A4",
		k: [
			14,
			56
		],
		o: 4
	},
	mantelpiece_clock: {
		a: "Mantelpiece Clock",
		b: "1F570-FE0F",
		c: "1F570",
		j: [
			"time"
		],
		k: [
			29,
			7
		],
		o: 2
	},
	"female-singer": {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F3A4",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f3a4.png",
				sheet_x: 17,
				sheet_y: 47,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F3A4",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f3a4.png",
				sheet_x: 17,
				sheet_y: 48,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F3A4",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f3a4.png",
				sheet_x: 17,
				sheet_y: 49,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F3A4",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f3a4.png",
				sheet_x: 17,
				sheet_y: 50,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F3A4",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f3a4.png",
				sheet_x: 17,
				sheet_y: 51,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Singer",
		b: "1F469-200D-1F3A4",
		k: [
			17,
			46
		],
		o: 4
	},
	"flag-lb": {
		a: "Lebanon Flag",
		b: "1F1F1-1F1E7",
		k: [
			2,
			49
		],
		o: 2
	},
	six: {
		a: "Keycap 6",
		b: "0036-FE0F-20E3",
		c: "0036-20E3",
		j: [
			"6",
			"numbers",
			"blue-square"
		],
		k: [
			0,
			8
		],
		o: 0
	},
	mailbox_closed: {
		a: "Closed Mailbox with Lowered Flag",
		b: "1F4EA",
		j: [
			"email",
			"communication",
			"inbox"
		],
		k: [
			27,
			7
		],
		o: 2
	},
	sweat_drops: {
		a: "Splashing Sweat Symbol",
		b: "1F4A6",
		j: [
			"water",
			"drip",
			"oops"
		],
		k: [
			25,
			48
		],
		o: 2
	},
	clock12: {
		a: "Clock Face Twelve Oclock",
		b: "1F55B",
		j: [
			"time",
			"noon",
			"midnight",
			"midday",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			50
		],
		o: 2
	},
	seven: {
		a: "Keycap 7",
		b: "0037-FE0F-20E3",
		c: "0037-20E3",
		j: [
			"7",
			"numbers",
			"blue-square",
			"prime"
		],
		k: [
			0,
			9
		],
		o: 0
	},
	mailbox_with_mail: {
		a: "Open Mailbox with Raised Flag",
		b: "1F4EC",
		j: [
			"email",
			"inbox",
			"communication"
		],
		k: [
			27,
			9
		],
		o: 2
	},
	clock1230: {
		a: "Clock Face Twelve-Thirty",
		b: "1F567",
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			29,
			5
		],
		o: 2
	},
	dash: {
		a: "Dash Symbol",
		b: "1F4A8",
		j: [
			"wind",
			"air",
			"fast",
			"shoo",
			"fart",
			"smoke",
			"puff"
		],
		k: [
			25,
			50
		],
		o: 2
	},
	"flag-lc": {
		a: "St. Lucia Flag",
		b: "1F1F1-1F1E8",
		k: [
			2,
			50
		],
		o: 2
	},
	hole: {
		a: "Hole",
		b: "1F573-FE0F",
		c: "1F573",
		j: [
			"embarrassing"
		],
		k: [
			29,
			8
		],
		o: 2
	},
	"male-artist": {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F3A8",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f3a8.png",
				sheet_x: 15,
				sheet_y: 6,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F3A8",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f3a8.png",
				sheet_x: 15,
				sheet_y: 7,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F3A8",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f3a8.png",
				sheet_x: 15,
				sheet_y: 8,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F3A8",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f3a8.png",
				sheet_x: 15,
				sheet_y: 9,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F3A8",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f3a8.png",
				sheet_x: 15,
				sheet_y: 10,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Artist",
		b: "1F468-200D-1F3A8",
		k: [
			15,
			5
		],
		o: 4
	},
	clock1: {
		a: "Clock Face One Oclock",
		b: "1F550",
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			39
		],
		o: 2
	},
	eight: {
		a: "Keycap 8",
		b: "0038-FE0F-20E3",
		c: "0038-20E3",
		j: [
			"8",
			"blue-square",
			"numbers"
		],
		k: [
			0,
			10
		],
		o: 0
	},
	mailbox_with_no_mail: {
		a: "Open Mailbox with Lowered Flag",
		b: "1F4ED",
		j: [
			"email",
			"inbox"
		],
		k: [
			27,
			10
		],
		o: 2
	},
	"flag-li": {
		a: "Liechtenstein Flag",
		b: "1F1F1-1F1EE",
		k: [
			2,
			51
		],
		o: 2
	},
	bomb: {
		a: "Bomb",
		b: "1F4A3",
		j: [
			"boom",
			"explode",
			"explosion",
			"terrorism"
		],
		k: [
			25,
			45
		],
		o: 2
	},
	nine: {
		a: "Keycap 9",
		b: "0039-FE0F-20E3",
		c: "0039-20E3",
		j: [
			"blue-square",
			"numbers",
			"9"
		],
		k: [
			0,
			11
		],
		o: 0
	},
	postbox: {
		a: "Postbox",
		b: "1F4EE",
		j: [
			"email",
			"letter",
			"envelope"
		],
		k: [
			27,
			11
		],
		o: 2
	},
	"female-artist": {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F3A8",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f3a8.png",
				sheet_x: 17,
				sheet_y: 53,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F3A8",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f3a8.png",
				sheet_x: 17,
				sheet_y: 54,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F3A8",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f3a8.png",
				sheet_x: 17,
				sheet_y: 55,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F3A8",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f3a8.png",
				sheet_x: 17,
				sheet_y: 56,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F3A8",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f3a8.png",
				sheet_x: 18,
				sheet_y: 0,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Artist",
		b: "1F469-200D-1F3A8",
		k: [
			17,
			52
		],
		o: 4
	},
	clock130: {
		a: "Clock Face One-Thirty",
		b: "1F55C",
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			51
		],
		o: 2
	},
	"flag-lk": {
		a: "Sri Lanka Flag",
		b: "1F1F1-1F1F0",
		k: [
			2,
			52
		],
		o: 2
	},
	ballot_box_with_ballot: {
		a: "Ballot Box with Ballot",
		b: "1F5F3-FE0F",
		c: "1F5F3",
		k: [
			30,
			28
		],
		o: 2
	},
	keycap_ten: {
		a: "Keycap Ten",
		b: "1F51F",
		j: [
			"numbers",
			"10",
			"blue-square"
		],
		k: [
			28,
			2
		],
		o: 2
	},
	clock2: {
		a: "Clock Face Two Oclock",
		b: "1F551",
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			40
		],
		o: 2
	},
	"flag-lr": {
		a: "Liberia Flag",
		b: "1F1F1-1F1F7",
		k: [
			2,
			53
		],
		o: 2
	},
	speech_balloon: {
		a: "Speech Balloon",
		b: "1F4AC",
		j: [
			"bubble",
			"words",
			"message",
			"talk",
			"chatting"
		],
		k: [
			26,
			2
		],
		o: 2
	},
	"eye-in-speech-bubble": {
		a: "Eye in Speech Bubble",
		b: "1F441-FE0F-200D-1F5E8-FE0F",
		k: [
			12,
			37
		],
		o: 2
	},
	"flag-ls": {
		a: "Lesotho Flag",
		b: "1F1F1-1F1F8",
		k: [
			2,
			54
		],
		o: 2
	},
	clock230: {
		a: "Clock Face Two-Thirty",
		b: "1F55D",
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			52
		],
		o: 2
	},
	"male-pilot": {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-2708-FE0F",
				non_qualified: "1F468-1F3FB-200D-2708",
				image: "1f468-1f3fb-200d-2708-fe0f.png",
				sheet_x: 17,
				sheet_y: 15,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-2708-FE0F",
				non_qualified: "1F468-1F3FC-200D-2708",
				image: "1f468-1f3fc-200d-2708-fe0f.png",
				sheet_x: 17,
				sheet_y: 16,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-2708-FE0F",
				non_qualified: "1F468-1F3FD-200D-2708",
				image: "1f468-1f3fd-200d-2708-fe0f.png",
				sheet_x: 17,
				sheet_y: 17,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-2708-FE0F",
				non_qualified: "1F468-1F3FE-200D-2708",
				image: "1f468-1f3fe-200d-2708-fe0f.png",
				sheet_x: 17,
				sheet_y: 18,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-2708-FE0F",
				non_qualified: "1F468-1F3FF-200D-2708",
				image: "1f468-1f3ff-200d-2708-fe0f.png",
				sheet_x: 17,
				sheet_y: 19,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Pilot",
		b: "1F468-200D-2708-FE0F",
		c: "1F468-200D-2708",
		k: [
			17,
			14
		],
		o: 4
	},
	capital_abcd: {
		a: "Input Symbol for Latin Capital Letters",
		b: "1F520",
		j: [
			"alphabet",
			"words",
			"blue-square"
		],
		k: [
			28,
			3
		],
		o: 2
	},
	pencil2: {
		a: "Pencil",
		b: "270F-FE0F",
		c: "270F",
		j: [
			"stationery",
			"write",
			"paper",
			"writing",
			"school",
			"study"
		],
		k: [
			55,
			10
		],
		o: 2
	},
	"female-pilot": {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-2708-FE0F",
				non_qualified: "1F469-1F3FB-200D-2708",
				image: "1f469-1f3fb-200d-2708-fe0f.png",
				sheet_x: 20,
				sheet_y: 0,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-2708-FE0F",
				non_qualified: "1F469-1F3FC-200D-2708",
				image: "1f469-1f3fc-200d-2708-fe0f.png",
				sheet_x: 20,
				sheet_y: 1,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-2708-FE0F",
				non_qualified: "1F469-1F3FD-200D-2708",
				image: "1f469-1f3fd-200d-2708-fe0f.png",
				sheet_x: 20,
				sheet_y: 2,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-2708-FE0F",
				non_qualified: "1F469-1F3FE-200D-2708",
				image: "1f469-1f3fe-200d-2708-fe0f.png",
				sheet_x: 20,
				sheet_y: 3,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-2708-FE0F",
				non_qualified: "1F469-1F3FF-200D-2708",
				image: "1f469-1f3ff-200d-2708-fe0f.png",
				sheet_x: 20,
				sheet_y: 4,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Pilot",
		b: "1F469-200D-2708-FE0F",
		c: "1F469-200D-2708",
		k: [
			19,
			56
		],
		o: 4
	},
	black_nib: {
		a: "Black Nib",
		b: "2712-FE0F",
		c: "2712",
		j: [
			"pen",
			"stationery",
			"writing",
			"write"
		],
		k: [
			55,
			11
		],
		o: 2
	},
	left_speech_bubble: {
		a: "Left Speech Bubble",
		b: "1F5E8-FE0F",
		c: "1F5E8",
		j: [
			"words",
			"message",
			"talk",
			"chatting"
		],
		k: [
			30,
			26
		],
		o: 2
	},
	clock3: {
		a: "Clock Face Three Oclock",
		b: "1F552",
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			41
		],
		o: 2
	},
	abcd: {
		a: "Input Symbol for Latin Small Letters",
		b: "1F521",
		j: [
			"blue-square",
			"alphabet"
		],
		k: [
			28,
			4
		],
		o: 2
	},
	"flag-lt": {
		a: "Lithuania Flag",
		b: "1F1F1-1F1F9",
		k: [
			2,
			55
		],
		o: 2
	},
	clock330: {
		a: "Clock Face Three-Thirty",
		b: "1F55E",
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			53
		],
		o: 2
	},
	"flag-lu": {
		a: "Luxembourg Flag",
		b: "1F1F1-1F1FA",
		k: [
			2,
			56
		],
		o: 2
	},
	right_anger_bubble: {
		a: "Right Anger Bubble",
		b: "1F5EF-FE0F",
		c: "1F5EF",
		j: [
			"caption",
			"speech",
			"thinking",
			"mad"
		],
		k: [
			30,
			27
		],
		o: 2
	},
	lower_left_fountain_pen: {
		a: "Lower Left Fountain Pen",
		b: "1F58B-FE0F",
		c: "1F58B",
		k: [
			29,
			45
		],
		o: 2
	},
	"male-astronaut": {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F680",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f680.png",
				sheet_x: 16,
				sheet_y: 6,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F680",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f680.png",
				sheet_x: 16,
				sheet_y: 7,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F680",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f680.png",
				sheet_x: 16,
				sheet_y: 8,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F680",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f680.png",
				sheet_x: 16,
				sheet_y: 9,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F680",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f680.png",
				sheet_x: 16,
				sheet_y: 10,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Astronaut",
		b: "1F468-200D-1F680",
		k: [
			16,
			5
		],
		o: 4
	},
	thought_balloon: {
		a: "Thought Balloon",
		b: "1F4AD",
		j: [
			"bubble",
			"cloud",
			"speech",
			"thinking",
			"dream"
		],
		k: [
			26,
			3
		],
		o: 2
	},
	symbols: {
		a: "Input Symbol for Symbols",
		b: "1F523",
		j: [
			"blue-square",
			"music",
			"note",
			"ampersand",
			"percent",
			"glyphs",
			"characters"
		],
		k: [
			28,
			6
		],
		o: 2
	},
	clock4: {
		a: "Clock Face Four Oclock",
		b: "1F553",
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			42
		],
		o: 2
	},
	"flag-lv": {
		a: "Latvia Flag",
		b: "1F1F1-1F1FB",
		k: [
			3,
			0
		],
		o: 2
	},
	lower_left_ballpoint_pen: {
		a: "Lower Left Ballpoint Pen",
		b: "1F58A-FE0F",
		c: "1F58A",
		k: [
			29,
			44
		],
		o: 2
	},
	abc: {
		a: "Input Symbol for Latin Letters",
		b: "1F524",
		j: [
			"blue-square",
			"alphabet"
		],
		k: [
			28,
			7
		],
		o: 2
	},
	zzz: {
		a: "Sleeping Symbol",
		b: "1F4A4",
		j: [
			"sleepy",
			"tired",
			"dream"
		],
		k: [
			25,
			46
		],
		o: 2
	},
	lower_left_paintbrush: {
		a: "Lower Left Paintbrush",
		b: "1F58C-FE0F",
		c: "1F58C",
		k: [
			29,
			46
		],
		o: 2
	},
	"female-astronaut": {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F680",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f680.png",
				sheet_x: 18,
				sheet_y: 48,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F680",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f680.png",
				sheet_x: 18,
				sheet_y: 49,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F680",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f680.png",
				sheet_x: 18,
				sheet_y: 50,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F680",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f680.png",
				sheet_x: 18,
				sheet_y: 51,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F680",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f680.png",
				sheet_x: 18,
				sheet_y: 52,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Astronaut",
		b: "1F469-200D-1F680",
		k: [
			18,
			47
		],
		o: 4
	},
	"flag-ly": {
		a: "Libya Flag",
		b: "1F1F1-1F1FE",
		k: [
			3,
			1
		],
		o: 2
	},
	clock430: {
		a: "Clock Face Four-Thirty",
		b: "1F55F",
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			54
		],
		o: 2
	},
	"flag-ma": {
		a: "Morocco Flag",
		b: "1F1F2-1F1E6",
		k: [
			3,
			2
		],
		o: 2
	},
	a: {
		a: "Negative Squared Latin Capital Letter a",
		b: "1F170-FE0F",
		c: "1F170",
		j: [
			"red-square",
			"alphabet",
			"letter"
		],
		k: [
			0,
			16
		],
		o: 2
	},
	clock5: {
		a: "Clock Face Five Oclock",
		b: "1F554",
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			43
		],
		o: 2
	},
	lower_left_crayon: {
		a: "Lower Left Crayon",
		b: "1F58D-FE0F",
		c: "1F58D",
		k: [
			29,
			47
		],
		o: 2
	},
	"male-firefighter": {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F692",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f692.png",
				sheet_x: 16,
				sheet_y: 12,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F692",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f692.png",
				sheet_x: 16,
				sheet_y: 13,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F692",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f692.png",
				sheet_x: 16,
				sheet_y: 14,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F692",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f692.png",
				sheet_x: 16,
				sheet_y: 15,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F692",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f692.png",
				sheet_x: 16,
				sheet_y: 16,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Firefighter",
		b: "1F468-200D-1F692",
		k: [
			16,
			11
		],
		o: 4
	},
	memo: {
		a: "Memo",
		b: "1F4DD",
		j: [
			"write",
			"documents",
			"stationery",
			"pencil",
			"paper",
			"writing",
			"legal",
			"exam",
			"quiz",
			"test",
			"study",
			"compose"
		],
		k: [
			26,
			51
		],
		n: [
			"pencil"
		],
		o: 2
	},
	ab: {
		a: "Negative Squared Ab",
		b: "1F18E",
		j: [
			"red-square",
			"alphabet"
		],
		k: [
			0,
			20
		],
		o: 2
	},
	"flag-mc": {
		a: "Monaco Flag",
		b: "1F1F2-1F1E8",
		k: [
			3,
			3
		],
		o: 2
	},
	clock530: {
		a: "Clock Face Five-Thirty",
		b: "1F560",
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			55
		],
		o: 2
	},
	briefcase: {
		a: "Briefcase",
		b: "1F4BC",
		j: [
			"business",
			"documents",
			"work",
			"law",
			"legal",
			"job",
			"career"
		],
		k: [
			26,
			18
		],
		o: 2
	},
	"female-firefighter": {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F692",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f692.png",
				sheet_x: 18,
				sheet_y: 54,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F692",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f692.png",
				sheet_x: 18,
				sheet_y: 55,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F692",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f692.png",
				sheet_x: 18,
				sheet_y: 56,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F692",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f692.png",
				sheet_x: 19,
				sheet_y: 0,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F692",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f692.png",
				sheet_x: 19,
				sheet_y: 1,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Firefighter",
		b: "1F469-200D-1F692",
		k: [
			18,
			53
		],
		o: 4
	},
	clock6: {
		a: "Clock Face Six Oclock",
		b: "1F555",
		j: [
			"time",
			"late",
			"early",
			"schedule",
			"dawn",
			"dusk"
		],
		k: [
			28,
			44
		],
		o: 2
	},
	b: {
		a: "Negative Squared Latin Capital Letter B",
		b: "1F171-FE0F",
		c: "1F171",
		j: [
			"red-square",
			"alphabet",
			"letter"
		],
		k: [
			0,
			17
		],
		o: 2
	},
	"flag-md": {
		a: "Moldova Flag",
		b: "1F1F2-1F1E9",
		k: [
			3,
			4
		],
		o: 2
	},
	clock630: {
		a: "Clock Face Six-Thirty",
		b: "1F561",
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			56
		],
		o: 2
	},
	cl: {
		a: "Squared Cl",
		b: "1F191",
		j: [
			"alphabet",
			"words",
			"red-square"
		],
		k: [
			0,
			21
		],
		o: 2
	},
	"flag-me": {
		a: "Montenegro Flag",
		b: "1F1F2-1F1EA",
		k: [
			3,
			5
		],
		o: 2
	},
	file_folder: {
		a: "File Folder",
		b: "1F4C1",
		j: [
			"documents",
			"business",
			"office"
		],
		k: [
			26,
			23
		],
		o: 2
	},
	cop: {
		skin_variations: {
			"1F3FB": {
				unified: "1F46E-1F3FB",
				non_qualified: null,
				image: "1f46e-1f3fb.png",
				sheet_x: 21,
				sheet_y: 50,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F46E-1F3FC",
				non_qualified: null,
				image: "1f46e-1f3fc.png",
				sheet_x: 21,
				sheet_y: 51,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F46E-1F3FD",
				non_qualified: null,
				image: "1f46e-1f3fd.png",
				sheet_x: 21,
				sheet_y: 52,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F46E-1F3FE",
				non_qualified: null,
				image: "1f46e-1f3fe.png",
				sheet_x: 21,
				sheet_y: 53,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F46E-1F3FF",
				non_qualified: null,
				image: "1f46e-1f3ff.png",
				sheet_x: 21,
				sheet_y: 54,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F46E-200D-2642-FE0F",
		a: "Police Officer",
		b: "1F46E",
		k: [
			21,
			49
		],
		o: 2
	},
	"male-police-officer": {
		skin_variations: {
			"1F3FB": {
				unified: "1F46E-1F3FB-200D-2642-FE0F",
				non_qualified: "1F46E-1F3FB-200D-2642",
				image: "1f46e-1f3fb-200d-2642-fe0f.png",
				sheet_x: 21,
				sheet_y: 44,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F46E-1F3FC-200D-2642-FE0F",
				non_qualified: "1F46E-1F3FC-200D-2642",
				image: "1f46e-1f3fc-200d-2642-fe0f.png",
				sheet_x: 21,
				sheet_y: 45,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F46E-1F3FD-200D-2642-FE0F",
				non_qualified: "1F46E-1F3FD-200D-2642",
				image: "1f46e-1f3fd-200d-2642-fe0f.png",
				sheet_x: 21,
				sheet_y: 46,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F46E-1F3FE-200D-2642-FE0F",
				non_qualified: "1F46E-1F3FE-200D-2642",
				image: "1f46e-1f3fe-200d-2642-fe0f.png",
				sheet_x: 21,
				sheet_y: 47,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F46E-1F3FF-200D-2642-FE0F",
				non_qualified: "1F46E-1F3FF-200D-2642",
				image: "1f46e-1f3ff-200d-2642-fe0f.png",
				sheet_x: 21,
				sheet_y: 48,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F46E",
		a: "Male Police Officer",
		b: "1F46E-200D-2642-FE0F",
		c: "1F46E-200D-2642",
		k: [
			21,
			43
		],
		o: 4
	},
	cool: {
		a: "Squared Cool",
		b: "1F192",
		j: [
			"words",
			"blue-square"
		],
		k: [
			0,
			22
		],
		o: 2
	},
	clock7: {
		a: "Clock Face Seven Oclock",
		b: "1F556",
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			45
		],
		o: 2
	},
	"flag-mf": {
		a: "St. Martin Flag",
		b: "1F1F2-1F1EB",
		k: [
			3,
			6
		],
		o: 2
	},
	open_file_folder: {
		a: "Open File Folder",
		b: "1F4C2",
		j: [
			"documents",
			"load"
		],
		k: [
			26,
			24
		],
		o: 2
	},
	card_index_dividers: {
		a: "Card Index Dividers",
		b: "1F5C2-FE0F",
		c: "1F5C2",
		j: [
			"organizing",
			"business",
			"stationery"
		],
		k: [
			30,
			15
		],
		o: 2
	},
	"flag-mg": {
		a: "Madagascar Flag",
		b: "1F1F2-1F1EC",
		k: [
			3,
			7
		],
		o: 2
	},
	free: {
		a: "Squared Free",
		b: "1F193",
		j: [
			"blue-square",
			"words"
		],
		k: [
			0,
			23
		],
		o: 2
	},
	"female-police-officer": {
		skin_variations: {
			"1F3FB": {
				unified: "1F46E-1F3FB-200D-2640-FE0F",
				non_qualified: "1F46E-1F3FB-200D-2640",
				image: "1f46e-1f3fb-200d-2640-fe0f.png",
				sheet_x: 21,
				sheet_y: 38,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F46E-1F3FC-200D-2640-FE0F",
				non_qualified: "1F46E-1F3FC-200D-2640",
				image: "1f46e-1f3fc-200d-2640-fe0f.png",
				sheet_x: 21,
				sheet_y: 39,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F46E-1F3FD-200D-2640-FE0F",
				non_qualified: "1F46E-1F3FD-200D-2640",
				image: "1f46e-1f3fd-200d-2640-fe0f.png",
				sheet_x: 21,
				sheet_y: 40,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F46E-1F3FE-200D-2640-FE0F",
				non_qualified: "1F46E-1F3FE-200D-2640",
				image: "1f46e-1f3fe-200d-2640-fe0f.png",
				sheet_x: 21,
				sheet_y: 41,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F46E-1F3FF-200D-2640-FE0F",
				non_qualified: "1F46E-1F3FF-200D-2640",
				image: "1f46e-1f3ff-200d-2640-fe0f.png",
				sheet_x: 21,
				sheet_y: 42,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Police Officer",
		b: "1F46E-200D-2640-FE0F",
		c: "1F46E-200D-2640",
		k: [
			21,
			37
		],
		o: 4
	},
	clock730: {
		a: "Clock Face Seven-Thirty",
		b: "1F562",
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			29,
			0
		],
		o: 2
	},
	date: {
		a: "Calendar",
		b: "1F4C5",
		j: [
			"calendar",
			"schedule"
		],
		k: [
			26,
			27
		],
		o: 2
	},
	clock8: {
		a: "Clock Face Eight Oclock",
		b: "1F557",
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			46
		],
		o: 2
	},
	information_source: {
		a: "Information Source",
		b: "2139-FE0F",
		c: "2139",
		j: [
			"blue-square",
			"alphabet",
			"letter"
		],
		k: [
			52,
			13
		],
		o: 2
	},
	sleuth_or_spy: {
		skin_variations: {
			"1F3FB": {
				unified: "1F575-1F3FB",
				non_qualified: null,
				image: "1f575-1f3fb.png",
				sheet_x: 29,
				sheet_y: 28,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F575-1F3FC",
				non_qualified: null,
				image: "1f575-1f3fc.png",
				sheet_x: 29,
				sheet_y: 29,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F575-1F3FD",
				non_qualified: null,
				image: "1f575-1f3fd.png",
				sheet_x: 29,
				sheet_y: 30,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F575-1F3FE",
				non_qualified: null,
				image: "1f575-1f3fe.png",
				sheet_x: 29,
				sheet_y: 31,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F575-1F3FF",
				non_qualified: null,
				image: "1f575-1f3ff.png",
				sheet_x: 29,
				sheet_y: 32,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F575-FE0F-200D-2642-FE0F",
		a: "Sleuth or Spy",
		b: "1F575-FE0F",
		c: "1F575",
		k: [
			29,
			27
		],
		o: 2
	},
	"flag-mh": {
		a: "Marshall Islands Flag",
		b: "1F1F2-1F1ED",
		k: [
			3,
			8
		],
		o: 2
	},
	clock830: {
		a: "Clock Face Eight-Thirty",
		b: "1F563",
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			29,
			1
		],
		o: 2
	},
	calendar: {
		a: "Tear-off Calendar",
		b: "1F4C6",
		j: [
			"schedule",
			"date",
			"planning"
		],
		k: [
			26,
			28
		],
		o: 2
	},
	"male-detective": {
		skin_variations: {
			"1F3FB": {
				unified: "1F575-1F3FB-200D-2642-FE0F",
				non_qualified: "1F575-1F3FB-200D-2642",
				image: "1f575-1f3fb-200d-2642-fe0f.png",
				sheet_x: 29,
				sheet_y: 22,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F575-1F3FC-200D-2642-FE0F",
				non_qualified: "1F575-1F3FC-200D-2642",
				image: "1f575-1f3fc-200d-2642-fe0f.png",
				sheet_x: 29,
				sheet_y: 23,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F575-1F3FD-200D-2642-FE0F",
				non_qualified: "1F575-1F3FD-200D-2642",
				image: "1f575-1f3fd-200d-2642-fe0f.png",
				sheet_x: 29,
				sheet_y: 24,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F575-1F3FE-200D-2642-FE0F",
				non_qualified: "1F575-1F3FE-200D-2642",
				image: "1f575-1f3fe-200d-2642-fe0f.png",
				sheet_x: 29,
				sheet_y: 25,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F575-1F3FF-200D-2642-FE0F",
				non_qualified: "1F575-1F3FF-200D-2642",
				image: "1f575-1f3ff-200d-2642-fe0f.png",
				sheet_x: 29,
				sheet_y: 26,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F575-FE0F",
		a: "Male Detective",
		b: "1F575-FE0F-200D-2642-FE0F",
		k: [
			29,
			21
		],
		o: 4
	},
	"flag-mk": {
		a: "North Macedonia Flag",
		b: "1F1F2-1F1F0",
		k: [
			3,
			9
		],
		o: 2
	},
	id: {
		a: "Squared Id",
		b: "1F194",
		j: [
			"purple-square",
			"words"
		],
		k: [
			0,
			24
		],
		o: 2
	},
	spiral_note_pad: {
		a: "Spiral Note Pad",
		b: "1F5D2-FE0F",
		c: "1F5D2",
		k: [
			30,
			19
		],
		o: 2
	},
	"female-detective": {
		skin_variations: {
			"1F3FB": {
				unified: "1F575-1F3FB-200D-2640-FE0F",
				non_qualified: "1F575-1F3FB-200D-2640",
				image: "1f575-1f3fb-200d-2640-fe0f.png",
				sheet_x: 29,
				sheet_y: 16,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F575-1F3FC-200D-2640-FE0F",
				non_qualified: "1F575-1F3FC-200D-2640",
				image: "1f575-1f3fc-200d-2640-fe0f.png",
				sheet_x: 29,
				sheet_y: 17,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F575-1F3FD-200D-2640-FE0F",
				non_qualified: "1F575-1F3FD-200D-2640",
				image: "1f575-1f3fd-200d-2640-fe0f.png",
				sheet_x: 29,
				sheet_y: 18,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F575-1F3FE-200D-2640-FE0F",
				non_qualified: "1F575-1F3FE-200D-2640",
				image: "1f575-1f3fe-200d-2640-fe0f.png",
				sheet_x: 29,
				sheet_y: 19,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F575-1F3FF-200D-2640-FE0F",
				non_qualified: "1F575-1F3FF-200D-2640",
				image: "1f575-1f3ff-200d-2640-fe0f.png",
				sheet_x: 29,
				sheet_y: 20,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Detective",
		b: "1F575-FE0F-200D-2640-FE0F",
		k: [
			29,
			15
		],
		o: 4
	},
	clock9: {
		a: "Clock Face Nine Oclock",
		b: "1F558",
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			47
		],
		o: 2
	},
	"flag-ml": {
		a: "Mali Flag",
		b: "1F1F2-1F1F1",
		k: [
			3,
			10
		],
		o: 2
	},
	m: {
		a: "Circled Latin Capital Letter M",
		b: "24C2-FE0F",
		c: "24C2",
		j: [
			"alphabet",
			"blue-circle",
			"letter"
		],
		k: [
			52,
			40
		],
		o: 2
	},
	"flag-mm": {
		a: "Myanmar (burma) Flag",
		b: "1F1F2-1F1F2",
		k: [
			3,
			11
		],
		o: 2
	},
	clock930: {
		a: "Clock Face Nine-Thirty",
		b: "1F564",
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			29,
			2
		],
		o: 2
	},
	guardsman: {
		skin_variations: {
			"1F3FB": {
				unified: "1F482-1F3FB",
				non_qualified: null,
				image: "1f482-1f3fb.png",
				sheet_x: 24,
				sheet_y: 21,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F482-1F3FC",
				non_qualified: null,
				image: "1f482-1f3fc.png",
				sheet_x: 24,
				sheet_y: 22,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F482-1F3FD",
				non_qualified: null,
				image: "1f482-1f3fd.png",
				sheet_x: 24,
				sheet_y: 23,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F482-1F3FE",
				non_qualified: null,
				image: "1f482-1f3fe.png",
				sheet_x: 24,
				sheet_y: 24,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F482-1F3FF",
				non_qualified: null,
				image: "1f482-1f3ff.png",
				sheet_x: 24,
				sheet_y: 25,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F482-200D-2642-FE0F",
		a: "Guardsman",
		b: "1F482",
		j: [
			"uk",
			"gb",
			"british",
			"male",
			"guy",
			"royal"
		],
		k: [
			24,
			20
		],
		o: 2
	},
	"new": {
		a: "Squared New",
		b: "1F195",
		j: [
			"blue-square",
			"words",
			"start"
		],
		k: [
			0,
			25
		],
		o: 2
	},
	spiral_calendar_pad: {
		a: "Spiral Calendar Pad",
		b: "1F5D3-FE0F",
		c: "1F5D3",
		k: [
			30,
			20
		],
		o: 2
	},
	ng: {
		a: "Squared Ng",
		b: "1F196",
		j: [
			"blue-square",
			"words",
			"shape",
			"icon"
		],
		k: [
			0,
			26
		],
		o: 2
	},
	card_index: {
		a: "Card Index",
		b: "1F4C7",
		j: [
			"business",
			"stationery"
		],
		k: [
			26,
			29
		],
		o: 2
	},
	clock10: {
		a: "Clock Face Ten Oclock",
		b: "1F559",
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			48
		],
		o: 2
	},
	"flag-mn": {
		a: "Mongolia Flag",
		b: "1F1F2-1F1F3",
		k: [
			3,
			12
		],
		o: 2
	},
	"male-guard": {
		skin_variations: {
			"1F3FB": {
				unified: "1F482-1F3FB-200D-2642-FE0F",
				non_qualified: "1F482-1F3FB-200D-2642",
				image: "1f482-1f3fb-200d-2642-fe0f.png",
				sheet_x: 24,
				sheet_y: 15,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F482-1F3FC-200D-2642-FE0F",
				non_qualified: "1F482-1F3FC-200D-2642",
				image: "1f482-1f3fc-200d-2642-fe0f.png",
				sheet_x: 24,
				sheet_y: 16,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F482-1F3FD-200D-2642-FE0F",
				non_qualified: "1F482-1F3FD-200D-2642",
				image: "1f482-1f3fd-200d-2642-fe0f.png",
				sheet_x: 24,
				sheet_y: 17,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F482-1F3FE-200D-2642-FE0F",
				non_qualified: "1F482-1F3FE-200D-2642",
				image: "1f482-1f3fe-200d-2642-fe0f.png",
				sheet_x: 24,
				sheet_y: 18,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F482-1F3FF-200D-2642-FE0F",
				non_qualified: "1F482-1F3FF-200D-2642",
				image: "1f482-1f3ff-200d-2642-fe0f.png",
				sheet_x: 24,
				sheet_y: 19,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F482",
		a: "Male Guard",
		b: "1F482-200D-2642-FE0F",
		c: "1F482-200D-2642",
		k: [
			24,
			14
		],
		o: 4
	},
	"flag-mo": {
		a: "Macao Sar China Flag",
		b: "1F1F2-1F1F4",
		k: [
			3,
			13
		],
		o: 2
	},
	clock1030: {
		a: "Clock Face Ten-Thirty",
		b: "1F565",
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			29,
			3
		],
		o: 2
	},
	chart_with_upwards_trend: {
		a: "Chart with Upwards Trend",
		b: "1F4C8",
		j: [
			"graph",
			"presentation",
			"stats",
			"recovery",
			"business",
			"economics",
			"money",
			"sales",
			"good",
			"success"
		],
		k: [
			26,
			30
		],
		o: 2
	},
	o2: {
		a: "Negative Squared Latin Capital Letter O",
		b: "1F17E-FE0F",
		c: "1F17E",
		j: [
			"alphabet",
			"red-square",
			"letter"
		],
		k: [
			0,
			18
		],
		o: 2
	},
	"female-guard": {
		skin_variations: {
			"1F3FB": {
				unified: "1F482-1F3FB-200D-2640-FE0F",
				non_qualified: "1F482-1F3FB-200D-2640",
				image: "1f482-1f3fb-200d-2640-fe0f.png",
				sheet_x: 24,
				sheet_y: 9,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F482-1F3FC-200D-2640-FE0F",
				non_qualified: "1F482-1F3FC-200D-2640",
				image: "1f482-1f3fc-200d-2640-fe0f.png",
				sheet_x: 24,
				sheet_y: 10,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F482-1F3FD-200D-2640-FE0F",
				non_qualified: "1F482-1F3FD-200D-2640",
				image: "1f482-1f3fd-200d-2640-fe0f.png",
				sheet_x: 24,
				sheet_y: 11,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F482-1F3FE-200D-2640-FE0F",
				non_qualified: "1F482-1F3FE-200D-2640",
				image: "1f482-1f3fe-200d-2640-fe0f.png",
				sheet_x: 24,
				sheet_y: 12,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F482-1F3FF-200D-2640-FE0F",
				non_qualified: "1F482-1F3FF-200D-2640",
				image: "1f482-1f3ff-200d-2640-fe0f.png",
				sheet_x: 24,
				sheet_y: 13,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Guard",
		b: "1F482-200D-2640-FE0F",
		c: "1F482-200D-2640",
		k: [
			24,
			8
		],
		o: 4
	},
	chart_with_downwards_trend: {
		a: "Chart with Downwards Trend",
		b: "1F4C9",
		j: [
			"graph",
			"presentation",
			"stats",
			"recession",
			"business",
			"economics",
			"money",
			"sales",
			"bad",
			"failure"
		],
		k: [
			26,
			31
		],
		o: 2
	},
	"flag-mp": {
		a: "Northern Mariana Islands Flag",
		b: "1F1F2-1F1F5",
		k: [
			3,
			14
		],
		o: 2
	},
	ok: {
		a: "Squared Ok",
		b: "1F197",
		j: [
			"good",
			"agree",
			"yes",
			"blue-square"
		],
		k: [
			0,
			27
		],
		o: 2
	},
	clock11: {
		a: "Clock Face Eleven Oclock",
		b: "1F55A",
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			49
		],
		o: 2
	},
	construction_worker: {
		skin_variations: {
			"1F3FB": {
				unified: "1F477-1F3FB",
				non_qualified: null,
				image: "1f477-1f3fb.png",
				sheet_x: 23,
				sheet_y: 23,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F477-1F3FC",
				non_qualified: null,
				image: "1f477-1f3fc.png",
				sheet_x: 23,
				sheet_y: 24,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F477-1F3FD",
				non_qualified: null,
				image: "1f477-1f3fd.png",
				sheet_x: 23,
				sheet_y: 25,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F477-1F3FE",
				non_qualified: null,
				image: "1f477-1f3fe.png",
				sheet_x: 23,
				sheet_y: 26,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F477-1F3FF",
				non_qualified: null,
				image: "1f477-1f3ff.png",
				sheet_x: 23,
				sheet_y: 27,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F477-200D-2642-FE0F",
		a: "Construction Worker",
		b: "1F477",
		k: [
			23,
			22
		],
		o: 2
	},
	"male-construction-worker": {
		skin_variations: {
			"1F3FB": {
				unified: "1F477-1F3FB-200D-2642-FE0F",
				non_qualified: "1F477-1F3FB-200D-2642",
				image: "1f477-1f3fb-200d-2642-fe0f.png",
				sheet_x: 23,
				sheet_y: 17,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F477-1F3FC-200D-2642-FE0F",
				non_qualified: "1F477-1F3FC-200D-2642",
				image: "1f477-1f3fc-200d-2642-fe0f.png",
				sheet_x: 23,
				sheet_y: 18,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F477-1F3FD-200D-2642-FE0F",
				non_qualified: "1F477-1F3FD-200D-2642",
				image: "1f477-1f3fd-200d-2642-fe0f.png",
				sheet_x: 23,
				sheet_y: 19,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F477-1F3FE-200D-2642-FE0F",
				non_qualified: "1F477-1F3FE-200D-2642",
				image: "1f477-1f3fe-200d-2642-fe0f.png",
				sheet_x: 23,
				sheet_y: 20,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F477-1F3FF-200D-2642-FE0F",
				non_qualified: "1F477-1F3FF-200D-2642",
				image: "1f477-1f3ff-200d-2642-fe0f.png",
				sheet_x: 23,
				sheet_y: 21,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F477",
		a: "Male Construction Worker",
		b: "1F477-200D-2642-FE0F",
		c: "1F477-200D-2642",
		k: [
			23,
			16
		],
		o: 4
	},
	clock1130: {
		a: "Clock Face Eleven-Thirty",
		b: "1F566",
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			29,
			4
		],
		o: 2
	},
	"flag-mq": {
		a: "Martinique Flag",
		b: "1F1F2-1F1F6",
		k: [
			3,
			15
		],
		o: 2
	},
	bar_chart: {
		a: "Bar Chart",
		b: "1F4CA",
		j: [
			"graph",
			"presentation",
			"stats"
		],
		k: [
			26,
			32
		],
		o: 2
	},
	parking: {
		a: "Negative Squared Latin Capital Letter P",
		b: "1F17F-FE0F",
		c: "1F17F",
		j: [
			"cars",
			"blue-square",
			"alphabet",
			"letter"
		],
		k: [
			0,
			19
		],
		o: 2
	},
	new_moon: {
		a: "New Moon Symbol",
		b: "1F311",
		j: [
			"nature",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep"
		],
		k: [
			5,
			36
		],
		o: 2
	},
	"female-construction-worker": {
		skin_variations: {
			"1F3FB": {
				unified: "1F477-1F3FB-200D-2640-FE0F",
				non_qualified: "1F477-1F3FB-200D-2640",
				image: "1f477-1f3fb-200d-2640-fe0f.png",
				sheet_x: 23,
				sheet_y: 11,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F477-1F3FC-200D-2640-FE0F",
				non_qualified: "1F477-1F3FC-200D-2640",
				image: "1f477-1f3fc-200d-2640-fe0f.png",
				sheet_x: 23,
				sheet_y: 12,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F477-1F3FD-200D-2640-FE0F",
				non_qualified: "1F477-1F3FD-200D-2640",
				image: "1f477-1f3fd-200d-2640-fe0f.png",
				sheet_x: 23,
				sheet_y: 13,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F477-1F3FE-200D-2640-FE0F",
				non_qualified: "1F477-1F3FE-200D-2640",
				image: "1f477-1f3fe-200d-2640-fe0f.png",
				sheet_x: 23,
				sheet_y: 14,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F477-1F3FF-200D-2640-FE0F",
				non_qualified: "1F477-1F3FF-200D-2640",
				image: "1f477-1f3ff-200d-2640-fe0f.png",
				sheet_x: 23,
				sheet_y: 15,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Construction Worker",
		b: "1F477-200D-2640-FE0F",
		c: "1F477-200D-2640",
		k: [
			23,
			10
		],
		o: 4
	},
	sos: {
		a: "Squared Sos",
		b: "1F198",
		j: [
			"help",
			"red-square",
			"words",
			"emergency",
			"911"
		],
		k: [
			0,
			28
		],
		o: 2
	},
	clipboard: {
		a: "Clipboard",
		b: "1F4CB",
		j: [
			"stationery",
			"documents"
		],
		k: [
			26,
			33
		],
		o: 2
	},
	"flag-mr": {
		a: "Mauritania Flag",
		b: "1F1F2-1F1F7",
		k: [
			3,
			16
		],
		o: 2
	},
	prince: {
		skin_variations: {
			"1F3FB": {
				unified: "1F934-1F3FB",
				non_qualified: null,
				image: "1f934-1f3fb.png",
				sheet_x: 39,
				sheet_y: 18,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F934-1F3FC",
				non_qualified: null,
				image: "1f934-1f3fc.png",
				sheet_x: 39,
				sheet_y: 19,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F934-1F3FD",
				non_qualified: null,
				image: "1f934-1f3fd.png",
				sheet_x: 39,
				sheet_y: 20,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F934-1F3FE",
				non_qualified: null,
				image: "1f934-1f3fe.png",
				sheet_x: 39,
				sheet_y: 21,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F934-1F3FF",
				non_qualified: null,
				image: "1f934-1f3ff.png",
				sheet_x: 39,
				sheet_y: 22,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Prince",
		b: "1F934",
		j: [
			"boy",
			"man",
			"male",
			"crown",
			"royal",
			"king"
		],
		k: [
			39,
			17
		],
		o: 4
	},
	waxing_crescent_moon: {
		a: "Waxing Crescent Moon Symbol",
		b: "1F312",
		j: [
			"nature",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep"
		],
		k: [
			5,
			37
		],
		o: 2
	},
	"flag-ms": {
		a: "Montserrat Flag",
		b: "1F1F2-1F1F8",
		k: [
			3,
			17
		],
		o: 2
	},
	pushpin: {
		a: "Pushpin",
		b: "1F4CC",
		j: [
			"stationery",
			"mark",
			"here"
		],
		k: [
			26,
			34
		],
		o: 2
	},
	up: {
		a: "Squared Up with Exclamation Mark",
		b: "1F199",
		j: [
			"blue-square",
			"above",
			"high"
		],
		k: [
			0,
			29
		],
		o: 2
	},
	"flag-mt": {
		a: "Malta Flag",
		b: "1F1F2-1F1F9",
		k: [
			3,
			18
		],
		o: 2
	},
	princess: {
		skin_variations: {
			"1F3FB": {
				unified: "1F478-1F3FB",
				non_qualified: null,
				image: "1f478-1f3fb.png",
				sheet_x: 23,
				sheet_y: 29,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F478-1F3FC",
				non_qualified: null,
				image: "1f478-1f3fc.png",
				sheet_x: 23,
				sheet_y: 30,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F478-1F3FD",
				non_qualified: null,
				image: "1f478-1f3fd.png",
				sheet_x: 23,
				sheet_y: 31,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F478-1F3FE",
				non_qualified: null,
				image: "1f478-1f3fe.png",
				sheet_x: 23,
				sheet_y: 32,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F478-1F3FF",
				non_qualified: null,
				image: "1f478-1f3ff.png",
				sheet_x: 23,
				sheet_y: 33,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Princess",
		b: "1F478",
		j: [
			"girl",
			"woman",
			"female",
			"blond",
			"crown",
			"royal",
			"queen"
		],
		k: [
			23,
			28
		],
		o: 2
	},
	round_pushpin: {
		a: "Round Pushpin",
		b: "1F4CD",
		j: [
			"stationery",
			"location",
			"map",
			"here"
		],
		k: [
			26,
			35
		],
		o: 2
	},
	first_quarter_moon: {
		a: "First Quarter Moon Symbol",
		b: "1F313",
		j: [
			"nature",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep"
		],
		k: [
			5,
			38
		],
		o: 2
	},
	vs: {
		a: "Squared Vs",
		b: "1F19A",
		j: [
			"words",
			"orange-square"
		],
		k: [
			0,
			30
		],
		o: 2
	},
	"flag-mu": {
		a: "Mauritius Flag",
		b: "1F1F2-1F1FA",
		k: [
			3,
			19
		],
		o: 2
	},
	koko: {
		a: "Squared Katakana Koko",
		b: "1F201",
		j: [
			"blue-square",
			"here",
			"katakana",
			"japanese",
			"destination"
		],
		k: [
			5,
			4
		],
		o: 2
	},
	man_with_turban: {
		skin_variations: {
			"1F3FB": {
				unified: "1F473-1F3FB",
				non_qualified: null,
				image: "1f473-1f3fb.png",
				sheet_x: 22,
				sheet_y: 44,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F473-1F3FC",
				non_qualified: null,
				image: "1f473-1f3fc.png",
				sheet_x: 22,
				sheet_y: 45,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F473-1F3FD",
				non_qualified: null,
				image: "1f473-1f3fd.png",
				sheet_x: 22,
				sheet_y: 46,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F473-1F3FE",
				non_qualified: null,
				image: "1f473-1f3fe.png",
				sheet_x: 22,
				sheet_y: 47,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F473-1F3FF",
				non_qualified: null,
				image: "1f473-1f3ff.png",
				sheet_x: 22,
				sheet_y: 48,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F473-200D-2642-FE0F",
		a: "Man with Turban",
		b: "1F473",
		j: [
			"male",
			"indian",
			"hinduism",
			"arabs"
		],
		k: [
			22,
			43
		],
		o: 2
	},
	moon: {
		a: "Waxing Gibbous Moon Symbol",
		b: "1F314",
		k: [
			5,
			39
		],
		n: [
			"waxing_gibbous_moon"
		],
		o: 2
	},
	paperclip: {
		a: "Paperclip",
		b: "1F4CE",
		j: [
			"documents",
			"stationery"
		],
		k: [
			26,
			36
		],
		o: 2
	},
	linked_paperclips: {
		a: "Linked Paperclips",
		b: "1F587-FE0F",
		c: "1F587",
		k: [
			29,
			43
		],
		o: 2
	},
	"man-wearing-turban": {
		skin_variations: {
			"1F3FB": {
				unified: "1F473-1F3FB-200D-2642-FE0F",
				non_qualified: "1F473-1F3FB-200D-2642",
				image: "1f473-1f3fb-200d-2642-fe0f.png",
				sheet_x: 22,
				sheet_y: 38,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F473-1F3FC-200D-2642-FE0F",
				non_qualified: "1F473-1F3FC-200D-2642",
				image: "1f473-1f3fc-200d-2642-fe0f.png",
				sheet_x: 22,
				sheet_y: 39,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F473-1F3FD-200D-2642-FE0F",
				non_qualified: "1F473-1F3FD-200D-2642",
				image: "1f473-1f3fd-200d-2642-fe0f.png",
				sheet_x: 22,
				sheet_y: 40,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F473-1F3FE-200D-2642-FE0F",
				non_qualified: "1F473-1F3FE-200D-2642",
				image: "1f473-1f3fe-200d-2642-fe0f.png",
				sheet_x: 22,
				sheet_y: 41,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F473-1F3FF-200D-2642-FE0F",
				non_qualified: "1F473-1F3FF-200D-2642",
				image: "1f473-1f3ff-200d-2642-fe0f.png",
				sheet_x: 22,
				sheet_y: 42,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F473",
		a: "Man Wearing Turban",
		b: "1F473-200D-2642-FE0F",
		c: "1F473-200D-2642",
		k: [
			22,
			37
		],
		o: 4
	},
	sa: {
		a: "Squared Katakana Sa",
		b: "1F202-FE0F",
		c: "1F202",
		j: [
			"japanese",
			"blue-square",
			"katakana"
		],
		k: [
			5,
			5
		],
		o: 2
	},
	full_moon: {
		a: "Full Moon Symbol",
		b: "1F315",
		j: [
			"nature",
			"yellow",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep"
		],
		k: [
			5,
			40
		],
		o: 2
	},
	"flag-mv": {
		a: "Maldives Flag",
		b: "1F1F2-1F1FB",
		k: [
			3,
			20
		],
		o: 2
	},
	"flag-mw": {
		a: "Malawi Flag",
		b: "1F1F2-1F1FC",
		k: [
			3,
			21
		],
		o: 2
	},
	waning_gibbous_moon: {
		a: "Waning Gibbous Moon Symbol",
		b: "1F316",
		j: [
			"nature",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep",
			"waxing_gibbous_moon"
		],
		k: [
			5,
			41
		],
		o: 2
	},
	"woman-wearing-turban": {
		skin_variations: {
			"1F3FB": {
				unified: "1F473-1F3FB-200D-2640-FE0F",
				non_qualified: "1F473-1F3FB-200D-2640",
				image: "1f473-1f3fb-200d-2640-fe0f.png",
				sheet_x: 22,
				sheet_y: 32,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F473-1F3FC-200D-2640-FE0F",
				non_qualified: "1F473-1F3FC-200D-2640",
				image: "1f473-1f3fc-200d-2640-fe0f.png",
				sheet_x: 22,
				sheet_y: 33,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F473-1F3FD-200D-2640-FE0F",
				non_qualified: "1F473-1F3FD-200D-2640",
				image: "1f473-1f3fd-200d-2640-fe0f.png",
				sheet_x: 22,
				sheet_y: 34,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F473-1F3FE-200D-2640-FE0F",
				non_qualified: "1F473-1F3FE-200D-2640",
				image: "1f473-1f3fe-200d-2640-fe0f.png",
				sheet_x: 22,
				sheet_y: 35,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F473-1F3FF-200D-2640-FE0F",
				non_qualified: "1F473-1F3FF-200D-2640",
				image: "1f473-1f3ff-200d-2640-fe0f.png",
				sheet_x: 22,
				sheet_y: 36,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Wearing Turban",
		b: "1F473-200D-2640-FE0F",
		c: "1F473-200D-2640",
		k: [
			22,
			31
		],
		o: 4
	},
	u6708: {
		a: "Squared Cjk Unified Ideograph-6708",
		b: "1F237-FE0F",
		c: "1F237",
		j: [
			"chinese",
			"month",
			"moon",
			"japanese",
			"orange-square",
			"kanji"
		],
		k: [
			5,
			13
		],
		o: 2
	},
	straight_ruler: {
		a: "Straight Ruler",
		b: "1F4CF",
		j: [
			"stationery",
			"calculate",
			"length",
			"math",
			"school",
			"drawing",
			"architect",
			"sketch"
		],
		k: [
			26,
			37
		],
		o: 2
	},
	u6709: {
		a: "Squared Cjk Unified Ideograph-6709",
		b: "1F236",
		j: [
			"orange-square",
			"chinese",
			"have",
			"kanji"
		],
		k: [
			5,
			12
		],
		o: 2
	},
	triangular_ruler: {
		a: "Triangular Ruler",
		b: "1F4D0",
		j: [
			"stationery",
			"math",
			"architect",
			"sketch"
		],
		k: [
			26,
			38
		],
		o: 2
	},
	man_with_gua_pi_mao: {
		skin_variations: {
			"1F3FB": {
				unified: "1F472-1F3FB",
				non_qualified: null,
				image: "1f472-1f3fb.png",
				sheet_x: 22,
				sheet_y: 26,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F472-1F3FC",
				non_qualified: null,
				image: "1f472-1f3fc.png",
				sheet_x: 22,
				sheet_y: 27,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F472-1F3FD",
				non_qualified: null,
				image: "1f472-1f3fd.png",
				sheet_x: 22,
				sheet_y: 28,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F472-1F3FE",
				non_qualified: null,
				image: "1f472-1f3fe.png",
				sheet_x: 22,
				sheet_y: 29,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F472-1F3FF",
				non_qualified: null,
				image: "1f472-1f3ff.png",
				sheet_x: 22,
				sheet_y: 30,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man with Gua Pi Mao",
		b: "1F472",
		j: [
			"male",
			"boy",
			"chinese"
		],
		k: [
			22,
			25
		],
		o: 2
	},
	"flag-mx": {
		a: "Mexico Flag",
		b: "1F1F2-1F1FD",
		k: [
			3,
			22
		],
		o: 2
	},
	last_quarter_moon: {
		a: "Last Quarter Moon Symbol",
		b: "1F317",
		j: [
			"nature",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep"
		],
		k: [
			5,
			42
		],
		o: 2
	},
	person_with_headscarf: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D5-1F3FB",
				non_qualified: null,
				image: "1f9d5-1f3fb.png",
				sheet_x: 48,
				sheet_y: 35,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9D5-1F3FC",
				non_qualified: null,
				image: "1f9d5-1f3fc.png",
				sheet_x: 48,
				sheet_y: 36,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9D5-1F3FD",
				non_qualified: null,
				image: "1f9d5-1f3fd.png",
				sheet_x: 48,
				sheet_y: 37,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9D5-1F3FE",
				non_qualified: null,
				image: "1f9d5-1f3fe.png",
				sheet_x: 48,
				sheet_y: 38,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9D5-1F3FF",
				non_qualified: null,
				image: "1f9d5-1f3ff.png",
				sheet_x: 48,
				sheet_y: 39,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Person with Headscarf",
		b: "1F9D5",
		k: [
			48,
			34
		],
		o: 5
	},
	waning_crescent_moon: {
		a: "Waning Crescent Moon Symbol",
		b: "1F318",
		j: [
			"nature",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep"
		],
		k: [
			5,
			43
		],
		o: 2
	},
	u6307: {
		a: "Squared Cjk Unified Ideograph-6307",
		b: "1F22F",
		j: [
			"chinese",
			"point",
			"green-square",
			"kanji"
		],
		k: [
			5,
			7
		],
		o: 2
	},
	scissors: {
		a: "Black Scissors",
		b: "2702-FE0F",
		c: "2702",
		j: [
			"stationery",
			"cut"
		],
		k: [
			54,
			39
		],
		o: 2
	},
	"flag-my": {
		a: "Malaysia Flag",
		b: "1F1F2-1F1FE",
		k: [
			3,
			23
		],
		o: 2
	},
	ideograph_advantage: {
		a: "Circled Ideograph Advantage",
		b: "1F250",
		j: [
			"chinese",
			"kanji",
			"obtain",
			"get",
			"circle"
		],
		k: [
			5,
			17
		],
		o: 2
	},
	man_in_tuxedo: {
		skin_variations: {
			"1F3FB": {
				unified: "1F935-1F3FB",
				non_qualified: null,
				image: "1f935-1f3fb.png",
				sheet_x: 39,
				sheet_y: 24,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F935-1F3FC",
				non_qualified: null,
				image: "1f935-1f3fc.png",
				sheet_x: 39,
				sheet_y: 25,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F935-1F3FD",
				non_qualified: null,
				image: "1f935-1f3fd.png",
				sheet_x: 39,
				sheet_y: 26,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F935-1F3FE",
				non_qualified: null,
				image: "1f935-1f3fe.png",
				sheet_x: 39,
				sheet_y: 27,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F935-1F3FF",
				non_qualified: null,
				image: "1f935-1f3ff.png",
				sheet_x: 39,
				sheet_y: 28,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man in Tuxedo",
		b: "1F935",
		j: [
			"couple",
			"marriage",
			"wedding",
			"groom"
		],
		k: [
			39,
			23
		],
		o: 4
	},
	"flag-mz": {
		a: "Mozambique Flag",
		b: "1F1F2-1F1FF",
		k: [
			3,
			24
		],
		o: 2
	},
	card_file_box: {
		a: "Card File Box",
		b: "1F5C3-FE0F",
		c: "1F5C3",
		j: [
			"business",
			"stationery"
		],
		k: [
			30,
			16
		],
		o: 2
	},
	crescent_moon: {
		a: "Crescent Moon",
		b: "1F319",
		j: [
			"night",
			"sleep",
			"sky",
			"evening",
			"magic"
		],
		k: [
			5,
			44
		],
		o: 2
	},
	"flag-na": {
		a: "Namibia Flag",
		b: "1F1F3-1F1E6",
		k: [
			3,
			25
		],
		o: 2
	},
	bride_with_veil: {
		skin_variations: {
			"1F3FB": {
				unified: "1F470-1F3FB",
				non_qualified: null,
				image: "1f470-1f3fb.png",
				sheet_x: 22,
				sheet_y: 2,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F470-1F3FC",
				non_qualified: null,
				image: "1f470-1f3fc.png",
				sheet_x: 22,
				sheet_y: 3,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F470-1F3FD",
				non_qualified: null,
				image: "1f470-1f3fd.png",
				sheet_x: 22,
				sheet_y: 4,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F470-1F3FE",
				non_qualified: null,
				image: "1f470-1f3fe.png",
				sheet_x: 22,
				sheet_y: 5,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F470-1F3FF",
				non_qualified: null,
				image: "1f470-1f3ff.png",
				sheet_x: 22,
				sheet_y: 6,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Bride with Veil",
		b: "1F470",
		j: [
			"couple",
			"marriage",
			"wedding",
			"woman",
			"bride"
		],
		k: [
			22,
			1
		],
		o: 2
	},
	new_moon_with_face: {
		a: "New Moon with Face",
		b: "1F31A",
		j: [
			"nature",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep"
		],
		k: [
			5,
			45
		],
		o: 2
	},
	file_cabinet: {
		a: "File Cabinet",
		b: "1F5C4-FE0F",
		c: "1F5C4",
		j: [
			"filing",
			"organizing"
		],
		k: [
			30,
			17
		],
		o: 2
	},
	u5272: {
		a: "Squared Cjk Unified Ideograph-5272",
		b: "1F239",
		j: [
			"cut",
			"divide",
			"chinese",
			"kanji",
			"pink-square"
		],
		k: [
			5,
			15
		],
		o: 2
	},
	wastebasket: {
		a: "Wastebasket",
		b: "1F5D1-FE0F",
		c: "1F5D1",
		j: [
			"bin",
			"trash",
			"rubbish",
			"garbage",
			"toss"
		],
		k: [
			30,
			18
		],
		o: 2
	},
	pregnant_woman: {
		skin_variations: {
			"1F3FB": {
				unified: "1F930-1F3FB",
				non_qualified: null,
				image: "1f930-1f3fb.png",
				sheet_x: 38,
				sheet_y: 51,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F930-1F3FC",
				non_qualified: null,
				image: "1f930-1f3fc.png",
				sheet_x: 38,
				sheet_y: 52,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F930-1F3FD",
				non_qualified: null,
				image: "1f930-1f3fd.png",
				sheet_x: 38,
				sheet_y: 53,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F930-1F3FE",
				non_qualified: null,
				image: "1f930-1f3fe.png",
				sheet_x: 38,
				sheet_y: 54,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F930-1F3FF",
				non_qualified: null,
				image: "1f930-1f3ff.png",
				sheet_x: 38,
				sheet_y: 55,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Pregnant Woman",
		b: "1F930",
		j: [
			"baby"
		],
		k: [
			38,
			50
		],
		o: 4
	},
	first_quarter_moon_with_face: {
		a: "First Quarter Moon with Face",
		b: "1F31B",
		j: [
			"nature",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep"
		],
		k: [
			5,
			46
		],
		o: 2
	},
	"flag-nc": {
		a: "New Caledonia Flag",
		b: "1F1F3-1F1E8",
		k: [
			3,
			26
		],
		o: 2
	},
	u7121: {
		a: "Squared Cjk Unified Ideograph-7121",
		b: "1F21A",
		j: [
			"nothing",
			"chinese",
			"kanji",
			"japanese",
			"orange-square"
		],
		k: [
			5,
			6
		],
		o: 2
	},
	lock: {
		a: "Lock",
		b: "1F512",
		j: [
			"security",
			"password",
			"padlock"
		],
		k: [
			27,
			46
		],
		o: 2
	},
	"flag-ne": {
		a: "Niger Flag",
		b: "1F1F3-1F1EA",
		k: [
			3,
			27
		],
		o: 2
	},
	last_quarter_moon_with_face: {
		a: "Last Quarter Moon with Face",
		b: "1F31C",
		j: [
			"nature",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep"
		],
		k: [
			5,
			47
		],
		o: 2
	},
	"breast-feeding": {
		skin_variations: {
			"1F3FB": {
				unified: "1F931-1F3FB",
				non_qualified: null,
				image: "1f931-1f3fb.png",
				sheet_x: 39,
				sheet_y: 0,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F931-1F3FC",
				non_qualified: null,
				image: "1f931-1f3fc.png",
				sheet_x: 39,
				sheet_y: 1,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F931-1F3FD",
				non_qualified: null,
				image: "1f931-1f3fd.png",
				sheet_x: 39,
				sheet_y: 2,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F931-1F3FE",
				non_qualified: null,
				image: "1f931-1f3fe.png",
				sheet_x: 39,
				sheet_y: 3,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F931-1F3FF",
				non_qualified: null,
				image: "1f931-1f3ff.png",
				sheet_x: 39,
				sheet_y: 4,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Breast-Feeding",
		b: "1F931",
		k: [
			38,
			56
		],
		o: 5
	},
	u7981: {
		a: "Squared Cjk Unified Ideograph-7981",
		b: "1F232",
		j: [
			"kanji",
			"japanese",
			"chinese",
			"forbidden",
			"limit",
			"restricted",
			"red-square"
		],
		k: [
			5,
			8
		],
		o: 2
	},
	accept: {
		a: "Circled Ideograph Accept",
		b: "1F251",
		j: [
			"ok",
			"good",
			"chinese",
			"kanji",
			"agree",
			"yes",
			"orange-circle"
		],
		k: [
			5,
			18
		],
		o: 2
	},
	angel: {
		skin_variations: {
			"1F3FB": {
				unified: "1F47C-1F3FB",
				non_qualified: null,
				image: "1f47c-1f3fb.png",
				sheet_x: 23,
				sheet_y: 38,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F47C-1F3FC",
				non_qualified: null,
				image: "1f47c-1f3fc.png",
				sheet_x: 23,
				sheet_y: 39,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F47C-1F3FD",
				non_qualified: null,
				image: "1f47c-1f3fd.png",
				sheet_x: 23,
				sheet_y: 40,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F47C-1F3FE",
				non_qualified: null,
				image: "1f47c-1f3fe.png",
				sheet_x: 23,
				sheet_y: 41,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F47C-1F3FF",
				non_qualified: null,
				image: "1f47c-1f3ff.png",
				sheet_x: 23,
				sheet_y: 42,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Baby Angel",
		b: "1F47C",
		j: [
			"heaven",
			"wings",
			"halo"
		],
		k: [
			23,
			37
		],
		o: 2
	},
	unlock: {
		a: "Open Lock",
		b: "1F513",
		j: [
			"privacy",
			"security"
		],
		k: [
			27,
			47
		],
		o: 2
	},
	"flag-nf": {
		a: "Norfolk Island Flag",
		b: "1F1F3-1F1EB",
		k: [
			3,
			28
		],
		o: 2
	},
	thermometer: {
		a: "Thermometer",
		b: "1F321-FE0F",
		c: "1F321",
		j: [
			"weather",
			"temperature",
			"hot",
			"cold"
		],
		k: [
			5,
			52
		],
		o: 2
	},
	"flag-ng": {
		a: "Nigeria Flag",
		b: "1F1F3-1F1EC",
		k: [
			3,
			29
		],
		o: 2
	},
	u7533: {
		a: "Squared Cjk Unified Ideograph-7533",
		b: "1F238",
		j: [
			"chinese",
			"japanese",
			"kanji",
			"orange-square"
		],
		k: [
			5,
			14
		],
		o: 2
	},
	sunny: {
		a: "Black Sun with Rays",
		b: "2600-FE0F",
		c: "2600",
		j: [
			"weather",
			"nature",
			"brightness",
			"summer",
			"beach",
			"spring"
		],
		k: [
			52,
			49
		],
		o: 2
	},
	lock_with_ink_pen: {
		a: "Lock with Ink Pen",
		b: "1F50F",
		j: [
			"security",
			"secret"
		],
		k: [
			27,
			43
		],
		o: 2
	},
	santa: {
		skin_variations: {
			"1F3FB": {
				unified: "1F385-1F3FB",
				non_qualified: null,
				image: "1f385-1f3fb.png",
				sheet_x: 7,
				sheet_y: 37,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F385-1F3FC",
				non_qualified: null,
				image: "1f385-1f3fc.png",
				sheet_x: 7,
				sheet_y: 38,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F385-1F3FD",
				non_qualified: null,
				image: "1f385-1f3fd.png",
				sheet_x: 7,
				sheet_y: 39,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F385-1F3FE",
				non_qualified: null,
				image: "1f385-1f3fe.png",
				sheet_x: 7,
				sheet_y: 40,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F385-1F3FF",
				non_qualified: null,
				image: "1f385-1f3ff.png",
				sheet_x: 7,
				sheet_y: 41,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Father Christmas",
		b: "1F385",
		j: [
			"festival",
			"man",
			"male",
			"xmas",
			"father christmas"
		],
		k: [
			7,
			36
		],
		o: 2
	},
	closed_lock_with_key: {
		a: "Closed Lock with Key",
		b: "1F510",
		j: [
			"security",
			"privacy"
		],
		k: [
			27,
			44
		],
		o: 2
	},
	u5408: {
		a: "Squared Cjk Unified Ideograph-5408",
		b: "1F234",
		j: [
			"japanese",
			"chinese",
			"join",
			"kanji",
			"red-square"
		],
		k: [
			5,
			10
		],
		o: 2
	},
	"flag-ni": {
		a: "Nicaragua Flag",
		b: "1F1F3-1F1EE",
		k: [
			3,
			30
		],
		o: 2
	},
	mrs_claus: {
		skin_variations: {
			"1F3FB": {
				unified: "1F936-1F3FB",
				non_qualified: null,
				image: "1f936-1f3fb.png",
				sheet_x: 39,
				sheet_y: 30,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F936-1F3FC",
				non_qualified: null,
				image: "1f936-1f3fc.png",
				sheet_x: 39,
				sheet_y: 31,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F936-1F3FD",
				non_qualified: null,
				image: "1f936-1f3fd.png",
				sheet_x: 39,
				sheet_y: 32,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F936-1F3FE",
				non_qualified: null,
				image: "1f936-1f3fe.png",
				sheet_x: 39,
				sheet_y: 33,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F936-1F3FF",
				non_qualified: null,
				image: "1f936-1f3ff.png",
				sheet_x: 39,
				sheet_y: 34,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Mother Christmas",
		b: "1F936",
		j: [
			"woman",
			"female",
			"xmas",
			"mother christmas"
		],
		k: [
			39,
			29
		],
		n: [
			"mother_christmas"
		],
		o: 4
	},
	full_moon_with_face: {
		a: "Full Moon with Face",
		b: "1F31D",
		j: [
			"nature",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep"
		],
		k: [
			5,
			48
		],
		o: 2
	},
	key: {
		a: "Key",
		b: "1F511",
		j: [
			"lock",
			"door",
			"password"
		],
		k: [
			27,
			45
		],
		o: 2
	},
	superhero: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9B8-1F3FB",
				non_qualified: null,
				image: "1f9b8-1f3fb.png",
				sheet_x: 43,
				sheet_y: 31,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9B8-1F3FC",
				non_qualified: null,
				image: "1f9b8-1f3fc.png",
				sheet_x: 43,
				sheet_y: 32,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9B8-1F3FD",
				non_qualified: null,
				image: "1f9b8-1f3fd.png",
				sheet_x: 43,
				sheet_y: 33,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9B8-1F3FE",
				non_qualified: null,
				image: "1f9b8-1f3fe.png",
				sheet_x: 43,
				sheet_y: 34,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9B8-1F3FF",
				non_qualified: null,
				image: "1f9b8-1f3ff.png",
				sheet_x: 43,
				sheet_y: 35,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Superhero",
		b: "1F9B8",
		k: [
			43,
			30
		],
		o: 11
	},
	"flag-nl": {
		a: "Netherlands Flag",
		b: "1F1F3-1F1F1",
		k: [
			3,
			31
		],
		o: 2
	},
	u7a7a: {
		a: "Squared Cjk Unified Ideograph-7a7a",
		b: "1F233",
		j: [
			"kanji",
			"japanese",
			"chinese",
			"empty",
			"sky",
			"blue-square"
		],
		k: [
			5,
			9
		],
		o: 2
	},
	sun_with_face: {
		a: "Sun with Face",
		b: "1F31E",
		j: [
			"nature",
			"morning",
			"sky"
		],
		k: [
			5,
			49
		],
		o: 2
	},
	male_superhero: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9B8-1F3FB-200D-2642-FE0F",
				non_qualified: "1F9B8-1F3FB-200D-2642",
				image: "1f9b8-1f3fb-200d-2642-fe0f.png",
				sheet_x: 43,
				sheet_y: 25,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9B8-1F3FC-200D-2642-FE0F",
				non_qualified: "1F9B8-1F3FC-200D-2642",
				image: "1f9b8-1f3fc-200d-2642-fe0f.png",
				sheet_x: 43,
				sheet_y: 26,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9B8-1F3FD-200D-2642-FE0F",
				non_qualified: "1F9B8-1F3FD-200D-2642",
				image: "1f9b8-1f3fd-200d-2642-fe0f.png",
				sheet_x: 43,
				sheet_y: 27,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9B8-1F3FE-200D-2642-FE0F",
				non_qualified: "1F9B8-1F3FE-200D-2642",
				image: "1f9b8-1f3fe-200d-2642-fe0f.png",
				sheet_x: 43,
				sheet_y: 28,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9B8-1F3FF-200D-2642-FE0F",
				non_qualified: "1F9B8-1F3FF-200D-2642",
				image: "1f9b8-1f3ff-200d-2642-fe0f.png",
				sheet_x: 43,
				sheet_y: 29,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Superhero",
		b: "1F9B8-200D-2642-FE0F",
		c: "1F9B8-200D-2642",
		k: [
			43,
			24
		],
		o: 11
	},
	ringed_planet: {
		a: "Ringed Planet",
		b: "1FA90",
		k: [
			52,
			4
		],
		o: 12
	},
	old_key: {
		a: "Old Key",
		b: "1F5DD-FE0F",
		c: "1F5DD",
		j: [
			"lock",
			"door",
			"password"
		],
		k: [
			30,
			22
		],
		o: 2
	},
	congratulations: {
		a: "Circled Ideograph Congratulation",
		b: "3297-FE0F",
		c: "3297",
		j: [
			"chinese",
			"kanji",
			"japanese",
			"red-circle"
		],
		k: [
			55,
			46
		],
		o: 2
	},
	"flag-no": {
		a: "Norway Flag",
		b: "1F1F3-1F1F4",
		k: [
			3,
			32
		],
		o: 2
	},
	star: {
		a: "White Medium Star",
		b: "2B50",
		j: [
			"night",
			"yellow"
		],
		k: [
			55,
			42
		],
		o: 2
	},
	secret: {
		a: "Circled Ideograph Secret",
		b: "3299-FE0F",
		c: "3299",
		j: [
			"privacy",
			"chinese",
			"sshh",
			"kanji",
			"red-circle"
		],
		k: [
			55,
			47
		],
		o: 2
	},
	"flag-np": {
		a: "Nepal Flag",
		b: "1F1F3-1F1F5",
		k: [
			3,
			33
		],
		o: 2
	},
	female_superhero: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9B8-1F3FB-200D-2640-FE0F",
				non_qualified: "1F9B8-1F3FB-200D-2640",
				image: "1f9b8-1f3fb-200d-2640-fe0f.png",
				sheet_x: 43,
				sheet_y: 19,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9B8-1F3FC-200D-2640-FE0F",
				non_qualified: "1F9B8-1F3FC-200D-2640",
				image: "1f9b8-1f3fc-200d-2640-fe0f.png",
				sheet_x: 43,
				sheet_y: 20,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9B8-1F3FD-200D-2640-FE0F",
				non_qualified: "1F9B8-1F3FD-200D-2640",
				image: "1f9b8-1f3fd-200d-2640-fe0f.png",
				sheet_x: 43,
				sheet_y: 21,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9B8-1F3FE-200D-2640-FE0F",
				non_qualified: "1F9B8-1F3FE-200D-2640",
				image: "1f9b8-1f3fe-200d-2640-fe0f.png",
				sheet_x: 43,
				sheet_y: 22,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9B8-1F3FF-200D-2640-FE0F",
				non_qualified: "1F9B8-1F3FF-200D-2640",
				image: "1f9b8-1f3ff-200d-2640-fe0f.png",
				sheet_x: 43,
				sheet_y: 23,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Superhero",
		b: "1F9B8-200D-2640-FE0F",
		c: "1F9B8-200D-2640",
		k: [
			43,
			18
		],
		o: 11
	},
	hammer: {
		a: "Hammer",
		b: "1F528",
		j: [
			"tools",
			"build",
			"create"
		],
		k: [
			28,
			11
		],
		o: 2
	},
	star2: {
		a: "Glowing Star",
		b: "1F31F",
		j: [
			"night",
			"sparkle",
			"awesome",
			"good",
			"magic"
		],
		k: [
			5,
			50
		],
		o: 2
	},
	"flag-nr": {
		a: "Nauru Flag",
		b: "1F1F3-1F1F7",
		k: [
			3,
			34
		],
		o: 2
	},
	axe: {
		a: "Axe",
		b: "1FA93",
		k: [
			52,
			7
		],
		o: 12
	},
	u55b6: {
		a: "Squared Cjk Unified Ideograph-55b6",
		b: "1F23A",
		j: [
			"japanese",
			"opening hours",
			"orange-square"
		],
		k: [
			5,
			16
		],
		o: 2
	},
	supervillain: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9B9-1F3FB",
				non_qualified: null,
				image: "1f9b9-1f3fb.png",
				sheet_x: 43,
				sheet_y: 49,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9B9-1F3FC",
				non_qualified: null,
				image: "1f9b9-1f3fc.png",
				sheet_x: 43,
				sheet_y: 50,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9B9-1F3FD",
				non_qualified: null,
				image: "1f9b9-1f3fd.png",
				sheet_x: 43,
				sheet_y: 51,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9B9-1F3FE",
				non_qualified: null,
				image: "1f9b9-1f3fe.png",
				sheet_x: 43,
				sheet_y: 52,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9B9-1F3FF",
				non_qualified: null,
				image: "1f9b9-1f3ff.png",
				sheet_x: 43,
				sheet_y: 53,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Supervillain",
		b: "1F9B9",
		k: [
			43,
			48
		],
		o: 11
	},
	stars: {
		a: "Shooting Star",
		b: "1F320",
		j: [
			"night",
			"photo"
		],
		k: [
			5,
			51
		],
		o: 2
	},
	u6e80: {
		a: "Squared Cjk Unified Ideograph-6e80",
		b: "1F235",
		j: [
			"full",
			"chinese",
			"japanese",
			"red-square",
			"kanji"
		],
		k: [
			5,
			11
		],
		o: 2
	},
	"flag-nu": {
		a: "Niue Flag",
		b: "1F1F3-1F1FA",
		k: [
			3,
			35
		],
		o: 2
	},
	pick: {
		a: "Pick",
		b: "26CF-FE0F",
		c: "26CF",
		j: [
			"tools",
			"dig"
		],
		k: [
			54,
			5
		],
		o: 2
	},
	male_supervillain: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9B9-1F3FB-200D-2642-FE0F",
				non_qualified: "1F9B9-1F3FB-200D-2642",
				image: "1f9b9-1f3fb-200d-2642-fe0f.png",
				sheet_x: 43,
				sheet_y: 43,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9B9-1F3FC-200D-2642-FE0F",
				non_qualified: "1F9B9-1F3FC-200D-2642",
				image: "1f9b9-1f3fc-200d-2642-fe0f.png",
				sheet_x: 43,
				sheet_y: 44,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9B9-1F3FD-200D-2642-FE0F",
				non_qualified: "1F9B9-1F3FD-200D-2642",
				image: "1f9b9-1f3fd-200d-2642-fe0f.png",
				sheet_x: 43,
				sheet_y: 45,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9B9-1F3FE-200D-2642-FE0F",
				non_qualified: "1F9B9-1F3FE-200D-2642",
				image: "1f9b9-1f3fe-200d-2642-fe0f.png",
				sheet_x: 43,
				sheet_y: 46,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9B9-1F3FF-200D-2642-FE0F",
				non_qualified: "1F9B9-1F3FF-200D-2642",
				image: "1f9b9-1f3ff-200d-2642-fe0f.png",
				sheet_x: 43,
				sheet_y: 47,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Supervillain",
		b: "1F9B9-200D-2642-FE0F",
		c: "1F9B9-200D-2642",
		k: [
			43,
			42
		],
		o: 11
	},
	female_supervillain: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9B9-1F3FB-200D-2640-FE0F",
				non_qualified: "1F9B9-1F3FB-200D-2640",
				image: "1f9b9-1f3fb-200d-2640-fe0f.png",
				sheet_x: 43,
				sheet_y: 37,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9B9-1F3FC-200D-2640-FE0F",
				non_qualified: "1F9B9-1F3FC-200D-2640",
				image: "1f9b9-1f3fc-200d-2640-fe0f.png",
				sheet_x: 43,
				sheet_y: 38,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9B9-1F3FD-200D-2640-FE0F",
				non_qualified: "1F9B9-1F3FD-200D-2640",
				image: "1f9b9-1f3fd-200d-2640-fe0f.png",
				sheet_x: 43,
				sheet_y: 39,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9B9-1F3FE-200D-2640-FE0F",
				non_qualified: "1F9B9-1F3FE-200D-2640",
				image: "1f9b9-1f3fe-200d-2640-fe0f.png",
				sheet_x: 43,
				sheet_y: 40,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9B9-1F3FF-200D-2640-FE0F",
				non_qualified: "1F9B9-1F3FF-200D-2640",
				image: "1f9b9-1f3ff-200d-2640-fe0f.png",
				sheet_x: 43,
				sheet_y: 41,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Supervillain",
		b: "1F9B9-200D-2640-FE0F",
		c: "1F9B9-200D-2640",
		k: [
			43,
			36
		],
		o: 11
	},
	hammer_and_pick: {
		a: "Hammer and Pick",
		b: "2692-FE0F",
		c: "2692",
		j: [
			"tools",
			"build",
			"create"
		],
		k: [
			53,
			41
		],
		o: 2
	},
	milky_way: {
		a: "Milky Way",
		b: "1F30C",
		j: [
			"photo",
			"space",
			"stars"
		],
		k: [
			5,
			31
		],
		o: 2
	},
	red_circle: {
		a: "Large Red Circle",
		b: "1F534",
		j: [
			"shape",
			"error",
			"danger"
		],
		k: [
			28,
			23
		],
		o: 2
	},
	"flag-nz": {
		a: "New Zealand Flag",
		b: "1F1F3-1F1FF",
		k: [
			3,
			36
		],
		o: 2
	},
	large_orange_circle: {
		a: "Large Orange Circle",
		b: "1F7E0",
		k: [
			37,
			3
		],
		o: 12
	},
	hammer_and_wrench: {
		a: "Hammer and Wrench",
		b: "1F6E0-FE0F",
		c: "1F6E0",
		j: [
			"tools",
			"build",
			"create"
		],
		k: [
			36,
			42
		],
		o: 2
	},
	"flag-om": {
		a: "Oman Flag",
		b: "1F1F4-1F1F2",
		k: [
			3,
			37
		],
		o: 2
	},
	cloud: {
		a: "Cloud",
		b: "2601-FE0F",
		c: "2601",
		j: [
			"weather",
			"sky"
		],
		k: [
			52,
			50
		],
		o: 2
	},
	mage: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D9-1F3FB",
				non_qualified: null,
				image: "1f9d9-1f3fb.png",
				sheet_x: 49,
				sheet_y: 50,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D9-1F3FB-200D-2640-FE0F"
			},
			"1F3FC": {
				unified: "1F9D9-1F3FC",
				non_qualified: null,
				image: "1f9d9-1f3fc.png",
				sheet_x: 49,
				sheet_y: 51,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D9-1F3FC-200D-2640-FE0F"
			},
			"1F3FD": {
				unified: "1F9D9-1F3FD",
				non_qualified: null,
				image: "1f9d9-1f3fd.png",
				sheet_x: 49,
				sheet_y: 52,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D9-1F3FD-200D-2640-FE0F"
			},
			"1F3FE": {
				unified: "1F9D9-1F3FE",
				non_qualified: null,
				image: "1f9d9-1f3fe.png",
				sheet_x: 49,
				sheet_y: 53,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D9-1F3FE-200D-2640-FE0F"
			},
			"1F3FF": {
				unified: "1F9D9-1F3FF",
				non_qualified: null,
				image: "1f9d9-1f3ff.png",
				sheet_x: 49,
				sheet_y: 54,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D9-1F3FF-200D-2640-FE0F"
			}
		},
		obsoleted_by: "1F9D9-200D-2640-FE0F",
		a: "Mage",
		b: "1F9D9",
		k: [
			49,
			49
		],
		o: 5
	},
	dagger_knife: {
		a: "Dagger Knife",
		b: "1F5E1-FE0F",
		c: "1F5E1",
		k: [
			30,
			24
		],
		o: 2
	},
	partly_sunny: {
		a: "Sun Behind Cloud",
		b: "26C5",
		j: [
			"weather",
			"nature",
			"cloudy",
			"morning",
			"fall",
			"spring"
		],
		k: [
			54,
			2
		],
		o: 2
	},
	large_yellow_circle: {
		a: "Large Yellow Circle",
		b: "1F7E1",
		k: [
			37,
			4
		],
		o: 12
	},
	male_mage: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D9-1F3FB-200D-2642-FE0F",
				non_qualified: "1F9D9-1F3FB-200D-2642",
				image: "1f9d9-1f3fb-200d-2642-fe0f.png",
				sheet_x: 49,
				sheet_y: 44,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9D9-1F3FC-200D-2642-FE0F",
				non_qualified: "1F9D9-1F3FC-200D-2642",
				image: "1f9d9-1f3fc-200d-2642-fe0f.png",
				sheet_x: 49,
				sheet_y: 45,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9D9-1F3FD-200D-2642-FE0F",
				non_qualified: "1F9D9-1F3FD-200D-2642",
				image: "1f9d9-1f3fd-200d-2642-fe0f.png",
				sheet_x: 49,
				sheet_y: 46,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9D9-1F3FE-200D-2642-FE0F",
				non_qualified: "1F9D9-1F3FE-200D-2642",
				image: "1f9d9-1f3fe-200d-2642-fe0f.png",
				sheet_x: 49,
				sheet_y: 47,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9D9-1F3FF-200D-2642-FE0F",
				non_qualified: "1F9D9-1F3FF-200D-2642",
				image: "1f9d9-1f3ff-200d-2642-fe0f.png",
				sheet_x: 49,
				sheet_y: 48,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Mage",
		b: "1F9D9-200D-2642-FE0F",
		c: "1F9D9-200D-2642",
		k: [
			49,
			43
		],
		o: 5
	},
	"flag-pa": {
		a: "Panama Flag",
		b: "1F1F5-1F1E6",
		k: [
			3,
			38
		],
		o: 2
	},
	thunder_cloud_and_rain: {
		a: "Thunder Cloud and Rain",
		b: "26C8-FE0F",
		c: "26C8",
		k: [
			54,
			3
		],
		o: 2
	},
	large_green_circle: {
		a: "Large Green Circle",
		b: "1F7E2",
		k: [
			37,
			5
		],
		o: 12
	},
	female_mage: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D9-1F3FB-200D-2640-FE0F",
				non_qualified: "1F9D9-1F3FB-200D-2640",
				image: "1f9d9-1f3fb-200d-2640-fe0f.png",
				sheet_x: 49,
				sheet_y: 38,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D9-1F3FB"
			},
			"1F3FC": {
				unified: "1F9D9-1F3FC-200D-2640-FE0F",
				non_qualified: "1F9D9-1F3FC-200D-2640",
				image: "1f9d9-1f3fc-200d-2640-fe0f.png",
				sheet_x: 49,
				sheet_y: 39,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D9-1F3FC"
			},
			"1F3FD": {
				unified: "1F9D9-1F3FD-200D-2640-FE0F",
				non_qualified: "1F9D9-1F3FD-200D-2640",
				image: "1f9d9-1f3fd-200d-2640-fe0f.png",
				sheet_x: 49,
				sheet_y: 40,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D9-1F3FD"
			},
			"1F3FE": {
				unified: "1F9D9-1F3FE-200D-2640-FE0F",
				non_qualified: "1F9D9-1F3FE-200D-2640",
				image: "1f9d9-1f3fe-200d-2640-fe0f.png",
				sheet_x: 49,
				sheet_y: 41,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D9-1F3FE"
			},
			"1F3FF": {
				unified: "1F9D9-1F3FF-200D-2640-FE0F",
				non_qualified: "1F9D9-1F3FF-200D-2640",
				image: "1f9d9-1f3ff-200d-2640-fe0f.png",
				sheet_x: 49,
				sheet_y: 42,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D9-1F3FF"
			}
		},
		obsoletes: "1F9D9",
		a: "Female Mage",
		b: "1F9D9-200D-2640-FE0F",
		c: "1F9D9-200D-2640",
		k: [
			49,
			37
		],
		o: 5
	},
	crossed_swords: {
		a: "Crossed Swords",
		b: "2694-FE0F",
		c: "2694",
		j: [
			"weapon"
		],
		k: [
			53,
			43
		],
		o: 2
	},
	"flag-pe": {
		a: "Peru Flag",
		b: "1F1F5-1F1EA",
		k: [
			3,
			39
		],
		o: 2
	},
	gun: {
		a: "Pistol",
		b: "1F52B",
		j: [
			"violence",
			"weapon",
			"pistol",
			"revolver"
		],
		k: [
			28,
			14
		],
		o: 2
	},
	mostly_sunny: {
		a: "Mostly Sunny",
		b: "1F324-FE0F",
		c: "1F324",
		k: [
			5,
			53
		],
		n: [
			"sun_small_cloud"
		],
		o: 2
	},
	fairy: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9DA-1F3FB",
				non_qualified: null,
				image: "1f9da-1f3fb.png",
				sheet_x: 50,
				sheet_y: 11,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false,
				obsoleted_by: "1F9DA-1F3FB-200D-2640-FE0F"
			},
			"1F3FC": {
				unified: "1F9DA-1F3FC",
				non_qualified: null,
				image: "1f9da-1f3fc.png",
				sheet_x: 50,
				sheet_y: 12,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false,
				obsoleted_by: "1F9DA-1F3FC-200D-2640-FE0F"
			},
			"1F3FD": {
				unified: "1F9DA-1F3FD",
				non_qualified: null,
				image: "1f9da-1f3fd.png",
				sheet_x: 50,
				sheet_y: 13,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false,
				obsoleted_by: "1F9DA-1F3FD-200D-2640-FE0F"
			},
			"1F3FE": {
				unified: "1F9DA-1F3FE",
				non_qualified: null,
				image: "1f9da-1f3fe.png",
				sheet_x: 50,
				sheet_y: 14,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false,
				obsoleted_by: "1F9DA-1F3FE-200D-2640-FE0F"
			},
			"1F3FF": {
				unified: "1F9DA-1F3FF",
				non_qualified: null,
				image: "1f9da-1f3ff.png",
				sheet_x: 50,
				sheet_y: 15,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false,
				obsoleted_by: "1F9DA-1F3FF-200D-2640-FE0F"
			}
		},
		obsoleted_by: "1F9DA-200D-2640-FE0F",
		a: "Fairy",
		b: "1F9DA",
		k: [
			50,
			10
		],
		o: 5
	},
	"flag-pf": {
		a: "French Polynesia Flag",
		b: "1F1F5-1F1EB",
		k: [
			3,
			40
		],
		o: 2
	},
	large_blue_circle: {
		a: "Large Blue Circle",
		b: "1F535",
		j: [
			"shape",
			"icon",
			"button"
		],
		k: [
			28,
			24
		],
		o: 2
	},
	large_purple_circle: {
		a: "Large Purple Circle",
		b: "1F7E3",
		k: [
			37,
			6
		],
		o: 12
	},
	bow_and_arrow: {
		a: "Bow and Arrow",
		b: "1F3F9",
		j: [
			"sports"
		],
		k: [
			11,
			21
		],
		o: 2
	},
	male_fairy: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9DA-1F3FB-200D-2642-FE0F",
				non_qualified: "1F9DA-1F3FB-200D-2642",
				image: "1f9da-1f3fb-200d-2642-fe0f.png",
				sheet_x: 50,
				sheet_y: 5,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F9DA-1F3FC-200D-2642-FE0F",
				non_qualified: "1F9DA-1F3FC-200D-2642",
				image: "1f9da-1f3fc-200d-2642-fe0f.png",
				sheet_x: 50,
				sheet_y: 6,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F9DA-1F3FD-200D-2642-FE0F",
				non_qualified: "1F9DA-1F3FD-200D-2642",
				image: "1f9da-1f3fd-200d-2642-fe0f.png",
				sheet_x: 50,
				sheet_y: 7,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F9DA-1F3FE-200D-2642-FE0F",
				non_qualified: "1F9DA-1F3FE-200D-2642",
				image: "1f9da-1f3fe-200d-2642-fe0f.png",
				sheet_x: 50,
				sheet_y: 8,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F9DA-1F3FF-200D-2642-FE0F",
				non_qualified: "1F9DA-1F3FF-200D-2642",
				image: "1f9da-1f3ff-200d-2642-fe0f.png",
				sheet_x: 50,
				sheet_y: 9,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		a: "Male Fairy",
		b: "1F9DA-200D-2642-FE0F",
		c: "1F9DA-200D-2642",
		k: [
			50,
			4
		],
		o: 5
	},
	barely_sunny: {
		a: "Barely Sunny",
		b: "1F325-FE0F",
		c: "1F325",
		k: [
			5,
			54
		],
		n: [
			"sun_behind_cloud"
		],
		o: 2
	},
	"flag-pg": {
		a: "Papua New Guinea Flag",
		b: "1F1F5-1F1EC",
		k: [
			3,
			41
		],
		o: 2
	},
	shield: {
		a: "Shield",
		b: "1F6E1-FE0F",
		c: "1F6E1",
		j: [
			"protection",
			"security"
		],
		k: [
			36,
			43
		],
		o: 2
	},
	partly_sunny_rain: {
		a: "Partly Sunny Rain",
		b: "1F326-FE0F",
		c: "1F326",
		k: [
			5,
			55
		],
		n: [
			"sun_behind_rain_cloud"
		],
		o: 2
	},
	large_brown_circle: {
		a: "Large Brown Circle",
		b: "1F7E4",
		k: [
			37,
			7
		],
		o: 12
	},
	female_fairy: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9DA-1F3FB-200D-2640-FE0F",
				non_qualified: "1F9DA-1F3FB-200D-2640",
				image: "1f9da-1f3fb-200d-2640-fe0f.png",
				sheet_x: 49,
				sheet_y: 56,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false,
				obsoletes: "1F9DA-1F3FB"
			},
			"1F3FC": {
				unified: "1F9DA-1F3FC-200D-2640-FE0F",
				non_qualified: "1F9DA-1F3FC-200D-2640",
				image: "1f9da-1f3fc-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 0,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false,
				obsoletes: "1F9DA-1F3FC"
			},
			"1F3FD": {
				unified: "1F9DA-1F3FD-200D-2640-FE0F",
				non_qualified: "1F9DA-1F3FD-200D-2640",
				image: "1f9da-1f3fd-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 1,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false,
				obsoletes: "1F9DA-1F3FD"
			},
			"1F3FE": {
				unified: "1F9DA-1F3FE-200D-2640-FE0F",
				non_qualified: "1F9DA-1F3FE-200D-2640",
				image: "1f9da-1f3fe-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 2,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false,
				obsoletes: "1F9DA-1F3FE"
			},
			"1F3FF": {
				unified: "1F9DA-1F3FF-200D-2640-FE0F",
				non_qualified: "1F9DA-1F3FF-200D-2640",
				image: "1f9da-1f3ff-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 3,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false,
				obsoletes: "1F9DA-1F3FF"
			}
		},
		obsoletes: "1F9DA",
		a: "Female Fairy",
		b: "1F9DA-200D-2640-FE0F",
		c: "1F9DA-200D-2640",
		k: [
			49,
			55
		],
		o: 5
	},
	"flag-ph": {
		a: "Philippines Flag",
		b: "1F1F5-1F1ED",
		k: [
			3,
			42
		],
		o: 2
	},
	"flag-pk": {
		a: "Pakistan Flag",
		b: "1F1F5-1F1F0",
		k: [
			3,
			43
		],
		o: 2
	},
	black_circle: {
		a: "Medium Black Circle",
		b: "26AB",
		j: [
			"shape",
			"button",
			"round"
		],
		k: [
			53,
			53
		],
		o: 2
	},
	wrench: {
		a: "Wrench",
		b: "1F527",
		j: [
			"tools",
			"diy",
			"ikea",
			"fix",
			"maintainer"
		],
		k: [
			28,
			10
		],
		o: 2
	},
	vampire: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9DB-1F3FB",
				non_qualified: null,
				image: "1f9db-1f3fb.png",
				sheet_x: 50,
				sheet_y: 29,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9DB-1F3FB-200D-2640-FE0F"
			},
			"1F3FC": {
				unified: "1F9DB-1F3FC",
				non_qualified: null,
				image: "1f9db-1f3fc.png",
				sheet_x: 50,
				sheet_y: 30,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9DB-1F3FC-200D-2640-FE0F"
			},
			"1F3FD": {
				unified: "1F9DB-1F3FD",
				non_qualified: null,
				image: "1f9db-1f3fd.png",
				sheet_x: 50,
				sheet_y: 31,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9DB-1F3FD-200D-2640-FE0F"
			},
			"1F3FE": {
				unified: "1F9DB-1F3FE",
				non_qualified: null,
				image: "1f9db-1f3fe.png",
				sheet_x: 50,
				sheet_y: 32,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9DB-1F3FE-200D-2640-FE0F"
			},
			"1F3FF": {
				unified: "1F9DB-1F3FF",
				non_qualified: null,
				image: "1f9db-1f3ff.png",
				sheet_x: 50,
				sheet_y: 33,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9DB-1F3FF-200D-2640-FE0F"
			}
		},
		obsoleted_by: "1F9DB-200D-2640-FE0F",
		a: "Vampire",
		b: "1F9DB",
		k: [
			50,
			28
		],
		o: 5
	},
	rain_cloud: {
		a: "Rain Cloud",
		b: "1F327-FE0F",
		c: "1F327",
		k: [
			5,
			56
		],
		o: 2
	},
	snow_cloud: {
		a: "Snow Cloud",
		b: "1F328-FE0F",
		c: "1F328",
		k: [
			6,
			0
		],
		o: 2
	},
	"flag-pl": {
		a: "Poland Flag",
		b: "1F1F5-1F1F1",
		k: [
			3,
			44
		],
		o: 2
	},
	male_vampire: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9DB-1F3FB-200D-2642-FE0F",
				non_qualified: "1F9DB-1F3FB-200D-2642",
				image: "1f9db-1f3fb-200d-2642-fe0f.png",
				sheet_x: 50,
				sheet_y: 23,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9DB-1F3FC-200D-2642-FE0F",
				non_qualified: "1F9DB-1F3FC-200D-2642",
				image: "1f9db-1f3fc-200d-2642-fe0f.png",
				sheet_x: 50,
				sheet_y: 24,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9DB-1F3FD-200D-2642-FE0F",
				non_qualified: "1F9DB-1F3FD-200D-2642",
				image: "1f9db-1f3fd-200d-2642-fe0f.png",
				sheet_x: 50,
				sheet_y: 25,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9DB-1F3FE-200D-2642-FE0F",
				non_qualified: "1F9DB-1F3FE-200D-2642",
				image: "1f9db-1f3fe-200d-2642-fe0f.png",
				sheet_x: 50,
				sheet_y: 26,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9DB-1F3FF-200D-2642-FE0F",
				non_qualified: "1F9DB-1F3FF-200D-2642",
				image: "1f9db-1f3ff-200d-2642-fe0f.png",
				sheet_x: 50,
				sheet_y: 27,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Vampire",
		b: "1F9DB-200D-2642-FE0F",
		c: "1F9DB-200D-2642",
		k: [
			50,
			22
		],
		o: 5
	},
	nut_and_bolt: {
		a: "Nut and Bolt",
		b: "1F529",
		j: [
			"handy",
			"tools",
			"fix"
		],
		k: [
			28,
			12
		],
		o: 2
	},
	white_circle: {
		a: "Medium White Circle",
		b: "26AA",
		j: [
			"shape",
			"round"
		],
		k: [
			53,
			52
		],
		o: 2
	},
	female_vampire: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9DB-1F3FB-200D-2640-FE0F",
				non_qualified: "1F9DB-1F3FB-200D-2640",
				image: "1f9db-1f3fb-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 17,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9DB-1F3FB"
			},
			"1F3FC": {
				unified: "1F9DB-1F3FC-200D-2640-FE0F",
				non_qualified: "1F9DB-1F3FC-200D-2640",
				image: "1f9db-1f3fc-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 18,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9DB-1F3FC"
			},
			"1F3FD": {
				unified: "1F9DB-1F3FD-200D-2640-FE0F",
				non_qualified: "1F9DB-1F3FD-200D-2640",
				image: "1f9db-1f3fd-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 19,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9DB-1F3FD"
			},
			"1F3FE": {
				unified: "1F9DB-1F3FE-200D-2640-FE0F",
				non_qualified: "1F9DB-1F3FE-200D-2640",
				image: "1f9db-1f3fe-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 20,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9DB-1F3FE"
			},
			"1F3FF": {
				unified: "1F9DB-1F3FF-200D-2640-FE0F",
				non_qualified: "1F9DB-1F3FF-200D-2640",
				image: "1f9db-1f3ff-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 21,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9DB-1F3FF"
			}
		},
		obsoletes: "1F9DB",
		a: "Female Vampire",
		b: "1F9DB-200D-2640-FE0F",
		c: "1F9DB-200D-2640",
		k: [
			50,
			16
		],
		o: 5
	},
	"flag-pm": {
		a: "St. Pierre & Miquelon Flag",
		b: "1F1F5-1F1F2",
		k: [
			3,
			45
		],
		o: 2
	},
	large_red_square: {
		a: "Large Red Square",
		b: "1F7E5",
		k: [
			37,
			8
		],
		o: 12
	},
	lightning: {
		a: "Lightning",
		b: "1F329-FE0F",
		c: "1F329",
		k: [
			6,
			1
		],
		n: [
			"lightning_cloud"
		],
		o: 2
	},
	gear: {
		a: "Gear",
		b: "2699-FE0F",
		c: "2699",
		j: [
			"cog"
		],
		k: [
			53,
			47
		],
		o: 2
	},
	merperson: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9DC-1F3FB",
				non_qualified: null,
				image: "1f9dc-1f3fb.png",
				sheet_x: 50,
				sheet_y: 47,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9DC-1F3FB-200D-2642-FE0F"
			},
			"1F3FC": {
				unified: "1F9DC-1F3FC",
				non_qualified: null,
				image: "1f9dc-1f3fc.png",
				sheet_x: 50,
				sheet_y: 48,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9DC-1F3FC-200D-2642-FE0F"
			},
			"1F3FD": {
				unified: "1F9DC-1F3FD",
				non_qualified: null,
				image: "1f9dc-1f3fd.png",
				sheet_x: 50,
				sheet_y: 49,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9DC-1F3FD-200D-2642-FE0F"
			},
			"1F3FE": {
				unified: "1F9DC-1F3FE",
				non_qualified: null,
				image: "1f9dc-1f3fe.png",
				sheet_x: 50,
				sheet_y: 50,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9DC-1F3FE-200D-2642-FE0F"
			},
			"1F3FF": {
				unified: "1F9DC-1F3FF",
				non_qualified: null,
				image: "1f9dc-1f3ff.png",
				sheet_x: 50,
				sheet_y: 51,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9DC-1F3FF-200D-2642-FE0F"
			}
		},
		obsoleted_by: "1F9DC-200D-2642-FE0F",
		a: "Merperson",
		b: "1F9DC",
		k: [
			50,
			46
		],
		o: 5
	},
	tornado: {
		a: "Tornado",
		b: "1F32A-FE0F",
		c: "1F32A",
		j: [
			"weather",
			"cyclone",
			"twister"
		],
		k: [
			6,
			2
		],
		n: [
			"tornado_cloud"
		],
		o: 2
	},
	large_orange_square: {
		a: "Large Orange Square",
		b: "1F7E7",
		k: [
			37,
			10
		],
		o: 12
	},
	"flag-pn": {
		a: "Pitcairn Islands Flag",
		b: "1F1F5-1F1F3",
		k: [
			3,
			46
		],
		o: 2
	},
	compression: {
		a: "Compression",
		b: "1F5DC-FE0F",
		c: "1F5DC",
		k: [
			30,
			21
		],
		o: 2
	},
	merman: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9DC-1F3FB-200D-2642-FE0F",
				non_qualified: "1F9DC-1F3FB-200D-2642",
				image: "1f9dc-1f3fb-200d-2642-fe0f.png",
				sheet_x: 50,
				sheet_y: 41,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9DC-1F3FB"
			},
			"1F3FC": {
				unified: "1F9DC-1F3FC-200D-2642-FE0F",
				non_qualified: "1F9DC-1F3FC-200D-2642",
				image: "1f9dc-1f3fc-200d-2642-fe0f.png",
				sheet_x: 50,
				sheet_y: 42,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9DC-1F3FC"
			},
			"1F3FD": {
				unified: "1F9DC-1F3FD-200D-2642-FE0F",
				non_qualified: "1F9DC-1F3FD-200D-2642",
				image: "1f9dc-1f3fd-200d-2642-fe0f.png",
				sheet_x: 50,
				sheet_y: 43,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9DC-1F3FD"
			},
			"1F3FE": {
				unified: "1F9DC-1F3FE-200D-2642-FE0F",
				non_qualified: "1F9DC-1F3FE-200D-2642",
				image: "1f9dc-1f3fe-200d-2642-fe0f.png",
				sheet_x: 50,
				sheet_y: 44,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9DC-1F3FE"
			},
			"1F3FF": {
				unified: "1F9DC-1F3FF-200D-2642-FE0F",
				non_qualified: "1F9DC-1F3FF-200D-2642",
				image: "1f9dc-1f3ff-200d-2642-fe0f.png",
				sheet_x: 50,
				sheet_y: 45,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9DC-1F3FF"
			}
		},
		obsoletes: "1F9DC",
		a: "Merman",
		b: "1F9DC-200D-2642-FE0F",
		c: "1F9DC-200D-2642",
		k: [
			50,
			40
		],
		o: 5
	},
	large_yellow_square: {
		a: "Large Yellow Square",
		b: "1F7E8",
		k: [
			37,
			11
		],
		o: 12
	},
	fog: {
		a: "Fog",
		b: "1F32B-FE0F",
		c: "1F32B",
		j: [
			"weather"
		],
		k: [
			6,
			3
		],
		o: 2
	},
	scales: {
		a: "Scales",
		b: "2696-FE0F",
		c: "2696",
		k: [
			53,
			45
		],
		o: 2
	},
	"flag-pr": {
		a: "Puerto Rico Flag",
		b: "1F1F5-1F1F7",
		k: [
			3,
			47
		],
		o: 2
	},
	wind_blowing_face: {
		a: "Wind Blowing Face",
		b: "1F32C-FE0F",
		c: "1F32C",
		k: [
			6,
			4
		],
		o: 2
	},
	"flag-ps": {
		a: "Palestinian Territories Flag",
		b: "1F1F5-1F1F8",
		k: [
			3,
			48
		],
		o: 2
	},
	mermaid: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9DC-1F3FB-200D-2640-FE0F",
				non_qualified: "1F9DC-1F3FB-200D-2640",
				image: "1f9dc-1f3fb-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 35,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9DC-1F3FC-200D-2640-FE0F",
				non_qualified: "1F9DC-1F3FC-200D-2640",
				image: "1f9dc-1f3fc-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 36,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9DC-1F3FD-200D-2640-FE0F",
				non_qualified: "1F9DC-1F3FD-200D-2640",
				image: "1f9dc-1f3fd-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 37,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9DC-1F3FE-200D-2640-FE0F",
				non_qualified: "1F9DC-1F3FE-200D-2640",
				image: "1f9dc-1f3fe-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 38,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9DC-1F3FF-200D-2640-FE0F",
				non_qualified: "1F9DC-1F3FF-200D-2640",
				image: "1f9dc-1f3ff-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 39,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Mermaid",
		b: "1F9DC-200D-2640-FE0F",
		c: "1F9DC-200D-2640",
		k: [
			50,
			34
		],
		o: 5
	},
	probing_cane: {
		a: "Probing Cane",
		b: "1F9AF",
		k: [
			43,
			3
		],
		o: 12
	},
	large_green_square: {
		a: "Large Green Square",
		b: "1F7E9",
		k: [
			37,
			12
		],
		o: 12
	},
	"flag-pt": {
		a: "Portugal Flag",
		b: "1F1F5-1F1F9",
		k: [
			3,
			49
		],
		o: 2
	},
	link: {
		a: "Link Symbol",
		b: "1F517",
		j: [
			"rings",
			"url"
		],
		k: [
			27,
			51
		],
		o: 2
	},
	large_blue_square: {
		a: "Large Blue Square",
		b: "1F7E6",
		k: [
			37,
			9
		],
		o: 12
	},
	elf: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9DD-1F3FB",
				non_qualified: null,
				image: "1f9dd-1f3fb.png",
				sheet_x: 51,
				sheet_y: 8,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9DD-1F3FB-200D-2642-FE0F"
			},
			"1F3FC": {
				unified: "1F9DD-1F3FC",
				non_qualified: null,
				image: "1f9dd-1f3fc.png",
				sheet_x: 51,
				sheet_y: 9,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9DD-1F3FC-200D-2642-FE0F"
			},
			"1F3FD": {
				unified: "1F9DD-1F3FD",
				non_qualified: null,
				image: "1f9dd-1f3fd.png",
				sheet_x: 51,
				sheet_y: 10,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9DD-1F3FD-200D-2642-FE0F"
			},
			"1F3FE": {
				unified: "1F9DD-1F3FE",
				non_qualified: null,
				image: "1f9dd-1f3fe.png",
				sheet_x: 51,
				sheet_y: 11,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9DD-1F3FE-200D-2642-FE0F"
			},
			"1F3FF": {
				unified: "1F9DD-1F3FF",
				non_qualified: null,
				image: "1f9dd-1f3ff.png",
				sheet_x: 51,
				sheet_y: 12,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9DD-1F3FF-200D-2642-FE0F"
			}
		},
		obsoleted_by: "1F9DD-200D-2642-FE0F",
		a: "Elf",
		b: "1F9DD",
		k: [
			51,
			7
		],
		o: 5
	},
	cyclone: {
		a: "Cyclone",
		b: "1F300",
		j: [
			"weather",
			"swirl",
			"blue",
			"cloud",
			"vortex",
			"spiral",
			"whirlpool",
			"spin",
			"tornado",
			"hurricane",
			"typhoon"
		],
		k: [
			5,
			19
		],
		o: 2
	},
	rainbow: {
		a: "Rainbow",
		b: "1F308",
		j: [
			"nature",
			"happy",
			"unicorn_face",
			"photo",
			"sky",
			"spring"
		],
		k: [
			5,
			27
		],
		o: 2
	},
	male_elf: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9DD-1F3FB-200D-2642-FE0F",
				non_qualified: "1F9DD-1F3FB-200D-2642",
				image: "1f9dd-1f3fb-200d-2642-fe0f.png",
				sheet_x: 51,
				sheet_y: 2,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9DD-1F3FB"
			},
			"1F3FC": {
				unified: "1F9DD-1F3FC-200D-2642-FE0F",
				non_qualified: "1F9DD-1F3FC-200D-2642",
				image: "1f9dd-1f3fc-200d-2642-fe0f.png",
				sheet_x: 51,
				sheet_y: 3,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9DD-1F3FC"
			},
			"1F3FD": {
				unified: "1F9DD-1F3FD-200D-2642-FE0F",
				non_qualified: "1F9DD-1F3FD-200D-2642",
				image: "1f9dd-1f3fd-200d-2642-fe0f.png",
				sheet_x: 51,
				sheet_y: 4,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9DD-1F3FD"
			},
			"1F3FE": {
				unified: "1F9DD-1F3FE-200D-2642-FE0F",
				non_qualified: "1F9DD-1F3FE-200D-2642",
				image: "1f9dd-1f3fe-200d-2642-fe0f.png",
				sheet_x: 51,
				sheet_y: 5,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9DD-1F3FE"
			},
			"1F3FF": {
				unified: "1F9DD-1F3FF-200D-2642-FE0F",
				non_qualified: "1F9DD-1F3FF-200D-2642",
				image: "1f9dd-1f3ff-200d-2642-fe0f.png",
				sheet_x: 51,
				sheet_y: 6,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9DD-1F3FF"
			}
		},
		obsoletes: "1F9DD",
		a: "Male Elf",
		b: "1F9DD-200D-2642-FE0F",
		c: "1F9DD-200D-2642",
		k: [
			51,
			1
		],
		o: 5
	},
	"flag-pw": {
		a: "Palau Flag",
		b: "1F1F5-1F1FC",
		k: [
			3,
			50
		],
		o: 2
	},
	chains: {
		a: "Chains",
		b: "26D3-FE0F",
		c: "26D3",
		j: [
			"lock",
			"arrest"
		],
		k: [
			54,
			7
		],
		o: 2
	},
	large_purple_square: {
		a: "Large Purple Square",
		b: "1F7EA",
		k: [
			37,
			13
		],
		o: 12
	},
	female_elf: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9DD-1F3FB-200D-2640-FE0F",
				non_qualified: "1F9DD-1F3FB-200D-2640",
				image: "1f9dd-1f3fb-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 53,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9DD-1F3FC-200D-2640-FE0F",
				non_qualified: "1F9DD-1F3FC-200D-2640",
				image: "1f9dd-1f3fc-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 54,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9DD-1F3FD-200D-2640-FE0F",
				non_qualified: "1F9DD-1F3FD-200D-2640",
				image: "1f9dd-1f3fd-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 55,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9DD-1F3FE-200D-2640-FE0F",
				non_qualified: "1F9DD-1F3FE-200D-2640",
				image: "1f9dd-1f3fe-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 56,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9DD-1F3FF-200D-2640-FE0F",
				non_qualified: "1F9DD-1F3FF-200D-2640",
				image: "1f9dd-1f3ff-200d-2640-fe0f.png",
				sheet_x: 51,
				sheet_y: 0,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Elf",
		b: "1F9DD-200D-2640-FE0F",
		c: "1F9DD-200D-2640",
		k: [
			50,
			52
		],
		o: 5
	},
	"flag-py": {
		a: "Paraguay Flag",
		b: "1F1F5-1F1FE",
		k: [
			3,
			51
		],
		o: 2
	},
	closed_umbrella: {
		a: "Closed Umbrella",
		b: "1F302",
		j: [
			"weather",
			"rain",
			"drizzle"
		],
		k: [
			5,
			21
		],
		o: 2
	},
	toolbox: {
		a: "Toolbox",
		b: "1F9F0",
		k: [
			51,
			35
		],
		o: 11
	},
	large_brown_square: {
		a: "Large Brown Square",
		b: "1F7EB",
		k: [
			37,
			14
		],
		o: 12
	},
	magnet: {
		a: "Magnet",
		b: "1F9F2",
		k: [
			51,
			37
		],
		o: 11
	},
	genie: {
		obsoleted_by: "1F9DE-200D-2642-FE0F",
		a: "Genie",
		b: "1F9DE",
		k: [
			51,
			15
		],
		o: 5
	},
	"flag-qa": {
		a: "Qatar Flag",
		b: "1F1F6-1F1E6",
		k: [
			3,
			52
		],
		o: 2
	},
	umbrella: {
		a: "Umbrella",
		b: "2602-FE0F",
		c: "2602",
		j: [
			"rainy",
			"weather",
			"spring"
		],
		k: [
			52,
			51
		],
		o: 2
	},
	black_large_square: {
		a: "Black Large Square",
		b: "2B1B",
		j: [
			"shape",
			"icon",
			"button"
		],
		k: [
			55,
			40
		],
		o: 2
	},
	male_genie: {
		obsoletes: "1F9DE",
		a: "Male Genie",
		b: "1F9DE-200D-2642-FE0F",
		c: "1F9DE-200D-2642",
		k: [
			51,
			14
		],
		o: 5
	},
	umbrella_with_rain_drops: {
		a: "Umbrella with Rain Drops",
		b: "2614",
		k: [
			52,
			56
		],
		o: 2
	},
	"flag-re": {
		a: "Réunion Flag",
		b: "1F1F7-1F1EA",
		k: [
			3,
			53
		],
		o: 2
	},
	white_large_square: {
		a: "White Large Square",
		b: "2B1C",
		j: [
			"shape",
			"icon",
			"stone",
			"button"
		],
		k: [
			55,
			41
		],
		o: 2
	},
	alembic: {
		a: "Alembic",
		b: "2697-FE0F",
		c: "2697",
		j: [
			"distilling",
			"science",
			"experiment",
			"chemistry"
		],
		k: [
			53,
			46
		],
		o: 2
	},
	black_medium_square: {
		a: "Black Medium Square",
		b: "25FC-FE0F",
		c: "25FC",
		j: [
			"shape",
			"button",
			"icon"
		],
		k: [
			52,
			46
		],
		o: 2
	},
	test_tube: {
		a: "Test Tube",
		b: "1F9EA",
		k: [
			51,
			29
		],
		o: 11
	},
	"flag-ro": {
		a: "Romania Flag",
		b: "1F1F7-1F1F4",
		k: [
			3,
			54
		],
		o: 2
	},
	female_genie: {
		a: "Female Genie",
		b: "1F9DE-200D-2640-FE0F",
		c: "1F9DE-200D-2640",
		k: [
			51,
			13
		],
		o: 5
	},
	umbrella_on_ground: {
		a: "Umbrella on Ground",
		b: "26F1-FE0F",
		c: "26F1",
		k: [
			54,
			12
		],
		o: 2
	},
	zombie: {
		obsoleted_by: "1F9DF-200D-2642-FE0F",
		a: "Zombie",
		b: "1F9DF",
		k: [
			51,
			18
		],
		o: 5
	},
	zap: {
		a: "High Voltage Sign",
		b: "26A1",
		j: [
			"thunder",
			"weather",
			"lightning bolt",
			"fast"
		],
		k: [
			53,
			51
		],
		o: 2
	},
	white_medium_square: {
		a: "White Medium Square",
		b: "25FB-FE0F",
		c: "25FB",
		j: [
			"shape",
			"stone",
			"icon"
		],
		k: [
			52,
			45
		],
		o: 2
	},
	"flag-rs": {
		a: "Serbia Flag",
		b: "1F1F7-1F1F8",
		k: [
			3,
			55
		],
		o: 2
	},
	petri_dish: {
		a: "Petri Dish",
		b: "1F9EB",
		k: [
			51,
			30
		],
		o: 11
	},
	snowflake: {
		a: "Snowflake",
		b: "2744-FE0F",
		c: "2744",
		j: [
			"winter",
			"season",
			"cold",
			"weather",
			"christmas",
			"xmas"
		],
		k: [
			55,
			19
		],
		o: 2
	},
	dna: {
		a: "Dna Double Helix",
		b: "1F9EC",
		k: [
			51,
			31
		],
		o: 11
	},
	male_zombie: {
		obsoletes: "1F9DF",
		a: "Male Zombie",
		b: "1F9DF-200D-2642-FE0F",
		c: "1F9DF-200D-2642",
		k: [
			51,
			17
		],
		o: 5
	},
	black_medium_small_square: {
		a: "Black Medium Small Square",
		b: "25FE",
		j: [
			"icon",
			"shape",
			"button"
		],
		k: [
			52,
			48
		],
		o: 2
	},
	ru: {
		a: "Russia Flag",
		b: "1F1F7-1F1FA",
		j: [
			"russian",
			"federation",
			"flag",
			"nation",
			"country",
			"banner"
		],
		k: [
			3,
			56
		],
		n: [
			"flag-ru"
		],
		o: 2
	},
	female_zombie: {
		a: "Female Zombie",
		b: "1F9DF-200D-2640-FE0F",
		c: "1F9DF-200D-2640",
		k: [
			51,
			16
		],
		o: 5
	},
	"flag-rw": {
		a: "Rwanda Flag",
		b: "1F1F7-1F1FC",
		k: [
			4,
			0
		],
		o: 2
	},
	snowman: {
		a: "Snowman",
		b: "2603-FE0F",
		c: "2603",
		j: [
			"winter",
			"season",
			"cold",
			"weather",
			"christmas",
			"xmas",
			"frozen",
			"without_snow"
		],
		k: [
			52,
			52
		],
		o: 2
	},
	white_medium_small_square: {
		a: "White Medium Small Square",
		b: "25FD",
		j: [
			"shape",
			"stone",
			"icon",
			"button"
		],
		k: [
			52,
			47
		],
		o: 2
	},
	microscope: {
		a: "Microscope",
		b: "1F52C",
		j: [
			"laboratory",
			"experiment",
			"zoomin",
			"science",
			"study"
		],
		k: [
			28,
			15
		],
		o: 2
	},
	snowman_without_snow: {
		a: "Snowman Without Snow",
		b: "26C4",
		k: [
			54,
			1
		],
		o: 2
	},
	telescope: {
		a: "Telescope",
		b: "1F52D",
		j: [
			"stars",
			"space",
			"zoom",
			"science",
			"astronomy"
		],
		k: [
			28,
			16
		],
		o: 2
	},
	massage: {
		skin_variations: {
			"1F3FB": {
				unified: "1F486-1F3FB",
				non_qualified: null,
				image: "1f486-1f3fb.png",
				sheet_x: 24,
				sheet_y: 52,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F486-1F3FC",
				non_qualified: null,
				image: "1f486-1f3fc.png",
				sheet_x: 24,
				sheet_y: 53,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F486-1F3FD",
				non_qualified: null,
				image: "1f486-1f3fd.png",
				sheet_x: 24,
				sheet_y: 54,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F486-1F3FE",
				non_qualified: null,
				image: "1f486-1f3fe.png",
				sheet_x: 24,
				sheet_y: 55,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F486-1F3FF",
				non_qualified: null,
				image: "1f486-1f3ff.png",
				sheet_x: 24,
				sheet_y: 56,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F486-200D-2640-FE0F",
		a: "Face Massage",
		b: "1F486",
		k: [
			24,
			51
		],
		o: 2
	},
	black_small_square: {
		a: "Black Small Square",
		b: "25AA-FE0F",
		c: "25AA",
		j: [
			"shape",
			"icon"
		],
		k: [
			52,
			41
		],
		o: 2
	},
	"flag-sa": {
		a: "Saudi Arabia Flag",
		b: "1F1F8-1F1E6",
		k: [
			4,
			1
		],
		o: 2
	},
	"man-getting-massage": {
		skin_variations: {
			"1F3FB": {
				unified: "1F486-1F3FB-200D-2642-FE0F",
				non_qualified: "1F486-1F3FB-200D-2642",
				image: "1f486-1f3fb-200d-2642-fe0f.png",
				sheet_x: 24,
				sheet_y: 46,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F486-1F3FC-200D-2642-FE0F",
				non_qualified: "1F486-1F3FC-200D-2642",
				image: "1f486-1f3fc-200d-2642-fe0f.png",
				sheet_x: 24,
				sheet_y: 47,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F486-1F3FD-200D-2642-FE0F",
				non_qualified: "1F486-1F3FD-200D-2642",
				image: "1f486-1f3fd-200d-2642-fe0f.png",
				sheet_x: 24,
				sheet_y: 48,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F486-1F3FE-200D-2642-FE0F",
				non_qualified: "1F486-1F3FE-200D-2642",
				image: "1f486-1f3fe-200d-2642-fe0f.png",
				sheet_x: 24,
				sheet_y: 49,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F486-1F3FF-200D-2642-FE0F",
				non_qualified: "1F486-1F3FF-200D-2642",
				image: "1f486-1f3ff-200d-2642-fe0f.png",
				sheet_x: 24,
				sheet_y: 50,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Getting Massage",
		b: "1F486-200D-2642-FE0F",
		c: "1F486-200D-2642",
		k: [
			24,
			45
		],
		o: 4
	},
	comet: {
		a: "Comet",
		b: "2604-FE0F",
		c: "2604",
		j: [
			"space"
		],
		k: [
			52,
			53
		],
		o: 2
	},
	white_small_square: {
		a: "White Small Square",
		b: "25AB-FE0F",
		c: "25AB",
		j: [
			"shape",
			"icon"
		],
		k: [
			52,
			42
		],
		o: 2
	},
	"flag-sb": {
		a: "Solomon Islands Flag",
		b: "1F1F8-1F1E7",
		k: [
			4,
			2
		],
		o: 2
	},
	satellite_antenna: {
		a: "Satellite Antenna",
		b: "1F4E1",
		k: [
			26,
			55
		],
		o: 2
	},
	large_orange_diamond: {
		a: "Large Orange Diamond",
		b: "1F536",
		j: [
			"shape",
			"jewel",
			"gem"
		],
		k: [
			28,
			25
		],
		o: 2
	},
	"woman-getting-massage": {
		skin_variations: {
			"1F3FB": {
				unified: "1F486-1F3FB-200D-2640-FE0F",
				non_qualified: "1F486-1F3FB-200D-2640",
				image: "1f486-1f3fb-200d-2640-fe0f.png",
				sheet_x: 24,
				sheet_y: 40,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F486-1F3FC-200D-2640-FE0F",
				non_qualified: "1F486-1F3FC-200D-2640",
				image: "1f486-1f3fc-200d-2640-fe0f.png",
				sheet_x: 24,
				sheet_y: 41,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F486-1F3FD-200D-2640-FE0F",
				non_qualified: "1F486-1F3FD-200D-2640",
				image: "1f486-1f3fd-200d-2640-fe0f.png",
				sheet_x: 24,
				sheet_y: 42,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F486-1F3FE-200D-2640-FE0F",
				non_qualified: "1F486-1F3FE-200D-2640",
				image: "1f486-1f3fe-200d-2640-fe0f.png",
				sheet_x: 24,
				sheet_y: 43,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F486-1F3FF-200D-2640-FE0F",
				non_qualified: "1F486-1F3FF-200D-2640",
				image: "1f486-1f3ff-200d-2640-fe0f.png",
				sheet_x: 24,
				sheet_y: 44,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F486",
		a: "Woman Getting Massage",
		b: "1F486-200D-2640-FE0F",
		c: "1F486-200D-2640",
		k: [
			24,
			39
		],
		o: 4
	},
	fire: {
		a: "Fire",
		b: "1F525",
		j: [
			"hot",
			"cook",
			"flame"
		],
		k: [
			28,
			8
		],
		o: 2
	},
	syringe: {
		a: "Syringe",
		b: "1F489",
		j: [
			"health",
			"hospital",
			"drugs",
			"blood",
			"medicine",
			"needle",
			"doctor",
			"nurse"
		],
		k: [
			25,
			19
		],
		o: 2
	},
	"flag-sc": {
		a: "Seychelles Flag",
		b: "1F1F8-1F1E8",
		k: [
			4,
			3
		],
		o: 2
	},
	large_blue_diamond: {
		a: "Large Blue Diamond",
		b: "1F537",
		j: [
			"shape",
			"jewel",
			"gem"
		],
		k: [
			28,
			26
		],
		o: 2
	},
	"flag-sd": {
		a: "Sudan Flag",
		b: "1F1F8-1F1E9",
		k: [
			4,
			4
		],
		o: 2
	},
	droplet: {
		a: "Droplet",
		b: "1F4A7",
		j: [
			"water",
			"drip",
			"faucet",
			"spring"
		],
		k: [
			25,
			49
		],
		o: 2
	},
	drop_of_blood: {
		a: "Drop of Blood",
		b: "1FA78",
		k: [
			51,
			55
		],
		o: 12
	},
	haircut: {
		skin_variations: {
			"1F3FB": {
				unified: "1F487-1F3FB",
				non_qualified: null,
				image: "1f487-1f3fb.png",
				sheet_x: 25,
				sheet_y: 13,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F487-1F3FC",
				non_qualified: null,
				image: "1f487-1f3fc.png",
				sheet_x: 25,
				sheet_y: 14,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F487-1F3FD",
				non_qualified: null,
				image: "1f487-1f3fd.png",
				sheet_x: 25,
				sheet_y: 15,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F487-1F3FE",
				non_qualified: null,
				image: "1f487-1f3fe.png",
				sheet_x: 25,
				sheet_y: 16,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F487-1F3FF",
				non_qualified: null,
				image: "1f487-1f3ff.png",
				sheet_x: 25,
				sheet_y: 17,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F487-200D-2640-FE0F",
		a: "Haircut",
		b: "1F487",
		k: [
			25,
			12
		],
		o: 2
	},
	ocean: {
		a: "Water Wave",
		b: "1F30A",
		j: [
			"sea",
			"water",
			"wave",
			"nature",
			"tsunami",
			"disaster"
		],
		k: [
			5,
			29
		],
		o: 2
	},
	"flag-se": {
		a: "Sweden Flag",
		b: "1F1F8-1F1EA",
		k: [
			4,
			5
		],
		o: 2
	},
	"man-getting-haircut": {
		skin_variations: {
			"1F3FB": {
				unified: "1F487-1F3FB-200D-2642-FE0F",
				non_qualified: "1F487-1F3FB-200D-2642",
				image: "1f487-1f3fb-200d-2642-fe0f.png",
				sheet_x: 25,
				sheet_y: 7,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F487-1F3FC-200D-2642-FE0F",
				non_qualified: "1F487-1F3FC-200D-2642",
				image: "1f487-1f3fc-200d-2642-fe0f.png",
				sheet_x: 25,
				sheet_y: 8,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F487-1F3FD-200D-2642-FE0F",
				non_qualified: "1F487-1F3FD-200D-2642",
				image: "1f487-1f3fd-200d-2642-fe0f.png",
				sheet_x: 25,
				sheet_y: 9,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F487-1F3FE-200D-2642-FE0F",
				non_qualified: "1F487-1F3FE-200D-2642",
				image: "1f487-1f3fe-200d-2642-fe0f.png",
				sheet_x: 25,
				sheet_y: 10,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F487-1F3FF-200D-2642-FE0F",
				non_qualified: "1F487-1F3FF-200D-2642",
				image: "1f487-1f3ff-200d-2642-fe0f.png",
				sheet_x: 25,
				sheet_y: 11,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Getting Haircut",
		b: "1F487-200D-2642-FE0F",
		c: "1F487-200D-2642",
		k: [
			25,
			6
		],
		o: 4
	},
	small_orange_diamond: {
		a: "Small Orange Diamond",
		b: "1F538",
		j: [
			"shape",
			"jewel",
			"gem"
		],
		k: [
			28,
			27
		],
		o: 2
	},
	pill: {
		a: "Pill",
		b: "1F48A",
		j: [
			"health",
			"medicine",
			"doctor",
			"pharmacy",
			"drug"
		],
		k: [
			25,
			20
		],
		o: 2
	},
	"woman-getting-haircut": {
		skin_variations: {
			"1F3FB": {
				unified: "1F487-1F3FB-200D-2640-FE0F",
				non_qualified: "1F487-1F3FB-200D-2640",
				image: "1f487-1f3fb-200d-2640-fe0f.png",
				sheet_x: 25,
				sheet_y: 1,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F487-1F3FC-200D-2640-FE0F",
				non_qualified: "1F487-1F3FC-200D-2640",
				image: "1f487-1f3fc-200d-2640-fe0f.png",
				sheet_x: 25,
				sheet_y: 2,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F487-1F3FD-200D-2640-FE0F",
				non_qualified: "1F487-1F3FD-200D-2640",
				image: "1f487-1f3fd-200d-2640-fe0f.png",
				sheet_x: 25,
				sheet_y: 3,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F487-1F3FE-200D-2640-FE0F",
				non_qualified: "1F487-1F3FE-200D-2640",
				image: "1f487-1f3fe-200d-2640-fe0f.png",
				sheet_x: 25,
				sheet_y: 4,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F487-1F3FF-200D-2640-FE0F",
				non_qualified: "1F487-1F3FF-200D-2640",
				image: "1f487-1f3ff-200d-2640-fe0f.png",
				sheet_x: 25,
				sheet_y: 5,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F487",
		a: "Woman Getting Haircut",
		b: "1F487-200D-2640-FE0F",
		c: "1F487-200D-2640",
		k: [
			25,
			0
		],
		o: 4
	},
	small_blue_diamond: {
		a: "Small Blue Diamond",
		b: "1F539",
		j: [
			"shape",
			"jewel",
			"gem"
		],
		k: [
			28,
			28
		],
		o: 2
	},
	"flag-sg": {
		a: "Singapore Flag",
		b: "1F1F8-1F1EC",
		k: [
			4,
			6
		],
		o: 2
	},
	adhesive_bandage: {
		a: "Adhesive Bandage",
		b: "1FA79",
		k: [
			51,
			56
		],
		o: 12
	},
	walking: {
		skin_variations: {
			"1F3FB": {
				unified: "1F6B6-1F3FB",
				non_qualified: null,
				image: "1f6b6-1f3fb.png",
				sheet_x: 36,
				sheet_y: 3,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F6B6-1F3FC",
				non_qualified: null,
				image: "1f6b6-1f3fc.png",
				sheet_x: 36,
				sheet_y: 4,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F6B6-1F3FD",
				non_qualified: null,
				image: "1f6b6-1f3fd.png",
				sheet_x: 36,
				sheet_y: 5,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F6B6-1F3FE",
				non_qualified: null,
				image: "1f6b6-1f3fe.png",
				sheet_x: 36,
				sheet_y: 6,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F6B6-1F3FF",
				non_qualified: null,
				image: "1f6b6-1f3ff.png",
				sheet_x: 36,
				sheet_y: 7,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F6B6-200D-2642-FE0F",
		a: "Pedestrian",
		b: "1F6B6",
		k: [
			36,
			2
		],
		o: 2
	},
	small_red_triangle: {
		a: "Up-Pointing Red Triangle",
		b: "1F53A",
		j: [
			"shape",
			"direction",
			"up",
			"top"
		],
		k: [
			28,
			29
		],
		o: 2
	},
	"flag-sh": {
		a: "St. Helena Flag",
		b: "1F1F8-1F1ED",
		k: [
			4,
			7
		],
		o: 2
	},
	stethoscope: {
		a: "Stethoscope",
		b: "1FA7A",
		k: [
			52,
			0
		],
		o: 12
	},
	"man-walking": {
		skin_variations: {
			"1F3FB": {
				unified: "1F6B6-1F3FB-200D-2642-FE0F",
				non_qualified: "1F6B6-1F3FB-200D-2642",
				image: "1f6b6-1f3fb-200d-2642-fe0f.png",
				sheet_x: 35,
				sheet_y: 54,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F6B6-1F3FC-200D-2642-FE0F",
				non_qualified: "1F6B6-1F3FC-200D-2642",
				image: "1f6b6-1f3fc-200d-2642-fe0f.png",
				sheet_x: 35,
				sheet_y: 55,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F6B6-1F3FD-200D-2642-FE0F",
				non_qualified: "1F6B6-1F3FD-200D-2642",
				image: "1f6b6-1f3fd-200d-2642-fe0f.png",
				sheet_x: 35,
				sheet_y: 56,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F6B6-1F3FE-200D-2642-FE0F",
				non_qualified: "1F6B6-1F3FE-200D-2642",
				image: "1f6b6-1f3fe-200d-2642-fe0f.png",
				sheet_x: 36,
				sheet_y: 0,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F6B6-1F3FF-200D-2642-FE0F",
				non_qualified: "1F6B6-1F3FF-200D-2642",
				image: "1f6b6-1f3ff-200d-2642-fe0f.png",
				sheet_x: 36,
				sheet_y: 1,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F6B6",
		a: "Man Walking",
		b: "1F6B6-200D-2642-FE0F",
		c: "1F6B6-200D-2642",
		k: [
			35,
			53
		],
		o: 4
	},
	"flag-si": {
		a: "Slovenia Flag",
		b: "1F1F8-1F1EE",
		k: [
			4,
			8
		],
		o: 2
	},
	door: {
		a: "Door",
		b: "1F6AA",
		j: [
			"house",
			"entry",
			"exit"
		],
		k: [
			35,
			1
		],
		o: 2
	},
	small_red_triangle_down: {
		a: "Down-Pointing Red Triangle",
		b: "1F53B",
		j: [
			"shape",
			"direction",
			"bottom"
		],
		k: [
			28,
			30
		],
		o: 2
	},
	"flag-sj": {
		a: "Svalbard & Jan Mayen Flag",
		b: "1F1F8-1F1EF",
		k: [
			4,
			9
		],
		o: 2
	},
	diamond_shape_with_a_dot_inside: {
		a: "Diamond Shape with a Dot Inside",
		b: "1F4A0",
		j: [
			"jewel",
			"blue",
			"gem",
			"crystal",
			"fancy"
		],
		k: [
			25,
			42
		],
		o: 2
	},
	"woman-walking": {
		skin_variations: {
			"1F3FB": {
				unified: "1F6B6-1F3FB-200D-2640-FE0F",
				non_qualified: "1F6B6-1F3FB-200D-2640",
				image: "1f6b6-1f3fb-200d-2640-fe0f.png",
				sheet_x: 35,
				sheet_y: 48,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F6B6-1F3FC-200D-2640-FE0F",
				non_qualified: "1F6B6-1F3FC-200D-2640",
				image: "1f6b6-1f3fc-200d-2640-fe0f.png",
				sheet_x: 35,
				sheet_y: 49,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F6B6-1F3FD-200D-2640-FE0F",
				non_qualified: "1F6B6-1F3FD-200D-2640",
				image: "1f6b6-1f3fd-200d-2640-fe0f.png",
				sheet_x: 35,
				sheet_y: 50,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F6B6-1F3FE-200D-2640-FE0F",
				non_qualified: "1F6B6-1F3FE-200D-2640",
				image: "1f6b6-1f3fe-200d-2640-fe0f.png",
				sheet_x: 35,
				sheet_y: 51,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F6B6-1F3FF-200D-2640-FE0F",
				non_qualified: "1F6B6-1F3FF-200D-2640",
				image: "1f6b6-1f3ff-200d-2640-fe0f.png",
				sheet_x: 35,
				sheet_y: 52,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Walking",
		b: "1F6B6-200D-2640-FE0F",
		c: "1F6B6-200D-2640",
		k: [
			35,
			47
		],
		o: 4
	},
	bed: {
		a: "Bed",
		b: "1F6CF-FE0F",
		c: "1F6CF",
		j: [
			"sleep",
			"rest"
		],
		k: [
			36,
			37
		],
		o: 2
	},
	radio_button: {
		a: "Radio Button",
		b: "1F518",
		j: [
			"input",
			"old",
			"music",
			"circle"
		],
		k: [
			27,
			52
		],
		o: 2
	},
	"flag-sk": {
		a: "Slovakia Flag",
		b: "1F1F8-1F1F0",
		k: [
			4,
			10
		],
		o: 2
	},
	standing_person: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9CD-1F3FB",
				non_qualified: null,
				image: "1f9cd-1f3fb.png",
				sheet_x: 44,
				sheet_y: 32,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9CD-1F3FC",
				non_qualified: null,
				image: "1f9cd-1f3fc.png",
				sheet_x: 44,
				sheet_y: 33,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9CD-1F3FD",
				non_qualified: null,
				image: "1f9cd-1f3fd.png",
				sheet_x: 44,
				sheet_y: 34,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9CD-1F3FE",
				non_qualified: null,
				image: "1f9cd-1f3fe.png",
				sheet_x: 44,
				sheet_y: 35,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9CD-1F3FF",
				non_qualified: null,
				image: "1f9cd-1f3ff.png",
				sheet_x: 44,
				sheet_y: 36,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Standing Person",
		b: "1F9CD",
		k: [
			44,
			31
		],
		o: 12
	},
	couch_and_lamp: {
		a: "Couch and Lamp",
		b: "1F6CB-FE0F",
		c: "1F6CB",
		j: [
			"read",
			"chill"
		],
		k: [
			36,
			28
		],
		o: 2
	},
	man_standing: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9CD-1F3FB-200D-2642-FE0F",
				non_qualified: "1F9CD-1F3FB-200D-2642",
				image: "1f9cd-1f3fb-200d-2642-fe0f.png",
				sheet_x: 44,
				sheet_y: 26,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9CD-1F3FC-200D-2642-FE0F",
				non_qualified: "1F9CD-1F3FC-200D-2642",
				image: "1f9cd-1f3fc-200d-2642-fe0f.png",
				sheet_x: 44,
				sheet_y: 27,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9CD-1F3FD-200D-2642-FE0F",
				non_qualified: "1F9CD-1F3FD-200D-2642",
				image: "1f9cd-1f3fd-200d-2642-fe0f.png",
				sheet_x: 44,
				sheet_y: 28,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9CD-1F3FE-200D-2642-FE0F",
				non_qualified: "1F9CD-1F3FE-200D-2642",
				image: "1f9cd-1f3fe-200d-2642-fe0f.png",
				sheet_x: 44,
				sheet_y: 29,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9CD-1F3FF-200D-2642-FE0F",
				non_qualified: "1F9CD-1F3FF-200D-2642",
				image: "1f9cd-1f3ff-200d-2642-fe0f.png",
				sheet_x: 44,
				sheet_y: 30,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Standing",
		b: "1F9CD-200D-2642-FE0F",
		c: "1F9CD-200D-2642",
		k: [
			44,
			25
		],
		o: 12
	},
	white_square_button: {
		a: "White Square Button",
		b: "1F533",
		j: [
			"shape",
			"input"
		],
		k: [
			28,
			22
		],
		o: 2
	},
	"flag-sl": {
		a: "Sierra Leone Flag",
		b: "1F1F8-1F1F1",
		k: [
			4,
			11
		],
		o: 2
	},
	chair: {
		a: "Chair",
		b: "1FA91",
		k: [
			52,
			5
		],
		o: 12
	},
	toilet: {
		a: "Toilet",
		b: "1F6BD",
		j: [
			"restroom",
			"wc",
			"washroom",
			"bathroom",
			"potty"
		],
		k: [
			36,
			14
		],
		o: 2
	},
	black_square_button: {
		a: "Black Square Button",
		b: "1F532",
		j: [
			"shape",
			"input",
			"frame"
		],
		k: [
			28,
			21
		],
		o: 2
	},
	"flag-sm": {
		a: "San Marino Flag",
		b: "1F1F8-1F1F2",
		k: [
			4,
			12
		],
		o: 2
	},
	woman_standing: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9CD-1F3FB-200D-2640-FE0F",
				non_qualified: "1F9CD-1F3FB-200D-2640",
				image: "1f9cd-1f3fb-200d-2640-fe0f.png",
				sheet_x: 44,
				sheet_y: 20,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9CD-1F3FC-200D-2640-FE0F",
				non_qualified: "1F9CD-1F3FC-200D-2640",
				image: "1f9cd-1f3fc-200d-2640-fe0f.png",
				sheet_x: 44,
				sheet_y: 21,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9CD-1F3FD-200D-2640-FE0F",
				non_qualified: "1F9CD-1F3FD-200D-2640",
				image: "1f9cd-1f3fd-200d-2640-fe0f.png",
				sheet_x: 44,
				sheet_y: 22,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9CD-1F3FE-200D-2640-FE0F",
				non_qualified: "1F9CD-1F3FE-200D-2640",
				image: "1f9cd-1f3fe-200d-2640-fe0f.png",
				sheet_x: 44,
				sheet_y: 23,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9CD-1F3FF-200D-2640-FE0F",
				non_qualified: "1F9CD-1F3FF-200D-2640",
				image: "1f9cd-1f3ff-200d-2640-fe0f.png",
				sheet_x: 44,
				sheet_y: 24,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Standing",
		b: "1F9CD-200D-2640-FE0F",
		c: "1F9CD-200D-2640",
		k: [
			44,
			19
		],
		o: 12
	},
	kneeling_person: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9CE-1F3FB",
				non_qualified: null,
				image: "1f9ce-1f3fb.png",
				sheet_x: 44,
				sheet_y: 50,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9CE-1F3FC",
				non_qualified: null,
				image: "1f9ce-1f3fc.png",
				sheet_x: 44,
				sheet_y: 51,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9CE-1F3FD",
				non_qualified: null,
				image: "1f9ce-1f3fd.png",
				sheet_x: 44,
				sheet_y: 52,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9CE-1F3FE",
				non_qualified: null,
				image: "1f9ce-1f3fe.png",
				sheet_x: 44,
				sheet_y: 53,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9CE-1F3FF",
				non_qualified: null,
				image: "1f9ce-1f3ff.png",
				sheet_x: 44,
				sheet_y: 54,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Kneeling Person",
		b: "1F9CE",
		k: [
			44,
			49
		],
		o: 12
	},
	shower: {
		a: "Shower",
		b: "1F6BF",
		j: [
			"clean",
			"water",
			"bathroom"
		],
		k: [
			36,
			16
		],
		o: 2
	},
	"flag-sn": {
		a: "Senegal Flag",
		b: "1F1F8-1F1F3",
		k: [
			4,
			13
		],
		o: 2
	},
	bathtub: {
		a: "Bathtub",
		b: "1F6C1",
		j: [
			"clean",
			"shower",
			"bathroom"
		],
		k: [
			36,
			23
		],
		o: 2
	},
	"flag-so": {
		a: "Somalia Flag",
		b: "1F1F8-1F1F4",
		k: [
			4,
			14
		],
		o: 2
	},
	man_kneeling: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9CE-1F3FB-200D-2642-FE0F",
				non_qualified: "1F9CE-1F3FB-200D-2642",
				image: "1f9ce-1f3fb-200d-2642-fe0f.png",
				sheet_x: 44,
				sheet_y: 44,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9CE-1F3FC-200D-2642-FE0F",
				non_qualified: "1F9CE-1F3FC-200D-2642",
				image: "1f9ce-1f3fc-200d-2642-fe0f.png",
				sheet_x: 44,
				sheet_y: 45,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9CE-1F3FD-200D-2642-FE0F",
				non_qualified: "1F9CE-1F3FD-200D-2642",
				image: "1f9ce-1f3fd-200d-2642-fe0f.png",
				sheet_x: 44,
				sheet_y: 46,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9CE-1F3FE-200D-2642-FE0F",
				non_qualified: "1F9CE-1F3FE-200D-2642",
				image: "1f9ce-1f3fe-200d-2642-fe0f.png",
				sheet_x: 44,
				sheet_y: 47,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9CE-1F3FF-200D-2642-FE0F",
				non_qualified: "1F9CE-1F3FF-200D-2642",
				image: "1f9ce-1f3ff-200d-2642-fe0f.png",
				sheet_x: 44,
				sheet_y: 48,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Kneeling",
		b: "1F9CE-200D-2642-FE0F",
		c: "1F9CE-200D-2642",
		k: [
			44,
			43
		],
		o: 12
	},
	"flag-sr": {
		a: "Suriname Flag",
		b: "1F1F8-1F1F7",
		k: [
			4,
			15
		],
		o: 2
	},
	woman_kneeling: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9CE-1F3FB-200D-2640-FE0F",
				non_qualified: "1F9CE-1F3FB-200D-2640",
				image: "1f9ce-1f3fb-200d-2640-fe0f.png",
				sheet_x: 44,
				sheet_y: 38,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9CE-1F3FC-200D-2640-FE0F",
				non_qualified: "1F9CE-1F3FC-200D-2640",
				image: "1f9ce-1f3fc-200d-2640-fe0f.png",
				sheet_x: 44,
				sheet_y: 39,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9CE-1F3FD-200D-2640-FE0F",
				non_qualified: "1F9CE-1F3FD-200D-2640",
				image: "1f9ce-1f3fd-200d-2640-fe0f.png",
				sheet_x: 44,
				sheet_y: 40,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9CE-1F3FE-200D-2640-FE0F",
				non_qualified: "1F9CE-1F3FE-200D-2640",
				image: "1f9ce-1f3fe-200d-2640-fe0f.png",
				sheet_x: 44,
				sheet_y: 41,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9CE-1F3FF-200D-2640-FE0F",
				non_qualified: "1F9CE-1F3FF-200D-2640",
				image: "1f9ce-1f3ff-200d-2640-fe0f.png",
				sheet_x: 44,
				sheet_y: 42,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Kneeling",
		b: "1F9CE-200D-2640-FE0F",
		c: "1F9CE-200D-2640",
		k: [
			44,
			37
		],
		o: 12
	},
	razor: {
		a: "Razor",
		b: "1FA92",
		k: [
			52,
			6
		],
		o: 12
	},
	"flag-ss": {
		a: "South Sudan Flag",
		b: "1F1F8-1F1F8",
		k: [
			4,
			16
		],
		o: 2
	},
	lotion_bottle: {
		a: "Lotion Bottle",
		b: "1F9F4",
		k: [
			51,
			39
		],
		o: 11
	},
	"flag-st": {
		a: "São Tomé & Príncipe Flag",
		b: "1F1F8-1F1F9",
		k: [
			4,
			17
		],
		o: 2
	},
	safety_pin: {
		a: "Safety Pin",
		b: "1F9F7",
		k: [
			51,
			42
		],
		o: 11
	},
	man_with_probing_cane: {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F9AF",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f9af.png",
				sheet_x: 16,
				sheet_y: 18,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F9AF",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f9af.png",
				sheet_x: 16,
				sheet_y: 19,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F9AF",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f9af.png",
				sheet_x: 16,
				sheet_y: 20,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F9AF",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f9af.png",
				sheet_x: 16,
				sheet_y: 21,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F9AF",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f9af.png",
				sheet_x: 16,
				sheet_y: 22,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man with Probing Cane",
		b: "1F468-200D-1F9AF",
		k: [
			16,
			17
		],
		o: 12
	},
	broom: {
		a: "Broom",
		b: "1F9F9",
		k: [
			51,
			44
		],
		o: 11
	},
	woman_with_probing_cane: {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F9AF",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f9af.png",
				sheet_x: 19,
				sheet_y: 3,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F9AF",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f9af.png",
				sheet_x: 19,
				sheet_y: 4,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F9AF",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f9af.png",
				sheet_x: 19,
				sheet_y: 5,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F9AF",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f9af.png",
				sheet_x: 19,
				sheet_y: 6,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F9AF",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f9af.png",
				sheet_x: 19,
				sheet_y: 7,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman with Probing Cane",
		b: "1F469-200D-1F9AF",
		k: [
			19,
			2
		],
		o: 12
	},
	"flag-sv": {
		a: "El Salvador Flag",
		b: "1F1F8-1F1FB",
		k: [
			4,
			18
		],
		o: 2
	},
	"flag-sx": {
		a: "Sint Maarten Flag",
		b: "1F1F8-1F1FD",
		k: [
			4,
			19
		],
		o: 2
	},
	basket: {
		a: "Basket",
		b: "1F9FA",
		k: [
			51,
			45
		],
		o: 11
	},
	man_in_motorized_wheelchair: {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F9BC",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f9bc.png",
				sheet_x: 16,
				sheet_y: 48,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F9BC",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f9bc.png",
				sheet_x: 16,
				sheet_y: 49,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F9BC",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f9bc.png",
				sheet_x: 16,
				sheet_y: 50,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F9BC",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f9bc.png",
				sheet_x: 16,
				sheet_y: 51,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F9BC",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f9bc.png",
				sheet_x: 16,
				sheet_y: 52,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man in Motorized Wheelchair",
		b: "1F468-200D-1F9BC",
		k: [
			16,
			47
		],
		o: 12
	},
	"flag-sy": {
		a: "Syria Flag",
		b: "1F1F8-1F1FE",
		k: [
			4,
			20
		],
		o: 2
	},
	roll_of_paper: {
		a: "Roll of Paper",
		b: "1F9FB",
		k: [
			51,
			46
		],
		o: 11
	},
	woman_in_motorized_wheelchair: {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F9BC",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f9bc.png",
				sheet_x: 19,
				sheet_y: 33,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F9BC",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f9bc.png",
				sheet_x: 19,
				sheet_y: 34,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F9BC",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f9bc.png",
				sheet_x: 19,
				sheet_y: 35,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F9BC",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f9bc.png",
				sheet_x: 19,
				sheet_y: 36,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F9BC",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f9bc.png",
				sheet_x: 19,
				sheet_y: 37,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman in Motorized Wheelchair",
		b: "1F469-200D-1F9BC",
		k: [
			19,
			32
		],
		o: 12
	},
	"flag-sz": {
		a: "Eswatini Flag",
		b: "1F1F8-1F1FF",
		k: [
			4,
			21
		],
		o: 2
	},
	soap: {
		a: "Bar of Soap",
		b: "1F9FC",
		k: [
			51,
			47
		],
		o: 11
	},
	"flag-ta": {
		a: "Tristan Da Cunha Flag",
		b: "1F1F9-1F1E6",
		k: [
			4,
			22
		],
		o: 2
	},
	sponge: {
		a: "Sponge",
		b: "1F9FD",
		k: [
			51,
			48
		],
		o: 11
	},
	fire_extinguisher: {
		a: "Fire Extinguisher",
		b: "1F9EF",
		k: [
			51,
			34
		],
		o: 11
	},
	man_in_manual_wheelchair: {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F9BD",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f9bd.png",
				sheet_x: 16,
				sheet_y: 54,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F9BD",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f9bd.png",
				sheet_x: 16,
				sheet_y: 55,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F9BD",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f9bd.png",
				sheet_x: 16,
				sheet_y: 56,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F9BD",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f9bd.png",
				sheet_x: 17,
				sheet_y: 0,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F9BD",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f9bd.png",
				sheet_x: 17,
				sheet_y: 1,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man in Manual Wheelchair",
		b: "1F468-200D-1F9BD",
		k: [
			16,
			53
		],
		o: 12
	},
	"flag-tc": {
		a: "Turks & Caicos Islands Flag",
		b: "1F1F9-1F1E8",
		k: [
			4,
			23
		],
		o: 2
	},
	woman_in_manual_wheelchair: {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F9BD",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f9bd.png",
				sheet_x: 19,
				sheet_y: 39,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F9BD",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f9bd.png",
				sheet_x: 19,
				sheet_y: 40,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F9BD",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f9bd.png",
				sheet_x: 19,
				sheet_y: 41,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F9BD",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f9bd.png",
				sheet_x: 19,
				sheet_y: 42,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F9BD",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f9bd.png",
				sheet_x: 19,
				sheet_y: 43,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman in Manual Wheelchair",
		b: "1F469-200D-1F9BD",
		k: [
			19,
			38
		],
		o: 12
	},
	"flag-td": {
		a: "Chad Flag",
		b: "1F1F9-1F1E9",
		k: [
			4,
			24
		],
		o: 2
	},
	shopping_trolley: {
		a: "Shopping Trolley",
		b: "1F6D2",
		k: [
			36,
			40
		],
		o: 4
	},
	runner: {
		skin_variations: {
			"1F3FB": {
				unified: "1F3C3-1F3FB",
				non_qualified: null,
				image: "1f3c3-1f3fb.png",
				sheet_x: 9,
				sheet_y: 2,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F3C3-1F3FC",
				non_qualified: null,
				image: "1f3c3-1f3fc.png",
				sheet_x: 9,
				sheet_y: 3,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F3C3-1F3FD",
				non_qualified: null,
				image: "1f3c3-1f3fd.png",
				sheet_x: 9,
				sheet_y: 4,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F3C3-1F3FE",
				non_qualified: null,
				image: "1f3c3-1f3fe.png",
				sheet_x: 9,
				sheet_y: 5,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F3C3-1F3FF",
				non_qualified: null,
				image: "1f3c3-1f3ff.png",
				sheet_x: 9,
				sheet_y: 6,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F3C3-200D-2642-FE0F",
		a: "Runner",
		b: "1F3C3",
		k: [
			9,
			1
		],
		n: [
			"running"
		],
		o: 2
	},
	"flag-tf": {
		a: "French Southern Territories Flag",
		b: "1F1F9-1F1EB",
		k: [
			4,
			25
		],
		o: 2
	},
	smoking: {
		a: "Smoking Symbol",
		b: "1F6AC",
		j: [
			"kills",
			"tobacco",
			"cigarette",
			"joint",
			"smoke"
		],
		k: [
			35,
			3
		],
		o: 2
	},
	coffin: {
		a: "Coffin",
		b: "26B0-FE0F",
		c: "26B0",
		j: [
			"vampire",
			"dead",
			"die",
			"death",
			"rip",
			"graveyard",
			"cemetery",
			"casket",
			"funeral",
			"box"
		],
		k: [
			53,
			54
		],
		o: 2
	},
	"man-running": {
		skin_variations: {
			"1F3FB": {
				unified: "1F3C3-1F3FB-200D-2642-FE0F",
				non_qualified: "1F3C3-1F3FB-200D-2642",
				image: "1f3c3-1f3fb-200d-2642-fe0f.png",
				sheet_x: 8,
				sheet_y: 53,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F3C3-1F3FC-200D-2642-FE0F",
				non_qualified: "1F3C3-1F3FC-200D-2642",
				image: "1f3c3-1f3fc-200d-2642-fe0f.png",
				sheet_x: 8,
				sheet_y: 54,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F3C3-1F3FD-200D-2642-FE0F",
				non_qualified: "1F3C3-1F3FD-200D-2642",
				image: "1f3c3-1f3fd-200d-2642-fe0f.png",
				sheet_x: 8,
				sheet_y: 55,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F3C3-1F3FE-200D-2642-FE0F",
				non_qualified: "1F3C3-1F3FE-200D-2642",
				image: "1f3c3-1f3fe-200d-2642-fe0f.png",
				sheet_x: 8,
				sheet_y: 56,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F3C3-1F3FF-200D-2642-FE0F",
				non_qualified: "1F3C3-1F3FF-200D-2642",
				image: "1f3c3-1f3ff-200d-2642-fe0f.png",
				sheet_x: 9,
				sheet_y: 0,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F3C3",
		a: "Man Running",
		b: "1F3C3-200D-2642-FE0F",
		c: "1F3C3-200D-2642",
		k: [
			8,
			52
		],
		o: 4
	},
	"flag-tg": {
		a: "Togo Flag",
		b: "1F1F9-1F1EC",
		k: [
			4,
			26
		],
		o: 2
	},
	"woman-running": {
		skin_variations: {
			"1F3FB": {
				unified: "1F3C3-1F3FB-200D-2640-FE0F",
				non_qualified: "1F3C3-1F3FB-200D-2640",
				image: "1f3c3-1f3fb-200d-2640-fe0f.png",
				sheet_x: 8,
				sheet_y: 47,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F3C3-1F3FC-200D-2640-FE0F",
				non_qualified: "1F3C3-1F3FC-200D-2640",
				image: "1f3c3-1f3fc-200d-2640-fe0f.png",
				sheet_x: 8,
				sheet_y: 48,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F3C3-1F3FD-200D-2640-FE0F",
				non_qualified: "1F3C3-1F3FD-200D-2640",
				image: "1f3c3-1f3fd-200d-2640-fe0f.png",
				sheet_x: 8,
				sheet_y: 49,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F3C3-1F3FE-200D-2640-FE0F",
				non_qualified: "1F3C3-1F3FE-200D-2640",
				image: "1f3c3-1f3fe-200d-2640-fe0f.png",
				sheet_x: 8,
				sheet_y: 50,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F3C3-1F3FF-200D-2640-FE0F",
				non_qualified: "1F3C3-1F3FF-200D-2640",
				image: "1f3c3-1f3ff-200d-2640-fe0f.png",
				sheet_x: 8,
				sheet_y: 51,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Running",
		b: "1F3C3-200D-2640-FE0F",
		c: "1F3C3-200D-2640",
		k: [
			8,
			46
		],
		o: 4
	},
	funeral_urn: {
		a: "Funeral Urn",
		b: "26B1-FE0F",
		c: "26B1",
		j: [
			"dead",
			"die",
			"death",
			"rip",
			"ashes"
		],
		k: [
			53,
			55
		],
		o: 2
	},
	"flag-th": {
		a: "Thailand Flag",
		b: "1F1F9-1F1ED",
		k: [
			4,
			27
		],
		o: 2
	},
	moyai: {
		a: "Moyai",
		b: "1F5FF",
		j: [
			"rock",
			"easter island",
			"moai"
		],
		k: [
			30,
			34
		],
		o: 2
	},
	"flag-tj": {
		a: "Tajikistan Flag",
		b: "1F1F9-1F1EF",
		k: [
			4,
			28
		],
		o: 2
	},
	dancer: {
		skin_variations: {
			"1F3FB": {
				unified: "1F483-1F3FB",
				non_qualified: null,
				image: "1f483-1f3fb.png",
				sheet_x: 24,
				sheet_y: 27,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F483-1F3FC",
				non_qualified: null,
				image: "1f483-1f3fc.png",
				sheet_x: 24,
				sheet_y: 28,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F483-1F3FD",
				non_qualified: null,
				image: "1f483-1f3fd.png",
				sheet_x: 24,
				sheet_y: 29,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F483-1F3FE",
				non_qualified: null,
				image: "1f483-1f3fe.png",
				sheet_x: 24,
				sheet_y: 30,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F483-1F3FF",
				non_qualified: null,
				image: "1f483-1f3ff.png",
				sheet_x: 24,
				sheet_y: 31,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Dancer",
		b: "1F483",
		j: [
			"female",
			"girl",
			"woman",
			"fun"
		],
		k: [
			24,
			26
		],
		o: 2
	},
	"flag-tk": {
		a: "Tokelau Flag",
		b: "1F1F9-1F1F0",
		k: [
			4,
			29
		],
		o: 2
	},
	man_dancing: {
		skin_variations: {
			"1F3FB": {
				unified: "1F57A-1F3FB",
				non_qualified: null,
				image: "1f57a-1f3fb.png",
				sheet_x: 29,
				sheet_y: 38,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F57A-1F3FC",
				non_qualified: null,
				image: "1f57a-1f3fc.png",
				sheet_x: 29,
				sheet_y: 39,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F57A-1F3FD",
				non_qualified: null,
				image: "1f57a-1f3fd.png",
				sheet_x: 29,
				sheet_y: 40,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F57A-1F3FE",
				non_qualified: null,
				image: "1f57a-1f3fe.png",
				sheet_x: 29,
				sheet_y: 41,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F57A-1F3FF",
				non_qualified: null,
				image: "1f57a-1f3ff.png",
				sheet_x: 29,
				sheet_y: 42,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Dancing",
		b: "1F57A",
		j: [
			"male",
			"boy",
			"fun",
			"dancer"
		],
		k: [
			29,
			37
		],
		o: 4
	},
	"flag-tl": {
		a: "Timor-Leste Flag",
		b: "1F1F9-1F1F1",
		k: [
			4,
			30
		],
		o: 2
	},
	man_in_business_suit_levitating: {
		skin_variations: {
			"1F3FB": {
				unified: "1F574-1F3FB",
				non_qualified: null,
				image: "1f574-1f3fb.png",
				sheet_x: 29,
				sheet_y: 10,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F574-1F3FC",
				non_qualified: null,
				image: "1f574-1f3fc.png",
				sheet_x: 29,
				sheet_y: 11,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F574-1F3FD",
				non_qualified: null,
				image: "1f574-1f3fd.png",
				sheet_x: 29,
				sheet_y: 12,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F574-1F3FE",
				non_qualified: null,
				image: "1f574-1f3fe.png",
				sheet_x: 29,
				sheet_y: 13,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F574-1F3FF",
				non_qualified: null,
				image: "1f574-1f3ff.png",
				sheet_x: 29,
				sheet_y: 14,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man in Business Suit Levitating",
		b: "1F574-FE0F",
		c: "1F574",
		k: [
			29,
			9
		],
		o: 2
	},
	"flag-tm": {
		a: "Turkmenistan Flag",
		b: "1F1F9-1F1F2",
		k: [
			4,
			31
		],
		o: 2
	},
	dancers: {
		obsoleted_by: "1F46F-200D-2640-FE0F",
		a: "Woman with Bunny Ears",
		b: "1F46F",
		k: [
			22,
			0
		],
		o: 2
	},
	"man-with-bunny-ears-partying": {
		a: "Man with Bunny Ears Partying",
		b: "1F46F-200D-2642-FE0F",
		c: "1F46F-200D-2642",
		k: [
			21,
			56
		],
		o: 4
	},
	"flag-tn": {
		a: "Tunisia Flag",
		b: "1F1F9-1F1F3",
		k: [
			4,
			32
		],
		o: 2
	},
	"flag-to": {
		a: "Tonga Flag",
		b: "1F1F9-1F1F4",
		k: [
			4,
			33
		],
		o: 2
	},
	"woman-with-bunny-ears-partying": {
		obsoletes: "1F46F",
		a: "Woman with Bunny Ears Partying",
		b: "1F46F-200D-2640-FE0F",
		c: "1F46F-200D-2640",
		k: [
			21,
			55
		],
		o: 4
	},
	"flag-tr": {
		a: "Turkey Flag",
		b: "1F1F9-1F1F7",
		k: [
			4,
			34
		],
		o: 2
	},
	person_in_steamy_room: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D6-1F3FB",
				non_qualified: null,
				image: "1f9d6-1f3fb.png",
				sheet_x: 48,
				sheet_y: 53,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D6-1F3FB-200D-2642-FE0F"
			},
			"1F3FC": {
				unified: "1F9D6-1F3FC",
				non_qualified: null,
				image: "1f9d6-1f3fc.png",
				sheet_x: 48,
				sheet_y: 54,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D6-1F3FC-200D-2642-FE0F"
			},
			"1F3FD": {
				unified: "1F9D6-1F3FD",
				non_qualified: null,
				image: "1f9d6-1f3fd.png",
				sheet_x: 48,
				sheet_y: 55,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D6-1F3FD-200D-2642-FE0F"
			},
			"1F3FE": {
				unified: "1F9D6-1F3FE",
				non_qualified: null,
				image: "1f9d6-1f3fe.png",
				sheet_x: 48,
				sheet_y: 56,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D6-1F3FE-200D-2642-FE0F"
			},
			"1F3FF": {
				unified: "1F9D6-1F3FF",
				non_qualified: null,
				image: "1f9d6-1f3ff.png",
				sheet_x: 49,
				sheet_y: 0,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D6-1F3FF-200D-2642-FE0F"
			}
		},
		obsoleted_by: "1F9D6-200D-2642-FE0F",
		a: "Person in Steamy Room",
		b: "1F9D6",
		k: [
			48,
			52
		],
		o: 5
	},
	man_in_steamy_room: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D6-1F3FB-200D-2642-FE0F",
				non_qualified: "1F9D6-1F3FB-200D-2642",
				image: "1f9d6-1f3fb-200d-2642-fe0f.png",
				sheet_x: 48,
				sheet_y: 47,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D6-1F3FB"
			},
			"1F3FC": {
				unified: "1F9D6-1F3FC-200D-2642-FE0F",
				non_qualified: "1F9D6-1F3FC-200D-2642",
				image: "1f9d6-1f3fc-200d-2642-fe0f.png",
				sheet_x: 48,
				sheet_y: 48,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D6-1F3FC"
			},
			"1F3FD": {
				unified: "1F9D6-1F3FD-200D-2642-FE0F",
				non_qualified: "1F9D6-1F3FD-200D-2642",
				image: "1f9d6-1f3fd-200d-2642-fe0f.png",
				sheet_x: 48,
				sheet_y: 49,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D6-1F3FD"
			},
			"1F3FE": {
				unified: "1F9D6-1F3FE-200D-2642-FE0F",
				non_qualified: "1F9D6-1F3FE-200D-2642",
				image: "1f9d6-1f3fe-200d-2642-fe0f.png",
				sheet_x: 48,
				sheet_y: 50,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D6-1F3FE"
			},
			"1F3FF": {
				unified: "1F9D6-1F3FF-200D-2642-FE0F",
				non_qualified: "1F9D6-1F3FF-200D-2642",
				image: "1f9d6-1f3ff-200d-2642-fe0f.png",
				sheet_x: 48,
				sheet_y: 51,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D6-1F3FF"
			}
		},
		obsoletes: "1F9D6",
		a: "Man in Steamy Room",
		b: "1F9D6-200D-2642-FE0F",
		c: "1F9D6-200D-2642",
		k: [
			48,
			46
		],
		o: 5
	},
	"flag-tt": {
		a: "Trinidad & Tobago Flag",
		b: "1F1F9-1F1F9",
		k: [
			4,
			35
		],
		o: 2
	},
	woman_in_steamy_room: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D6-1F3FB-200D-2640-FE0F",
				non_qualified: "1F9D6-1F3FB-200D-2640",
				image: "1f9d6-1f3fb-200d-2640-fe0f.png",
				sheet_x: 48,
				sheet_y: 41,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9D6-1F3FC-200D-2640-FE0F",
				non_qualified: "1F9D6-1F3FC-200D-2640",
				image: "1f9d6-1f3fc-200d-2640-fe0f.png",
				sheet_x: 48,
				sheet_y: 42,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9D6-1F3FD-200D-2640-FE0F",
				non_qualified: "1F9D6-1F3FD-200D-2640",
				image: "1f9d6-1f3fd-200d-2640-fe0f.png",
				sheet_x: 48,
				sheet_y: 43,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9D6-1F3FE-200D-2640-FE0F",
				non_qualified: "1F9D6-1F3FE-200D-2640",
				image: "1f9d6-1f3fe-200d-2640-fe0f.png",
				sheet_x: 48,
				sheet_y: 44,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9D6-1F3FF-200D-2640-FE0F",
				non_qualified: "1F9D6-1F3FF-200D-2640",
				image: "1f9d6-1f3ff-200d-2640-fe0f.png",
				sheet_x: 48,
				sheet_y: 45,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman in Steamy Room",
		b: "1F9D6-200D-2640-FE0F",
		c: "1F9D6-200D-2640",
		k: [
			48,
			40
		],
		o: 5
	},
	"flag-tv": {
		a: "Tuvalu Flag",
		b: "1F1F9-1F1FB",
		k: [
			4,
			36
		],
		o: 2
	},
	"flag-tw": {
		a: "Taiwan Flag",
		b: "1F1F9-1F1FC",
		k: [
			4,
			37
		],
		o: 2
	},
	person_climbing: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D7-1F3FB",
				non_qualified: null,
				image: "1f9d7-1f3fb.png",
				sheet_x: 49,
				sheet_y: 14,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D7-1F3FB-200D-2640-FE0F"
			},
			"1F3FC": {
				unified: "1F9D7-1F3FC",
				non_qualified: null,
				image: "1f9d7-1f3fc.png",
				sheet_x: 49,
				sheet_y: 15,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D7-1F3FC-200D-2640-FE0F"
			},
			"1F3FD": {
				unified: "1F9D7-1F3FD",
				non_qualified: null,
				image: "1f9d7-1f3fd.png",
				sheet_x: 49,
				sheet_y: 16,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D7-1F3FD-200D-2640-FE0F"
			},
			"1F3FE": {
				unified: "1F9D7-1F3FE",
				non_qualified: null,
				image: "1f9d7-1f3fe.png",
				sheet_x: 49,
				sheet_y: 17,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D7-1F3FE-200D-2640-FE0F"
			},
			"1F3FF": {
				unified: "1F9D7-1F3FF",
				non_qualified: null,
				image: "1f9d7-1f3ff.png",
				sheet_x: 49,
				sheet_y: 18,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D7-1F3FF-200D-2640-FE0F"
			}
		},
		obsoleted_by: "1F9D7-200D-2640-FE0F",
		a: "Person Climbing",
		b: "1F9D7",
		k: [
			49,
			13
		],
		o: 5
	},
	man_climbing: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D7-1F3FB-200D-2642-FE0F",
				non_qualified: "1F9D7-1F3FB-200D-2642",
				image: "1f9d7-1f3fb-200d-2642-fe0f.png",
				sheet_x: 49,
				sheet_y: 8,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9D7-1F3FC-200D-2642-FE0F",
				non_qualified: "1F9D7-1F3FC-200D-2642",
				image: "1f9d7-1f3fc-200d-2642-fe0f.png",
				sheet_x: 49,
				sheet_y: 9,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9D7-1F3FD-200D-2642-FE0F",
				non_qualified: "1F9D7-1F3FD-200D-2642",
				image: "1f9d7-1f3fd-200d-2642-fe0f.png",
				sheet_x: 49,
				sheet_y: 10,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9D7-1F3FE-200D-2642-FE0F",
				non_qualified: "1F9D7-1F3FE-200D-2642",
				image: "1f9d7-1f3fe-200d-2642-fe0f.png",
				sheet_x: 49,
				sheet_y: 11,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9D7-1F3FF-200D-2642-FE0F",
				non_qualified: "1F9D7-1F3FF-200D-2642",
				image: "1f9d7-1f3ff-200d-2642-fe0f.png",
				sheet_x: 49,
				sheet_y: 12,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Climbing",
		b: "1F9D7-200D-2642-FE0F",
		c: "1F9D7-200D-2642",
		k: [
			49,
			7
		],
		o: 5
	},
	"flag-tz": {
		a: "Tanzania Flag",
		b: "1F1F9-1F1FF",
		k: [
			4,
			38
		],
		o: 2
	},
	"flag-ua": {
		a: "Ukraine Flag",
		b: "1F1FA-1F1E6",
		k: [
			4,
			39
		],
		o: 2
	},
	woman_climbing: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D7-1F3FB-200D-2640-FE0F",
				non_qualified: "1F9D7-1F3FB-200D-2640",
				image: "1f9d7-1f3fb-200d-2640-fe0f.png",
				sheet_x: 49,
				sheet_y: 2,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D7-1F3FB"
			},
			"1F3FC": {
				unified: "1F9D7-1F3FC-200D-2640-FE0F",
				non_qualified: "1F9D7-1F3FC-200D-2640",
				image: "1f9d7-1f3fc-200d-2640-fe0f.png",
				sheet_x: 49,
				sheet_y: 3,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D7-1F3FC"
			},
			"1F3FD": {
				unified: "1F9D7-1F3FD-200D-2640-FE0F",
				non_qualified: "1F9D7-1F3FD-200D-2640",
				image: "1f9d7-1f3fd-200d-2640-fe0f.png",
				sheet_x: 49,
				sheet_y: 4,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D7-1F3FD"
			},
			"1F3FE": {
				unified: "1F9D7-1F3FE-200D-2640-FE0F",
				non_qualified: "1F9D7-1F3FE-200D-2640",
				image: "1f9d7-1f3fe-200d-2640-fe0f.png",
				sheet_x: 49,
				sheet_y: 5,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D7-1F3FE"
			},
			"1F3FF": {
				unified: "1F9D7-1F3FF-200D-2640-FE0F",
				non_qualified: "1F9D7-1F3FF-200D-2640",
				image: "1f9d7-1f3ff-200d-2640-fe0f.png",
				sheet_x: 49,
				sheet_y: 6,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D7-1F3FF"
			}
		},
		obsoletes: "1F9D7",
		a: "Woman Climbing",
		b: "1F9D7-200D-2640-FE0F",
		c: "1F9D7-200D-2640",
		k: [
			49,
			1
		],
		o: 5
	},
	"flag-ug": {
		a: "Uganda Flag",
		b: "1F1FA-1F1EC",
		k: [
			4,
			40
		],
		o: 2
	},
	fencer: {
		a: "Fencer",
		b: "1F93A",
		k: [
			40,
			32
		],
		o: 4
	},
	"flag-um": {
		a: "U.s. Outlying Islands Flag",
		b: "1F1FA-1F1F2",
		k: [
			4,
			41
		],
		o: 2
	},
	horse_racing: {
		skin_variations: {
			"1F3FB": {
				unified: "1F3C7-1F3FB",
				non_qualified: null,
				image: "1f3c7-1f3fb.png",
				sheet_x: 9,
				sheet_y: 28,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F3C7-1F3FC",
				non_qualified: null,
				image: "1f3c7-1f3fc.png",
				sheet_x: 9,
				sheet_y: 29,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F3C7-1F3FD",
				non_qualified: null,
				image: "1f3c7-1f3fd.png",
				sheet_x: 9,
				sheet_y: 30,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F3C7-1F3FE",
				non_qualified: null,
				image: "1f3c7-1f3fe.png",
				sheet_x: 9,
				sheet_y: 31,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F3C7-1F3FF",
				non_qualified: null,
				image: "1f3c7-1f3ff.png",
				sheet_x: 9,
				sheet_y: 32,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Horse Racing",
		b: "1F3C7",
		j: [
			"animal",
			"betting",
			"competition",
			"gambling",
			"luck"
		],
		k: [
			9,
			27
		],
		o: 2
	},
	skier: {
		a: "Skier",
		b: "26F7-FE0F",
		c: "26F7",
		j: [
			"sports",
			"winter",
			"snow"
		],
		k: [
			54,
			17
		],
		o: 2
	},
	"flag-un": {
		a: "United Nations Flag",
		b: "1F1FA-1F1F3",
		k: [
			4,
			42
		],
		o: 4
	},
	us: {
		a: "United States Flag",
		b: "1F1FA-1F1F8",
		j: [
			"united",
			"states",
			"america",
			"flag",
			"nation",
			"country",
			"banner"
		],
		k: [
			4,
			43
		],
		n: [
			"flag-us"
		],
		o: 2
	},
	snowboarder: {
		skin_variations: {
			"1F3FB": {
				unified: "1F3C2-1F3FB",
				non_qualified: null,
				image: "1f3c2-1f3fb.png",
				sheet_x: 8,
				sheet_y: 41,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F3C2-1F3FC",
				non_qualified: null,
				image: "1f3c2-1f3fc.png",
				sheet_x: 8,
				sheet_y: 42,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F3C2-1F3FD",
				non_qualified: null,
				image: "1f3c2-1f3fd.png",
				sheet_x: 8,
				sheet_y: 43,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F3C2-1F3FE",
				non_qualified: null,
				image: "1f3c2-1f3fe.png",
				sheet_x: 8,
				sheet_y: 44,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F3C2-1F3FF",
				non_qualified: null,
				image: "1f3c2-1f3ff.png",
				sheet_x: 8,
				sheet_y: 45,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Snowboarder",
		b: "1F3C2",
		j: [
			"sports",
			"winter"
		],
		k: [
			8,
			40
		],
		o: 2
	},
	golfer: {
		skin_variations: {
			"1F3FB": {
				unified: "1F3CC-1F3FB",
				non_qualified: null,
				image: "1f3cc-1f3fb.png",
				sheet_x: 10,
				sheet_y: 27,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F3CC-1F3FC",
				non_qualified: null,
				image: "1f3cc-1f3fc.png",
				sheet_x: 10,
				sheet_y: 28,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F3CC-1F3FD",
				non_qualified: null,
				image: "1f3cc-1f3fd.png",
				sheet_x: 10,
				sheet_y: 29,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F3CC-1F3FE",
				non_qualified: null,
				image: "1f3cc-1f3fe.png",
				sheet_x: 10,
				sheet_y: 30,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F3CC-1F3FF",
				non_qualified: null,
				image: "1f3cc-1f3ff.png",
				sheet_x: 10,
				sheet_y: 31,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F3CC-FE0F-200D-2642-FE0F",
		a: "Golfer",
		b: "1F3CC-FE0F",
		c: "1F3CC",
		k: [
			10,
			26
		],
		o: 2
	},
	"flag-uy": {
		a: "Uruguay Flag",
		b: "1F1FA-1F1FE",
		k: [
			4,
			44
		],
		o: 2
	},
	"flag-uz": {
		a: "Uzbekistan Flag",
		b: "1F1FA-1F1FF",
		k: [
			4,
			45
		],
		o: 2
	},
	"man-golfing": {
		skin_variations: {
			"1F3FB": {
				unified: "1F3CC-1F3FB-200D-2642-FE0F",
				non_qualified: "1F3CC-1F3FB-200D-2642",
				image: "1f3cc-1f3fb-200d-2642-fe0f.png",
				sheet_x: 10,
				sheet_y: 21,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F3CC-1F3FC-200D-2642-FE0F",
				non_qualified: "1F3CC-1F3FC-200D-2642",
				image: "1f3cc-1f3fc-200d-2642-fe0f.png",
				sheet_x: 10,
				sheet_y: 22,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F3CC-1F3FD-200D-2642-FE0F",
				non_qualified: "1F3CC-1F3FD-200D-2642",
				image: "1f3cc-1f3fd-200d-2642-fe0f.png",
				sheet_x: 10,
				sheet_y: 23,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F3CC-1F3FE-200D-2642-FE0F",
				non_qualified: "1F3CC-1F3FE-200D-2642",
				image: "1f3cc-1f3fe-200d-2642-fe0f.png",
				sheet_x: 10,
				sheet_y: 24,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F3CC-1F3FF-200D-2642-FE0F",
				non_qualified: "1F3CC-1F3FF-200D-2642",
				image: "1f3cc-1f3ff-200d-2642-fe0f.png",
				sheet_x: 10,
				sheet_y: 25,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F3CC-FE0F",
		a: "Man Golfing",
		b: "1F3CC-FE0F-200D-2642-FE0F",
		k: [
			10,
			20
		],
		o: 4
	},
	"flag-va": {
		a: "Vatican City Flag",
		b: "1F1FB-1F1E6",
		k: [
			4,
			46
		],
		o: 2
	},
	"woman-golfing": {
		skin_variations: {
			"1F3FB": {
				unified: "1F3CC-1F3FB-200D-2640-FE0F",
				non_qualified: "1F3CC-1F3FB-200D-2640",
				image: "1f3cc-1f3fb-200d-2640-fe0f.png",
				sheet_x: 10,
				sheet_y: 15,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F3CC-1F3FC-200D-2640-FE0F",
				non_qualified: "1F3CC-1F3FC-200D-2640",
				image: "1f3cc-1f3fc-200d-2640-fe0f.png",
				sheet_x: 10,
				sheet_y: 16,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F3CC-1F3FD-200D-2640-FE0F",
				non_qualified: "1F3CC-1F3FD-200D-2640",
				image: "1f3cc-1f3fd-200d-2640-fe0f.png",
				sheet_x: 10,
				sheet_y: 17,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F3CC-1F3FE-200D-2640-FE0F",
				non_qualified: "1F3CC-1F3FE-200D-2640",
				image: "1f3cc-1f3fe-200d-2640-fe0f.png",
				sheet_x: 10,
				sheet_y: 18,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F3CC-1F3FF-200D-2640-FE0F",
				non_qualified: "1F3CC-1F3FF-200D-2640",
				image: "1f3cc-1f3ff-200d-2640-fe0f.png",
				sheet_x: 10,
				sheet_y: 19,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Golfing",
		b: "1F3CC-FE0F-200D-2640-FE0F",
		k: [
			10,
			14
		],
		o: 4
	},
	"flag-vc": {
		a: "St. Vincent & Grenadines Flag",
		b: "1F1FB-1F1E8",
		k: [
			4,
			47
		],
		o: 2
	},
	surfer: {
		skin_variations: {
			"1F3FB": {
				unified: "1F3C4-1F3FB",
				non_qualified: null,
				image: "1f3c4-1f3fb.png",
				sheet_x: 9,
				sheet_y: 20,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F3C4-1F3FC",
				non_qualified: null,
				image: "1f3c4-1f3fc.png",
				sheet_x: 9,
				sheet_y: 21,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F3C4-1F3FD",
				non_qualified: null,
				image: "1f3c4-1f3fd.png",
				sheet_x: 9,
				sheet_y: 22,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F3C4-1F3FE",
				non_qualified: null,
				image: "1f3c4-1f3fe.png",
				sheet_x: 9,
				sheet_y: 23,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F3C4-1F3FF",
				non_qualified: null,
				image: "1f3c4-1f3ff.png",
				sheet_x: 9,
				sheet_y: 24,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F3C4-200D-2642-FE0F",
		a: "Surfer",
		b: "1F3C4",
		k: [
			9,
			19
		],
		o: 2
	},
	"man-surfing": {
		skin_variations: {
			"1F3FB": {
				unified: "1F3C4-1F3FB-200D-2642-FE0F",
				non_qualified: "1F3C4-1F3FB-200D-2642",
				image: "1f3c4-1f3fb-200d-2642-fe0f.png",
				sheet_x: 9,
				sheet_y: 14,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F3C4-1F3FC-200D-2642-FE0F",
				non_qualified: "1F3C4-1F3FC-200D-2642",
				image: "1f3c4-1f3fc-200d-2642-fe0f.png",
				sheet_x: 9,
				sheet_y: 15,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F3C4-1F3FD-200D-2642-FE0F",
				non_qualified: "1F3C4-1F3FD-200D-2642",
				image: "1f3c4-1f3fd-200d-2642-fe0f.png",
				sheet_x: 9,
				sheet_y: 16,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F3C4-1F3FE-200D-2642-FE0F",
				non_qualified: "1F3C4-1F3FE-200D-2642",
				image: "1f3c4-1f3fe-200d-2642-fe0f.png",
				sheet_x: 9,
				sheet_y: 17,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F3C4-1F3FF-200D-2642-FE0F",
				non_qualified: "1F3C4-1F3FF-200D-2642",
				image: "1f3c4-1f3ff-200d-2642-fe0f.png",
				sheet_x: 9,
				sheet_y: 18,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F3C4",
		a: "Man Surfing",
		b: "1F3C4-200D-2642-FE0F",
		c: "1F3C4-200D-2642",
		k: [
			9,
			13
		],
		o: 4
	},
	"flag-ve": {
		a: "Venezuela Flag",
		b: "1F1FB-1F1EA",
		k: [
			4,
			48
		],
		o: 2
	},
	"flag-vg": {
		a: "British Virgin Islands Flag",
		b: "1F1FB-1F1EC",
		k: [
			4,
			49
		],
		o: 2
	},
	"woman-surfing": {
		skin_variations: {
			"1F3FB": {
				unified: "1F3C4-1F3FB-200D-2640-FE0F",
				non_qualified: "1F3C4-1F3FB-200D-2640",
				image: "1f3c4-1f3fb-200d-2640-fe0f.png",
				sheet_x: 9,
				sheet_y: 8,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F3C4-1F3FC-200D-2640-FE0F",
				non_qualified: "1F3C4-1F3FC-200D-2640",
				image: "1f3c4-1f3fc-200d-2640-fe0f.png",
				sheet_x: 9,
				sheet_y: 9,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F3C4-1F3FD-200D-2640-FE0F",
				non_qualified: "1F3C4-1F3FD-200D-2640",
				image: "1f3c4-1f3fd-200d-2640-fe0f.png",
				sheet_x: 9,
				sheet_y: 10,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F3C4-1F3FE-200D-2640-FE0F",
				non_qualified: "1F3C4-1F3FE-200D-2640",
				image: "1f3c4-1f3fe-200d-2640-fe0f.png",
				sheet_x: 9,
				sheet_y: 11,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F3C4-1F3FF-200D-2640-FE0F",
				non_qualified: "1F3C4-1F3FF-200D-2640",
				image: "1f3c4-1f3ff-200d-2640-fe0f.png",
				sheet_x: 9,
				sheet_y: 12,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Surfing",
		b: "1F3C4-200D-2640-FE0F",
		c: "1F3C4-200D-2640",
		k: [
			9,
			7
		],
		o: 4
	},
	rowboat: {
		skin_variations: {
			"1F3FB": {
				unified: "1F6A3-1F3FB",
				non_qualified: null,
				image: "1f6a3-1f3fb.png",
				sheet_x: 34,
				sheet_y: 47,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F6A3-1F3FC",
				non_qualified: null,
				image: "1f6a3-1f3fc.png",
				sheet_x: 34,
				sheet_y: 48,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F6A3-1F3FD",
				non_qualified: null,
				image: "1f6a3-1f3fd.png",
				sheet_x: 34,
				sheet_y: 49,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F6A3-1F3FE",
				non_qualified: null,
				image: "1f6a3-1f3fe.png",
				sheet_x: 34,
				sheet_y: 50,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F6A3-1F3FF",
				non_qualified: null,
				image: "1f6a3-1f3ff.png",
				sheet_x: 34,
				sheet_y: 51,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F6A3-200D-2642-FE0F",
		a: "Rowboat",
		b: "1F6A3",
		k: [
			34,
			46
		],
		o: 2
	},
	"flag-vi": {
		a: "U.s. Virgin Islands Flag",
		b: "1F1FB-1F1EE",
		k: [
			4,
			50
		],
		o: 2
	},
	"man-rowing-boat": {
		skin_variations: {
			"1F3FB": {
				unified: "1F6A3-1F3FB-200D-2642-FE0F",
				non_qualified: "1F6A3-1F3FB-200D-2642",
				image: "1f6a3-1f3fb-200d-2642-fe0f.png",
				sheet_x: 34,
				sheet_y: 41,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F6A3-1F3FC-200D-2642-FE0F",
				non_qualified: "1F6A3-1F3FC-200D-2642",
				image: "1f6a3-1f3fc-200d-2642-fe0f.png",
				sheet_x: 34,
				sheet_y: 42,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F6A3-1F3FD-200D-2642-FE0F",
				non_qualified: "1F6A3-1F3FD-200D-2642",
				image: "1f6a3-1f3fd-200d-2642-fe0f.png",
				sheet_x: 34,
				sheet_y: 43,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F6A3-1F3FE-200D-2642-FE0F",
				non_qualified: "1F6A3-1F3FE-200D-2642",
				image: "1f6a3-1f3fe-200d-2642-fe0f.png",
				sheet_x: 34,
				sheet_y: 44,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F6A3-1F3FF-200D-2642-FE0F",
				non_qualified: "1F6A3-1F3FF-200D-2642",
				image: "1f6a3-1f3ff-200d-2642-fe0f.png",
				sheet_x: 34,
				sheet_y: 45,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F6A3",
		a: "Man Rowing Boat",
		b: "1F6A3-200D-2642-FE0F",
		c: "1F6A3-200D-2642",
		k: [
			34,
			40
		],
		o: 4
	},
	"flag-vn": {
		a: "Vietnam Flag",
		b: "1F1FB-1F1F3",
		k: [
			4,
			51
		],
		o: 2
	},
	"flag-vu": {
		a: "Vanuatu Flag",
		b: "1F1FB-1F1FA",
		k: [
			4,
			52
		],
		o: 2
	},
	"woman-rowing-boat": {
		skin_variations: {
			"1F3FB": {
				unified: "1F6A3-1F3FB-200D-2640-FE0F",
				non_qualified: "1F6A3-1F3FB-200D-2640",
				image: "1f6a3-1f3fb-200d-2640-fe0f.png",
				sheet_x: 34,
				sheet_y: 35,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F6A3-1F3FC-200D-2640-FE0F",
				non_qualified: "1F6A3-1F3FC-200D-2640",
				image: "1f6a3-1f3fc-200d-2640-fe0f.png",
				sheet_x: 34,
				sheet_y: 36,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F6A3-1F3FD-200D-2640-FE0F",
				non_qualified: "1F6A3-1F3FD-200D-2640",
				image: "1f6a3-1f3fd-200d-2640-fe0f.png",
				sheet_x: 34,
				sheet_y: 37,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F6A3-1F3FE-200D-2640-FE0F",
				non_qualified: "1F6A3-1F3FE-200D-2640",
				image: "1f6a3-1f3fe-200d-2640-fe0f.png",
				sheet_x: 34,
				sheet_y: 38,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F6A3-1F3FF-200D-2640-FE0F",
				non_qualified: "1F6A3-1F3FF-200D-2640",
				image: "1f6a3-1f3ff-200d-2640-fe0f.png",
				sheet_x: 34,
				sheet_y: 39,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Rowing Boat",
		b: "1F6A3-200D-2640-FE0F",
		c: "1F6A3-200D-2640",
		k: [
			34,
			34
		],
		o: 4
	},
	swimmer: {
		skin_variations: {
			"1F3FB": {
				unified: "1F3CA-1F3FB",
				non_qualified: null,
				image: "1f3ca-1f3fb.png",
				sheet_x: 9,
				sheet_y: 48,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F3CA-1F3FC",
				non_qualified: null,
				image: "1f3ca-1f3fc.png",
				sheet_x: 9,
				sheet_y: 49,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F3CA-1F3FD",
				non_qualified: null,
				image: "1f3ca-1f3fd.png",
				sheet_x: 9,
				sheet_y: 50,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F3CA-1F3FE",
				non_qualified: null,
				image: "1f3ca-1f3fe.png",
				sheet_x: 9,
				sheet_y: 51,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F3CA-1F3FF",
				non_qualified: null,
				image: "1f3ca-1f3ff.png",
				sheet_x: 9,
				sheet_y: 52,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F3CA-200D-2642-FE0F",
		a: "Swimmer",
		b: "1F3CA",
		k: [
			9,
			47
		],
		o: 2
	},
	"flag-wf": {
		a: "Wallis & Futuna Flag",
		b: "1F1FC-1F1EB",
		k: [
			4,
			53
		],
		o: 2
	},
	"man-swimming": {
		skin_variations: {
			"1F3FB": {
				unified: "1F3CA-1F3FB-200D-2642-FE0F",
				non_qualified: "1F3CA-1F3FB-200D-2642",
				image: "1f3ca-1f3fb-200d-2642-fe0f.png",
				sheet_x: 9,
				sheet_y: 42,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F3CA-1F3FC-200D-2642-FE0F",
				non_qualified: "1F3CA-1F3FC-200D-2642",
				image: "1f3ca-1f3fc-200d-2642-fe0f.png",
				sheet_x: 9,
				sheet_y: 43,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F3CA-1F3FD-200D-2642-FE0F",
				non_qualified: "1F3CA-1F3FD-200D-2642",
				image: "1f3ca-1f3fd-200d-2642-fe0f.png",
				sheet_x: 9,
				sheet_y: 44,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F3CA-1F3FE-200D-2642-FE0F",
				non_qualified: "1F3CA-1F3FE-200D-2642",
				image: "1f3ca-1f3fe-200d-2642-fe0f.png",
				sheet_x: 9,
				sheet_y: 45,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F3CA-1F3FF-200D-2642-FE0F",
				non_qualified: "1F3CA-1F3FF-200D-2642",
				image: "1f3ca-1f3ff-200d-2642-fe0f.png",
				sheet_x: 9,
				sheet_y: 46,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F3CA",
		a: "Man Swimming",
		b: "1F3CA-200D-2642-FE0F",
		c: "1F3CA-200D-2642",
		k: [
			9,
			41
		],
		o: 4
	},
	"flag-ws": {
		a: "Samoa Flag",
		b: "1F1FC-1F1F8",
		k: [
			4,
			54
		],
		o: 2
	},
	"woman-swimming": {
		skin_variations: {
			"1F3FB": {
				unified: "1F3CA-1F3FB-200D-2640-FE0F",
				non_qualified: "1F3CA-1F3FB-200D-2640",
				image: "1f3ca-1f3fb-200d-2640-fe0f.png",
				sheet_x: 9,
				sheet_y: 36,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F3CA-1F3FC-200D-2640-FE0F",
				non_qualified: "1F3CA-1F3FC-200D-2640",
				image: "1f3ca-1f3fc-200d-2640-fe0f.png",
				sheet_x: 9,
				sheet_y: 37,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F3CA-1F3FD-200D-2640-FE0F",
				non_qualified: "1F3CA-1F3FD-200D-2640",
				image: "1f3ca-1f3fd-200d-2640-fe0f.png",
				sheet_x: 9,
				sheet_y: 38,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F3CA-1F3FE-200D-2640-FE0F",
				non_qualified: "1F3CA-1F3FE-200D-2640",
				image: "1f3ca-1f3fe-200d-2640-fe0f.png",
				sheet_x: 9,
				sheet_y: 39,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F3CA-1F3FF-200D-2640-FE0F",
				non_qualified: "1F3CA-1F3FF-200D-2640",
				image: "1f3ca-1f3ff-200d-2640-fe0f.png",
				sheet_x: 9,
				sheet_y: 40,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Swimming",
		b: "1F3CA-200D-2640-FE0F",
		c: "1F3CA-200D-2640",
		k: [
			9,
			35
		],
		o: 4
	},
	"flag-xk": {
		a: "Kosovo Flag",
		b: "1F1FD-1F1F0",
		k: [
			4,
			55
		],
		o: 2
	},
	person_with_ball: {
		skin_variations: {
			"1F3FB": {
				unified: "26F9-1F3FB",
				non_qualified: null,
				image: "26f9-1f3fb.png",
				sheet_x: 54,
				sheet_y: 32,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "26F9-1F3FC",
				non_qualified: null,
				image: "26f9-1f3fc.png",
				sheet_x: 54,
				sheet_y: 33,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "26F9-1F3FD",
				non_qualified: null,
				image: "26f9-1f3fd.png",
				sheet_x: 54,
				sheet_y: 34,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "26F9-1F3FE",
				non_qualified: null,
				image: "26f9-1f3fe.png",
				sheet_x: 54,
				sheet_y: 35,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "26F9-1F3FF",
				non_qualified: null,
				image: "26f9-1f3ff.png",
				sheet_x: 54,
				sheet_y: 36,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "26F9-FE0F-200D-2642-FE0F",
		a: "Person with Ball",
		b: "26F9-FE0F",
		c: "26F9",
		k: [
			54,
			31
		],
		o: 2
	},
	"flag-ye": {
		a: "Yemen Flag",
		b: "1F1FE-1F1EA",
		k: [
			4,
			56
		],
		o: 2
	},
	"man-bouncing-ball": {
		skin_variations: {
			"1F3FB": {
				unified: "26F9-1F3FB-200D-2642-FE0F",
				non_qualified: "26F9-1F3FB-200D-2642",
				image: "26f9-1f3fb-200d-2642-fe0f.png",
				sheet_x: 54,
				sheet_y: 26,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "26F9-1F3FC-200D-2642-FE0F",
				non_qualified: "26F9-1F3FC-200D-2642",
				image: "26f9-1f3fc-200d-2642-fe0f.png",
				sheet_x: 54,
				sheet_y: 27,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "26F9-1F3FD-200D-2642-FE0F",
				non_qualified: "26F9-1F3FD-200D-2642",
				image: "26f9-1f3fd-200d-2642-fe0f.png",
				sheet_x: 54,
				sheet_y: 28,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "26F9-1F3FE-200D-2642-FE0F",
				non_qualified: "26F9-1F3FE-200D-2642",
				image: "26f9-1f3fe-200d-2642-fe0f.png",
				sheet_x: 54,
				sheet_y: 29,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "26F9-1F3FF-200D-2642-FE0F",
				non_qualified: "26F9-1F3FF-200D-2642",
				image: "26f9-1f3ff-200d-2642-fe0f.png",
				sheet_x: 54,
				sheet_y: 30,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "26F9-FE0F",
		a: "Man Bouncing Ball",
		b: "26F9-FE0F-200D-2642-FE0F",
		k: [
			54,
			25
		],
		o: 4
	},
	"flag-yt": {
		a: "Mayotte Flag",
		b: "1F1FE-1F1F9",
		k: [
			5,
			0
		],
		o: 2
	},
	"woman-bouncing-ball": {
		skin_variations: {
			"1F3FB": {
				unified: "26F9-1F3FB-200D-2640-FE0F",
				non_qualified: "26F9-1F3FB-200D-2640",
				image: "26f9-1f3fb-200d-2640-fe0f.png",
				sheet_x: 54,
				sheet_y: 20,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "26F9-1F3FC-200D-2640-FE0F",
				non_qualified: "26F9-1F3FC-200D-2640",
				image: "26f9-1f3fc-200d-2640-fe0f.png",
				sheet_x: 54,
				sheet_y: 21,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "26F9-1F3FD-200D-2640-FE0F",
				non_qualified: "26F9-1F3FD-200D-2640",
				image: "26f9-1f3fd-200d-2640-fe0f.png",
				sheet_x: 54,
				sheet_y: 22,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "26F9-1F3FE-200D-2640-FE0F",
				non_qualified: "26F9-1F3FE-200D-2640",
				image: "26f9-1f3fe-200d-2640-fe0f.png",
				sheet_x: 54,
				sheet_y: 23,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "26F9-1F3FF-200D-2640-FE0F",
				non_qualified: "26F9-1F3FF-200D-2640",
				image: "26f9-1f3ff-200d-2640-fe0f.png",
				sheet_x: 54,
				sheet_y: 24,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Bouncing Ball",
		b: "26F9-FE0F-200D-2640-FE0F",
		k: [
			54,
			19
		],
		o: 4
	},
	"flag-za": {
		a: "South Africa Flag",
		b: "1F1FF-1F1E6",
		k: [
			5,
			1
		],
		o: 2
	},
	"flag-zm": {
		a: "Zambia Flag",
		b: "1F1FF-1F1F2",
		k: [
			5,
			2
		],
		o: 2
	},
	weight_lifter: {
		skin_variations: {
			"1F3FB": {
				unified: "1F3CB-1F3FB",
				non_qualified: null,
				image: "1f3cb-1f3fb.png",
				sheet_x: 10,
				sheet_y: 9,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F3CB-1F3FC",
				non_qualified: null,
				image: "1f3cb-1f3fc.png",
				sheet_x: 10,
				sheet_y: 10,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F3CB-1F3FD",
				non_qualified: null,
				image: "1f3cb-1f3fd.png",
				sheet_x: 10,
				sheet_y: 11,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F3CB-1F3FE",
				non_qualified: null,
				image: "1f3cb-1f3fe.png",
				sheet_x: 10,
				sheet_y: 12,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F3CB-1F3FF",
				non_qualified: null,
				image: "1f3cb-1f3ff.png",
				sheet_x: 10,
				sheet_y: 13,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F3CB-FE0F-200D-2642-FE0F",
		a: "Weight Lifter",
		b: "1F3CB-FE0F",
		c: "1F3CB",
		k: [
			10,
			8
		],
		o: 2
	},
	"man-lifting-weights": {
		skin_variations: {
			"1F3FB": {
				unified: "1F3CB-1F3FB-200D-2642-FE0F",
				non_qualified: "1F3CB-1F3FB-200D-2642",
				image: "1f3cb-1f3fb-200d-2642-fe0f.png",
				sheet_x: 10,
				sheet_y: 3,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F3CB-1F3FC-200D-2642-FE0F",
				non_qualified: "1F3CB-1F3FC-200D-2642",
				image: "1f3cb-1f3fc-200d-2642-fe0f.png",
				sheet_x: 10,
				sheet_y: 4,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F3CB-1F3FD-200D-2642-FE0F",
				non_qualified: "1F3CB-1F3FD-200D-2642",
				image: "1f3cb-1f3fd-200d-2642-fe0f.png",
				sheet_x: 10,
				sheet_y: 5,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F3CB-1F3FE-200D-2642-FE0F",
				non_qualified: "1F3CB-1F3FE-200D-2642",
				image: "1f3cb-1f3fe-200d-2642-fe0f.png",
				sheet_x: 10,
				sheet_y: 6,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F3CB-1F3FF-200D-2642-FE0F",
				non_qualified: "1F3CB-1F3FF-200D-2642",
				image: "1f3cb-1f3ff-200d-2642-fe0f.png",
				sheet_x: 10,
				sheet_y: 7,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F3CB-FE0F",
		a: "Man Lifting Weights",
		b: "1F3CB-FE0F-200D-2642-FE0F",
		k: [
			10,
			2
		],
		o: 4
	},
	"flag-zw": {
		a: "Zimbabwe Flag",
		b: "1F1FF-1F1FC",
		k: [
			5,
			3
		],
		o: 2
	},
	"woman-lifting-weights": {
		skin_variations: {
			"1F3FB": {
				unified: "1F3CB-1F3FB-200D-2640-FE0F",
				non_qualified: "1F3CB-1F3FB-200D-2640",
				image: "1f3cb-1f3fb-200d-2640-fe0f.png",
				sheet_x: 9,
				sheet_y: 54,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F3CB-1F3FC-200D-2640-FE0F",
				non_qualified: "1F3CB-1F3FC-200D-2640",
				image: "1f3cb-1f3fc-200d-2640-fe0f.png",
				sheet_x: 9,
				sheet_y: 55,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F3CB-1F3FD-200D-2640-FE0F",
				non_qualified: "1F3CB-1F3FD-200D-2640",
				image: "1f3cb-1f3fd-200d-2640-fe0f.png",
				sheet_x: 9,
				sheet_y: 56,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F3CB-1F3FE-200D-2640-FE0F",
				non_qualified: "1F3CB-1F3FE-200D-2640",
				image: "1f3cb-1f3fe-200d-2640-fe0f.png",
				sheet_x: 10,
				sheet_y: 0,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F3CB-1F3FF-200D-2640-FE0F",
				non_qualified: "1F3CB-1F3FF-200D-2640",
				image: "1f3cb-1f3ff-200d-2640-fe0f.png",
				sheet_x: 10,
				sheet_y: 1,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Lifting Weights",
		b: "1F3CB-FE0F-200D-2640-FE0F",
		k: [
			9,
			53
		],
		o: 4
	},
	"flag-england": {
		a: "England Flag",
		b: "1F3F4-E0067-E0062-E0065-E006E-E0067-E007F",
		k: [
			11,
			14
		],
		o: 5
	},
	bicyclist: {
		skin_variations: {
			"1F3FB": {
				unified: "1F6B4-1F3FB",
				non_qualified: null,
				image: "1f6b4-1f3fb.png",
				sheet_x: 35,
				sheet_y: 24,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F6B4-1F3FC",
				non_qualified: null,
				image: "1f6b4-1f3fc.png",
				sheet_x: 35,
				sheet_y: 25,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F6B4-1F3FD",
				non_qualified: null,
				image: "1f6b4-1f3fd.png",
				sheet_x: 35,
				sheet_y: 26,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F6B4-1F3FE",
				non_qualified: null,
				image: "1f6b4-1f3fe.png",
				sheet_x: 35,
				sheet_y: 27,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F6B4-1F3FF",
				non_qualified: null,
				image: "1f6b4-1f3ff.png",
				sheet_x: 35,
				sheet_y: 28,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F6B4-200D-2642-FE0F",
		a: "Bicyclist",
		b: "1F6B4",
		k: [
			35,
			23
		],
		o: 2
	},
	"flag-scotland": {
		a: "Scotland Flag",
		b: "1F3F4-E0067-E0062-E0073-E0063-E0074-E007F",
		k: [
			11,
			15
		],
		o: 5
	},
	"flag-wales": {
		a: "Wales Flag",
		b: "1F3F4-E0067-E0062-E0077-E006C-E0073-E007F",
		k: [
			11,
			16
		],
		o: 5
	},
	"man-biking": {
		skin_variations: {
			"1F3FB": {
				unified: "1F6B4-1F3FB-200D-2642-FE0F",
				non_qualified: "1F6B4-1F3FB-200D-2642",
				image: "1f6b4-1f3fb-200d-2642-fe0f.png",
				sheet_x: 35,
				sheet_y: 18,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F6B4-1F3FC-200D-2642-FE0F",
				non_qualified: "1F6B4-1F3FC-200D-2642",
				image: "1f6b4-1f3fc-200d-2642-fe0f.png",
				sheet_x: 35,
				sheet_y: 19,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F6B4-1F3FD-200D-2642-FE0F",
				non_qualified: "1F6B4-1F3FD-200D-2642",
				image: "1f6b4-1f3fd-200d-2642-fe0f.png",
				sheet_x: 35,
				sheet_y: 20,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F6B4-1F3FE-200D-2642-FE0F",
				non_qualified: "1F6B4-1F3FE-200D-2642",
				image: "1f6b4-1f3fe-200d-2642-fe0f.png",
				sheet_x: 35,
				sheet_y: 21,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F6B4-1F3FF-200D-2642-FE0F",
				non_qualified: "1F6B4-1F3FF-200D-2642",
				image: "1f6b4-1f3ff-200d-2642-fe0f.png",
				sheet_x: 35,
				sheet_y: 22,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F6B4",
		a: "Man Biking",
		b: "1F6B4-200D-2642-FE0F",
		c: "1F6B4-200D-2642",
		k: [
			35,
			17
		],
		o: 4
	},
	"woman-biking": {
		skin_variations: {
			"1F3FB": {
				unified: "1F6B4-1F3FB-200D-2640-FE0F",
				non_qualified: "1F6B4-1F3FB-200D-2640",
				image: "1f6b4-1f3fb-200d-2640-fe0f.png",
				sheet_x: 35,
				sheet_y: 12,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F6B4-1F3FC-200D-2640-FE0F",
				non_qualified: "1F6B4-1F3FC-200D-2640",
				image: "1f6b4-1f3fc-200d-2640-fe0f.png",
				sheet_x: 35,
				sheet_y: 13,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F6B4-1F3FD-200D-2640-FE0F",
				non_qualified: "1F6B4-1F3FD-200D-2640",
				image: "1f6b4-1f3fd-200d-2640-fe0f.png",
				sheet_x: 35,
				sheet_y: 14,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F6B4-1F3FE-200D-2640-FE0F",
				non_qualified: "1F6B4-1F3FE-200D-2640",
				image: "1f6b4-1f3fe-200d-2640-fe0f.png",
				sheet_x: 35,
				sheet_y: 15,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F6B4-1F3FF-200D-2640-FE0F",
				non_qualified: "1F6B4-1F3FF-200D-2640",
				image: "1f6b4-1f3ff-200d-2640-fe0f.png",
				sheet_x: 35,
				sheet_y: 16,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Biking",
		b: "1F6B4-200D-2640-FE0F",
		c: "1F6B4-200D-2640",
		k: [
			35,
			11
		],
		o: 4
	},
	mountain_bicyclist: {
		skin_variations: {
			"1F3FB": {
				unified: "1F6B5-1F3FB",
				non_qualified: null,
				image: "1f6b5-1f3fb.png",
				sheet_x: 35,
				sheet_y: 42,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F6B5-1F3FC",
				non_qualified: null,
				image: "1f6b5-1f3fc.png",
				sheet_x: 35,
				sheet_y: 43,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F6B5-1F3FD",
				non_qualified: null,
				image: "1f6b5-1f3fd.png",
				sheet_x: 35,
				sheet_y: 44,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F6B5-1F3FE",
				non_qualified: null,
				image: "1f6b5-1f3fe.png",
				sheet_x: 35,
				sheet_y: 45,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F6B5-1F3FF",
				non_qualified: null,
				image: "1f6b5-1f3ff.png",
				sheet_x: 35,
				sheet_y: 46,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F6B5-200D-2642-FE0F",
		a: "Mountain Bicyclist",
		b: "1F6B5",
		k: [
			35,
			41
		],
		o: 2
	},
	"man-mountain-biking": {
		skin_variations: {
			"1F3FB": {
				unified: "1F6B5-1F3FB-200D-2642-FE0F",
				non_qualified: "1F6B5-1F3FB-200D-2642",
				image: "1f6b5-1f3fb-200d-2642-fe0f.png",
				sheet_x: 35,
				sheet_y: 36,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F6B5-1F3FC-200D-2642-FE0F",
				non_qualified: "1F6B5-1F3FC-200D-2642",
				image: "1f6b5-1f3fc-200d-2642-fe0f.png",
				sheet_x: 35,
				sheet_y: 37,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F6B5-1F3FD-200D-2642-FE0F",
				non_qualified: "1F6B5-1F3FD-200D-2642",
				image: "1f6b5-1f3fd-200d-2642-fe0f.png",
				sheet_x: 35,
				sheet_y: 38,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F6B5-1F3FE-200D-2642-FE0F",
				non_qualified: "1F6B5-1F3FE-200D-2642",
				image: "1f6b5-1f3fe-200d-2642-fe0f.png",
				sheet_x: 35,
				sheet_y: 39,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F6B5-1F3FF-200D-2642-FE0F",
				non_qualified: "1F6B5-1F3FF-200D-2642",
				image: "1f6b5-1f3ff-200d-2642-fe0f.png",
				sheet_x: 35,
				sheet_y: 40,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F6B5",
		a: "Man Mountain Biking",
		b: "1F6B5-200D-2642-FE0F",
		c: "1F6B5-200D-2642",
		k: [
			35,
			35
		],
		o: 4
	},
	"woman-mountain-biking": {
		skin_variations: {
			"1F3FB": {
				unified: "1F6B5-1F3FB-200D-2640-FE0F",
				non_qualified: "1F6B5-1F3FB-200D-2640",
				image: "1f6b5-1f3fb-200d-2640-fe0f.png",
				sheet_x: 35,
				sheet_y: 30,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F6B5-1F3FC-200D-2640-FE0F",
				non_qualified: "1F6B5-1F3FC-200D-2640",
				image: "1f6b5-1f3fc-200d-2640-fe0f.png",
				sheet_x: 35,
				sheet_y: 31,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F6B5-1F3FD-200D-2640-FE0F",
				non_qualified: "1F6B5-1F3FD-200D-2640",
				image: "1f6b5-1f3fd-200d-2640-fe0f.png",
				sheet_x: 35,
				sheet_y: 32,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F6B5-1F3FE-200D-2640-FE0F",
				non_qualified: "1F6B5-1F3FE-200D-2640",
				image: "1f6b5-1f3fe-200d-2640-fe0f.png",
				sheet_x: 35,
				sheet_y: 33,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F6B5-1F3FF-200D-2640-FE0F",
				non_qualified: "1F6B5-1F3FF-200D-2640",
				image: "1f6b5-1f3ff-200d-2640-fe0f.png",
				sheet_x: 35,
				sheet_y: 34,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Mountain Biking",
		b: "1F6B5-200D-2640-FE0F",
		c: "1F6B5-200D-2640",
		k: [
			35,
			29
		],
		o: 4
	},
	person_doing_cartwheel: {
		skin_variations: {
			"1F3FB": {
				unified: "1F938-1F3FB",
				non_qualified: null,
				image: "1f938-1f3fb.png",
				sheet_x: 40,
				sheet_y: 9,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F938-1F3FC",
				non_qualified: null,
				image: "1f938-1f3fc.png",
				sheet_x: 40,
				sheet_y: 10,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F938-1F3FD",
				non_qualified: null,
				image: "1f938-1f3fd.png",
				sheet_x: 40,
				sheet_y: 11,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F938-1F3FE",
				non_qualified: null,
				image: "1f938-1f3fe.png",
				sheet_x: 40,
				sheet_y: 12,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F938-1F3FF",
				non_qualified: null,
				image: "1f938-1f3ff.png",
				sheet_x: 40,
				sheet_y: 13,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		a: "Person Doing Cartwheel",
		b: "1F938",
		k: [
			40,
			8
		],
		o: 4
	},
	"man-cartwheeling": {
		skin_variations: {
			"1F3FB": {
				unified: "1F938-1F3FB-200D-2642-FE0F",
				non_qualified: "1F938-1F3FB-200D-2642",
				image: "1f938-1f3fb-200d-2642-fe0f.png",
				sheet_x: 40,
				sheet_y: 3,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F938-1F3FC-200D-2642-FE0F",
				non_qualified: "1F938-1F3FC-200D-2642",
				image: "1f938-1f3fc-200d-2642-fe0f.png",
				sheet_x: 40,
				sheet_y: 4,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F938-1F3FD-200D-2642-FE0F",
				non_qualified: "1F938-1F3FD-200D-2642",
				image: "1f938-1f3fd-200d-2642-fe0f.png",
				sheet_x: 40,
				sheet_y: 5,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F938-1F3FE-200D-2642-FE0F",
				non_qualified: "1F938-1F3FE-200D-2642",
				image: "1f938-1f3fe-200d-2642-fe0f.png",
				sheet_x: 40,
				sheet_y: 6,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F938-1F3FF-200D-2642-FE0F",
				non_qualified: "1F938-1F3FF-200D-2642",
				image: "1f938-1f3ff-200d-2642-fe0f.png",
				sheet_x: 40,
				sheet_y: 7,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Cartwheeling",
		b: "1F938-200D-2642-FE0F",
		c: "1F938-200D-2642",
		k: [
			40,
			2
		],
		o: 4
	},
	"woman-cartwheeling": {
		skin_variations: {
			"1F3FB": {
				unified: "1F938-1F3FB-200D-2640-FE0F",
				non_qualified: "1F938-1F3FB-200D-2640",
				image: "1f938-1f3fb-200d-2640-fe0f.png",
				sheet_x: 39,
				sheet_y: 54,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F938-1F3FC-200D-2640-FE0F",
				non_qualified: "1F938-1F3FC-200D-2640",
				image: "1f938-1f3fc-200d-2640-fe0f.png",
				sheet_x: 39,
				sheet_y: 55,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F938-1F3FD-200D-2640-FE0F",
				non_qualified: "1F938-1F3FD-200D-2640",
				image: "1f938-1f3fd-200d-2640-fe0f.png",
				sheet_x: 39,
				sheet_y: 56,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F938-1F3FE-200D-2640-FE0F",
				non_qualified: "1F938-1F3FE-200D-2640",
				image: "1f938-1f3fe-200d-2640-fe0f.png",
				sheet_x: 40,
				sheet_y: 0,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F938-1F3FF-200D-2640-FE0F",
				non_qualified: "1F938-1F3FF-200D-2640",
				image: "1f938-1f3ff-200d-2640-fe0f.png",
				sheet_x: 40,
				sheet_y: 1,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Cartwheeling",
		b: "1F938-200D-2640-FE0F",
		c: "1F938-200D-2640",
		k: [
			39,
			53
		],
		o: 4
	},
	wrestlers: {
		a: "Wrestlers",
		b: "1F93C",
		k: [
			40,
			35
		],
		o: 4
	},
	"man-wrestling": {
		a: "Man Wrestling",
		b: "1F93C-200D-2642-FE0F",
		c: "1F93C-200D-2642",
		k: [
			40,
			34
		],
		o: 4
	},
	"woman-wrestling": {
		a: "Woman Wrestling",
		b: "1F93C-200D-2640-FE0F",
		c: "1F93C-200D-2640",
		k: [
			40,
			33
		],
		o: 4
	},
	water_polo: {
		skin_variations: {
			"1F3FB": {
				unified: "1F93D-1F3FB",
				non_qualified: null,
				image: "1f93d-1f3fb.png",
				sheet_x: 40,
				sheet_y: 49,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F93D-1F3FC",
				non_qualified: null,
				image: "1f93d-1f3fc.png",
				sheet_x: 40,
				sheet_y: 50,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F93D-1F3FD",
				non_qualified: null,
				image: "1f93d-1f3fd.png",
				sheet_x: 40,
				sheet_y: 51,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F93D-1F3FE",
				non_qualified: null,
				image: "1f93d-1f3fe.png",
				sheet_x: 40,
				sheet_y: 52,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F93D-1F3FF",
				non_qualified: null,
				image: "1f93d-1f3ff.png",
				sheet_x: 40,
				sheet_y: 53,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		a: "Water Polo",
		b: "1F93D",
		k: [
			40,
			48
		],
		o: 4
	},
	"man-playing-water-polo": {
		skin_variations: {
			"1F3FB": {
				unified: "1F93D-1F3FB-200D-2642-FE0F",
				non_qualified: "1F93D-1F3FB-200D-2642",
				image: "1f93d-1f3fb-200d-2642-fe0f.png",
				sheet_x: 40,
				sheet_y: 43,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F93D-1F3FC-200D-2642-FE0F",
				non_qualified: "1F93D-1F3FC-200D-2642",
				image: "1f93d-1f3fc-200d-2642-fe0f.png",
				sheet_x: 40,
				sheet_y: 44,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F93D-1F3FD-200D-2642-FE0F",
				non_qualified: "1F93D-1F3FD-200D-2642",
				image: "1f93d-1f3fd-200d-2642-fe0f.png",
				sheet_x: 40,
				sheet_y: 45,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F93D-1F3FE-200D-2642-FE0F",
				non_qualified: "1F93D-1F3FE-200D-2642",
				image: "1f93d-1f3fe-200d-2642-fe0f.png",
				sheet_x: 40,
				sheet_y: 46,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F93D-1F3FF-200D-2642-FE0F",
				non_qualified: "1F93D-1F3FF-200D-2642",
				image: "1f93d-1f3ff-200d-2642-fe0f.png",
				sheet_x: 40,
				sheet_y: 47,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Playing Water Polo",
		b: "1F93D-200D-2642-FE0F",
		c: "1F93D-200D-2642",
		k: [
			40,
			42
		],
		o: 4
	},
	"woman-playing-water-polo": {
		skin_variations: {
			"1F3FB": {
				unified: "1F93D-1F3FB-200D-2640-FE0F",
				non_qualified: "1F93D-1F3FB-200D-2640",
				image: "1f93d-1f3fb-200d-2640-fe0f.png",
				sheet_x: 40,
				sheet_y: 37,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F93D-1F3FC-200D-2640-FE0F",
				non_qualified: "1F93D-1F3FC-200D-2640",
				image: "1f93d-1f3fc-200d-2640-fe0f.png",
				sheet_x: 40,
				sheet_y: 38,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F93D-1F3FD-200D-2640-FE0F",
				non_qualified: "1F93D-1F3FD-200D-2640",
				image: "1f93d-1f3fd-200d-2640-fe0f.png",
				sheet_x: 40,
				sheet_y: 39,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F93D-1F3FE-200D-2640-FE0F",
				non_qualified: "1F93D-1F3FE-200D-2640",
				image: "1f93d-1f3fe-200d-2640-fe0f.png",
				sheet_x: 40,
				sheet_y: 40,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F93D-1F3FF-200D-2640-FE0F",
				non_qualified: "1F93D-1F3FF-200D-2640",
				image: "1f93d-1f3ff-200d-2640-fe0f.png",
				sheet_x: 40,
				sheet_y: 41,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Playing Water Polo",
		b: "1F93D-200D-2640-FE0F",
		c: "1F93D-200D-2640",
		k: [
			40,
			36
		],
		o: 4
	},
	handball: {
		skin_variations: {
			"1F3FB": {
				unified: "1F93E-1F3FB",
				non_qualified: null,
				image: "1f93e-1f3fb.png",
				sheet_x: 41,
				sheet_y: 10,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F93E-1F3FC",
				non_qualified: null,
				image: "1f93e-1f3fc.png",
				sheet_x: 41,
				sheet_y: 11,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F93E-1F3FD",
				non_qualified: null,
				image: "1f93e-1f3fd.png",
				sheet_x: 41,
				sheet_y: 12,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F93E-1F3FE",
				non_qualified: null,
				image: "1f93e-1f3fe.png",
				sheet_x: 41,
				sheet_y: 13,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F93E-1F3FF",
				non_qualified: null,
				image: "1f93e-1f3ff.png",
				sheet_x: 41,
				sheet_y: 14,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		a: "Handball",
		b: "1F93E",
		k: [
			41,
			9
		],
		o: 4
	},
	"man-playing-handball": {
		skin_variations: {
			"1F3FB": {
				unified: "1F93E-1F3FB-200D-2642-FE0F",
				non_qualified: "1F93E-1F3FB-200D-2642",
				image: "1f93e-1f3fb-200d-2642-fe0f.png",
				sheet_x: 41,
				sheet_y: 4,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F93E-1F3FC-200D-2642-FE0F",
				non_qualified: "1F93E-1F3FC-200D-2642",
				image: "1f93e-1f3fc-200d-2642-fe0f.png",
				sheet_x: 41,
				sheet_y: 5,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F93E-1F3FD-200D-2642-FE0F",
				non_qualified: "1F93E-1F3FD-200D-2642",
				image: "1f93e-1f3fd-200d-2642-fe0f.png",
				sheet_x: 41,
				sheet_y: 6,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F93E-1F3FE-200D-2642-FE0F",
				non_qualified: "1F93E-1F3FE-200D-2642",
				image: "1f93e-1f3fe-200d-2642-fe0f.png",
				sheet_x: 41,
				sheet_y: 7,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F93E-1F3FF-200D-2642-FE0F",
				non_qualified: "1F93E-1F3FF-200D-2642",
				image: "1f93e-1f3ff-200d-2642-fe0f.png",
				sheet_x: 41,
				sheet_y: 8,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Playing Handball",
		b: "1F93E-200D-2642-FE0F",
		c: "1F93E-200D-2642",
		k: [
			41,
			3
		],
		o: 4
	},
	"woman-playing-handball": {
		skin_variations: {
			"1F3FB": {
				unified: "1F93E-1F3FB-200D-2640-FE0F",
				non_qualified: "1F93E-1F3FB-200D-2640",
				image: "1f93e-1f3fb-200d-2640-fe0f.png",
				sheet_x: 40,
				sheet_y: 55,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F93E-1F3FC-200D-2640-FE0F",
				non_qualified: "1F93E-1F3FC-200D-2640",
				image: "1f93e-1f3fc-200d-2640-fe0f.png",
				sheet_x: 40,
				sheet_y: 56,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F93E-1F3FD-200D-2640-FE0F",
				non_qualified: "1F93E-1F3FD-200D-2640",
				image: "1f93e-1f3fd-200d-2640-fe0f.png",
				sheet_x: 41,
				sheet_y: 0,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F93E-1F3FE-200D-2640-FE0F",
				non_qualified: "1F93E-1F3FE-200D-2640",
				image: "1f93e-1f3fe-200d-2640-fe0f.png",
				sheet_x: 41,
				sheet_y: 1,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F93E-1F3FF-200D-2640-FE0F",
				non_qualified: "1F93E-1F3FF-200D-2640",
				image: "1f93e-1f3ff-200d-2640-fe0f.png",
				sheet_x: 41,
				sheet_y: 2,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Playing Handball",
		b: "1F93E-200D-2640-FE0F",
		c: "1F93E-200D-2640",
		k: [
			40,
			54
		],
		o: 4
	},
	juggling: {
		skin_variations: {
			"1F3FB": {
				unified: "1F939-1F3FB",
				non_qualified: null,
				image: "1f939-1f3fb.png",
				sheet_x: 40,
				sheet_y: 27,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F939-1F3FC",
				non_qualified: null,
				image: "1f939-1f3fc.png",
				sheet_x: 40,
				sheet_y: 28,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F939-1F3FD",
				non_qualified: null,
				image: "1f939-1f3fd.png",
				sheet_x: 40,
				sheet_y: 29,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F939-1F3FE",
				non_qualified: null,
				image: "1f939-1f3fe.png",
				sheet_x: 40,
				sheet_y: 30,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F939-1F3FF",
				non_qualified: null,
				image: "1f939-1f3ff.png",
				sheet_x: 40,
				sheet_y: 31,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Juggling",
		b: "1F939",
		k: [
			40,
			26
		],
		o: 4
	},
	"man-juggling": {
		skin_variations: {
			"1F3FB": {
				unified: "1F939-1F3FB-200D-2642-FE0F",
				non_qualified: "1F939-1F3FB-200D-2642",
				image: "1f939-1f3fb-200d-2642-fe0f.png",
				sheet_x: 40,
				sheet_y: 21,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F939-1F3FC-200D-2642-FE0F",
				non_qualified: "1F939-1F3FC-200D-2642",
				image: "1f939-1f3fc-200d-2642-fe0f.png",
				sheet_x: 40,
				sheet_y: 22,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F939-1F3FD-200D-2642-FE0F",
				non_qualified: "1F939-1F3FD-200D-2642",
				image: "1f939-1f3fd-200d-2642-fe0f.png",
				sheet_x: 40,
				sheet_y: 23,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F939-1F3FE-200D-2642-FE0F",
				non_qualified: "1F939-1F3FE-200D-2642",
				image: "1f939-1f3fe-200d-2642-fe0f.png",
				sheet_x: 40,
				sheet_y: 24,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F939-1F3FF-200D-2642-FE0F",
				non_qualified: "1F939-1F3FF-200D-2642",
				image: "1f939-1f3ff-200d-2642-fe0f.png",
				sheet_x: 40,
				sheet_y: 25,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Juggling",
		b: "1F939-200D-2642-FE0F",
		c: "1F939-200D-2642",
		k: [
			40,
			20
		],
		o: 4
	},
	"woman-juggling": {
		skin_variations: {
			"1F3FB": {
				unified: "1F939-1F3FB-200D-2640-FE0F",
				non_qualified: "1F939-1F3FB-200D-2640",
				image: "1f939-1f3fb-200d-2640-fe0f.png",
				sheet_x: 40,
				sheet_y: 15,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F939-1F3FC-200D-2640-FE0F",
				non_qualified: "1F939-1F3FC-200D-2640",
				image: "1f939-1f3fc-200d-2640-fe0f.png",
				sheet_x: 40,
				sheet_y: 16,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F939-1F3FD-200D-2640-FE0F",
				non_qualified: "1F939-1F3FD-200D-2640",
				image: "1f939-1f3fd-200d-2640-fe0f.png",
				sheet_x: 40,
				sheet_y: 17,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F939-1F3FE-200D-2640-FE0F",
				non_qualified: "1F939-1F3FE-200D-2640",
				image: "1f939-1f3fe-200d-2640-fe0f.png",
				sheet_x: 40,
				sheet_y: 18,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F939-1F3FF-200D-2640-FE0F",
				non_qualified: "1F939-1F3FF-200D-2640",
				image: "1f939-1f3ff-200d-2640-fe0f.png",
				sheet_x: 40,
				sheet_y: 19,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Juggling",
		b: "1F939-200D-2640-FE0F",
		c: "1F939-200D-2640",
		k: [
			40,
			14
		],
		o: 4
	},
	person_in_lotus_position: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D8-1F3FB",
				non_qualified: null,
				image: "1f9d8-1f3fb.png",
				sheet_x: 49,
				sheet_y: 32,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D8-1F3FB-200D-2640-FE0F"
			},
			"1F3FC": {
				unified: "1F9D8-1F3FC",
				non_qualified: null,
				image: "1f9d8-1f3fc.png",
				sheet_x: 49,
				sheet_y: 33,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D8-1F3FC-200D-2640-FE0F"
			},
			"1F3FD": {
				unified: "1F9D8-1F3FD",
				non_qualified: null,
				image: "1f9d8-1f3fd.png",
				sheet_x: 49,
				sheet_y: 34,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D8-1F3FD-200D-2640-FE0F"
			},
			"1F3FE": {
				unified: "1F9D8-1F3FE",
				non_qualified: null,
				image: "1f9d8-1f3fe.png",
				sheet_x: 49,
				sheet_y: 35,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D8-1F3FE-200D-2640-FE0F"
			},
			"1F3FF": {
				unified: "1F9D8-1F3FF",
				non_qualified: null,
				image: "1f9d8-1f3ff.png",
				sheet_x: 49,
				sheet_y: 36,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D8-1F3FF-200D-2640-FE0F"
			}
		},
		obsoleted_by: "1F9D8-200D-2640-FE0F",
		a: "Person in Lotus Position",
		b: "1F9D8",
		k: [
			49,
			31
		],
		o: 5
	},
	man_in_lotus_position: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D8-1F3FB-200D-2642-FE0F",
				non_qualified: "1F9D8-1F3FB-200D-2642",
				image: "1f9d8-1f3fb-200d-2642-fe0f.png",
				sheet_x: 49,
				sheet_y: 26,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9D8-1F3FC-200D-2642-FE0F",
				non_qualified: "1F9D8-1F3FC-200D-2642",
				image: "1f9d8-1f3fc-200d-2642-fe0f.png",
				sheet_x: 49,
				sheet_y: 27,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9D8-1F3FD-200D-2642-FE0F",
				non_qualified: "1F9D8-1F3FD-200D-2642",
				image: "1f9d8-1f3fd-200d-2642-fe0f.png",
				sheet_x: 49,
				sheet_y: 28,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9D8-1F3FE-200D-2642-FE0F",
				non_qualified: "1F9D8-1F3FE-200D-2642",
				image: "1f9d8-1f3fe-200d-2642-fe0f.png",
				sheet_x: 49,
				sheet_y: 29,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9D8-1F3FF-200D-2642-FE0F",
				non_qualified: "1F9D8-1F3FF-200D-2642",
				image: "1f9d8-1f3ff-200d-2642-fe0f.png",
				sheet_x: 49,
				sheet_y: 30,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man in Lotus Position",
		b: "1F9D8-200D-2642-FE0F",
		c: "1F9D8-200D-2642",
		k: [
			49,
			25
		],
		o: 5
	},
	woman_in_lotus_position: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D8-1F3FB-200D-2640-FE0F",
				non_qualified: "1F9D8-1F3FB-200D-2640",
				image: "1f9d8-1f3fb-200d-2640-fe0f.png",
				sheet_x: 49,
				sheet_y: 20,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D8-1F3FB"
			},
			"1F3FC": {
				unified: "1F9D8-1F3FC-200D-2640-FE0F",
				non_qualified: "1F9D8-1F3FC-200D-2640",
				image: "1f9d8-1f3fc-200d-2640-fe0f.png",
				sheet_x: 49,
				sheet_y: 21,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D8-1F3FC"
			},
			"1F3FD": {
				unified: "1F9D8-1F3FD-200D-2640-FE0F",
				non_qualified: "1F9D8-1F3FD-200D-2640",
				image: "1f9d8-1f3fd-200d-2640-fe0f.png",
				sheet_x: 49,
				sheet_y: 22,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D8-1F3FD"
			},
			"1F3FE": {
				unified: "1F9D8-1F3FE-200D-2640-FE0F",
				non_qualified: "1F9D8-1F3FE-200D-2640",
				image: "1f9d8-1f3fe-200d-2640-fe0f.png",
				sheet_x: 49,
				sheet_y: 23,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D8-1F3FE"
			},
			"1F3FF": {
				unified: "1F9D8-1F3FF-200D-2640-FE0F",
				non_qualified: "1F9D8-1F3FF-200D-2640",
				image: "1f9d8-1f3ff-200d-2640-fe0f.png",
				sheet_x: 49,
				sheet_y: 24,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D8-1F3FF"
			}
		},
		obsoletes: "1F9D8",
		a: "Woman in Lotus Position",
		b: "1F9D8-200D-2640-FE0F",
		c: "1F9D8-200D-2640",
		k: [
			49,
			19
		],
		o: 5
	},
	bath: {
		skin_variations: {
			"1F3FB": {
				unified: "1F6C0-1F3FB",
				non_qualified: null,
				image: "1f6c0-1f3fb.png",
				sheet_x: 36,
				sheet_y: 18,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F6C0-1F3FC",
				non_qualified: null,
				image: "1f6c0-1f3fc.png",
				sheet_x: 36,
				sheet_y: 19,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F6C0-1F3FD",
				non_qualified: null,
				image: "1f6c0-1f3fd.png",
				sheet_x: 36,
				sheet_y: 20,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F6C0-1F3FE",
				non_qualified: null,
				image: "1f6c0-1f3fe.png",
				sheet_x: 36,
				sheet_y: 21,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F6C0-1F3FF",
				non_qualified: null,
				image: "1f6c0-1f3ff.png",
				sheet_x: 36,
				sheet_y: 22,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Bath",
		b: "1F6C0",
		j: [
			"clean",
			"shower",
			"bathroom"
		],
		k: [
			36,
			17
		],
		o: 2
	},
	sleeping_accommodation: {
		skin_variations: {
			"1F3FB": {
				unified: "1F6CC-1F3FB",
				non_qualified: null,
				image: "1f6cc-1f3fb.png",
				sheet_x: 36,
				sheet_y: 30,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F6CC-1F3FC",
				non_qualified: null,
				image: "1f6cc-1f3fc.png",
				sheet_x: 36,
				sheet_y: 31,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F6CC-1F3FD",
				non_qualified: null,
				image: "1f6cc-1f3fd.png",
				sheet_x: 36,
				sheet_y: 32,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F6CC-1F3FE",
				non_qualified: null,
				image: "1f6cc-1f3fe.png",
				sheet_x: 36,
				sheet_y: 33,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F6CC-1F3FF",
				non_qualified: null,
				image: "1f6cc-1f3ff.png",
				sheet_x: 36,
				sheet_y: 34,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Sleeping Accommodation",
		b: "1F6CC",
		k: [
			36,
			29
		],
		o: 2
	},
	people_holding_hands: {
		skin_variations: {
			"1F3FB-1F3FB": {
				unified: "1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FB",
				non_qualified: null,
				image: "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb.png",
				sheet_x: 46,
				sheet_y: 39,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FB-1F3FC": {
				unified: "1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FC",
				non_qualified: null,
				image: "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fc.png",
				sheet_x: 46,
				sheet_y: 40,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FB-1F3FD": {
				unified: "1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FD",
				non_qualified: null,
				image: "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fd.png",
				sheet_x: 46,
				sheet_y: 41,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FB-1F3FE": {
				unified: "1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FE",
				non_qualified: null,
				image: "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fe.png",
				sheet_x: 46,
				sheet_y: 42,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FB-1F3FF": {
				unified: "1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FF",
				non_qualified: null,
				image: "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3ff.png",
				sheet_x: 46,
				sheet_y: 43,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC-1F3FB": {
				unified: "1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FB",
				non_qualified: null,
				image: "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fb.png",
				sheet_x: 46,
				sheet_y: 44,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC-1F3FC": {
				unified: "1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FC",
				non_qualified: null,
				image: "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc.png",
				sheet_x: 46,
				sheet_y: 45,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC-1F3FD": {
				unified: "1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FD",
				non_qualified: null,
				image: "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fd.png",
				sheet_x: 46,
				sheet_y: 46,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC-1F3FE": {
				unified: "1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FE",
				non_qualified: null,
				image: "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fe.png",
				sheet_x: 46,
				sheet_y: 47,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC-1F3FF": {
				unified: "1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FF",
				non_qualified: null,
				image: "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3ff.png",
				sheet_x: 46,
				sheet_y: 48,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD-1F3FB": {
				unified: "1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FB",
				non_qualified: null,
				image: "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fb.png",
				sheet_x: 46,
				sheet_y: 49,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD-1F3FC": {
				unified: "1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FC",
				non_qualified: null,
				image: "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fc.png",
				sheet_x: 46,
				sheet_y: 50,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD-1F3FD": {
				unified: "1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FD",
				non_qualified: null,
				image: "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd.png",
				sheet_x: 46,
				sheet_y: 51,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD-1F3FE": {
				unified: "1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FE",
				non_qualified: null,
				image: "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fe.png",
				sheet_x: 46,
				sheet_y: 52,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD-1F3FF": {
				unified: "1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FF",
				non_qualified: null,
				image: "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3ff.png",
				sheet_x: 46,
				sheet_y: 53,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE-1F3FB": {
				unified: "1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FB",
				non_qualified: null,
				image: "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fb.png",
				sheet_x: 46,
				sheet_y: 54,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE-1F3FC": {
				unified: "1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FC",
				non_qualified: null,
				image: "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fc.png",
				sheet_x: 46,
				sheet_y: 55,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE-1F3FD": {
				unified: "1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FD",
				non_qualified: null,
				image: "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fd.png",
				sheet_x: 46,
				sheet_y: 56,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE-1F3FE": {
				unified: "1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FE",
				non_qualified: null,
				image: "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe.png",
				sheet_x: 47,
				sheet_y: 0,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE-1F3FF": {
				unified: "1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FF",
				non_qualified: null,
				image: "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3ff.png",
				sheet_x: 47,
				sheet_y: 1,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF-1F3FB": {
				unified: "1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FB",
				non_qualified: null,
				image: "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fb.png",
				sheet_x: 47,
				sheet_y: 2,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF-1F3FC": {
				unified: "1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FC",
				non_qualified: null,
				image: "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fc.png",
				sheet_x: 47,
				sheet_y: 3,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF-1F3FD": {
				unified: "1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FD",
				non_qualified: null,
				image: "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fd.png",
				sheet_x: 47,
				sheet_y: 4,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF-1F3FE": {
				unified: "1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FE",
				non_qualified: null,
				image: "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fe.png",
				sheet_x: 47,
				sheet_y: 5,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF-1F3FF": {
				unified: "1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FF",
				non_qualified: null,
				image: "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff.png",
				sheet_x: 47,
				sheet_y: 6,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "People Holding Hands",
		b: "1F9D1-200D-1F91D-200D-1F9D1",
		k: [
			46,
			38
		],
		o: 12
	},
	two_women_holding_hands: {
		skin_variations: {
			"1F3FB": {
				unified: "1F46D-1F3FB",
				non_qualified: null,
				image: "1f46d-1f3fb.png",
				sheet_x: 21,
				sheet_y: 12,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F46D-1F3FC",
				non_qualified: null,
				image: "1f46d-1f3fc.png",
				sheet_x: 21,
				sheet_y: 13,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F46D-1F3FD",
				non_qualified: null,
				image: "1f46d-1f3fd.png",
				sheet_x: 21,
				sheet_y: 14,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F46D-1F3FE",
				non_qualified: null,
				image: "1f46d-1f3fe.png",
				sheet_x: 21,
				sheet_y: 15,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F46D-1F3FF",
				non_qualified: null,
				image: "1f46d-1f3ff.png",
				sheet_x: 21,
				sheet_y: 16,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FB-1F3FC": {
				unified: "1F469-1F3FB-200D-1F91D-200D-1F469-1F3FC",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f91d-200d-1f469-1f3fc.png",
				sheet_x: 21,
				sheet_y: 17,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FB-1F3FD": {
				unified: "1F469-1F3FB-200D-1F91D-200D-1F469-1F3FD",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f91d-200d-1f469-1f3fd.png",
				sheet_x: 21,
				sheet_y: 18,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FB-1F3FE": {
				unified: "1F469-1F3FB-200D-1F91D-200D-1F469-1F3FE",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f91d-200d-1f469-1f3fe.png",
				sheet_x: 21,
				sheet_y: 19,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FB-1F3FF": {
				unified: "1F469-1F3FB-200D-1F91D-200D-1F469-1F3FF",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f91d-200d-1f469-1f3ff.png",
				sheet_x: 21,
				sheet_y: 20,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC-1F3FB": {
				unified: "1F469-1F3FC-200D-1F91D-200D-1F469-1F3FB",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f91d-200d-1f469-1f3fb.png",
				sheet_x: 21,
				sheet_y: 21,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC-1F3FD": {
				unified: "1F469-1F3FC-200D-1F91D-200D-1F469-1F3FD",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f91d-200d-1f469-1f3fd.png",
				sheet_x: 21,
				sheet_y: 22,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC-1F3FE": {
				unified: "1F469-1F3FC-200D-1F91D-200D-1F469-1F3FE",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f91d-200d-1f469-1f3fe.png",
				sheet_x: 21,
				sheet_y: 23,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC-1F3FF": {
				unified: "1F469-1F3FC-200D-1F91D-200D-1F469-1F3FF",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f91d-200d-1f469-1f3ff.png",
				sheet_x: 21,
				sheet_y: 24,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD-1F3FB": {
				unified: "1F469-1F3FD-200D-1F91D-200D-1F469-1F3FB",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f91d-200d-1f469-1f3fb.png",
				sheet_x: 21,
				sheet_y: 25,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD-1F3FC": {
				unified: "1F469-1F3FD-200D-1F91D-200D-1F469-1F3FC",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f91d-200d-1f469-1f3fc.png",
				sheet_x: 21,
				sheet_y: 26,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD-1F3FE": {
				unified: "1F469-1F3FD-200D-1F91D-200D-1F469-1F3FE",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f91d-200d-1f469-1f3fe.png",
				sheet_x: 21,
				sheet_y: 27,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD-1F3FF": {
				unified: "1F469-1F3FD-200D-1F91D-200D-1F469-1F3FF",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f91d-200d-1f469-1f3ff.png",
				sheet_x: 21,
				sheet_y: 28,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE-1F3FB": {
				unified: "1F469-1F3FE-200D-1F91D-200D-1F469-1F3FB",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f91d-200d-1f469-1f3fb.png",
				sheet_x: 21,
				sheet_y: 29,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE-1F3FC": {
				unified: "1F469-1F3FE-200D-1F91D-200D-1F469-1F3FC",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f91d-200d-1f469-1f3fc.png",
				sheet_x: 21,
				sheet_y: 30,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE-1F3FD": {
				unified: "1F469-1F3FE-200D-1F91D-200D-1F469-1F3FD",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f91d-200d-1f469-1f3fd.png",
				sheet_x: 21,
				sheet_y: 31,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE-1F3FF": {
				unified: "1F469-1F3FE-200D-1F91D-200D-1F469-1F3FF",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f91d-200d-1f469-1f3ff.png",
				sheet_x: 21,
				sheet_y: 32,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF-1F3FB": {
				unified: "1F469-1F3FF-200D-1F91D-200D-1F469-1F3FB",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fb.png",
				sheet_x: 21,
				sheet_y: 33,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF-1F3FC": {
				unified: "1F469-1F3FF-200D-1F91D-200D-1F469-1F3FC",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fc.png",
				sheet_x: 21,
				sheet_y: 34,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF-1F3FD": {
				unified: "1F469-1F3FF-200D-1F91D-200D-1F469-1F3FD",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fd.png",
				sheet_x: 21,
				sheet_y: 35,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF-1F3FE": {
				unified: "1F469-1F3FF-200D-1F91D-200D-1F469-1F3FE",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fe.png",
				sheet_x: 21,
				sheet_y: 36,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Two Women Holding Hands",
		b: "1F46D",
		j: [
			"pair",
			"friendship",
			"couple",
			"love",
			"like",
			"female",
			"people",
			"human"
		],
		k: [
			21,
			11
		],
		n: [
			"women_holding_hands"
		],
		o: 2
	},
	couple: {
		skin_variations: {
			"1F3FB": {
				unified: "1F46B-1F3FB",
				non_qualified: null,
				image: "1f46b-1f3fb.png",
				sheet_x: 20,
				sheet_y: 17,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F46B-1F3FC",
				non_qualified: null,
				image: "1f46b-1f3fc.png",
				sheet_x: 20,
				sheet_y: 18,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F46B-1F3FD",
				non_qualified: null,
				image: "1f46b-1f3fd.png",
				sheet_x: 20,
				sheet_y: 19,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F46B-1F3FE",
				non_qualified: null,
				image: "1f46b-1f3fe.png",
				sheet_x: 20,
				sheet_y: 20,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F46B-1F3FF",
				non_qualified: null,
				image: "1f46b-1f3ff.png",
				sheet_x: 20,
				sheet_y: 21,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FB-1F3FC": {
				unified: "1F469-1F3FB-200D-1F91D-200D-1F468-1F3FC",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f91d-200d-1f468-1f3fc.png",
				sheet_x: 20,
				sheet_y: 22,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FB-1F3FD": {
				unified: "1F469-1F3FB-200D-1F91D-200D-1F468-1F3FD",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f91d-200d-1f468-1f3fd.png",
				sheet_x: 20,
				sheet_y: 23,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FB-1F3FE": {
				unified: "1F469-1F3FB-200D-1F91D-200D-1F468-1F3FE",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f91d-200d-1f468-1f3fe.png",
				sheet_x: 20,
				sheet_y: 24,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FB-1F3FF": {
				unified: "1F469-1F3FB-200D-1F91D-200D-1F468-1F3FF",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f91d-200d-1f468-1f3ff.png",
				sheet_x: 20,
				sheet_y: 25,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC-1F3FB": {
				unified: "1F469-1F3FC-200D-1F91D-200D-1F468-1F3FB",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f91d-200d-1f468-1f3fb.png",
				sheet_x: 20,
				sheet_y: 26,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC-1F3FD": {
				unified: "1F469-1F3FC-200D-1F91D-200D-1F468-1F3FD",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f91d-200d-1f468-1f3fd.png",
				sheet_x: 20,
				sheet_y: 27,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC-1F3FE": {
				unified: "1F469-1F3FC-200D-1F91D-200D-1F468-1F3FE",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f91d-200d-1f468-1f3fe.png",
				sheet_x: 20,
				sheet_y: 28,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC-1F3FF": {
				unified: "1F469-1F3FC-200D-1F91D-200D-1F468-1F3FF",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f91d-200d-1f468-1f3ff.png",
				sheet_x: 20,
				sheet_y: 29,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD-1F3FB": {
				unified: "1F469-1F3FD-200D-1F91D-200D-1F468-1F3FB",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f91d-200d-1f468-1f3fb.png",
				sheet_x: 20,
				sheet_y: 30,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD-1F3FC": {
				unified: "1F469-1F3FD-200D-1F91D-200D-1F468-1F3FC",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f91d-200d-1f468-1f3fc.png",
				sheet_x: 20,
				sheet_y: 31,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD-1F3FE": {
				unified: "1F469-1F3FD-200D-1F91D-200D-1F468-1F3FE",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f91d-200d-1f468-1f3fe.png",
				sheet_x: 20,
				sheet_y: 32,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD-1F3FF": {
				unified: "1F469-1F3FD-200D-1F91D-200D-1F468-1F3FF",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f91d-200d-1f468-1f3ff.png",
				sheet_x: 20,
				sheet_y: 33,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE-1F3FB": {
				unified: "1F469-1F3FE-200D-1F91D-200D-1F468-1F3FB",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f91d-200d-1f468-1f3fb.png",
				sheet_x: 20,
				sheet_y: 34,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE-1F3FC": {
				unified: "1F469-1F3FE-200D-1F91D-200D-1F468-1F3FC",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f91d-200d-1f468-1f3fc.png",
				sheet_x: 20,
				sheet_y: 35,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE-1F3FD": {
				unified: "1F469-1F3FE-200D-1F91D-200D-1F468-1F3FD",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f91d-200d-1f468-1f3fd.png",
				sheet_x: 20,
				sheet_y: 36,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE-1F3FF": {
				unified: "1F469-1F3FE-200D-1F91D-200D-1F468-1F3FF",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f91d-200d-1f468-1f3ff.png",
				sheet_x: 20,
				sheet_y: 37,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF-1F3FB": {
				unified: "1F469-1F3FF-200D-1F91D-200D-1F468-1F3FB",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fb.png",
				sheet_x: 20,
				sheet_y: 38,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF-1F3FC": {
				unified: "1F469-1F3FF-200D-1F91D-200D-1F468-1F3FC",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fc.png",
				sheet_x: 20,
				sheet_y: 39,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF-1F3FD": {
				unified: "1F469-1F3FF-200D-1F91D-200D-1F468-1F3FD",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fd.png",
				sheet_x: 20,
				sheet_y: 40,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF-1F3FE": {
				unified: "1F469-1F3FF-200D-1F91D-200D-1F468-1F3FE",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fe.png",
				sheet_x: 20,
				sheet_y: 41,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man and Woman Holding Hands",
		b: "1F46B",
		j: [
			"pair",
			"people",
			"human",
			"love",
			"date",
			"dating",
			"like",
			"affection",
			"valentines",
			"marriage"
		],
		k: [
			20,
			16
		],
		n: [
			"man_and_woman_holding_hands",
			"woman_and_man_holding_hands"
		],
		o: 2
	},
	two_men_holding_hands: {
		skin_variations: {
			"1F3FB": {
				unified: "1F46C-1F3FB",
				non_qualified: null,
				image: "1f46c-1f3fb.png",
				sheet_x: 20,
				sheet_y: 43,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F46C-1F3FC",
				non_qualified: null,
				image: "1f46c-1f3fc.png",
				sheet_x: 20,
				sheet_y: 44,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F46C-1F3FD",
				non_qualified: null,
				image: "1f46c-1f3fd.png",
				sheet_x: 20,
				sheet_y: 45,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F46C-1F3FE",
				non_qualified: null,
				image: "1f46c-1f3fe.png",
				sheet_x: 20,
				sheet_y: 46,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F46C-1F3FF",
				non_qualified: null,
				image: "1f46c-1f3ff.png",
				sheet_x: 20,
				sheet_y: 47,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FB-1F3FC": {
				unified: "1F468-1F3FB-200D-1F91D-200D-1F468-1F3FC",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f91d-200d-1f468-1f3fc.png",
				sheet_x: 20,
				sheet_y: 48,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FB-1F3FD": {
				unified: "1F468-1F3FB-200D-1F91D-200D-1F468-1F3FD",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f91d-200d-1f468-1f3fd.png",
				sheet_x: 20,
				sheet_y: 49,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FB-1F3FE": {
				unified: "1F468-1F3FB-200D-1F91D-200D-1F468-1F3FE",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f91d-200d-1f468-1f3fe.png",
				sheet_x: 20,
				sheet_y: 50,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FB-1F3FF": {
				unified: "1F468-1F3FB-200D-1F91D-200D-1F468-1F3FF",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f91d-200d-1f468-1f3ff.png",
				sheet_x: 20,
				sheet_y: 51,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC-1F3FB": {
				unified: "1F468-1F3FC-200D-1F91D-200D-1F468-1F3FB",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f91d-200d-1f468-1f3fb.png",
				sheet_x: 20,
				sheet_y: 52,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC-1F3FD": {
				unified: "1F468-1F3FC-200D-1F91D-200D-1F468-1F3FD",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f91d-200d-1f468-1f3fd.png",
				sheet_x: 20,
				sheet_y: 53,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC-1F3FE": {
				unified: "1F468-1F3FC-200D-1F91D-200D-1F468-1F3FE",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f91d-200d-1f468-1f3fe.png",
				sheet_x: 20,
				sheet_y: 54,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC-1F3FF": {
				unified: "1F468-1F3FC-200D-1F91D-200D-1F468-1F3FF",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f91d-200d-1f468-1f3ff.png",
				sheet_x: 20,
				sheet_y: 55,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD-1F3FB": {
				unified: "1F468-1F3FD-200D-1F91D-200D-1F468-1F3FB",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f91d-200d-1f468-1f3fb.png",
				sheet_x: 20,
				sheet_y: 56,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD-1F3FC": {
				unified: "1F468-1F3FD-200D-1F91D-200D-1F468-1F3FC",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f91d-200d-1f468-1f3fc.png",
				sheet_x: 21,
				sheet_y: 0,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD-1F3FE": {
				unified: "1F468-1F3FD-200D-1F91D-200D-1F468-1F3FE",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f91d-200d-1f468-1f3fe.png",
				sheet_x: 21,
				sheet_y: 1,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD-1F3FF": {
				unified: "1F468-1F3FD-200D-1F91D-200D-1F468-1F3FF",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f91d-200d-1f468-1f3ff.png",
				sheet_x: 21,
				sheet_y: 2,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE-1F3FB": {
				unified: "1F468-1F3FE-200D-1F91D-200D-1F468-1F3FB",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f91d-200d-1f468-1f3fb.png",
				sheet_x: 21,
				sheet_y: 3,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE-1F3FC": {
				unified: "1F468-1F3FE-200D-1F91D-200D-1F468-1F3FC",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f91d-200d-1f468-1f3fc.png",
				sheet_x: 21,
				sheet_y: 4,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE-1F3FD": {
				unified: "1F468-1F3FE-200D-1F91D-200D-1F468-1F3FD",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f91d-200d-1f468-1f3fd.png",
				sheet_x: 21,
				sheet_y: 5,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE-1F3FF": {
				unified: "1F468-1F3FE-200D-1F91D-200D-1F468-1F3FF",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f91d-200d-1f468-1f3ff.png",
				sheet_x: 21,
				sheet_y: 6,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF-1F3FB": {
				unified: "1F468-1F3FF-200D-1F91D-200D-1F468-1F3FB",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fb.png",
				sheet_x: 21,
				sheet_y: 7,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF-1F3FC": {
				unified: "1F468-1F3FF-200D-1F91D-200D-1F468-1F3FC",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fc.png",
				sheet_x: 21,
				sheet_y: 8,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF-1F3FD": {
				unified: "1F468-1F3FF-200D-1F91D-200D-1F468-1F3FD",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fd.png",
				sheet_x: 21,
				sheet_y: 9,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF-1F3FE": {
				unified: "1F468-1F3FF-200D-1F91D-200D-1F468-1F3FE",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fe.png",
				sheet_x: 21,
				sheet_y: 10,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Two Men Holding Hands",
		b: "1F46C",
		j: [
			"pair",
			"couple",
			"love",
			"like",
			"bromance",
			"friendship",
			"people",
			"human"
		],
		k: [
			20,
			42
		],
		n: [
			"men_holding_hands"
		],
		o: 2
	},
	couplekiss: {
		obsoleted_by: "1F469-200D-2764-FE0F-200D-1F48B-200D-1F468",
		a: "Kiss",
		b: "1F48F",
		k: [
			25,
			25
		],
		o: 2
	},
	"woman-kiss-man": {
		obsoletes: "1F48F",
		a: "Woman Kiss Man",
		b: "1F469-200D-2764-FE0F-200D-1F48B-200D-1F468",
		c: "1F469-200D-2764-200D-1F48B-200D-1F468",
		k: [
			20,
			7
		],
		o: 2
	},
	"man-kiss-man": {
		a: "Man Kiss Man",
		b: "1F468-200D-2764-FE0F-200D-1F48B-200D-1F468",
		c: "1F468-200D-2764-200D-1F48B-200D-1F468",
		k: [
			17,
			21
		],
		o: 2
	},
	"woman-kiss-woman": {
		a: "Woman Kiss Woman",
		b: "1F469-200D-2764-FE0F-200D-1F48B-200D-1F469",
		c: "1F469-200D-2764-200D-1F48B-200D-1F469",
		k: [
			20,
			8
		],
		o: 2
	},
	couple_with_heart: {
		obsoleted_by: "1F469-200D-2764-FE0F-200D-1F468",
		a: "Couple with Heart",
		b: "1F491",
		k: [
			25,
			27
		],
		o: 2
	},
	"woman-heart-man": {
		obsoletes: "1F491",
		a: "Woman Heart Man",
		b: "1F469-200D-2764-FE0F-200D-1F468",
		c: "1F469-200D-2764-200D-1F468",
		k: [
			20,
			5
		],
		o: 2
	},
	"man-heart-man": {
		a: "Man Heart Man",
		b: "1F468-200D-2764-FE0F-200D-1F468",
		c: "1F468-200D-2764-200D-1F468",
		k: [
			17,
			20
		],
		o: 2
	},
	"woman-heart-woman": {
		a: "Woman Heart Woman",
		b: "1F469-200D-2764-FE0F-200D-1F469",
		c: "1F469-200D-2764-200D-1F469",
		k: [
			20,
			6
		],
		o: 2
	},
	family: {
		obsoleted_by: "1F468-200D-1F469-200D-1F466",
		a: "Family",
		b: "1F46A",
		k: [
			20,
			15
		],
		n: [
			"man-woman-boy"
		],
		o: 2
	},
	"man-woman-boy": {
		obsoletes: "1F46A",
		a: "Man Woman Boy",
		b: "1F468-200D-1F469-200D-1F466",
		k: [
			15,
			33
		],
		n: [
			"family"
		],
		o: 2
	},
	"man-woman-girl": {
		a: "Man Woman Girl",
		b: "1F468-200D-1F469-200D-1F467",
		k: [
			15,
			35
		],
		o: 2
	},
	"man-woman-girl-boy": {
		a: "Man Woman Girl Boy",
		b: "1F468-200D-1F469-200D-1F467-200D-1F466",
		k: [
			15,
			36
		],
		o: 2
	},
	"man-woman-boy-boy": {
		a: "Man Woman Boy Boy",
		b: "1F468-200D-1F469-200D-1F466-200D-1F466",
		k: [
			15,
			34
		],
		o: 2
	},
	"man-woman-girl-girl": {
		a: "Man Woman Girl Girl",
		b: "1F468-200D-1F469-200D-1F467-200D-1F467",
		k: [
			15,
			37
		],
		o: 2
	},
	"man-man-boy": {
		a: "Man Man Boy",
		b: "1F468-200D-1F468-200D-1F466",
		k: [
			15,
			28
		],
		o: 2
	},
	"man-man-girl": {
		a: "Man Man Girl",
		b: "1F468-200D-1F468-200D-1F467",
		k: [
			15,
			30
		],
		o: 2
	},
	"man-man-girl-boy": {
		a: "Man Man Girl Boy",
		b: "1F468-200D-1F468-200D-1F467-200D-1F466",
		k: [
			15,
			31
		],
		o: 2
	},
	"man-man-boy-boy": {
		a: "Man Man Boy Boy",
		b: "1F468-200D-1F468-200D-1F466-200D-1F466",
		k: [
			15,
			29
		],
		o: 2
	},
	"man-man-girl-girl": {
		a: "Man Man Girl Girl",
		b: "1F468-200D-1F468-200D-1F467-200D-1F467",
		k: [
			15,
			32
		],
		o: 2
	},
	"woman-woman-boy": {
		a: "Woman Woman Boy",
		b: "1F469-200D-1F469-200D-1F466",
		k: [
			18,
			18
		],
		o: 2
	},
	"woman-woman-girl": {
		a: "Woman Woman Girl",
		b: "1F469-200D-1F469-200D-1F467",
		k: [
			18,
			20
		],
		o: 2
	},
	"woman-woman-girl-boy": {
		a: "Woman Woman Girl Boy",
		b: "1F469-200D-1F469-200D-1F467-200D-1F466",
		k: [
			18,
			21
		],
		o: 2
	},
	"woman-woman-boy-boy": {
		a: "Woman Woman Boy Boy",
		b: "1F469-200D-1F469-200D-1F466-200D-1F466",
		k: [
			18,
			19
		],
		o: 2
	},
	"woman-woman-girl-girl": {
		a: "Woman Woman Girl Girl",
		b: "1F469-200D-1F469-200D-1F467-200D-1F467",
		k: [
			18,
			22
		],
		o: 2
	},
	"man-boy": {
		a: "Man Boy",
		b: "1F468-200D-1F466",
		k: [
			15,
			24
		],
		o: 4
	},
	"man-boy-boy": {
		a: "Man Boy Boy",
		b: "1F468-200D-1F466-200D-1F466",
		k: [
			15,
			23
		],
		o: 4
	},
	"man-girl": {
		a: "Man Girl",
		b: "1F468-200D-1F467",
		k: [
			15,
			27
		],
		o: 4
	},
	"man-girl-boy": {
		a: "Man Girl Boy",
		b: "1F468-200D-1F467-200D-1F466",
		k: [
			15,
			25
		],
		o: 4
	},
	"man-girl-girl": {
		a: "Man Girl Girl",
		b: "1F468-200D-1F467-200D-1F467",
		k: [
			15,
			26
		],
		o: 4
	},
	"woman-boy": {
		a: "Woman Boy",
		b: "1F469-200D-1F466",
		k: [
			18,
			14
		],
		o: 4
	},
	"woman-boy-boy": {
		a: "Woman Boy Boy",
		b: "1F469-200D-1F466-200D-1F466",
		k: [
			18,
			13
		],
		o: 4
	},
	"woman-girl": {
		a: "Woman Girl",
		b: "1F469-200D-1F467",
		k: [
			18,
			17
		],
		o: 4
	},
	"woman-girl-boy": {
		a: "Woman Girl Boy",
		b: "1F469-200D-1F467-200D-1F466",
		k: [
			18,
			15
		],
		o: 4
	},
	"woman-girl-girl": {
		a: "Woman Girl Girl",
		b: "1F469-200D-1F467-200D-1F467",
		k: [
			18,
			16
		],
		o: 4
	},
	speaking_head_in_silhouette: {
		a: "Speaking Head in Silhouette",
		b: "1F5E3-FE0F",
		c: "1F5E3",
		k: [
			30,
			25
		],
		o: 2
	},
	bust_in_silhouette: {
		a: "Bust in Silhouette",
		b: "1F464",
		j: [
			"user",
			"person",
			"human"
		],
		k: [
			14,
			24
		],
		o: 2
	},
	busts_in_silhouette: {
		a: "Busts in Silhouette",
		b: "1F465",
		j: [
			"user",
			"person",
			"human",
			"group",
			"team"
		],
		k: [
			14,
			25
		],
		o: 2
	},
	footprints: {
		a: "Footprints",
		b: "1F463",
		j: [
			"feet",
			"tracking",
			"walking",
			"beach"
		],
		k: [
			14,
			23
		],
		o: 2
	}
};
var aliases = {
	raised_hand: "hand",
	satisfied: "laughing",
	tshirt: "shirt",
	hand_with_index_and_middle_fingers_crossed: "crossed_fingers",
	sign_of_the_horns: "the_horns",
	grinning_face_with_star_eyes: "star-struck",
	reversed_hand_with_middle_finger_extended: "middle_finger",
	thumbsup: "+1",
	thumbsdown: "-1",
	punch: "facepunch",
	grinning_face_with_one_large_and_one_small_eye: "zany_face",
	shoe: "mans_shoe",
	smiling_face_with_smiling_eyes_and_hand_covering_mouth: "face_with_hand_over_mouth",
	face_with_finger_covering_closed_lips: "shushing_face",
	face_with_one_eyebrow_raised: "face_with_raised_eyebrow",
	face_with_open_mouth_vomiting: "face_vomiting",
	cooking: "fried_egg",
	"flag-cn": "cn",
	shocked_face_with_exploding_head: "exploding_head",
	paw_prints: "feet",
	"flag-de": "de",
	telephone: "phone",
	"flag-es": "es",
	red_car: "car",
	flipper: "dolphin",
	"flag-fr": "fr",
	uk: "gb",
	"flag-gb": "gb",
	serious_face_with_symbols_covering_mouth: "face_with_symbols_on_mouth",
	poop: "hankey",
	shit: "hankey",
	honeybee: "bee",
	staff_of_aesculapius: "medical_symbol",
	lantern: "izakaya_lantern",
	open_book: "book",
	sailboat: "boat",
	knife: "hocho",
	"flag-it": "it",
	heavy_exclamation_mark: "exclamation",
	"flag-jp": "jp",
	envelope: "email",
	"flag-kr": "kr",
	collision: "boom",
	pencil: "memo",
	waxing_gibbous_moon: "moon",
	mother_christmas: "mrs_claus",
	sun_small_cloud: "mostly_sunny",
	sun_behind_cloud: "barely_sunny",
	sun_behind_rain_cloud: "partly_sunny_rain",
	lightning_cloud: "lightning",
	tornado_cloud: "tornado",
	"flag-ru": "ru",
	running: "runner",
	"flag-us": "us",
	women_holding_hands: "two_women_holding_hands",
	man_and_woman_holding_hands: "couple",
	woman_and_man_holding_hands: "couple",
	men_holding_hands: "two_men_holding_hands",
	"man-woman-boy": "family",
	family: "man-woman-boy"
};
var google = {
	compressed: compressed,
	categories: categories,
	emojis: emojis,
	aliases: aliases
};

exports.aliases = aliases;
exports.categories = categories;
exports.compressed = compressed;
exports["default"] = google;
exports.emojis = emojis;
