export default function HomeView() {
  const styles = {
    form: {
      width: 320,
    },
    label: {
      display: "flex",
      flexDirection: "column",
      marginBottom: 15,
    },
  };

  return (
    <div>
      <h1>Сторінка реєстрації</h1>

      <form style={styles.form}>
        <label style={styles.label}>
          Ім'я
          <input type="name" name="name" />
        </label>

        <label style={styles.label}>
          Пошта
          <input type="email" name="email" />
        </label>

        <label style={styles.label}>
          Пароль
          <input type="password" name="password" />
        </label>

        <button type="submit">Зареєструватися</button>
      </form>
    </div>
  );
}
