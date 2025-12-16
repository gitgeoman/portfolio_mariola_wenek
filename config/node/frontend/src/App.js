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
        mode: "light", background: {
            default: "#fbfbfc", paper: "#ffffff",
        }, text: {
            primary: "#0e1320", secondary: "rgba(14,19,32,0.72)",
        }, primary: {
            main: "#0e1320", // premium charcoal/navy
            contrastText: "#ffffff",
        }, secondary: {
            main: "#9A7B2F", // ciepły „gold” (akcent premium)
        }, divider: "rgba(14,19,32,0.10)",
    }, shape: {borderRadius: 18}, typography: {
        fontFamily: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif",].join(","),
        h1: {fontWeight: 750, letterSpacing: "-0.03em"},
        h2: {fontWeight: 750, letterSpacing: "-0.03em"},
        h3: {fontWeight: 740, letterSpacing: "-0.02em"},
        h4: {fontWeight: 720, letterSpacing: "-0.02em"},
        button: {textTransform: "none", fontWeight: 650},
    }, components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 999, paddingLeft: 18, paddingRight: 18,
                },
            },
        }, MuiCard: {
            styleOverrides: {
                root: {
                    border: "1px solid rgba(14,19,32,0.10)", boxShadow: "0 8px 30px rgba(14,19,32,0.06)",
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
    return (<Chip
        label={children}
        variant="outlined"
        sx={{
            borderColor: "rgba(14,19,32,0.16)",
            bgcolor: "rgba(255,255,255,0.55)",
            backdropFilter: "blur(8px)",
            fontWeight: 600,
        }}
    />);
}

function SectionTitle({eyebrow, title, subtitle}) {
    return (<Stack spacing={1} sx={{mb: {xs: 3, md: 4}}}>
        {eyebrow && (<Typography
            variant="overline"
            sx={{color: "secondary.main", fontWeight: 750, letterSpacing: "0.16em"}}
        >
            {eyebrow}
        </Typography>)}
        <Typography variant="h3" sx={{fontSize: {xs: 28, md: 40}}}>
            {title}
        </Typography>
        {subtitle && (<Typography color="text.secondary" sx={{fontSize: {xs: 16, md: 18}, maxWidth: 820}}>
            {subtitle}
        </Typography>)}
    </Stack>);
}

export default function App() {
    return (<ThemeProvider theme={theme}>
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
                            <Typography sx={{fontWeight: 800, letterSpacing: "-0.02em", color: 'black'}}>
                                Mariola WENEK
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
                    background: "radial-gradient(900px 500px at 20% 10%, rgba(154,123,47,0.22), transparent 60%)",
                }}
            />

            <Container sx={{maxWidth: "1100px !important", position: "relative", py: {xs: 7, md: 11}}}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={7}>
                        <Stack spacing={2.5}>
                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                <Pill>DZPW </Pill>
                                <Pill>ekspertyzy techniczne </Pill>
                                <Pill>IPB</Pill>
                                <Pill>operaty </Pill>
                                <Pill>opinie</Pill>
                                <Pill>ORW</Pill>
                                <Pill>OZW</Pill>
                                <Pill>uzgodnienia</Pill>
                            </Stack>

                            <Typography
                                variant="h1"
                                sx={{
                                    color: "white", fontSize: {xs: 36, sm: 44, md: 56}, lineHeight: 1.05,
                                }}
                            >
                                Ochrona przeciwpożarowa i przeciwwybuchowa,
                                <br/>
                                które da się wdrożyć
                            </Typography>

                            <Typography
                                sx={{color: "rgba(255,255,255,0.80)", fontSize: {xs: 16, md: 18}, maxWidth: 620}}>
                                Zapewniam wsparcie właścicielom obiektów, zarządców oraz inwestorów w skutecznym
                                wdrażaniu
                                wymagań przeciwpożarowych i przeciwwybuchowych. Dbałość o to, aby obiekty były
                                realnie bezpieczne, a dokumentacja kompletna, spójna i możliwa do zastosowania w
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
                                    <b>E-mail:</b> mariolawenek@gmail.com
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
                                    {["Chcesz sprawdzić stan bezpieczeństwa pożarowego budynku?", "Minął termin ważności Instrukcji Bezpieczeństwa Pożarowego i potrzebna jest pilna aktualizacja?", "Planujesz rozbudowę/nadbudowę/przebudowę lub zmianę sposobu użytkowania budynku i niezbędna jest ekspertyza techniczną?", "Przepisy przeciwpożarowe są niejednoznaczne i potrzebna jest konsultacja lub opinia?", "Starasz się o pozwolenie na wytwarzanie odpadów i potrzebujesz operatu przeciwpożarowego?", "Starasz się o nową polisę, a ubezpieczyciel wymaga Oceny Zagrożenia Wybuchem?", "Masz kontrolę z Państwowej Inspekcji Pracy i potrzebujesz Dokumentu Zabezpieczenia Przed Wybuchem?",].map((t) => (
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
                                        </Box>))}
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
        <Container
            id="oferta"
            sx={{
                maxWidth: 1100,
                mx: "auto",
                py: {xs: 7, md: 10},
            }}
        >
            <SectionTitle
                eyebrow="ZAKRES WSPARCIA"
                title="Usługa jak w kancelarii – jasno, odpowiedzialnie, bez chaosu."
                subtitle="Zamiast listy przepisów prawnych przedstawione są uzasadnione rekomendacje,
    które można realnie wdrożyć i logicznie obronić – dopasowane do konkretnego obiektu
    oraz etapu inwestycji."
            />

            <Box sx={{display: "flex", justifyContent: "center"}}>
                <Box
                    sx={{
                        width: {xs: "100%", md: "70%"},
                        display: "grid",
                        gridTemplateColumns: {xs: "1fr", md: "1fr 1fr"},
                        gap: 3,
                    }}
                >
                    {[{
                        title: "Audyt z zakresu ochrony przeciwpożarowej",
                    }, {
                        title: "Ekspertyza techniczna stanu ochrony przeciwpożarowej",
                    }, {
                        title: "Instrukcja bezpieczeństwa pożarowego (IBP)",
                    }, {
                        title: "Operaty przeciwpożarowe miejsc składowania i magazynowania odpadów",
                    }, {
                        title: "Opinie z zakresu ochrony przeciwpożarowej",
                    }, {
                        title: "Ocena Ryzyka Wybuchu (ORW)",
                    }, {
                        title: "Ocena Zagrożenia Wybuchem (OZW)",
                    }, {
                        title: `Uzgodnienia projektów budowlanych i urządzeń przeciwpożarowych`,
                    },
                    ].map((s) => (
                        <Card
                            key={s.title}
                            sx={{
                                width: "100%",
                                height: 100,               // ← TA SAMA WYSOKOŚĆ
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                borderLeft: "4px solid rgba(154,123,47,0.25)",
                                "&:hover": {
                                    transform: "translateY(-2px)",
                                    boxShadow: "0 14px 40px rgba(14,19,32,0.12)",
                                },
                                transition: "all .25s ease",
                            }}
                        >
                            <CardContent sx={{p: 3}}>
                                <Typography
                                    sx={{
                                        fontWeight: 850,
                                        lineHeight: 1.25,
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",

                                    }}
                                >
                                    {s.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>

        </Container>


        {/* JAK PRACUJĘ */}

        <Box
            sx={{
                bgcolor: "white",
                borderTop: "1px solid rgba(14,19,32,0.06)",
                borderBottom: "1px solid rgba(14,19,32,0.06)",
            }}
        >
            <Container
                id="jak-pracuje"
                sx={{
                    maxWidth: 1100,
                    mx: "auto",
                    py: {xs: 7, md: 10},
                }}
            >
                <SectionTitle
                    eyebrow="PROCES"
                    title="Trzy kroki – zero zgadywania"
                />

                <Stack spacing={3} alignItems="center">
                    {[{
                        n: "01",
                        t: "Rozpoznanie",
                        d: "Krótka rozmowa. Ustalamy cel (audyt / IBP / ekspertyza techniczna / opinia itp.) i zakres.",
                    }, {
                        n: "02",
                        t: "Wizja lokalna",
                        d: "Kontrola obiektu zgodnie z ustalonym zakresem.",
                    }, {
                        n: "03",
                        t: "Finalne opracowanie",
                        d: "Dokumentacja przejrzysta, zgodna z wymogami formalnymi i użytkowa w praktyce.",
                    }].map((x) => (
                        <Card
                            key={x.n}
                            sx={{
                                width: {xs: "100%", md: "70%"},
                                // minHeight: 130,
                                display: "flex",
                                alignItems: "center",
                                // borderLeft: "4px solid rgba(154,123,47,0.25)",
                                pl: 2,
                                "&:hover": {
                                    transform: "translateY(-2px)",
                                    boxShadow: "0 14px 40px rgba(14,19,32,0.12)",
                                },
                                transition: "all .25s ease",
                                minHeight: {xs: "auto", md: 130}
                            }}
                        >
                            <CardContent>
                                <Typography
                                    sx={{
                                        color: "secondary.main",
                                        fontWeight: 900,
                                        letterSpacing: "0.08em",
                                    }}
                                >
                                    {x.n}
                                </Typography>

                                <Typography sx={{fontWeight: 850, mt: 0.5, mb: 1}}>
                                    {x.t}
                                </Typography>

                                <Typography color="text.secondary">
                                    {x.d}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Stack>
            </Container>
        </Box>

        {/* O MNIE */}

        <Container
            id="o-mnie"
            sx={{
                maxWidth: "1100px !important", py: {xs: 7, md: 10},
            }}
        >
            <SectionTitle
                eyebrow="O MNIE"
                title="Rzeczoznawca, który mówi normalnie."

                subtitle="Posiadam doświadczenie oraz odpowiednie wykształcenie, które pozwala mi świadczyć usługi
    na najwyższym poziomie. Specjalizuję się w zagadnieniach ATEX, wspierając właścicieli obiektów,
    zarządców i inwestorów w praktycznym wdrażaniu wymogów bezpieczeństwa."
            />

            <Grid container spacing={4}>
                {/* LEWA KOLUMNA */}
                <Grid item xs={12} md={7}>
                    <Stack spacing={4}>
                        {/* WYKSZTAŁCENIE */}
                        <Box>
                            <Typography
                                sx={{
                                    fontWeight: 900,
                                    letterSpacing: "0.08em",
                                    fontSize: 14,
                                    color: "secondary.main",
                                    mb: 2,
                                }}
                            >
                                WYKSZTAŁCENIE
                            </Typography>

                            <Stack spacing={2}>
                                <Box>
                                    <Typography sx={{fontWeight: 700}}>
                                        Szkoła Główna Służby Pożarniczej
                                    </Typography>
                                    <Typography color="text.secondary">
                                        Magister inżynier – Inżynieria Bezpieczeństwa Pożarowego
                                    </Typography>
                                </Box>

                                <Box>
                                    <Typography sx={{fontWeight: 700}}>
                                        Główny Instytut Górnictwa
                                    </Typography>
                                    <Typography color="text.secondary">
                                        Studia podyplomowe – Bezpieczeństwo techniczne w przestrzeniach
                                        zagrożonych wybuchem
                                    </Typography>
                                </Box>

                                <Box>
                                    <Typography sx={{fontWeight: 700}}>
                                        Wyższa Szkoła Biznesu i Nauk o Zdrowiu
                                    </Typography>
                                    <Typography color="text.secondary">
                                        Studia podyplomowe – Bezpieczeństwo i higiena pracy
                                    </Typography>
                                </Box>
                            </Stack>
                        </Box>


                        {/* UPRAWNIENIA */}
                        <Box>
                            <Typography
                                sx={{
                                    fontWeight: 900,
                                    letterSpacing: "0.08em",
                                    fontSize: 14,
                                    color: "secondary.main",
                                    mb: 2,
                                }}
                            >
                                UPRAWNIENIA I CERTYFIKACJA
                            </Typography>

                            <Stack spacing={2}>
                                <Box display="flex" gap={1.5}>
                                    <Box
                                        sx={{
                                            width: 8,
                                            height: 8,
                                            borderRadius: "50%",
                                            bgcolor: "secondary.main",
                                            mt: "8px",
                                            flexShrink: 0,
                                        }}
                                    />
                                    <Typography color="text.secondary">
                                        Rzeczoznawca do spraw zabezpieczeń przeciwpożarowych
                                        <br/>
                                        <b>nr upr. 810/2025</b>
                                    </Typography>
                                </Box>

                                <Box display="flex" gap={1.5}>
                                    <Box
                                        sx={{
                                            width: 8,
                                            height: 8,
                                            borderRadius: "50%",
                                            bgcolor: "secondary.main",
                                            mt: "8px",
                                            flexShrink: 0,
                                        }}
                                    />
                                    <Typography color="text.secondary">
                                        Menedżer ds. bezpieczeństwa technicznego w atmosferach
                                        potencjalnie wybuchowych (MEx)
                                        <br/>
                                        <b>certyfikat nr Ex/0195/2025</b>
                                    </Typography>
                                </Box>
                            </Stack>
                        </Box>
                    </Stack>
                </Grid>

                {/* PRAWA KOLUMNA – opcjonalna */}

            </Grid>
        </Container>


        {/* KONTAKT */}
        <Container id="kontakt" sx={{maxWidth: "1100px !important", pb: 10}}>
            <Card sx={{overflow: "hidden"}}>
                <Box
                    sx={{
                        width: "100%",
                        minHeight: 320,
                        p: {xs: 3, md: 5},
                        color: "white",
                        backgroundImage:
                            "linear-gradient(140deg, rgba(14,19,32,0.92), rgba(14,19,32,0.70))",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        mt: {md: -2},
                    }}
                >
                    <Typography sx={{fontWeight: 900, fontSize: 24, mb: 1}}>
                        Kontakt
                    </Typography>

                    <Typography sx={{color: "rgba(255,255,255,0.80)", mb: 3}}>
                        Mariola WENEK
                    </Typography>

                    <Stack spacing={1} sx={{color: "rgba(255,255,255,0.85)"}}>
                        <Typography><b>Adres:</b> Osuchy 23</Typography>
                        <Typography><b>E-mail:</b> mariolawenek@gmail.pl</Typography>
                        <Typography><b>Tel:</b> +48 664 663 257</Typography>
                    </Stack>

                    <Box sx={{mt: 4}}>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            onClick={() => (window.location.href = "tel:+48664663257")}
                            sx={{color: "#0e1320"}}
                        >
                            Zadzwoń teraz
                        </Button>
                    </Box>
                </Box>
            </Card>
        </Container>
    </ThemeProvider>);
}
