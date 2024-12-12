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
        <div style={{ position: "fixed", top: 0, right: 0 }}>
          <Grid container justifyContent="flex-end" spacing={1}>
            <Grid item>
              <IconButton
                aria-label="linkedin"
                href="https://www.linkedin.com/in/robert-sorman-lundgren/"
                sx={{ color: theme.palette.secondary.light }}
              >
                <LinkedInIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                aria-label="email"
                href="mailto:hello@smallbytes.se"
                sx={{ color: theme.palette.secondary.light, paddingRight: 4 }}
              >
                <EmailIcon />
              </IconButton>
            </Grid>
          </Grid>
        </div>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <ImageComponent imageUrl="./IMG_profile.jpg" />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              sx={{ color: theme.palette.primary.contrastText }}
            >
              Hi, I'm Robert
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{ color: theme.palette.primary.contrastText }}
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
              With over 10 years as a developer I still enjoy learning new things
              every day. I enjoy creating effective, efficient and reliable
              solutions. Experienced in both front-end and back-end development,
              with a main focus on technologies like .Net, Blazor and React.
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
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <SkillComponent theme={theme} />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
