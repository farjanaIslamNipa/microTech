<template>
  <div class="break-btn-wrapper">
    <NuxtLink :to="{name: 'become-a-member'}" class="break-btn">
      {{ this.text }}
    </NuxtLink>
  </div>
</template>

<script>
  export default {
    name: 'OutlineBreakBtn',
    props:['text']
  }
</script>

<style scoped>
.break-btn-wrapper{
  display: inline-block;
}
.break-btn {
  position: relative;
  color: var(--secondaryColor);
  font-size: 18px;
  font-weight: 600;
  text-transform: capitalize;
  text-decoration: none;
  border: 0.2em solid var(--secondaryColor);
  border-radius: 30px;
  padding: 12px 50px;
}
.break-btn::before{
  content: "";
    display: block;
    position: absolute;
    width: 8%;
    background: white;
    height: 0.2em;
    right: 20%;
    top: -3px;
    transform: skewX(-45deg);
    -webkit-transition: all 0.5s cubic-bezier(0.86, 0, 0.07, 1);
    transition: all 0.5s cubic-bezier(0.86, 0, 0.07, 1);
}
.break-btn::after{
  content: "";
    display: block;
    position: absolute;
    width: 8%;
    background: white;
    height: 0.2em;
    left: 20%;
    bottom: -3px;
    transform: skewX(45deg);
    -webkit-transition: all 0.5 cubic-bezier(0.86, 0, 0.07, 1);
    transition: all 0.5s cubic-bezier(0.86, 0, 0.07, 1);
}
.break-btn:hover::before{
  right: 75%;
}
.break-btn:hover::after{
  left: 75%;
}
</style>
