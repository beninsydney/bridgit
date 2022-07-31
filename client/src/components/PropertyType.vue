<template>
  <div>
    <h1>Property type</h1>
    <ul>
      <li>
        <button>
          <span class="text">
            Residential
          </span>
        </button>
      </li>
      <li>
        <button>
          <span class="text">
            Rural residential
          </span>
        </button>
      </li>
      <li>
        <button>
          <span class="text">
            Off the plan residential
          </span>
        </button>
      </li>
      <li>
        <button>
          <span class="text">
            Commercial
          </span>
        </button>
      </li>
      <li>
        <button>
          <span class="text">
            Vacant land
          </span>
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1 { font-weight: 500; font-size: 2.6rem; color: #333; font-weight: normal; margin: 0 0 2rem 0 }
ul, li { margin: 0; padding: 0 }
li { list-style-type: none; max-width: 100rem }
button { cursor: pointer; display: flex; width: 100%; text-align: left; border-radius: 0.5rem; margin: 0 0 1rem 0; border: none; padding: 1rem 2rem; background-color: #FFF; box-shadow: 0 0.5rem 1rem #CCC }
button:hover { background-color: #F5F5F5 }
button span { font-size: 1rem; color: #666; display: block }
button span.text { width: 100% }
button span.title { font-size: 2rem; color: #333; width: 100%; margin-bottom: 0.5rem }
button span.arrow { color: #000; font-size: 3rem }
</style>



