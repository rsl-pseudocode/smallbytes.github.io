import "./App.css";
import {
  Container,
  Grid,
  IconButton,
  Typography,
  Box,
  Divider,
  Button,
} from "@mui/material";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LaunchIcon from "@mui/icons-material/Launch";
import ImageComponent from "./components/ImageComponent";
import SkillComponent from "./components/SkillComponent";

let theme = createTheme({
  palette: {
    primary: {
      light: "#171717",
      main: "#161616",
      dark: "#121212",
      contrastText: "#fff",
    },
    secondary: {
      light: "#a0a0a0",
      main: "#cf8e00",
      dark: "#b27900",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    h1: {
      fontFamily: "'Raleway', sans-serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Raleway', sans-serif",
      fontWeight: 600,
    },
    h3: {
      fontFamily: "'Raleway', sans-serif",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "'Raleway', sans-serif",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "'Raleway', sans-serif",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "'Raleway', sans-serif",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.15)",
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <header>
          <Box
            sx={{
              position: "fixed",
              top: 0,
              right: 0,
              zIndex: 10,
              background: "rgba(22, 22, 22, 0.7)",
              backdropFilter: "blur(1px)",
              borderBottomLeftRadius: "12px",
              padding: "8px 0",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Grid container justifyContent="flex-end" spacing={1}>
              <Grid item>
                <IconButton
                  aria-label="Connect with Robert on LinkedIn"
                  href="https://www.linkedin.com/in/robert-sorman-lundgren/"
                  sx={{ color: "#0077b5" }}
                  className="pulse"
                >
                  <LinkedInIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  aria-label="Email Small Bytes"
                  href="mailto:hello@smallbytes.se"
                  sx={{ color: "#cf8e00", paddingRight: 2 }}
                  className="pulse"
                >
                  <EmailIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </header>

        <main>
          <Grid
            container
            component="section"
            justifyContent="center"
            spacing={3}
            id="intro"
            sx={{
              pt: 4,

              scrollMarginTop: "2rem",
            }}
          >
            <Grid item xs={12} display="flex" justifyContent="center">
              <Box className="profile-container" sx={{ mb: 3, mt: 3 }}>
                <ImageComponent imageUrl="./IMG_profile.jpg" />
              </Box>
            </Grid>

            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Typography
                variant="h1"
                className="gradient-text"
                sx={{
                  fontSize: { xs: "2.2rem", sm: "2.8rem" },
                  mb: 1,
                  fontWeight: "bold",
                }}
              >
                Hi, I'm Robert
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  color: theme.palette.primary.contrastText,
                  fontSize: { xs: "1.5rem", sm: "1.75rem" },
                }}
              >
                A freelance full stack engineer based in Sweden
              </Typography>
            </Grid>

            <Grid item xs={12} sm={8} md={7} sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  p: 1,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "#a0a0a0",
                    fontSize: "1.05rem",
                    mb: 2,
                    lineHeight: 1.6,
                  }}
                >
                  With over 11 years as a developer I still truly enjoy learning
                  new things every day. I like to create effective, reliable and
                  efficient applications. <br /> I'm experienced in both
                  front-end and back-end development, with my main focus on
                  technologies like .Net, Blazor and React.
                </Typography>

                <Divider
                  sx={{ my: 2, backgroundColor: "rgba(207, 142, 0, 0.3)" }}
                />

                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                  <Button
                    variant="contained"
                    startIcon={<EmailIcon />}
                    href="mailto:hello@smallbytes.se"
                    sx={{
                      backgroundColor: "#cf8e00",
                      color: "#ffffff",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#ffb224",
                        color: "#ffffff",
                      },
                    }}
                  >
                    Contact Me
                  </Button>
                </Box>

                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.secondary.light,
                    mt: 2,
                    fontStyle: "italic",
                  }}
                >
                  Collaboration is key.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sx={{ marginTop: 2 }} id="projects">
              <Typography
                variant="h3"
                className="gradient-text"
                sx={{
                  fontSize: "1.75rem",
                  fontWeight: "bold",
                  textAlign: "center",
                  mb: 1,
                  paddingTop: "1rem",
                  position: "relative",
                  display: "inline-block",
                  width: "100%",
                }}
              >
                My Products
                <Box
                  sx={{
                    position: "absolute",
                    height: "3px",
                    width: "80px",
                    background: "linear-gradient(90deg, #cf8e00, transparent)",
                    bottom: "-10px",
                    left: "calc(50% - 40px)",
                    borderRadius: "2px",
                  }}
                />
              </Typography>
            </Grid>

            <Grid container spacing={3} sx={{ mt: 3, mb: 4 }}>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    p: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h5"
                    className="gradient-text"
                    sx={{
                      mb: 2,
                      fontWeight: "bold",
                      color: theme.palette.primary.contrastText,
                    }}
                  >
                    Runivers.se
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#a0a0a0",
                      mb: 3,
                      flexGrow: 1,
                      lineHeight: 1.6,
                    }}
                  >
                    A platform for Swedish runners to find their next race and
                    read about other runners' experiences. Features running
                    events, race reviews, it aim's to be a community for running
                    enthusiasts in Sweden.
                  </Typography>

                  <Button
                    variant="outlined"
                    endIcon={<LaunchIcon />}
                    href="https://www.runiverse.se"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      alignSelf: "flex-start",
                      borderColor: "#cf8e00",
                      color: "#cf8e00",
                      "&:hover": {
                        borderColor: "#ffb224",
                        color: "#ffb224",
                        backgroundColor: "rgba(207, 142, 0, 0.08)",
                      },
                    }}
                  >
                    Visit Website
                  </Button>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    p: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h5"
                    className="gradient-text"
                    sx={{
                      mb: 2,
                      fontWeight: "bold",
                      color: theme.palette.primary.contrastText,
                    }}
                  >
                    Glommig.se
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#a0a0a0",
                      mb: 3,
                      flexGrow: 1,
                      lineHeight: 1.6,
                    }}
                  >
                    "Glöm mig" - A specialized service that helps individuals
                    exercise their right to be forgotten under GDPR.
                    Streamlining the process of identifying organizations and
                    companies and assist with data deletion requests.
                  </Typography>

                  <Button
                    variant="outlined"
                    endIcon={<LaunchIcon />}
                    href="https://glommig.se"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      alignSelf: "flex-start",
                      borderColor: "#cf8e00",
                      color: "#cf8e00",
                      "&:hover": {
                        borderColor: "#ffb224",
                        color: "#ffb224",
                        backgroundColor: "rgba(207, 142, 0, 0.08)",
                      },
                    }}
                  >
                    Visit Website
                  </Button>
                </Box>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",

                scrollMarginTop: "2rem",
              }}
              id="skills"
            >
              <SkillComponent theme={theme} />
            </Grid>
          </Grid>
        </main>

        <footer
          style={{
            textAlign: "center",
          }}
        >
          <Typography variant="body2" sx={{ color: "#a0a0a0" }}>
            &copy; {new Date().getFullYear()} Small Bytes. All rights reserved.
          </Typography>
        </footer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
