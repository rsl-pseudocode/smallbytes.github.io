import "./App.css";
import { Container, Grid, IconButton, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ImageComponent from "./components/ImageComponent";
import SkillComponent from "./components/SkillComponent";

const theme = createTheme({
  palette: {
    primary: {
      light: "#171717",
      main: "#212121",
      dark: "#252c21",
      contrastText: "#fff",
    },
    secondary: {
      light: "#697070",
      main: "#162121",
      dark: "#0f1717",
      contrastText: "#000",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <header>
          <div style={{ position: "fixed", top: 0, right: 0 }}>
            <Grid container justifyContent="flex-end" spacing={1}>
              <Grid item>
                <IconButton
                  aria-label="Connect with Robert on LinkedIn"
                  href="https://www.linkedin.com/in/robert-sorman-lundgren/"
                  sx={{ color: theme.palette.secondary.light }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  aria-label="Email Small Bytes"
                  href="mailto:hello@smallbytes.se"
                  sx={{ color: theme.palette.secondary.light, paddingRight: 4 }}
                >
                  <EmailIcon />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        </header>
        <main>
          <Grid
            container
            component="section"
            justifyContent="center"
            spacing={2}
          >
            <Grid item>
              <ImageComponent imageUrl="./IMG_profile.jpg" />
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h1"
                sx={{
                  color: theme.palette.primary.contrastText,
                  fontSize: "2.5rem",
                  mb: 1,
                }}
              >
                Hi, I'm Robert
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h2"
                sx={{
                  color: theme.palette.primary.contrastText,
                  fontSize: "1.75rem",
                }}
              >
                A freelance full stack engineer based in Sweden
              </Typography>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.secondary.light,
                  textAlign: "left",
                }}
              >
                With over 11 years as a developer I still truly enjoy learning
                new things every day. I like to create effective, reliable and
                efficient applications. I'm experienced in both front-end and
                back-end development, with my main focus on technologies like
                .Net, Blazor and React.
              </Typography>
            </Grid>
            <Grid item xs={11} sm={6}>
              <Typography
                variant="body1"
                sx={{ color: theme.palette.secondary.light }}
              >
                <strong>
                  <a href="mailto:hello@smallbytes.se">Reach out </a>
                </strong>
                if you got a new thing going or need an extra hand.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.secondary.light }}
              >
                Collaboration is key.
              </Typography>
            </Grid>

            <Grid item xs={12} sx={{ marginTop: 6 }}>
              <Typography
                variant="h3"
                sx={{
                  color: theme.palette.primary.contrastText,
                  fontSize: "1.75rem",
                }}
              >
                My Products
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4} sx={{ marginTop: 2 }}>
              <Typography
                variant="h5"
                sx={{ color: theme.palette.primary.contrastText }}
              >
                <a
                  href="https://www.runiverse.se"
                  rel="noopener noreferrer"
                  aria-label="Runivers - Swedish running community"
                  title="Find your next race at Runivers.se"
                >
                  Runivers.se
                </a>
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: theme.palette.secondary.light }}
              >
                A platform for Swedish runners to find their next race and read
                about other runners' experiences. Features running events, race
                reviews, it aim's to be a community for running enthusiasts in
                Sweden.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4} sx={{ marginTop: 2 }}>
              <Typography
                variant="h5"
                sx={{ color: theme.palette.primary.contrastText }}
              >
                <a
                  href="https://glommig.se"
                  rel="noopener noreferrer"
                  aria-label="Glöm Mig - GDPR right to be forgotten service"
                  title="Exercise your right to be forgotten with Glommig.se"
                >
                  Glommig.se
                </a>
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: theme.palette.secondary.light }}
              >
                "Glöm mig" - A specialized service that helps individuals
                exercise their right to be forgotten under GDPR. Streamlining
                the process of identifying organizations and companies and
                assist with data deletion requests.
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: 4,
              }}
            >
              <SkillComponent theme={theme} />
            </Grid>
          </Grid>
        </main>
        <footer
          style={{
            marginTop: "3rem",
            paddingBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: theme.palette.secondary.light }}
          >
            &copy; {new Date().getFullYear()} Small Bytes. All rights reserved.
          </Typography>
        </footer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
