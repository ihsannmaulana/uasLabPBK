<template>
  <div class="game-container">
    <div class="background"></div>
    <div class="game">
      <h1 class="title">Rock Paper Scissors</h1>
      <div v-if="result" class="game-info">
        <p>You chose: {{ playerMove }}</p>
        <p>Computer chose: {{ computerMove }}</p>
        <p>{{ result }}</p>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
      <div class="buttons">
        <button @click="makeMove('rock')" class="btn-black">Rock</button>
        <button @click="makeMove('paper')" class="btn-black">Paper</button>
        <button @click="makeMove('scissors')" class="btn-black">Scissors</button>
      </div>
      <button @click="resetGame" class="btn-black">Reset Game</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerMove: '',
      computerMove: '',
      result: '',
    };
  },
  methods: {
    makeMove(move) {
      this.playerMove = move;
      this.computerMove = this.getRandomMove();

      if (this.playerMove === this.computerMove) {
        this.result = "It's a tie!";
      } else if (
        (this.playerMove === 'rock' && this.computerMove === 'scissors') ||
        (this.playerMove === 'paper' && this.computerMove === 'rock') ||
        (this.playerMove === 'scissors' && this.computerMove === 'paper')
      ) {
        this.result = 'You win!';
      } else {
        this.result = 'You lose!';
      }
    },
    getRandomMove() {
      const moves = ['rock', 'paper', 'scissors'];
      const randomIndex = Math.floor(Math.random() * moves.length);
      return moves[randomIndex];
    },
    resetGame() {
      this.playerMove = '';
      this.computerMove = '';
      this.result = '';
    },
  },
};
</script>

<style scoped>
.game-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  font-family: Arial, sans-serif;
  background-color: rgb(113, 170, 206);
  margin-top: 60px;
}

.game {
  border: 6px solid rgb(8, 26, 105);
  border-radius: 8px;
  padding: 24px;
  text-align: center;
  margin-top: 10px;
}

.title {
  color: black;
}

.buttons {
  margin: 20px;
}

.result {
  margin-top: 20px;
}

.btn-black {
  padding: 8px 16px;
  background-color: rgb(8, 26, 105);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 8px;
}
</style>
