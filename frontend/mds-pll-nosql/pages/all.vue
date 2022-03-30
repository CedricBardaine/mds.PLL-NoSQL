<template>
  <div>
    <div>That's where all the messages are shown.</div>

    <hr />

    <div v-for="(aMessage, index) in messages" :key="index">
      {{ aMessage.content }}
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",

  data() {
    return {
      messages: [],
    };
  },

  mounted() {
    this.messages = [{ content: "hey" }];
    this.getAllMessages();
  },
  methods: {
    async getAllMessages() {
      const result = await this.$api.getRoute("/all-messages");

      this.messages = await result.json();
      console.log(this.messages);
    },
  },
};
</script>
