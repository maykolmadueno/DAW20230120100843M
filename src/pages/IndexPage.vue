<template>
  <div class="homepage">
    <div class="background-all"></div>
    <header>
      <h1>Bienvenido a mi página de inicio</h1>
    </header>
    <section>
      <h2>Explora nuestras características</h2>
      <div class="features">
        <div class="feature">
          <img
            src="https://emprendepyme.net/wp-content/uploads/2023/03/caracteristicas-objetivos-1200x720.jpg"
            alt="Característica 1"
          />
          <h3>Característica 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="feature">
          <img
            src="https://www.marketingdirecto.com/wp-content/uploads/2021/06/caracteristicas-creatividad.jpg"
            alt="Característica 2"
          />
          <h3>Característica 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="feature">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX92bIVGQ42alI9JV-Vss_ezv0zR4ILnM7QQ&usqp=CAU"
            alt="Característica 3"
          />
          <h3>Característica 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </section>
    <footer>
      <p>&copy; 2023 Mi Página de Inicio. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
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
.homepage {
  text-align: center;
  padding: 20px;
}

header h1 {
  font-size: 36px;
  margin-bottom: 40px;
  color: #333;
}

section h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #555;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 40px;
}

.feature {
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.feature img {
  width: 200px;
  margin-bottom: 20px;
}

.feature h3 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
}

.feature p {
  font-size: 14px;
  color: #555;
}

footer {
  margin-top: 40px;
  font-size: 14px;
  color: #777;
}
</style>
