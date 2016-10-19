import React from 'react';

import Paper from 'material-ui/Paper';

export default function accountRegister() {
  const styles = {
    headline: {
      textAlign: 'center',
      fontSize: 24,
      paddingTop: 16,
      margin: '0 12px',
      fontWeight: 400,
    },
  };

  return (
    <Paper z-depth={1}>
      <h2 style={styles.headline}>Login</h2>
      <p>
        This is the login tab
      </p>
    </Paper>
  );
}
