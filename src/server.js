import createApp from "./app";

const PORT = 3000;

(async () => {
  try {
    const app = await createApp();

    const server = app.listen(PORT, () => {
      console.log(`App rodando na porta ${PORT}`);
    });

    ["SIGINT", "SIGTERM", "SIGQUIT"].forEach((signal) => process.on(signal, () => {
      server.close((err) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }

        app.database.connection.close(() => {
          console.log("Conexão com o banco de dados fechada!");
          process.exit(0);
        });
      });
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
