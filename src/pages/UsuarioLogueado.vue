<template>
  <div class="user-profile">
    <div class="background-all"></div>
    <div class="profile-section">
      <div class="profile-header">
        <img :src="user.photo" height="50%" width="50%" alt="Profile Picture" />
        <h1>{{ user.name }}</h1>
      </div>

      <div class="user-details">
        <h2>Información personal</h2>
        <p><strong>Edad:</strong> {{ user.age }}</p>
        <p><strong>Ubicación:</strong> {{ user.location }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Género:</strong> {{ user.gender }}</p>
        <p><strong>Intereses:</strong></p>
        <ul>
          <li v-for="interest in user.interests" :key="interest">
            {{ interest }}
          </li>
        </ul>
      </div>

      <div class="additional-details">
        <h2>Detalles adicionales</h2>
        <p>{{ user.additionalDetails }}</p>
      </div>
    </div>

    <div class="extra-news">
      <h2>Noticias extras</h2>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium.
        </li>
        <li>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis.
        </li>
        <li>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userResult: null,
      user: {
        name: "John Doe",
        photo: "./src/assets/User.png",
        age: 25,
        location: "Ciudad Ejemplo",
        email: "john.doe@example.com",
        gender: "Masculino",
        interests: ["Deportes", "Música", "Viajes"],
        additionalDetails:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae lorem sed nisi blandit vehicula sed et quam.",
      },
    };
  },
};
</script>

<style>
.background-all {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-image: url("./src/assets/fondo3.jpeg"); */
  background-image: url("./src/assets/fondo1.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.9;
  z-index: -1;
}
/* Estilos anteriores */

/* Estilos adicionales */
.user-profile {
  display: flex;
  justify-content: center;
}

.profile-section {
  margin-right: 40px;
}

.extra-news {
  background-color: rgba(165, 229, 248, 0.87);
  padding: 20px;
  color: #484848;
  width: 300px;
}

.extra-news h2 {
  color: black;
  margin-bottom: 10px;
}

.extra-news ul {
  padding-left: 20px;
}

.extra-news li {
  margin-bottom: 5px;
}
</style>
