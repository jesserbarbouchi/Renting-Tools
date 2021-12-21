const User = require("./models/users.js");
const Tool = require("./models/tools.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/rentingTools");
let users = [
	{
		username: "Souha",
		fullname: "Souha gharbi",
		email: "souha_gharbi@gmail.com",
		phone_number: "55699884",
		password: "123azerty",
		profile_image_uri:
			"https://media.istockphoto.com/photos/pleasant-young-indian-woman-freelancer-consult-client-via-video-call-picture-id1300972573?b=1&k=20&m=1300972573&s=170667a&w=0&h=xuAsEkMkoBbc5Nh-nButyq3DU297V_tnak-60VarrR0=",
	},
	{
		username: "#Sabri",
		fullname: "Sabri hamadi",
		email: "sabri@gmail.com",
		phone_number: "26355894",
		password: "sabri1234",
		profile_image_uri:
			"https://media.istockphoto.com/photos/middle-age-man-portrait-picture-id1285124274?b=1&k=20&m=1285124274&s=170667a&w=0&h=tdCWjbu8NxR_vhU3Tri7mZcfUH6WdcYWS1aurF4bbKI=",
	},
	{
		username: "@Aicha_15",
		fullname: "Aicha hamzaoui",
		email: "aicha@yahoo.com",
		phone_number: "93665887",
		password: "aicha1234",
		profile_image_uri:
			"https://media.istockphoto.com/photos/one-beautiful-woman-looking-at-the-camera-in-profile-picture-id1303539316?b=1&k=20&m=1303539316&s=170667a&w=0&h=ePGGvjsOR__-R2KSvZ67xXl2x-CkVzKg8q_WtvqLww0=",
	},
	{
		username: "Sami_666",
		fullname: "Sami hamami",
		email: "sami@hotmail.com",
		phone_number: "56889944",
		password: "samiiii1234",
		profile_image_uri:
			"https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=",
	},
	{
		username: "=>>Ahmed<<==",
		fullname: "Ahmed ksouri",
		email: "ksouri_ahmed@yahoo.com",
		phone_number: "23669587",
		password: "ahmed1234",
		profile_image_uri:
			"https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?b=1&k=20&m=1309328823&s=170667a&w=0&h=a-f8vR5TDFnkMY5poQXfQhDSnK1iImIfgVTVpFZi_KU=",
	},
	{
		username: "Khlifa",
		fullname: "Khlifa khriji",
		email: "khlifa@gmail.com",
		phone_number: "23448953",
		password: "khlifa1234",
		profile_image_uri:
			"https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=",
	},
	{
		username: "Linda",
		fullname: "Linda farza",
		email: "linda@gmail.com",
		phone_number: "25663314",
		password: "linda1234",
		profile_image_uri:
			"https://media.istockphoto.com/photos/headshot-studio-portrait-of-a-woman-in-profile-looking-at-the-camera-picture-id1305462732?b=1&k=20&m=1305462732&s=170667a&w=0&h=PrX1YvXLF8QwgvTmcqG6BFqe9ugwNb_rtsLi38R9pFs=",
	},
	{
		username: "Fadhila",
		fullname: "Fadhila meziti",
		email: "fadhika@gmail.com",
		phone_number: "99665544",
		password: "fadhila1234",
		profile_image_uri:
			"https://media.istockphoto.com/photos/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter-picture-id1311084168?b=1&k=20&m=1311084168&s=170667a&w=0&h=mE8BgXPgcHO1UjSmdWYa21NIKDzJvMrjOffy39Ritpo=",
	},
	{
		username: "Zaineb",
		fullname: "Zaineb saidii",
		email: "zaynab@hotmail.com",
		phone_number: "21338899",
		password: "zaynab1234",
		profile_image_uri:
			"https://media.istockphoto.com/photos/positive-mindset-positive-life-picture-id1272765753?b=1&k=20&m=1272765753&s=170667a&w=0&h=8Twyimx9TOKgr67OrabNA5sUeEgYT7ckM5HU6fnL5Ik=",
	},
	{
		username: "!Badis",
		fullname: "Badis karma",
		email: "badis@gmail.com",
		phone_number: "96312543",
		password: "badis1234",
		profile_image_uri:
			"https://media.istockphoto.com/photos/young-man-with-backpack-taking-selfie-portrait-on-a-mountain-smiling-picture-id1329031407?b=1&k=20&m=1329031407&s=170667a&w=0&h=J6qRqj9hbKtSVwIfMJhcRXf3AEyAOshph2IAbPHwNUo=",
	},
	{
		username: "Nadine",
		fullname: "nadine warka",
		email: "nadine@gmail.com",
		phone_number: "22336655",
		password: "nadine1234",
		profile_image_uri:
			"https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
	},
	{
		username: "Jamila",
		fullname: "jamila madyouni",
		email: "jamila@yahoo.com",
		phone_number: "21457896",
		password: "jamila1234",
		profile_image_uri:
			"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
	},
	{
		username: "@Mohamed_ali",
		fullname: "mohamed ali nour",
		email: "ali_nour@gmail.com",
		phone_number: "25663384",
		password: "medali1234",
		profile_image_uri:
			"https://media.istockphoto.com/photos/young-man-is-playing-with-a-dog-and-do-selfie-picture-id1300658241?b=1&k=20&m=1300658241&s=170667a&w=0&h=0lrTViinfnDjbWDgxV0TDDSAXvzSgmrN-pKq0q60hqA=",
	},
	{
		username: "Mahmoud",
		fullname: "mahmoud bouAli",
		email: "mahmoud_1235@gmail.com",
		phone_number: "55996332",
		password: "mahmoud1234",
		profile_image_uri:
			"https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
	},
];

const addUsers = async (list) => {
	for (let i = 0; i < list.length; i++) {
		let user = new User(list[i]);
		let doc = await user.save();
		console.log(doc);
	}
};

// addUsers(users);

let usersdata = [
	{
		username: 'Souha',
		fullname: 'Souha gharbi',
		connected: false,
		email: 'souha_gharbi@gmail.com',
		phone_number: '55699884',
		password: '$2b$10$kT0KXA2DvDgTcrRiuHp1M.tRGYb2kvxinF2/i88irDTjbVqq4Co4m',
		fav_category: [],
		profile_image_uri: 'https://media.istockphoto.com/photos/pleasant-young-indian-woman-freelancer-consult-client-via-video-call-picture-id1300972573?b=1&k=20&m=1300972573&s=170667a&w=0&h=xuAsEkMkoBbc5Nh-nButyq3DU297V_tnak-60VarrR0=',
		verified: true,
		_id: ("61bf323b56830c87b5db75eb"),
	  },
	  {
		username: '#Sabri',
		fullname: 'Sabri hamadi',
		connected: false,
		email: 'sabri@gmail.com',
		phone_number: '26355894',
		password: '$2b$10$aN34Z7l0eMyVpX1aYe5qu.mpjamyDNk5rfOd19uQ5Zk/fh3itTzbm',
		fav_category: [],
		profile_image_uri: 'https://media.istockphoto.com/photos/middle-age-man-portrait-picture-id1285124274?b=1&k=20&m=1285124274&s=170667a&w=0&h=tdCWjbu8NxR_vhU3Tri7mZcfUH6WdcYWS1aurF4bbKI=',
		verified: true,
		_id: ("61bf323b56830c87b5db75ed"),
	  },
	  {
		username: '@Aicha_15',
		fullname: 'Aicha hamzaoui',
		connected: false,
		email: 'aicha@yahoo.com',
		phone_number: '93665887',
		password: '$2b$10$VaEMX1577SRNbiC1f7jTlekPnmHXZ11VB6wit.mti/RnZSZJ5NN2m',
		fav_category: [],
		profile_image_uri: 'https://media.istockphoto.com/photos/one-beautiful-woman-looking-at-the-camera-in-profile-picture-id1303539316?b=1&k=20&m=1303539316&s=170667a&w=0&h=ePGGvjsOR__-R2KSvZ67xXl2x-CkVzKg8q_WtvqLww0=',
		verified: true,
		_id: ("61bf323b56830c87b5db75ef"),
	  },
	  {
		username: 'Sami_666',
		fullname: 'Sami hamami',
		connected: false,
		email: 'sami@hotmail.com',
		phone_number: '56889944',
		password: '$2b$10$D6BUmPgG8jwOWAmfM1L1e.hXAOluP08ORdSVKtTo.dJcmSTv/q/vm',
		fav_category: [],
		profile_image_uri: 'https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=',
		verified: true,
		_id: ("61bf323b56830c87b5db75f1"),
	  },
	  {
		username: '=>>Ahmed<<==',
		fullname: 'Ahmed ksouri',
		connected: false,
		email: 'ksouri_ahmed@yahoo.com',
		phone_number: '23669587',
		password: '$2b$10$OJzQFuyMnkEH0N8mTKsQNeu9EmnhVGGxpvDM.5bBGNA1ZrKrX3ubS',
		fav_category: [],
		profile_image_uri: 'https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?b=1&k=20&m=1309328823&s=170667a&w=0&h=a-f8vR5TDFnkMY5poQXfQhDSnK1iImIfgVTVpFZi_KU=',
		verified: true,
		_id: ("61bf323b56830c87b5db75f3"),
	  },
	  {
		username: 'Khlifa',
		fullname: 'Khlifa khriji',
		connected: false,
		email: 'khlifa@gmail.com',
		phone_number: '23448953',
		password: '$2b$10$u.lp9QKu3yRWEZ/YVULCVe94sQP0CfryxwcCohfrLpNn7FV5b3m.a',
		fav_category: [],
		profile_image_uri: 'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=',
		verified: true,
		_id: ("61bf323b56830c87b5db75f5"),
	  },
	  {
		username: 'Linda',
		fullname: 'Linda farza',
		connected: false,
		email: 'linda@gmail.com',
		phone_number: '25663314',
		password: '$2b$10$GJFxTZ.y1eauPP3TI1PYmOSALFvhbjkyYEVQ/QZ4KHsAjUz1do.Em',
		fav_category: [],
		profile_image_uri: 'https://media.istockphoto.com/photos/headshot-studio-portrait-of-a-woman-in-profile-looking-at-the-camera-picture-id1305462732?b=1&k=20&m=1305462732&s=170667a&w=0&h=PrX1YvXLF8QwgvTmcqG6BFqe9ugwNb_rtsLi38R9pFs=',
		verified: true,
		_id: ("61bf323b56830c87b5db75f7"),
	  },
	  {
		username: 'Fadhila',
		fullname: 'Fadhila meziti',
		connected: false,
		email: 'fadhika@gmail.com',
		phone_number: '99665544',
		password: '$2b$10$uC4XMzTYJ021fozkf9DZou0tg7kKZcR89sAoT71qStRQZeddR2ZYi',
		fav_category: [],
		profile_image_uri: 'https://media.istockphoto.com/photos/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter-picture-id1311084168?b=1&k=20&m=1311084168&s=170667a&w=0&h=mE8BgXPgcHO1UjSmdWYa21NIKDzJvMrjOffy39Ritpo=',
		verified: true,
		_id: ("61bf323b56830c87b5db75f9"),
	  },
	  {
		username: 'Zaineb',
		fullname: 'Zaineb saidii',
		connected: false,
		email: 'zaynab@hotmail.com',
		phone_number: '21338899',
		password: '$2b$10$02Ptu3TCKF1rWPgbWvbriO6dqNfZamRh9AQa5KeJkZXhIt2X./EWy',
		fav_category: [],
		profile_image_uri: 'https://media.istockphoto.com/photos/positive-mindset-positive-life-picture-id1272765753?b=1&k=20&m=1272765753&s=170667a&w=0&h=8Twyimx9TOKgr67OrabNA5sUeEgYT7ckM5HU6fnL5Ik=',
		verified: true,
		_id: ("61bf323b56830c87b5db75fc"),
	  },
	  {
		username: '!Badis',
		fullname: 'Badis karma',
		connected: false,
		email: 'badis@gmail.com',
		phone_number: '96312543',
		password: '$2b$10$WGEgHFm4To.9cLaVjmxzFOKGJgNNJzNptg5D6M6ROoZizTeTfPu/i',
		fav_category: [],
		profile_image_uri: 'https://media.istockphoto.com/photos/young-man-with-backpack-taking-selfie-portrait-on-a-mountain-smiling-picture-id1329031407?b=1&k=20&m=1329031407&s=170667a&w=0&h=J6qRqj9hbKtSVwIfMJhcRXf3AEyAOshph2IAbPHwNUo=',
		verified: true,
		_id: ("61bf323c56830c87b5db75fe"),
	  },
	  {
		username: 'Nadine',
		fullname: 'nadine warka',
		connected: false,
		email: 'nadine@gmail.com',
		phone_number: '22336655',
		password: '$2b$10$4nGdn28sYoLJbxfe5yBGuOLXc5e0R1vSSwmHD.8sB/t297OrbvitW',
		fav_category: [],
		profile_image_uri: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
		verified: true,
		_id: ("61bf323c56830c87b5db7602"),
	  },
	  {
		username: 'Jamila',
		fullname: 'jamila madyouni',
		connected: false,
		email: 'jamila@yahoo.com',
		phone_number: '21457896',
		password: '$2b$10$fT059eo.qVJUt61YtZJLhuug/akSAyzOD53tT10z4EHVyhzEpRZL6',
		fav_category: [],
		profile_image_uri: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
		verified: true,
		_id: ("61bf323c56830c87b5db7604"),
	  },
	  {
		username: '@Mohamed_ali',
		fullname: 'mohamed ali nour',
		connected: false,
		email: 'ali_nour@gmail.com',
		phone_number: '25663384',
		password: '$2b$10$Z1a/Nmrqai7.tZKopOQj5.KERaaGoFOknSQWmDyZ6rgrtsajyzVgK',
		fav_category: [],
		profile_image_uri: 'https://media.istockphoto.com/photos/young-man-is-playing-with-a-dog-and-do-selfie-picture-id1300658241?b=1&k=20&m=1300658241&s=170667a&w=0&h=0lrTViinfnDjbWDgxV0TDDSAXvzSgmrN-pKq0q60hqA=',
		verified: true,
		_id: ("61bf323c56830c87b5db7606"),
	  },
	  {
		username: 'Mahmoud',
		fullname: 'mahmoud bouAli',
		connected: false,
		email: 'mahmoud_1235@gmail.com',
		phone_number: '55996332',
		password: '$2b$10$yoRD9uQjXYWk85CSOvZRyOGOoiEnmpxh7FaDnLuqpI8TfUiAISHlm',
		fav_category: [],
		profile_image_uri: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
		verified: true,
		_id: ("61bf323c56830c87b5db7608"),
	  }
];

let categories = [
	"Power Tools",
	"Hand Tools",
	"Gardening Tools",
	"Plumbing tools",
	"Painting tools",
	"Wood cutting tools",
	"Finishing carpentry tools",
	"Car wash tools",
	"Window cleaning tools",
];

user: usersdata[0]._id;

let tools = [
	{
		title: "Drill",
		description:
			"Other than a hammer, most folks own a drill. Given the amount of junk we need to assemble, a power drill is a must-have item. In fact, I probably use our drill more often than the hammer.",
		price: "10 TND per day",
		categorie: "Power Tools",
		pictures: [
			"https://media.istockphoto.com/photos/male-hand-holding-a-powere-drill-picture-id185215644?k=20&m=185215644&s=612x612&w=0&h=byhSjs1tE12-k7VR6mK2jsGwJmGWxhXwJhfQQQ1KzSo=",
		],
		user: usersdata[1]._id,
	},
	{
		title: "Saw",
		description:
			"Saws are used to cut through things. The most common kind of saw is a hand saw, but there are also power saws that are powered by electricity, battery or gasoline. Saws can be used for many different things like cutting wood, tile, concrete and metal.  Most types of saws are different based on shape and movement of the blade which dictates what it’s designed to cut.",
		price: "20 TND per day",
		categorie: "Power Tools",
		pictures: ["https://m.media-amazon.com/images/I/51QKuv5rkmL.jpg"],
		user: usersdata[0]._id,
	},
	{
		title: "Power Sander",
		description:
			"A power sander will help you stay sane.  It efficiently sands wood, tile and metal and are powered by electricity or battery. If you think using a manual screwdriver instead of a drill is bad, think again. Sanding by hand versus using a power sander is nuts. I’ve hand-sanded my fair share of wood and there’s nothing like a simple power sander to save the day.",
		price: "5 TND per hour",
		categorie: "Power Tools",
		pictures: ["https://m.media-amazon.com/images/I/41IO341aCFL.jpg"],
		user: usersdata[2]._id,
	},
	{
		title: "Nail Gun",
		description:
			"A nail gun uses the power of a compressed air or gas to shoot a nail into something. A nail gun looks like a large pistol and is used for fastening wood or plastic materials. Not every household has a nail gun, but if you frame or construct regularly, it’s a worth investment.",
		price: "15 TND per day",
		categorie: "Power Tools",
		pictures: ["https://m.media-amazon.com/images/I/41+Oj3lMrfL.jpg"],
		user: usersdata[3]._id,
	},
	{
		title: "Power Ratchet Set",
		description:
			"A ratchet is a small hand or power tool with a gear on it that drives screws, nails, nuts and bolts into various hard materials.  They function similarly to screwdrivers but are easier to use.",
		price: "15 TND per day",
		categorie: "Power Tools",
		pictures: ["https://m.media-amazon.com/images/I/51xhszRjAlL.jpg"],
		user: usersdata[4]._id,
	},
	{
		title: "Ladder",
		description:
			"This range of aluminium platform steps provide great flexibility, light weight and a sturdy construction - ideal for light trade use or the home user",
		price: "10 TND per day",
		categorie: "Hand Tools",
		pictures: [
			"https://www.homestratosphere.com/wp-content/uploads/2019/01/types-of-ladders-jan222019-min-870x580.jpg",
		],
		user: usersdata[5]._id,
	},
	{
		title: "Wrenches",
		description:
			"A wrench is a handy tool used for loosening or tightening objects much like a set of pliers. You’ll come across different types of wrenches for a wide range of home improvement projects. There are all-purpose models and those that serve specific purposes.",
		price: "15 TND per day",
		categorie: "Hand Tools",
		pictures: [
			"https://www.homestratosphere.com/wp-content/uploads/2019/01/types-of-wrenches-jan222019-min-870x580.jpg",
		],
		user: usersdata[6]._id,
	},
	{
		title: "Axe",
		description:
			"An axe is a tool with a sharp blade on one end and a handle on the other end.  Some axes have a blunt end opposite the blade for functioning like a hammer.  Axes are used to chop, split and in some cases pound things.",
		price: "10 TND per day",
		categorie: "Hand Tools",
		pictures: [
			"https://www.homestratosphere.com/wp-content/uploads/2019/01/types-of-axes-jan222019-min-870x580.jpg",
		],
		user: usersdata[7]._id,
	},
	{
		title: "Shovel",
		description:
			"This lightweight beautifully designed shovel with its long shaft and strong, broad scoop is perfect for moving bulk material. Control and comfort is guaranteed by its ergonomic design and Push-Pull handle.",
		price: "5 TND per day",
		categorie: "Gardening Tools",
		pictures: [
			"https://www.homestratosphere.com/wp-content/uploads/2019/01/types-of-shovels-jan222019-min.jpg",
		],
		user: usersdata[8]._id,
	},
	{
		title: "Digging tools",
		description:
			"Digging is an unavoidable gardening chore which makes digging tools indispensable. Every gardener should also know that digging the right hole is crucial to a plant’s growth and survival so be sure to dig a test hole first and use only the right digging tools to operate with ease.",
		price: "15 TND per day",
		categorie: "Gardening Tools",
		pictures: [
			"https://www.homestratosphere.com/wp-content/uploads/2019/01/types-of-digging-tools-jan222019-min-870x580.jpg",
		],
		user: usersdata[9]._id,
	},
	{
		title: "Lawn edging",
		description:
			"Lawn edging is a meticulous, time-consuming, and an expensive task. To keep your lawn lush green, well-kept, and neatly trimmed, it requires regular watering, mowing, cultivation, and even repair.",
		price: "30 TND per day",
		categorie: "Gardening Tools",
		pictures: [
			"https://www.homestratosphere.com/wp-content/uploads/2019/01/types-of-lawn-edging-tools-jan222019-min-870x579.jpg",
		],
		user: usersdata[10]._id,
	},
	{
		title: "Pruning Tool",
		description:
			"Pruning is the practice of cutting and trimming some plant parts such as the roots, buds, and branches. This is an essential part of gardening that provides numerous benefits for the plants such as enhancing the plant’s health and appearance and as protection for young plants. Pruning is also necessary for landscaping and for preventing injuries and property damage.",
		price: "15 TND per day",
		categorie: "Gardening Tools",
		pictures: [
			"https://www.homestratosphere.com/wp-content/uploads/2019/01/types-of-pruning-tools-jan222019-min-870x580.jpg",
		],
		user: usersdata[11]._id,
	},
	{
		title: "Tree trimming tool",
		description:
			"Tree trimming is part of routine maintenance both for aesthetic and safety reasons. There are various tree trimming tools that make tending to trees a do-it-yourself project. These tools vary in length, usage, and features but are all about transforming your outdoor landscaping for a neat appearance.",
		price: "10 TND per day",
		categorie: "Gardening Tools",
		pictures: [
			"https://www.homestratosphere.com/wp-content/uploads/2019/01/types-of-tree-trimming-tools-jan222019-min-870x580.jpg",
		],
		user: usersdata[12]._id,
	},
	{
		title: "Paint removal tools",
		description:
			"You think painting wall’s a tough job? Try removing existing paint on walls. If you want to paint your room a different color, you can do so but what you can’t do is to jump right on it and apply the new coat of paint on top of the old one.",
		price: "20 TND per day",
		categorie: "Paint tools",
		pictures: [
			"https://www.homestratosphere.com/wp-content/uploads/2019/01/types-of-paint-removal-tools-jan222019-min-870x580.jpg",
		],
		user: usersdata[12]._id,
	},
	{
		title: "Wallpapering tools",
		description:
			"Dressing up your walls with wallpaper is an easier option to painting. The effect can be similar considering how there are plenty of options to choose from when it comes to colors, patterns, and textures. It’s also easier to get the job done since all that’s need are the right wallpapering tools and the know-how to using them properly.",
		price: "30 TND per day",
		categorie: "Paint tools",
		pictures: [
			"https://www.homestratosphere.com/wp-content/uploads/2019/01/types-of-wallpapering-tools-jan222019-min-870x580.jpg",
		],
		user: usersdata[0]._id,
	},
	{
		title: "Car wash tools",
		description:
			"Give your car some tender loving care with regular car washing using only the right car wash tools and the right washing technique. You’ll find the results can be much better when you do it yourself as compared to paying for it.",
		price: "15 TND per day",
		categorie: "Car tools",
		pictures: [
			"https://www.homestratosphere.com/wp-content/uploads/2019/01/types-of-car-wash-tools-jan222019-min-870x581.jpg",
		],
		user: usersdata[1]._id,
	},
	{
		title: "Window cleaning tools",
		description:
			"Cleaning windows can be a big job especially if you have a two-story home. It’s hard work and time-consuming, but if you’re willing to do it yourself instead of paying professionals to do it, you should invest in a set of window cleaning tools to get the job fast and achieve your desired result.",
		price: "50 TND per day",
		categorie: "Window cleaning tools",
		pictures: [
			"https://www.homestratosphere.com/wp-content/uploads/2019/01/types-of-window-cleaning-tools-jan222019-min-870x580.jpg",
		],
		user: usersdata[3]._id,
	},
	{
		title: "Gardena Push Leaf Collector",
		description:
			"The Push Leaf Collector is completely push powered - there is no engine or motor, so its low noise operation mean you won't disturb your neighbours if you want to get on with some garden work early in the morning. Additionally you don't have to worry about buying fuel, charging batteries or unwinding extension leads before starting it up.",
		price: "60 TND per day",
		categorie: "Gardening Tools",
		pictures: [
			"https://www.tooled-up.com/artwork/prodzoom/GDA-3565-20-Gardena-Push-Leaf-Collector.jpg?w=500&h=500&404=default",
		],
		user: usersdata[5]._id,
	},
	{
		title: "Bosch ROTAK 32",
		description:
			" lightweight, the Bosch Rotak 32 LI Ergoflex nevertheless features the full range of features associated with the larger models in the Bosch Rotak range. An aggressive hardened steel blade helps to cut grass cleanly & evenly, promoting healthy lawn growth, & grass combs draw in bordering grass for an extra precise cut, useful along lawn edges & borders.",
		price: "15 TND per day",
		categorie: "Gardening Tools",
		pictures: [
			"https://www.tooled-up.com/artwork/prodzoom/0600885D71.jpg?w=500&h=500&404=default",
		],
		user: usersdata[4]._id,
	},
	{
		title: "Karcher XPERT ONE",
		description:
			"Professionals need a pressure washer that will deliver consistently high intensity cleaning, even with repeated daily use. Built from professional-grade components, The Karcher XPERT ONE HD will do exactly that.",
		price: "50 TND per day",
		categorie: "Cleaning tools",
		pictures: [
			"https://www.tooled-up.com/artwork/prodzoom/KAR15141450.jpg?w=500&h=500&404=default",
		],
		user: usersdata[6]._id,
	},
	{
		title: "Socket Cable Extension",
		description:
			"Faithfull Open Drum Cable Reel with twin 240V sockets. The 1.25mm² cable is fitted with a standard 240V plug. For added safety, the reel is fitted with a thermal overload protection system to prevent overheating damaging the cable when in use.",
		price: "15 TND per day",
		categorie: "Electrival tools",
		pictures: [
			"https://www.tooled-up.com/artwork/prodzoom/FPPCR15.jpg?w=500&h=500&404=default",
		],
		user: usersdata[7]._id,
	},
	{
		title: "Work Tripod Light",
		description:
			"Ultra thin flood light with twin lights on an adjustable tripod. Incorporating COB LED technology, which provides the unit with a highly efficient super bright lumen output.",
		price: "20 TND per day",
		categorie: "Electrical",
		pictures: [
			"https://www.tooled-up.com/artwork/prodzoom/66058_CL2X20T-110-B.jpg?w=500&h=500&404=default",
		],
		user: usersdata[8]._id,
	},
];

const addTools = (list) => Tool.insertMany(list);

addTools(tools);
