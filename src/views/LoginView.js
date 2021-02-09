export default function LoginViews() {
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
      <h1>Сторінка логіна</h1>

      <form style={styles.form}>
        <label style={styles.label}>
          Пошта
          <input type="email" name="email" />
        </label>

        <label style={styles.label}>
          Пароль
          <input type="email" name="email" />
        </label>

        <button type="submit">Увійти</button>
      </form>
    </div>
  );
}
