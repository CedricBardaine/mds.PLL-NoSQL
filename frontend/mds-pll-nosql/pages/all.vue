<template>
  <div>
    <div id="sendNewMsgForm">
      <form
        @submit.prevent="addMsg()"
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div class="mb-4">
          <label class=""> Name </label>
          <input
            v-model="currentName"
            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            id="field-name"
            type="text"
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Text Content
          </label>
          <textarea
            v-model="currentContent"
            class="shadow appearance-none border resize rounded-md"
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Color
          </label>
          <div class="inline-block relative w-64">
            <select
              v-model="currentColor"
              class="
                block
                appearance-none
                w-full
                bg-white
                border border-gray-400
                hover:border-gray-500
                px-4
                py-2
                pr-8
                rounded
                shadow
                leading-tight
                focus:outline-none focus:shadow-outline
              "
            >
              <option
                v-for="aColor in colors"
                :key="aColor"
                :class="`text-${aColor}-500`"
              >
                <span>
                  {{ aColor }}
                </span>
              </option>
            </select>
            <div
              class="
                pointer-events-none
                absolute
                inset-y-0
                right-0
                flex
                items-center
                px-2
                text-gray-700
              "
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>

        <button
          class="
            bg-transparent
            hover:bg-blue-500
            text-blue-700
            font-semibold
            hover:text-white
            py-2
            px-4
            border border-blue-500
            hover:border-transparent
            rounded
          "
          type="submit"
        >
          Enregistrer
        </button>
      </form>
    </div>

    <div v-for="(aMessage, index) in messages" :key="index">
      <div :class="`text-${aMessage.color}-500`">
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
      colors: ["red", "yellow", "green", "blue", "purple", "pink"],

      currentName: "",
      currentContent: "",
      currentColor: "",
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

    async addMsg() {
      this.messages.push({
        name: this.currentName,
        content: this.currentContent,
        color: this.currentColor,
      });

      // TODO: save in DB.
      const result = await this.$api.postRoute("/save-message", {
        name: this.currentName,
        content: this.currentContent,
        color: this.currentColor,
      });
      console.table(result);
      // let resp = await result.json();

      this.currentName = "";
      this.currentContent = "";
      this.currentColor = "";
    },
  },
};
</script>
