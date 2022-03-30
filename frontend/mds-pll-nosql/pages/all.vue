<template>
  <div>
    <div>That's where all the messages are shown.</div>

    <div>
      {{ messages }}
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
    this.messages = "hey";
    this.getAllMessages();
  },
  methods: {
    async getAllMessages() {
      const result = await this.$api.getRoute("/all-messages");
      //   this.putGreeting((await result.json()).date);

      console.log(await result.json());
    },
  },
};
</script>
