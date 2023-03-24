//___________GAME FUNCTION(MAIN)________________
const game = () => {
    let p_score = 0;
    let c_score = 0;

    //________Start Game_________________________
    const start_game = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //______________Play Match_____________________
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const player_hand = document.querySelector(".player-hand");
        const computer_hand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function () {
                this.style.animation = "";
            });
        });
        //____________Computer Options______________
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function () {
                //_________Computer Choice_________________
                const computer_number = Math.floor(Math.random() * 3);
                const computer_choice = computerOptions[computer_number];

                setTimeout(() => {
                    //Here is where we call compare hands
                    compareHands(this.textContent, computer_choice);
                    //_________Update Images_________________
                    player_hand.src = `./assets/${this.textContent}.png`;
                    computer_hand.src = `./assets/${computer_choice}.png`;
                }, 2000);
                //____________Animation_____________________
                player_hand.style.animation = "shakePlayer 2s ease";
                computer_hand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    //_____________Update Score_____________________
    const update_score = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = p_score;
        computerScore.textContent = c_score;
    };

    //_____________Compare Hands Function___________
    const compareHands = (playerChoice, computer_choice) => {
        //Update Text
        const winner = document.querySelector(".winner");
        //Checking for a tie
        if (playerChoice === computer_choice) {
            winner.textContent = "It is a tie";
            return;
        }
        //Check for Rock
        if (playerChoice === "rock") {
            if (computer_choice === "scissors") {
                winner.textContent = "Player Wins";
                p_score++;
                update_score();
                return;
            } else {
                winner.textContent = "Computer Wins";
                c_score++;
                update_score();
                return;
            }
        }
        //Check for Paper
        if (playerChoice === "paper") {
            if (computer_choice === "scissors") {
                winner.textContent = "Computer Wins";
                c_score++;
                update_score();
                return;
            } else {
                winner.textContent = "Player Wins";
                p_score++;
                update_score();
                return;
            }
        }
        //Check for Scissors
        if (playerChoice === "scissors") {
            if (computer_choice === "rock") {
                winner.textContent = "Computer Wins";
                c_score++;
                update_score();
                return;
            } else {
                winner.textContent = "Player Wins";
                p_score++;
                update_score();
                return;
            }
        }
    };

    //__________CALLS FUNCTIONS________________
    start_game();
    playMatch();
};

//___________Game function__________________
game();
