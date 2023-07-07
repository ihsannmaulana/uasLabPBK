//photo
<template>
  <div class="photo-widget">
    <div class="photo-container">
      <h2>{{ title }}</h2>
      <img :src="photoUrl" :alt="title" />
    </div>
    <button @click="getRandomPhoto">Load New Photo</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      photoUrl: '',
    };
  },
  mounted() {
    this.getRandomPhoto();
  },
  methods: {
    async getRandomPhoto() {
      try {
        const apiKey = '38037020-2c48722c03be8437a05b588e6';
        const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=nature&image_type=photo&orientation=horizontal`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.hits.length);
        const randomPhoto = data.hits[randomIndex];
        this.title = randomPhoto.tags;
        this.photoUrl = randomPhoto.webformatURL;
      } catch (error) {
        console.error('Error fetching random photo:', error);
      }
    },
  },
};
</script>

<style scoped>
.photo-widget {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  font-family: Arial, sans-serif;
  background-color: rgb(113, 170, 206);
  margin-top: 60px;
}

.photo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin-top: 10px;
  border: 1px solid rgb(8, 26, 105); /* Tambahkan garis tepi */
  padding: 10px; /* Tambahkan padding */
}
.photo-container img {
  max-width: 100%;
  max-height: 100%;
}
.photo-widget button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: rgb(8, 26, 105);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>