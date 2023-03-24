<template>
    <v-text-field v-model="inputValue" label="Filter podcast ..." />
  </template>
  <script>
  export default {
    data() {
      return {
        inputValue: "",
      };
    },
  };
  </script>