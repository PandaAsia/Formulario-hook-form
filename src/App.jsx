function App() {
  return (
    <>
      <div>
        <form action="">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" />
          <label htmlFor="correo">correo</label>
          <input type="email" />
          <label htmlFor="password">password</label>
          <input type="password" />
          <label htmlFor="confirmarPassword">confirmar password</label>
          <input type="password" />
          <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
          <input type="date" />
          <label htmlFor="pais">Pais</label>
          <select>
            <option value="mx">México</option>
            <option value="ar">Argentina</option>
            <option value="pe">Perú</option>
          </select>
          <label htmlFor="file">foto</label>
          <input type="file" />
          <label htmlFor="terminos">Acepto terminos y condiciones</label>
          <input type="checkbox" />
          <button>Enviar</button>
        </form>
      </div>
    </>
  );
}

export default App;
