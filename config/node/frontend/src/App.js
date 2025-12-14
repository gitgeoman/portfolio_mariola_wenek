import * as React from "react";
import {
    AppBar,
    Toolbar,
    Container,
    Box,
    Typography,
    Button,
    CssBaseline,
    ThemeProvider,
    createTheme,
    Grid,
    Stack,
    Chip,
    Card,
    CardContent,
    Divider,
    TextField,
    Link,
} from "@mui/material";


const IMG = {
    hero: "https://source.unsplash.com/qvjUeBjPuX0/1920x1200", // jasne wnętrze biurowe
    heroAlt: "https://source.unsplash.com/3Nqm1QfYD-4/1920x1200", // magazyn/logistyka
    portrait: "https://source.unsplash.com/zDOs-EK50uk/900x900", // portret (placeholder)
    details1: "https://source.unsplash.com/R_qmjlyOceg/1400x900", // office
    details2: "https://source.unsplash.com/7734yG4wH00/1400x900", // office
};

const theme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#fbfbfc",
            paper: "#ffffff",
        },
        text: {
            primary: "#0e1320",
            secondary: "rgba(14,19,32,0.72)",
        },
        primary: {
            main: "#0e1320", // premium charcoal/navy
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#9A7B2F", // ciepły „gold” (akcent premium)
        },
        divider: "rgba(14,19,32,0.10)",
    },
    shape: {borderRadius: 18},
    typography: {
        fontFamily: [
            "Inter",
            "system-ui",
            "-apple-system",
            "Segoe UI",
            "Roboto",
            "Arial",
            "sans-serif",
        ].join(","),
        h1: {fontWeight: 750, letterSpacing: "-0.03em"},
        h2: {fontWeight: 750, letterSpacing: "-0.03em"},
        h3: {fontWeight: 740, letterSpacing: "-0.02em"},
        h4: {fontWeight: 720, letterSpacing: "-0.02em"},
        button: {textTransform: "none", fontWeight: 650},
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 999,
                    paddingLeft: 18,
                    paddingRight: 18,
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    border: "1px solid rgba(14,19,32,0.10)",
                    boxShadow: "0 8px 30px rgba(14,19,32,0.06)",
                },
            },
        },
    },
});

function scrollToId(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({behavior: "smooth", block: "start"});
}

function Pill({children}) {
    return (
        <Chip
            label={children}
            variant="outlined"
            sx={{
                borderColor: "rgba(14,19,32,0.16)",
                bgcolor: "rgba(255,255,255,0.55)",
                backdropFilter: "blur(8px)",
                fontWeight: 600,
            }}
        />
    );
}

function SectionTitle({eyebrow, title, subtitle}) {
    return (
        <Stack spacing={1} sx={{mb: {xs: 3, md: 4}}}>
            {eyebrow && (
                <Typography
                    variant="overline"
                    sx={{color: "secondary.main", fontWeight: 750, letterSpacing: "0.16em"}}
                >
                    {eyebrow}
                </Typography>
            )}
            <Typography variant="h3" sx={{fontSize: {xs: 28, md: 40}}}>
                {title}
            </Typography>
            {subtitle && (
                <Typography color="text.secondary" sx={{fontSize: {xs: 16, md: 18}, maxWidth: 820}}>
                    {subtitle}
                </Typography>
            )}
        </Stack>
    );
}

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>

            {/* NAV */}
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    bgcolor: "rgba(251,251,252,0.85)",
                    backdropFilter: "blur(10px)",
                    borderBottom: "1px solid rgba(14,19,32,0.08)",
                }}
            >
                <Toolbar sx={{minHeight: 72}}>
                    <Container sx={{maxWidth: "1100px !important"}}>
                        <Box display="flex" alignItems="center" justifyContent="space-between">
                            <Box>
                                <Typography sx={{fontWeight: 800, letterSpacing: "-0.02em"}}>
                                    Mariola Węnek
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Rzeczoznawca ds. zabezpieczeń przeciwpożarowych
                                </Typography>
                            </Box>

                            <Stack direction="row" spacing={1} sx={{display: {xs: "none", md: "flex"}}}>
                                <Button color="primary" variant="text" onClick={() => scrollToId("oferta")}>
                                    Zakres wsparcia
                                </Button>
                                <Button color="primary" variant="text" onClick={() => scrollToId("jak-pracuje")}>
                                    Jak pracuję
                                </Button>
                                <Button color="primary" variant="text" onClick={() => scrollToId("o-mnie")}>
                                    O mnie
                                </Button>
                                <Button variant="contained" onClick={() => scrollToId("kontakt")}>
                                    Kontakt
                                </Button>
                            </Stack>

                            <Button
                                variant="contained"
                                sx={{display: {xs: "inline-flex", md: "none"}}}
                                onClick={() => scrollToId("kontakt")}
                            >
                                Kontakt
                            </Button>
                        </Box>
                    </Container>
                </Toolbar>
            </AppBar>

            {/* HERO */}
            <Box
                sx={{
                    position: "relative",
                    overflow: "hidden",
                    bgcolor: "background.default",
                    borderBottom: "1px solid rgba(14,19,32,0.08)",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `linear-gradient(120deg, rgba(14,19,32,0.70), rgba(14,19,32,0.35)), url(${IMG.hero})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transform: "scale(1.02)",
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "radial-gradient(900px 500px at 20% 10%, rgba(154,123,47,0.22), transparent 60%)",
                    }}
                />

                <Container sx={{maxWidth: "1100px !important", position: "relative", py: {xs: 7, md: 11}}}>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={7}>
                            <Stack spacing={2.5}>
                                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                    <Pill>Audyty ppoż. • ekspertyzy • IBP</Pill>
                                    <Pill>Wsparcie odbiorów i kontroli</Pill>
                                </Stack>

                                <Typography
                                    variant="h1"
                                    sx={{
                                        color: "white",
                                        fontSize: {xs: 36, sm: 44, md: 56},
                                        lineHeight: 1.05,
                                    }}
                                >
                                    Bezpieczeństwo pożarowe,
                                    <br/>
                                    które da się wdrożyć
                                </Typography>

                                <Typography
                                    sx={{color: "rgba(255,255,255,0.80)", fontSize: {xs: 16, md: 18}, maxWidth: 620}}>
                                    Pomagam właścicielom obiektów, zarządcom i inwestorom uporządkować wymagania ppoż.
                                    — tak, żeby obiekt był bezpieczny, a dokumentacja spójna i „trzymała się” w
                                    praktyce.
                                </Typography>

                                <Stack direction={{xs: "column", sm: "row"}} spacing={1.5} sx={{pt: 1}}>
                                    <Button variant="contained" size="large" onClick={() => scrollToId("kontakt")}>
                                        Umów konsultację
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        size="large"
                                        onClick={() => scrollToId("oferta")}
                                        sx={{
                                            color: "white",
                                            borderColor: "rgba(255,255,255,0.35)",
                                            "&:hover": {borderColor: "rgba(255,255,255,0.55)"},
                                        }}
                                    >
                                        Zobacz zakres wsparcia
                                    </Button>
                                </Stack>

                                <Stack direction={{xs: "column", sm: "row"}} spacing={2} sx={{pt: 2}}>
                                    <Typography sx={{color: "rgba(255,255,255,0.75)"}}>
                                        <b>Tel:</b> +48 664 663 257
                                    </Typography>
                                    <Typography sx={{color: "rgba(255,255,255,0.75)"}}>
                                        <b>E-mail:</b> mariola.wenek@gmail.com
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <Card
                                sx={{
                                    bgcolor: "rgba(255,255,255,0.92)",
                                    backdropFilter: "blur(10px)",
                                    borderColor: "rgba(255,255,255,0.40)",
                                }}
                            >
                                <CardContent>
                                    <Typography sx={{fontWeight: 800, mb: 1.5}}>
                                        Szybka diagnoza — czy to brzmi znajomo?
                                    </Typography>

                                    <Stack spacing={1.2} sx={{color: "text.secondary", mb: 2}}>
                                        {[
                                            "Potrzebujesz audytu i listy wymaganych działań;",
                                            "Masz kontrolę/odbiór i chcesz uporządkować dokumenty;",
                                            "W obiekcie „coś było robione”, ale nikt nie wie co i dlaczego;",
                                            "Chcesz IBP/procedury, które nie kończą w segregatorze;",
                                        ].map((t) => (
                                            <Box key={t} display="flex" gap={1.2}>
                                                <Box
                                                    sx={{
                                                        mt: "7px",
                                                        width: 8,
                                                        height: 8,
                                                        borderRadius: 999,
                                                        bgcolor: "secondary.main",
                                                        flexShrink: 0,
                                                    }}
                                                />
                                                <Typography variant="body2">{t}</Typography>
                                            </Box>
                                        ))}
                                    </Stack>

                                    <Divider sx={{my: 2}}/>

                                    <Stack direction={{xs: "column", sm: "row"}} spacing={1.2}>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            onClick={() => (window.location.href = "tel:+48664663257")}
                                        >
                                            Zadzwoń
                                        </Button>
                                        <Button
                                            fullWidth
                                            variant="outlined"
                                            onClick={() => scrollToId("kontakt")}
                                        >
                                            Napisz
                                        </Button>
                                    </Stack>

                                    <Typography variant="caption" color="text.secondary" display="block" sx={{mt: 1.5}}>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* OFERTA */}
            <Container id="oferta" sx={{maxWidth: "1100px !important", py: {xs: 7, md: 10}}}>
                <SectionTitle
                    eyebrow="ZAKRES WSPARCIA"
                    title="Usługa jak w kancelarii: jasno, odpowiedzialnie, bez chaosu."
                    subtitle="Zamiast listy „przepisów prawnych” dostajesz rekomendacje, które da się wdrożyć i obronić logicznie — pod obiekt, etap i ryzyko."
                />

                <Grid container spacing={3}>
                    {[
                        {
                            title: "Audyty i przeglądy ppoż.",
                            points: [
                                "wizja lokalna + dokumentacja",
                                "priorytety: co jest pilne, co warto planować",
                                "raport w języku zarządcy/inwestora",
                            ],
                        },
                        {
                            title: "Ekspertyzy i opinie techniczne",
                            points: [
                                "ocena rozwiązań i zgodności",
                                "warianty działań (plusy/minusy, ryzyko)",
                                "wsparcie decyzyjne dla inwestora",
                            ],
                        },
                        {
                            title: "Instrukcja bezpieczeństwa pożarowego (IBP)",
                            points: [
                                "opracowanie lub aktualizacja",
                                "procedury „na ludzi”, nie pod segregator",
                                "materiały gotowe do wdrożenia i druku",
                            ],
                        },
                        {
                            title: "Odbiory i przygotowanie do kontroli",
                            points: [
                                "przegląd kompletności dokumentów",
                                "lista braków + plan domknięcia",
                                "obecność doradcza na miejscu (opcjonalnie)",
                            ],
                        },
                    ].map((s) => (
                        <Grid item xs={12} md={6} key={s.title}>
                            <Card sx={{height: "100%"}}>
                                <CardContent>
                                    <Typography sx={{fontWeight: 850, mb: 1}}>{s.title}</Typography>
                                    <Stack spacing={1}>
                                        {s.points.map((p) => (
                                            <Box key={p} display="flex" gap={1.2}>
                                                <Box
                                                    sx={{
                                                        mt: "8px",
                                                        width: 7,
                                                        height: 7,
                                                        borderRadius: 999,
                                                        bgcolor: "primary.main",
                                                        opacity: 0.75,
                                                        flexShrink: 0,
                                                    }}
                                                />
                                                <Typography variant="body2" color="text.secondary">
                                                    {p}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{mt: 4}}>
                    <Grid container spacing={2}>
                        {[IMG.details1, IMG.details2, IMG.heroAlt].map((src, idx) => (
                            <Grid item xs={12} md={4} key={idx}>
                                <Box
                                    component="img"
                                    src={src}
                                    alt="Zdjęcie obiektu (placeholder)"
                                    sx={{
                                        width: "100%",
                                        height: {xs: 220, md: 220},
                                        objectFit: "cover",
                                        borderRadius: 3,
                                        border: "1px solid rgba(14,19,32,0.08)",
                                    }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <Typography variant="caption" color="text.secondary" display="block" sx={{mt: 1}}>
                    </Typography>
                </Box>
            </Container>

            {/* JAK PRACUJĘ */}
            <Box sx={{
                bgcolor: "white",
                borderTop: "1px solid rgba(14,19,32,0.06)",
                borderBottom: "1px solid rgba(14,19,32,0.06)"
            }}>
                <Container id="jak-pracuje" sx={{maxWidth: "1100px !important", py: {xs: 7, md: 10}}}>
                    <SectionTitle
                        eyebrow="PROCES"
                        title="Trzy kroki - Zero zgadywania"
                    />

                    <Grid container spacing={3}>
                        {[
                            {
                                n: "01",
                                t: "Rozpoznanie",
                                d: "Krótka rozmowa + dokumenty, które masz. Ustalamy cel (audyt / IBP / odbiór / kontrola) i zakres.",
                            },
                            {
                                n: "02",
                                t: "Wizja lokalna",
                                d: "Oględziny obiektu i weryfikacja kluczowych elementów (drogi ewakuacyjne, oznakowanie, organizacja, zabezpieczenia).",
                            },
                            {
                                n: "03",
                                t: "Raport i wdrożenie",
                                d: "Czytelny raport, priorytety, rekomendacje. Jeśli trzeba — wsparcie we wdrożeniu i domknięciu tematów.",
                            },
                        ].map((x) => (
                            <Grid item xs={12} md={4} key={x.n}>
                                <Card sx={{height: "100%"}}>
                                    <CardContent>
                                        <Typography
                                            sx={{color: "secondary.main", fontWeight: 900, letterSpacing: "0.08em"}}>
                                            {x.n}
                                        </Typography>
                                        <Typography sx={{fontWeight: 850, mt: 0.5, mb: 1}}>
                                            {x.t}
                                        </Typography>
                                        <Typography color="text.secondary">{x.d}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    <Typography variant="caption" color="text.secondary" sx={{mt: 2, display: "block"}}>
                    </Typography>
                </Container>
            </Box>

            {/* O MNIE */}
            <Container id="o-mnie" sx={{maxWidth: "1100px !important", py: {xs: 7, md: 10}}}>
                <SectionTitle
                    eyebrow="O MNIE"
                    title="Rzeczoznawca, który mówi normalnie."
                    subtitle="Klienci zwykle nie potrzebują kolejnej „listy przepisów prawnych”. Potrzebują fachowego doradztwa w celu podjęcia decyzji: co zrobić, w jakiej kolejności i dlaczego."
                />

                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={5}>
                        <Box
                            component="img"
                            src={IMG.portrait}
                            alt="Portret rzeczoznawcy (placeholder)"
                            sx={{
                                width: "100%",
                                maxWidth: 420,
                                aspectRatio: "1 / 1",
                                objectFit: "cover",
                                borderRadius: 4,
                                border: "1px solid rgba(14,19,32,0.08)",
                            }}
                        />
                        <Typography variant="caption" color="text.secondary" display="block" sx={{mt: 1}}>
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <Stack spacing={2}>
                            <Typography sx={{fontWeight: 850, fontSize: 20}}>
                                Mariola Wenek — rzeczoznawca ds. zabezpieczeń przeciwpożarowych
                            </Typography>

                            <Typography color="text.secondary">
                                Wspieram inwestorów, zarządców i firmy w praktycznym podejściu do bezpieczeństwa
                                pożarowego:
                                tak, żeby wymagania były spełnione, a działania realne do wykonania na obiekcie.
                            </Typography>

                            <Typography color="text.secondary">
                                Najczęściej pracuję z obiektami: biurowymi, magazynowymi, produkcyjnymi i usługowymi.
                                Zakres dopasowuję do etapu: inwestycja / modernizacja / eksploatacja / przygotowanie do
                                kontroli.
                            </Typography>

                            <Divider/>

                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                {["Zarządcy i wspólnoty", "Inwestorzy", "Facility Management", "Magazyny i logistyka", "Produkcja", "Usługi i retail"].map(
                                    (x) => (
                                        <Chip key={x} label={x} sx={{bgcolor: "rgba(14,19,32,0.04)"}}/>
                                    )
                                )}
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>

            {/* KONTAKT */}
            <Container id="kontakt" sx={{maxWidth: "1100px !important", pb: 10}}>
                <Card sx={{overflow: "hidden"}}>
                    <Grid container>
                        <Grid item xs={12} md={5}>
                            <Box
                                sx={{
                                    height: "100%",
                                    minHeight: 260,
                                    p: 4,
                                    color: "white",
                                    backgroundImage: `linear-gradient(140deg, rgba(14,19,32,0.92), rgba(14,19,32,0.70)), url(${IMG.heroAlt})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <Typography sx={{fontWeight: 900, fontSize: 22, mb: 1}}>
                                    Porozmawiajmy o Twoim obiekcie
                                </Typography>
                                <Typography sx={{color: "rgba(255,255,255,0.80)", mb: 3}}>
                                    Opisz krótko: typ obiektu, lokalizację, cel (audyt/IBP/odbiór/kontrola) i termin.
                                </Typography>

                                <Stack spacing={1} sx={{color: "rgba(255,255,255,0.85)"}}>
                                    <Typography><b>Tel:</b> +48 664 663 257</Typography>
                                    <Typography><b>E-mail:</b> kontakt@twojadomena.pl</Typography>
                                    <Typography><b>Obszar:</b> Warszawa + dojazd</Typography>
                                </Stack>

                                <Box sx={{mt: 3}}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => (window.location.href = "tel:+48664663257")}
                                        sx={{color: "#0e1320"}}
                                    >
                                        Zadzwoń teraz
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={7}>
                            <Box
                                component="form"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    alert("Formularz demo — podepnij wysyłkę (EmailJS / backend).");
                                }}
                                sx={{p: 4}}
                            >
                                <Typography sx={{fontWeight: 900, fontSize: 22, mb: 2}}>
                                    Formularz kontaktowy
                                </Typography>

                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField label="Imię i nazwisko" fullWidth required/>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField label="Telefon (opcjonalnie)" fullWidth/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField label="E-mail" type="email" fullWidth required/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Wiadomość"
                                            fullWidth
                                            required
                                            multiline
                                            minRows={4}
                                            placeholder="Np. magazyn 3 000 m², miasto…, audyt + przygotowanie do kontroli, termin…"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Stack direction={{xs: "column", sm: "row"}} spacing={1.5}
                                               alignItems={{sm: "center"}}>
                                            <Button type="submit" variant="contained" size="large">
                                                Wyślij zapytanie
                                            </Button>
                                            <Typography variant="caption" color="text.secondary">
                                                Odpowiedź zwykle w 24–48h (dni robocze).
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                </Grid>

                                <Divider sx={{my: 3}}/>
                                <Typography variant="caption" color="text.secondary">
                                    NIP
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Card>

                <Box sx={{mt: 3, textAlign: "center"}}>
                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} Mariola Wenek.{" "}
                        <Link href="#" underline="hover" color="inherit">
                            Polityka prywatności
                        </Link>
                    </Typography>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
