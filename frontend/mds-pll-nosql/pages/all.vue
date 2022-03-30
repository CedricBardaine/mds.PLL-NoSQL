<template>
  <div>
    <div v-for="(aMessage, index) in messages" :key="index">
      <div :class="'text-' + aMessage.color + '-500'">
        {{ aMessage.name }} : <br />
        {{ aMessage.content }}
      </div>

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
    },
  },
};
</script>
