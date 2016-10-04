var myzodiac = [
	{
		name: "aquarius",
		fortune: "Knowledge, Humanitarian, Serious, Insightful, Duplicitous",
		image: "img/aquarious.jpg"
	},
	{
		name: "aries",
		fortune: "Active, Demanding, Determined, Effective, Ambitious",
		image: "img/aries.jpg"
	},
	{
		name: "cancer",
		fortune: "Emotion, Diplomatic, Intensity, Impulsive, Selective",
		image: "img/cancer.jpg"
	},
	{
		name: "capricorn",
		fortune: "Determination, Dominance, Perservering, Practical, Willful",
		image: "img/capricorn.gif"
	},
	{
		name: "gemini",
		fortune: "Communication, Indecision, Inquisitive, Intelligent, Changeable",
		image: "img/gemini.jpg"
	},
	{
		name: "leo",
		fortune: "Ruling, Warmth, Generosity, Faithful, Initiative",
		image: "img/leo.jpg"
	},
	{
		name: "libra",
		fortune: "Balance, Justice, Truth, Beauty, Perfection",
		image: "img/libra.png"
	},
	{
		name: "pisces",
		fortune: "Fluctuation, Depth, Imagination, Reactive, Indecisive",
		image: "img/pisces.jpg"
	},
	{
		name: "sagittarius",
		fortune: "Philosophical, Motion, Experimentation, Optimism",
		image: "img/sag.jpg"
	},
	{
		name: "scorpio",
		fortune: "Transient, Self-Willed, Purposeful, Unyielding",
		image: "img/scorpio.jpg"
	},
	{
		name: "taurus",
		fortune: "	Security, Subtle strength, Appreciation, Instruction, Patience",
		image: "img/taurus.jpg"
	},
	{
		name: "virgo",
		fortune: "Analyzing, Practical, Reflective, Observation, Thoughtful",
		image: "img/virgo.jpg"
	}
]

function myfunction() {
	var name = document.getElementById("name").value.toLowerCase()

	for(i = 0; i < myzodiac.length; i++) {
		if(name === myzodiac[i].name) {
			document.getElementById("chock").innerHTML = myzodiac[i].name
			document.getElementById("chisapani").src = myzodiac[i].image
			document.getElementById("myname").innerHTML = "You're best attributes are: " + myzodiac[i].fortune
			return
		} else {
			document.getElementById("chock").innerHTML = "Type correctly please!"
			document.getElementById("myname").innerHTML = "Try again!"
			document.getElementById("chisapani").src = "img/bro.png"
		}
	}
}