const recipesData = [
    {
        "Name" :"Egg-Rolls",
        "steps":["prepare ingredients",
        " Roll ingredients in rice paper",
        " Deep fried for 5 minutes"
            ],
        "photo": "images/egg-rolls.jpg",
    },
    {
        "Name" :"Spring-Rolls",
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
//Javascript for test, comparing user input to correct values and return the result//
function check(){
    const question1 = document.test.question1.value;
    const question2 = document.test.question2.value;
    const question3 = document.test.question3.value;
    let right = 0;
    if(question1 === "Rome"){right++;}
    if(question2 === "Vietnam"){right++;}
    if(question3 === "US"){right++;}
    let messages =[ "Try again","You did good! Fill out the form for a prize package","You are awesome! Fill out the form for a prize package"];
    let pictures =["https://media.giphy.com/media/26ybwvTX4DTkwst6U/giphy.gif","https://media.giphy.com/media/69u87N8y7MgEnOZXZV/giphy.gif", "https://media.giphy.com/media/11J8lEFfvHLipi/giphy.gif"];
    let msg_element;
    if(right<2){msg_element = 0;}
    if (right===2){msg_element=1}
    if (right>2){msg_element =2;}
    document.getElementById("messages").innerHTML=messages[msg_element];
    document.getElementById("pictures").src=pictures[msg_element];
    document.getElementById("Correct").innerHTML = "You score " + right + " out of 3!";
}


