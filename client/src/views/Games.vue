<template>
    <div>
      <b-jumbotron >
        <b-container >

         <navagator/>
        <h1>Games</h1>

    <template v-slot:header>BootstrapVue</template>

    <template v-slot:lead></template>
    <div>
  <b-img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170828%2Fab4eaea5e401470abb0a0458354221da.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1635585744&t=cab9f967fe2e35f03de379e27720e4fd" fluid alt="Responsive image"></b-img>
    </div>

  <b-row>
    <b-col><b-button variant="primary" href="#">Another card</b-button></b-col>
    <b-col><b-button variant="success" href="#">Stop taking cards</b-button></b-col>
    <b-col><b-button variant="danger" href="#">Leave the game</b-button></b-col>
  </b-row>

    </b-container >

  </b-jumbotron>
</div>
</template>

<script>
import navagator from '../components/navagator.vue'
export default {
  components: { navagator }
}
</script>
