const recipesData = [
    {
        "Name" :"Egg-Roll",
        "steps":["prepare ingredients",
        " Roll ingredients in rice paper",
        " Deep fried for 5 minutes"
            ],
        "photo": "images/egg-rolls.jpg",
    },
    {
        "Name" :"Spring-Roll",
        "steps":["prepare ingredients",
        " Roll ingredients in rice paper",
        " Serve with dipping sauce"
        ],
        "photo": "images/Spring-rolls.jpg",
    },
    {
        "Name": "Crab-rangoons",
        "steps": ["prepare ingredients",
        " Roll ingredients in wonton paper",
        " Deepfried for 5 minutes"
        ],
        "photo": "images/crab-rangoons.jpg",
    }
];
//https://css-tricks.com/template-literals/ for loading data to recipes//
document.getElementById("recipes").innerHTML = `
<h2 class = "recipes-title">Number of recipes(${recipesData.length})</h2>
${recipesData.map(function(food){
    return `
    <div >
    
    <h3 > ${food.Name} </h3>
    <p > ${food.steps}</p>
    <img src="${food.photo}">
    </div>
    `
}).join('')}
`
function check(){
    const question1 = document.test.question1.value;
    const question2 = document.test.question2.value;
    const question3 = document.test.question3.value;
    let right = 0;
    if(question1 === "Rome"){right++;}
    if(question2 === "Vietnam"){right++;}
    if(question3 === "US"){right++;}
    let messages =["You are awesome! Fill out the form for a prize package","You did good! Fill out the form for a prize package", "Try again"];
    let pictures =["https://media.giphy.com/media/11J8lEFfvHLipi/giphy.gif", "https://media.giphy.com/media/69u87N8y7MgEnOZXZV/giphy.gif","https://media.giphy.com/media/26ybwvTX4DTkwst6U/giphy.gif"];
    let answer;
    if(right<2){answer = 2;}
    if (right===2){answer=1}
    if (right>2){answer =0;}
    document.getElementById("messages").innerHTML=messages[answer];
    document.getElementById("pictures").src=pictures[answer];
    document.getElementById("Correct").innerHTML = "You score " + right + " out of 3!";
}


