import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Stack,
  TextField,
  Link,
} from "@mui/material";

import { Shield } from "@mui/icons-material";

export default function App() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "white",
          borderBottom: "1px solid #eee",
        }}
      >
        <Toolbar sx={{ maxWidth: 900, mx: "auto", width: "100%" }}>
          <Shield sx={{ mr: 1, color: "#111" }} />
          <Typography fontWeight={600} sx={{ flexGrow: 1, color: "#111" }}>
            Mariola Wenek
          </Typography>
          <Button href="#kontakt" variant="text">
            Kontakt
          </Button>
        </Toolbar>
      </AppBar>

      {/* ===== CONTENT ===== */}
      <Container sx={{ maxWidth: 900, py: { xs: 6, md: 10 } }}>
        <Stack spacing={8}>
          {/* HERO */}
          <Stack spacing={3}>
            <Typography variant="h3" fontWeight={700}>
              Rzeczoznawca ds.
              <br />
              zabezpieczeń przeciwpożarowych
            </Typography>

            <Typography color="text.secondary" fontSize={18}>
              Pomagam właścicielom obiektów, zarządcom i inwestorom
              bezpiecznie spełnić wymagania przeciwpożarowe — jasno,
              rzeczowo i bez niepotrzebnego stresu.
            </Typography>

            <Typography fontSize={18}>
              <Link href="#kontakt" underline="always">
                Skontaktuj się
              </Link>
              , jeśli chcesz omówić swoją sytuację.
            </Typography>
          </Stack>

          {/* ABOUT */}
          <Stack spacing={2}>
            <Typography variant="h5" fontWeight={600}>
              Kim jestem
            </Typography>

            <Typography color="text.secondary">
              Jestem rzeczoznawcą do spraw zabezpieczeń przeciwpożarowych
              z doświadczeniem w pracy z obiektami biurowymi,
              magazynowymi, produkcyjnymi i usługowymi.
            </Typography>

            <Typography color="text.secondary">
              Wspieram klientów zarówno na etapie inwestycji,
              jak i w trakcie eksploatacji obiektów.
            </Typography>
          </Stack>

          {/* SERVICES */}
          <Stack spacing={2}>
            <Typography variant="h5" fontWeight={600}>
              W czym pomagam
            </Typography>

            <Typography color="text.secondary">
              • audyty i przeglądy przeciwpożarowe
              <br />
              • ekspertyzy i opinie techniczne
              <br />
              • instrukcje bezpieczeństwa pożarowego
              <br />
              • przygotowanie do odbiorów i kontroli PSP
            </Typography>
          </Stack>

          {/* PROCESS */}
          <Stack spacing={2}>
            <Typography variant="h5" fontWeight={600}>
              Jak pracuję
            </Typography>

            <Typography color="text.secondary">
              Zaczynam od rozmowy i analizy dokumentacji. Następnie
              wykonuję wizję lokalną obiektu i przygotowuję
              czytelne zalecenia, które można realnie wdrożyć.
            </Typography>
          </Stack>

          {/* CONTACT */}
          <Stack spacing={3} id="kontakt">
            <Typography variant="h5" fontWeight={600}>
              Kontakt
            </Typography>

            <Typography color="text.secondary">
              Napisz lub zadzwoń, jeśli chcesz omówić zakres współpracy.
            </Typography>

            <Typography>📞 +48 123 123 123</Typography>
            <Typography>✉️ kontakt@twojadomena.pl</Typography>

            <Box maxWidth={500}>
              <Stack spacing={2}>
                <TextField label="Imię i nazwisko" fullWidth />
                <TextField label="Email" fullWidth />
                <TextField
                  label="Wiadomość"
                  fullWidth
                  multiline
                  rows={4}
                />
                <Button variant="contained" size="large">
                  Wyślij wiadomość
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Container>

      {/* ===== FOOTER ===== */}
      <Box sx={{ py: 4, borderTop: "1px solid #eee" }}>
        <Container sx={{ maxWidth: 900 }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Mariola Wenek — Rzeczoznawca ppoż.
          </Typography>
        </Container>
      </Box>
    </>
  );
}
