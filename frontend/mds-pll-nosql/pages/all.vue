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
    // fetch("/api/message-all")
    //   //   .then((resp) => resp.body)
    //   //   .then((body) => {
    //   //     console.log(
    //   //       body
    //   //         .getReader()
    //   //         .read()
    //   //         .then((resp) => {
    //   //           // console.log(resp.value);
    //   //           console.log(new TextDecoder().decode(resp.value));
    //   //         })
    //   //     );
    //   //   });

    //   .then((resp) => {
    //     console.log(resp);
    //   });

    // this.getAllMessages();
    this.sayGoodbye();
  },
  methods: {
    // async getAllMessages() {
    //       //

    //       const result = await this.$api.getRoute("message-all");
    //       console.log("result", result);
    //       // this.putGreeting((await result.json()).date);
    //     },

    //     async sayGoodbye() {
    //       const result = await fetch("/api/message-all");
    //       //   const result = await this.$api.getDate();
    //       console.log(result);
    //     },

    async sayGoodbye() {
      const result = await this.$api.getDate();
      //   this.putGreeting((await result.json()).date);

      console.log((await result.json()).date);
    },
  },
};
</script>
