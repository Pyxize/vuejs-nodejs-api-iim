<template>
  <Navbar/>
  <div class="space">
    <Renderer ref="renderer"  resize="window"  auto-clear alpha :orbit-ctrl="{ autoRotate: true, enableDamping: true, dampingFactor: 0.05,  }">
      <Camera :position="{ z: 10 }" />
      <Scene >
        <AmbientLight :intensity="1" />
        <PointLight :intensity="0.75" :position="{ y: 50, z: 0 }" />
        <PointLight :intensity="0.75" :position="{ y: -50, z: 0 }" />
        <PointLight :intensity="0.75" :position="{ y: 0, z: 50 }" />
        <PointLight :intensity="0.75" :position="{ y: 0, z: -50 }" />

        <Sphere ref="mesh" :radius="2.5" :width-segments="50" :height-segments="50">
          <StandardMaterial>
            <Texture src="src/assets/textures/mars.jpeg" />
            <Texture src="src/assets/textures/mars_nomal.jpeg" name="normalMap" />
          </StandardMaterial>
        </Sphere>
      </Scene>
      <EffectComposer>
        <RenderPass />
        <UnrealBloomPass :strength="0.1" :radius="1" :threshold="0"  />
      </EffectComposer>
    </Renderer>
  </div>



</template>

<script>
import Navbar from '../layouts/Navbar.vue'
export default {
  components:{
    Navbar
  },
 mounted() {
   const renderer = this.$refs.renderer
  // const sphere = this.$refs.sphere.mesh;
 }
}
</script>

<style>
.space{
  width: 100%;
  display: block;
  background: url("src/assets/textures/space_2.jpeg") no-repeat center center;
  background-size: cover;
}

</style>
