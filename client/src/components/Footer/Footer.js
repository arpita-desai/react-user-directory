import React from "react";

const styles = {
  footer: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    textAlign: "center",
    background: "#9a74db",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px"
  }
};

function Footer() {
  return (
    <footer>
      <div style={styles.footer}>
        © 2020 Copyright:<strong>Arpita</strong>
      </div>
    </footer>
  );
}

export default Footer;
