import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Container, Typography, Button, Box } from "@mui/material";

// 🔹 Button Motion Variants
const buttonVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "left" ? -300 : direction === "right" ? 300 : 0,
    y: direction === "top" ? -300 : direction === "bottom" ? 300 : 0,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

// 🔹 Button Style
const buttonStyle = {
  display: "block",
  padding: "15px 25px",
  fontSize: "18px",
  fontWeight: "bold",
  color: "#fff",
  textDecoration: "none",
  background: "linear-gradient(45deg, #ff007f, #ffcc00)",
  borderRadius: "10px",
  boxShadow: "0px 0px 10px rgba(255, 0, 127, 0.8)",
  textTransform: "uppercase",
};

// 🔹 Explore Page Component
const Explore = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #002f4b, #000)",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 🌟 Welcome Message */}
      <Typography variant="h3" sx={{ mb: 2, fontWeight: "bold", color: "#00ffff" }}>
        Welcome to the Digital Mall 🏬
      </Typography>

      {/* 🧑 Simple Cartoon Character */}
      <Box
        sx={{
          width: "150px",
          height: "150px",
          background: "url('/cartoon-man.png') no-repeat center/cover",
        }}
      ></Box>

      {/* 🚀 Animated Buttons */}
      <motion.div variants={buttonVariants} initial="hidden" animate="visible" custom="top" style={{ position: "absolute", top: "15%", left: "10%" }}>
        <Button component={Link} to="/" sx={buttonStyle}>
          🏠 Home
        </Button>
      </motion.div>

      <motion.div variants={buttonVariants} initial="hidden" animate="visible" custom="right" style={{ position: "absolute", top: "20%", right: "10%" }}>
        <Button component={Link} to="/shops" sx={buttonStyle}>
          🏪 Shops
        </Button>
      </motion.div>

      <motion.div variants={buttonVariants} initial="hidden" animate="visible" custom="left" style={{ position: "absolute", bottom: "20%", left: "10%" }}>
        <Button component={Link} to="/movies" sx={buttonStyle}>
          🎥 Movies
        </Button>
      </motion.div>

      <motion.div variants={buttonVariants} initial="hidden" animate="visible" custom="bottom" style={{ position: "absolute", bottom: "15%", right: "10%" }}>
        <Button component={Link} to="/games" sx={buttonStyle}>
          🎮 Games
        </Button>
      </motion.div>
    </Container>
  );
};

export default Explore;
