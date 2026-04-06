import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ShieldIcon from "@mui/icons-material/Shield";
import SecurityIcon from "@mui/icons-material/Security";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import DangerousIcon from "@mui/icons-material/Dangerous";
import BlockIcon from "@mui/icons-material/Block";
import Login from "./pages/Login";

/* -------- Dark Theme -------- */
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#3b82f6" },
    secondary: { main: "#8b5cf6" },
    background: {
      default: "#0a0e14",
      paper: "#111827",
    },
    success: { main: "#22c55e" },
    warning: { main: "#f59e0b" },
    error: { main: "#ef4444" },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 700 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: "none", fontWeight: 600 },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: "none" },
      },
    },
  },
});

/* -------- App Root -------- */
export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* Navbar */}
        <AppBar
          position="sticky"
          elevation={0}
          sx={{
            bgcolor: "rgba(10, 14, 20, 0.85)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ gap: 2 }}>
              <ShieldIcon sx={{ color: "primary.main", fontSize: 28 }} />
              <Typography variant="h6" sx={{ fontWeight: 700, flexGrow: { xs: 1, sm: 0 }, mr: 4 }}>
                MailSentry
              </Typography>

              <Stack direction="row" spacing={1} sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
                <Button color="inherit" href="/dashboard" sx={{ color: "grey.400" }}>
                  Dashboard
                </Button>
                <Button color="inherit" href="/analyse" sx={{ color: "grey.400" }}>
                  Analyse
                </Button>
                <Button color="inherit" href="/reports" sx={{ color: "grey.400" }}>
                  Reports
                </Button>
              </Stack>

              <Button variant="contained" size="small">
                Sign In
              </Button>
            </Toolbar>
          </Container>
        </AppBar>

        {/* Main Content */}
        <Box component="main" sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            borderTop: "1px solid",
            borderColor: "divider",
            py: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} MailSentry &mdash; Enterprise Phishing Analysis Platform
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

/* -------- Home Page -------- */
function HomePage() {
  const threatLevels = [
    { label: "Safe", color: "success", icon: <SecurityIcon />, desc: "No threats" },
    { label: "Caution", color: "warning", icon: <WarningAmberIcon />, desc: "Review needed" },
    { label: "Dangerous", color: "error", icon: <DangerousIcon />, desc: "Link defanged" },
    { label: "Critical", color: "error", icon: <BlockIcon />, desc: "Blocked & logged" },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 10, textAlign: "center" }}>
      {/* Hero */}
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
        Detect phishing.{" "}
        <Box component="span" sx={{ color: "primary.main" }}>
          Protect your team.
        </Box>
      </Typography>

      <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: "auto", mb: 5, fontWeight: 400 }}>
        MailSentry analyses emails in real time using multi-source threat intelligence.
        Neutralise dangerous links before they reach your inbox.
      </Typography>

      {/* CTA Buttons */}
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center" sx={{ mb: 8 }}>
        <Button
          variant="contained"
          size="large"
          href="/analyse"
          sx={{
            px: 4,
            py: 1.5,
            boxShadow: "0 4px 20px rgba(59, 130, 246, 0.25)",
            "&:hover": { boxShadow: "0 6px 30px rgba(59, 130, 246, 0.4)" },
          }}
        >
          Analyse an Email
        </Button>
        <Button variant="outlined" size="large" href="/dashboard" sx={{ px: 4, py: 1.5 }}>
          View Dashboard
        </Button>
      </Stack>

      {/* Threat Level Cards */}
      <Grid container spacing={2}>
        {threatLevels.map((level) => (
          <Grid size={{ xs: 6, sm: 3 }} key={level.label}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                textAlign: "center",
                border: "1px solid",
                borderColor: "divider",
                transition: "border-color 0.2s",
                "&:hover": { borderColor: "primary.main" },
              }}
            >
              <Chip
                icon={level.icon}
                label={level.label}
                color={level.color}
                variant="outlined"
                size="small"
                sx={{ mb: 1.5 }}
              />
              <Typography variant="caption" display="block" color="text.secondary">
                {level.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

/* -------- 404 Page -------- */
function NotFound() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "6rem", color: "grey.800" }}>
        404
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
        Page not found.
      </Typography>
      <Button variant="text" href="/" sx={{ textTransform: "none" }}>
        &larr; Back to Home
      </Button>
    </Container>
  );
}
