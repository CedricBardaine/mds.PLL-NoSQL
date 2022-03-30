<template>
  <div class="w-full max-w-xs">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Name
        </label>
        <input
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
          id="username"
          type="text"
          placeholder="Username"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Text Content
        </label>
        <textarea
          class="shadow appearance-none border resize rounded-md"
        ></textarea>
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Choisir une couleur
        </label>
        <div class="inline-block relative w-64">
          <select
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
            <option>Yellow</option>
            <option>Red</option>
            <option>Blue</option>
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
      >
        Enregistrer
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "home",
  data: {
    items: [{ couleur: jaune }, { couleur: rouge }, { couleur: bleu }],
  },
};
</script>
<style scoped>
</style>